import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { LogindataService } from 'src/app/service/logindata.service';
import { Router } from '@angular/router';
import { IProfile } from 'src/app/model/IProfile';
import { HeadernameService } from 'src/app/service/headername.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: '';
  email1: string;
  pass: string;
  pass1 = '';
  loginItem: IProfile[];
  flag = 0;
  access = false;
  username: string;
  password: string;

  @Output() setUserName: EventEmitter<string> = new EventEmitter<string>();

  constructor(private router: Router,
    private loginservice: LogindataService, private headerName: HeadernameService) { }

  ngOnInit() {
    // localStorage.clear();
  }
  // tslint:disable-next-line: variable-name
  getRes(email1: string, pass: string) {
    this.loginservice.getloginData().subscribe((d) => {
      this.loginItem = d;
      console.log(this.loginItem);
      this.loginItem.forEach(c => {
        if (email1 === c.id && c.rights === 'admin') {
          console.log(c.id);
          console.log(email1);
          console.log(c.rights);
          if (pass === c.password) {
            console.log(pass);
            this.funcUserName(c.fullName);
            localStorage.setItem('username', c.fullName);
            this.headerName.setUserName(localStorage.getItem('username'), c.id, 1).subscribe(c => console.log(c));
            this.router.navigate(['/adminhome']);
          } else {
            console.log("In else");
            localStorage.setItem('username', 'Login or Signup');
            this.headerName.setUserName(localStorage.getItem('username'), '', 1).subscribe(c => console.log(c));
            this.router.navigate(['/login']);
            alert('please enter correct password/ email');
          }
        } else {
          if (email1 === c.id && c.rights === 'user') {

            if (pass === c.password) {
              this.funcUserName(c.fullName);
              localStorage.setItem('username', c.fullName);
              this.headerName.setUserName(localStorage.getItem('username'), c.id, 1).subscribe(c => console.log(c));
              this.router.navigate(['/']);
            } else {
              console.log("In else");
              localStorage.setItem('username', 'Login or Signup');
              this.headerName.setUserName(localStorage.getItem('username'), '', 1).subscribe(c => console.log(c));
              this.router.navigate(['/login']);

              alert('please enter correct password');
            }
          }
        }
      }
      );
    });
  }
  getDisableStatus(email1: string, pass: string) {
    if (email1.includes('@') && this.pass !== '') {
      return false;
    }
    return true;
  }

  funcUserName(name: string) {
    console.log(name);
    this.setUserName.emit(name);
  }
    }
