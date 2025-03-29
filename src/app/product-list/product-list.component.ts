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
  p: number = 1;
  private selectedProductSource = new BehaviorSubject<any>(null);
  selectedProduct$ = this.selectedProductSource.asObservable();

  constructor(private productService: ProductsService, private router: Router) {
  }

  loadCart() {
    const storedCart = localStorage.getItem('cart');
    this.productsInCart = storedCart ? JSON.parse(storedCart) : [];
    this.updateItemCount();
  }

  ngOnInit() {
    // Load products from service
    this.productService.getProducts().subscribe({
      next: data => {
        this.products = data.map(product => ({
          _id: product._doc?._id,
          name: product.name || product._doc?.name,
          price: product.price || product._doc?.price,
          availability: product.availability || product._doc?.availability,
          description: product.description || product._doc?.description,
          material: product.material || product._doc?.material,
          imageUrl: `${product.imageUrl}`,
          addedToCart: false // Default to false
        }));
  
        // Restore cart from localStorage and keep the tick
        const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
        storedCart.forEach((cartItem: any) => {
          const productInList = this.products.find(p => p._id === cartItem._id);
          if (productInList) {
            productInList.addedToCart = true;
          }
        });
  
        this.productsInCart = storedCart;
        this.itemCount = storedCart.length;
      },
      error: error => console.error('Failed to load products', error)
    });
  }

  addToCart(product: any) {
    // Retrieve the current cart from localStorage
    const storedCart = localStorage.getItem('cart');
    const currentCart = storedCart ? JSON.parse(storedCart) : [];
  
    // Find the product in the cart
    const existingProductIndex = currentCart.findIndex((p: any) => p._id === product._id);
  
    if (existingProductIndex !== -1) {
      // Increment the quantity if the product exists
      currentCart[existingProductIndex].quantity += 1;
    } else {
      // Add the new product with quantity 1
      const newProduct = { ...product, quantity: 1 };
      currentCart.push(newProduct);
    }
  
    // Update the productsInCart array with a new reference
    this.productsInCart = [...currentCart];
  
    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(this.productsInCart));
  
    // Update the item count
    this.updateItemCount();
  }

  updateItemCount() {
    this.itemCount = this.productsInCart.reduce((acc, p) => acc + p.quantity, 0);
    window.location.reload();
  }

  goToDetails(productId: string): void {
    const product = this.products.find(p => p._id === productId);
    if (product) {
      this.selectedProductSource.next(product);
      this.router.navigate(['/product', productId]);
    }
  }
}
