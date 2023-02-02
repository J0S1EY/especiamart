import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { AllSpicesComponent } from './all-spices/all-spices.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './pipe/search.pipe';





@NgModule({
  declarations: [
    ProductsComponent,
    AllSpicesComponent,
    WishListComponent,
    CartComponent,
    SearchPipe,
    
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule
  ]
})
export class ProductsModule { }
