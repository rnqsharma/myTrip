import { Component, OnInit } from '@angular/core';
import { ProfiledataService } from 'src/app/service/profiledata.service';
import { ThrowStmt } from '@angular/compiler';
import { IProfile } from 'src/app/model/IProfile';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

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
      duration: ''
    }]
  };

  profileDataa: IProfile;
  constructor(private service: ProfiledataService) { }

  ngOnInit() {
  }

  postProfileData( fullName: string, email: string, gender: string, dob: string, password: string ) {

    this.profileData.fullName = fullName;
    this.profileData.id = email;
    this.profileData.gender = gender;
    this.profileData.dob = dob;
    this.profileData.password = password;
    this.profileDataa = this.profileData;
    console.log('profileData = ' + this.profileData);
    this.service.postProfileData(this.profileData).subscribe(d => console.log(d));
  }
}
