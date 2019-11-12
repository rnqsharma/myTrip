import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCard, MatCardModule} from '@angular/material';
import { LoginComponent } from './user/login/login.component';

import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchFlightsComponent } from './user/search-flights/search-flights.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './user/profile/profile.component';
import { FlightListComponent } from './user/flight-list/flight-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminhomeComponent,
    LoginComponent,
    FooterComponent,
    SearchFlightsComponent,
    ProfileComponent,
    FlightListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
