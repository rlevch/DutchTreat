import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
//import 'rxjs/add/operator/map';
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { Product } from "./product";
//import { Response, Headers } from "@angular/http";
//import { Order, OrderItem } from "./order";
//or like this:
import * as orders from "./order";
import { Response } from "selenium-webdriver/http";

@Injectable()
export class DataService {

    constructor(private http: HttpClient) { }

    public token: string = "";
    public tokenExpiration: Date;

    public checkout;

    public order: orders.Order = new orders.Order();

    public products: Product[] = [];

    public loadProducts(): Observable<boolean> {

        return this.http.get("/api/products")
            .pipe(
            map((data: any[]) => {
                this.products = data;
                return true;
            }));
    }

    public get loginRequired(): boolean {

        return this.token.length == 0 || this.tokenExpiration < new Date();
    }

    public login(creds) {

         return this.http.post("/account/createtoken", creds)
        .pipe(
        map((response: any) => {
 /*               let tokenInfo = response;
                    this.token = tokenInfo.token;
                    this.tokenExpiration = tokenInfo.expiration;*/

                    this.token = response.token;
                   // this.tokenExpiration = response.token.validTo;
            this.tokenExpiration = new Date(response.expiration);

                    return true;
                }));
    }

  /*  public checkout() {
        if (!this.order.orderNumber) {
            this.order.orderNumber = this.order.orderDate.getFullYear().toString() + this.order.orderDate.getTime().toString();
        }

        return this.http.post("/api/orders", this.order, {
            headers: new Headers({ "Authorization": "Bearer " + this.token })
        })
            .map(response => {
                this.order = new Order();
                return true;
            });
    }*/

    public AddToOrder(product: Product) {

        let item: orders.OrderItem = this.order.items.find(i => i.productId == product.id);

        if (item != null) {

            item.quantity++;
        }
        else {

            item = new orders.OrderItem();
            item.productId = product.id;
            item.productArtist = product.artist;
            item.productCategory = product.category;
            item.productArtId = product.artId;
            item.productTitle = product.title;
            item.productSize = product.size;
            item.unitPrice = product.price;
            item.quantity = 1;

            this.order.items.push(item);
       }

    }

}