import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup ,FormControl,Validators} from '@angular/forms';
import { Data } from 'src/app/models/data';
import { DatastoreService } from 'src/app/services/datastore.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  people:Data = new Data();
  constructor(private router:Router,private datastorage:DatastoreService,private activatedroute:ActivatedRoute) {
  }
  
  ngOnInit(): void {
  }
  //get email id from params
  email:string|null = this.activatedroute.snapshot.params['emailid'];
  //get data from local storage and display it in the form
  user:Data = this.datastorage.matchData(this.email);
  //show retrived data in value attribute inside input tags to get displayed inside the form
  //take modifications from the form and save it in local storage
  forms = new FormGroup({
    fname : new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*')]),
    lname : new FormControl('',Validators.pattern('[a-zA-Z]*')),
    dob : new FormControl('',Validators.required),
    gender : new FormControl(''),
    email : new FormControl('',[Validators.email,Validators.required]),
    password : new FormControl('',[Validators.required,Validators.minLength(8)]),
    phno : new FormControl('',Validators.required),
  });
  onSubmit(){
    this.people = {
      fname:this.forms.get('fname')?.value,
      lname:this.forms.get('lname')?.value,
      dob:this.forms.get('dob')?.value,
      gender:this.forms.get('gender')?.value,
      email:this.user.email, //email could not be changed hence retrieve and pass
      password:this.forms.get('password')?.value,
      phno:this.forms.get('phno')?.value,
      loanInfo:[]
    }
    this.datastorage.updateData(this.people,this.email);
    this.router.navigate(['/userprofile',this.email])//pass second argument to navigate to userprofile
  }
}
