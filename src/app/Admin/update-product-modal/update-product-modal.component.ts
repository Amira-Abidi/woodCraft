import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductsService } from 'src/app/services/product.service';

@Component({
  selector: 'app-update-product-modal',
  templateUrl: './update-product-modal.component.html',
  styleUrls: ['./update-product-modal.component.css'],
})
export class UpdateProductModalComponent {

  updateProductForm: FormGroup;
  selectedFile: File | null = null;

  constructor(
    private fb: FormBuilder,
    private productService: ProductsService,
    public dialogRef: MatDialogRef<UpdateProductModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.updateProductForm = this.fb.group({
      name: [this.data.product?.name || '', []],
      price: [this.data.product?.price || '', []],
    });
  }

  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  updateProduct() {
    if (this.updateProductForm.invalid) {
      return;
    }
  
    const updatedData = {
      name: this.updateProductForm.get('name')?.value,
      price: this.updateProductForm.get('price')?.value,
    };
  
    const fileInput = document.getElementById('imageInput') as HTMLInputElement;
    const file = fileInput?.files?.[0];
  
    this.productService.updateProduct(this.data.product._id, updatedData, file).subscribe({
      next: (response) => {
        console.log('Product updated successfully:', response);
        window.location.reload();
        this.dialogRef.close(response);
      },
      error: (error) => {
        console.error('Failed to update product', error);
      }
    });
  }
  
  
  closeModal(): void {
    this.dialogRef.close();
  }

}
