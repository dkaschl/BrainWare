import { Component, Inject, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { COMPANY_SERVICE, ORDER_SERVICE } from "src/app/app.module";
import { CompanyDto, CompanyServiceInterface, OrderServiceInterface, OrderSummaryDto } from "src/generated";

@Component({
    selector: 'web-app-orders',
    templateUrl: './orders.component.html',
    styleUrl: './orders.component.scss',
})
export class OrdersComponent implements OnInit {

    orders$: Observable<OrderSummaryDto[]> = of([]);
    companies$: Observable<CompanyDto[]> = of([]);
    selectedCompany?: number;

    constructor(@Inject(ORDER_SERVICE) private orderService: OrderServiceInterface, @Inject(COMPANY_SERVICE) public companyService: CompanyServiceInterface) { }

    ngOnInit(): void {
        this.companies$ = this.companyService.apiCompanyGet();
    }

    selectCompanyAndGetOrders(event: Event) {
        if ((event.target as HTMLInputElement).value != undefined && !Number.isNaN(Number((event.target as HTMLInputElement).value))) {
            this.orders$ = this.orderService.apiOrderCompanyIdGet(Number((event.target as HTMLInputElement).value));
        }

    }
}