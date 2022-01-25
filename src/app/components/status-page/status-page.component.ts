import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-status-page',
  templateUrl: './status-page.component.html',
  styleUrls: ['./status-page.component.css']
})
export class StatusPageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  //right now hardcoded , get it from the service
  status :string = "approved";
  navback(){
    this.router.navigate(['/userprofile']);//pass another paramter for user id
  }
  //get reasonmessage from service
  reason:string = "";
  //if a request is disapproved make it go from service
}
