import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counts=[];
  
  onCounterChanged(counterdata:{counter:number})
  {
    this.counts.push(counterdata.counter);
  }
  
  onCounterStopped()
  {
    this.counts.splice(0,this.counts.length);
  }
}
