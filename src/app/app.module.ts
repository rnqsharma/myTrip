import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';

import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchFlightsComponent } from './user/search-flights/search-flights.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './user/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule, MatButtonModule, MatCheckboxModule } from '@angular/material';
import { ViewProfileComponent } from './user/view-profile/view-profile.component';
import { SearchListComponent } from './user/search-list/search-list.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { FilterComponent } from './user/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    SearchFlightsComponent,
    HeaderComponent,
    ProfileComponent,
    ViewProfileComponent,
    SearchListComponent,
    RegistrationComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
