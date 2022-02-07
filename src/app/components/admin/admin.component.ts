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

  //get email id from params
  email:string|null = this.activatedroute.snapshot.params['emailid'];

  //get input from admin
  feedbackval = new FormControl('');
  feedback:string = '';
  users:Data[] = [];
  items:AllData[]= [];

  //check if request is rejectd show feedback form
  status:boolean = false;
  isApproved:boolean = false;
  //on approval
  onAccept(email:string,index:number){
    //find the request and mark accept in its status
    this.datastorage.updateApproval(email,index);
    this.isApproved = true;
    this.onRefresh();

  }

  //on rejection
  onReject(){
    this.status = true;
  }
  //feedback submission
  onSubmit(email:string,index:number){
    //open a comment page to add comments - disapproval component
    // show user the reason for disapproval
    this.feedback = this.feedbackval.value;
    this.datastorage.updateComment(email,index,this.feedback);
    this.status = false;
    this.onRefresh();
  }
  onLogout(){
    this.router.navigate(['/login']);
  }
  getAllData(){
     this.users = this.datastorage.getAllUsers();
     for(let i =0 ;i<this.users.length;i++){
       for(let j =0;j<this.users[i].loanInfo.length;j++){
          let pushData:AllData = {
            uname:this.users[i].uname,
            email:this.users[i].email,
            loanType:this.users[i].loanInfo[j].loanType,
            loanAmount:this.users[i].loanInfo[j].loanAmount,
            loanTerm:this.users[i].loanInfo[j].loanTerm,
            interestRate:this.users[i].loanInfo[j].interestRate,
            processingfee:this.users[i].loanInfo[j].processingfee,
            totalamount:this.users[i].loanInfo[j].totalamount,
            isApproved:this.users[i].loanInfo[j].isApproved,
            isVisited:this.users[i].loanInfo[j].isVisited,
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
