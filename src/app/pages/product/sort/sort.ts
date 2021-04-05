import { Component, Input } from '@angular/core';
import {  NavController,  ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'page-sort',
  templateUrl: 'sort.html',
})
export class SortPage {

  firstTime:boolean=true;
  @Input() sortby: string = "popularity";
  constructor(public navCtrl: NavController,private route: ActivatedRoute,private viewCtrl:ModalController) {

  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter SortPage');
    console.log(this.sortby);
    if(this.sortby==""){
      this.sortby = "popularity";
    }
  }
  dismiss(data?) {
    /*if(data && this.firstTime){
      this.firstTime=!this.firstTime;
      return;
    }*/
    this.viewCtrl.dismiss(data);
  }
}
