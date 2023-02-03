import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
  wishList: any = []
  errMessage: string = ''


  constructor(private api: ApiService) { }
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
      alert(result.message)
      window.location.reload();
    },
      (result: any) => {
        alert(result.error.message)
      }
    )
  }

}
