import { LoadingProvider } from "./../../services/loading/loading";
import { TranslateService } from "@ngx-translate/core";
import {
  SettingsProvider,
  ToastProvider,
  UserProvider,
  WooCommerceProvider
} from "./../../services/providers";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Component } from "@angular/core";
import {  NavController, Platform } from "@ionic/angular";

@Component({
  selector: "page-account-setting",
  templateUrl: "account-setting.html",
  styleUrls: ['account-setting.scss'],
})
export class AccountSettingPage {
  form_info: FormGroup;
  form_change_pass: FormGroup;
  dir: string;
  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public user: UserProvider,
    public WC: WooCommerceProvider,
    public toast: ToastProvider,
    platform: Platform,
    public translate: TranslateService,
    public settings: SettingsProvider,
    private loader: LoadingProvider
  ) {
    this.dir = platform.isRTL?'rtl':'ltr';;
    this.form_info = this.formBuilder.group({
      first_name: [this.user.first_name, Validators.required],
      last_name: [this.user.last_name, Validators.required],
      email: [this.user.email, Validators.required]
    });
    this.form_change_pass = formBuilder.group({
      opass: ["", Validators.required],
      npass: ["", Validators.required],
      cpass: ["", Validators.required]
    });
  }

  backHome(){
    this.navCtrl.back();
  }

  ionViewDidEnter() {
    console.log("ionViewDidEnter AccountSettingPage");
  }
  submit() {
    this.translate
      .get(["FILL_REQUIRED_FIELD", "PASSWORD_NOT_MATCH", "PROFILE_UPDATED"])
      .subscribe(x => {
        console.log(this.isEmptyObject(this.form_change_pass.value));
        if (!this.form_info.valid) {
          this.toast.show(x.FILL_REQUIRED_FIELD);
          return;
        }
        if (!this.isEmptyObject(this.form_change_pass.value)) {
          if (!this.form_change_pass.valid) {
            this.toast.show(x.FILL_REQUIRED_FIELD);
            return;
          }
          if (
            this.form_change_pass.controls["npass"].value !==
            this.form_change_pass.controls["cpass"].value
          ) {
            this.toast.show(x.PASSWORD_NOT_MATCH);
            return;
          }
        }
        console.log("here1");

        this.loader.show();
        this.WC.updateUserInfo(this.user.id, this.form_info.value).then(
          res => {
            console.log(res);
            this.user.loggedIn(res);
            if (this.isEmptyObject(this.form_change_pass.value)) {
              this.loader.dismiss();
              this.toast.showWithClose(x.PROFILE_UPDATED);
            } else {
              this.user.changePassword(this.form_change_pass.value).then(
                (res: any) => {
                  console.log(res);
                  this.loader.dismiss();
                  if (res.code == 1) {
                    this.toast.showWithClose(x.PROFILE_UPDATED);
                  } else {
                    this.toast.show(res.message);
                  }
                },
                err => {
                  this.loader.dismiss();
                  console.error(err);
                  this.toast.show(err.code);
                }
              );
            }
          },
          err => {
            this.loader.dismiss();
            console.error(err);
          }
        );
      });
  }
  isEmptyObject(o) {
    return Object.keys(o).every(x => {
      return o[x] === "" || o[x] === null;
    });
  }
}
