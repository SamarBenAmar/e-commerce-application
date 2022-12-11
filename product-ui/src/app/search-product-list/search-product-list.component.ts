import { Product } from '../product-list/product';
import { Component, HostListener, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription, throwError } from 'rxjs';

@Component({
  selector: 'app-search-product-list',
  templateUrl: './search-product-list.component.html',
  styleUrls: ['./search-product-list.component.css']
})

export class SearchProductListComponent implements OnInit {

  constructor(private productService: ProductService, private route: ActivatedRoute) {
  }

  querySubscribe: Subscription | undefined;

  category: any = "";

  products: Array<Product> = [];

  productsPages: any = [];

  config: any = {
    itemsPerPage: 4,
    currentPage: 1,
    totalItems: this.products.length
  };

  ngOnInit() {
    this.searchProductsByCategory();
    this.searchProductsByCategoryPages();
  }

  searchProductsByCategory(){
    this.querySubscribe = this.route.params.subscribe((params: Params) => {
      this.category = params['criteria'];
      this.productService.fullTextSearchProductsByCategory(this.category)
        .subscribe(data => {
          this.products = data;
        });
    });   
  }

  searchProductsByCategoryPages(){
    this.querySubscribe = this.route.params.subscribe((params: Params) => {
      this.category = params['criteria'];
    this.productService.fullTextSearchProductsByCategoryPages(this.category, this.config.currentPage, this.config.itemsPerPage).subscribe( data => {
      this.productsPages = data;
      
    }); 
  });
    this.config.totalItems = this.products.length;
    console.log(this.config);

  }

  pageChanged(event: any){
    this.config.currentPage = event;
  }

}
