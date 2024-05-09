import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CustomErrorHandler implements ErrorHandler {

    handleError(error: any): void {
        console.error(error);
        alert('An unexpected error occurred. Please try again later.');
    }
}