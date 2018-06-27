import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http,Jsonp } from '@angular/http';
import { Storage } from '@ionic/storage';

declare var BMap;
declare var BMap_Symbol_SHAPE_POINT;

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  map: any;//地图对象
  marker: any;//标记

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public http:Http,
    public jsonp:Jsonp,
    public storage: Storage) {

  }
  ionViewDidEnter() {
    console.log('ionViewDidEnter contactPage');
  }

  ionViewWillEnter() {
    console.log('Loading Amap');
    let map = this.map = new BMap.Map('container', { enableMapClick: true });//创建地图实例

    // map.centerAndZoom("广州",17); //设置城市设置中心和地图显示级别
    let point = new BMap.Point(113.23, 23.16);//坐标可以通过百度地图坐标拾取器获取
    map.centerAndZoom(point, 17);//设置中心和地图显示级别

    map.addControl(new BMap.MapTypeControl());  
    // map.setCurrentCity("广州"); 

    let sizeMap = new BMap.Size(10, 80);//显示位置
    map.addControl(new BMap.NavigationControl());


    map.enableScrollWheelZoom(true);//启动滚轮放大缩小，默认禁用
    map.enableContinuousZoom(true);//连续缩放效果，默认禁用
    // var geolocation = new BMap.Geolocation();
    // geolocation.getCurrentPosition(function(r){
    //     if(this.getStatus() == BMAP_STATUS_SUCCESS){
    //         var mk = new BMap.Marker(r.point);
    //         map.addOverlay(mk);
    //         map.panTo(r.point);
    //         alert('您的位置：'+r.point.lng+','+r.point.lat);
    //     }
    //     else {
    //         alert('failed'+this.getStatus());
    //     }
    // },{enableHighAccuracy: true})
    this.storage.get('name').then((val) => {
      this.name = val;
      this.http.post("http://140.143.133.139:3000/task/two",{name:this.name}).subscribe(data => {
        let Data = data.json();
        console.log(Data);
        this.data = Data;
      })
    });
  }

  name = ''
  data = []
}
