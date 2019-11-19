import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProfile } from 'src/app/model/IProfile';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.css']
})
export class PassengerDetailsComponent implements OnInit {


  // errorMessage: string;
  // passenger: IProfile;
  // passengerForm: FormGroup;
  // private sub: Subscription;

  constructor(
    // private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private profiledataService
    ) { }

    passengerDetails = {
      fullName: '',
      gender: 'Male',
      address: '',
      mobile: ''
    };

  ngOnInit() {
  }

  getDetails(fullName: string, gender: string, address: string, mobile: string) {
    this.passengerDetails.fullName = fullName;
    this.passengerDetails.address = address;
    this.passengerDetails.mobile = mobile;
  }
  onRadioMale() {
    this.passengerDetails.gender = 'Male';
  }
  onRadioFemale() {
    this.passengerDetails.gender = 'Female';
  }
}
