import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PtService } from '../pt.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
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
  }
saveSchool(){
    if(this.schoolForm.value.id == null){
      this.schoolService.addSchools(this.schoolForm.value).subscribe(data => {
        console.log(data);
        // this.ngOnInit();
        this.route.navigate(['']);
      })
    }else {
      this.schoolService.updateSchools(this.schoolForm.value).subscribe(data => {
        // this.ngOnInit();
        this.route.navigate(['']);
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
}