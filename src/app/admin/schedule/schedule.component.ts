import { Component, OnInit } from '@angular/core';
import { IFlights } from 'src/app/model/IFlights';
import { FlightdataService } from 'src/app/service/flightdata.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  
  departureTime='';
  arrivalTime='';
  id ='';
  flightCompany='';
  departureName='';
  arrivalName='';
  duration='';
  flights : IFlights[];

  // tslint:disable-next-line: variable-name
  constructor(private _flightsData: FlightdataService, private route: ActivatedRoute) { }

  ngOnInit() {

    this._flightsData.getFlightsData().subscribe((flights: IFlights[]) => {
      this.flights = flights;
      console.log(this.flights);

    });
    

  }
}
