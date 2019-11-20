import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IFlights } from '../model/IFlights';
import { tap, map, catchError } from 'rxjs/operators';

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

    public createFlight(flight: IFlights): Observable<IFlights> {

      const headers = new HttpHeaders({'Content-Type': 'application/json'});
      return this._httpclient.post<IFlights>
      (`http://localhost:3000/flightsdata`, flight , {headers})
      .pipe(tap (data => console.log('Create Product is scucessfull '+ JSON.stringify(data))), catchError(this.handleError)
      );
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

  // tslint:disable-next-line: variable-name
  constructor(private _httpclient: HttpClient) { }

  getFlightsData(): Observable<IFlights[]> {
    return this._httpclient.get<IFlights[]>(
      `http://localhost:3000/flightsData`
    );
  }

  deleteFlightByID(id: string): Observable<{}> {
    console.log(id);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `http://localhost:3000/flightsData/${id}`;
    console.log('url = ' + url);
    return this._httpclient.delete<IFlights>(url, { headers })
    .pipe(
      tap(data => console.log('deleteTopic: ' + id))
    );
  }

  getFlightsDataByID(id: string): Observable<IFlights> {
    return this._httpclient.get<IFlights>(
      `http://localhost:3000/flightsData/${id}`
    );
  }

}
