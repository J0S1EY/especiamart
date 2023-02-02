import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { ApiService } from '../products/api.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],


})
export class HeaderComponent implements OnInit {
  
  constructor(private api: ApiService) { }

  ngOnInit(): void { }

  search(event: any) {
    let searchKey = event.target.value
    this.api.searchName.next(searchKey)
  }
}
