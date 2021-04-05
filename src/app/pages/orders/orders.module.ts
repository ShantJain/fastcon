import { TranslateModule } from "@ngx-translate/core";
import { PipesModule } from "./../../pipes/pipes.module";
import { NgModule } from "@angular/core";
import { OrdersPage } from "./orders";
import { IonicImageLoaderModule } from "ionic-image-loader-v5";
import { OrdersPageRoutingModule } from "./orders-routing.module";
import { CommonModule } from '@angular/common';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [OrdersPage],
  imports: [
    CommonModule,IonicModule,
    OrdersPageRoutingModule,
    TranslateModule.forChild(),
    PipesModule,
    IonicImageLoaderModule,
  ],providers:[
    WebView
  ]
})
export class OrdersPageModule {}
