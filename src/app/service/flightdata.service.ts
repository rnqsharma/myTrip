import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IFlights } from '../model/IFlights';
import { map, tap, catchError } from 'rxjs/operators';

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

  getFlightsDataByID(id: string): Observable<IFlights> {
    return this._httpclient.get<IFlights>(
      `http://localhost:3000/flightsData/${id}`
    );
  }


  updateFlight(flight : IFlights): Observable<IFlights> {
    const headers = new HttpHeaders({'Content-type': 'application/json'});
    const url =  `http://localhost:3000/flightsData/${flight.id}`;

    return this._httpclient.put<IFlights>(url,flight,{headers}).pipe(tap(()=> console.log('update Flight: '+ flight.id)),map(()=>flight),catchError(this.handleError));
  }

  deleteFlight(id:string):Observable<{}>{

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `http://localhost:3000/flightsdata/${id}`;
    return this._httpclient.delete<IFlights>(url, { headers })
    .pipe(
    tap(data => console.log('deleteFlight: ' + id)),
    catchError(this.handleError)
    );
    }
  // }
 
  private handleError(err: ErrorEvent) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    errorMessage = `An error occurred: ${err.error.message}`;
    } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    errorMessage = `Backend returned code ${err.error.status}: ${err.error.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
    }
  
  }



