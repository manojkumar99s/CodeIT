export class Registration{
    constructor(
        public name : string,
        public email : string,
        public address : string,
        public gender : string,
        public phonenumber : number,        
        public country :string,
        public password : string,
        public age : number,
        public dateofbirth? : string
    ) {}
}