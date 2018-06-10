import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http,Jsonp } from '@angular/http';
import { LoginPage } from '../login/login';

/**
 * Generated class for the ForgetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forget',
  templateUrl: 'forget.html',
})
export class ForgetPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http, public jsonp:Jsonp) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgetPage');
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
  password1 = ''

  forget(){
    if(this.password.length < 6){
      alert('密码不能少于6位');
    }else{
      if(this.password == this.password1){
        this.http.post("http://www.myweiya.cn:3000/forget",{name:this.username,password:this.password}).subscribe(data => {
          let Data = data.json();
          console.log(Data);
          if(Data.status){
            alert(Data.msg);
            this.navCtrl.push(LoginPage);
          }else{
            alert('服务器内部错误')
          }
        })
      }
    }
    
  }

}
