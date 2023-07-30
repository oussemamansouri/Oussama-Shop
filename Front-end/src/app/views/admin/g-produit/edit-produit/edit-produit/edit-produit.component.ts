import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/views/service/data.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.component.html',
  styleUrls: ['./edit-produit.component.css']
})
export class EditProduitComponent implements OnInit {
  produitId:any
  datau:any
  data:any
  messageSuccess:any
  constructor(private Activatedroute: ActivatedRoute,private ds:DataService,
    private router:Router) { 

   
  }

  ngOnInit(): void {
    this.produitId =
    this.Activatedroute.snapshot.queryParamMap.get('produitId') || 0;
    this.ds.getoneproduit(this.produitId).subscribe((data)=>{
      this.datau=data

    })


  }

  updateproduit(f:any){
    let data=f.value
    const formData = new FormData();
    formData.append('titre',f.value.titre)
    formData.append('descreption',f.value.descreption)
    formData.append('categorie',f.value.categorie)
    formData.append('size',f.value.size)
    formData.append('color',f.value.color)
    formData.append('prix',f.value.prix)
    formData.append('instock',f.value.instock)
   this.ds.updateproduit(formData,this.produitId).subscribe((response)=>
      {
      
       // this.router.navigate(/)

       console.log(response)
       this.ngOnInit()
        
        

        this.messageSuccess=`this produit is updated`


      },(err:HttpErrorResponse)=>{
        console.log(err.message)
      
      })
  }
  }



