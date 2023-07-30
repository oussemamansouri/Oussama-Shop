import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdminloginComponent } from './layouts/adminlogin/adminlogin.component';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { PageErrorComponent } from './layouts/page-error/page-error.component';
import { GuardadminGuard } from './views/guards/guardadmin.guard';

const routes: Routes = [
  {path:'',component:FrontLayoutComponent,children:[{
    path:'',loadChildren:()=>import('./views/front/home/home.module').then(m=>m.HomeModule)},
    {path:'loginuser',loadChildren:()=>import('./views/front/loginuser/loginuser.module').then(m=>m.LoginuserModule)},
    {path:'store',loadChildren:()=>import('./views/front/store/store.module').then(m=>m.StoreModule)},
    {path:'contact',loadChildren:()=>import('./views/front/contact/contact.module').then(m=>m.ContactModule)},
    {path:'checkout',loadChildren:()=>import('./views/front/checkout/checkout.module').then(m=>m.CheckoutModule)},
    {path:'produit',loadChildren:()=>import('./views/front/produit/produit.module').then(m=>m.ProduitModule)},
    {path:'register',loadChildren:()=>import('./views/front/register/register.module').then(m=>m.RegisterModule)}


  ]},
  {path:'admin',component:AdminLayoutComponent,canActivate:[GuardadminGuard],children:[
    {path:'dashboard',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'g_user',loadChildren:()=>import('./views/admin/g-user/g-user.module').then(m=>m.GUserModule)},
    {path:'g_produit',loadChildren:()=>import('./views/admin/g-produit/g-produit.module').then(m=>m.GProduitModule)},
    {path:'g_order',loadChildren:()=>import('./views/admin/g-order/g-order.module').then(m=>m.GOrderModule)},
    {path:'edit-user',loadChildren:()=>import('./views/admin/g-user/edit-user/edit-user.module').then(m=>m.EditUserModule)},
    {path:'edit-produit',loadChildren:()=>import('./views/admin/g-produit/edit-produit/edit-produit.module').then(m=>m.EditProduitModule)},
    {path:'edit-order',loadChildren:()=>import('./views/admin/g-order/edit-order/edit-order.module').then(m=>m.EditOrderModule)},
    
  ]},

  {path:'loginadmin',component:AdminloginComponent},
  {path:'**',component:PageErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
