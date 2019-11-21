import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IProfile } from '../model/IProfile';
import { Observable, pipe, throwError } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

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
    console.log(id);
    return this._httpclient.get<IProfile>
      (`http://localhost:3000/profiledata/${id}`);
  }

  postProfileData(login: IProfile): Observable<IProfile> {
    console.log('post wala');
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' }); // MIME TYPE
    console.log('post wala');
    console.log(login);
    return this._httpclient.post<IProfile>(`http://localhost:3000/profiledata`, login, { headers })
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


  // tslint:disable-next-line: align
  public updateProfile(profile: IProfile, id: string): Observable<IProfile> {
    console.log(profile);
    console.log(id);
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
