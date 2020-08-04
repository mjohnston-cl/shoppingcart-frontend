import { CatalogComponent } from './catalog.component';
import { CatalogService } from '../../services/catalog.service';
import { of } from 'rxjs';
import { ProductCategory } from '../../models/product-category';
import { createStub } from '../../test/helpers/create-stub';
import { Router } from '@angular/router';

describe('CatalogComponent', () => {
    let component: CatalogComponent;
    let mockCatalogService: CatalogService;
    let mockRouter: Router;

    beforeEach(() => {
        mockCatalogService = createStub(CatalogService);
        mockRouter = createStub(Router);
        component = new CatalogComponent(
            mockCatalogService,
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
            spyOn(mockCatalogService, 'getProductCategories').and.returnValue(of(expected))
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
