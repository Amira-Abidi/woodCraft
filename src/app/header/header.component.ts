import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
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

  languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
  ];

  currentLanguage = 'en';


  constructor(private authService: AuthService, private router: Router) {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    this.itemCount = storedCart.length;

    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      this.currentLanguage = savedLanguage;
    }
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
