import { Component, OnInit } from '@angular/core';

import { AuthadminService } from 'src/app/views/service/authadmin.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DataService } from 'src/app/views/service/data.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  imagepath:any='http://127.0.0.1:3000/'
  dataArray:any
  messageErr:any
  message:any
  produitId:any
  datau:any
  

  constructor(private ds:DataService,private router:Router,private dsa:AuthadminService,private Activatedroute: ActivatedRoute) { 

     
  }

  ngOnInit(): void {
    this.produitId =
    this.Activatedroute.snapshot.queryParamMap.get('produitId') || 0;
    this.ds.getproduit().subscribe(data=>this.dataArray=data)

   // console.log(this.produitId)
    this.ds.getoneproduit(this.produitId).subscribe((data)=>{
      this.datau=data
    

    })
  }

  
  
  addo(f:any){

    this.produitId =
    this.Activatedroute.snapshot.queryParamMap.get('produitId') || 0;
    this.ds.getproduit().subscribe(data=>this.dataArray=data)

   // console.log(this.produitId)
    this.ds.getoneproduit(this.produitId).subscribe((data)=>{
      this.datau=data
    

    })


  const v = f.value.quantite * this.datau.prix
    let data=f.value
  
   data.amount=v
   data.status=this.datau.instock
    
    
    this.ds.addorder(data).subscribe(response=>{
      this.ngOnInit()
      this.message="order Add with successs"

      

    },(err:HttpErrorResponse)=>{
      this.messageErr=err.error
      
    
  })
  }

  getoneproduit(id:any) {
  
    this.router.navigate(['produit'], { queryParams: { produitId: id } });

   
  }

}
