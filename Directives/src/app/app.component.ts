import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  hasText = false;
  serverId='';
  servers =[];
  logs=[];
  values=[];
  classvalue:string;
  ngOnInit()
  {
    this.values.push(1);
    this.values.push(2);
    this.values.push(3);

  }

  getValue(a)
  {
    let panelStyle:string;
    panelStyle=a===1?"panel panel-danger":a===2?"panel panel-success":a===3?"panel panel-info":"panel panel-default"
    return panelStyle
  //  if (a==1)
  //   return "panel panel-danger"
  //  else
  //   return "panel panel-success"
    
  }

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
