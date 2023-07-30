import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProduitRoutingModule } from './produit-routing.module';
import { ProduitComponent } from './produit/produit.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProduitComponent
  ],
  imports: [
    CommonModule,
    ProduitRoutingModule,
    FormsModule
  ]
})
export class ProduitModule { }
