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

  airlinename: string;
  _newName: string;
  _newCode: string;
  airlineid: string;
  airlinelogo: any;
  private sub: Subscription;
  airlines: IAirline[];
  errormessage = "please correct the validation error"
  airlineData: IAirline = {
    airLineName: '',
    id: '',
    logo: ''
  };



  // tslint:disable-next-line: whitespace
  set newName(newValue: string) {
    this.airlineData.airLineName = newValue;

  }
  // tslint:disable-next-line: variable-name
  set newCode(newValue: string) {

    this.airlineData.id = newValue;

  }
  airlineDataa: IAirline;

  constructor(private airlineservice: AirlinedataService,
    // tslint:disable-next-line: align
    private router: Router) { }

  ngOnInit() {
    this.airlineservice.getAirlinesData().subscribe((airlines: IAirline[]) => {
      this.airlines = airlines;
      console.log('asds');
      console.log(airlines);
      console.log(this.airlines);
    });
  }

  postAirlineData(airlineName: string, id: string, logo: string) {
    console.log(airlineName);
    this.airlineData.airLineName = airlineName;
    this.airlineData.id = id;
    this.airlineData.logo = logo;
    this.airlineDataa = this.airlineData;
    this.airlineservice.postAirlineData(this.airlineDataa).subscribe((airline: IAirline) => console.log(airline));
    console.log(this.airlineDataa);
    setTimeout(() => location.reload(), 2000);
        //  this.router.navigate(['/airlinelist']);
        confirm("do you really want change");
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
      if (arr[i] && arr[i].hasOwnProperty(attr) && (arguments.length > 2 && arr[i][attr] === value)) {

        arr.splice(i, 1);

      }
    }
    return arr;
  }
  EditAirline(airLineName: string, id: string, logo: any) {

    this.airlinename = airLineName;
    this.airlineData.airLineName = airLineName;
    this.airlinelogo = logo;
    this.airlineid = id;
    console.log(this.airlinename);
    console.log(this.airlineid);

  }
  saveAirline(): void {
    this.airlineservice.updateAirline(this.airlineData, this.airlineid)
      .subscribe((data) => {
        console.log(data);
        this.airlinename = data.airLineName;
        //this.airlineid= data.id;
        setTimeout(() => location.reload(), 2000);
        //  this.router.navigate(['/airlinelist']);
        confirm("do you really want change");
      });

  }


 

}
