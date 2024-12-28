import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasketRoutingModule } from './basket-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BasketComponent } from './basket/basket.component';


@NgModule({
  imports: [
    BasketComponent,
    CommonModule,
    BasketRoutingModule,
    SharedModule
  ]
})
export class BasketModule { }