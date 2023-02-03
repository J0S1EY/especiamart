import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  searchName = new BehaviorSubject('') // BehaviorSubject for sharing data to components

  constructor(private http: HttpClient) { }
  // get product from back-end
  getProducts() {
    return this.http.get('http://localhost:3000/products')
  }
  // add to wish list
  addWishlist(product: any) {
    const body = {
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      image: product.image,
    }
    return this.http.post('http://localhost:3000/addWish-list', body)
  }
  getWishlist() {
    return this.http.get('http://localhost:3000/wish-list')
  }

  // delete wishlist item
  deleteWitem(id: any) {
   
    return this.http.delete("http://localhost:3000/delete-wishlist-item/"+id)
  }

}
