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

  ngOnInit() {
    this.querySubscribe = this.route.params.subscribe((params: Params) => {
      this.category = params['category'];
      this.productService.searchProductsByCategory(this.category)
        .subscribe(data => {
          this.products = data;
        });
    });   
  }

}
