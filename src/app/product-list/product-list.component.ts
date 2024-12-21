import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../services/product.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  itemCount = 0;
  
  productsInCart: any[] = [];

  isCartOpen = false;
  
  products: any[] = [];

  private selectedProductSource = new BehaviorSubject<any>(null);
  selectedProduct$ = this.selectedProductSource.asObservable();

    setSelectedProduct(product: any): void {
      this.selectedProductSource.next(product);
    }

    getSelectedProduct(): any {
      return this.selectedProductSource.getValue();
    }

  constructor(private productService: ProductsService, private router: Router) {}

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

  openCart() {
    this.isCartOpen = true;
  }

  addToCart(product: any) {
    this.itemCount++;
    product.addedToCart = true;
    this.productsInCart.push(product);
  }

  goToDetails(productId: string): void {
    const product = this.products.find(p => p._id === productId);
    if (product) {
      this.setSelectedProduct(product);
      this.router.navigate(['/product', productId]);
    }
  
  }
}
