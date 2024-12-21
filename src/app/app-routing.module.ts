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
import { ProductListAdminComponent } from './Admin/product-list-admin/product-list-admin.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'header', component: HeaderComponent },
  {path: 'products', component: ProductsComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'AddProduct', component: AddProductComponent },
  { path: 'productList', component: ProductListComponent },
  { path: 'ProductListAdminComponent', component: ProductListAdminComponent },
  { path: 'details/:productName', component: DetailsComponent },
  { path: 'product/:id', component: DetailsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
