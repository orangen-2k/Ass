import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { PtService } from "../pt.service";

@Component({
  selector: 'app-schools-ct',
  templateUrl: './schools-ct.component.html',
  styleUrls: ['./schools-ct.component.css']
})
export class SchoolsCtComponent implements OnInit {

  hotelData = null;
  constructor(
    private hotelService: PtService,
    private activeRoute: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params => {
      let hotelId = params.get("schoolId");
      this.hotelService.getHotelById(hotelId).subscribe(data => {
        console.log(data);
        this.hotelData = data;
      });
    });
  }
  removeHotel() {
    let conf = confirm("Bạn chắc chắn muốn xóa khách sạn này?");
    if (conf) {
      this.hotelService.removeHotelById(this.hotelData.id).subscribe(data => {
        this.route.navigate([""]);
      });
    }
  }
}