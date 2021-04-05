import { UserProvider,SettingsProvider } from './../../services/providers';
import { Component } from '@angular/core';
import {  NavController,  ModalController } from '@ionic/angular';
import { EditAddressPage } from './edit-address/edit-address';

@Component({
  selector: 'page-address',
  templateUrl: 'address.html',
  styleUrls: ['address.scss'],
})
export class AddressPage {

  constructor(public navCtrl: NavController,  public modalCtrl: ModalController,
    public user: UserProvider, public settings: SettingsProvider) {

  }
  backHome(){
    this.navCtrl.back();
  }
  ionViewDidEnter() {
    console.log('ionViewDidEnter AddressPage');
  }
  async createModal(page, params) {
    const modal = await this.modalCtrl.create({
      component: EditAddressPage,
      componentProps:{
        'addressType':params
      }
    });
    return await modal.present();
  }
  isEmptyObject(o) {
    return Object.keys(o).every(function (x) {
      return o[x] === '' || o[x] === null;  // or just "return o[x];" for falsy values
    });
  }

}
