import { AppVersion } from '@ionic-native/app-version/ngx';
import { UserProvider } from './../../services/providers';
import { Component } from '@angular/core';
import {  NavController, Platform } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'page-app-setting',
  templateUrl: 'app-setting.html',
  styleUrls: ['app-setting.scss'],
})
export class AppSettingPage {
  app: any={};

  constructor(public navCtrl: NavController, private platform: Platform, private appVersion: AppVersion,
     public user: UserProvider) {
    if (this.platform.is('cordova')) {
      this.appVersion.getVersionNumber().then(res => {
        this.app.version = res;
      })
    }
  }
  goTo(page, params) {
    let navigationExtras: NavigationExtras = { queryParams: params }
    this.navCtrl.navigateForward(page, navigationExtras);
  }
}
