import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { Shezhi1Page } from '../shezhi1/shezhi1';
import { LoginPage } from '../login/login';
import { ForgetPage } from '../forget/forget';
import { AboutusPage } from '../aboutus/aboutus';
import { TaskPage } from '../task/task';
import { DingdanPage } from '../dingdan/dingdan';
import { Http,Jsonp } from '@angular/http';
import { Storage } from '@ionic/storage';
import { PingjiaPage } from '../pingjia/pingjia';

/**
 * Generated class for the WodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wode',
  templateUrl: 'wode.html',
})
export class WodePage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public jsonp: Jsonp,
    public modalCtrl: ModalController,
    public params: NavParams,
    public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WodePage');
  }
  ionViewWillEnter() {
    this.storage.get('name').then((val) => {
      if(val){
        console.log(val)
        this.name = val;
        this.http.post("http://140.143.133.139:3000/login/one",{name:this.name}).subscribe(data => {
          let Data = data.json();
          console.log(Data);
          if(Data.status == false){
            let contactModal = this.modalCtrl.create(LoginPage);
            contactModal.present();
          }else{
            this.src = Data.touxiang;
            this.name = Data.name;
            this.introduce = Data.introduce;
          }
        })
      }
    }); 
  }
  src =""
  name = ""
  introduce = ""

  shezhi(){
    this.navCtrl.push(Shezhi1Page);
  }
  forget(){
    this.navCtrl.push(ForgetPage);
  }
  aboutus(){
    this.navCtrl.push(AboutusPage);
  }
  logout(){
    this.navCtrl.push(LoginPage);
  }
  task(){
    this.navCtrl.push(TaskPage);
  }
  dingdan(){
    this.navCtrl.push(DingdanPage);
  }
  pingjia(){
    this.navCtrl.push(PingjiaPage);
  }
}
