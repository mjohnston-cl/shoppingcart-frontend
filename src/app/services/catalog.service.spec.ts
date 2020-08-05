import { CatalogService } from './catalog.service';
import { HttpClient } from '@angular/common/http';
import { ProductCategory } from '../models/product-category';
import { of } from 'rxjs';
import { createStub } from '../test/helpers/create-stub';

describe('CatalogService', () => {
    let service: CatalogService;
    let mockHttpClient: HttpClient;

    beforeEach(() => {
        mockHttpClient = createStub(HttpClient);
        service = new CatalogService(mockHttpClient);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('getProductCategories', () => {
        it('should return a list of product categories', () => {
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

            spyOn(mockHttpClient, 'get').and.returnValue(of(expected));

            let actual: ProductCategory[] = [];
            service.getProductCategories().subscribe((categoryList) => {
                actual = categoryList;
            });

            expect(mockHttpClient.get).toHaveBeenCalledWith('http://localhost:9090/api/productCatalog/productCategories');
            expect(actual).toEqual(expected);
        });
    });
});
