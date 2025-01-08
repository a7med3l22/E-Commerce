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
import { AccountService } from './account/account.service';

@Component({
  selector: 'app-root',
  imports: [NgxSpinnerModule,CommonModule, NavBarComponent, RouterOutlet, SectionHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  constructor(private http:HttpClient,private basketService:BasketService,private accountService:AccountService) {

   }
  products: Product[] = [];

  ngOnInit(): void {
    this.http.get<pagination<Product[]>>('https://localhost:44395/api/product?pageSize=50').subscribe({
      next: response => this.products = response.data,
      error: error => console.log(error), 
      complete: () => {
        console.log('request completed');
        console.log('extra statment');
      }
    })
    const basketId= localStorage.getItem("basket_Id");
    if(basketId) this.basketService.getBasket(basketId);
    this.loadCurrentUser();
  }
  title = 'Shopping';

  loadCurrentUser()
  {
    const token= localStorage.getItem('token');
    this.accountService.loadCurrentUser(token).subscribe();
  }
}
