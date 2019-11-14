import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IProfile } from '../model/IProfile';
import { tap, catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

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

   postProfileData(login: IProfile): Observable<IProfile> {
    console.log('post wala');
    const headers = new HttpHeaders({'Content-Type': 'application/json'}); // MIME TYPE
    console.log('post wala');
    return this._httpclient.post<IProfile>(`http://localhost:3000/profiledata`, login, {headers})
    .pipe(tap (data => console.log('registration Successful' + JSON.stringify(data))),
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
