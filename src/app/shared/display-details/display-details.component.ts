import { Component, OnChanges, Input, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {

  @Input() inputDisplayName: string;
  public displayName: string;

  constructor() { }

  ngOnInit() {
    console.log("ngOnInit from displayDetails");
    this.displayName = this.inputDisplayName;
  }

}
