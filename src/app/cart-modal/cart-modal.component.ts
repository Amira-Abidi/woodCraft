import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.css']
})
export class CartModalComponent {
  @Input() isOpen: boolean = false;
  @Input() productsInCart: any[] = [];

  // Calculate the subtotal
  get subtotal(): number {
    return this.productsInCart.reduce((acc, product) => acc + product.price, 0);
  }

  closeModal() {
    this.isOpen = false;
  }
}
