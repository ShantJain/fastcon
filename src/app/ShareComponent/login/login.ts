import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { App } from '../../app.config';
import { NavController, ModalController, Platform } from '@ionic/angular';
import { SettingsProvider, UserProvider, LoadingProvider, ToastProvider } from 'src/app/services/providers';
import { TranslateService } from '@ngx-translate/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "page-login",
  templateUrl: "login.html",
  styleUrls: ['login.scss'],
})
export class LoginPage {

  public loginForm: FormGroup=new FormGroup({});
  public resetForm: FormGroup=new FormGroup({});
  public signupForm: FormGroup=new FormGroup({});
  public referralForm: FormGroup=new FormGroup({});
  page: string;
  dir: string;
  storeName: any = { value: App.store };
  currentUserId: number;
  signupby: string;

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ModalController,
    private settings: SettingsProvider,
    private _fb: FormBuilder,
    private user: UserProvider,
    private loader: LoadingProvider,
    platform: Platform,
    private toast: ToastProvider,
    private translate: TranslateService,
    private googlePlus: GooglePlus,
    private fb: Facebook,
    private route: ActivatedRoute
  ) {
    this.dir = platform.isRTL?'rtl':'ltr';;
    this.route.queryParams.subscribe(params => {
      this.page  = params.page?params.page:"login";
      this.loginForm = this._fb.group({
        user: [null, [Validators.required]],
        pass: [null,[Validators.required]],
      });
      this.resetForm = this._fb.group({
        email: [null, [Validators.email]],
      });
      this.signupForm = this._fb.group({
        fname: ["", [Validators.required]],
        lname: ["", [Validators.required]],
        email: ["", [Validators.email]],
        pass: ["", [Validators.required]],
        pass2: ["", [Validators.required]],
        affiliate:[""],
      });
      this.referralForm = this._fb.group({
        refer_code: ["", [Validators.required]],
      });
    });

  }

  ionViewWillEnter() {
    console.log("ionViewDidEnter LoginPage");
  }
  dismiss(skip) {
    if (skip) {
      if (this.signupby === "social") {
        this.translate
          .get(["LOGIN_SUCCESS"], {
            value: this.user.first_name || this.user.username,
          })
          .subscribe((x) => {
            this.toast.show(x.LOGIN_SUCCESS);
          });
        this.viewCtrl.dismiss({ code: true });
      } else {
        this.translate.get(["REGISTER_SUCCESS"]).subscribe((x) => {
          this.toast.show(x.REGISTER_SUCCESS);
        });
        this.goToLogin();
      }
    } else {
      this.viewCtrl.dismiss();
    }
  }
  goToLogin() {
    this.page = "login";
  }
  goToReferral() {
    this.page = "referral";
  }
  goToSignup() {
    this.page = "signup";
  }
  goToReset() {
    this.page = "reset";
  }

  login() {
    var obj = this;
    console.log(obj.loginForm);
    if (!obj.loginForm.valid) {
      this.translate.get(["FILL_REQUIRED_FIELD"]).subscribe((x) => {
        this.toast.show(x.FILL_REQUIRED_FIELD);
      });
      return;
    }
    obj.loader.show();
    obj.user.login(obj.loginForm.value).then(
      (res: any) => {
        console.log(res);
        obj.loader.dismiss();
        if (res.code == 1) {
          obj.translate
            .get(["LOGIN_SUCCESS"], {
              value: res.details.first_name || res.details.username,
            })
            .subscribe((x) => {
              obj.toast.show(x.LOGIN_SUCCESS);
            });
            obj.user.loggedIn(res.details);
            console.log(obj.viewCtrl);
            obj.viewCtrl.dismiss({ code: true });
        } else {
          obj.translate.get(["LOGIN_FAILED"]).subscribe((x) => {
            obj.toast.show(x.LOGIN_FAILED);
          });
        }
      },
      (err) => {
        this.loader.dismiss();
        console.error(err);
        this.toast.show(err.code);
      }
    );
  }
  register() {
    console.log(this.signupForm.value);
    if (!this.signupForm.valid) {
      this.translate.get(["FILL_REQUIRED_FIELD"]).subscribe((x) => {
        this.toast.show(x.FILL_REQUIRED_FIELD);
      });
      return;
    }
    if (this.signupForm.value.pass !== this.signupForm.value.pass2) {
      this.translate.get(["PASSWORD_NOT_MATCH"]).subscribe((x) => {
        this.toast.show(x.PASSWORD_NOT_MATCH);
      });
      return;
    }
    this.loader.show();
    this.user.register(this.signupForm.value).then(
      (res: any) => {
        console.log(res);
        this.loader.dismiss();
        if (res.status == "1") {
          if (this.settings.appSettings.referearn && res.refer_earn == "1") {
            this.signupby = "form";
            this.currentUserId = res.user_id;
            this.goToReferral();
          } else {
            this.translate.get(["REGISTER_SUCCESS"]).subscribe((x) => {
              this.toast.show(x.REGISTER_SUCCESS);
            });
            this.goToLogin();
          }
        } else {
          //this.translate.get(['REGISTER_FAILED'], { value: res.firstname + res.lastname }).subscribe((x) => {
          this.toast.showWithClose(res.error);
          //});
        }
      },
      (err) => {
        this.loader.dismiss();
        console.error(err);
        this.toast.show(err.code);
      }
    );
  }
  getAffiliate(){
    if(this.referralForm.value.refer_code ==""){
      this.toast.show("Please enter code");
      return false;
    }
    this.user.affiliate(this.referralForm.value.refer_code,this.currentUserId).then(
      (res: any) => {
        this.dismiss(true);
      });
  }
  reset() {
    if (!this.resetForm.valid) {
      this.translate.get(["WRONG_EMAIL"]).subscribe((x) => {
        this.toast.show(x.WRONG_EMAIL);
      });
      return;
    }
    this.loader.show();
    this.user.reset(this.resetForm.value).then(
      (res: any) => {
        console.log(res);
        this.loader.dismiss();
        this.toast.show(res.message);
        if (res.code == 1) {
          this.goToLogin();
        }
      },
      (err) => {
        this.loader.dismiss();
        console.error(err);
        this.toast.show(err.code);
      }
    );
  }
  googleLogin() {
    this.loader.show();
    this.googlePlus
      .login({})
      .then((res) => {
        res.mode = "google";
        console.log(res);
        this.user.socialLogin(res).then(
          (res: any) => {
            console.log(res);
            this.loader.dismiss();
            if (res.code == 1) {
              this.user.loggedIn(res.details);
              if (
                this.settings.appSettings.referearn &&
                res.refer_earn == "1"
              ) {
                this.goToReferral();
                this.signupby = "social";
                this.currentUserId = this.user.id;
              } else {
                this.translate
                  .get(["LOGIN_SUCCESS"], {
                    value: res.details.first_name || res.details.username,
                  })
                  .subscribe((x) => {
                    this.toast.show(x.LOGIN_SUCCESS);
                  });
                this.viewCtrl.dismiss({ code: true });
              }
            } else {
              this.translate.get(["LOGIN_FAILED"]).subscribe((x) => {
                this.toast.show(x.LOGIN_FAILED);
              });
            }
          },
          (err) => {
            this.loader.dismiss();
            console.error(err);
            this.toast.show(err.code);
          }
        );
      })
      .catch((err) => {
        console.error(err);
        this.loader.dismiss();
        this.toast.show(err);
      });
  }
  facebookLogin() {
    this.fb
      .login(["public_profile", "email"])
      .then((res: FacebookLoginResponse) => {
        console.log("Logged into Facebook!", res);
        this.fb
          .api("me?fields=id,name,email,first_name,last_name", [])
          .then((res) => {
            console.log(res);
            res.mode = "facebook";
            if (res.email && res.email !== "") {
              this.loader.show();
              this.user.socialLogin(res).then(
                (res: any) => {
                  console.log(res);
                  this.loader.dismiss();
                  if (res.code == 1) {
                    this.user.loggedIn(res.details);
                    if (
                      this.settings.appSettings.referearn &&
                      res.refer_earn == "1"
                    ) {
                      this.goToReferral();
                      this.signupby = "social";
                      this.currentUserId = this.user.id;
                    } else {
                      this.translate
                        .get(["LOGIN_SUCCESS"], {
                          value: res.details.first_name || res.details.username,
                        })
                        .subscribe((x) => {
                          this.toast.show(x.LOGIN_SUCCESS);
                        });
                      this.viewCtrl.dismiss({ code: true });
                    }
                  } else {
                    this.translate.get(["LOGIN_FAILED"]).subscribe((x) => {
                      this.toast.show(x.LOGIN_FAILED);
                    });
                  }
                },
                (err) => {
                  this.loader.dismiss();
                  console.error(err);
                  this.toast.show(err.code);
                }
              );
            } else {
              this.translate
                .get(["FB_EMAIL_REQUIRED"], {
                  value: res.details.first_name || res.details.username,
                })
                .subscribe((x) => {
                  this.toast.show(x.FB_EMAIL_REQUIRED);
                });
            }
          });
      })
      .catch((e) => {
        console.log("Error logging into Facebook", e);
      });
  }
  applyReferralCode() {
    if (!this.referralForm.valid) {
      this.translate.get(["FILL_REQUIRED_FIELD"]).subscribe((x) => {
        this.toast.show(x.FILL_REQUIRED_FIELD);
      });
      return;
    }
    this.loader.show();
    this.user
      .applyReferralCode(this.currentUserId, this.referralForm.value.refer_code)
      .then(
        (x: any) => {
          this.loader.dismiss();
          if (x.status == 1) {
            if (this.signupby === "form") {
              this.translate.get(["REGISTER_SUCCESS"]).subscribe((x) => {
                this.toast.show(x.REGISTER_SUCCESS);
              });
              this.goToLogin();
            } else {
              this.translate
                .get(["LOGIN_SUCCESS"], {
                  value: this.user.first_name || this.user.username,
                })
                .subscribe((x) => {
                  this.toast.show(x.LOGIN_SUCCESS);
                });
              this.viewCtrl.dismiss({ code: true });
            }
          } else {
            this.toast.showWithClose(x.message);
          }
        },
        (err) => {
          this.loader.dismiss();
          console.log(err);
        }
      );
    console.log(this.referralForm.value);
  }
}
