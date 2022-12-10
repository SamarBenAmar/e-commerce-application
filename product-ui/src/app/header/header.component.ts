import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product-list/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private productService :  ProductService, private router : Router) { }

  products : Product[] =[]

  ngOnInit(): void {
  }

  /*searchProductsByCategory(category: string){
    this.productService.searchProductsByCategory(category).subscribe(data => {
      this.products = data;
    })
  }*/

  searchProduct(search: string) {
    if (search.trim().length) {
      this.productService.searchProductsByCategory(search).subscribe(data => {
        this.products = data;

      })
      const url = '/search-product-list/'+search;
      this.router.navigate([url]);
      console.log("hiiii !!!")
    }
    
  }
}
