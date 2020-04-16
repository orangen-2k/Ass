import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PtService } from '../pt.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-showall',
  templateUrl: './showall.component.html',
  styleUrls: ['./showall.component.css']
})
export class ShowallComponent implements OnInit {
  schools = []; 
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

}