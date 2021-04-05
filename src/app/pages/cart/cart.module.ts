import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CartPage } from './cart';
import { IonicImageLoaderModule } from 'ionic-image-loader-v5';
import { CartPageRoutingModule } from './cart-routing.module';
import { CommonModule } from '@angular/common';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { IonicModule } from '@ionic/angular';
import { CouponPageModule } from './coupon/coupon.module';
import { CalculateShippingPageModule } from './calculate-shipping/calculate-shipping.module';
@NgModule({
  declarations: [
    CartPage,
  ],
  imports: [
    CouponPageModule,
    CalculateShippingPageModule,
    CommonModule,IonicModule,
    CartPageRoutingModule,
    TranslateModule.forChild(),
    IonicImageLoaderModule
  ],
  providers:[WebView]
})
export class CartPageModule {}
