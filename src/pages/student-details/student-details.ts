import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  stu_name:string;
  stu_address:string;
  stu_age:number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.stu_name = this.navParams.get('name');
    this.stu_address = this.navParams.get('address');
    this.stu_age = this.navParams.get('age');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentDetailsPage');
  }

}
