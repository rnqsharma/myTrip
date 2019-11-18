import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ICity } from '../model/ICity';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CitydataService {

  // tslint:disable-next-line: variable-name
  constructor(private _httpclient: HttpClient) { }

  getCityData(): Observable<ICity[]> {
    return this._httpclient.get<ICity[]>(
      `http://localhost:3000/citydetails`
    );
  }

  deleteCityByID(id: string): Observable<{}> {
    console.log(id);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `http://localhost:3000/citydetails/${id}`;
    console.log('url = ' + url);
    return this._httpclient.delete<ICity>(url, { headers })
    .pipe(
      tap(data => console.log('deleteTopic: ' + id))
    );
  }
}
