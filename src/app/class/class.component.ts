import { Component, OnInit } from '@angular/core';
import {PtService} from '../pt.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  hotels = [];
  constructor(private hotelService: PtService) { }

  ngOnInit() {
    this.hotelService.getClass().subscribe(data => {
      console.log(data);
      this.hotels = data;
    });
  }

} 