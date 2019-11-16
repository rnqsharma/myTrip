import { Component, OnInit } from '@angular/core';
import { ProfiledataService } from '../service/profiledata.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IProfile } from '../model/IProfile';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
 myinput : string;
counter: boolean = false;
  logoimg = 'assets/images/paper-plane.png';
  profileItem: IProfile;
  constructor(private router: Router, private route: ActivatedRoute ,
              private profiledataservice: ProfiledataService) { }

  ngOnInit() {
  // {
  // //  this.id =  this.route.snapshot.paramMap.get('id');
  // //  console.log(this.id);
  // //  this. profiledataservice.getProfileById(this.id).subscribe((profileItem)  => {
  // //    this.profileItem = profileItem;
  // //    console.log(this.profileItem);
  // //    this.check = this.profileItem.fullName;
  // //     if(this.check !== '') {
  // //       this.counter = true;
  // //     }
  //  }
  //  ) ;

  // }
  this.myinput = localStorage.getItem('username');
  console.log(this.myinput);
  if ( this.myinput !== '' || this.myinput === undefined) {
    console.log(this.myinput);
    console.log(this.counter);
    this.counter = true;
    console.log(this.counter);
       }

}

}
