import { Injectable } from '@angular/core';

import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";

import 'rxjs/add/operator/delay';

import {Employee, employees  } from './data-model';

@Injectable()
export class EmployeeServiceNew {

  delayMS = 500;

  getEmployee():Observable<Employee[]>
  {
    return of(employees).delay(this.delayMS);
  }

  updateEmployee(employee:Employee): Observable<Employee>
  {
    const oldEmployee = employees.find(e=> e.id === employee.id);
    const newEmployee = Object.assign(oldEmployee,employee);
    return of(newEmployee).delay(this.delayMS);
  }
  constructor() { }

}
