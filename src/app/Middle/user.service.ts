import { Injectable } from "@angular/core";
import { User } from "./user";
import { Http,Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/toPromise';
import { HttpParams } from "../../../node_modules/@angular/common/http";

@Injectable()

export class UserService{    
    
constructor(private _http:Http)
        { }

    // getUser():Observable<User[]>
    // {        
    //     return this._http.get('http://localhost:51461/api/home').map((response:Response)=>
    //                     <User[]>response.json()).catch(this.handleError);        
    // }
        
    getUserByFilter(user:any) :Observable<User[]>
    { 
        console.log(user);

        // const params = new HttpParams()
        // .set('age', user.age)
        // .set('drug', user.drug)
        // .set('profession', user.profession)
        // .set('salary', user.salary)
        // .set('isDependent', user.isDependent);

        //console.log(params.toString()); 

        // return this._http.get('http://localhost:51461/api/home/',user).map((response:Response)=>
        // <User[]>response.json()).catch(this.handleError);  
        //first_name={firstName}&last_name={lastName}&birth_date={birthDate}   

        return this._http.get('http://localhost:51461/api/Home/GetData?'+'age='+user.age+'&drug='+user.drug
                +'&profession='+user.profession+'&salary='+user.salary+'&isDependent='+user.isDependent).map((response:Response)=>
        <User[]>response.json()).catch(this.handleError); 
    }

    handleError(error:Response)
    {      
        console.error(error);
        return Observable.throw(error);
    }
}

    
