import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthadminService } from 'src/app/views/service/authadmin.service';



@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
}
)
  

export class AdminloginComponent implements OnInit {
  
  messageErr:any
  url:any
  datarecevie:any
  f:any
  constructor(private ads:AuthadminService, private router:Router, private actrouter:ActivatedRoute) { 
   
    if(this.ads.LoggedIn()==true){
      this.router.navigate(['/admin/dashboard'])
  }

  }
  

  ngOnInit(): void {
    this.url=this.actrouter.snapshot.queryParams['returnUrl']||'/admin/dashboard'
    
  }
  loginadmin(f:any){
    let data=f.value

   this.ads.login(data).subscribe(
    Response=>{ 
   
      this.datarecevie=Response
      console.log(this.datarecevie)

      this.ads.saveDataProfil(this.datarecevie.token.token,this.datarecevie.token.role)
      
      
      
      this.router.navigate([this.url])
    

  },(err: HttpErrorResponse) => {
    this.messageErr = err.error;
    console.log(err.error);
  })
    
   
  }

}

