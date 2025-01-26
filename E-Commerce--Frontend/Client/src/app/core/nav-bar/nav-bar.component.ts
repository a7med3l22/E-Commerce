import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BasketItem } from '../../shared/models/basket';
import { CommonModule, NgIf } from '@angular/common';
import { BasketService } from '../../basket/basket.service';
import { AccountService } from '../../account/account.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink,RouterLinkActive,NgIf,CommonModule,BsDropdownModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit {

  constructor(public basketService:BasketService,public accountService:AccountService) { }

  ngOnInit(): void {
  }

  getCount(items:BasketItem[])
  {
    return items.reduce((sum,item)=>sum+item.quantity,0)
  }

}
