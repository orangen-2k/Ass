import { Component, OnInit } from '@angular/core';
import {PtService} from '../pt.service';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent implements OnInit {

  hotels = [];
  constructor(private hotelService: PtService) { }

  ngOnInit() {
    this.hotelService.getSchools().subscribe(data => {
      console.log(data);
      this.hotels = data;
    });
  }

} 