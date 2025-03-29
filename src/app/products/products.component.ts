import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

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
}
