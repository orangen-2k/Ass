import { Component, OnInit } from '@angular/core';
import {PtService} from '../pt.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  classsData = [];
  constructor(private classsService: PtService) { }

  ngOnInit() {
    this.classsService.getClass().subscribe(data => {
      console.log(data);
      this.classsData = data;
    });
  }

} 