import { Component } from "../../../node_modules/@angular/core";
import { User } from "../Middle/user";

@Component({
    selector:'app-investment',
    templateUrl:'investment.component.html',
    styleUrls:['investment.component.css']
    
})
export class InvestmentComponent
{
    model : any = { };
    onSubmit()
    {
        console.log(this.model)
    }
}