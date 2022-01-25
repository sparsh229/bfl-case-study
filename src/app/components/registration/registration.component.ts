import { Component, OnInit } from '@angular/core';
import { DatastoreService } from 'src/app/services/datastore.service';
import {Data} from '../../models/data';
import { Router } from '@angular/router';
import { FormGroup ,FormControl,Validators} from '@angular/forms';
import { LoanInfo } from 'src/app/models/loan-info';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  forms = new FormGroup({
    fname : new FormControl('',Validators.required),
    lname : new FormControl(''),
    dob : new FormControl('',Validators.required),
    gender : new FormControl(''),
    email : new FormControl('',[Validators.email,Validators.required]),
    password : new FormControl('',[Validators.required,Validators.minLength(8)]),
    phno : new FormControl('',Validators.required),
  });
  people:Data = new Data();
  constructor(private dataStore:DatastoreService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.people = {
      fname:this.forms.get('fname')?.value,
      lname:this.forms.get('lname')?.value,
      dob:this.forms.get('dob')?.value,
      gender:this.forms.get('gender')?.value,
      email:this.forms.get('email')?.value,
      password:this.forms.get('password')?.value,
      phno:this.forms.get('phno')?.value,
      loanInfo:new LoanInfo
    }
    console.log(this.people);
    this.dataStore.setData(this.people);
    this.people = new Data();
    this.router.navigateByUrl("/login");
  }

}
