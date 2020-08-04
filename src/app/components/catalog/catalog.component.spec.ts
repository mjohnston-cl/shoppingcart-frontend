import { CatalogComponent } from './catalog.component';
import { CatalogService } from '../../services/catalog.service';
import { of } from 'rxjs';
import { ProductCategory } from '../../models/product-category';
import { createStub } from '../../test/helpers/create-stub';

describe('CatalogComponent', () => {
    let component: CatalogComponent;
    let mockCatalogService: CatalogService;

    beforeEach(() => {
        mockCatalogService = createStub(CatalogService);
        component = new CatalogComponent(mockCatalogService);
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
});
