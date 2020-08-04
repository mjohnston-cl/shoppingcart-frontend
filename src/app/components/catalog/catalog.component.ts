import { Component, OnInit } from '@angular/core';
import { ProductCategory } from '../../models/product-category';
import { CatalogService } from '../../services/catalog.service';

@Component({
    selector: 'app-catalog',
    templateUrl: './catalog.component.html',
    styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
    categoryList: ProductCategory[] = [];

    constructor(private catalogService: CatalogService) {
    }

    ngOnInit() {
        this.catalogService.getProductCategories().subscribe(categories => {
            this.categoryList = categories;
        })
    }
}
