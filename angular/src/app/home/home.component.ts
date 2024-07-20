import { Component , OnInit } from '@angular/core';
import { HomeService } from '../services/home/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  public students: any[] = [];

  constructor(private _studentService: HomeService) {}

  ngOnInit() {
    this._studentService.getStudentHome().subscribe(
      (data) => {
        this.students = data;
      },
      (error) => {
        console.error('Error fetching ', error);
      }
    );
  }

  getStudentById(id: string): void {
    this._studentService.getStudentById(id).subscribe(
      (data) => { // Sửa kiểu dữ liệu của data
        console.log('Student:', data);
      },
    );
  }
}
