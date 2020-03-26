import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PtService } from './pt.service';
import { Con1Component } from './con1/con1.component';
import { Con2Component } from './con2/con2.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, Con1Component, Con2Component ],
  bootstrap:    [ AppComponent ],
  providers: [PtService]
})
export class AppModule { }
