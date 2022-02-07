import { LoanInfo } from "./loan-info";
export class Data {
    uname :string;
    dob :string;
    gender:string;
    email:string;
    password:string;
    phno:number;
    loanInfo : LoanInfo[];
    constructor(){
        this.uname='';
        this.dob='';
        this.gender='';
        this.email='';
        this.password='';
        this.phno = 0;
        this.loanInfo = [];
    }
}
