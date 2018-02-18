import { Component } from '@angular/core';
import {AlertController, MenuController, NavController} from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  splash =true;

  constructor(public navCtrl: NavController, menu: MenuController,public alertCtrl: AlertController) {
    menu.enable(true);

  }
  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 4000);
  }

  doAlert() {
    let alert = this.alertCtrl.create({
      title: 'Greetings',
      message: 'This Ionic app is created by R.B.M Rajapaksha for Ionic session conducted by Virtusa ' +
      'Index No=160509B    '+
      'Token Number=155',
      buttons: ['Ok']
    });1
    alert.present()
  }
}
