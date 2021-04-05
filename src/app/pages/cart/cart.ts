import { TranslateService } from '@ngx-translate/core';
import { Component, NgZone } from '@angular/core';
import {  NavController,  AlertController, ModalController, } from '@ionic/angular';
import { RestProvider, ToastProvider, UserProvider, SettingsProvider, LoadingProvider } from '../../services/providers';
import { Events } from "../../services/Events";
import { CalculateShippingPage } from './calculate-shipping/calculate-shipping';
import { CouponPage } from './coupon/coupon';
import { SearchPage } from 'src/app/ShareComponent/search/search';
import { LoginPage } from 'src/app/ShareComponent/login/login';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
  styleUrls: ['cart.scss'],
})
export class CartPage {

  cart: any = {};
  inputCoupon: boolean = false;
  pakage: any = {};
  objectKeys = Object.keys;
  constructor(public navCtrl: NavController, public restClient: RestProvider, private loader: LoadingProvider, private user: UserProvider,
    private toast: ToastProvider, public zone: NgZone,  public translate: TranslateService,
    private alertCtrl: AlertController, private modalCtrl: ModalController, private events: Events, public settings: SettingsProvider) {
    if (this.user.shipping) {
      this.pakage.country = this.user.shipping.country || "IN";
      this.pakage.state = this.user.shipping.state || null;
      this.pakage.postcode = this.user.shipping.postcode || null;
    } else {
      this.pakage.country = settings.country || "IN";
      this.pakage.state = settings.state || null;
      this.pakage.postcode = settings.postcode || null;
    }
    this.getCart();
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter CartPage');
  }

  getCart(method?) {
    //this.loader.show();
    this.restClient.getCart(this.pakage, method).then(
      (res) => {
        console.log(res);
        let data = JSON.parse(res.data);
        //this.zone.run(() => {
        this.cart = {};
        setTimeout(() => {
          //this.loader.dismiss();
          this.cart = data;
          console.log(this.cart);
          if (this.cart.error) {
            this.toast.showWithClose(this.cart.error);
          }
        }, 10);
        // });

      }).catch(err => {
        console.log(err);
        this.loader.dismiss();
        this.translate.get(['ERROR']).subscribe(x => {
          this.toast.show(x.ERROR);
        });
      });
  }

  removeCart(cart_item_key, i) {
    this.translate.get(['REMOVE_FROM_CART', 'ARE_YOU_SURE', 'NO', 'YES']).subscribe((x) => {
      this.presentAlert(x.REMOVE_FROM_CART,x.ARE_YOU_SURE,"", [{
        text: x.NO
      }, {
        text: x.YES,
        handler: () => {
          this.loader.show();
          this.restClient.removeCartItem(this.pakage, cart_item_key).then(
            (res: any) => {
              this.loader.dismiss();
              this.events.publish("cartchanged");
              let data = JSON.parse(res.data);
              console.log(data);
              //this.zone.run(() => {
              this.cart = {};
              setTimeout(() => {
                this.cart = data;
              }, 10);
              //});
            }).catch(err => {
              console.log(err);
              this.loader.dismiss();
              this.translate.get(['ERROR']).subscribe(x => {
                this.toast.show(x.ERROR);
              });

            });
        }
      }])
    });
  }

