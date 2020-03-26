import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {PtService} from '../pt.service';

@Component({
  selector: 'app-class-ct',
  templateUrl: './class-ct.component.html',
  styleUrls: ['./class-ct.component.css']
})
export class ClassCtComponent implements OnInit {

  hotelData = null;
  constructor(
    private hotelService: PtService,
    private activeRoute: ActivatedRoute,
    private route: Router
  ) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params => {
      let hotelId = params.get('classId');
      this.hotelService.getClassById(hotelId).subscribe(data => {
        console.log(data);
        this.hotelData = data;
      })
    })
  }
}