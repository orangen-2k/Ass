import { Component, OnInit,Input ,Output,EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-con2',
  templateUrl: './con2.component.html',
  styleUrls: ['./con2.component.css']
})
export class Con2Component implements OnInit {
@Input() herodata;
// EventEmitter giúp định nghĩ sư kiểm và thực thi nó

@Output() onClear = new EventEmitter();
@Output() onAdd = new EventEmitter();

ClearEventFire(){
    this.onClear.emit(this.herodata);
  } 
AddEventFire(){
    this.onAdd.emit(this.herodata);
  } 
  constructor() { }

  ngOnInit() {
  }

}