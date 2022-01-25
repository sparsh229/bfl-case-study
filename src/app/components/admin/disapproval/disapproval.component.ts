import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-disapproval',
  templateUrl: './disapproval.component.html',
  styleUrls: ['./disapproval.component.css']
})
export class DisapprovalComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  feedback = new FormControl('');
  onSubmit(){
    //onSubmit send the feedback to the service and reflect into your status page
    this.router.navigate(['/admin']);
  }
}
