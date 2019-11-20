import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IDetails } from '../model/IDetails';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaypalService {

  constructor(private _httpclient: HttpClient) { }

  // payPal(details: any) {
  //   console.log(details);
  //   this._httpclient.post(
  //     `http://localhost:8080/buysingle/`
  //   );
  // }


  payPal(details: IDetails) {
    console.log('post wala');
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' }); // MIME TYPE
    console.log('post wala');
    console.log(details);
    return this._httpclient.post(`http://localhost:8080/paypal/make/payment?sum=${details.price}`, details, { headers })
      .pipe(tap(data => console.log('registration Successful' + JSON.stringify(data))),
        catchError(this.handleError));
  }

  completePayment(paymentId: any, payerId: any) {
    return this._httpclient.post(  'http://localhost:8080/paypal/complete/payment?paymentId=' + paymentId + '&payerId=' + payerId , {})
    .pipe(tap(data => console.log('payment Successful' + JSON.stringify(data))),
    catchError(this.handleError));
  }

  private handleError(err: ErrorEvent) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.error.status}: ${err.error.body}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
  
}
