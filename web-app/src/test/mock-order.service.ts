import { HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Configuration, OrderItemDto, OrderServiceInterface, OrderSummaryDto, ProductDto } from "src/generated";

export const productA: ProductDto = {
    id: 1,
    name: 'Product A'
}

export const productB: ProductDto = {
    id: 2,
    name: 'Product B'
}

export const orderProductA: OrderItemDto = {
    orderId: 1,
    price: 2,
    quantity: 5,
    product: productA
}

export const orderProductB: OrderItemDto = {
    orderId: 2,
    price: 3.65,
    quantity: 4,
    product: productB
}

export const successResult: OrderSummaryDto[] = [
    {
        companyName: 'Brainware',
        description: 'First Order',
        orderId: 1,
        orderTotal: 24.60,
        orderProducts: [orderProductA, orderProductB]
    }
]

export class MockOrderService implements OrderServiceInterface {
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    apiOrderCompanyIdGet(companyId: number, extraHttpRequestParams?: any): Observable<OrderSummaryDto[]> {
        throw Error('server error');
        return of(successResult);
    }

}