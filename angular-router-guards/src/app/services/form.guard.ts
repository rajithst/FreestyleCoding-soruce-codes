import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterComponent } from '../register/register.component';

@Injectable({
  providedIn: 'root'
})
export class FormGuard implements CanDeactivate<RegisterComponent> {
  canDeactivate(component:RegisterComponent,
    currentRoute:ActivatedRouteSnapshot,
    currentStatus:RouterStateSnapshot,
    nextStatus?:RouterStateSnapshot):boolean | Observable<boolean>|Promise<boolean>{
      if(component.isDirty){
        return confirm("You will lose changes??")
      }
      return true
  }
  
}
