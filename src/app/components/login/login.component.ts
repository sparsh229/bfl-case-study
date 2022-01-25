import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/models/data';
import { DatastoreService } from 'src/app/services/datastore.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private dataStore : DatastoreService,private router:Router) { }
  email = new FormControl('');
  password = new FormControl('');
  ngOnInit(): void {
  }
  success:boolean = false;
  isHit = false;
  onLogin(){
    let data:Data = this.dataStore.matchData(this.email.value);
    console.log(data);
    if(data.email == this.email.value && data.password == this.password.value){
      this.success = true;
      this.router.navigate(['/home']);
    }else {
      this.isHit = true;
    }
  }

}
