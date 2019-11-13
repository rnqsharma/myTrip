import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProfile } from '../model/IProfile';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfiledataService {

   // tslint:disable-next-line: variable-name
   constructor(private _httpclient: HttpClient) { }

   getProfileData(): Observable<IProfile[]> {
     return this._httpclient.get<IProfile[]>(
       `http://localhost:3000/profiledata`
     );
   }
}
