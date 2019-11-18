import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { RegistrationComponent } from './registration.component';


@Injectable({
providedIn: 'root'
})
export class ProductEditGuard implements CanDeactivate<RegistrationComponent> {
canDeactivate(component: RegistrationComponent): Observable<boolean> | Promise<boolean> | boolean {
if (component.RegistrationForm.dirty) {
 // const productName = component.RegistrationForm.get('productName').value || 'New Product';
return false;
}
return true;
}
}
