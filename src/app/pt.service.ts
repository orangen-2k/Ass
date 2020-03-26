import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiUrl = 'https://5e7ca696a917d7001668397f.mockapi.io/schools';
@Injectable()
export class PtService {

constructor(private http: HttpClient) { }

  getSchools(): Observable<any>{
    return this.http.get<any>(apiUrl);
  }
  getHotelById(hotelId): Observable<any>{
    let url = `${apiUrl}/${hotelId}`;
    return this.http.get<any>(url);
  }
  removeHotelById(hotelId): Observable<any>{
    let url = `${apiUrl}/${hotelId}`;
    return this.http.delete<any>(url);
  }
  addNewHotel(hotelObject): Observable<any>{
    return this.http.post<any>(apiUrl, hotelObject);
  }

  updateHotel(hotelObject): Observable<any>{
    let url = `${apiUrl}/${hotelObject.id}`;
    return this.http.put<any>(url, hotelObject);
  }
}