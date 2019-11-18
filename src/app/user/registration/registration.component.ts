import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProfiledataService } from 'src/app/service/profiledata.service';
import { ThrowStmt } from '@angular/compiler';
import { IProfile } from 'src/app/model/IProfile';
import { NgForm, FormControlName, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  // @ViewChild(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];
  RegistrationForm: FormGroup;
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
    rights: ''
  };

  profileDataa: IProfile;
  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router, private service: ProfiledataService) { }

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
