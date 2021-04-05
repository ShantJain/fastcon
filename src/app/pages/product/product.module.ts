import { NgModule } from '@angular/core';
import { ProductPage } from './product';
import { CommonModule } from '@angular/common';
import { ProductPageRoutingModule } from './product-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from 'src/app/components/components.module';
import { IonicRatingModule } from 'ionic4-rating';
import { IonicImageLoaderModule } from 'ionic-image-loader-v5';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { IonicModule } from '@ionic/angular';
import { SortPageModule } from './sort/sort.module';
import { FilterPageModule } from './filter/filter.module';


@NgModule({
  declarations: [
    ProductPage,
  ],
  imports: [
    CommonModule,IonicModule,
    SortPageModule,FilterPageModule,
    ProductPageRoutingModule,
    TranslateModule.forChild(),
    ComponentsModule,
    IonicRatingModule,
    IonicImageLoaderModule,
    PipesModule
  ],
  providers:[
    WebView
  ]
})
export class ProductPageModule {}
