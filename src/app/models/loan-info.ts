export class LoanInfo {
    loanType:string;
    interestRate: number;
    processingfee : number;
    loanAmount: number;
    loanTerm: number;
    totalamount: number;
    isApproved:boolean;
    feedback:string;
    isVisited:boolean;
    constructor(){
        this.loanType = '';
        this.interestRate = 0;
        this.processingfee = 0;
        this.loanAmount = 0;
        this.loanTerm = 0;
        this.totalamount = 0;
        this.isApproved = false;
        this.feedback = '';
        this.isVisited = false;
    }
}
