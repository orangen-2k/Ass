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
  saveClass() {
    this.schoolForm.value.schoolId = this.schoolData.id;
    if (this.schoolForm.value.id == null) {
      this.schoolService.addClass(this.schoolData.id, this.schoolForm.value).subscribe(data => {
        this.ngOnInit();
      });
    } else {
      this.schoolService.updateClass(this.schoolData.id, this.schoolForm.value).subscribe(data => {
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
  myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
}