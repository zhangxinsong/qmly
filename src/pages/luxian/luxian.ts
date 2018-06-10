import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http,Jsonp } from '@angular/http';
import { LiaotianPage } from '../liaotian/liaotian';
import { DaoyouPage } from '../daoyou/daoyou';
import { XiadanPage } from '../xiadan/xiadan';


/**
 * Generated class for the LuxianPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-luxian',
  templateUrl: 'luxian.html',
})
export class LuxianPage {

  constructor(public navCtrl: NavController,
    public http:Http,
    public jsonp:Jsonp,
    public navParams: NavParams) {
    this.id = navParams.get('id');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LuxianPage');
  }
  ionViewWillEnter() {
    let elements = document.querySelectorAll(".tabbar");
    if (elements != null) {
        Object.keys(elements).map((key) => {
            elements[key].style.display = 'none';
        });
    }
    this.http.post("http://140.143.133.139:3000/luxian/two",{id:this.id}).subscribe(data => {
      let Data = data.json();
      console.log(Data);
      this.data = Data[0];
    })
  }
  ionViewWillLeave() {
    let elements = document.querySelectorAll(".tabbar");
    if (elements != null) {
        Object.keys(elements).map((key) => {
            elements[key].style.display = 'flex';
        });
    }
  }

  id = ''
  data = []

  liaotian(){
    this.navCtrl.push(LiaotianPage);
  }
  daoyou(i){
    this.navCtrl.push(DaoyouPage,{name: i});
  }
  xiadan(){
    this.navCtrl.push(XiadanPage,{id: this.id});
  }
}
