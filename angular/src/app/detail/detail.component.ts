import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '..//services/home/home.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit {
  public student: any;

  constructor(
    private route: ActivatedRoute,
    private _studentService: HomeService
  ) {}

  ngOnInit() {
    const studentId = this.route.snapshot.paramMap.get('id');
    if (studentId) {
      this.getStudentById(studentId);
    }
  }

  getStudentById(id: string): void {
    this._studentService.getStudentById(id).subscribe(
      (data) => {
        this.student = data;
      },
      (error) => {
        console.error('Error fetching product', error);
      }
    );
  }
}
