import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    constructor(private httpClient: HttpClient) {
    }

    public getProducts(productCategory: string): Observable<Product[]> {
        return this.httpClient.get<Product[]>(`http://localhost:9090/api/products/` + productCategory);
    }
}
