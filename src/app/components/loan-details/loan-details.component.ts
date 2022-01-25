import { Component, OnInit } from '@angular/core';
import { LoanInfo } from 'src/app/models/loan-info';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.css']
})
export class LoanDetailsComponent implements OnInit {
  
  constructor(private router:Router){
  } 

  ngOnInit(): void {
  }
  loanType:string = 'car';
  loanAmount = new FormControl();
  loanDuration = new FormControl();
  onSubmit(){
      let loanType:string = this.loanType;
      switch (loanType) {
      case "personal":
        var loan:LoanInfo = {
          interestRate: 15,
          processingfee : 3,
          loanAmount: this.loanAmount.value,
          loanTerm: this.loanDuration.value,
          totalamount: this.totalAmount(this.loanDuration.value,this.loanAmount.value,15,3)
        } 
        break;
      case "home":
        var loan:LoanInfo = {
          interestRate: 6.7,
          processingfee : 0.5,
          loanAmount: this.loanAmount.value,
          loanTerm: this.loanDuration.value,
          totalamount: this.totalAmount(this.loanDuration.value,this.loanAmount.value,6.7,0.5)
        } 
        break;
      case "car":
        var loan:LoanInfo = {
          interestRate: 7,
          processingfee : 0,
          loanAmount: this.loanAmount.value,
          loanTerm: this.loanDuration.value,
          totalamount: this.totalAmount(this.loanDuration.value,this.loanAmount.value,7,0)
        } 
        break;
      case "education":
        var loan:LoanInfo = {
          interestRate: 9,
          processingfee : 1,
          loanAmount: this.loanAmount.value,
          loanTerm: this.loanDuration.value,
          totalamount: this.totalAmount(this.loanDuration.value,this.loanAmount.value,9,1)
        }
        break;
      default:
        var loan:LoanInfo = new LoanInfo();
        break;
    }
    //storing data inside local storage
    //first sending it to service
    //redirecting to status page
    this.router.navigate(['/statuspage']);//add one more parameter for params
  }
  //function for calculating total amount
  totalAmount(loanDuration:number,loanAmount:number,interestRate:number,processingFee:number):number{
    return (loanAmount + (loanAmount * (interestRate/100)) + processingFee);
  }
  

}
