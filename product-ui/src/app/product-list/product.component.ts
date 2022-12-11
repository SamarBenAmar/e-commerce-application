import { Component, OnInit } from '@angular/core';
import {Product} from './product';
import  {ProductService} from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  products: Product[] = [];

  productsPages: any = [];

  config: any = {
    itemsPerPage: 4,
    currentPage: 1,
    totalItems: this.products.length
  };

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
    this.loadProductsPages();
  }

  loadProducts() : Product[] {
    this.productService.getAllProducts().subscribe( data => {
      this.products = data;
    }); 
    return this.products;
  }

  loadProductsPages() {
    this.productService.getAllProductsPages(this.config.currentPage, this.config.itemsPerPage).subscribe( data => {
      this.productsPages = data;
      
    }); 
    this.config.totalItems = this.products.length;
    console.log(this.config);
  }

  pageChanged(event: any){
    this.config.currentPage = event;
  }

}
