import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GUserRoutingModule } from './g-user-routing.module';
import { GUserComponent } from './g-user/g-user.component';
import { FormsModule } from '@angular/forms';
import { EditUserComponent } from './edit-user/edit-user.component'; 

@NgModule({
  declarations: [
    GUserComponent,
    EditUserComponent,
    
  ],
  imports: [
    CommonModule,
    GUserRoutingModule,
    FormsModule
  ]
})
export class GUserModule { }
