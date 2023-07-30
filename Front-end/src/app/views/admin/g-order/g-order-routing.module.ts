import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GOrderComponent } from './g-order/g-order.component';

const routes: Routes = [
  {path:'',component:GOrderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GOrderRoutingModule { }
