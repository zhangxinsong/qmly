import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WodePage } from './wode';

@NgModule({
  declarations: [
    WodePage,
  ],
  imports: [
    IonicPageModule.forChild(WodePage),
  ],
})
export class WodePageModule {}
