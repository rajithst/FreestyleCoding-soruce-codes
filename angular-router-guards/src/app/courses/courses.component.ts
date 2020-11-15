import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service"

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private authService:UserService) { }

  ngOnInit() {
    console.log(this.authService.isLoggedIn())
  }

}
