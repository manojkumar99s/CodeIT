import { Component, OnInit } from '@angular/core';
import { IEmployee } from "./employee";
import { EmployeeService } from "./employee.service";

import 'rxjs/add/operator/retry';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css'],
  providers:[EmployeeService]
})
export class EmployeelistComponent implements OnInit {

  employees : IEmployee[] ;

  selectedEmployeeCountRadioButton : string = 'All';
  statusMessage: string = 'Loading data, please wait .. ';

  constructor(private _employeeService : EmployeeService) { }          
  
  ngOnInit() { 
    // this.employees = this._employeeService.getEmployee();    
    //this._employeeService.getEmployee().subscribe(employeedata => this.employees = employeedata);
    this._employeeService.getEmployee().retry(2).subscribe(employeedata => this.employees = employeedata, error => 
                {
                this.statusMessage = "Problem with the service";
                console.error(error);});
  }

      getTotalEmployeeCount():number
      {
        return this.employees.length;
      }
      getTotalMaleEmployee():number
      {
        return this.employees.filter(e=>e.gender === 'Male').length;
      }
      getTotalFemaleEmployee():number
      {
        return this.employees.filter(e=>e.gender === 'Female').length;
      }

      onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string):void
      {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
      }  
}
