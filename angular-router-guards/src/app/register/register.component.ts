import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: Object = {};
  constructor() { }

  ngOnInit() {
  }

  submit(){
    console.log(this.user)
  }

}
