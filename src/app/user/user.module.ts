import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SearchListComponent } from './search-list/search-list.component';



@NgModule({
  declarations: [LoginComponent, SearchListComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
