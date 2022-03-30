import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = "No server is Created!";
  serverName = "Test Server";
  userName = "";
  allowAddNewUser=false;
  createServer = false;
  servers = ['TestServer', 'TestServer 2'];
  showSecret = false;
  log=[];
  

  constructor() { 
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000);


  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.createServer = true;
    this.servers.push(this.serverName)
    this.serverCreationStatus = "New server is created. Name is " + this.serverName;
  }
  onUpdateServerName(event : Event){
    console.log(event)
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  onToggleDetails(event: Event){
    this.showSecret = !this.showSecret;
    this.log.push(new Date())
  }
  
}
