import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthadminService } from 'src/app/views/service/authadmin.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DataService } from 'src/app/views/service/data.service';
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  imagepath:any='http://127.0.0.1:3000/'
  dataArray:any
  constructor(private ds:DataService,private router:Router,private dsa:AuthadminService) { 

  }
  newChange(): void {
    this.router.navigateByUrl('produit');
}
  

  ngOnInit(): void {
    this.ds.getproduit().subscribe(data=>this.dataArray=data)
  }
  getoneproduit(id:any) {
  
      this.router.navigate(['produit'], { queryParams: { produitId: id } });

     
    }
    
  
  }


