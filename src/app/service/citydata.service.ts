import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ICity } from '../model/ICity';
import { Observable, throwError } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CitydataService {

  // tslint:disable-next-line: variable-name
  constructor(private _httpclient: HttpClient) { }

  getCityData(): Observable<ICity[]> {
    return this._httpclient.get<ICity[]>(
      `http://localhost:8003/cities`
    );
  }
  postCityData(city: ICity): Observable<ICity> {
    console.log('post wala');
    const headers = new HttpHeaders({'Content-Type': 'application/json'}); // MIME TYPE
    console.log('post wala');
    console.log(city);
    return this._httpclient.post<ICity>(`http://localhost:8003/citydetails`, city, {headers})
    .pipe(tap (data => console.log('registration Successful' + JSON.stringify(data))),
    catchError(this.handleError));
  }

  deleteCityByID(id: string): Observable<{}> {
    console.log(id);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `http://localhost:8003/deleteCities/${id}`;
    console.log('url = ' + url);
    return this._httpclient.delete<ICity>(url, { headers })
    .pipe(
      tap(data => console.log('deleteTopic: ' + id))
    );
  }
  updateCity( id: string, product: ICity ): Observable<ICity> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `http://localhost:8003/updateCity/${id}`;
    return this._httpclient.put<ICity>(url, product, { headers })
    .pipe(
    tap(() => console.log('updateProduct: ' + product.id + product.cityName)),
    // Return the product on an update
    map(() => product),
    catchError(this.handleError)
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
}
