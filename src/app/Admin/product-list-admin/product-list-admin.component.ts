import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list-admin',
  templateUrl: './product-list-admin.component.html',
  styleUrls: ['./product-list-admin.component.css']
})
export class ProductListAdminComponent implements OnInit {

  products: any[] = [];

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: data => {
        this.products = data.map(product => ({
          _id: product._doc?._id,
          name: product.name || product._doc?.name,
          price: product.price || product._doc?.price,
          availability: product.availability || product._doc?.availability,
          description: product.description || product._doc?.description,
          material: product.material || product._doc?.material,
          imageUrl: `${product.imageUrl}`
        }));
      },
      error: error => console.error('Failed to load products', error)
    });
  }

  isCartOpen = false;
  

  openCart() {
    this.isCartOpen = true;
  }


  deleteProduct(id: any) {
    this.productService.deleteProduct(id).subscribe({
      next: () => {
        console.log('Product deleted successfully');
        window.location.reload();
      },
      error: error => console.error('Failed to delete product', error)
    });
  }

}
