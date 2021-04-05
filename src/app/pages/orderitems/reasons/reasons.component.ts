import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-reasons',
  templateUrl: './reasons.component.html',
  styleUrls: ['./reasons.component.scss'],
})
export class ReasonsComponent implements OnInit {
  public _dataRes:any;
  public res :any=[];
  @Input("data") set data(d:any){
    this._dataRes = JSON.parse(d);
    console.log(this._dataRes );
     this._dataRes.reasons.forEach(element => {
       console.log(element);
      this.res.push({"element":element})
    });
  }
  constructor(public modalCtrl:ModalController) { }

  ngOnInit() {}
  dismiss(){
    this.modalCtrl.dismiss();
  }
  selecRes(re){
    this.modalCtrl.dismiss({
      'data': re
    });
  }
}
