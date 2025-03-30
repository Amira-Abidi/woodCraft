import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = 'http://localhost:3001/products';

  constructor(private http: HttpClient) {}

  createProduct(product: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, product);
  }

  uploadImage(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', file);
    return this.http.post<any>(`${this.apiUrl}/upload`, formData);
  }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  deleteProduct(id: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  updateProduct(id: string, productData: any, file?: File): Observable<any> {
    const formData = new FormData();
    formData.append('name', productData.name);
    formData.append('description', productData.description)
    formData.append('price', productData.price);
    formData.append('availability', productData.availability)
    formData.append('material', productData.material)
    formData.append('color', productData.color)
    formData.append('form', productData.form)
    formData.append('productType', productData.productType)
    formData.append('dimension', productData.dimension)

  
    if (file) {
      formData.append('image', file);
    }
  
    return this.http.put(`${this.apiUrl}/${id}`, formData);
  }
  
  
  getProductById(productId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${productId}`);
  }


}
