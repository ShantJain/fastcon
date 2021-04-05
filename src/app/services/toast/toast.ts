import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: "root",
})
export class ToastProvider {
  toast: any;

  constructor(private _toast: ToastController, public translate: TranslateService) { }

  async show(msg: string, pos = "bottom") {
    const toast = await this._toast.create({
      message: msg,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

   showWithClose(msg: string, pos: string = 'bottom') {

     this.translate.get(['OK']).subscribe((x) => {
       this.showTost(msg,pos,x);
    })
  }
  async showTost(msg: string, pos: string = 'bottom',x){
    const toast = await this._toast.create({
      message: msg,
      position: 'bottom',
      buttons: [{
        text: x.OK,role: 'cancel',
      }]
    });
    toast.present();
  }
  showError() {
    this.translate.get(['ERROR']).subscribe((x) => {
      this.showPoError(x);
    })
  }
  async showPoError(x){
    const toast = await this._toast.create({
      message: x.ERROR,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }
}
