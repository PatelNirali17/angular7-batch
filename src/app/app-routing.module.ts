import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { Child1Component } from './employee-list/child1/child1.component';
import { Child2Component } from './employee-list/child2/child2.component';
import { GuardServiceService } from './guard-service.service';
import { ServicesComponent } from './services/services.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFromComponent } from './template-driven-from/template-driven-from.component';

const routes: Routes = [
  {path:'employeelist',component:EmployeeListComponent,
   children : [
     {path:'one',component:Child1Component},
     {path:'two',component:Child2Component}
   ]
},
  {path:'employeedetails/:usNm',component:EmployeeDetailsComponent, canActivate : [GuardServiceService]},
  {path:'forgot',component:ForgotPasswordComponent},
  {path:'services',component:ServicesComponent},
  {path:'reactiveform',component:ReactiveFormComponent},
  {path:'templatedrivenform',component:TemplateDrivenFromComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
