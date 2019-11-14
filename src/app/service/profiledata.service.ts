import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IProfile } from '../model/IProfile';
import { Observable, pipe, throwError } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfiledataService {

   // tslint:disable-next-line: variable-name
   constructor(private _httpclient: HttpClient) { }

  public getProfileData(): Observable<IProfile[]> {
     return this._httpclient.get<IProfile[]>(
       `http://localhost:3000/profiledata`
     );
   }


public getProfileById(id: string): Observable<IProfile> {
  return this._httpclient.get<IProfile>
  (`http://localhost:3000/profiledata/${id}`);
}

// tslint:disable-next-line: align
public updateProfile(profile: IProfile, id: string): Observable<IProfile> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  console.log('id' + id);
  const url = `http://localhost:3000/profiledata/${id}`;
  return this._httpclient.put<IProfile>(url, profile, { headers })
  .pipe(
  tap(() => console.log('updateProfile: ' + profile.id)),
  // Return the product on an update
  map(() => profile)
  );
  }
}