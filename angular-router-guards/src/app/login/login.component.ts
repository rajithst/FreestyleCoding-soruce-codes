import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: UserService) { }
  
  ngOnInit() {
  }

  loginUser(){
    let status = true
    this.authService.changeUserStatus(status)
  }

}
