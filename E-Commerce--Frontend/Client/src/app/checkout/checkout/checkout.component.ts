import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../../account/account.service';
import { BasketService } from '../../basket/basket.service';
import { StepperComponent } from '../../shared/stepper/stepper.component';
import { OrderTotalsComponent } from '../../shared/order-totals/order-totals.component';
import { CheckoutPaymentComponent } from '../checkout-payment/checkout-payment.component';
import { CheckoutAddressComponent } from '../checkout-address/checkout-address.component';
import { CheckoutReviewComponent } from '../checkout-review/checkout-review.component';
import { CheckoutDeliveryComponent } from '../checkout-delivery/checkout-delivery.component';
import { CdkStep } from '@angular/cdk/stepper';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  imports:[StepperComponent,OrderTotalsComponent,CheckoutPaymentComponent,CheckoutAddressComponent,CheckoutReviewComponent,CheckoutDeliveryComponent,CdkStep]
})
export class CheckoutComponent implements OnInit {

  checkoutForm;

  constructor(private fb: FormBuilder,
              private accountService: AccountService,
              private basketService: BasketService) {
    this.checkoutForm = this.fb.group({
      addressForm: this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        street: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zipCode: ['', Validators.required]
      }),
      deliveryForm: this.fb.group({
        deliveryMethod: ['', Validators.required]
      }),
      paymentForm: this.fb.group({
        nameOnCard: ['', Validators.required]
      })
    });
  }
  
  ngOnInit(): void {
    this.getAddressFormValues();
    this.getDeliveryMethodValue();
  }

  getAddressFormValues() {
    this.accountService.getUserAddress().subscribe({
      next: address => {
        address && this.checkoutForm.get('addressForm')?.patchValue(address);
      }
    });
  }

  getDeliveryMethodValue() {
    const basket = this.basketService.getCurrentBsketValue();
    if (basket && basket.deliveryMethodId) {
      this.checkoutForm.get('deliveryForm')?.get('deliveryMethod')?.patchValue(basket.deliveryMethodId.toString());
    }
  }
}
