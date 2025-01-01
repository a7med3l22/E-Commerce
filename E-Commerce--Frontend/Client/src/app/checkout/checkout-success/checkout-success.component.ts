import { Component, OnInit } from '@angular/core';
import { Order } from '../../shared/models/order';
import { Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { CdkStepperModule } from '@angular/cdk/stepper';

@Component({
  selector: 'app-checkout-success',
  imports: [NgIf,RouterLink,CdkStepperModule],
  templateUrl: './checkout-success.component.html',
  styleUrl: './checkout-success.component.scss'
})
export class CheckoutSuccessComponent implements OnInit {
  order?:Order;
    constructor(private router:Router) {
      const navigation = this.router.getCurrentNavigation();
      this.order=navigation?.extras?.state as Order
     }
  
    ngOnInit(): void {
    }
  
  }