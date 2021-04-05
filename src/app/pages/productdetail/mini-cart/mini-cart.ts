import { Component, Input } from '@angular/core';
import { NavController, NavParams, ModalController } from '@ionic/angular';
import { SettingsProvider } from '../../../services/providers';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'page-mini-cart',
  templateUrl: 'mini-cart.html',
  styleUrls:['mini-cart.scss']
})
export class MiniCartPage {
  msg: string;
  @Input("MiniCartData") set MiniCartData(d:any){
      this.msg = d;
  }
  constructor(public navCtrl: NavController, private viewCtrl: ModalController,
    public settings: SettingsProvider,private route: ActivatedRoute) {
    
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter MiniCartPage');
  }
  dismiss(action?) {
    this.viewCtrl.dismiss(action);
  }
}
