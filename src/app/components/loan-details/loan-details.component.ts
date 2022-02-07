import { Component, OnInit } from '@angular/core';
import { LoanInfo } from 'src/app/models/loan-info';
import { FormControl ,FormGroup} from '@angular/forms';
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
    //displaying the data into the laon  info form
    // if(this.loanInfoData!==undefined){
    //   setTimeout(()=>{
    //     this.forms.patchValue({
    //       LoanTypeValue:this.loanInfoData.loanType,
    //       loanAmount:this.loanInfoData.loanAmount,
    //       loanDuration:this.loanInfoData.loanTerm
    //     });
    //   })
    // }

  }

  //get loan type from local storage
  emailid:string|null = this.activatedroute.snapshot.paramMap.get('emailid');
  //get loan index if available // optional parameter
  // loanid:string|null = this.activatedroute.snapshot.paramMap.get('loanid');

  //get loan info
  // loanInfoData:LoanInfo = this.dataStore.getLoanInfoByIndex(this.emailid,this.loanid);

  //form input
  forms = new FormGroup({
    LoanTypeValue : new FormControl(''),
    loanAmount : new FormControl(''),
    loanDuration : new FormControl(''),
  });
  confirmed:boolean = false;
  loanType:string = "";

  //get loan type from user
  onConfirm(){
    this.loanType = this.forms.get('LoanTypeValue')?.value;
    this.confirmed = true;
    console.log(this.loanType);
  }

  //passing the data into datastore service
  onSubmit(){
      let loanType = this.loanType;
      switch (loanType) {
      case "personal":
        var loan:LoanInfo = {
          loanType:this.loanType,
          interestRate: 15,
          processingfee : 3,
          loanAmount: this.forms.get('loanAmount')?.value,
          loanTerm: this.forms.get('loanDuration')?.value,
          totalamount: this.totalAmount(this.forms.get('loanDuration')?.value,this.forms.get('loanAmount')?.value,15,3),
          isApproved:false,
          feedback:'',
          isVisited:false
        } 
        break;
      case "home":
        var loan:LoanInfo = {
          loanType:this.loanType,
          interestRate: 6.7,
          processingfee : 0.5,
          loanAmount: this.forms.get('loanAmount')?.value,
          loanTerm: this.forms.get('loanDuration')?.value,
          totalamount: this.totalAmount(this.forms.get('loanDuration')?.value,this.forms.get('loanAmount')?.value,6.7,0.5),
          isApproved:false,
          feedback:'',
          isVisited:false
        } 
        break;
      case "car":
        var loan:LoanInfo = {
          loanType:this.loanType,
          interestRate: 7,
          processingfee : 0,
          loanAmount: this.forms.get('loanAmount')?.value,
          loanTerm: this.forms.get('loanDuration')?.value,
          totalamount: this.totalAmount(this.forms.get('loanDuration')?.value,this.forms.get('loanAmount')?.value,7,0),
          isApproved:false,
          feedback:'',
          isVisited:false

        } 
        break;
      case "education":
        var loan:LoanInfo = {
          loanType:this.loanType,
          interestRate: 9,
          processingfee : 1,
          loanAmount: this.forms.get('loanAmount')?.value,
          loanTerm: this.forms.get('loanDuration')?.value,
          totalamount: this.totalAmount(this.forms.get('loanDuration')?.value,this.forms.get('loanAmount')?.value,9,1),
          isApproved:false,
          feedback:'',
          isVisited:false

        }
        break;
      default:
        var loan:LoanInfo = new LoanInfo();
        break;
    }
    //storing data inside local storage
    //first sending it to service
    console.log(loan);
    this.dataStore.setLoanInfo(loan,this.emailid);
    //redirecting to status page
    this.router.navigate(['/statuspage',this.emailid]);
  }
  //function for calculating total amount
  totalAmount(loanDuration:number,loanAmount:number,interestRate:number,processingFee:number):number{
    return (loanAmount + (loanAmount * (interestRate/100)) + processingFee);
  }
  

}
