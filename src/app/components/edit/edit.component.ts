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
    setTimeout(()=>{
      this.forms.patchValue({
        uname:this.user.uname,
        dob:this.user.dob,
        gender:this.user.gender,
        phno:this.user.phno
      });
    })
  }

  //get email id from params
  email:string|null = this.activatedroute.snapshot.params['emailid'];

  //get data from local storage and display it in the form
  user:Data = this.datastorage.matchData(this.email);

  //show retrived data in value attribute inside input tags to get displayed inside the form
  //take modifications from the form and save it in local storage
  forms = new FormGroup({
    uname : new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]{1,32}')]),
    dob : new FormControl('',[Validators.required,Validators.pattern('[0-9]{2}/[0-9]{2}/[0-9]{4}')]),
    gender : new FormControl(''),
    password : new FormControl('',[Validators.required,Validators.minLength(8)]),
    phno : new FormControl('',[Validators.required,Validators.pattern('[0-9]{10}')]),
  });
  onSubmit(){
    this.people = {
      uname:this.forms.get('uname')?.value,
      dob:this.forms.get('dob')?.value,
      gender:this.forms.get('gender')?.value,
      email:this.user.email, 
      password:this.forms.get('password')?.value,
      phno:this.forms.get('phno')?.value,
      loanInfo:[]
    }
    this.datastorage.updateData(this.people,this.email);
    this.router.navigate(['/userprofile',this.email])
  }
}
