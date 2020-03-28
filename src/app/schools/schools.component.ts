import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PtService } from '../pt.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent implements OnInit {
  schools = [];

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
    private route: Router) { }

  ngOnInit() {
    this.schoolService.getSchools().subscribe(data => {
      console.log(data);
      this.schools = data;
    });
  }
  editMotels(motel) {
    this.schoolService.getSchoolsById(motel.id).subscribe(data => {
      this.schoolForm.setValue(data);
    });
  }
  saveSchool(){
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
    this.canelSchools();
  }
  canelSchools() {
    this.schoolForm = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(""),
      logo: new FormControl(""),
      address: new FormControl(''),
      president: new FormControl(''),
      province: new FormControl('')
    });
  }
  removeSchools(motel) {
    let conf = confirm("Bạn muốn xóa trường này?");
    if (conf == true) {
      this.schoolService.removeSchoolsById(motel.id).subscribe(data => {
        this.ngOnInit();
      });
    }
  }
} 