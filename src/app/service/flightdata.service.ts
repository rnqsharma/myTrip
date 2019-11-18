import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFlights } from '../model/IFlights';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FlightdataService {
  public updateProfile(flight: IFlights, id: string): Observable<IFlights> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log('id' + id);
    const url = `http://localhost:3000/flightsdata/${id}`;
    return this._httpclient.put<IFlights>(url, flight, { headers })
    .pipe(
    tap(() => console.log('updateflight: ' + flight.id)),
    // Return the product on an update
    map(() => flight)
    );
    }

  // tslint:disable-next-line: variable-name
  constructor(private _httpclient: HttpClient) { }

  getFlightsData(): Observable<IFlights[]> {
    return this._httpclient.get<IFlights[]>(
      `http://localhost:3000/flightsData`
    );
  }

  getFlightsDataByID(id: string): Observable<IFlights> {
    return this._httpclient.get<IFlights>(
      `http://localhost:3000/flightsData/${id}`
    );
  }

}
