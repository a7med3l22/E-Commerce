import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket.service';
import { BasketItem } from '../../shared/models/basket';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { BasketSummaryComponent } from '../../shared/basket-summary/basket-summary.component';
import { OrderTotalsComponent } from '../../shared/order-totals/order-totals.component';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
  imports:[NgIf,CommonModule,BasketSummaryComponent,OrderTotalsComponent]
})
export class BasketComponent implements OnInit {

  constructor(public basketService:BasketService) { }

  ngOnInit(): void {
  }

  incrementQuantity(item:BasketItem)
  {
    this.basketService.addItemToBasket(item);
  }

  removeItem(event:{id:number,quantity:number})
  {
    this.basketService.removeItemFromBasket(event.id,event.quantity);
  }

}