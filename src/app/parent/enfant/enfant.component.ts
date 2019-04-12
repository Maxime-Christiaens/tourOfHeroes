import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.scss']
})
export class EnfantComponent implements OnInit {
  @Input() refuse: string;

  @Input() text: string;
  @Output() textChange: EventEmitter<string> = new EventEmitter;

  @Input() number: number; 
  @Output() numberChange: EventEmitter<number> = new EventEmitter;

  message1: string = "Hello There !";
  message2: string = "Refuser";

  @Output() messageEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  sendMessage1(){
    this.numberChange.emit(12);
    this.textChange.emit('mesfgnwhnetfh,fstksage 1');
    this.messageEvent.emit(this.message1);
  }

  sendMessage2(){
    this.numberChange.emit(24);
    this.textChange.emit('meshteehhethetdethhetage 2');
    this.messageEvent.emit(this.message2);
  }

}
