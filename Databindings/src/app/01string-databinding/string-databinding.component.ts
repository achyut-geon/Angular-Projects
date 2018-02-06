import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-databinding',
  templateUrl: './string-databinding.component.html',
  styleUrls: ['./string-databinding.component.css']
})
export class StringDatabindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  id=101;
  name="Achyut";
  Name="Menon";

}
