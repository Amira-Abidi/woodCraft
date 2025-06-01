import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { ProductListComponent } from './product-list/product-list.component';
import { DetailsComponent } from './details/details.component';
import { CartModalComponent } from './cart-modal/cart-modal.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AddProductComponent } from './Admin/add-product/add-product.component';
import { UpdateProductModalComponent } from './Admin/update-product-modal/update-product-modal.component';
import { ManageProductsComponent } from './Admin/manage-products/manage-products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CheckoutComponent } from './checkout/checkout.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { WhatWeOfferComponent } from './what-we-offer/what-we-offer.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ProductsComponent,
    ContactComponent,
    ProductListComponent,
    DetailsComponent,
    CartModalComponent,
    LoginComponent,
    AddProductComponent,
    UpdateProductModalComponent,
    ManageProductsComponent,
    CheckoutComponent,
    ThankYouComponent,
    WhatWeOfferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    NgxPaginationModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
