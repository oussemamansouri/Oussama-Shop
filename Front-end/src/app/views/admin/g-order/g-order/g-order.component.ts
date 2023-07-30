import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/views/service/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-g-order',
  templateUrl: './g-order.component.html',
  styleUrls: ['./g-order.component.css']
})
export class GOrderComponent implements OnInit {

  dataArray:any
  constructor(private ds:DataService,private router:Router) {
    this.ds.getorder().subscribe(data=>this.dataArray=data)
   
  }

  ngOnInit(): void {
    this.ds.getorder().subscribe(data=>this.dataArray=data)
  }
  delete(id:any){
    this.ds.deleteorder(id).subscribe(res=>{
      this.ngOnInit()
    })

  }
  getidorder(id:any) {

    this.router.navigate(['admin/edit-order'], { queryParams: { orderId: id } });
  
  }

}
