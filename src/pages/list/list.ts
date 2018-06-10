import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DaoyouPage } from '../daoyou/daoyou';
import { Http,Jsonp } from '@angular/http';
import { CityDataProvider } from "../../providers/city-data/city-data";

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  cityColumns: any[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public http:Http,
    public jsonp:Jsonp,
    public cityDataProvider: CityDataProvider) {
    this.cityColumns = this.cityDataProvider.cities;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  ionViewWillEnter() {
    this.http.get("http://140.143.133.139:3000/person2").subscribe(data => {
      let Data = data.json();
      if(!status){
        this.data = Data;
        console.log(this.data);
      }
    })
  }

  data = []

  daoyou(i){
    console.log(i)
    this.navCtrl.push(DaoyouPage,{name:i});
  }

}
