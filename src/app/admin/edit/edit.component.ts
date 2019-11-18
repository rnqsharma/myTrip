import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {


  scheduleForm = new FormGroup({

    flightCompany: new FormControl(''),
    id : new FormControl(''),
    departureName : new FormControl(''),
    arrivalName : new FormControl(''),
    departureTime : new FormControl(''),
    arrivalTime : new FormControl(''),
    duration : new FormControl('')
}); 

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
      
      console.warn(this.scheduleForm.value);
      
    }
  }


