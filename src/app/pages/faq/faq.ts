import { WooCommerceProvider } from './../../services/woocommerce/woocommerce';
import { Component, NgZone } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'page-faq',
  templateUrl: 'faq.html',
  styleUrls: ['faq.scss'],
})
export class FaqPage {
  toggles: any = {}
  Object = Object;
  faq: Array<any>;
  constructor(public navCtrl: NavController,  public WC: WooCommerceProvider,
    zone:NgZone) {
    this.WC.getFAQ().then((res:any) => {
      console.log(res);
      zone.run(()=>{
        this.faq=res;
        for(let i in this.faq){
          this.toggle[i]=false;
        }
      });
    }, err => {

    });
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter AccountHelpPage');
  }
  toggle(val) {
    this.toggles[val] = !this.toggles[val];
  }

}
