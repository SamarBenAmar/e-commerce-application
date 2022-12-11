import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product-list/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  

  private productsUrl = "http://localhost:8080/products";

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.productsUrl}`);
  }

  getAllProductsPages(page: number, size : number) : Observable<Product[]> {
    let params = new HttpParams();
    params = params.append('page', page);
    params = params.append('size', size);
    return this.http.get<Product[]>(`${this.productsUrl}/pages`, {
      params
    });
  }

  /*searchProductsByCategory(category: string): Observable<Product[]> {
    let params = new HttpParams();
    params = params.append('category', category);
    return this.http.get<Product[]>(`${this.productsUrl}/category`,{
      params
    });
  }*/

  fullTextSearchProductsByCategory(category: string): Observable<Product[]> {
    let params = new HttpParams();
    params = params.append('criteria', category);
    return this.http.get<Product[]>(`${this.productsUrl}/full-text-search`,{
      params
    });
  }

  saveProduct(product : Product): Observable<Object> {
    return this.http.post<Product>(`${this.productsUrl}`,product);
  }
  
}
