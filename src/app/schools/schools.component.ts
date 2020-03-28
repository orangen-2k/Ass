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
  hotelForm = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(''),
    logo: new FormControl(''),
    address: new FormControl(''),
    president: new FormControl(''),
    province: new FormControl('')
});
  schools = null;
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
  removeSchools() {
    let conf = confirm("Bạn chắc chắn muốn xóa trường này?");
    if (conf) {
      this.schoolService.removeSchoolsById(this.schools.id).subscribe(data => {
        this.route.navigate([""]);
      });
    }
  }
  saveHotel(){
    if(this.hotelForm.value.id == null){
      this.schoolService.addNewHotel(this.hotelForm.value).subscribe(data => {
        console.log(data);
        this.route.navigate(['']);
      })
    }else{
      this.schoolService.updateHotel(this.hotelForm.value).subscribe(data => {
        console.log(data);
        this.route.navigate(['']);
      })
    }
  }
} 