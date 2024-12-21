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
  productApplications: any = '';
  productShape: any = '';
  productId: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Retrieve the productId from the route params
    this.route.paramMap.subscribe((params) => {
      this.productId = params.get('id') || ''; // Retrieve the productId from the route params
      console.log(this.productId);
      
      // If productId is present, fetch the product details
      if (this.productId) {
        this.loadProductDetails(this.productId);
      }
    });
  }

  loadProductDetails(productId: string): void {
    this.productService.getProductById(productId).subscribe({
      next: (product) => {
        // Set product details
        this.productImage = product.imageUrl || '';
        this.productCaption = product.name || '';
        this.productDescription = product.description || '';
            },
      error: (error) => {
        console.error('Failed to load product details', error);
      },
    });
  }

  itemCount = 0;
  
  productsInCart: any[] = [];

  isCartOpen = false;

  openCart() {
    this.isCartOpen = true;
  }

  addToCart(product: any) {
    this.itemCount++;
    product.addedToCart = true;
    this.productsInCart.push(product);
  }
}
