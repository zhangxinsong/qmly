import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CityDataProvider } from "../../providers/city-data/city-data";
import { Http,Jsonp } from '@angular/http';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  cityColumns: any[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public cityDataProvider: CityDataProvider,
    public http:Http,
    public jsonp:Jsonp,
    private toastCtrl: ToastController,
    public storage: Storage) {
    this.cityColumns = this.cityDataProvider.cities;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }
  ionViewWillEnter(){
    this.storage.get('name').then((val) => {
      this.name = val;
    });
  }

  name = ""
  title = ""
  area = ""
  fangshi = ""
  year = ""
  month = ""
  day = ""
  tianshu = ""
  leixing = ""
  miaoshu = ""

  fabu(){
    let postdata = {
      name: this.name,
      title: this.title,
      area: this.area,
      fuwu: this.fangshi,
      year: this.year,
      month: this.month,
      day: this.day,
      tianshu: this.tianshu,
      type: this.leixing,
      miaoshu: this.miaoshu
    }
    this.http.post("http://www.myweiya.cn:3000/task",postdata).subscribe(data => {
      let Data = data.json();
      console.log(Data);
      if(Data.status){
        let toast = this.toastCtrl.create({
          message: '发布成功',
          duration: 2000,
          position: 'middle'
        });
        toast.present();
        this.title = ""
        this.area = ""
        this.fangshi = ""
        this.year = ""
        this.month = ""
        this.day = ""
        this.tianshu = ""
        this.leixing = ""
        this.miaoshu = ""
      }
    })
  }

}
