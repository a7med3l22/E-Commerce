import cuid from 'cuid';  

export interface BasketItem{
    id:number;
    productName:string;
    price:number;
    quantity:number;
    pictureUrl:string;
    brand:string;
    type:string;
}

export interface Basket {
    id:string;
    items:BasketItem[];
    clientSecret?:string;
    paymentIntentId?:string;
    deliveryMethodId?:number;
    shippingPrice:number;
}

export class Basket implements Basket{
    shippingPrice=0;
    id=cuid();
    items:BasketItem[]=[];
}

export interface BasketTotals
{
    shipping:number;
    subtotal:number;
    total:number;
}