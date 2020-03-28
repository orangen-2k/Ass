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
  
  classs = [];
  schoolForm = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(''),
    logo: new FormControl(''),
    address: new FormControl(''),
    president: new FormControl(''),
    province: new FormControl('')
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
      });
      this.schoolService.getClass(schoolId).subscribe(data => {
        console.log(data);
        this.classs = data;
      });
    });
  }
  saveClass(){
    if(this.schoolForm.value.id == null){
      this.schoolService.addSchools(this.schoolForm.value).subscribe(data => {
        console.log(data);
        this.route.navigate(['']);
      })
    }else {
      this.schoolService.updateSchools(this.schoolForm.value).subscribe(data => {
        this.ngOnInit();
      });
    }
    this.canelClass();
  }
  canelClass() {
    this.schoolForm = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(""),
      logo: new FormControl(""),
      address: new FormControl(''),
      president: new FormControl(''),
      province: new FormControl('')
    });
  }
  removeClass() {
    let conf = confirm("Bạn chắc chắn muốn xóa trường này?");
    if (conf) {
      this.schoolService.removeSchoolsById(this.schoolsData.id).subscribe(data => {
        this.route.navigate([""]);
      });
    }
  }
  editClass(motel) {
    this.schoolService.getSchoolsById(motel.id).subscribe(data => {
      this.schoolForm.setValue(data);
    });
  }
}