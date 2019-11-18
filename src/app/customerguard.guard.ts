import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from './service/authservice.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerguardGuard implements CanActivate {
  constructor(private authservice : AuthserviceService ,  private router: Router)
  {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.authservice.check())
          {
            return  true;
          }
          else {
                alert('Authentication Required');
                this.router.navigate(['/login']);
                return false;
              }

}
}