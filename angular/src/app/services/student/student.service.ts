import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'http://localhost:3000/students';

  constructor(private http: HttpClient) { }

  getStudent(): Observable<any> {
    return this.http.get(`${this.apiUrl}/list`);
  }
  addStudent(student: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, student);
  }

}
