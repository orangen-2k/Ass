import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiUrl = 'https://5e7ca696a917d7001668397f.mockapi.io/schools';
const id = null;
@Injectable()
  export class PtService {

  constructor(private http: HttpClient) { }

  getSchools(): Observable<any>{
      return this.http.get<any>(apiUrl);
  }
  getSchoolsById(schoolsId): Observable<any>{
    let url = `${apiUrl}/${schoolsId}`;
      return this.http.get<any>(url);
  }
  removeSchoolsById(schoolsId): Observable<any>{
    let url = `${apiUrl}/${schoolsId}`;
      return this.http.delete<any>(url);
  }
  addSchools(schoolsId): Observable<any>{
    return this.http.post<any>(apiUrl, schoolsId);
  }

  updateSchools(schoolsId): Observable<any>{
    let url = `${apiUrl}/${schoolsId.id}`;
      return this.http.put<any>(url, schoolsId);
  }



  getClass(schoolsId): Observable<any> {
     let url = `${apiUrl}/${schoolsId}/class`;
    return this.http.get<any>(url);
  }
  getClassById(schoolsId, classId): Observable<any> {
    let url = `${apiUrl}/${schoolsId}/class/${classId}`;
    return this.http.get<any>(url);
  }
  removeClass(stId, motId): Observable<any>{
    let url = `${apiUrl}/${motId}/class/${stId}`;
    return this.http.delete<any>(url);
  }
  // them moi 
  addStudent(motelId, studentObject): Observable<any> {
    let url = `${apiUrl}/${motelId}/class`;
    return this.http.post<any>(url, studentObject);
  }

  // cap nhat
  updateStudent(motelId, studentObject): Observable<any>{
    let url = `${apiUrl}/${motelId}/class/${studentObject.id}`;
    return this.http.put<any>(url, studentObject);
  }
}