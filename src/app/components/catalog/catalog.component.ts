import { Component, OnInit } from '@angular/core';
import { ProductCategory } from '../../models/product-category';
import { CategoryService } from '../../services/category.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-catalog',
    templateUrl: './catalog.component.html',
    styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
    categoryList: ProductCategory[] = [];

    constructor(
        private categoryService: CategoryService,
        private router: Router,
    ) {
    }

    ngOnInit() {
        this.categoryService.getProductCategories().subscribe((categories: ProductCategory[]) => {
            this.categoryList = categories;
        })
    }

    navigateToCategory(categoryName: string) {
        this.router.navigateByUrl('category/' + categoryName);
    }
}
