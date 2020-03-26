import { Component,OnInit } from '@angular/core';
import {PtService} from './pt.service';
import { Lophoc } from './lophoc';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = "Danh sách trường đại học thành phố Hà Nội";

  datalh: Lophoc[];
  constructor(
    private ptService: PtService
  ){}

  getdatalh(){
   this.datalh = this.ptService.getdatalh();
   console.log(this.ptService)
  }
  ngOnInit() {
    this.getdatalh();
  }
  chuy(chuyen){
    this.data = chuyen;
  }
  
  cancel(){
    this.data = {
    id: null,
    name: null,
    room_number: null,
    total_student: null,
    schoolId: null,
    main_teacher: null,
    }
  }
  
  data = {
    id: null,
    name: null,
    room_number: null,
    total_student: null,
    schoolId: null,
    main_teacher: null,
  }
  themtt(){
    if(this.data.id == null){
      let maxId = 0;
      this.datalh.forEach(function(item){
        if(item.id >= maxId){
          maxId = item.id;
        }
      });
      this.data.id = ++maxId;
      this.datalh.push(this.data);
    }
    this.cancel();
  }

  xoatt(chuyen){
    this.datalh = this.datalh.filter(function(item){
      return item != chuyen;
    });
  } 
}
