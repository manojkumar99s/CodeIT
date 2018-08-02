import { Component, OnInit, ViewChild, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';

import {EmployeeService} from './employeelist/employee.service';

import { Observable } from 'rxjs/Observable';  
import 'rxjs/add/operator/do';  
import 'rxjs/add/operator/filter';  
import 'rxjs/add/operator/map'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
    
})

export class AppComponent implements OnInit {

  @ViewChild('parent',{read:ViewContainerRef}) container:ViewContainerRef;
  
  ngOnInit(){
    this.addComponent(); 
  }

  addComponent(){   
    
      
  } 
  
  title = 'Tour of Heroes'; 
  items: any;
  color : string;
  
  
}
