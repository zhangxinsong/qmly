import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http,Jsonp } from '@angular/http';
import { ToastController } from 'ionic-angular';
import { RegPage } from '../reg/reg';
import { TabsPage } from '../tabs/tabs'; 
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
    private toastCtrl: ToastController,
    public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  ionViewWillEnter() {
    
  }
  ionViewWillLeave() {

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
          let toast = this.toastCtrl.create({
            message: '登录成功',
            duration: 2000,
            position: 'middle'
          });
          toast.present();
          this.navCtrl.setRoot(TabsPage);
        }else{
          let toast = this.toastCtrl.create({
            message: '用户名密码不符',
            duration: 2000,
            position: 'middle'
          });
          toast.present();
        }
      })
    }
  }

  showToast() {
    
  }

  reg(){
    this.navCtrl.push(RegPage);
  }
  forget(){
    this.navCtrl.push(ForgetPage);
  }
}
