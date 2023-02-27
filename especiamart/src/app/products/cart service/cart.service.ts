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

  // single item remove from cart
  removeItem(product: any) {
    this.cartItemsArray.map((item: any, index: any) => {
      if (product.id === item.id) {
        this.cartItemsArray.splice(index, 1)
      }
    })
    this.cartItems.next(this.cartItemsArray)
  }

  // remove all items from cart
  clearCart(){
    this.cartItemsArray=[]
    this.cartItems.next(this.cartItemsArray)
  }



}

