import { HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { CompanyDto, CompanyServiceInterface, Configuration } from "src/generated";


export const companyA: CompanyDto = {
    companyId: 1,
    name: "Test Company A"
}

export class MockCompanyService implements CompanyServiceInterface {
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    apiCompanyGet(extraHttpRequestParams?: any): Observable<CompanyDto[]> {
        return of([companyA])
    }

}