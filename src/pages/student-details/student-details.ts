import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Student} from "../../data-models/Student";
import {StudentService} from "../../services/student-service";

/**
 * Generated class for the StudentDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-student-details',
  templateUrl: 'student-details.html',
})
export class StudentDetailsPage {
  students: Student[];
  showList: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,private _studentService: StudentService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentDetailsPage');
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

}
