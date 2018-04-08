import { Component, OnInit,EventEmitter,Output,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverAdded=new EventEmitter<{serverName:string,serverContent:string}>();
  @Output() blueprintAdded=new EventEmitter<{serverName:string,serverContent:string}>();
  
  // newServerName='';
  // newServerContent='';
  @ViewChild('serverContentInput') serverContentInput:ElementRef

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput:HTMLInputElement)
  {
    this.serverAdded.emit(
      {serverName:nameInput.value,serverContent:this.serverContentInput.nativeElement.value});
  }

  onAddBluePrint(nameInput:HTMLInputElement)
  {
    this.blueprintAdded.emit(
      {serverName:nameInput.value,serverContent:this.serverContentInput.nativeElement.value});
  }

}
