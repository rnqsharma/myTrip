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

  // @Input()
  userName = 'Login or Signup';

  email = '';
  private sub: Subscription;
  // @Output()
  // setUsername: EventEmitter<string> = new EventEmitter<string>();

  counter = false;
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
    } else {
      this.userName = 'Login or Signup';
    }
    // this.userName = localStorage.getItem('username');
    // if (this.userName === null) {
    //   this.userName = 'Login or Signup';
    // }
    console.log(this.userName);
    this.setUsernameMethod();
    // this.headerService.getLoggedInName.subscribe(name => this.setUsernameMethod(name));
    // this.headerService.getEmail.subscribe(email => this.setEmail(email));
  }

  // ngOnChanges() {
  //   console.log("dhfs")
  // }

  setUsernameMethod() {
    // this.userName = name;
    if (this.userName !== 'Login or Signup') {
      this.counter = true;
      // localStorage.setItem('username', name);
    }
    console.log(this.userName);
  }

  setEmail(email: string) {
    this.email = email;
  }

  onUserClicked(name: string): void {
    console.log("dsfdsf");
    console.log(name);
  }

  logoutFunc() {
    console.log('In Logout');
    localStorage.clear();
    this.router.navigate(['']);
    location.reload();
  }

  profileView() {
    console.log(this.email);
    this.router.navigate(['/viewprofile', this.email]);
  }

}
