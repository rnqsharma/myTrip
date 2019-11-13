import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReviewBookingComponent } from './review-booking/review-booking.component';



@NgModule({
  declarations: [LoginComponent, ReviewBookingComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
