import { TranslateModule } from '@ngx-translate/core';

import { NgModule } from '@angular/core';
import { AppSettingPage } from './app-setting';
import { AppSettingPageRoutingModule } from './app-setting-routing.module';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
@NgModule({
  declarations: [
    AppSettingPage,
  ],
  imports: [
    CommonModule,IonicModule,
    AppSettingPageRoutingModule,
    TranslateModule.forChild()
  ],
})
export class AppSettingPageModule {}
