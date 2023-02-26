import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CartService } from '../cart service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  count: any = 1
  subTotal: any = 0
  grandTotal: any = 0

  cartItems: any = []

  constructor(private cartService: CartService, private api: ApiService) {

  }
  ngOnInit(): void {

    this.cartService.cartItems.subscribe((data: any) => {
      //console.log(data)
      this.cartItems = data
      // console.log(this.cartItems)
    })
    this.subTotal = this.cartService.getTotal()
    this.grandTotal=this.subTotal.toFixed(2)

  }

  countpls() {
    this.count = this.count + 1

  }
  countmns() {
    if (this.count > 0) {
      this.count = this.count - 1

    }

  }

}
