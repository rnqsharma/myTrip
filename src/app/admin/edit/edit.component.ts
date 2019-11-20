import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightdataService } from 'src/app/service/flightdata.service';
import { Subscription } from 'rxjs';
import { IFlights } from 'src/app/model/IFlights';
import { AirlinedataService } from 'src/app/service/airlinedata.service';
import { IAirline } from 'src/app/model/IAirline';
import { CitydataService } from 'src/app/service/citydata.service';
import { ICity } from 'src/app/model/ICity';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  
  scheduleForm: FormGroup;
  private sub: Subscription;
  id: string;
  flightData: IFlights;
  airlines: IAirline[];
  airLineName: string;
  cities: ICity[];
  cityName: string;
  flight: IFlights;
  errorMessage: string;


  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private flightService: FlightdataService,
    private airlineservice: AirlinedataService,
    private cityservice: CitydataService
  ) { }


  ngOnInit() {
    
    
    this.sub = this.route.paramMap.subscribe(
      params => {
        this.id = params.get('flightID');
      }
    );


    this.scheduleForm = this.fb.group({
      id: [''],
      flightCompany: [''],
      departureName: [''],
      departureTime: [''],
      arrivalName: [''],
      arrivalTime: [''],
      price: [''],
      duration: ['']
    });
   
    this.airlineservice.getAirlinesData().subscribe((airlines: IAirline[]) => {
      this.airlines = airlines;
      

      this.cityservice.getCityData().subscribe((cities: ICity[]) => {
        this.cities = cities;
        //console.log(this.cities);

        this.flightService.getFlightsDataByID(this.id).
        subscribe((flight: IFlights) => {
          console.log(flight);
          this.flight = flight;
          this.scheduleForm.patchValue({
  
            id: this.flight.id,
            flightCompany: this.flight.flightCompany,
            departureName: this.flight.departureName,
            departureTime: this.flight.departureTime,
            arrivalName: this.flight.arrivalName,
            arrivalTime: this.flight.arrivalTime,
            price: this.flight.price,
            duration: this.flight.duration,
            economy: this.flight.economy,
            business: this.flight.business,
          });
  
      });
    });
  });
  
    }
      addflight = (): void => {
    const p = { ...this.flight, ...this.scheduleForm.value };
    console.log(p);
    this.updateProfile(p, this.id);
    console.log(this.scheduleForm.value.duration);
   
  }
      updateProfile(flight: IFlights, id: string): void {
    this.flightService.updateProfile(flight, id)
      .subscribe({
        next: () => this.onSaveComplete(),
        error: err => this.errorMessage = err
      });
  }
      onSaveComplete(): void {
        this.router.navigate(['/flightSchedule']);
  }
    
  
  
  
  }
  
  


 /* del(){
    this.flightService.deleteFlight(this.scheduleForm.value.id).subscribe(e=>console.log(e));
    console.log(this.scheduleForm.value.id)
  }


  onSubmit(){
      
      //console.warn(this.scheduleForm.value.id);
    this.flight=this.scheduleForm.value;
    console.log(this.flight);
    this.flightService.updateFlight(this.flight).subscribe();
      
    }


*/



