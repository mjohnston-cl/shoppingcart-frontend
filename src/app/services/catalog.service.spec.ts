import { TestBed } from '@angular/core/testing';

import { CatalogService } from './catalog.service';
import { HttpClient } from '@angular/common/http';
import { ProductCategory } from '../models/product-category';
import { of } from 'rxjs';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('CatalogService', () => {
    let service: CatalogService;
    let mockHttpClient: HttpClient;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        });

        mockHttpClient = TestBed.get(HttpClient);
        httpTestingController = TestBed.get(HttpTestingController);

        service = TestBed.get(CatalogService);
    });

    it('should be created', () => {
        const service: CatalogService = TestBed.get(CatalogService);
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

            expect(actual).toEqual(expected);
        });
    });
});
