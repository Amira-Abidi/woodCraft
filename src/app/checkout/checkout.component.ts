import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EmailService } from '../services/email.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  productsInCart: any[] = [];
  totalPrice: number = 0;
  isLoading = false;

  constructor(private _formBuilder: FormBuilder, private http: HttpClient, private emailService: EmailService, private router: Router) {}

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({});
    this.secondFormGroup = this._formBuilder.group({
      fullName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      location: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

    const cartData = JSON.parse(localStorage.getItem('cart') || '[]');
    this.productsInCart = cartData;
    this.totalPrice = this.productsInCart.reduce((acc, product) => acc + product.price * (product.quantity || 1), 0);
  }

confirmOrder() {
  const orderDetails = {
    user: this.secondFormGroup.value,
    products: this.productsInCart,
    totalPrice: this.totalPrice
  };

  this.isLoading = true;

  this.emailService.sendEmail(orderDetails).subscribe(
    response => {
      console.log('Email sent successfully:', response);
      this.isLoading = false;
      this.router.navigate(['/thankYou']);
      localStorage.removeItem('cart');
      this.productsInCart = [];
      this.totalPrice = 0;
      window.location.reload()
    },
    error => {
      console.error('Error sending email:', error);
      this.isLoading = false;
    }
  );
}

}
