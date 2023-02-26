import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CartService } from '../cart service/cart.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
  wishList: any = []
  errMessage: string = ''

  constructor(private api: ApiService, private cart:CartService) { } 
  ngOnInit(): void {
    this.api.getWishlist().subscribe((result: any) => { // get data from api
      this.wishList = result.data
      // console.log(result)
    },
      (result: any) => {
        this.errMessage = result.error.message

      }
    )
  }

  // delete wishlist product
  deleteWishlist(product: any) {
    this.api.deleteWitem(product.id).subscribe((result: any) => {
      this.wishList=result.data
      alert(result.message)
     
    },
      (result: any) => {
        alert(result.error.message)
      }
    )
  }

  addtoCart(product:any){
    this.cart.addTocart(product)
    this.api.deleteWitem(product.id).subscribe((result: any) => {
      this.wishList=result.data
      alert("Item added to cart")
     
  })
}

}
