import { Component, OnInit } from '@angular/core';
import { ProfiledataService } from 'src/app/service/profiledata.service';
import { IProfile } from 'src/app/model/IProfile';
import { MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    rights: 'user',
    bookedFlights: [{
      flightId: '',
      flightCompany: '',
      departureName: '',
      departureTime: '',
      arrivalName: '',
      arrivalTime: '',
      price: 0,
      duration: ''
    }]
  };

  registrationForm: FormGroup;
  profileDataa: IProfile;
  allProfileData: IProfile[];
  constructor(private service: ProfiledataService,
    private fb: FormBuilder,
              // tslint:disable-next-line: variable-name
              private _snackBar: MatSnackBar,
              private router: Router) { }

  ngOnInit() {


    this.registrationForm = this.fb.group({
        name: ['', Validators.required],
        id: ['', Validators.required],
        gender: ['', Validators.required],
        dob: ['', Validators.required],
        pass: ['', Validators.required],
      });


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
      this.service.postProfileData(this.profileData).subscribe(d => {
        this.router.navigate(['login']);
        console.log(d);
      });
    } else {
      this._snackBar.open('Email Already Exists', '', {
        panelClass: ['snackbar'],
        duration: 2000,
      });
      console.log('In Else');
    }

  }

  disabledCounter(): boolean {
    if (this.registrationForm.valid) {
      return false;
    }
    return true;
  }
}
