import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthuserService } from 'src/app/views/service/authuser.service';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent implements OnInit {
  messageErr:any
  datatoken:any

  constructor(private aus:AuthuserService,private router:Router) { }

  ngOnInit(): void {
  }
  loginuser(f:any){
    let data=f.value
    this.aus.loginuser(data).subscribe(data=>{
      this.datatoken=data
      this.aus.saveToken(this.datatoken.token)
      this.router.navigate([''])


    },(err:HttpErrorResponse)=>this.messageErr=err.error.error)
  }
}
