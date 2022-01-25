import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoanInfo } from 'src/app/models/loan-info';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  //import data from loan-info model from local storage and display array in table
  //for now some hardcoded data
  loanType: string = "Home Loan";
  loanInfo:LoanInfo[] = [{interestRate: 7,
    processingfee : 0,
    loanAmount: 10000,
    loanTerm: 2,
    totalamount: 20000},{interestRate: 7,
      processingfee : 0,
      loanAmount: 30000,
      loanTerm: 4,
      totalamount: 50000}];
  status:boolean = true;
  onAccept(index:number){
    //find the request and mark accept in its status
    //then delete the request from his array
  }
  onReject(index:number){
     this.status = false;
    //open a comment page to add comments - disapproval component
    // and then delete it from list
    // show user the reason for disapproval
    this.router.navigate(['/disapproval']); //also send request id
  }
}
