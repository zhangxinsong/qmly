import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LuxianPage } from '../luxian/luxian';
import { Http,Jsonp } from '@angular/http';

/**
 * Generated class for the DaoyouPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-daoyou',
  templateUrl: 'daoyou.html',
})
export class DaoyouPage {

  constructor(public navCtrl: NavController,
    public http:Http,
    public jsonp:Jsonp,
    public navParams: NavParams) {
      this.name = navParams.get('name');
      console.log(this.name)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DaoyouPage');
  }
  ionViewWillEnter() {
    let elements = document.querySelectorAll(".tabbar");
    if (elements != null) {
        Object.keys(elements).map((key) => {
            elements[key].style.display = 'none';
        });
    }
    this.http.post("http://140.143.133.139:3000/person2/two",{name:this.name}).subscribe(data => {
      console.log(data)
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

  name = ''
  data = {}

  luxian(i){
    this.navCtrl.push(LuxianPage);
  }
}
