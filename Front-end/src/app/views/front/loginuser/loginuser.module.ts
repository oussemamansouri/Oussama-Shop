import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginuserRoutingModule } from './loginuser-routing.module';
import { LoginuserComponent } from './loginuser/loginuser.component';


@NgModule({
  declarations: [
    LoginuserComponent
  ],
  imports: [
    CommonModule,
    LoginuserRoutingModule,
    FormsModule
  ]
})
export class LoginuserModule { }
