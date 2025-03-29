import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private apiUrl = 'http://localhost:3001/orders';

  constructor(private http: HttpClient) {}

  sendEmail(orderDetails: any): Observable<any> {
    return this.http.post(this.apiUrl, orderDetails);
  }
}
