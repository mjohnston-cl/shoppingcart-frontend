import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductCategory } from '../models/product-category';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    constructor(private httpClient: HttpClient) {
    }

    public getProductCategories(): Observable<ProductCategory[]> {
        return this.httpClient.get<ProductCategory[]>(`http://localhost:9090/api/productCatalog/productCategories`);
    }
}
