import { Component, OnInit } from '@angular/core';
import { BasketService } from '../../basket/basket.service';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-order-totals',
  templateUrl: './order-totals.component.html',
  styleUrls: ['./order-totals.component.scss'],
  imports:[NgIf,CommonModule]
})  
export class OrderTotalsComponent implements OnInit {

  constructor(public basketService:BasketService) { }

  ngOnInit(): void {
    console.log("totals")
    console.log(this.basketService.basketTotalSource$)
  }

}