import { TranslateService } from '@ngx-translate/core';
import { UserProvider, SettingsProvider, LoadingProvider, ToastProvider, WooCommerceProvider } from './../../../services/providers';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { NavController,  Platform, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'page-edit-address',
  templateUrl: 'edit-address.html',
  styleUrls:['edit-address.scss']
})
export class EditAddressPage {
  form: FormGroup;
  data: any;
  countries: Array<any> = [];
  states: any[] = [];
  //addressType: any;
  stateOpts: any = {};
  dir:string;
  @Input() addressType: string;
  constructor(public navCtrl: NavController, private router: Router, public viewCtrl: ModalController,platform:Platform,
    public formBuilder: FormBuilder, public user: UserProvider, public settings: SettingsProvider, public loader: LoadingProvider,
    public WC: WooCommerceProvider, public translate: TranslateService, public toast: ToastProvider) {
      this.dir=platform.isRTL?'rtl':'ltr';;
      this.form = this.formBuilder.group({ });
   
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter EditAddressPage');
    if (this.addressType == 'billing') {
      this.data = this.user.billing;
      this.form = this.formBuilder.group({
        first_name: [this.data.first_name, Validators.required],
        last_name: [this.data.last_name, Validators.required],
        company: [this.data.company],
        email: [this.data.email, Validators.required],
        phone: [this.data.phone, Validators.required],
        city: [this.data.city, Validators.required],
        state: [this.data.state],
        postcode: [this.data.postcode, Validators.required],
        address_1: [this.data.address_1, Validators.required],
        address_2: [this.data.address_2],
        country: [this.data.country, Validators.required]
      });
    } else {
      this.data = this.user.shipping;
      this.form = this.formBuilder.group({
        first_name: [this.data.first_name, Validators.required],
        last_name: [this.data.last_name, Validators.required],
        company: [this.data.company],
        city: [this.data.city, Validators.required],
        state: [this.data.state],
        postcode: [this.data.postcode, Validators.required],
        address_1: [this.data.address_1, Validators.required],
        address_2: [this.data.address_2],
        country: [this.data.country, Validators.required]
      });

    }
    this.countries = this.settings.countryList;
    this.getStates();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
  submit() {
    if (!this.form.valid || (this.states.length > 0 && this.form.get('state').value == '')) {
      this.translate.get(['FILL_REQUIRED_FIELD']).subscribe(x => {
        this.toast.show(x.FILL_REQUIRED_FIELD);
      });
      return;
    }
    let data: any = {};
    if (this.addressType == 'billing') {
      data.billing = this.form.value
    } else {
      data.shipping = this.form.value
    }
    this.WC.updateUserInfo(this.user.id, data).then((res) => {
      console.log(res);
      this.user.loggedIn(res);
      this.viewCtrl.dismiss();
    }, (err) => {
      console.error(err);
      this.toast.showError();
    });
  }

  getStates() {
    let id = this.form.get('country').value || this.data.state;
    this.states = this.settings.getState(id);
    if (this.states.length == 0) {
      this.form.controls['state'].setValue('');
    }
  }
}
