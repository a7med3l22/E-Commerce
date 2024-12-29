import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../../account/account.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-checkout-address',
  imports: [NgIf,ReactiveFormsModule],
  templateUrl: './checkout-address.component.html',
  styleUrl: './checkout-address.component.scss'
})

export class CheckoutAddressComponent implements OnInit {
  @Input() checkoutForm?:FormGroup;
   constructor(private accountService:AccountService,private toastr:ToastrService) { }
 
   ngOnInit(): void {
   }
 
   saveUserAddress()
   {
     this.accountService.updateUserAddress(this.checkoutForm?.get('addressForm')?.value).subscribe({
     next:()=>{
       this.toastr.success('Address Saved');
       this.checkoutForm?.get('addressForm')?.reset(this.checkoutForm?.get('addressForm')?.value)
     }
     })
   }
 
 }
