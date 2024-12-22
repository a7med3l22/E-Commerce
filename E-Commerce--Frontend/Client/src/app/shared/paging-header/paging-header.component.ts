import { NgIf } from '@angular/common';
import { Component, Input, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-paging-header',
  imports: [NgIf],
  templateUrl: './paging-header.component.html',
  styleUrl: './paging-header.component.scss'
})
export class PagingHeaderComponent implements OnInit {
  @Input() pageNumber?:number;
  @Input() pageSize?:number;
  @Input() totalCount?:number;
  ngOnInit(): void {

  }

}
