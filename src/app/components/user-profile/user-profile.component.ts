import { Component, OnInit } from '@angular/core';
import { DatastoreService } from 'src/app/services/datastore.service';
import { Data } from 'src/app/models/data';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private dataStore:DatastoreService,private router:Router,private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  emailid:string|null = this.activatedroute.snapshot.paramMap.get('emailid');

  //get all user info
  people:Data = this.dataStore.matchData(this.emailid);


  //check status of loan approval
  onCheck(){  //completed
    this.router.navigate(['/statuspage',this.emailid]); //pass one more parameter for user specific status
  }
  logout(){ //completed
    //delete user from local storage
    this.dataStore.deleteData(this.emailid);

    //after logout redirect to login page
    this.router.navigate(['/login']);
  }
  onEdit(){ //completed
    this.router.navigate(['/edit',this.emailid]);
  }
  onSubmit(){  //completed
    //redirect to loan info page
    this.router.navigate(['/loandetails',this.emailid]);
  }
}
