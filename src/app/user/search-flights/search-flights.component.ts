import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IFlights } from 'src/app/model/IFlights';
import { FlightdataService } from 'src/app/service/flightdata.service';

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css']
})
export class SearchFlightsComponent implements OnInit {

  flightsArray: Array<IFlights>;
  from = 'Delhi';
  to = 'Bangalore';
  roundcounter: boolean;

  // tslint:disable-next-line: variable-name
  constructor(private router: Router, private _flightService: FlightdataService) { }

  ngOnInit() {
    this.roundcounter = false;
    console.log('In O');
    this._flightService.getFlightsData()
      .subscribe((fulldata: IFlights[]) => {
        console.log(fulldata);
        this.flightsArray = fulldata;
      });
  }

  findFlights() {
    console.log(this.roundcounter);
    this.router.navigate(['/search', this.to, this.from, this.roundcounter]);
    console.log(this.flightsArray);
    console.log(this.from);
    console.log(this.to);
    // this.flightsArray.forEach(c => {
    //   console.log(c);
    // });
    // for (const f  this.flightsArray) {
    //   console.log(f);
    // }
    // this.router.navigate(['/search', this.to, this.from]);
  }

  radioSetterOne() {
    this.roundcounter = false;
    console.log(this.roundcounter);
  }

  radioSetterRound() {
    this.roundcounter = true;
    console.log(this.roundcounter);
  }

}
