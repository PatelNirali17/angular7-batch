import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SmallFirslComponent } from './first/small-firsl/small-firsl.component';
import { BtCardComponent } from './bt-card/bt-card.component';
import { JumboComponent } from './bt-card/jumbo.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { EventemitterComponent } from './eventemitter/eventemitter.component';
import { InterCompComponent } from './inter-comp/inter-comp.component';
import { ProgressComponent } from './inter-comp/progress.component';
import { ButtonComponent } from './inter-comp/button.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { ContentchildComponent } from './viewchild/contentchild.component';
import { DirectiveComponent } from './directive/directive.component';
import { CustomDirectiveDirective } from './directive/custom-directive.directive';
import { SampledirectiveComponent } from './sampledirective/sampledirective.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustompipesPipe } from './pipes/custompipes.pipe';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { Child1Component } from './employee-list/child1/child1.component';
import { Child2Component } from './employee-list/child2/child2.component';
import { GuardServiceService } from './guard-service.service';
import { ServicesComponent } from './services/services.component';
import { HttpClientModule } from '@angular/common/http';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SmallFirslComponent,
    BtCardComponent,
    JumboComponent,
    DataBindingComponent,
    EventemitterComponent,
    InterCompComponent,
    ProgressComponent,
    ButtonComponent,
    ViewchildComponent,
    ContentchildComponent,
    DirectiveComponent,
    CustomDirectiveDirective,
    SampledirectiveComponent,
    PipesComponent,
    CustompipesPipe,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    ForgotPasswordComponent,
    Child1Component,
    Child2Component,
    ServicesComponent,
    LifeCycleComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [GuardServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
