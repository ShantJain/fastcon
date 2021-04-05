import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ShareComModule } from './ShareComponent/shareComponent.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { IonicImageLoaderModule } from 'ionic-image-loader-v5';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { Drivers, Storage } from '@ionic/storage';
import { IonicStorageModule } from '@ionic/storage-angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { RestProvider } from './services/rest/rest';
import { UserProvider } from './services/user/user';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Facebook } from '@ionic-native/facebook/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { AppRate } from '@ionic-native/app-rate/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { GoogleAnalytics } from '@ionic-native/google-analytics/ngx';


export function createTranslateLoader(http: HttpClient) {
  console.log("TranslateLoader");
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    CommonModule,
    ShareComModule,
    HttpClientModule,
    IonicImageLoaderModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    IonicStorageModule.forRoot({
      name: "wooapp",
      driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage,Drivers.SecureStorage],
    }),
    IonicModule.forRoot({
      backButtonText: "",
      mode: "md"
    }), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Storage,
    StatusBar,
    RestProvider,
    UserProvider,
    GooglePlus,
    Facebook,
    HTTP,
    EmailComposer,
    AppRate,
    AppVersion,
    InAppBrowser,
    GoogleAnalytics],
  bootstrap: [AppComponent],
})
export class AppModule {
  public static injector: Injector;
  constructor(injector: Injector,public storage:Storage) {
    AppModule.injector = injector;
    this.ngOnInit();
  }
  async ngOnInit() {
    await this.storage.create();
  }
}
