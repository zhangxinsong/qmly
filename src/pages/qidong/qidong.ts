import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the QidongPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qidong',
  templateUrl: 'qidong.html',
})
export class QidongPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QidongPage');
  }

  login(){
    let contactModal = this.modalCtrl.create(LoginPage);
    contactModal.present();
  }

}
