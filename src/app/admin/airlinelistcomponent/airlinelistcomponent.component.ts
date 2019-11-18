import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IFlights } from 'src/app/model/IFlights';
import { FlightdataService } from 'src/app/service/flightdata.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IAirline } from 'src/app/model/IAirline';
import { AirlinedataService } from 'src/app/service/airlinedata.service';

@Component({
  selector: 'app-airlinelistcomponent',
  templateUrl: './airlinelistcomponent.component.html',
  styleUrls: ['./airlinelistcomponent.component.css']
})
export class AirlinelistcomponentComponent implements OnInit {

  private sub: Subscription;
  airlines: IAirline[];
  airlineData: IAirline = {
    airLineName: '',
    id: '',
    logo: ''
  };
  airlineDataa: IAirline;

  constructor(private airlineservice: AirlinedataService,
                // tslint:disable-next-line: align
                private router: Router)  { }

  ngOnInit() {
    this.airlineservice.getAirlinesData().subscribe((airlines: IAirline[]) => {
      this.airlines = airlines;
      console.log(airlines);
      // this.profile = profile;
      // console.log(this.profile);
      // this.fullName = this.profile.fullName;
      // this.dob = this.profile.dob;
      // this.id = this.profile.id;
      // this.gender = this.profile.gender;

      // this.mobile = this.profile.mobile;
      // this.address = this.profile.address;
      // this.state = this.profile.state;
      // this.city = this.profile.city;
      // this.country = this.profile.country;

    

  });
}

postAirlineData(airlineName: string, id: string, logo: string) {
  this.airlineData.airLineName = airlineName;
  this.airlineData.id = id;
  this.airlineData.logo = logo;
  this.airlineDataa = this.airlineData;
  console.log(this.airlineDataa);
  this.airlineservice.postAirlineData(this.airlineData);
}

deleteFlight(id: string): void {
  console.log(id);
  this.airlineData.id = id;
  // this.deleteFeedback();
  if (confirm(`Really delete this topic?`)) {
  this.airlineservice.deleteAirlineByID(id)
  .subscribe(() => {
  this.router.navigate(['/airlineList']);
  // error: err => this.errorMessage = err;
  this.deleteFeedback();
  });
  }
  }

  deleteFeedback() {
    // this.idFeed = feedID;
    console.log("lll");
    this.airlines.forEach(c => {
      if (c.id === this.airlineData.id) {
            this.deleteByAttr(this.airlines, 'id', this.airlineData.id);
      }
    });
    console.log(this.airlines);
    // this.updateCustomer();
  }


  deleteByAttr(arr, attr, value) {
    let i = arr.length;
    while (i--) {
       if (arr[i] && arr[i].hasOwnProperty(attr) && (arguments.length > 2 && arr[i][attr] === value ) ) {

           arr.splice(i, 1);

       }
    }
    return arr;
  }

}
