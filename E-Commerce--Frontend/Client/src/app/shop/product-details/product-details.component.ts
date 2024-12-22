import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
import { Product } from '../../shared/models/product';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-product-details',
  imports: [NgIf,CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})

export class ProductDetailsComponent implements OnInit {
  product?:Product;
  constructor(private shopService:ShopService,
              private activatedRoute:ActivatedRoute,
              private bcService:BreadcrumbService
  ){}
  ngOnInit(): void {
    this.loadProduct();
  }
  loadProduct()
  {
    const id=this.activatedRoute.snapshot.paramMap.get('id');
    if(id) this.shopService.getProduct(+id).subscribe(
      {
        next:product=>{
          this.product=product;
          this.bcService.set('@productDetails',product.name)
        },
        error:error=>console.error(error)
      }
    )
  }
}
