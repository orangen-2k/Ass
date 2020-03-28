import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PtService } from '../pt.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-schools-cn',
  templateUrl: './schools-cn.component.html',
  styleUrls: ['./schools-cn.component.css']
})
export class SchoolsCnComponent implements OnInit {
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
    private route: Router,
  ) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params =>{
      let schoolId = params.get('id');
      this.schoolService.getSchoolsById(schoolId).subscribe(data => {
      this.schoolForm.setValue(data);
      })
    })
  }
  
  saveSchool(){
      this.schoolService.updateSchools(this.schoolForm.value).subscribe(data => {
        console.log(data);
        this.route.navigate(['']);
      })
    }
}