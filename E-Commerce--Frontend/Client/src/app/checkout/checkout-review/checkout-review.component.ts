import { Component, Input, OnInit } from '@angular/core';
import { BasketService } from '../../basket/basket.service';
import { ToastrService } from 'ngx-toastr';
import { CdkStepper, CdkStepperModule } from '@angular/cdk/stepper';
import { BasketSummaryComponent } from '../../shared/basket-summary/basket-summary.component';

@Component({
  selector: 'app-checkout-review',
  imports: [BasketSummaryComponent,CdkStepperModule],
  templateUrl: './checkout-review.component.html',
  styleUrl: './checkout-review.component.scss'
})
export class CheckoutReviewComponent implements OnInit {
  
  @Input() appStepper?:CdkStepper;
 
   constructor(private basketService:BasketService,private toastr:ToastrService) { }
 
   ngOnInit(): void {
   }
 
   createPaymentIntent()
   {
     this.basketService.createPaymentIntent().subscribe({
       next:()=>{
         //this.toastr.success('Payment Intent Created')
         this.appStepper?.next();
       },
       error:erorr=>{
         this.toastr.error(erorr.message)
       }
     })
   }
 
 }