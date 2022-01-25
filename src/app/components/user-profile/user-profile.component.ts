import { Component, OnInit } from '@angular/core';
import { DatastoreService } from 'src/app/services/datastore.service';
import { Data } from 'src/app/models/data';
import { ActivatedRoute, Router } from '@angular/router';
import { LoanInfo } from 'src/app/models/loan-info';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private dataStore:DatastoreService,private router:Router) { }

  ngOnInit(): void {
  }
  //people:Data = this.dataStore.matchData(this.activatedroute.snapshot.paramMap.get('id'));
  people:Data = {
    fname:'Sparsh',
    lname:'Kumar',
    dob:'12/12/12',
    gender:'male',
    email:'sparshrocks22@gmial.com',
    password:'12345678',
    phno:7014293783,
    loanInfo:new LoanInfo
  };
  onCheck(){
    this.router.navigate(['/statuspage']); //pass one more parameter for user specific status
  }
  logout(){
    //delete user from local storage
    //yet to be implemented
    //after logout redirect to login page
    this.router.navigate(['/login']);
  }
}
