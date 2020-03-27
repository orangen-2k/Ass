import { Component,OnInit } from '@angular/core';
import {PtService} from './pt.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = "Danh sách thông tin trường đại học thành phố Hà Nội";

  constructor(){}

  ngOnInit() {
  }
}
