import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import {HeroService} from './hero.service';
import {MessageService} from './message.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { EmployeeService } from "./employeelist/employee.service";
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeeCountComponent } from "./employeelist/employeecount.component";
import { EmployeeServiceNew } from "./employee.service";
import { HeaderComponent } from './Header/header.component';
import { FooterComponent } from './Footer/footer.component';
import { MiddleComponent } from './Middle/middle.component';
import { UserService } from "./Middle/user.service";
import { InvestmentComponent } from './Investment/investment.component';



@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,    
    DashboardComponent,       
    EmployeelistComponent,
    EmployeeCountComponent,               
    HeaderComponent,    
    FooterComponent,
    MiddleComponent,
    InvestmentComponent
  ],  
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule
  ],  
  providers: [
    HeroService,
    MessageService,
    EmployeeService,    
    EmployeeServiceNew,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
