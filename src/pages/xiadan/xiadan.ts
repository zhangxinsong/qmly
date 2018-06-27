import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http,Jsonp } from '@angular/http';
import { Storage } from '@ionic/storage';
import { DingdanPage } from '../dingdan/dingdan';

/**
 * Generated class for the XiadanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-xiadan',
  templateUrl: 'xiadan.html',
})
export class XiadanPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public http:Http,
    public jsonp:Jsonp,
    public storage: Storage) {
      this.id = navParams.get('id');
      this.img = navParams.get('img');
      this.biaoti = navParams.get('biaoti');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad XiadanPage');
  }
  ionViewWillEnter() {
    let elements = document.querySelectorAll(".tabbar");
    if (elements != null) {
        Object.keys(elements).map((key) => {
            elements[key].style.display = 'none';
        });
    }
    this.storage.get('name').then((val) => {
     this.name = val;
    });
    this.http.post("http://140.143.133.139:3000/luxian/two",{id:this.id}).subscribe(data => {
      let Data = data.json();
      console.log(Data);
      this.data = Data[0];
      this.daoyou = Data[0].name;
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
  img =''
  biaoti = ''
  name = ''
  renshu:Number
  mobile:Number
  ren = ''
  youhuquan=""
  data = []
  daoyou = ''

  zhifu(){
    let postdata = {
      name: this.name,
      daoyou: this.daoyou,
      zhuangtai: "yuding",
      renshu : this.renshu,
      mobile: this.mobile,
      luxianid: this.id,
      luxianimg: this.img,
      luxianbiaoti: this.biaoti
    }
    this.http.post("http://140.143.133.139:3000/dingdan",postdata).subscribe(data => {
      if(data){
        let Data = data.json();
        console.log(Data);
        this.navCtrl.push(DingdanPage, {content:"all"});
      }  
    })
  }

}
