import { Facebook } from "@ionic-native/facebook/ngx";
import { GooglePlus } from "@ionic-native/google-plus/ngx";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage-angular";

import { App } from "../../app.config";
import { HTTP } from '@ionic-native/http/ngx';

@Injectable({
  providedIn: "root",
})
export class UserProvider {
  private USER_KEY: string = "user";

  user: any;
  _readyPromise: Promise<any>;
  url: any;
  constructor(
    public storage: Storage,
    private http: HttpClient,
    public mHTTP:HTTP,
    private googlePlus: GooglePlus,
    private fb: Facebook
  ) {
    this.load();
    this.url = App.url + "/wp-json/wc/v2";
  }

  load() {
    return this.storage.get(this.USER_KEY).then((val) => {
      if (val) this.loggedIn(val);
    });
  }

  loggedIn(user) {
    this.user = user;
    this.save();
    return this.user;
  }

  async login(data: any) {
    let param = {
      email: data.user,
      password: data.pass,
    };
    console.log(param);
    let data1 = await this.mHTTP.post(this.url + "/login", param, {});
      return new Promise((resolve) => {
        console.log(data1);
        resolve(JSON.parse(data1?.data));
      });
      
    //return this.http.post(this.url + "/login", param);
  }
  async reset(data: any) {
    let emailField = "?email=" + data.email;
    console.log(emailField);
    let data1 = await this.mHTTP.get(this.url + "/forget-password" + emailField, {}, {});
    return new Promise((resolve) => { 
      resolve(JSON.parse(data1?.data));
    });
    //return this.http.get(this.url + "/forget-password" + emailField);
  }
  async changePassword(data: any) {
    let changefield =
      "?user_id=" +
      this.user.id +
      "&password_current=" +
      data.opass +
      "&password_1=" +
      data.npass +
      "&password_2=" +
      data.cpass;
    console.log(changefield);
    let data1 = await this.mHTTP.get(this.url + "/change-password" + changefield, {}, {});
    return new Promise((resolve) => { 
      resolve(JSON.parse(data1?.data));
    });
    //return this.http.get(this.url + "/change-password" + changefield);
  }
  
  async socialLogin(data) {
    let data1 = await this.mHTTP.post(this.url + "/social-login", data, {});
      return new Promise((resolve) => {
        resolve(JSON.parse(data1?.data));
      });
    //return this.http.post(this.url + "/social-login", data);
  }
  async affiliate(code: any,userId) {
   
    let clientConfirmData = new FormData();
    clientConfirmData.append("dev_inspect","test");
    clientConfirmData.append("affiliate_code",code);
    clientConfirmData.append("user_id",userId);

    this.mHTTP.setDataSerializer("multipart");
    console.log(clientConfirmData);
    let data1 = await this.mHTTP.post(this.url + "/add-affiliate-code", clientConfirmData, {});
      return new Promise((resolve) => {
        console.log(data1);
        resolve(JSON.parse(data1?.data));
      });
  }
  async register(data: any) {
    let fields = {
      fname: data.fname,
      lname: data.lname,
      email: data.email,
      password: data.pass,
    };
    this.mHTTP.setDataSerializer("json");
    let data1 = await this.mHTTP.post(this.url + "/phoen_register", fields, {});
      return new Promise((resolve) => {
        resolve(JSON.parse(data1?.data));
      });
    //return this.http.post(this.url + "/phoen_register", fields);
  }
  async getReferEarnData() {
    let u =
      this.user && this.user.id ? "?user_id=" + this.user.id : "?user_id=";
      let data1 = await this.mHTTP.get(this.url + "/refer" + u, {}, {});
      return new Promise((resolve) => { 
        resolve(JSON.parse(data1?.data));
      });
    //return this.http.get(this.url + "/refer" + u);
  }
  async applyReferralCode(id, code) {
    let fields = "user_id=" + id + "&refer_code=" + code;
    this.mHTTP.setDataSerializer("json");
    let data1 = await this.mHTTP.post(this.url + "/phoen_register", fields, {});
    return new Promise((resolve) => {
      resolve(JSON.parse(data1?.data));
    });
    /*
    return this.http.post(this.url + "/referapply", fields, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    });*/
  }

  logout() {
    this.user = null;
    this.googlePlus.disconnect();
    this.fb.logout();
    this.storage.remove(this.USER_KEY).then(() => {
      console.log("Logged Out");
    });
    this.http
      .get(this.url + "/logout", { responseType: "text" })
      .subscribe((data) => {
        console.log(data);
      });
  }

  get email() {
    if (this.user.email) return this.user.email;
  }

  get billing() {
    if (this.user && this.user.billing) {
      return this.user.billing;
    } else {
      return null;
    }
  }
  get shipping() {
    if (this.user && this.user.shipping) {
      return this.user.shipping;
    } else {
      return null;
    }
  }

  get first_name() {
    if (this.user.first_name) return this.user.first_name;
    else return null;
  }

  get last_name() {
    if (this.user.last_name) return this.user.last_name;
    else return "";
  }

  get id() {
    if (this.user && this.user.id) {
      return this.user.id;
    } else {
      return "";
    }
  }

  get username() {
    if (this.user.username) return this.user.username;
  }

  get all() {
    if (this.user) return this.user;
  }

  save() {
    return this.storage.set(this.USER_KEY, this.user);
  }
}
