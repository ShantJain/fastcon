import { IonicImageLoaderModule } from 'ionic-image-loader-v5';
import { TranslateModule } from '@ngx-translate/core';
import { IonicRatingModule } from 'ionic4-rating';
import { NgModule } from '@angular/core';
import { WishlistPage } from './wishlist';
import { WishlistPageRoutingModule } from './wishlist-routing.module';
import { CommonModule } from '@angular/common';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { IonicModule } from '@ionic/angular';
@NgModule({
  declarations: [
    WishlistPage,
  ],
  imports: [
    IonicModule,
    WishlistPageRoutingModule,
    TranslateModule.forChild(),
    IonicImageLoaderModule,
    IonicRatingModule,
    CommonModule
  ],
  providers:[WebView]
})
export class WishlistPageModule {}
