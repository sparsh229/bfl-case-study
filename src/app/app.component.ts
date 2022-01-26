import { Component } from '@angular/core';
import { DatastoreService } from './services/datastore.service';
import { Router } from '@angular/router';
import { AdminService } from './services/admin.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private datastore:DatastoreService,private router:Router,private adminservice:AdminService){

  }
  isAdmin:boolean = this.adminservice.isAdmin;
  title = 'bajaj-loan';
  onClick(){
    this.router.navigate(['/userprofile',this.datastore.currentUser]);
  }
}
