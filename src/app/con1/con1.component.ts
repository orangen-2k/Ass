import { Component, OnInit,Input ,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-con1',
  templateUrl: './con1.component.html',
  styleUrls: ['./con1.component.css']
})
export class Con1Component implements OnInit {
@Input() herodata;
// EventEmitter giúp định nghĩ sư kiểm và thực thi nó

@Output() onRemoveEvent = new EventEmitter();
@Output() onEdit = new EventEmitter();

removeEventFire(){
    this.onRemoveEvent.emit(this.herodata);
  } 
  EditEventFire(){
    this.onEdit.emit(this.herodata);
  }
  constructor() { }

  ngOnInit() {
  }

}