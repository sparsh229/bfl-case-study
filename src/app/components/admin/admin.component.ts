import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatastoreService } from 'src/app/services/datastore.service';
import { Data } from 'src/app/models/data';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router:Router,private datastorage:DatastoreService,private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  //import data from loan-info model from local storage and display array in table
  //get email id from params
  feedbackval = new FormControl('');
  feedback:string = '';
  email:string|null = this.activatedroute.snapshot.params['emailid'];
  users:Data[] = this.datastorage.getAllUsers();
  status:boolean = false;
  onAccept(email:string,index:number){
    //find the request and mark accept in its status
    this.datastorage.updateApproval(email,index);
  }
  onReject(){
    this.status = true;
  }
  onSubmit(email:string,index:number){
    //open a comment page to add comments - disapproval component
    // show user the reason for disapproval
    this.feedback = this.feedbackval.value;
    this.datastorage.updateComment(email,index,this.feedback);
  }
  onLogout(){
    this.router.navigate(['/login']);
  }
}
