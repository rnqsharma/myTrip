import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, pipe, throwError } from 'rxjs';
import { IAirline } from '../model/IAirline';
import { tap, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AirlinedataService {

  // tslint:disable-next-line: variable-name
  constructor(private _httpclient: HttpClient) { }

  getAirlinesData(): Observable<IAirline[]> {
    return this._httpclient.get<IAirline[]>(
      `http://localhost:3000/airlines`
    );
  }

  deleteAirlineByID(id: string): Observable<{}> {
    console.log(id);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `http://localhost:3000/airlines/${id}`;
    console.log('url = ' + url);
    return this._httpclient.delete<IAirline>(url, { headers })
      .pipe(
        tap(data => console.log('deleteTopic: ' + id))
      );
  }

  getAirlinesByID(id: string): Observable<IAirline> {
    return this._httpclient.get<IAirline>(
      `http://localhost:3000/airlines/${id}`
    );
  }

  updateAirline(product: IAirline, id: string): Observable<IAirline> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `http://localhost:3000/airlines/${id}`;
    return this._httpclient.put<IAirline>(url, product, { headers })
    .pipe(
    tap(() => console.log('updateProduct: ' + product.id + product.airLineName)),
    // Return the product on an update
    map(() => product),
    catchError(this.handleError)
    );
    }

  postAirlineData(airline: IAirline): Observable<IAirline> {
    console.log('post wala');
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' }); // MIME TYPE
    console.log('post wala');
    console.log(airline);
    return this._httpclient.post<IAirline>(`http://localhost:3000/airlines`, JSON.stringify(airline), { headers })
      .pipe(tap(data => console.log('registration Successful' + JSON.stringify(data))),
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
