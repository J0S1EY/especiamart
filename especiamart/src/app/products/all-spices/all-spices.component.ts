import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-all-spices',
  templateUrl: './all-spices.component.html',
  styleUrls: ['./all-spices.component.css']
})
export class AllSpicesComponent implements OnInit {
  allProducts: any = []
  searchValue: string = '' // BehaviorSubject get search key from header

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getProducts().subscribe((data: any) => { // all products from api 
      this.allProducts = data.products
      console.log(data.products)
    })

    this.api.searchName.subscribe((value: any) => { // search name from header using BehaviorSubject
      this.searchValue = value
    })
  }
  // add wishlist 
  addWish(product:any){
    this.api.addWishlist(product).subscribe((result:any)=>{
      alert(result.message)
      console.log(product)
    },
    (result:any)=> {
      alert(result.error.message)
    })
  }
}
