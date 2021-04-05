import { IonicImageLoaderModule } from 'ionic-image-loader-v5';
import { TranslateModule } from '@ngx-translate/core';
import { PipesModule } from './../../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { ProductdetailPage } from './productdetail';
import { ProductdetailPageRoutingModule } from './productdetail-routing.module';
import { IonicRatingModule } from 'ionic4-rating';
import { ComponentsModule } from '../../components/components.module';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReviewsPageModule } from './reviews/reviews.module';
import { MiniCartPage } from './mini-cart/mini-cart';

@NgModule({
  declarations: [
    ProductdetailPage,MiniCartPage
  ],
  imports: [
    CommonModule,IonicModule,
    ReviewsPageModule,
    ProductdetailPageRoutingModule,
    TranslateModule.forChild(),
    ComponentsModule,
    IonicRatingModule,
    IonicImageLoaderModule,
    PipesModule
  ],
  providers:[
    SocialSharing,
    PhotoViewer,
    WebView
  ],
  exports: [
    MiniCartPage
  ],entryComponents:[MiniCartPage]
})
export class ProductdetailPageModule { }
