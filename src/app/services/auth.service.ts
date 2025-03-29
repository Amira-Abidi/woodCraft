import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3001/auth';
  private roleSubject = new BehaviorSubject<string | null>(localStorage.getItem('userRole'));
  role$ = this.roleSubject.asObservable();

  constructor(private http: HttpClient) {}


  login(email: string, password: string): Observable<any> {    
    return this.http.post<{ message: string; role: string }>(`${this.apiUrl}/login`, { email, password }).pipe(
      map((response) => {
        if (response?.role) {
          localStorage.setItem('userRole', response.role);
          this.roleSubject.next(response.role);
        }
        return response;
      })
    );
  }

  getUserRole(): string | null {
    return localStorage.getItem('userRole');
  }

  logout() {
    localStorage.removeItem('userRole');
    this.roleSubject.next(null);
  }

  getRole(): string | null {
    return localStorage.getItem('userRole');
  }
  
  
}