import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditOrderRoutingModule } from './edit-order-routing.module';
import { EditOrderComponent } from './edit-order/edit-order.component';


@NgModule({
  declarations: [
    EditOrderComponent
  ],
  imports: [
    CommonModule,
    EditOrderRoutingModule,
    FormsModule
  ]
})
export class EditOrderModule { }
