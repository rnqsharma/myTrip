import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaypalService {

  constructor(private _httpclient: HttpClient) { }

  payPal() {
    this._httpclient.get(
      `https://www.sandbox.paypal.com/webapps/xoonboarding?token=EC-51Y76248DF273431F&country.x=IN&locale.x=en_GB&locale.x=en_IN&country.x=IN#/checkout/signup`
    );
  }
  
}
