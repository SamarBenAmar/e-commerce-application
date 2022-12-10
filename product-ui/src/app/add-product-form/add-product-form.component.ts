import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from '../product-list/product';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.css']
})
export class AddProductFormComponent implements OnInit {

  constructor(private productService: ProductService, private router : Router) { }

  ngOnInit(): void {
    
  }

  myForm = new FormGroup ({
    name : new FormControl(),
    brand : new FormControl(),
    category : new FormControl(),
    price : new FormControl(),
    quantity : new FormControl(),
    pictureUrl : new FormControl(),
    description : new FormControl()
  })

  products : Product[] = [];

  product : Product = new Product('','','',0,0,'','');

  onSubmit(product: Product){
    this.productService.saveProduct(product).subscribe(data => {
      product.name = this.myForm.value.name;
      product.brand = this.myForm.value.brand;
      product.category = this.myForm.value.category;
      product.price = this.myForm.value.price;
      product.quantity = this.myForm.value.quantity;
      product.pictureUrl = this.myForm.value.pictureUrl;
      product.description = this.myForm.value.description;
      this.products.push(product);
      data = product;
      console.log(data);
    })
    console.log("Form Submitted !");
    this.router.navigate(['/home']);
  }

}
