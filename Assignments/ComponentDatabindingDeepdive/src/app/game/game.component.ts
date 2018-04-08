import { Component, OnInit,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @Output() counterChanged=new EventEmitter<{counter:number}>();
  @Output() counterStopped=new EventEmitter<{}>();
  counter:number;
  intervalid:any;
  constructor() { }

  ngOnInit() {
  }

  onCounterStart()
  {
    this.counter=1;
    this.intervalid=setInterval(()=>this.counterChanged.emit({counter:this.counter++}),1000);
  }

  onCounterStop()
  {
      clearInterval(this.intervalid);
      this.counter=0;
      this.counterStopped.emit();
  }
   

}
