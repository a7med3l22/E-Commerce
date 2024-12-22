import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { PagerComponent, PaginationModule } from 'ngx-bootstrap/pagination';
import { PagingHeaderComponent } from './paging-header/paging-header.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,PagingHeaderComponent,
    SharedRoutingModule,PaginationModule.forRoot()
  ],
  exports:[PaginationModule,PagingHeaderComponent,PagerComponent]
})
export class SharedModule { }
