import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {PtService} from '../pt.service';

@Component({
  selector: 'app-class-ct',
  templateUrl: './class-ct.component.html',
  styleUrls: ['./class-ct.component.css']
})
export class ClassCtComponent implements OnInit {

  classData = null;
  constructor(
    private classService: PtService,
    private activeRoute: ActivatedRoute,
    private route: Router
  ) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params => {
      let classId = params.get('classId');
      this.classService.getClassById(classId).subscribe(data => {
        console.log(data);
        this.classData = data;
      })
    })
  }
}