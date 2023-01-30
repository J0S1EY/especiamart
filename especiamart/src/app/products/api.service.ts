import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
// get product from back-end
getProducts(){
  return this.http.get('http://localhost:3000/products')
}

}
