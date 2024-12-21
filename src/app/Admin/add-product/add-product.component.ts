import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  newProduct = {
    name: '',
    description: '',
    price: 0,
    material: '',
    availability: '',
    productType: '',
    color: '',
    form: '',
    application: '',
    dimension: '',
    imageFile: null as File | null
  };

  constructor(private productService: ProductsService, private route: Router) {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.newProduct.imageFile = file;
    }
  }
  async addProduct() {
    if (this.newProduct.imageFile) {
      try {
        const response = await this.productService.uploadImage(this.newProduct.imageFile).toPromise();
        console.log('Image URL:', response.url);

        const productData = {
          name: this.newProduct.name,
          description: this.newProduct.description,
          price: this.newProduct.price,
          material: this.newProduct.material,
          availability: this.newProduct.availability,
          productType: this.newProduct.productType,
          color: this.newProduct.color,
          form: this.newProduct.form,
          applicaion: this.newProduct.application,
          dimension: this.newProduct.dimension,
          imageUrl: response.url
        };

        await this.productService.createProduct(productData).toPromise();
        this.route.navigateByUrl('ProductListAdminComponent')

      } catch (error) {
        console.error('Erreur d\'upload', error);
        alert('Upload échoué.');
      }
    }
  }
}
