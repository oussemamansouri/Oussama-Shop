import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthadminService } from '../service/authadmin.service';

@Injectable({
  providedIn: 'root'
})
export class GuardadminGuard implements CanActivate {
  constructor(private ads:AuthadminService,private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    

      //return true
    return new Promise((resolve,reject)=>{
      if (this.ads.LoggedIn()==true)
      {
        resolve(true)
      }
      else{
      this.router.navigate(['/loginadmin'],{queryParams:{returnUrl:state.url}})
      resolve(false)
    }
    })
  
  
  }
  
}

