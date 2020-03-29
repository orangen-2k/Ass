import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PtService } from '../pt.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-schools-ct',
  templateUrl: './schools-ct.component.html',
  styleUrls: ['./schools-ct.component.css']
})
export class SchoolsCtComponent implements OnInit {
  schoolData = null;
  classs = [];
  schoolForm = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(''),
    schoolId: new FormControl(''),
    room_number: new FormControl(''),
    total_student: new FormControl(''),
    main_teacher: new FormControl('')
});
  constructor(
    private schoolService: PtService,
    private activeRoute: ActivatedRoute,
    private route: Router
  ) {}
  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params => {
      let schoolId = params.get("schoolId");
      this.schoolService.getSchoolsById(schoolId).subscribe(data => {
        console.log(data);
        this.schoolData = data;
      });
      this.schoolService.getClass(schoolId).subscribe(data => {
        console.log(data);
        this.classs = data;
      });
    });
  }
  saveStudent() {
    this.schoolForm.value.MotelId = this.schoolData.id;
    if (this.schoolForm.value.id == null) {
      this.schoolService.addStudent(this.schoolData.id, this.schoolForm.value).subscribe(data => {
        this.ngOnInit();
      });
    } else {
      this.schoolService.updateStudent(this.schoolData.id, this.schoolForm.value).subscribe(data => {
        console.log(data);
        this.ngOnInit();
      });
    }
    this.canelClass();
  }
  canelClass() {
    this.schoolForm = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(''),
    schoolId: new FormControl(''),
    room_number: new FormControl(''),
    total_student: new FormControl(''),
    main_teacher: new FormControl('')
});
  }
  removeClass(student) {
    let conf = confirm("Bạn muốn xóa lớp này?");
    if (conf == true) {
      this.schoolService.removeClass(student.id, this.schoolData.id).subscribe(data => {
        this.ngOnInit();
      });
    }
  }
   editStudent(student) {
    console.log(this.schoolData.id);
    console.log(student.id);
    this.schoolService.getClassById(this.schoolData.id, student.id).subscribe(data => {
        console.log(data);
        this.schoolForm.setValue(data);
    });
  }
}