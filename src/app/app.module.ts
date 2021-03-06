import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { HotelFormComponent } from './hotel-form/hotel-form.component';
import { RoomsComponent } from './rooms/rooms.component';
import { HotelsComponent } from './hotels/hotels.component';
import { RoomsDetailComponent } from './rooms-detail/rooms-detail.component';
import { HotelService } from './hotel.service';

@NgModule({
  imports:      [ 
    BrowserModule, FormsModule , HttpClientModule,ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: HotelsComponent},
      {path: 'detail1/:hotelId', component: HotelDetailComponent},
      {path: 'rooms/:hotelId', component: RoomsDetailComponent},
      {path: 'add-hotel', component: HotelFormComponent},
      {path: 'edit-hotel/:id', component: HotelFormComponent},
    ])
    ],
  declarations: [ AppComponent, HotelDetailComponent, HotelFormComponent, RoomsComponent, HotelsComponent, RoomsDetailComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ HotelService]
})
export class AppModule { }
