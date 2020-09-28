import { CatalogComponent } from './catalog.component';
import { CategoryService } from '../../services/category.service';
import { of } from 'rxjs';
import { ProductCategory } from '../../models/product-category';
import { createStub } from '../../test/helpers/create-stub';
import { Router } from '@angular/router';

describe('CatalogComponent', () => {
    let component: CatalogComponent;
    let mockCategoryService: CategoryService;
    let mockRouter: Router;

    beforeEach(() => {
        mockCategoryService = createStub(CategoryService);
        mockRouter = createStub(Router);
        component = new CatalogComponent(
            mockCategoryService,
            mockRouter
        );
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('ngOnInit', () => {
        const expected: ProductCategory[] = [
            {
                productCategoryName: 'Category Name',
                description: 'Some Category',
            },
            {
                productCategoryName: 'Other Category Name',
                description: 'Some Other Category',
            },
            {
                productCategoryName: 'Still a Category Name',
                description: 'Yet Another Category',
            },
        ];

        beforeEach(() => {
            spyOn(mockCategoryService, 'getProductCategories').and.returnValue(of(expected))
        });

        it('should get product categories', () => {
            expect(component.categoryList).toEqual([]);

            component.ngOnInit();

            expect(component.categoryList).toEqual(expected);
        });
    });

    describe('navigateToCategory', () => {
        it('should navigate to the selected Category', () => {
            spyOn(mockRouter, 'navigateByUrl');

            component.navigateToCategory("some-category-name");

            expect(mockRouter.navigateByUrl).toHaveBeenCalledWith("category/some-category-name")
        });
    });
});
