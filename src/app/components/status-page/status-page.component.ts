import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatastoreService } from 'src/app/services/datastore.service';
import { LoanInfo } from 'src/app/models/loan-info';
@Component({
  selector: 'app-status-page',
  templateUrl: './status-page.component.html',
  styleUrls: ['./status-page.component.css']
})
export class StatusPageComponent implements OnInit {

  constructor(private router:Router,private datastore:DatastoreService,private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  //get email id
  email:string|null = this.activatedroute.snapshot.paramMap.get('emailid');

  //get loan info from service
  loanInfo:LoanInfo[] = this.datastore.getLoanInfo(this.email);

  //modify request if rejected
  modify(loanid:number){
    this.router.navigate(['/loandetails',this.email,{loanid:loanid}]);
  }
  
  navback(){
    this.router.navigate(['/userprofile',this.email]);//pass another paramter for user id
  }
}
