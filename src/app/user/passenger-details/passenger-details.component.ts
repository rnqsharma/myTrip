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


  private sub: Subscription;
  id = '';
  travellers = '';
  class = '';
  // errorMessage: string;
  // passenger: IProfile;
  // passengerForm: FormGroup;
  // private sub: Subscription;

  constructor(
    private router: Router, private route: ActivatedRoute
    // private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private profiledataService
    ) { }

    passengerDetails = {
      fullName: '',
      gender: 'Male',
      address: '',
      mobile: ''
    };

  ngOnInit() {
    this.sub = this.route.paramMap.subscribe(
      params => {
        this.id = params.get('flightID');
        this.travellers = params.get('travellers');
        this.class = params.get('class');
        console.log(this.id);
        console.log(this.travellers);
      }
    );
  }

  getDetails(fullName: string, address: string, mobile: string) {
    console.log(mobile);
    this.passengerDetails.fullName = fullName;
    this.passengerDetails.address = address;
    this.passengerDetails.mobile = mobile;
    console.log(this.passengerDetails.fullName);
    this.router.navigate(['reviewBooking', this.passengerDetails.fullName,
     this.passengerDetails.address, this.passengerDetails.mobile, this.id, this.travellers, this.class]);
  }
  onRadioMale() {
    this.passengerDetails.gender = 'Male';
  }
  onRadioFemale() {
    this.passengerDetails.gender = 'Female';
  }
}
