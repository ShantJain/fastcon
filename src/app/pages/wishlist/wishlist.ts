import { TranslateService } from '@ngx-translate/core';
import { WishlistProvider, SettingsProvider } from './../../services/providers';
import { Component } from '@angular/core';
import { NavController,  AlertController, ModalController } from '@ionic/angular';
import { SearchPage } from 'src/app/ShareComponent/search/search';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'page-wishlist',
  templateUrl: 'wishlist.html',
  styleUrls: ['wishlist.scss'],
})
export class WishlistPage {
  products: any = [];
  constructor(public navCtrl: NavController, public wishlist: WishlistProvider,private modalCtrl:ModalController,
    public alertCtrl: AlertController, public translate: TranslateService, public settings: SettingsProvider) {
  }
  backHome(){
    this.navCtrl.back();
  }
  ionViewDidEnter() {
    console.log('ionViewDidEnter wishlist');
  }
  ionViewWillEnter() {
    this.wishlist.load().then(() => {
      this.products = this.wishlist.all;
    });
  }
  goTo(page, params) {
    let navigationExtras: NavigationExtras = { queryParams: params }
    this.navCtrl.navigateForward(page, navigationExtras);
  }
  goHome() {
    //this.navCtrl.parent.select(0);
    this.navCtrl.navigateRoot("home");
  }
  async showSearch() {
    const modal = await this.modalCtrl.create({
      component: SearchPage
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (data != null) {
      if (data && data.page) {
				this.goTo(data.page, data.params);
      }
    }

	} 
  remove(product) {
    this.translate.get(['REMOVE_FROM_WISHLIST', 'ARE_YOU_SURE', 'NO', 'YES']).subscribe((x) => {
      this.presentAlert(x.REMOVE_FROM_WISHLIST,x.ARE_YOU_SURE,"",[{
        text: x.NO
      }, {
        text: x.YES,
        handler: () => {
          this.reloadWish(product);
        }
      }])
    });
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
  reloadWish(product) {
    this.wishlist.remove(product);
    this.products = this.wishlist.all;
  }

}
