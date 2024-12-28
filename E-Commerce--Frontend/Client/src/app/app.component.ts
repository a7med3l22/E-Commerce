import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { HttpClient } from '@angular/common/http';
import { CommonModule, NgFor } from '@angular/common';
import { Product } from './shared/models/product';
import { pagination } from './shared/models/paging';
import { ShopComponent } from './shop/shop/shop.component';
import { RouterOutlet } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  // استيراد الأنيميشن
import { BrowserModule } from '@angular/platform-browser';
import { SectionHeaderComponent } from "./core/section-header/section-header.component";
import { NgxSpinner, NgxSpinnerModule } from 'ngx-spinner';
import { BasketService } from './basket/basket.service';

@Component({
  selector: 'app-root',
  imports: [NgxSpinnerModule,CommonModule, NavBarComponent, RouterOutlet, SectionHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Store Application';
  constructor(private http: HttpClient,private basketService:BasketService) {}
  products: Product[] = [];
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
    const basketId=localStorage.getItem("basket_Id");
    if(basketId) this.basketService.getBasket(basketId);
  }
}
