import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFlights } from '../model/IFlights';

@Injectable({
  providedIn: 'root'
})
export class FlightdataService {

  // tslint:disable-next-line: variable-name
  constructor(private _httpclient: HttpClient) { }

  getFlightsData(): Observable<IFlights[]> {
    return this._httpclient.get<IFlights[]>(
      `http://localhost:3000/flightsData`
    );
  }

  
}
