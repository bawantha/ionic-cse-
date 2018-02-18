import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Student } from '../../data-models/Student';
import { StudentService } from '../../services/student-service';
import {StudentDetailsPage} from "../student-details/student-details";

/**
 * Generated class for the ListStudentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-students',
  templateUrl: 'list-students.html',
})
export class ListStudentsPage {

  students: Student[];
  showList: boolean;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private _studentService: StudentService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListStudentsPage');
    this._studentService.listStudents()
        .subscribe(students => {
          this.students = students;
          this.showList = true;
        });
  }

  getTopics(ev: any) {
    let serVal = ev.target.value;
    if (serVal && serVal.trim() != '') {
      this.students = this.students.filter((student) => {
        return (student.name.toLowerCase().indexOf(serVal.toLowerCase()) > -1);
      })
    }
  }

  student_selected(student){
    this.navCtrl.push(StudentDetailsPage,{
      name:student.name,
      address:student.address,
      age:student.age
    });
  }

}
