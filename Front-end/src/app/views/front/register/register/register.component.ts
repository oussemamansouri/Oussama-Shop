import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { DataService } from 'src/app/views/service/data.service';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthuserService } from 'src/app/views/service/authuser.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  messageErr:any

  constructor(private aus:AuthuserService,private router:Router) { }

  ngOnInit(): void {
  }
  register(f:any){
    let data=f.value

    this.aus.register(data).subscribe(data=>{
        this.router.navigate(['/loginuser'])
      
     console.log(data)
    },(err:HttpErrorResponse)=>{
      console.log(err)
      this.messageErr="Email is exist !!"})

  }
}
