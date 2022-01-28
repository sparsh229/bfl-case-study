
export class AllData {
    fname :string;
    lname :string;
    email:string;
    loanType:string;
    interestRate: number;
    processingfee : number;
    loanAmount: number;
    loanTerm: number;
    totalamount: number;
    isApproved:boolean;
    action:boolean;
    constructor(){
        this.fname='';
        this.lname = '';
        this.email='';
        this.loanType = '';
        this.interestRate = 0;
        this.processingfee = 0;
        this.loanAmount = 0;
        this.loanTerm = 0;
        this.totalamount = 0;
        this.isApproved = false;
        this.action = false;
    }
}
