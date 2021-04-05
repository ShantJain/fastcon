import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { NotificationPage } from './notification';
import { IonicImageLoaderModule } from 'ionic-image-loader-v5';
import { NotificationPageRoutingModule } from './notification-routing.module';
import { CommonModule } from '@angular/common';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    NotificationPage,
  ],
  imports: [
    CommonModule,IonicModule,
    NotificationPageRoutingModule,
    TranslateModule.forChild(),
    IonicImageLoaderModule
  ],providers:[
    WebView
  ]
})
export class NotificationPageModule {}
