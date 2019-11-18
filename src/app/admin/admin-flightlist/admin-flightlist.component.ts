import { Component, OnInit } from '@angular/core';
import { FlightdataService } from 'src/app/service/flightdata.service';
import { IFlights } from 'src/app/model/IFlights';

@Component({
  selector: 'app-admin-flightlist',
  templateUrl: './admin-flightlist.component.html',
  styleUrls: ['./admin-flightlist.component.css']
})
export class AdminFlightlistComponent implements OnInit {

  fl: IFlights[];

  // tslint:disable-next-line: variable-name
  constructor(private _flightsData: FlightdataService) { }

  ngOnInit() {
    console.log('In aak');
    this._flightsData.getFlightsData().subscribe(
      (flights: IFlights[]) => {
        this.fl = flights;
        console.log(this.fl);
      });

  }

}
