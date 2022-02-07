
export class AllData {
    uname :string;
    email:string;
    loanType:string;
    interestRate: number;
    processingfee : number;
    loanAmount: number;
    loanTerm: number;
    totalamount: number;
    isApproved:boolean;
    isVisited:boolean;
    constructor(){
        this.uname='';
        this.email='';
        this.loanType = '';
        this.interestRate = 0;
        this.processingfee = 0;
        this.loanAmount = 0;
        this.loanTerm = 0;
        this.totalamount = 0;
        this.isApproved = false;
        this.isVisited = false;
    }
}
