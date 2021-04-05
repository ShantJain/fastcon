import { PipesModule } from "./../../../pipes/pipes.module";
import { NgModule } from "@angular/core";
import { OrderDetailPage } from "./detail";
import { TranslateModule } from "@ngx-translate/core";
import { IonicImageLoaderModule } from "ionic-image-loader-v5";
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { OrderDetailPageRoutingModule } from './orders-detail-routing.module';

@NgModule({
  declarations: [OrderDetailPage],
  imports: [
    OrderDetailPageRoutingModule,
    CommonModule,
    IonicModule,
    TranslateModule.forChild(),
    IonicImageLoaderModule,
    PipesModule,
  ],providers:[
    WebView
  ]
})
export class OrderDetailPageModule {}
