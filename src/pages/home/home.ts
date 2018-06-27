import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ModalController, NavParams } from 'ionic-angular';
import { Http,Jsonp } from '@angular/http';
import { LoginPage } from '../login/login';
import { RegPage } from '../reg/reg';
import { LuxianPage } from '../luxian/luxian';
import { LianxiPage } from '../lianxi/lianxi';
import { QidongPage } from '../qidong/qidong';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    public http:Http,
    public jsonp:Jsonp,
    public modalCtrl: ModalController,
    public params: NavParams,
    public storage: Storage) {
  }
  name = ""

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  ionViewWillEnter() {
    this.storage.get('name').then((val) => {
      if(val){
        console.log(val)
        this.name = val;
      }else{
        this.name = '';
        let contactModal = this.modalCtrl.create(QidongPage);
        contactModal.present();
      }
    });
    this.http.get("http://140.143.133.139:3000/luxian").subscribe(data => {
      let Data = data.json();
      if(!status){
        this.data = Data;
        console.log(this.data);
      }
    })
  }

  data = []

  luxian(i){
    this.navCtrl.push(LuxianPage,{id: i});
  }
  lianxi(){
    this.navCtrl.push(LianxiPage);
  }
}
