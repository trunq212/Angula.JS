import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiUrl = 'http://localhost:3000/home';

  constructor(private http: HttpClient) { }

  getStudentHome(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }
  getStudentById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/detail/${id}`);
  }
}
