import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ErrorHandler, InjectionToken, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppComponent } from "src/app/app.component";
import { CustomErrorHandler } from "src/app/core/handler/custom-error-handler";
import { OrdersComponent } from "src/app/modules/orders/orders.component";
import { CompanyService, CompanyServiceInterface, Configuration, OrderService, OrderServiceInterface } from "src/generated";

export const ORDER_SERVICE = new InjectionToken<OrderServiceInterface>('OrderServiceInterface');
export const COMPANY_SERVICE = new InjectionToken<CompanyServiceInterface>('CompanyServiceInterface');

@NgModule({
    declarations: [AppComponent, OrdersComponent],
    imports: [CommonModule, RouterModule, HttpClientModule, BrowserModule, FormsModule],
    providers: [{
        provide: ErrorHandler,
        useClass: CustomErrorHandler
    },
    {
        provide: Configuration,
        useFactory: () => new Configuration(
            {
                basePath: API_URL
            }),
        multi: false
    },
    {
        provide: ORDER_SERVICE,
        useClass: OrderService
    },
    {
        provide: COMPANY_SERVICE,
        useClass: CompanyService
    }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }