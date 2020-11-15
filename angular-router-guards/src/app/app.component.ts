import { Component, OnInit } from '@angular/core';
import {UserService} from "./services/user.service"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-router-guards';
  
  constructor(private authService:UserService){}
  ngOnInit(){
    console.log("LOGIN_STATUS ",this.authService.isLoggedIn())
  }
  logout(){
    let status = false
    this.authService.changeUserStatus(status)
  }
}
