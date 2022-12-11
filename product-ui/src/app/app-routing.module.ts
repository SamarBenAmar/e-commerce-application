import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product-list/product.component';
import { SearchProductListComponent } from './search-product-list/search-product-list.component';



const routes: Routes = [
  
  {path:'', component: HomeComponent },
  { path: 'search-product-list/:category', component: SearchProductListComponent },
  { path: 'home/:page', component: HomeComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
