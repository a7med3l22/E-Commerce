import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';
import { Order } from '../../shared/models/order';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-orders',
  imports: [NgFor,RouterLink,CommonModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent implements OnInit {
  orders:Order[]=[];
   constructor(private orderService:OrdersService) { }
 
   ngOnInit(): void {
     this.getOrders();
   }
 
   getOrders()
   {
     this.orderService.getOrdersForUser().subscribe({
       next:orders=>this.orders=orders
     })
   }
 
 }