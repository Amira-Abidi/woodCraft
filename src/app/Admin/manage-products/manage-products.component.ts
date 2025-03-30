import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/product.service';
import { UpdateProductModalComponent } from '../update-product-modal/update-product-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent {
  selectedProduct: any = {};

  products: any[] = [];

  constructor(private productService: ProductsService, private dialog: MatDialog) {}

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: data => {
        this.products = data.map(product => ({
          _id: product._doc?._id,
          name: product.name || product._doc?.name,
          price: product.price || product._doc?.price,
          availability: product.availability || product._doc?.availability,
          description: product.description || product._doc?.description,
          color: product.color || product._doc?.color,
          material: product.material || product._doc?.material,
          form: product.form || product._doc?.form,
          productType: product.productType || product._doc?.productType,
          dimension: product.dimension || product._doc?.dimension,
          imageUrl: `${product.imageUrl}`
        }));
      },
      error: error => console.error('Failed to load products', error)
    });
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

 openModal(product: any) {
  const dialogRef = this.dialog.open(UpdateProductModalComponent, {
    width: '400px',
    data: { product }
  });

  dialogRef.afterClosed().subscribe(updatedProduct => {
    if (updatedProduct) {
      console.log('Updated Product:', updatedProduct);
    }
  });

  }

}

