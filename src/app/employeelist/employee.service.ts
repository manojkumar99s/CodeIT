import { Injectable } from "@angular/core";
import { IEmployee } from "./employee";
import { Http,Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class EmployeeService{

        constructor(private _http:Http)
        { }

    getEmployee():Observable<IEmployee[]>
    {        
        return this._http.get('http://localhost:51461/api/home').map((response:Response)=>
                        <IEmployee[]>response.json()).catch(this.handleError);
        // return [
        //     {code:'emp01',Name:'Tom',gender:'Male', annualSalary:55000 ,dateOfBirth:'6/5/1991'},
        //     {code:'emp02',Name:'Mack',gender:'Female',annualSalary:45000 , dateOfBirth:'05/2/1986'},
        //     {code:'emp03',Name:'Rachael',gender:'Female',annualSalary:42000,dateOfBirth:'11/07/1983'},
        //     {code:'emp04',Name:'Jack',gender:'Male', annualSalary:39000,dateOfBirth:'03/12/1989'},
        //     {code:'emp05',Name:'Rocky',gender:'Male',annualSalary:48000,dateOfBirth:'2/11/1987'},
        //     {code:'emp06',Name:'Marry',gender:'Female',annualSalary:38000,dateOfBirth:'2/09/1982'},
        // ];
    }
        
    getEmployeeByEmpUd(empId: string) :Observable<IEmployee>
    {
        return this._http.get('http://localhost:51461/api/home/'+empId).map((response:Response)=>
        <IEmployee>response.json()).catch(this.handleError);
    }  

    // getEmployeeCode(empCode:string):Promise<IEmployee>{
    //         return this._http.get('http://localhost:51461/api/home/'+empCode).map((response:Response)=>
    //         <IEmployee>response.json()).toPromise().catch(this.handlePromiseError);
    // }

    handleError(error:Response)
    {      
        console.error(error);
        return Observable.throw(error);
    }

    // handlePromiseError(error:Response)
    // {
    //     console.error(error);
    //     return Promise.call(error) ;        
    // }
}
