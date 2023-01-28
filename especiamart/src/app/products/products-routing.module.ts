import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllSpicesComponent } from './all-spices/all-spices.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products.component';
import { WishListComponent } from './wish-list/wish-list.component';

const routes: Routes = [ // for lazy load
  { path: '', component: AllSpicesComponent }, // local host:4200/products path - AllSpicesComponent
  { path: 'cart', component: CartComponent },   //local host:4200/products/cart
  { path: 'wish-list', component: WishListComponent }   //local host:4200/products/wish-list
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
