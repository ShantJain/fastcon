import { Component, ViewChild, NgZone } from '@angular/core';
import {  IonRouterOutlet, Platform, ModalController, AlertController, MenuController, NavController } from '@ionic/angular';
import { SettingsProvider, ToastProvider, WooCommerceProvider, UserProvider, AnalyticsService, LoadingProvider, RestProvider } from './services/providers';
import { Events } from './services/Events';
import { TranslateService } from '@ngx-translate/core';
import { ImageLoaderConfigService } from 'ionic-image-loader-v5';

import { App } from "./app.config";

import { StatusBar } from '@ionic-native/status-bar/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { AppRate } from '@ionic-native/app-rate/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { LoginPage } from './ShareComponent/login/login';
import { Storage } from '@ionic/storage-angular';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  rootPage: any; //='MenuPage';
  setting: any = {};
  
  @ViewChild(IonRouterOutlet) routerOutlet: IonRouterOutlet;
  version: string;
  lastBack: any;

  constructor(
    public platform: Platform,
    private statusBar: StatusBar,
    private zone: NgZone,
    public settings: SettingsProvider,
    public translate: TranslateService,
    rest: RestProvider,
    private toast: ToastProvider,
    private modalCtrl: ModalController,
    private emailComposer: EmailComposer,
    private appRate: AppRate,
    private alertCtrl: AlertController,
    private appVersion: AppVersion,
    private WC: WooCommerceProvider,
    public user: UserProvider,
    public menuCtrl: MenuController,
    private iab: InAppBrowser,
    private anlyticsService: AnalyticsService,
    private loader: LoadingProvider,
    private imageLoaderConfig: ImageLoaderConfigService,
    public events:Events,
    public navCon:NavController,
    public storage:Storage
  ) {
    this.settings.load().then(res => {
      this.setting = res;
      this.initTranslate();
    });

    events.subscribe("cartchanged", () => {
      rest.getCartCount().then(res => {
        console.log("Test cartchanged");
        console.log(res);
        settings.setSettings(JSON.parse(res.data), "cart_count");
      });
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //image loader configs
      imageLoaderConfig.enableSpinner(false);
      this.imageLoaderConfig.setFallbackUrl(
        "assets/imgs/placeholder-square.png"
      );
      this.imageLoaderConfig.setMaximumCacheAge(7 * 24 * 60 * 60 * 1000); //7days
      this.imageLoaderConfig.enableFallbackAsPlaceholder(true);
      this.imageLoaderConfig.setFileNameCachedWithExtension(true);
      this.imageLoaderConfig.setImageReturnType("base64");

      this.initApp();
      statusBar.styleLightContent();
      if (platform.is("android")) {
        statusBar.overlaysWebView(false);
        platform.backButton.subscribeWithPriority(10, (processNextHandler) => {
         /* let activePortal =
            ionicApp._loadingPortal.getActive() ||
            ionicApp._modalPortal.getActive() ||
            ionicApp._toastPortal.getActive() ||
            ionicApp._overlayPortal.getActive();
          if (activePortal) {
            activePortal.dismiss();
          }*/
          if (this.routerOutlet && this.routerOutlet.canGoBack()) {
            this.routerOutlet.pop();
          } else if (menuCtrl.isOpen()) {
            menuCtrl.close();
          } else {
            if (this.routerOutlet.canGoBack()) {
              this.routerOutlet.pop();
            } else if (this.lastBack + 300 < Date.now()) {
              this.exit();
            }
          }
          this.lastBack = Date.now();
        });
      } else {
        statusBar.overlaysWebView(true);
      }
      //this.rootPage="MenuPage";
    });
  }

  initTranslate() {
    if (this.setting && this.setting.language !== undefined) {
      this.translate.setDefaultLang(this.setting.language);
      this.translate.use(this.setting.language);
    } else {
      this.translate.setDefaultLang(App.defaultLang);
      this.translate.use(App.defaultLang);
    }
  }
  initApp() {
    this.WC.saveAppSettings().then(
      (res: any) => {
        console.log(res);
        this.settings.setSettings(res, "appSettings").then(() => {

          const colors = new Map([
            ["primary_color", res.primary_color],
            ["primary_color_dark", res.primary_color_dark],
            ["accent_color", res.accent_color],
            ["toolbar_text_color", res.primary_color_text],
            ["toolbar-badge-color", res.toolbarbadgecolor || res.accent_color],
            ["primary_text_color", "#212121"],
            ["secondary_text_color", "#757575"]
          ]);
          Array.from(colors.entries()).forEach(([name, value]) => {
            document.body.style.setProperty(`--${name}`, value);
          });
          this.zone.run(() => {
           // this.rootPage = HomePage;
             this.navCon.navigateRoot("home")
          });
          if (this.platform.is("cordova")) {
            this.events.publish("cartchanged");
            this.statusBar.backgroundColorByHexString(res.primary_color_dark);
            this.appVersion.getVersionNumber().then(v => {
              this.version = v;
              if (
                res.google_analytics_tracker_id &&
                res.google_analytics_tracker_id !== ""
              ) {
                this.anlyticsService
                  .init(res.google_analytics_tracker_id)
                  .then(() => {
                    //console.log('Google analytics is ready now');
                    this.events.subscribe("view:enter", (view: string) => {
                      this.anlyticsService.trackView(view);
                      console.log("view:enter" + view);
                    });
                    this.events.publish("view:enter", "Home Page");
                    this.anlyticsService.setAppVersion("Android - " + v);
                  })
                  .catch(e => console.log("Error starting GoogleAnalytics", e));
              }
            });
          }
        });
      },
      err => { console.log("saveAppSettings"); console.log(err);
        this.toast.showError();
      }
    );
  }

  goTo(page, params) {
    console.log(page);
    this.menuCtrl.close();
    let navigationExtras: NavigationExtras = { queryParams: params }
    this.navCon.navigateForward([page], navigationExtras);
  }

  popToRoot() {
    this.menuCtrl.close();
    console.log("popToRoot");
    this.navCon.navigateRoot("home");
  }

  async login() {
    this.menuCtrl.close();
    //this.modalCtrl.create("LoginPage", {}).present();
    const modal = await this.modalCtrl.create({
      component: LoginPage
    });
    return await modal.present();
  }
  email() {
    this.menuCtrl.close();
    this.platform.ready().then(() => {
      if (this.platform.is("cordova")) {
        let email = {
          to: this.settings.appSettings.contact_email,
          subject: "App Support",
          body: "Hi, please help me.",
          isHtml: true
        };
        this.emailComposer.open(email);
      } else {
        this.translate
          .get(["ONLY_DEVICE", "ONLY_DEVICE_DESC", "OK"])
          .subscribe(x => {
            this.presentAlert(x.ONLY_DEVICE,x.ONLY_DEVICE_DESC,"", [{ text: x.OK }] );
            /*
            this.alertCtrl
              .create({
                title: x.ONLY_DEVICE,
                message: x.ONLY_DEVICE_DESC,
                buttons: [
                  {
                    text: x.OK
                  }
                ]
              })
              .present();*/
          });
      }
    });
  }
  call() {
    this.menuCtrl.close();
    window.location.href = "tel:" + this.settings.appSettings.contact_phone;
  }
  rate() {
    var obj = this;
    obj.menuCtrl.close();
    if (!obj.platform.is("cordova")) {
      obj.translate
        .get(["OK", "ONLY_DEVICE", "ONLY_DEVICE_DESC"])
        .subscribe(x => {
          obj.presentAlert(x.ONLY_DEVICE,x.ONLY_DEVICE_DESC,"", [{ text: x.OK }] );
          return false;
        });
    } else {
      obj.appRate.preferences = {
        usesUntilPrompt: 5,
        useLanguage: 'en',
        displayAppName: '',
        promptAgainForEachNewVersion: false,
        inAppReview: true,
        storeAppURL: {
          ios: '',
          android: '',
        },
        openUrl: function (url) {
          window.open(url, '_blank', 'location=yes');
        },
      };
      obj.appVersion.getAppName().then(res => {
        obj.appRate.preferences.displayAppName = res;
        console.log(res)
        obj.appVersion.getPackageName().then(res => {
          console.log(res)
          obj.appRate.preferences.storeAppURL = {
            ios: App.IosAppId, // FOR IOS USE APPLE ID from appstoreconnect
            android: "market://details?id=" + res // FOR ANDROID, use your own android package name
          };
          obj.appRate.promptForRating(true);
        });
      });

     
    }
  }
  exit() {
     this.translate
      .get(["CONFIRM", "EXIT_MSG", "EXIT", "CANCEL"])
      .subscribe(x => {
       /* const alert = await this.alertCtrl
          .create({
            header: x.CONFIRM,
            message: x.EXIT_MSG,
            buttons: [
              {
                text: x.EXIT + "?",
                handler: () => {
                  this.platform.exitApp();
                }
              },
              {
                text: "Cancel",
                role: x.CANCEL
              }
            ]
          });
          alert.present();
*/
          this.presentAlert(x.CONFIRM,x.EXIT_MSG,"", [
            {
              text: x.EXIT + "?",
              handler: () => {
                navigator['app'].exitApp();
              }
            },
            {
              text: "Cancel",
              role: x.CANCEL
            }
          ]);
      });
  }
  openChat() {
    this.menuCtrl.close();
    if (
      this.settings.all.appSettings &&
      this.settings.all.appSettings.direct_tawk_id &&
      this.settings.all.appSettings.direct_tawk_id !== ""
    ) {
      this.loader.show();
      const browser = this.iab.create(
        this.settings.all.appSettings.direct_tawk_id,
        "_self",
        { location: "no", closebuttoncaption: "Done", hidden: "yes" }
      );
      browser.on("loadstop").subscribe(event => {
        browser.show();
        this.loader.dismiss();
      });
    }
  }
  async contact() {
    this.menuCtrl.close();
    if (
      this.settings.appSettings.contact_email &&
      this.settings.appSettings.contact_phone &&
      this.settings.appSettings.contact_email !== "" &&
      this.settings.appSettings.contact_phone !== ""
    ) {
      this.presentAlert("Contact us",'',"custom_alert_call", [
        {
          text: "Email",
          handler: () => {
            this.email();
          }
        },
        {
          text: "Call",
          handler: () => {
            this.call();
          }
        }
      ])
      /*
      const alert = await this.alertCtrl
        .create({
          header: "Contact us",
          cssClass: "custom_alert_call",
          buttons: [
            {
              text: "Email",
              handler: () => {
                this.email();
              }
            },
            {
              text: "Call",
              handler: () => {
                this.call();
              }
            }
          ]
        });
        alert.present();*/

    } else if (this.settings.appSettings.contact_email !== "") {
      this.email();
    } else {
      this.call();
    }
  }
  async presentAlert(header,message,cssClass,buttons) {
    const alert = await this.alertCtrl.create({
      header: header,
      cssClass: cssClass,
      message: message,
      buttons: buttons
    });

    await alert.present();
  }
}
