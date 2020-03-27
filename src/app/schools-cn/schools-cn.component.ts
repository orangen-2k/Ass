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
    private hotelService: PtService,
    private route: Router,
    private activeRoute: ActivatedRoute
  ) { }

    ngOnInit() {
    this.activeRoute.paramMap.subscribe(params =>{
      let hotelId = params.get('id');
      this.hotelService.getSchoolsById(hotelId).subscribe(data => {
       this.hotelForm.setValue(data);
      })
    })
  }
  
  saveHotel(){
    if(this.hotelForm.value.id == null){
      // thêm mới
      this.hotelService.addNewHotel(this.hotelForm.value).subscribe(data => {
        console.log(data);
        this.route.navigate(['']);
      })
    }else{
      // cập nhật
      this.hotelService.updateHotel(this.hotelForm.value).subscribe(data => {
        console.log(data);
        this.route.navigate(['']);
      })
    }
  }
}