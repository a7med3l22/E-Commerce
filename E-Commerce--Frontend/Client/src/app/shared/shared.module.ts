import { NgModule } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { PagerComponent, PaginationModule } from 'ngx-bootstrap/pagination';
import { PagingHeaderComponent } from './paging-header/paging-header.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { OrderTotalsComponent } from './order-totals/order-totals.component';


@NgModule({
  declarations: [],
  imports: [CarouselModule.forRoot(),
    CommonModule,PagingHeaderComponent,
    SharedRoutingModule,PaginationModule.forRoot(),
    OrderTotalsComponent
  ],
  exports:[PaginationModule,PagingHeaderComponent,PagerComponent,CarouselModule,NgIf,NgFor,OrderTotalsComponent]
})
export class SharedModule { }
