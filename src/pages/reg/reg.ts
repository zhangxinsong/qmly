import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http,Jsonp } from '@angular/http';
import { ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';

/**
 * Generated class for the RegPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reg',
  templateUrl: 'reg.html',
})
export class RegPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public http:Http,
    private toastCtrl: ToastController,
    public jsonp:Jsonp) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegPage');
  }
  ionViewWillEnter() {
  }
  ionViewWillLeave() {
  }

  username = ''
  password = ''
  password1 = ''

  reg(){
    if(this.password.length < 6){
      let toast = this.toastCtrl.create({
        message: '密码不能少于6位',
        duration: 2000,
        position: 'middle'
      });
      toast.present();
    }
    else if(this.password == this.password1){
      this.http.post("http://www.myweiya.cn:3000/reg",{name:this.username,password:this.password}).subscribe(data => {
        console.log(data)
        let Data = data.json()
        if(Data.msg == '注册成功'){
          let toast = this.toastCtrl.create({
            message: '注册成功',
            duration: 2000,
            position: 'middle'
          });
          toast.present();
          this.navCtrl.push(LoginPage);
        }
        if(Data.msg == '此用户已经被注册'){
          let toast = this.toastCtrl.create({
            message: '此用户已经被注册',
            duration: 2000,
            position: 'middle'
          });
          toast.present(); 
        }
      })
    }
  }
}
