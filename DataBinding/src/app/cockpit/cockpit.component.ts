import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  newServerContent = '';
  @Output() onServerCreated = new EventEmitter<{ serverName: string,serverContent: string }>();
  @Output() onBlueprintCreated = new EventEmitter<{serverName:
  string,
  serverContent: string
}> ();

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer() {
    this.onServerCreated.emit({serverName:this.newServerName,serverContent:this.newServerContent});
  }

  onAddBlueprint() {
    this.onBlueprintCreated.emit({serverName:this.newServerName,serverContent:this.newServerContent});
  }

  
  }
