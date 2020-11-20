import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from "./services/user.service"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-router-guards';
  
  constructor(private authService:UserService,private router:Router){}
  ngOnInit(){
    console.log("LOGIN_STATUS ",this.authService.isLoggedIn())
  }
  logout(){
    let status = false
    this.authService.changeUserStatus(status)
    this.router.navigate([""])
  }

  isLoggedIn(){
    return this.authService.isLoggedIn()
  }
}
