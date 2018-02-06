import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  hasText = false;
  serverId='';
  servers =[];
  logs=[];
  onInputChanged()
  {
    if (this.serverId.length>0)
    {
      this.hasText=true;
    }
    else
    {
      this.hasText=false;
    }

  }
  addServer()
  {
    this.servers.push(this.serverId);
  }
  getBackgroundColor(serverId)
  {
    return Number(serverId)%2===0 ? "red":"blue";
  }
  getNumberType(serverId)
  {
    return Number(serverId)%2===0 ? "even":"odd";
  }
  onClick()
  {
    this.logs.push(new Date());
  }
}
