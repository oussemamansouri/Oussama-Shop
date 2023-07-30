import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/views/service/data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {
  orderId:any
  datau:any
  messageSuccess:any
  data:any
  constructor(private Activatedroute: ActivatedRoute,private ds:DataService) {

    this.orderId =
    this.Activatedroute.snapshot.queryParamMap.get('orderId') || 0;
    this.ds.getoneorder(this.orderId).subscribe((data) => this.datau = data);
   }

  ngOnInit(): void {
    this.orderId =
    this.Activatedroute.snapshot.queryParamMap.get('orderId') || 0;
    this.ds.getoneorder(this.orderId).subscribe((data)=>{
      this.datau=data

    })


  }
  
  

 /*  updateorder(p:any){
    let data = p.value
    const FD = new FormData()
    FD.append('quantite',p.value.quantite)
    FD.append('amount',p.value.amount)
    FD.append('adress',p.value.adress)
    FD.append('status',p.value.status)
   this.ds.updateorder(FD,this.orderId).subscribe((response)=>
      {
      
       // this.router.navigate(/)

       console.log(response)
       this.ngOnInit()
        
        

        this.messageSuccess=`this order is updated`


      },(err:HttpErrorResponse)=>{
        console.log(err.message)
      
      })
  
  }*/
  
}
