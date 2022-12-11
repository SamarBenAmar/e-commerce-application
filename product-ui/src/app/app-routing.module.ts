import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchProductListComponent } from './search-product-list/search-product-list.component';



const routes: Routes = [
  
  {path:'', component: HomeComponent },
  { path: 'search-product-list/:criteria', component: SearchProductListComponent },
  { path: 'home', component: HomeComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
