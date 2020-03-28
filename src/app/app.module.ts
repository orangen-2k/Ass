import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { PtService } from './pt.service';
import { SchoolsComponent } from './schools/schools.component';
import { ClassComponent } from './class/class.component';
import { SchoolsCtComponent } from './schools-ct/schools-ct.component';
import { ClassCtComponent } from './class-ct/class-ct.component';
import { SchoolsCnComponent } from './schools-cn/schools-cn.component';

@NgModule({
  imports:      [ 
    BrowserModule, FormsModule , HttpClientModule,ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: SchoolsComponent},
      {path: 'school/:schoolId', component: SchoolsCtComponent},
      {path: 'class/:classId', component: ClassCtComponent},
      {path: 'schoolscn/:id', component: SchoolsCnComponent},
      {path: 'schoolstt', component: SchoolsCnComponent},
    ])
    ],
  declarations: [ AppComponent, SchoolsComponent, ClassComponent, SchoolsCtComponent, ClassCtComponent, SchoolsCnComponent ],
  bootstrap:    [ AppComponent ],
  providers: [PtService]
})
export class AppModule { }
