import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule, JsonpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { WodePage } from '../pages/wode/wode';
import { ListPage } from '../pages/list/list';
import { RegPage } from '../pages/reg/reg';
import { LuxianPage} from '../pages/luxian/luxian';
import { DaoyouPage } from '../pages/daoyou/daoyou';
import { LiaotianPage } from '../pages/liaotian/liaotian';
import { LianxiPage } from '../pages/lianxi/lianxi';
import { XiadanPage } from '../pages/xiadan/xiadan';
import { Shezhi1Page } from '../pages/shezhi1/shezhi1';
import { ForgetPage } from '../pages/forget/forget';
import { QidongPage } from '../pages/qidong/qidong';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { TaskPage } from '../pages/task/task';
import { DingdanPage } from '../pages/dingdan/dingdan';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MultiPickerModule } from 'ion-multi-picker';
import { CityDataProvider } from '../providers/city-data/city-data';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    WodePage,
    ListPage,
    RegPage,
    LuxianPage,
    DaoyouPage,
    LianxiPage,
    LiaotianPage,
    XiadanPage,
    Shezhi1Page,
    ForgetPage,
    QidongPage,
    AboutusPage,
    TaskPage,
    DingdanPage
  ],
  imports: [
    HttpModule,
    JsonpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    MultiPickerModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    WodePage,
    TabsPage,
    LoginPage,
    ListPage,
    RegPage,
    LuxianPage,
    DaoyouPage,
    LianxiPage,
    LiaotianPage,
    XiadanPage,
    Shezhi1Page,
    ForgetPage,
    QidongPage,
    AboutusPage,
    TaskPage,
    DingdanPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CityDataProvider
  ]
})
export class AppModule {}
