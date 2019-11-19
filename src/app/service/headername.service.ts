import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeadernameService {

  @Output() getLoggedInName: EventEmitter<string> = new EventEmitter<string>();
  @Output() getEmail: EventEmitter<string> = new EventEmitter<string>();

  userName = '';
  email = '';
  constructor() { }

  setUserName(user: string, email: string, counter: number): Observable<Number> {
    this.userName = user;
    this.email = email;
    // this.getLoggedInName.emit(this.userName);
    if (counter === 1) {
      this.getLoggedInName.emit(this.userName);
      this.getEmail.emit(this.email);
      return of(1);
    } else {
      console.log(localStorage.getItem('username'));
      this.getLoggedInName.emit(localStorage.getItem('username'));
      return of(0);
    }

  }


  emitUserName(): void {
    this.getLoggedInName.emit(this.userName);
  }
}
