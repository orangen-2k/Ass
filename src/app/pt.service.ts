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
  getSchoolsById(hotelId): Observable<any>{
    let url = `${apiUrl}/${hotelId}`;
    return this.http.get<any>(url);
  }
getClass(): Observable<any>{
    return this.http.get<any>(apiUrl+"/3"+"/class");
  }
  getClassById(roomId): Observable<any>{
    let url = `${apiUrl+"/3"+"/class"}/${roomId}`;
    return this.http.get<any>(url);
  }
}