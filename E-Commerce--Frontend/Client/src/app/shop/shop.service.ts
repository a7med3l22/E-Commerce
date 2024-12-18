import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pagination } from '../shared/models/paging';
import { Product } from '../shared/models/product';
import { Brand } from '../shared/models/brands';
import { ShopParams } from '../shared/models/shopParams';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http:HttpClient) { }
  baseUrl="https://localhost:44395/api/";
  getProducts(shopParams:ShopParams)
  {
    let params=new HttpParams();
    if(shopParams.brandId) params=params.append("brandId",shopParams.brandId);
    if(shopParams.typeId) params=params.append("typeId",shopParams.typeId);
    params=params.append("sort",shopParams.sort);
    params=params.append("pageIndex",shopParams.pageNumber);
    params=params.append("pageSize",shopParams.pageSize);
    if(shopParams.search) params=params.append('search',shopParams.search);

    return this.http.get<pagination<Product[]>>(this.baseUrl+"Product",{params:params});
  }
  getBrands()
  {
    return this.http.get<Brand[]>(this.baseUrl+"Product/brands");

  }
  getTypes()
  {
    return this.http.get<Brand[]>(this.baseUrl+"Product/types");
  }
  getProduct(id:number)
  {
    return this.http.get<Product>(this.baseUrl+"product/"+id)
  }
}
