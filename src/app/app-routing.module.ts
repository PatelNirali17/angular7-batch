import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { Child1Component } from './employee-list/child1/child1.component';
import { Child2Component } from './employee-list/child2/child2.component';
import { GuardServiceService } from './guard-service.service';

const routes: Routes = [
  {path:'',component:EmployeeListComponent,
   children : [
     {path:'one',component:Child1Component},
     {path:'two',component:Child2Component}
   ]
   
},
  {path:'employeedetails/:usNm',component:EmployeeDetailsComponent, canActivate : [GuardServiceService]},
  {path:'forgot',component:ForgotPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
