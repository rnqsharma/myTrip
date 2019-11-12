import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';

import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [RegistrationComponent, ProfileComponent, LoginComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
