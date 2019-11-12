import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';

import { LoginComponent } from './login/login.component';
import { SearchListComponent } from './search-list/search-list.component';



@NgModule({
<<<<<<< HEAD
  declarations: [LoginComponent, SearchListComponent],
=======
  declarations: [RegistrationComponent,LoginComponent],
>>>>>>> df223b6874ceff82878556b2a1ae5ca50eca591a
  imports: [
    CommonModule
  ]
})
export class UserModule { }
