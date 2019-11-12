import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';

import { LoginComponent } from './login/login.component';
import { SearchListComponent } from './search-list/search-list.component';



@NgModule({
  declarations: [LoginComponent, SearchListComponent, RegistrationComponent],

  imports: [
    CommonModule
  ]
})
export class UserModule { }
