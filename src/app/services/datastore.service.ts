import { Injectable } from '@angular/core';
import {Data} from '../models/data';
@Injectable({
  providedIn: 'root'
})
export class DatastoreService {
  users:Data[] = [];
  constructor() { } 
  user : Data = new Data();
  setData (ipData : Data){
    this.user = ipData;
    this.users.push(this.user);

    //implementing local storage
    const jsonData = JSON.stringify(this.users);
    localStorage.setItem('myData',jsonData);
  }
  matchData(email?:string):Data{
    const jsonData:string|null = localStorage.getItem('myData');
    if(jsonData){
      var data = JSON.parse(jsonData);
    }
    //getting user of the matching email
    for(let i=0;i<data.length;i++){
      if(data[i].email == email){
        return data[i];
      }
    }
    return new Data();
  }
}
