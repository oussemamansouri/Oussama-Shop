import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditOrderComponent } from './edit-order/edit-order.component';

const routes: Routes = [
  {path:'',component:EditOrderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditOrderRoutingModule { }
