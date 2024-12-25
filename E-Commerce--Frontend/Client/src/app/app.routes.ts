import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { TestErrorComponent } from './core/test-error/test-error.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { ServerErrorComponent } from './core/server-error/server-error.component';
import { BreadcrumbComponent } from 'xng-breadcrumb';


export const routes: Routes = [
    { path: '', component: HomeComponent ,data:{breadcrumb:'Home'}},
    {path:'server-error',component:ServerErrorComponent},
    {path:'not-found',component:NotFoundComponent},
    {path:'test-error',component:TestErrorComponent},
    {path:'shop',loadChildren:()=>import('./shop/shop.module').then(m=>m.ShopModule)},
    {path:'basket',loadChildren:()=>import('./basket/basket.module').then(m=>m.BasketModule)},
    { path: '**', redirectTo: 'not-found', pathMatch: 'full' }, 
  ];
  