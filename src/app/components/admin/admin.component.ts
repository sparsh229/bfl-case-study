import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatastoreService } from 'src/app/services/datastore.service';
import { Data } from 'src/app/models/data';
import { FormControl } from '@angular/forms';
import { AllData } from 'src/app/models/all-data';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router:Router,private datastorage:DatastoreService,private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllData();
  }
  //import data from loan-info model from local storage and display array in table
  //get email id from params
  feedbackval = new FormControl('');
  feedback:string = '';
  email:string|null = this.activatedroute.snapshot.params['emailid'];
  users:Data[] = [];
  items:AllData[]= [];

  status:boolean = false;
  onAccept(email:string,index:number){
    //find the request and mark accept in its status
    this.datastorage.updateApproval(email,index);
    alert("Approved");
  }
  onReject(){
    this.status = true;
  }
  onSubmit(email:string,index:number){
    //open a comment page to add comments - disapproval component
    // show user the reason for disapproval
    this.feedback = this.feedbackval.value;
    this.datastorage.updateComment(email,index,this.feedback);
    console.log("comment added");
    this.status = false;
    this.router.navigate(['/admin']);
  }
  onLogout(){
    this.router.navigate(['/login']);
  }
  getAllData(){
     this.users = this.datastorage.getAllUsers();
     for(let i =0 ;i<this.users.length;i++){
       for(let j =0;j<this.users[i].loanInfo.length;j++){
          let pushData:AllData = {
            fname:this.users[i].fname,
            lname:this.users[i].lname,
            email:this.users[i].email,
            loanType:this.users[i].loanInfo[j].loanType,
            loanAmount:this.users[i].loanInfo[j].loanAmount,
            loanTerm:this.users[i].loanInfo[j].loanTerm,
            interestRate:this.users[i].loanInfo[j].interestRate,
            processingfee:this.users[i].loanInfo[j].processingfee,
            totalamount:this.users[i].loanInfo[j].totalamount,
            isApproved:this.users[i].loanInfo[j].isApproved,
            action:this.users[i].loanInfo[j].action,
          }
          if(!this.items.includes(pushData)){
          this.items.push(pushData);
       }
     }
   }
  }
  onRefresh(){
    this.items = [];
    this.getAllData(); 
  }
}
