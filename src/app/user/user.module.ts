import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';

import { LoginComponent } from './login/login.component';
import { ReviewBookingComponent } from './review-booking/review-booking.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { SearchListComponent } from './search-list/search-list.component';
import { RoundtripFooterComponent } from './roundtrip-footer/roundtrip-footer.component';



@NgModule({

<<<<<<< HEAD
  declarations: [LoginComponent, FlightListComponent, SearchListComponent, RegistrationComponent, ReviewBookingComponent],
=======
  declarations: [LoginComponent, FlightListComponent, SearchListComponent, RegistrationComponent, RoundtripFooterComponent],
>>>>>>> 66fe69cb3171351753d1f5e3aee172eade315c34

  imports: [
    CommonModule
  ]
})
export class UserModule { }
