import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthadminService } from 'src/app/views/service/authadmin.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {
  username:any
  constructor(private ads:AuthadminService,private router:Router) { 
   this.username=localStorage.getItem('username')
   if (this.ads.LoggedIn()==true){
    console.log("conected")
  }else
  {
    this.router.navigate(['/loginadmin'])
  }
  }

  ngOnInit(): void {
  }
  logout(){
    localStorage.clear()
    this.router.navigate(['/loginadmin'])

}
}
