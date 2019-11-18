import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProfiledataService } from 'src/app/service/profiledata.service';
import { ThrowStmt } from '@angular/compiler';
import { IProfile } from 'src/app/model/IProfile';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  counter = 0;
  profileData: IProfile = {
    fullName: '',
    id: '',
    password: '',
    gender: '',
    dob: '',
    address: '',
    city: '',
    state: '',
    country: '',
    pincode: 0,
    mobile: 0,
    rights: '',
    bookedFlights: [{
      flightId: '',
        flightCompany: '',
        departureName: '',
        departureTime: '',
        arrivalName: '',
        arrivalTime: '',
        price: 0,
        duration: '',
    }]
  };

  profileDataa: IProfile;
  allProfileData: IProfile[];
  constructor(private service: ProfiledataService,
              // tslint:disable-next-line: variable-name
              private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.service.getProfileData().subscribe(profile => {
      console.log(profile);
      this.allProfileData = profile;
    });
  }

  postProfileData( fullName: string, email: string, gender: string, dob: string, password: string ) {

    this.allProfileData.forEach(profile => {
      if (profile.id === email) {
        console.log("In If");
        this.counter = 1;
      }
    });
    if (this.counter === 0) {
      this.profileData.fullName = fullName;
      this.profileData.id = email;
      this.profileData.gender = gender;
      this.profileData.dob = dob;
      this.profileData.password = password;
      this.profileDataa = this.profileData;
      console.log('profileData = ' + this.profileData);
      this.service.postProfileData(this.profileData).subscribe(d => console.log(d));
    } else {
      this._snackBar.open('Email Already Exists', '', {
        panelClass: ['snackbar'],
        duration: 2000,
      });
      console.log('In Else');
    }

  }

}
