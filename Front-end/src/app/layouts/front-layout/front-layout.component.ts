import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthuserService } from 'src/app/views/service/authuser.service';

@Component({
  selector: 'app-front-layout',
  templateUrl: './front-layout.component.html',
  styleUrls: ['./front-layout.component.css']
})
export class FrontLayoutComponent implements OnInit {

  constructor(public aus:AuthuserService,private router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    localStorage.clear()
    this.router.navigate(['/loginuser'])
  }
  Home(){
    this.router.navigate([''])
  }
}
