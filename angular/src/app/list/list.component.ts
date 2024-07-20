import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student/student.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  public students: any[] = [];

  constructor(private _studentService: StudentService) {}

  ngOnInit() {
    this._studentService.getStudent().subscribe(
      (data) => {
        this.students = data;
      },
      (error) => {
        console.error('Error fetching products', error);
      }
    );
  }
}
