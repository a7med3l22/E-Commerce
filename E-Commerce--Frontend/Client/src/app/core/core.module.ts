import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { BreadcrumbComponent } from 'xng-breadcrumb';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    NgxSpinnerModule,
    BreadcrumbComponent,
    CommonModule,
    CoreRoutingModule,
    RouterModule,
    ToastrModule.forRoot(
{
  positionClass:'toast-bottom-right',
  preventDuplicates:true
}
    )
  ],
  exports:[NgxSpinnerModule]
})
export class CoreModule { }
