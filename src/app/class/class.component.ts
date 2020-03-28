import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import {PtService} from '../pt.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  classsData = [];
  constructor(
    private classsService: PtService,
    private activeRoute: ActivatedRoute,
    private route: Router
  ) {}
  ngOnInit() {
    this.classsService.getClass().subscribe(data => {
      let schoolId = data.get("schoolId");
      this.classsService.getClass(schoolId).subscribe(data => {
        console.log(data);
        this.classsData = data;
    });
      });
  }

} 