import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProfile } from '../model/IProfile';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogindataService {
  // tslint:disable-next-line: variable-name
  constructor(private _httpclient: HttpClient) { }
  getloginData(): Observable<IProfile[]> {
    return this._httpclient.get<IProfile[]>(
      `http://localhost:3000/profiledata`
    );
  }
  getLoginDataByMail(login: string): Observable<IProfile> {
    console.log(login);
    return this._httpclient.get<IProfile>(
      `http://localhost:3000/profiledata/${login}`
    );
  }

}
