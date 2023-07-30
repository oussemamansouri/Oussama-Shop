import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GProduitComponent } from './g-produit/g-produit.component';

const routes: Routes = [
  {path:'',component:GProduitComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GProduitRoutingModule { }
