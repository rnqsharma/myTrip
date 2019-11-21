import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HeadernameService } from '../service/headername.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userName = 'Login or Signup';

  email = '';
  private sub: Subscription;

  counter = false;
  counter1 = true;
  logoimg = 'assets/images/paper-plane.png';
  constructor(private headerService: HeadernameService, private router: Router,
              private route: ActivatedRoute) {
   }

  ngOnInit() {
    console.log(this.userName);
    console.log(localStorage.getItem('username'));
    if (localStorage.getItem('username') !== null ) {
      console.log('hjgfhjgdsgf');
      this.userName = localStorage.getItem('username');
      if(this.userName === 'Raunaq') {
        // this.ngOnInit();
        console.log('sdhgfgssdfg');
        this.counter1 = false;
      }
    } else {
      this.userName = 'Login or Signup';
    }

    console.log(this.userName);
    this.setUsernameMethod();

  }


  setUsernameMethod() {
    if (this.userName !== 'Login or Signup') {
      this.counter = true;
    }
    console.log(this.userName);
  }

  setEmail(email: string) {
    this.email = email;
  }

  onUserClicked(name: string): void {
    // console.log("dsfdsf");
    console.log(name);
  }

  logoutFunc() {
    console.log('In Logout');
    localStorage.clear();
    this.router.navigate(['/']);
    location.reload();
  }

  profileView() {
    this.email = localStorage.getItem('email');
    console.log(this.email);
    this.router.navigate(['/viewprofile', this.email]);
  }

  adminView() {
    this.router.navigate(['adminhome']);
  }
}
