import { SettingsProvider, ToastProvider } from './../../../services/providers';
import { App } from './../../../app.config';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import {  NavController, NavParams } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'page-language-setting',
  templateUrl: 'language-setting.html',
  styleUrls:['language-setting.scss']
})
export class LanguageSettingPage {
  form : FormGroup;
  languages: any[] = App.languages;

  constructor(public navCtrl: NavController, formBuilder:FormBuilder,
     private settings: SettingsProvider,public translate:TranslateService,public toastCtrl:ToastProvider) {
    this.form = formBuilder.group({
      language: [this.settings.all.language || this.translate.currentLang, Validators.required ]
    });
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter LanguageSettingPage');
  }

  submit() {
    this.settings.setSettings(this.form.value.language, 'language');
    this.translate.use(this.form.value.language);

    this.translate.get('LANGUAGE_CHANGED').subscribe( x=> {
      this.toastCtrl.show(x);
    });
  }
}
