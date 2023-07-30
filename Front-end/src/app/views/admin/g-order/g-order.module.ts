import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GOrderRoutingModule } from './g-order-routing.module';
import { GOrderComponent } from './g-order/g-order.component';



@NgModule({
  declarations: [
    GOrderComponent,
    
  ],
  imports: [
    CommonModule,
    GOrderRoutingModule,
    
  ]
})
export class GOrderModule { }
