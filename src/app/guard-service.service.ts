import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardServiceService implements CanActivate {

  constructor() { }

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean {
    // return false;
    if(route.params['usNm']){
      // alert('Successful login');
       return true; 
     }else{
       return false;
      //  alert('You must enter a values');
     }
    //  return route.params['usNm'] === 'codekul';
  }
}
