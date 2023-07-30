import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProduitComponent } from './edit-produit/edit-produit.component';

const routes: Routes = [
  {path:'',component:EditProduitComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditProduitRoutingModule { }
