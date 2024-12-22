import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, output } from '@angular/core';
import { SharedModule } from '../shared.module';

@Component({
  selector: 'app-pager',
  imports: [NgIf,SharedModule],
  templateUrl: './pager.component.html',
  styleUrl: './pager.component.scss'
})
export class PagerComponent implements OnInit{

@Input() totalCount?:number;
@Input() pageSize?:number;
@Output() PageChanged = new EventEmitter<number>();
ngOnInit(): void {
}
onPageChanged(event:any)
{
  this.PageChanged.emit(event);
}
}
