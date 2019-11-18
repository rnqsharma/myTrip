import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAirline } from '../model/IAirline';

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

  getAirlinesByID(id: string): Observable<IAirline> {
    return this._httpclient.get<IAirline>(
      `http://localhost:3000/airlines/${id}`
    );
  }
}
