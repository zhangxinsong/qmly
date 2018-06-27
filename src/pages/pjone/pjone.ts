import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http,Jsonp } from '@angular/http';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { PingjiaPage } from '../pingjia/pingjia';

/**
 * Generated class for the PjonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pjone',
  templateUrl: 'pjone.html',
})
export class PjonePage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public http:Http,
    public jsonp:Jsonp,
    private toastCtrl: ToastController,
    public storage: Storage) {
      this.daoyou = navParams.get('daoyou');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PjonePage');
  }

  ionViewWillEnter() {
    this.storage.get('name').then((val) => {
      this.name = val;
      this.http.post("http://140.143.133.139:3000/person2/two",{name: this.daoyou}).subscribe(data => {
        let Data = data.json();
        console.log(Data);
        this.img1 = Data[0].touxiang;
      })
      this.http.post("http://140.143.133.139:3000/login/one",{name: this.name}).subscribe(data => {
        let Data = data.json();
        console.log(Data);
        this.img = Data.touxiang;
      })
     });
  }

  img1 = ''
  name = ''
  daoyou = ''
  pingjia = ''
  img = ''

  pj(){
    let postdata = {
      name:this.name,
      daoyou: this.daoyou,
      pingjia: this.pingjia,
      img: this.img
    }
    this.http.post("http://140.143.133.139:3000/pingjia/one",postdata).subscribe(data => {
      let Data = data.json();
      if(Data.status){
        let toast = this.toastCtrl.create({
        message: '评价成功',
        duration: 2000,
        position: 'middle'
        });
        toast.present();
        this.navCtrl.push(PingjiaPage);
      } 
    })
  }

}
