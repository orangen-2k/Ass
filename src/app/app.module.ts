import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { PtService } from './pt.service';
import { SchoolsComponent } from './schools/schools.component';
import { SchoolsCtComponent } from './schools-ct/schools-ct.component';
import { ShowallComponent } from './showall/showall.component';
import { AddComponent } from './add/add.component';

@NgModule({
  imports:      [ 
    BrowserModule, FormsModule , HttpClientModule,ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: SchoolsComponent},
      {path: 'show', component: ShowallComponent},
      {path: 'add', component: AddComponent},
      {path: 'school/:schoolId', component: SchoolsCtComponent},
    ])
    ],
  declarations: [ AppComponent, SchoolsComponent, SchoolsCtComponent, ShowallComponent, AddComponent ],
  bootstrap:    [ AppComponent ],
  providers: [PtService]
})
export class AppModule { }
