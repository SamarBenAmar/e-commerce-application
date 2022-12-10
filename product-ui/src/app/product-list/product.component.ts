import { Component, OnInit } from '@angular/core';
import {Product} from './product';
import  {ProductService} from '../product.service'
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  productsByCategory: Product[] = [];
  

  form = new FormGroup({  
    category : new FormControl()
  });  

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getAllProducts().subscribe( data => {
      this.products = data;
    }); 
  }




 
  

}
