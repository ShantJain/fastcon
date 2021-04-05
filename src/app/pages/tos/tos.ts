import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { WooCommerceProvider } from '../../services/providers';


@Component({
  selector: 'page-tos', 
  templateUrl: 'tos.html',
  styleUrls: ['tos.scss'],
})
export class TosPage {
  tos: any;
  constructor(public navCtrl: NavController,  private WC: WooCommerceProvider) {
    this.WC.getTermConditon().then((x: any) => {
      console.log(x);
      if (x.term_condition && x.term_condition != '') {
        this.tos = x.term_condition;
      } else {
        this.tos = "Please Set a terms in backend panel";
      }
    });
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter TosPage');
  }

}
