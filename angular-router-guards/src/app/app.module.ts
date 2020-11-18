import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { DownloadsComponent } from './downloads/downloads.component';
import { MakeCourseComponent } from './make-course/make-course.component';
import { AuthGuard } from './services/auth.guard';


const routes = [{path:"",component:HomeComponent},
                {path:"login",component:LoginComponent},
                {path:"register",component:RegisterComponent},
                
                { path:"courses",component:CoursesComponent},
                { path:"downloads",
                  component:DownloadsComponent,
                  canActivate:[AuthGuard]
                },
                {path:"make-course",
                component:MakeCourseComponent,
                canActivate:[AuthGuard]}]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CoursesComponent,
    HomeComponent,
    DownloadsComponent,
    MakeCourseComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
