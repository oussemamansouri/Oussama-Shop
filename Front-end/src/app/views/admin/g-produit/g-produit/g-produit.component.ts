import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { DataService } from 'src/app/views/service/data.service';
import { Router } from '@angular/router';
import { AuthadminService } from 'src/app/views/service/authadmin.service';

@Component({
  selector: 'app-g-produit',
  templateUrl: './g-produit.component.html',
  styleUrls: ['./g-produit.component.css']
})
export class GProduitComponent implements OnInit {
  imagepath:any='http://127.0.0.1:3000/'
  dataArray:any
  img:any
  imgURL:any;
  userfile:any ;
  message:any;
  iduser:any;
  messageErr:any
  
  constructor(private ds:DataService,private router:Router,private dsa:AuthadminService) {

   }
   

  

  ngOnInit(): void {
    this.ds.getproduit().subscribe(data=>this.dataArray=data)
    this.iduser=this.dsa.getUserId();
  }
  delete(id:any){
    this.ds.deleteproduit(id).subscribe(res=>{
      this.ngOnInit()
    })
  }
  getidproduit(id:any) {

    this.router.navigate(['admin/edit-produit'], { queryParams: { produitId: id } });
  
  }
  selectImage(event:any) {
    if (event.target.files.length > 0) {
      const path = event.target.files[0];
      console.log(path)
      this.img = path;
    }
  }
  add(fff:any){
    let dataaa=fff.value
    const formData = new FormData();


     formData.append('titre',fff.value.titre)
     formData.append('descreption',fff.value.descreption)
     formData.append('img', this.img)
     formData.append('categorie',fff.value.categorie)
     formData.append('size',fff.value.size)
     formData.append('color',fff.value.color)
     formData.append('prix',fff.value.prix)
     formData.append('instock',fff.value.instock)
     formData.append('UserId',this.iduser)
     this.ds.addproduit(formData).subscribe((dataa)=>
     {
      this.ngOnInit()
      this.message="Product Add with success"

     },(err: HttpErrorResponse) => {
      this.messageErr = err.error;

    })

  }

  
}
