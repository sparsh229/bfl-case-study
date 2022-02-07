import { AdminService } from './admin.service';
import { Injectable } from '@angular/core';
import {Data} from '../models/data';
import { LoanInfo } from '../models/loan-info';
import { Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DatastoreService {
  currentUser:string|null = null;
  users:Data[] = [];
  constructor(private adminservice:AdminService,private http:HttpClient) { } 
  user : Data = new Data();
  //add a new user
  setData (ipData : Data){
    this.user = ipData;
    this.users.push(this.user);

    //implementing local storage
    const jsonData = JSON.stringify(this.users);
    localStorage.setItem('myData',jsonData);

    //implementing database
    // return this.http.post("http://localhost:3000/user/register/",
    // [ipData.uname,ipData.email,ipData.dob,ipData.gender,ipData.password,ipData.phno]);
  }
  //update a user info
  updateData(ipData:Data,email:string|null){
    const jsonData:string|null = localStorage.getItem('myData');
    if(jsonData){
      this.users = JSON.parse(jsonData);
      for(let i=0;i<this.users.length;i++){
        if(this.users[i].email === email){
          this.users[i] = ipData;
        }
      }
      const jsonData1 = JSON.stringify(this.users);
      localStorage.setItem('myData',jsonData1);
    }
  }

  //retrieve user data
  matchData(email:string|null):Data{
    const jsonData:string|null = localStorage.getItem('myData');
    if(jsonData){
      var data = JSON.parse(jsonData);
    }
    //getting user of the matching email
    for(let i=0;i<data.length;i++){
      if(data[i].email == email){
        this.currentUser = data[i].email;
        return data[i];
      }
    }
    return new Data();
    // //database implementation
    // return this.http.post("http://localhost:3000/user/login/",[email,password]);
  }
  //delete a user
  deleteData(email:string|null){
    const jsonData:string|null = localStorage.getItem('myData');
    if(jsonData){
      var data = JSON.parse(jsonData);
    }
    //getting user of the matching email
    for(let i=0;i<data.length;i++){
      if(data[i].email == email){
        this.currentUser=null;
        data.splice(i,1);
        break;
      }
    }
    const jsonData1 = JSON.stringify(data);
    localStorage.setItem('myData',jsonData1);
  }

  //setting loan info
  setLoanInfo(loanInfo:LoanInfo,email:string|null){
    const jsonData:string|null = localStorage.getItem('myData');
    if(jsonData){
      var data = JSON.parse(jsonData);
    }
    //getting user of the matching email
    for(let i=0;i<data.length;i++){
      if(data[i].email == email){
        data[i].loanInfo.push(loanInfo);
        break;
      }
    }
    const jsonData1 = JSON.stringify(data);
    localStorage.setItem('myData',jsonData1);
  }

  //getting loan info
  getLoanInfo(email:string|null):LoanInfo[]{
    const jsonData:string|null = localStorage.getItem('myData');
    if(jsonData){
      var data = JSON.parse(jsonData);
    }
    //getting user of the matching email
    for(let i=0;i<data.length;i++){
      if(data[i].email == email){
        return data[i].loanInfo;
      }
    }
    return [];
  }
  //getting a loan info by index
  getLoanInfoByIndex(email:string|null,index:string|null):LoanInfo{
    const jsonData:string|null = localStorage.getItem('myData');
    if(jsonData){
      var data = JSON.parse(jsonData);
    }
    var j =0;
    if(index!==null){
      j = parseInt(index);
    }
    //getting user of the matching email
    for(let i=0;i<data.length;i++){
      if(data[i].email == email){
        return data[i].loanInfo[j];
      }
    }
    return new LoanInfo();
  }

  //getting all users
  getAllUsers():Data[]{
    const jsonData:string|null = localStorage.getItem('myData');
    if(jsonData){
      var data = JSON.parse(jsonData);
    }
    return data;
  }

  //updating isApproved
  updateApproval(email:string,index:number){
    const jsonData:string|null = localStorage.getItem('myData');
    if(jsonData){
      var data = JSON.parse(jsonData);
    }
    //getting user of the matching email
    for(let i=0;i<data.length;i++){
      if(data[i].email == email){
        data[i].loanInfo[index].isApproved = true;
        data[i].loanInfo[index].isVisited = true;
        break;
      }
    }
    const jsonData1 = JSON.stringify(data);
    localStorage.setItem('myData',jsonData1);
  }
  //updating comment
  updateComment(email:string,index:number,feedback:string){
    const jsonData:string|null = localStorage.getItem('myData');
    if(jsonData){
      var data = JSON.parse(jsonData);
    }
    //getting user of the matching email
    for(let i=0;i<data.length;i++){
      if(data[i].email == email){
        data[i].loanInfo[index].feedback = feedback;
        data[i].loanInfo[index].isVisited = true;
        break;
      }
    }
    const jsonData1 = JSON.stringify(data);
    localStorage.setItem('myData',jsonData1);
  }
}
