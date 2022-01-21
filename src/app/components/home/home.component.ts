import { Component, OnInit } from '@angular/core';
import { DatastoreService } from 'src/app/services/datastore.service';
import { Data } from 'src/app/models/data';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private dataStore:DatastoreService,private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  people:Data = this.dataStore.matchData(this.activatedroute.snapshot.paramMap.get('id'));
}
