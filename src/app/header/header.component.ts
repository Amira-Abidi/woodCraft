import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { io } from 'socket.io-client';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  role: string | null = null;

  productsInCart: any[] = [];

  isCartOpen = false;

  itemCount = 0;



  constructor(private authService: AuthService, private router: Router) {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    this.itemCount = storedCart.length;
  }

  ngOnInit() {
    this.authService.role$.subscribe(role => {
      this.role = role;
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollToBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }

  openCart() {
    this.isCartOpen = !this.isCartOpen;
  
  }
  
}
