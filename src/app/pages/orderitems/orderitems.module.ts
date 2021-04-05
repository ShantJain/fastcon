import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderitemsPageRoutingModule } from './orderitems-routing.module';

import { OrderitemsPage } from './orderitems.page';
import { ReasonsComponent } from './reasons/reasons.component';
import { IonicImageLoaderModule } from 'ionic-image-loader-v5';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderitemsPageRoutingModule,
    IonicImageLoaderModule,
    PipesModule
  ],
  providers:[WebView],
  declarations: [OrderitemsPage,ReasonsComponent],
  entryComponents:[ReasonsComponent],
  exports:[ReasonsComponent]
})
export class OrderitemsPageModule {}
