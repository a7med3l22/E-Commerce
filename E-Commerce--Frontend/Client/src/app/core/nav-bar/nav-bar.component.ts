import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BasketItem } from '../../shared/models/basket';
import { CommonModule, NgIf } from '@angular/common';
import { BasketService } from '../../basket/basket.service';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink,RouterLinkActive,NgIf,CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit {

  constructor(public basketService:BasketService) { }

  ngOnInit(): void {
  }

  getCount(items:BasketItem[])
  {
    return items.reduce((sum,item)=>sum+item.quantity,0)
  }

}
