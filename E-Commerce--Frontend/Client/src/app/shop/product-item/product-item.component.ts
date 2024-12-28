import { Component, Input, OnInit } from '@angular/core';
import { BasketService } from '../../basket/basket.service';
import { Product } from '../../shared/models/product';
import { CommonModule, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
  imports:[NgIf,RouterLink,CommonModule]
})
export class ProductItemComponent implements OnInit {
  @Input() product?: Product;
  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
  }

  addItemToBasket() {
   this.product&& this.basketService.addItemToBasket(this.product)
  }

}