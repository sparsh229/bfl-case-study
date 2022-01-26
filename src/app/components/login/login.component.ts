import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/models/data';
import { DatastoreService } from 'src/app/services/datastore.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private dataStore : DatastoreService,private router:Router,private adminservice:AdminService) { }
  email = new FormControl('');
  password = new FormControl('');
  ngOnInit(): void {
  }
  success:boolean = false;
  isHit = false;
  onLogin(){
    if(this.email.value == "admin@123.com" && this.password.value == "admin123"){
      this.adminservice.isAdmin = true;
      this.router.navigateByUrl('/admin');
      return;
    }
    let data:Data = this.dataStore.matchData(this.email.value);
    if(data.email == this.email.value && data.password == this.password.value){
      this.success = true;
      this.router.navigate(['/userprofile',data.email]);
    }else {
      this.isHit = true;
    }
  }

}
