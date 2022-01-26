import { Component, OnInit } from '@angular/core';
import { LoanInfo } from 'src/app/models/loan-info';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatastoreService } from 'src/app/services/datastore.service';
@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.css']
})
export class LoanDetailsComponent implements OnInit {
  
  constructor(private router:Router,private activatedroute:ActivatedRoute, private dataStore:DatastoreService) { 
  } 

  ngOnInit(): void {
  }
  //get loan type from local storage
  emailid:string|null = this.activatedroute.snapshot.paramMap.get('emailid');
  LoanTypeValue=new FormControl('');
  loanAmount = new FormControl();
  loanDuration = new FormControl();
  confirmed:boolean = false;
  loanType:string = "";
  onConfirm(){
    this.loanType = this.LoanTypeValue.value;
    this.confirmed = true;
  }
  onSubmit(){
      let loanType = this.loanType;
      switch (loanType) {
      case "personal":
        var loan:LoanInfo = {
          loanType:this.loanType,
          interestRate: 15,
          processingfee : 3,
          loanAmount: this.loanAmount.value,
          loanTerm: this.loanDuration.value,
          totalamount: this.totalAmount(this.loanDuration.value,this.loanAmount.value,15,3),
          isApproved:false,
          comment:''
        } 
        break;
      case "home":
        var loan:LoanInfo = {
          loanType:this.loanType,
          interestRate: 6.7,
          processingfee : 0.5,
          loanAmount: this.loanAmount.value,
          loanTerm: this.loanDuration.value,
          totalamount: this.totalAmount(this.loanDuration.value,this.loanAmount.value,6.7,0.5),
          isApproved:false,
          comment:''
        } 
        break;
      case "car":
        var loan:LoanInfo = {
          loanType:this.loanType,
          interestRate: 7,
          processingfee : 0,
          loanAmount: this.loanAmount.value,
          loanTerm: this.loanDuration.value,
          totalamount: this.totalAmount(this.loanDuration.value,this.loanAmount.value,7,0),
          isApproved:false,
          comment:''
        } 
        break;
      case "education":
        var loan:LoanInfo = {
          loanType:this.loanType,
          interestRate: 9,
          processingfee : 1,
          loanAmount: this.loanAmount.value,
          loanTerm: this.loanDuration.value,
          totalamount: this.totalAmount(this.loanDuration.value,this.loanAmount.value,9,1),
          isApproved:false,
          comment:''
        }
        break;
      default:
        var loan:LoanInfo = new LoanInfo();
        break;
    }
    //storing data inside local storage
    //first sending it to service
    this.dataStore.setLoanInfo(loan,this.emailid);
    //redirecting to status page
    this.router.navigate(['/statuspage',this.emailid]);//add one more parameter for params
  }
  //function for calculating total amount
  totalAmount(loanDuration:number,loanAmount:number,interestRate:number,processingFee:number):number{
    return (loanAmount + (loanAmount * (interestRate/100)) + processingFee);
  }
  

}
