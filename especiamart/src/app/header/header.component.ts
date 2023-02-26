import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { ApiService } from '../products/api.service';
import { CartService } from '../products/cart service/cart.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],


})
export class HeaderComponent implements OnInit {
  cartCount: any = 0

  constructor(private api: ApiService, private cart: CartService) { }

  ngOnInit(): void {
    this.cart.cartItems.subscribe((result: any) => {
      if (result) {
        this.cartCount = result.length
      }

    })
  }

  search(event: any) {
    let searchKey = event.target.value
    this.api.searchName.next(searchKey)
  }
}
