import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oneway-binding',
  templateUrl: './oneway-binding.component.html',
  styleUrls: ['./oneway-binding.component.css']
})
export class OnewayBindingComponent implements OnInit {

  employeename;
  constructor() { }

  ngOnInit() {
  }

  onInputChanged(event)
  {
    this.employeename=event.target.value;
  }

}
