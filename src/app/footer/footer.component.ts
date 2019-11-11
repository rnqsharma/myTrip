import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  payment = 'assets/images/payment.png';
  social_media = 'assets/images/socialmedia.png';
  clients = 'assets/images/clients.png';
  constructor() { }


  ngOnInit() {
  }

}
