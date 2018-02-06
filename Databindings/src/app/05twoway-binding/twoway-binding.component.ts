import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway-binding',
  templateUrl: './twoway-binding.component.html',
  styleUrls: ['./twoway-binding.component.css']
})
export class TwowayBindingComponent implements OnInit {

  employeename="Achyut";
  constructor() { }

  ngOnInit() {
  }

  onInputChanged(event)
  {
    this.employeename=event.target.value;
  }

}
