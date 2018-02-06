import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  show=true;
  iCount=0;
  logs=[];
  onClick()
  {
    this.show=!this.show;
    this.iCount++;
    this.logs.push(this.iCount);
    
  }
  changebackground(count)
  {
    if (count>=5)
    {
      return 'blue';
    }
  }
  changecolor(count)
  {
    if (count>=5)
    {
      return 'whitefont';
    }
  }
}

