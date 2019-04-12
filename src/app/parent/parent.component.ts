import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  message: string;
  text: string;
  number: number = 0;

  constructor() { }

  ngOnInit() {
    this.text = 'message 0';
  }

  receiveMessage($event){
    console.log("Receive");
    this.message = $event;
  }
}
