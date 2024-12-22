import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { BreadcrumbComponent } from 'xng-breadcrumb';


@NgModule({
  declarations: [],
  imports: [
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
})
export class CoreModule { }
