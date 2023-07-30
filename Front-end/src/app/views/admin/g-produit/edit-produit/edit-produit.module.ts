import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditProduitRoutingModule } from './edit-produit-routing.module';
import { EditProduitComponent } from './edit-produit/edit-produit.component';


@NgModule({
  declarations: [
    EditProduitComponent
  ],
  imports: [
    CommonModule,
    EditProduitRoutingModule,
    FormsModule
  ]
})
export class EditProduitModule { }
