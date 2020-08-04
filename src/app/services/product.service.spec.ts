import { ProductService } from './product.service';
import { HttpClient } from '@angular/common/http';
import { createStub } from '../test/helpers/create-stub';
import { Product } from '../models/product';
import { of } from 'rxjs';
import { ProductCategory } from '../models/product-category';

describe('ProductService', () => {
    let service: ProductService;
    let mockHttpClient: HttpClient;

    beforeEach(() => {
        mockHttpClient = createStub(HttpClient);
        service = new ProductService(mockHttpClient);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('getProducts', () => {
        it('should return a list of products', () => {
            const expected: Product[] = [];

            spyOn(mockHttpClient, 'get').and.returnValue(of(expected));

            let actual: Product[] = [];
            service.getProducts('some-category-name').subscribe((products) => {
                actual = products;
            });

            expect(actual).toEqual(expected);
        });
    });
});
