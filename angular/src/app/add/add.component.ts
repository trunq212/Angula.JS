import { Component } from '@angular/core';
import { StudentService } from '../services/student/student.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  student = {
    MSSV: '',
    firstName: '',
    lastName: '',
    dob: '',
    classCode: '',
    noiDung: '',
    imageUrlChinh: '',
    imageUrlPhu: '',
    programmingLanguages: ''
  };

  constructor(private studentService: StudentService) { }

  public addStudent() {
    const noiDungArray = this.student.noiDung.split('\n').map(noiDung => noiDung.trim());
    const programmingLanguagesArray = this.student.programmingLanguages.split('\n').map(programmingLanguages => programmingLanguages.trim());
    const imageUrlPhuArray = this.student.imageUrlPhu.split('\n').map(imageUrlPhu => imageUrlPhu.trim());
    
    this.studentService.addStudent({
      MSSV: this.student.MSSV,
      firstName: this.student.firstName,
      lastName: this.student.lastName,
      dob: this.student.dob,
      classCode: this.student.classCode,
      imageUrlChinh: this.student.imageUrlChinh,
      noiDung: noiDungArray,
      imageUrlPhu: imageUrlPhuArray,
      programmingLanguages: programmingLanguagesArray

    }).subscribe(
      response => {
        console.log('đã được thêm thành công', response);
        alert('đã được thêm thành công');
        this.student = {
          MSSV: '',
          firstName: '',
          lastName: '',
          dob: '',
          classCode: '',
          noiDung: '',
          imageUrlChinh: '',
          imageUrlPhu: '',
          programmingLanguages: ''
        };
      },
      error => {
        console.error('Lỗi khi thêm ', error);
      }
    );
  }
}
