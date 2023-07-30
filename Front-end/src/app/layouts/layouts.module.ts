import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { FrontLayoutComponent } from './front-layout/front-layout.component';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FormsModule } from '@angular/forms';
import { PageErrorComponent } from './page-error/page-error.component';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    FrontLayoutComponent,
    AdminloginComponent,
    PageErrorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
    
    
  ],
  providers: [
    
  ],
})
export class LayoutsModule { }
