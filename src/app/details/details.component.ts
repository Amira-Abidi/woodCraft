import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  productImage: string = ''; // Main product image
  productCaption: string = '';
  productDescription: string = '';
  productColor: string = '';
  productDimension: string = '';
  productMaterial: string = '';
  productType: string = '';
  productApplications: string = '';
  productShape: string = '';
  additionalImages: string[] = []; // Array to hold the additional images

  constructor(private route: ActivatedRoute, private navigationService: NavigationService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const productId = params.get('id'); // Get the product ID from the URL
      const image = this.route.snapshot.queryParamMap.get('image'); // Get the image from query params
      const caption = this.route.snapshot.queryParamMap.get('caption');
      const description = this.route.snapshot.queryParamMap.get('description');
      const color = this.route.snapshot.queryParamMap.get('color');
      const dimension = this.route.snapshot.queryParamMap.get('dimension');
      const material = this.route.snapshot.queryParamMap.get('material');
      const type = this.route.snapshot.queryParamMap.get('type');
      const applications = this.route.snapshot.queryParamMap.get('applications');
      const shape = this.route.snapshot.queryParamMap.get('shape');
      if (productId) {
        this.loadProductDetails(image, caption, description, color, dimension, material, type, applications, shape);
      }
    });
  }

  loadProductDetails(image: any, caption:any, description:any, color:any, dimension:any, material:any, type: any, applications:any, shape:any) {
    // Set the main product image and additional images based on the product ID
    this.productImage = image; // Set the main product image from query params
    this.productCaption = caption
    this.productDescription = description
    this.productColor = color
    this.productDimension = dimension
    this.productMaterial = material
    this.productType = type
    this.productApplications = applications
    this.productShape = shape

  }

 
}
