import { Component, Input, input, OnInit } from '@angular/core';
import { Product } from '../../shared/models/product';
import { CommonModule, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-item',
  imports: [NgIf,CommonModule,RouterLink],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent implements OnInit{
  @Input() product?:Product;
  ngOnInit(): void {
  }

}
