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
<<<<<<< HEAD
  getloginData(): Observable<IProfile> {
    return this._httpclient.get<IProfile>(
=======
  getloginData(): Observable<IProfile[]> {
    return this._httpclient.get<IProfile[]>(
>>>>>>> d30d0939c6968998fb87f935af1f9888ebd5f0c6
      `http://localhost:3000/profiledata`
    );
  }
  getLoginDataByMail(login: string): Observable<IProfile> {
    console.log(login);
    return this._httpclient.get<IProfile>(
<<<<<<< HEAD
      `http://localhost:8001/viewprofile/${login}`
=======
      `http://localhost:3000/profiledata/${login}`
>>>>>>> d30d0939c6968998fb87f935af1f9888ebd5f0c6
    );
  }

}
