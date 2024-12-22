import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BreadcrumbComponent, BreadcrumbItemDirective, BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-section-header',
  imports: [BreadcrumbComponent,CommonModule,BreadcrumbItemDirective],
  templateUrl: './section-header.component.html',
  styleUrl: './section-header.component.scss'
})
export class SectionHeaderComponent implements OnInit {
  constructor(public bcService:BreadcrumbService)
  {
    
  }
  ngOnInit(): void {
  }

}
