import { Component } from "@angular/core";
import { User } from './user';
import { UserService } from "./user.service";

@Component({
    selector:'app-middle',
    templateUrl:'middle.component.html',
    styleUrls:['middle.component.css'],
    providers:[UserService]
})
export class MiddleComponent{    
    users : User[];

   
    model : any = {}
    
    constructor(private _userService : UserService) { }  
    
    onSubmit() 
    {        
        this.GetFilterData();
    }

      GetFilterData()
      {          
        this._userService.getUserByFilter(this.model).subscribe(result=>{
            this.users = result;
        });
      }
}