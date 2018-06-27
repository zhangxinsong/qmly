import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http,Jsonp } from '@angular/http';
import { CityDataProvider } from "../../providers/city-data/city-data";
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the Shezhi1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shezhi1',
  templateUrl: 'shezhi1.html',
})
export class Shezhi1Page {
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
    console.log('ionViewDidLoad Shezhi1Page');
  }
  ionViewDidEnter() {

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
      this.http.post("http://140.143.133.139:3000/login/one",{name:this.name}).subscribe(data => {
        let Data = data.json();
        console.log(Data);
        this.src = Data.touxiang;
        this.sex = Data.sex;
        this.age = Data.age;
        this.year = Data.brithday.year;
        this.month = Data.brithday.month;
        this.day = Data.brithday.day;
        this.area = Data.area;
        this.introduce = Data.introduce;
      })
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
  src = 'assets/imgs/slide-1.png'
  src1 = ''
  sex = ''
  area = ''
  age = ''
  year = ''
  month = ''
  day = ''
  introduce = ''

  baocun(){
    var image = document.getElementById('touxiang') as HTMLImageElement;
    this.src = image.src;
    let dates = {
      name:this.name,
      touxiang:this.src,
      sex:this.sex,
      age:this.age,
      brithday:{
        year:this.year,
        month:this.month,
        day:this.day
      },
      area:this.area,
      introduce:this.introduce
    }
    this.http.post("http://www.myweiya.cn:3000/person",dates).subscribe(data => {
      let Data = data.json()
      if(Data.status){
        let toast = this.toastCtrl.create({
          message: '修改成功',
          duration: 2000,
          position: 'middle'
        });
        toast.present();
      }
    })
  }

  selectImage(event){
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.readAsDataURL(file);
    reader.onload = function(){
      var image = document.getElementById('touxiang') as HTMLImageElement;
      image.src = reader.result;
    }
  }

}
