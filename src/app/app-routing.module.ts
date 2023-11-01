import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerDeleteComponent } from './customer-delete/customer-delete.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  { path: '', redirectTo: '/customer', pathMatch: 'full' },
  {path:'addCustomer',component:UserComponent},
  { path: 'customer', component: CustomerListComponent},
  { path: 'customer/:id', component: CustomerDetailsComponent },
  { path: 'customer/delete/:id', component: CustomerDeleteComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
