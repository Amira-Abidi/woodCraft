import { Component } from '@angular/core';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent{

  constructor(private navigationService: NavigationService) { }

    navigateToDetailsSection(sectionId: string) {
        this.navigationService.navigateToSection(sectionId);
    }
}
