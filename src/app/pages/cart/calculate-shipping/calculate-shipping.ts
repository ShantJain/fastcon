import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SettingsProvider } from './../../../services/providers';
import { Component, Input } from '@angular/core';
import {  NavController, NavParams,  Platform, ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'page-calculate-shipping',
  templateUrl: 'calculate-shipping.html',
  styleUrls:['calculate-shipping.scss']
})
export class CalculateShippingPage {
  countries: Array<any> = [];
  states: Array<any> = [];
  countryOpts: any = {};
  stateOpts: any = {};
  form: FormGroup;
  data: any = { "country": "", "state": "", "postcode": "" };
  dir:string;
  @Input("pakage") set pakage(d:any){
    this.data = d
  }
  constructor(public navCtrl: NavController, private route: ActivatedRoute, private formBuilder: FormBuilder,platform:Platform,
    private viewCtrl: ModalController, private translate: TranslateService, public settings: SettingsProvider) {
      this.dir=platform.isRTL?'rtl':'ltr';;

    this.translate.get(['SELECT_COUNTRY', 'SELCT_COUNTRY_DESC', 'SELECT_STATE', 'SELCT_STATE_DESC']).subscribe((x) => {
      this.countryOpts = {
        //title: x.SELECT_COUNTRY,
        subTitle: x.SELCT_COUNTRY_DESC
      };
      this.stateOpts = {
        // title: x.SELECT_STATE,
        subTitle: x.SELCT_STATE_DESC
      }
    });
    this.form = this.formBuilder.group({});
  }
  
  ionViewDidEnter() {
    console.log('ionViewDidEnter CalculateShippingPage');
    this.countries = this.settings.countryList; 
    this.form = this.formBuilder.group({
      country: [this.data.country, Validators.required],
      state: [this.data.state],
      postcode: [this.data.postcode]
    });
    this.getStates();
  }
  close() {
    this.viewCtrl.dismiss(null);
  }
  submit() {
    this.viewCtrl.dismiss(this.form.value);
  }

  getStates() {
    let id = this.form.get('country').value || this.data.state;
    this.states = this.settings.getState(id);
    if (this.states.length == 0) {
      this.form.controls['state'].setValue('');
    }
  }
}
