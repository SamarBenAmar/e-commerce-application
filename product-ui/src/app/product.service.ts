import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsUrl = "http://localhost:8080/products";
  private category = "";

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.productsUrl}`);
  }

  searchProductsByCategory(category: string): Observable<Product[]> {
    this.category = category;
    return this.http.get<Product[]>(`${this.productsUrl}/category/${this.category}`);
  }

  saveProduct(product : Product): Observable<Object> {
    return this.http.post<Product>(`${this.productsUrl}`,product);
  }

  
}
