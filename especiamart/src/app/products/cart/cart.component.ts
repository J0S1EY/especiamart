import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CartService } from '../cart service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @ViewChild('quantityInput') quantityInput: any;
  count: any = 1
  subTotal: any = 0
  grandTotal: any = 0
  coupon: any = ''
  totalAfterDiscount: any = 0


  cartItems: any = []

  constructor(private cartService: CartService, private api: ApiService, private router:Router) {

  }
  ngOnInit(): void {

    this.cartService.cartItems.subscribe((data: any) => {
      //console.log(data)
      this.cartItems = data
      // console.log(this.cartItems)

    })
    this.subTotal = this.cartService.getTotal()
    this.grandTotal = this.subTotal.toFixed(2)
    this.promoCoupon()
  }

  countpls() {
    this.count = this.count + 1
    this.promoCoupon()

  }
  countmns() {
    if (this.count > 0) {
      this.count = this.count - 1
      this.promoCoupon()
    }
  }


  // remove singile item and updating total amount
  removeItem(item: any) {
    this.cartService.removeItem(item)
    this.subTotal = this.cartService.getTotal()
    this.grandTotal = this.subTotal.toFixed(2)
    this.promoCoupon()
    this.totalAfterDiscount = 0

  }
  clearCart() {
    this.cartService.clearCart()
    this.subTotal = this.cartService.getTotal()
    this.grandTotal = this.subTotal.toFixed(2)
    this.promoCoupon()
    this.totalAfterDiscount = 0

  }

  promoCoupon() {

    switch (true) {
      case this.grandTotal > 24 && this.grandTotal < 50:
        console.log("promo");
        this.coupon = "1"
        break;
      case this.grandTotal > 49 && this.grandTotal < 60:
        console.log("5% disount");
        this.coupon = "5"
        break;
      case this.grandTotal > 59 && this.grandTotal < 75:
        console.log("10% disount");
        this.coupon = "10"
        break;
      case this.grandTotal > 74:
        console.log("15% disount");
        this.coupon = "15"
        break;
      default:
        console.log(" No coupons available");
        this.coupon = "0"
    }
  }
  discount(promo: any) {
    switch (promo) {
      case promo = 5:
        let discount5 = (this.grandTotal * promo) / 100
        let AfterDiscount5 = this.grandTotal - discount5
        this.totalAfterDiscount = AfterDiscount5.toFixed(2)
        break;
        break;
      case promo = 10:
        let discount10 = (this.grandTotal * promo) / 100
        let AfterDiscount10 = this.grandTotal - discount10
        this.totalAfterDiscount = AfterDiscount10.toFixed(2)
        break;
      case promo = 15:
        let discount15 = (this.grandTotal * promo) / 100
        let AfterDiscount15 = this.grandTotal - discount15
        this.totalAfterDiscount = AfterDiscount15.toFixed(2)
        break;
      case promo = 1:
        let discount1 = (this.grandTotal * promo) / 100
        let AfterDiscount1 = this.grandTotal - discount1
        this.totalAfterDiscount = AfterDiscount1.toFixed(2)
        break;
      default:
        this.totalAfterDiscount = 0
    }
  }

  proceed(){
    alert('Order Placed Successfilly')
    this.clearCart()
    this.router.navigateByUrl('products')
    
    
    

  }



}
