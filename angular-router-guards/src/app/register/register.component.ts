import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = {username:"",email:"",password:""};
  private currentUser: User = this.user
  private OriginalUser = Object.assign({},this.currentUser)
  ngOnInit() {
  }

  submit(){
    console.log(JSON.stringify(this.OriginalUser))
    console.log(JSON.stringify(this.OriginalUser)!== JSON.stringify(this.currentUser))
  }

  get isDirty(){
    return JSON.stringify(this.OriginalUser)!== JSON.stringify(this.currentUser)
  }

}
