import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FlightdataService } from 'src/app/service/flightdata.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IFlights } from 'src/app/model/IFlights';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  sub:any;
  i:any;
  flight:IFlights;

  scheduleForm = new FormGroup({

    flightCompany: new FormControl(''),
    id : new FormControl(''),
    departureName : new FormControl(''),
    arrivalName : new FormControl(''),
    departureTime : new FormControl(''),
    arrivalTime : new FormControl(''),
    duration : new FormControl('')
}); 

  constructor(private fl:FlightdataService,private router:Router,private route:ActivatedRoute) { 
  }

  ngOnInit() {

   
  }

  del(){
    this.fl.deleteFlight(this.scheduleForm.value.id).subscribe(e=>console.log(e));
    console.log(this.scheduleForm.value.id)
  }


  onSubmit(){
      
      //console.warn(this.scheduleForm.value.id);
    this.flight=this.scheduleForm.value;
    console.log(this.flight);
    this.fl.updateFlight(this.flight).subscribe();
      
    }
  }


