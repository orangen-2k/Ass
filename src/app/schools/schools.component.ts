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
  schools = []; 

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
    this.schoolService.getSchools().subscribe(data => {
      console.log(data);
      this.schools = data;
    });
  }
  editMotels(motel) {
    this.schoolService.getSchoolsById(motel.id).subscribe(data => {
      this.schoolForm.setValue(data);
    });
  }
  removeSchools(motel) {
    let conf = confirm("Bạn muốn xóa trường này?");
    if (conf == true) {
      this.schoolService.removeSchoolsById(motel.id).subscribe(data => {
        this.ngOnInit();
      });
    }
  }
  myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
} 