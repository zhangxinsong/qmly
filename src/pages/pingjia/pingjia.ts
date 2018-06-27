import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http,Jsonp } from '@angular/http';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the PingjiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pingjia',
  templateUrl: 'pingjia.html',
})
export class PingjiaPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public http:Http,
    public jsonp:Jsonp,
    private toastCtrl: ToastController,
    public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PingjiaPage');
  }

  ionViewWillEnter() {
    this.storage.get('name').then((val) => {
      this.name = val;
      this.http.post("http://140.143.133.139:3000/pingjia/two",{name: this.name}).subscribe(data => {
        let Data = data.json();
        console.log(Data);
        this.data = Data;
      })
     });
  }

  name = ''
  data = []

  delete(a,b){
    this.http.post("http://140.143.133.139:3000/pingjia/delete",{id: a,}).subscribe(data => {
      let Data = data.json();
      if(Data.status){
        this.data.splice(b,1)
        let toast = this.toastCtrl.create({
          message: '删除成功',
          duration: 2000,
          position: 'middle'
        });
        toast.present();
      }
    })
  }
}
