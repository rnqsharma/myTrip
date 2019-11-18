import { Component, OnInit } from '@angular/core';

import { LogindataService } from 'src/app/service/logindata.service';
import { Router } from '@angular/router';
import { IProfile } from 'src/app/model/IProfile';



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
  check: string;

  constructor(private router: Router,
              private loginservice: LogindataService) { }

  ngOnInit() {
    localStorage.clear();
  }
  // tslint:disable-next-line: variable-name
     getRes(email1: string , pass: string) {
       this.loginservice.getloginData().subscribe((d) => {
      this.loginItem = d;
      console.log(this.loginItem);
      this.loginItem.forEach(c => {
        if ( email1 === c.id && c.rights === 'admin' ) {
          localStorage.setItem('right', 'c.rights');
          console.log(c.id);
          console.log(email1);
          console.log(c.rights);
          if ( pass === c.password  ) {
            console.log(pass);
            
            console.log(this.check);
            this.router.navigate(['/adminhome']);
          } else {
            this.router.navigate(['/login']);
            alert('please enter correct password/ email');
          }
           } else {
        if ( email1 === c.id && c.rights === 'user' ) {

           if (pass === c.password ) {
            localStorage.setItem('username', c.fullName);
            this.router.navigate(['/']);
           } else {
            this.router.navigate(['/login']);
            alert('please enter correct password');
           }   }
          }}
      );
     }) ;
      }
      getDisableStatus(email1: string , pass: string) {
        if (email1.includes('@') && this.pass !== '') {
          return false;
        }
        return true;
      }


    }
