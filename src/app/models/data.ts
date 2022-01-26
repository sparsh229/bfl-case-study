import { LoanInfo } from "./loan-info";
export class Data {
    fname :string;
    lname :string;
    dob :string;
    gender:string;
    email:string;
    password:string;
    phno:number;
    loanInfo : LoanInfo[];
    constructor(){
        this.fname='';
        this.lname = '';
        this.dob='';
        this.gender='';
        this.email='';
        this.password='';
        this.phno = 0;
        this.loanInfo = [];
    }
}
