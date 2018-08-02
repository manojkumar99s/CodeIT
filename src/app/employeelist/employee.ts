export interface IEmployee
{
    code:string;
    Name:string;
    gender:string;
    annualSalary:number;
    dateOfBirth : string;
    department? : string;

    //computeMonthlySalary(annualSalary:number):number;
}

export class Employee implements IEmployee {
 
        // public code:string;
        // public Name:string;
        // public gender:string;
        // public annualSalary:number;
        // public dateOfBirth: string;
        
        computeMonthlySalary(annualSalary:number):number
        {
            return annualSalary/12;
        }

    
         constructor(public code:string,public Name:string, public gender:string,public annualSalary:number,public dateOfBirth:string) {
        // constructor( code:string, Name:string,  gender:string, annualSalary:number, dateOfBirth:string) {
        //     this.code= code;
        //     this.Name = name;
        //     this.gender = gender;
        //     this.annualSalary = annualSalary;
        //     this.dateOfBirth = dateOfBirth;        
    }
}