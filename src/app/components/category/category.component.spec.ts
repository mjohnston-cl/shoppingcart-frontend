import { CategoryComponent } from './category.component';
import { ActivatedRoute } from '@angular/router';
import { createStub } from '../../test/helpers/create-stub';
import { ProductService } from '../../services/product.service';
import { of } from 'rxjs';
import { Product } from '../../models/product';

describe('CategoryComponent', () => {
    let component: CategoryComponent;
    let mockActivatedRoute: ActivatedRoute;
    let mockProductService: ProductService;

    beforeEach(() => {
        mockActivatedRoute = createStub(ActivatedRoute);
        mockProductService = createStub(ProductService);
        component = new CategoryComponent(
            mockActivatedRoute,
            mockProductService
        );

        (mockActivatedRoute as any).snapshot = {
            params: {},
        };
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('ngOnInit', () => {
        const expected: Product[] = [
            {
                skuNumber: 'SKU1',
                productName: 'Product 1',
                description: 'Product 1 Description',
                inventoryCount: '1',
                price: '1.99',
            },
            {
                skuNumber: 'SKU2',
                productName: 'Product 2',
                description: 'Product 2 Description',
                inventoryCount: '2',
                price: '2.99',
            },
        ];

        beforeEach(() => {
            (mockActivatedRoute as any).snapshot = {
                params: {
                    productCategoryName: 'some-category-name',
                },
            };

            spyOn(mockProductService, 'getProducts').and.returnValue(of(expected));
        });

        it('should grab category name from ActivatedRoute', () => {
            expect(component.productCategoryName).toBeUndefined();

            component.ngOnInit();

            expect(component.productCategoryName).toEqual('some-category-name');
        });

        it('should fetch list of products from backend', () => {
            expect(component.products).toBeUndefined();

            component.ngOnInit();

            expect(component.products).toEqual(expected);
        });
    });
});
