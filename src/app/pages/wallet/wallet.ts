import { TranslateService } from '@ngx-translate/core';
import { SettingsProvider } from './../../services/settings/settings';
import { ToastProvider, RestProvider, LoadingProvider } from './../../services/providers';
import { Component, ViewChild, NgZone } from '@angular/core';
import {  NavController,   AlertController } from '@ionic/angular';
import { Events } from "../../services/Events";
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'page-wallet',
  templateUrl: 'wallet.html',
  styleUrls: ['wallet.scss'],
})
export class WalletPage {
  wallet: any;
  constructor(public navCtrl: NavController, public settings: SettingsProvider, private rest: RestProvider,
    private toast: ToastProvider, zone: NgZone, private alertCtrl: AlertController, private events: Events, private loader: LoadingProvider,
    private translate : TranslateService) {
    this.rest.getWalletDetails().then((data) => {
      console.log(data);
      zone.run(() => {
        this.wallet = JSON.parse(data.data);
      })
    }).catch(err => {
      toast.showError();
    });
  }
  backHome(){
    this.navCtrl.back();
  }
  ionViewDidEnter() {
    console.log('ionViewDidEnter WalletPage');
  }

  isArray(transaction: any) {
    return (transaction instanceof Array);
  }

  async addMoney() {
    this.translate.get(['ADD_MONEY_TO_WALLET','AMOUNT','CANCEL','OK']).subscribe(x=>{
      this.presentAlert(x.ADD_MONEY_TO_WALLET,[
          {
            name: 'amount',
            placeholder: x.AMOUNT,
            type: 'number'
          }
        ],[
          {
            text: x.CANCEL,
            role: 'cancel'
          },
          {
            text: x.OK,
            handler: data => {
              this.loader.show();
              this.rest.addMoneyToCart(data.amount).then((data: any) => {
                console.log(data);
                this.loader.dismiss();
                let res = JSON.parse(data.data);
                this.events.publish("cartchanged");
                if (res.code) {
                  this.goTo('checkout', {});
                }
                this.toast.show(res.message);
              }).catch(err => {
                this.loader.dismiss();
                this.toast.showError();
                console.log(err);
              });
            }
          }
        ])
    });
    
  }
  async presentAlert(header,message,buttons) {
    let confirm = await this.alertCtrl.create({
      header: header,
      inputs: message,
      buttons: buttons
    });
    await confirm.present();
  }
  goTo(page, params) {
    let navigationExtras: NavigationExtras = { queryParams: params }
    this.navCtrl.navigateForward([page], navigationExtras);
  }
}
