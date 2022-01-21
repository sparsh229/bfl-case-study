import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/models/data';
import { DatastoreService } from 'src/app/services/datastore.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  people:Data = new Data();
  constructor(private dataStore : DatastoreService,private router:Router) { }

  ngOnInit(): void {
  }
  success:boolean = false;
  isHit = false;
  onLogin(){
    let data:Data = this.dataStore.matchData(this.people.email);
    if(data.email == this.people.email && data.password == this.people.password){
      this.success = true;
      this.router.navigate(['/home',this.people.email]);
    }else {
      this.success = false;
      this.isHit = true;
    }
  }

}
