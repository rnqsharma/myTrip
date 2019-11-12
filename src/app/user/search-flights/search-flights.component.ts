import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css']
})
export class SearchFlightsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  findFlights() {
    this.router.navigate(['/search']);
  }
}
