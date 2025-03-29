import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../services/product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {  
  productImage: any;
  productCaption: any;
  productDescription: any;
  productColor: any = '';
  productDimension: any = '';
  productMaterial: any = '';
  productType: any = '';
  productShape: any = '';
  productId: any;
  ProductAvailability: any = '';
  availability: string = '';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.productId = params.get('id') || '';
      console.log(this.productId);
      if (this.productId) {
        this.loadProductDetails(this.productId);
      }
    });
    }
  

  loadProductDetails(productId: string): void {
    this.productService.getProductById(productId).subscribe({
      next: (product) => {
        this.productImage = product.imageUrl || '';
        this.productCaption = product.name || '';
        this.productDescription = product.description || '';
        this.ProductAvailability = product.availability || '';
        if (this.ProductAvailability === true) {
          this.availability = 'In Stock';
        } else {
          this.availability = 'Out Of Stock';
        };
        this.productColor = product.color || '';
        this.productDimension = product.dimension || '';
        this.productMaterial = product.material || '';
        this.productType = product.productType || '';
        this.productShape = product.form || '';
            },
      error: (error) => {
        console.error('Failed to load product details', error);
      },
    });
  }
}
