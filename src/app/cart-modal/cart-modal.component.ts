import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.css']
})
export class CartModalComponent {
  @Input() isOpen: boolean = false;
  productsInCart: any[] = [];

  constructor(private router: Router) {
  }

  ngOnInit() {
    const storedCart = localStorage.getItem('cart');
    this.productsInCart = storedCart ? JSON.parse(storedCart) : [];
  }

  get subtotal(): number {
    return this.productsInCart.reduce((acc, product) => acc + (product.price * (product.quantity || 1)), 0);
  }

  closeModal() {
    this.isOpen = false;
  }

  finishShopping() {
    this.router.navigate(['/checkout'], { queryParams: { cart: JSON.stringify(this.productsInCart) } });
    this.closeModal();
  }

  resetCart() {
    localStorage.removeItem('cart');
    this.productsInCart = [];
    this.closeModal();
    window.location.reload();
   
  }
}
