import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
    productCategoryName: string;
    products: Product[];

    constructor(
        private activatedRoute: ActivatedRoute,
        private productService: ProductService,
    ) {
    }

    ngOnInit() {
        this.productCategoryName = this.activatedRoute.snapshot.params.productCategoryName;

        this.productService.getProducts(this.productCategoryName).subscribe((productList: Product[]) => {
            this.products = productList;
        });
    }
}
