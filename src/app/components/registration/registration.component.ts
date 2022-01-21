import { Component, OnInit } from '@angular/core';
import { DatastoreService } from 'src/app/services/datastore.service';
import {Data} from '../../models/data';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  people : Data = new Data();
  constructor(private dataStore:DatastoreService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.dataStore.setData(this.people);
    this.people = new Data();
    this.router.navigateByUrl("/login");
  }

}
