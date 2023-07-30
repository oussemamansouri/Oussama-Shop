import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GProduitRoutingModule } from './g-produit-routing.module';
import { GProduitComponent } from './g-produit/g-produit.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GProduitComponent,
    
    
  ],
  imports: [
    CommonModule,
    GProduitRoutingModule,
    FormsModule
  ]
})
export class GProduitModule { }
