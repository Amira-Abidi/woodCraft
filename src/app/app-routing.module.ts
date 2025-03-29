import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { ProductListComponent } from './product-list/product-list.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { AddProductComponent } from './Admin/add-product/add-product.component';
import { ManageProductsComponent } from './Admin/manage-products/manage-products.component';
import { FormsModule } from '@angular/forms';
import { CheckoutComponent } from './checkout/checkout.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'header', component: HeaderComponent },
  {path: 'products', component: ProductsComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'AddProduct', component: AddProductComponent },
  { path: 'productList', component: ProductListComponent },
  { path: 'manageProducts', component: ManageProductsComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'thankYou', component: ThankYouComponent },
  { path: 'details/:productName', component: DetailsComponent },
  { path: 'product/:id', component: DetailsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule,
  ],
  exports: [RouterModule ]
})
export class AppRoutingModule { }
