import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-all-spices',
  templateUrl: './all-spices.component.html',
  styleUrls: ['./all-spices.component.css']
})
export class AllSpicesComponent implements OnInit {
  allProducts: any = []

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getProducts().subscribe((data: any) => {
      this.allProducts = data.products
    })
  }
}
