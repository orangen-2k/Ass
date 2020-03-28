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
  hotelForm = new FormGroup({
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
      let hotelId = params.get('id');
      this.schoolService.getSchoolsById(hotelId).subscribe(data => {
      this.hotelForm.setValue(data);
      })
    })
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