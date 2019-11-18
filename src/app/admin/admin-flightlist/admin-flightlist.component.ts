import { Component, OnInit } from '@angular/core';
import { FlightdataService } from 'src/app/service/flightdata.service';
import { IFlights } from 'src/app/model/IFlights';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-flightlist',
  templateUrl: './admin-flightlist.component.html',
  styleUrls: ['./admin-flightlist.component.css']
})
export class AdminFlightlistComponent implements OnInit {

  fl: IFlights[];
  flight: IFlights = {
    id: '',
    flightCompany: '',
        departureName: '',
        departureTime: '',
        arrivalName: '',
        arrivalTime: '',
        price: 0,
        duration: '',
        economy: 0,
        business: 0
  };

  // tslint:disable-next-line: variable-name
  constructor(private _flightsData: FlightdataService, private router: Router) { }

  ngOnInit() {
    console.log('In aak');
    this._flightsData.getFlightsData().subscribe(
      (flights: IFlights[]) => {
        this.fl = flights;
        console.log(this.fl);
      });

  }

  
deleteFlight(id: string): void {
  console.log(id);
  this.flight.id = id;
  // this.deleteFeedback();
  if (confirm(`Really delete this topic?`)) {
  this._flightsData.deleteFlightByID(id)
  .subscribe(() => {
  this.router.navigate(['/adminFlight']);
  // error: err => this.errorMessage = err;
  this.deleteFeedback();
  });
  }
  }

  deleteFeedback() {
    // this.idFeed = feedID;
    console.log("lll");
    this.fl.forEach(c => {
      if (c.id === this.flight.id) {
            this.deleteByAttr(this.fl, 'id', this.flight.id);
      }
    });
    console.log(this.fl);
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
