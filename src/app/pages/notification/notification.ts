import { NotifProvider } from './../../services/notif/notif';
import { Component } from '@angular/core';
import {  AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
  styleUrls: ['notification.scss'],
})
export class NotificationPage {
  notif: any[] = [];
  
  constructor(private navCtrl:NavController, private _notif: NotifProvider, private alert: AlertController) {
    console.log(_notif.all);
  }
  backHome(){
    this.navCtrl.back();
  }
  async showAlert(x: any) {
    const alert = await this.alert.create({
      header: x.title,
      message: x.body,
      buttons: ['OK']
    });
  }

  remove(x: any){
    this._notif.remove(x.id);
  }
  // clear(){
  //   this.notif=[]; 
  //   this._notif.clear;
  // }

  ionViewDidEnter() {
    this.notif = this._notif.all.reverse();
    console.log('ionViewDidEnter AccountNotificationPage');
  }

}
