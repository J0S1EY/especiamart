import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItemsArray: any = [] // store items from wish list

  cartItems = new BehaviorSubject([]) // get cart items from wishlist component

  constructor() { }

  addTocart(product: any) {
    this.cartItemsArray.push(product)
    this.cartItems.next(this.cartItemsArray) // add to behavior subject
    //console.log(this.cartItems)
    let grndTotal = this.getTotal()
    console.log(grndTotal)


  }

  // Cart grand Total
  getTotal() {
    let grandSum = 0
    this.cartItemsArray.map((item: any) => {
      grandSum += item.price
    })
    return grandSum
  }

}

