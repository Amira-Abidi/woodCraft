import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-update-product-modal',
  templateUrl: './update-product-modal.component.html',
})
export class UpdateProductModalComponent {
  @Input() isOpen: boolean = false;

  closeModal() {
    this.isOpen = false;
  }
}
