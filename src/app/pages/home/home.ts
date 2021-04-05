import { NotifProvider } from "./../../services/notif/notif";
import { OneSignal } from "@ionic-native/onesignal/ngx";
import { App } from "./../../app.config";
import { Component, ViewChild, ElementRef } from "@angular/core";
import {
  NavController,
  ModalController,
  Platform,
  IonSlides,
  MenuController,
} from "@ionic/angular";
import {
  WooCommerceProvider,
  LoadingProvider,
  WishlistProvider,
  ToastProvider,
  SettingsProvider,
} from "../../services/providers";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { PageTrack } from "../../decorator/page-track.decorator";
import { Deeplinks } from "@ionic-native/deeplinks/ngx";
import { SearchPage } from 'src/app/ShareComponent/search/search';
import { NavigationExtras } from '@angular/router';

@PageTrack({ pageName: "Home Page" })
@Component({
  selector: "page-home",
  templateUrl: "home.html",
  styleUrls: ['home.scss'],

})
export class HomePage {
  @ViewChild("slider",{static: true}) slides: IonSlides;
 
  dir: string;
  layout: any;
  isLayout:boolean = false;
  storeName: string = App.store;

  slideTapOpts ={
    spaceBetween:200,
    slidesPerView:3,
    direction: 'vertical'
  };
  slideOpts = {
    initialSlide: 0,
    speed: 2000,
    loop: true,
    autoplay: true
  };

  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }

  constructor(
    private menu: MenuController,
    public navCtrl: NavController,
    private WC: WooCommerceProvider,
    public loader: LoadingProvider,
    public wishlist: WishlistProvider,
    public modalCtrl: ModalController,
    public settings: SettingsProvider,
    toast: ToastProvider,
    private splash: SplashScreen,
    public platform: Platform,
    public deeplinks: Deeplinks,
    private oneSignal: OneSignal,
    private notif: NotifProvider
  ) {
    this.dir = platform.isRTL?'rtl':'ltr';;
    this.WC.loadSetting();
    this.slideTapOpts.direction = platform.isRTL?'vertical':'';

    if (this.platform.width() >= 800) {
      this.slideTapOpts.slidesPerView = 5;
    } else if (this.platform.width() >= 600) {
      this.slideTapOpts.slidesPerView = 4;
    } else if (this.platform.width() >= 412) {
      this.slideTapOpts.slidesPerView = 4;
    } else if (this.platform.width() >= 319) {
      this.slideTapOpts.slidesPerView = 3;
    }
    this.WC.getHomePageLayout().then(
      (x) => {
        console.log(x);
        this.layout = x;
        if(this.layout){
          this.isLayout = true;
        }
        this.settings.setSettings(x, "layout");
      },
      (err) => {
        if (this.settings.layout) {
          this.layout = this.settings.layout;
          this.isLayout = true;
        }
        console.log(err);
        toast.showError();
      }
    );
    if (this.platform.is("cordova")) {
      if (
        this.settings.all.appSettings.one_signal_app_id &&
        this.settings.all.appSettings.one_signal_app_id != "" &&
        this.settings.all.appSettings.google_project_number &&
        this.settings.all.appSettings.google_project_number != ""
      ) {
        this.oneSignal.startInit(
          this.settings.all.appSettings.one_signal_app_id,
          this.settings.all.appSettings.google_project_number
        );
        this.oneSignal.inFocusDisplaying(
          this.oneSignal.OSInFocusDisplayOption.Notification
        );
        this.oneSignal.handleNotificationReceived().subscribe((x) => {
          // do something when notification is received
          console.log(x);
          if (x && x.payload) {
            this.notif.post(x.payload);
          }
        });
        this.oneSignal.handleNotificationOpened().subscribe((x) => {
          // do something when a notification is opened
          console.log(x);
          if (x && x.notification && x.notification.payload) {
            this.notif.post(x.notification.payload);
            if (
              x.notification.payload.additionalData &&
              x.notification.payload.additionalData.product_id
            ) {
              let params = {
                id: x.notification.payload.additionalData.product_id,
                isReferedByPush: true,
              };
              this.goTo("productdetail", params);
            } else if (
              x.notification.payload.additionalData &&
              x.notification.payload.additionalData.category_id
            ) {
              let params = {
                id: x.notification.payload.additionalData.category_id,
              };
              this.goTo("product", params);
            }
          }
        });
        this.oneSignal.endInit();
      }
      this.deeplinks.route({}).subscribe(
        (match) => {
          // match.$route - the route we matched, which is the matched entry from the arguments to route()
          // match.$args - the args passed in the link
          // match.$link - the full link data
          //console.log('Successfully matched route', match);
        },
        (nomatch) => {
          console.log(nomatch.$link.url);
          if (
            nomatch.$link.url &&
            nomatch.$link.url.includes(App.url + "/product/")
          ) {
            let params = {
              link: nomatch.$link.url,
              isReferedByDeeplinks: true,
            };
            this.goTo("productdetail", params);
            console.log("go to product details page");
          }
        }
      );
    }
  }
  openMenu(){ 
    this.menu.open();
  }

  ionViewDidEnter() {
    this.splash.hide();
    if (this.slides !== undefined) {
      //this.slides.autoplayDisableOnInteraction = false;
      this.slides.startAutoplay();
    }
  }
  ionViewWillLeave() {
    if (this.slides !== undefined) {
      this.slides.stopAutoplay();
    }
  }

  setFav(product: any) {
    this.wishlist.add(product);
  }

  async showSearch() {
    const modal = await this.modalCtrl.create({
      component: SearchPage,
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (data && data.page) {
      this.goTo(data.page, data.params);
    }
  }
  handleSlideClick() {
    //Using This Function due to there is a bug in ion-slides in autoplay loop can't detect 1st silde click
    //Need To fix when official team fix this
   // let index = this.slides._slides[this.slides.clickedIndex].getAttribute(
   //   "data-swiper-slide-index"
   // );
   this.slides.getActiveIndex().then((index)=>{
      console.log(index);
      if (index) {
        this.gridClick("product", this.layout.banner[index]);
      }
   });
   
  }
  goTo(page, params) {
    let navigationExtras: NavigationExtras = { queryParams: params }
    this.navCtrl.navigateForward(page, navigationExtras);
  }
  gridClick(page, data) {
    let params: any = {};
    if (data && data.type == "brand") {
      params.brand_id = data.id;
      params.brand_name = data.name;
    } else {
      params = data;
    }
    this.goTo(page, params);
  }
}
