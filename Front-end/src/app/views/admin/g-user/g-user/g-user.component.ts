import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/views/service/data.service';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-g-user',
  templateUrl: './g-user.component.html',
  styleUrls: ['./g-user.component.css']
})
export class GUserComponent implements OnInit {
dataArray:any
messageErr:any
  constructor(private ds:DataService,private router:Router) {
   
   }

  ngOnInit(): void {
    this.ds.getUsers().subscribe(data=>this.dataArray=data)
    
  }
  delete(id:any){
    this.ds.deleteuser(id).subscribe(res=>{
      this.ngOnInit()
    })




}

getiduser(id:any) {

  this.router.navigate(['admin/edit-user'], { queryParams: { UserId: id } });

}
add(f:any){
  let data=f.value
    
    this.ds.adduser(data).subscribe(response=>{
      this.ngOnInit()
       

      this.router.navigate(['/admin/g_user'])

    },(err:HttpErrorResponse)=>{
      this.messageErr=err.error
      
    
  })
}
}

