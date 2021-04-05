import { ComponentsModule } from './../../components/components.module';
import { IonicImageLoaderModule } from 'ionic-image-loader-v5';
import { TranslateModule } from '@ngx-translate/core';
import { PipesModule } from './../../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { HomePage } from './home';
import { IonicRatingModule } from 'ionic4-rating';

import { HomePageRoutingModule } from './home-routing.module';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { CommonModule } from '@angular/common';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [  
    CommonModule,IonicModule,
    HomePageRoutingModule,
    IonicRatingModule,
    PipesModule,
    TranslateModule.forChild(),
    IonicImageLoaderModule,
    ComponentsModule
  ],
  providers:[
    SplashScreen,
    Deeplinks,
    OneSignal,
    WebView
  ]
})
export class HomePageModule {
}
