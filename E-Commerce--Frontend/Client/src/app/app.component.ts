import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { Product } from './shared/models/product';
import { pagination } from './shared/models/paging';
import { ShopComponent } from './shop/shop/shop.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [NavBarComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Store Application';
  constructor(private http: HttpClient) {}
  products:any[]=[]
  ngOnInit(): void {
    this.http.get<pagination<Product[]>>('https://localhost:44395/api/Product?pagesize=50').subscribe({
     next:(response)=>{
      console.log(response);
      this.products=response.data
     }
    ,
     error:error=>console.log(error),
     complete:()=>
     {
      console.log("request completed")
      console.log("extra statments")
     }
    });
  }
}
