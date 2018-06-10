import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LiaotianPage } from "../liaotian/liaotian";

/**
 * Generated class for the LianxiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lianxi',
  templateUrl: 'lianxi.html',
})
export class LianxiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LianxiPage');
  }

  liaotian(){
    this.navCtrl.push(LiaotianPage);
  }
}
