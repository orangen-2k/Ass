import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {PtService} from '../pt.service';

@Component({
  selector: 'app-class-ct',
  templateUrl: './class-ct.component.html',
  styleUrls: ['./class-ct.component.css']
})
export class ClassCtComponent implements OnInit {
  title = "Danh sách học sinh trong lớp";
  classData = null;
  constructor(
    private classService: PtService,
    private activeRoute: ActivatedRoute,
    private route: Router
  ) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(data => {
      let schoolId = data.get('schoolId');
      let classId =  data.get('classId');
      this.classService.getClassById(schoolId, classId).subscribe(data => {
        console.log(data);
        this.classData = data;
      })
    })
  }
}