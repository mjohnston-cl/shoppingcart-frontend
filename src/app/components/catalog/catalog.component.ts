import { Component, OnInit } from '@angular/core';
import { ProductCategory } from '../../models/product-category';
import { CatalogService } from '../../services/catalog.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-catalog',
    templateUrl: './catalog.component.html',
    styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
    categoryList: ProductCategory[] = [];

    constructor(
        private catalogService: CatalogService,
        private router: Router,
    ) {
    }

    ngOnInit() {
        this.catalogService.getProductCategories().subscribe((categories: ProductCategory[]) => {
            this.categoryList = categories;
        })
    }

    navigateToCategory(categoryName: string) {
        this.router.navigateByUrl('category/' + categoryName);
    }
}
