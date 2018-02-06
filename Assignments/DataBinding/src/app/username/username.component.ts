import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {

  username="";
  isresetdisabled=true;
  constructor() { }

  ngOnInit() {
  }

  onUpdate(event)
  {
    this.username=event.target.value;
    if (this.username.length>0)
    {
     this.isresetdisabled=false;
    }
    else{
      this.isresetdisabled=true;
    }
  }
  resetUsername()
  {
    this.username="";
    this.isresetdisabled=true;
  }
}
