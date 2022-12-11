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

  searchProduct(search: HTMLInputElement) {
    if (search.value.trim().length) {
      const url = '/search-product-list/' + search.value;
      this.router.navigate([url]);
    }
  }

}
