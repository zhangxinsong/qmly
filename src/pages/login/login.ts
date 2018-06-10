import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http,Jsonp } from '@angular/http';
import { ModalController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RegPage } from '../reg/reg';
import { ForgetPage } from '../forget/forget';
// import { ForgetPage } from '../forget/forget';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public http:Http,
    public jsonp:Jsonp,
    public modalCtrl: ModalController,
    public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  ionViewWillEnter() {
    let elements = document.querySelectorAll(".tabbar");
    if (elements != null) {
        Object.keys(elements).map((key) => {
            elements[key].style.display = 'none';
        });
    }
  }
  ionViewWillLeave() {
    let elements = document.querySelectorAll(".tabbar");
    if (elements != null) {
        Object.keys(elements).map((key) => {
            elements[key].style.display = 'flex';
        });
    }
  }

  username = ''
  password = ''

  login(){
    if(this.password.length < 6){
      alert('密码不能少于6位');
    }else{
      this.http.post("http://140.143.133.139:3000/login",{name:this.username,password:this.password}).subscribe(data => {
        let Data = data.json()
        if(Data.status){
          this.storage.set('name', this.username);
          console.log(Data);
          alert('登录成功');
          let contactModal = this.modalCtrl.create(HomePage, { name: this.username });
          contactModal.present();
        }else{
          console.log(Data);
          alert('用户名与密码不符');
        }
      })
    }
  }

  reg(){
    this.navCtrl.push(RegPage);
  }
  forget(){
    this.navCtrl.push(ForgetPage);
  }
}
