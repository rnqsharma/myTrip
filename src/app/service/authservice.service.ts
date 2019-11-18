import { Injectable } from '@angular/core';
import { CanActivate , ActivatedRoute, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;

  userLoggedIn = false;
  // tslint:disable-next-line: variable-name
  constructor(private _router: Router) {
      this.userLoggedIn = false;
   }

  
    check():boolean {
      return true;
 
    }
}

