import { Component, OnInit } from '@angular/core';
import {PtService} from '../pt.service';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent implements OnInit {

  schools = [];
  constructor(private schoolsService: PtService) { }

  ngOnInit() {
    this.schoolsService.getSchools().subscribe(data => {
      console.log(data);
      this.schools = data;
    });
  }

} 