  removeCoupon(code) {
    this.translate.get(['REMOVE_FROM_COUPON', 'ARE_YOU_SURE', 'NO', 'YES']).subscribe((x) => {
      this.presentAlert(x.REMOVE_FROM_COUPON,x.ARE_YOU_SURE,"",  [{
        text: x.NO
      }, {
        text: x.YES,
        handler: () => {
          this.loader.show();
          this.restClient.removeCoupon(this.pakage, code).then(
            (res: any) => {
              this.loader.dismiss();
              let data = JSON.parse(res.data);
              console.log(data);
              //this.zone.run(() => {
              this.cart = {};
              setTimeout(() => {
                this.cart = data;
              }, 10);
              //});
            }).catch(err => {
              this.loader.dismiss();
              console.log(err);
              this.translate.get(['ERROR']).subscribe(x => {
                this.toast.show(x.ERROR);
              });
            });
        }
      }] );
    });
  }
  decreaseQuantity(i) {
    if (this.cart.cart_data[i].quantity > 1) {
      this.loader.show();
      this.restClient.updateCart(this.pakage, this.cart.cart_data[i].cart_item_key, --this.cart.cart_data[i].quantity)
        .then((res: any) => {
          this.loader.dismiss();
          this.events.publish("cartchanged");
          let data = JSON.parse(res.data);
          console.log(data);
          //this.zone.run(() => {
          this.cart = {};
          setTimeout(() => {
            this.cart = data;
          }, 10);
          // });
        }).catch(err => {
          console.log(err);
          this.loader.dismiss();
          this.translate.get(['ERROR']).subscribe(x => {
            this.toast.show(x.ERROR);
          });
        });
    }
    else {
      this.translate.get(['MIN_ITEM']).subscribe(x => {
        this.toast.show(x.MIN_ITEM);
      });
    }

  }
  increaseQuantity(i) {
    let quantity: number = this.cart.cart_data[i].quantity;
    if (this.cart.cart_data[i].manage_stock) {
      if (quantity < this.cart.cart_data[i].stock_quanity) {
        quantity++;
      } else {
        this.translate.get(['MAX_ITEM']).subscribe(x => {
          this.toast.show(x.MAX_ITEM);
        });
      }
    } else {
      quantity++;
    }
    if (quantity != Number(this.cart.cart_data[i].quantity)) {
      this.loader.show();
      this.restClient.updateCart(this.pakage, this.cart.cart_data[i].cart_item_key, quantity)
        .then((res: any) => {
          this.events.publish("cartchanged");
          this.loader.dismiss();
          let data = JSON.parse(res.data);
          console.log(data);
          //this.zone.run(() => {
          this.cart = {};
          setTimeout(() => {
            this.cart = data;
          }, 10);
          //});
          console.log(this.cart);
        }).catch(err => {
          this.loader.dismiss();
          console.log(err);
          this.translate.get(['ERROR']).subscribe(x => {
            this.toast.show(x.ERROR);
          });
        });
    }
  }
  async showSearch() {
    const modal = await this.modalCtrl.create({
      component: SearchPage,
      componentProps:this.pakage,
      cssClass:'shipping'
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (data != null) {
      if (data && data.page) {
        this.goTo(data.page, data.params);
      }
    }
  }

  async calculateShipping() {
    const modal = await this.modalCtrl.create({
      component: CalculateShippingPage,
      componentProps:{
        "pakage":this.pakage
      },
      cssClass:'shipping'
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (data != null) {
      this.pakage = data;
      if (data.postcode !== '') {
        this.settings.setSettings(data.country, 'country');
        this.settings.setSettings(data.state, 'state');
        this.settings.setSettings(data.postcode, 'postcode');
      }
      console.log(this.pakage)
      this.getCart();
    }
  }

  goTo(page, params) {
    let navigationExtras: NavigationExtras = { queryParams: params }
    this.navCtrl.navigateForward(page, navigationExtras);
  }
  checkout() {
    if (this.user.all) {
      this.goTo('checkout', {});
    } else {
      this.translate.get(['LOGIN', 'LOGIN_FIRST', 'REGISTER']).subscribe((x) => {
        this.presentAlert(x.LOGIN,x.LOGIN_FIRST,"custom_alert", [{
          text: x.LOGIN,
          handler: () => {
            this.loginPagePopUp({ page: "login" });  
          }
        }, {
          text: x.REGISTER,
          handler: () => {
            this.loginPagePopUp({ page: "signup" });
          }
        }] );
      });
    }
  }
  async loginPagePopUp(rsg){
    const modal = await this.modalCtrl.create({
      component: LoginPage,
      componentProps:rsg
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (data & data.code){
      this.checkout();
    }
  }
  backHome(){
    this.navCtrl.back();
  }
  shipping_price() {
    return this.cart.shipping_method.find(x => x.id == this.cart.chosen_shipping_method).shipping_method_price;
  }
  async couponToggle() {
  
    const modal = await this.modalCtrl.create({
      component: CouponPage,
      componentProps:{ pakage: this.pakage, appliedCoupon: this.cart.coupon },
      cssClass:'coupon'
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (data != null) {
      this.cart = {};
      setTimeout(() => {
        this.cart = data;
      }, 10);
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
