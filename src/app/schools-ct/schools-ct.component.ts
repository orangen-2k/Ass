import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { PtService } from "../pt.service";

@Component({
  selector: 'app-schools-ct',
  templateUrl: './schools-ct.component.html',
  styleUrls: ['./schools-ct.component.css']
})
export class SchoolsCtComponent implements OnInit {
  schoolsData = null;
  constructor(
    private schoolService: PtService,
    private activeRoute: ActivatedRoute,
    private route: Router
  ) {}
  title = "Danh sách các lớp trong trường";
  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params => {
      let schoolId = params.get("schoolId");
      this.schoolService.getSchoolsById(schoolId).subscribe(data => {
        console.log(data);
        this.schoolsData = data;
      });
    });
  }
  removeSchools() {
    let conf = confirm("Bạn chắc chắn muốn xóa trường này?");
    if (conf) {
      this.schoolService.removeSchoolsById(this.schoolsData.id).subscribe(data => {
        this.route.navigate([""]);
      });
    }
  }
}