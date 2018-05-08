import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegPage } from '../reg/reg';
import { LuxianPage } from '../luxian/luxian'; 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  items = [
    {
      title:'sdasdasdasd',
      miaoshu:'止呕盎司频道贵金属考虑到先从集散地分开收款的没事多了几分破',
      listimg:'assets/imgs/logo.png'
    },
    {
      title:'sdasdasdasd',
      miaoshu:'止呕盎司频道贵金属考虑到先从集散地分开收款的没事多了几分破',
      listimg:'assets/imgs/logo.png'
    },
    {
      title:'sdasdasdasd',
      miaoshu:'止呕盎司频道贵金属考虑到先从集散地分开收款的没事多了几分破',
      listimg:'assets/imgs/logo.png'
    },
    {
      title:'sdasdasdasd',
      miaoshu:'止呕盎司频道贵金属考虑到先从集散地分开收款的没事多了几分破',
      listimg:'assets/imgs/logo.png'
    }
  ]

  login(){
    this.navCtrl.push(LoginPage);
  }
  reg(){
    this.navCtrl.push(RegPage);
  }
  luxian(){
    this.navCtrl.push(LuxianPage);
  }
}
