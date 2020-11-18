import { Injectable } from '@angular/core';

@Injectable({providedIn:"root"})
export class UserService {
  
  currUser:boolean = false
  redirectURL:string;

  constructor() { }

  changeUserStatus(status){
    this.currUser = status
    console.log("LOGIN_STATUS = "+this.currUser)
  }

  isLoggedIn(){
    return this.currUser;
  }

}
