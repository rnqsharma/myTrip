import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightdataService } from 'src/app/service/flightdata.service';
import { Subscription } from 'rxjs';
import { IFlights } from 'src/app/model/IFlights';

@Component({
  selector: 'app-addnewflight',
  templateUrl: './addnewflight.component.html',
  styleUrls: ['./addnewflight.component.css']
})
export class AddnewflightComponent implements OnInit {

  flightForm: FormGroup;
  private sub: Subscription;
  id: string;
  flightData: IFlights;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private flightService: FlightdataService
  ) { }

  ngOnInit() {
    this.flightForm = this.fb.group({
      id: [''],
      flightCompany: [''],
      departureName: [''],
      departureTime: [''],
      arrivalName: [''],
      arrivalTime: [''],
      price: [''],
      duration: [''],
      economy: [''],
      business: [''],
    });

    this.sub = this.route.paramMap.subscribe(
      params => {
        this.id = params.get('flightID');
      }
    );

    this.flightService.getFlightsDataByID(this.id).subscribe(
      (flights: IFlights) => {
        this.flightData = flights;
        console.log(this.flightData);
        this.flightForm.patchValue({

          fullName: this.flightData,
          // email: this.profile.id,
          // password: this.profile.password,
          // gender: this.profile.gender,
          // dob: this.profile.dob,
          // address: this.profile.address,
          // city: this.profile.city,
          // state: this.profile.state,
          // country: this.profile.country,
          // pincode: this.profile.pincode,
          // mobile: this.profile.mobile
        });
      });
      // });


  }

}
