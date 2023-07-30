import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthuserService {
  sLoggedIn:boolean=false
  helper = new JwtHelperService();
  constructor(private http:HttpClient) { }
  register(body:any){
    return this.http.post('http://localhost:3000/register',body)
  }
  loginuser(body:any){
    return this.http.post('http://localhost:3000/login',body)
  }
  saveToken(token:any){

    localStorage.setItem('token',token)

  }
  userLoggedIn(){

    
    
    if(!localStorage.getItem('token')){
      return false
    }
    let token:any=localStorage.getItem('token')
    let decodeToken=this.helper.decodeToken(token)
    
    
     if(decodeToken.role){
       return false
     }

     if(this.helper.isTokenExpired(token)){
       return false
     }

     return true


  }
}
