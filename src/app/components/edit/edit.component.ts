import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup ,FormControl,Validators} from '@angular/forms';
import { Data } from 'src/app/models/data';
import { LoanInfo } from 'src/app/models/loan-info';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  forms = new FormGroup({
    fname : new FormControl('',Validators.required),
    lname : new FormControl(''),
    dob : new FormControl('',Validators.required),
    gender : new FormControl(''),
    password : new FormControl('',[Validators.required,Validators.minLength(8)]),
    phno : new FormControl('',Validators.required),
  });
  people:Data = new Data();
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  //get data from local storage and display it in the form
  //show retrived data in value attribute inside input tags to get displayed inside the form
  onSubmit(){
    this.people = {
      fname:this.forms.get('fname')?.value,
      lname:this.forms.get('lname')?.value,
      dob:this.forms.get('dob')?.value,
      gender:this.forms.get('gender')?.value,
      email:this.forms.get('email')?.value, //email could not be changed hence retrieve and pass
      password:this.forms.get('password')?.value,
      phno:this.forms.get('phno')?.value,
      loanInfo:new LoanInfo
    }
    this.router.navigateByUrl("/userprofile");//pass second argument to navigate to userprofile
  }
}
