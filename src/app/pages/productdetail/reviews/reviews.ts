import { Component, NgZone } from '@angular/core';
import {  NavController, NavParams, ModalController } from '@ionic/angular';
import { SettingsProvider, WooCommerceProvider,UserProvider } from '../../../services/providers';
import { AddReviewPage } from './add-review/add-review';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'page-reviews',
  templateUrl: 'reviews.html',
  styleUrls:['reviews.scss']
})
export class ReviewsPage {
  reviews: Array<any>;
  product: any;
  constructor(public navCtrl: NavController,  WC: WooCommerceProvider, private zone: NgZone,private route: ActivatedRoute,
    public settings: SettingsProvider, private user: UserProvider, private modalCtrl:ModalController) {
      this.route.queryParams.subscribe(params => {
        this.product = params.params;
      });
      
    WC.getProductReviews(this.product.id).then((data) => {
      this.zone.run(() => {
        this.reviews = data; 
      });
    });
    WC.getReviewSettings(this.product.id, this.user.id);
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter ReviewsPage');
  }

  async promptReview() {
   
    const modal = await this.modalCtrl.create({
      component: AddReviewPage,
      componentProps:this.product
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (data != null) {
      if(data && data.status && data.status==='approved'){
        this.reviews.unshift(data);
      }
    }

  }
}
