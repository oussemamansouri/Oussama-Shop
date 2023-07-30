import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { DataService } from 'src/app/views/service/data.service';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  messageErr:any
  message:any
  constructor(private ds:DataService,private router:Router) { }

  ngOnInit(): void {
  }
  addo(f:any){
    let data=f.value
    
    this.ds.addorder(data).subscribe(response=>{
      this.ngOnInit()
      this.message="Produit Ajouter avec successs"

      

    },(err:HttpErrorResponse)=>{
      this.messageErr=err.error
      
    
  })

  }

}
