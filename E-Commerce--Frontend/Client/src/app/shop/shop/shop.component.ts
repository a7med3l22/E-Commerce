import { Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
import { Product } from '../../shared/models/product';
import { ShopService } from '../shop.service';
import { NgFor, NgIf } from '@angular/common';
import { ProductItemComponent } from "../product-item/product-item.component";
import { Brand } from '../../shared/models/brands';
import { Type } from '../../shared/models/types';
import { PaginationComponent } from 'ngx-bootstrap/pagination';
import { ShopParams } from '../../shared/models/shopParams';
import { SharedModule } from "../../shared/shared.module";
import { PagingHeaderComponent } from "../../shared/paging-header/paging-header.component";
import { PagerComponent } from "../../shared/pager/pager.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  imports: [NgFor, NgIf, ProductItemComponent, SharedModule, PagerComponent,RouterModule]
})
export class ShopComponent implements OnInit {
  @ViewChild('searcch')searchTerms?:ElementRef;
  totalCount=0;
  products:Product[]=[];
  brands:Brand[]=[];
  types:Type[]=[];
  shopParams=new ShopParams();
  sortOptions=[
    {name:"Alphabetical",value:'name'},
    {name:"Price : Low To High",value:'priceAsc'},
    {name:"Price : High To Low",value:'priceDesc'}
  ]
  constructor(private shopService:ShopService) {}
  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();
  }
  getProducts()
  {
    this.shopService.getProducts(this.shopParams).subscribe(
      {
        next:(response)=>{
          console.log(response);
          this.products=response.data;
          this.shopParams.pageNumber=response.pageIndex;
          this.shopParams.pageSize=response.pageSize;  
          this.totalCount=response.count;
          console.log(response.count);
         }      
        ,
        error:error=>console.log(error) 
      }
     )
  }
 
  getBrands()
  {
    this.shopService.getBrands().subscribe(
      {
        next:(response)=>{
          // console.log(response);
          this.brands=[{id:0,name:'All'},...response]
         }      
        ,
        error:error=>console.log(error)
      }
     )
  }
getTypes()
{
  this.shopService.getTypes().subscribe(
    {
      next:(response)=>{
        // console.log(response);
        this.types=[{id:0,name:'All'},...response]
       }      
      ,
      error:error=>console.log(error)
    }
   )
  }
  onBrandSelected(brandId:number)
  {
    this.shopParams.brandId=brandId;
    this.getProducts();
  }
  onTypeSelected(typeId:number)
  {
    this.shopParams.typeId=typeId;
    this.shopParams.pageNumber=1;
    this.getProducts();
  }
  onSortSelected(event:any)
  {
    this.shopParams.sort=event.target.value;
    this.shopParams.pageNumber=1;
    this.getProducts();
  }
  onPageChanged(event:any)
  {
if(this.shopParams.pageNumber!==event.page)
{
  this.shopParams.pageNumber=event.page;
  this.getProducts();
}
  }

  onSearch()
  {
    this.shopParams.search=this.searchTerms?.nativeElement.value;
    this.shopParams.pageNumber=1;
    this.getProducts();
  }
  onRsest()
  {
    if(this.searchTerms) this.searchTerms.nativeElement.value="";
    this.shopParams=new ShopParams();
    this.getProducts();
  }
}
