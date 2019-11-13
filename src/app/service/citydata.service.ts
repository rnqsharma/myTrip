import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICity } from '../model/ICity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitydataService {

  // tslint:disable-next-line: variable-name
  constructor(private _httpclient: HttpClient) { }

  getCityData(): Observable<ICity[]> {
    return this._httpclient.get<ICity[]>(
      `http://localhost:3000/profiledata`
    );
  }
}
