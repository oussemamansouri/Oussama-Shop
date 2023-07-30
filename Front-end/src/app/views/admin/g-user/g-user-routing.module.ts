import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GUserComponent } from './g-user/g-user.component';

const routes: Routes = [
  {path:'',component:GUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GUserRoutingModule { }
