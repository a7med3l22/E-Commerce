import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BasketItem } from '../models/basket';
import { BasketService } from '../../basket/basket.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-basket-summary',
  templateUrl: './basket-summary.component.html',
  styleUrls: ['./basket-summary.component.scss'],
  imports:[NgIf,NgFor,RouterLink,CommonModule]
})
export class BasketSummaryComponent implements OnInit {
 @Output() addItem = new EventEmitter<BasketItem>();
 @Output() removeItem = new EventEmitter<{id:number,quantity:number}>();

 @Input() isBasket= true;
  constructor(public basketService:BasketService) { }

  ngOnInit(): void {
  }

  addBasketItem(item:BasketItem)
  {
    this.addItem.emit(item);
  }

  removeBasketItem(id:number,quantity=1)
  {
    this.removeItem.emit({id,quantity});
  }

}