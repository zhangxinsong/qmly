import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PjonePage } from './pjone';

@NgModule({
  declarations: [
    PjonePage,
  ],
  imports: [
    IonicPageModule.forChild(PjonePage),
  ],
})
export class PjonePageModule {}
