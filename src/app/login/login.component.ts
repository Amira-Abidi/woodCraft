import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password:string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {
    
  }

  onLogin() {
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        console.log('API Response:', response);
        if (response = true) {
          console.log('Login successful:', response.message);
          this.router.navigate(['/AddProduct']);
        } else {
          console.error('Login failed - API response indicates failure');
          this.errorMessage = 'Login failed: ' + (response.message || 'Unknown error');
        }
      },
      error: (err) => {
        console.error('Login failed:', err);
        this.errorMessage = err?.error?.message || 'Login failed due to server error';
      },
    });
  }
  
  
}
