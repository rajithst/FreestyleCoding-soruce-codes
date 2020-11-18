import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService:UserService,
              private router:Router){}
  canActivate(
    //current about to be activated route
    next: ActivatedRouteSnapshot, 
    //provide access to entire route state
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkLoggedIn(state.url);
  }

  checkLoggedIn(url:string):boolean {
    if(this.userService.isLoggedIn()){
      return true
    }
    this.userService.redirectURL = url;
    this.router.navigate(["login"])
    return false

  }
  
}
