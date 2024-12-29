import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DeliveryMethod } from '../../shared/models/deliveryMethod';
import { BasketService } from '../../basket/basket.service';
import { CheckoutService } from '../checkout.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-checkout-delivery',
  imports: [NgIf,NgFor,ReactiveFormsModule,CommonModule],
  templateUrl: './checkout-delivery.component.html',
  styleUrl: './checkout-delivery.component.scss'
})
export class CheckoutDeliveryComponent implements OnInit {
  @Input() checkoutForm?:FormGroup;
  deliveryMethods:DeliveryMethod[]=[];
   constructor(private checkoutService:CheckoutService,private basketService:BasketService) { }
 
   ngOnInit(): void {
     this.checkoutService.getDeliveryMethods().subscribe({
       next:dm=>this.deliveryMethods=dm
     })
   }
 
   setShippingPrice(deliveryMethod:DeliveryMethod)
   {
     this.basketService.setShippingPrice(deliveryMethod);
   }
 
 }