import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product-list/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsUrl = "http://localhost:8080/products";
  private category = "";
  searchPageSize = 3;

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.productsUrl}`);
  }

  searchProductsByCategory(category: string): Observable<Product[]> {
    let params = new HttpParams();
    params = params.append('category', category);
    return this.http.get<Product[]>(`${this.productsUrl}/category`,{
      params
    });
  }

  saveProduct(product : Product): Observable<Object> {
    return this.http.post<Product>(`${this.productsUrl}`,product);
  }

 


  
}
