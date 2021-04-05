import { TranslateService } from '@ngx-translate/core';
import { WooCommerceProvider, LoadingProvider, ToastProvider } from './../../../services/providers';
import { Component, NgZone } from '@angular/core';
import {  NavController, NavParams,  Platform, ModalController } from '@ionic/angular';
import { RestProvider } from '../../../services/rest/rest';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'page-coupon',
  templateUrl: 'coupon.html',
  styleUrls:['coupon.scss']
})
export class CouponPage {
  coupons: Array<any>;
  pakage: any;
  inputCoupon: string = "";
  appliedCoupon: Array<any>;
  dir: string;
  errMsg: any;
  constructor(private route: ActivatedRoute,public navCtrl: NavController,  public WC: WooCommerceProvider,
    private toast: ToastProvider, private viewCtrl: ModalController, private zone: NgZone, private rest: RestProvider,
    private loader: LoadingProvider, private translate: TranslateService, platfrom: Platform) {
    this.dir = platfrom.isRTL?'rtl':'ltr';
    this.route.queryParams.subscribe(params => {
      this.pakage = params.pakage;
      this.appliedCoupon = params.appliedCoupon;
    });
 

    this.WC.getCoupons().then((res) => {
      console.log(res);
      this.zone.run(() => {
        this.coupons = res;
      });
    }, (err) => {
      this.toast.showError();
    });

  }
  dismiss(data?) {
    this.viewCtrl.dismiss(data);
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter CouponPage');
  }
  applyCoupon(coupon) {
    console.log(this.appliedCoupon);
    for (let c of this.appliedCoupon) {
      console.log(c);
      if (c['code'].toString().toUpperCase() === coupon.toUpperCase()) {
        this.toast.show("Coupon Already Applied");
        return;
      }
    }

    this.loader.show();
    this.rest.applyCoupon(this.pakage, coupon).then(
      (res: any) => {
        this.loader.dismiss();
        console.log(res.data);
        let data = JSON.parse(res.data);
        this.zone.run(() => {
          if (data.code && data.code == 201) {
            if (data.message && data.message.length > 0) {
              this.errMsg = data.message.join();
            } else {
              this.translate.get(['INVALID_COUPON']).subscribe(x => {
                this.errMsg = x.INVALID_COUPON;
              });
            }
          } else if (data.code && data.code == 202) {
            if (data.message && data.message !== '') {
              this.errMsg = data.message;
            } else {
              this.translate.get(['INVALID_COUPON']).subscribe(x => {
                this.errMsg = x.INVALID_COUPON;
              });
            }
          } else {
            this.dismiss(data);
          }
        });
      }).catch(err => {
        this.loader.dismiss();
        console.log(err);
        this.translate.get(['ERROR']).subscribe(x => {
          this.toast.show(x.ERROR);
        });
      });
  }
  toggleERR() {
    this.errMsg = undefined;
  }
}
