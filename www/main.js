(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+wdU":
/*!***********************************************!*\
  !*** ./src/app/services/wishlist/wishlist.ts ***!
  \***********************************************/
/*! exports provided: WishlistProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistProvider", function() { return WishlistProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");



let WishlistProvider = class WishlistProvider {
    constructor(storage) {
        this.storage = storage;
        this.WISHLIST_KEY = 'wish';
        this.wishlist = [];
        this.load();
    }
    load() {
        return this.storage.get(this.WISHLIST_KEY).then((val) => {
            if (val && val.length > 0) {
                this.wishlist = val;
                return this.wishlist;
            }
            else {
                this.save();
            }
        });
    }
    add(product) {
        if (this.isFav(product))
            this.remove(product);
        else
            this.setFav(product);
    }
    isFav(product) {
        let exist = false;
        for (let i in this.wishlist) {
            if (this.wishlist[i].id == product.id) {
                exist = true;
                break;
            }
        }
        return exist;
    }
    get total() {
        return this.wishlist.length || 0;
    }
    setFav(product) {
        this.wishlist.push(product);
        return this.save();
    }
    remove(product) {
        for (var i in this.wishlist) {
            if (this.wishlist[i].id == product.id) {
                this.wishlist.splice(parseInt(i), 1);
                break;
            }
        }
        return this.save();
    }
    save() {
        return this.storage.set(this.WISHLIST_KEY, this.wishlist);
    }
    setFirst(value) {
        return this.storage.set(this.WISHLIST_KEY, value);
    }
    get all() {
        return this.wishlist;
    }
};
WishlistProvider.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__["Storage"] }
];
WishlistProvider = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], WishlistProvider);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/prashantj/Desktop/project/Phoeniixx/fastcon-shopping/src/main.ts */"zUnb");


/***/ }),

/***/ "0Rne":
/*!***************************************!*\
  !*** ./src/app/services/user/user.ts ***!
  \***************************************/
/*! exports provided: UserProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProvider", function() { return UserProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "GGTb");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "up+p");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app.config */ "aR35");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/http/ngx */ "XSEc");








let UserProvider = class UserProvider {
    constructor(storage, http, mHTTP, googlePlus, fb) {
        this.storage = storage;
        this.http = http;
        this.mHTTP = mHTTP;
        this.googlePlus = googlePlus;
        this.fb = fb;
        this.USER_KEY = "user";
        this.load();
        this.url = _app_config__WEBPACK_IMPORTED_MODULE_6__["App"].url + "/wp-json/wc/v2";
    }
    load() {
        return this.storage.get(this.USER_KEY).then((val) => {
            if (val)
                this.loggedIn(val);
        });
    }
    loggedIn(user) {
        this.user = user;
        this.save();
        return this.user;
    }
    login(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let param = {
                email: data.user,
                password: data.pass,
            };
            console.log(param);
            let data1 = yield this.mHTTP.post(this.url + "/login", param, {});
            return new Promise((resolve) => {
                console.log(data1);
                resolve(JSON.parse(data1 === null || data1 === void 0 ? void 0 : data1.data));
            });
            //return this.http.post(this.url + "/login", param);
        });
    }
    reset(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let emailField = "?email=" + data.email;
            console.log(emailField);
            let data1 = yield this.mHTTP.get(this.url + "/forget-password" + emailField, {}, {});
            return new Promise((resolve) => {
                resolve(JSON.parse(data1 === null || data1 === void 0 ? void 0 : data1.data));
            });
            //return this.http.get(this.url + "/forget-password" + emailField);
        });
    }
    changePassword(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let changefield = "?user_id=" +
                this.user.id +
                "&password_current=" +
                data.opass +
                "&password_1=" +
                data.npass +
                "&password_2=" +
                data.cpass;
            console.log(changefield);
            let data1 = yield this.mHTTP.get(this.url + "/change-password" + changefield, {}, {});
            return new Promise((resolve) => {
                resolve(JSON.parse(data1 === null || data1 === void 0 ? void 0 : data1.data));
            });
            //return this.http.get(this.url + "/change-password" + changefield);
        });
    }
    socialLogin(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let data1 = yield this.mHTTP.post(this.url + "/social-login", data, {});
            return new Promise((resolve) => {
                resolve(JSON.parse(data1 === null || data1 === void 0 ? void 0 : data1.data));
            });
            //return this.http.post(this.url + "/social-login", data);
        });
    }
    affiliate(code, userId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let clientConfirmData = new FormData();
            clientConfirmData.append("dev_inspect", "test");
            clientConfirmData.append("affiliate_code", code);
            clientConfirmData.append("user_id", userId);
            this.mHTTP.setDataSerializer("multipart");
            console.log(clientConfirmData);
            let data1 = yield this.mHTTP.post(this.url + "/add-affiliate-code", clientConfirmData, {});
            return new Promise((resolve) => {
                console.log(data1);
                resolve(JSON.parse(data1 === null || data1 === void 0 ? void 0 : data1.data));
            });
        });
    }
    register(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let fields = {
                fname: data.fname,
                lname: data.lname,
                email: data.email,
                password: data.pass,
            };
            this.mHTTP.setDataSerializer("json");
            let data1 = yield this.mHTTP.post(this.url + "/phoen_register", fields, {});
            return new Promise((resolve) => {
                resolve(JSON.parse(data1 === null || data1 === void 0 ? void 0 : data1.data));
            });
            //return this.http.post(this.url + "/phoen_register", fields);
        });
    }
    getReferEarnData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let u = this.user && this.user.id ? "?user_id=" + this.user.id : "?user_id=";
            let data1 = yield this.mHTTP.get(this.url + "/refer" + u, {}, {});
            return new Promise((resolve) => {
                resolve(JSON.parse(data1 === null || data1 === void 0 ? void 0 : data1.data));
            });
            //return this.http.get(this.url + "/refer" + u);
        });
    }
    applyReferralCode(id, code) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let fields = "user_id=" + id + "&refer_code=" + code;
            this.mHTTP.setDataSerializer("json");
            let data1 = yield this.mHTTP.post(this.url + "/phoen_register", fields, {});
            return new Promise((resolve) => {
                resolve(JSON.parse(data1 === null || data1 === void 0 ? void 0 : data1.data));
            });
            /*
            return this.http.post(this.url + "/referapply", fields, {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
              },
            });*/
        });
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
        if (this.user.email)
            return this.user.email;
    }
    get billing() {
        if (this.user && this.user.billing) {
            return this.user.billing;
        }
        else {
            return null;
        }
    }
    get shipping() {
        if (this.user && this.user.shipping) {
            return this.user.shipping;
        }
        else {
            return null;
        }
    }
    get first_name() {
        if (this.user.first_name)
            return this.user.first_name;
        else
            return null;
    }
    get last_name() {
        if (this.user.last_name)
            return this.user.last_name;
        else
            return "";
    }
    get id() {
        if (this.user && this.user.id) {
            return this.user.id;
        }
        else {
            return "";
        }
    }
    get username() {
        if (this.user.username)
            return this.user.username;
    }
    get all() {
        if (this.user)
            return this.user;
    }
    save() {
        return this.storage.set(this.USER_KEY, this.user);
    }
};
UserProvider.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__["HTTP"] },
    { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_2__["GooglePlus"] },
    { type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_1__["Facebook"] }
];
UserProvider = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
        providedIn: "root",
    })
], UserProvider);



/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "3C+A":
/*!************************************!*\
  !*** ./src/app/services/Events.ts ***!
  \************************************/
/*! exports provided: Events */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Events", function() { return Events; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");



/**
 * A custom Events service just like Ionic 3 Events https://ionicframework.com/docs/v3/api/util/Events/ which got removed in Ionic 5.
 *
 * @author Shashank Agrawal
 */
let Events = class Events {
    constructor() {
        this.channels = {};
    }
    /**
     * Subscribe to a topic and provide a single handler/observer.
     * @param topic The name of the topic to subscribe to.
     * @param observer The observer or callback function to listen when changes are published.
     *
     * @returns Subscription from which you can unsubscribe to release memory resources and to prevent memory leak.
     */
    subscribe(topic, observer) {
        if (!this.channels[topic]) {
            // You can also use ReplaySubject with one concequence
            this.channels[topic] = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        }
        return this.channels[topic].subscribe(observer);
    }
    /**
     * Publish some data to the subscribers of the given topic.
     * @param topic The name of the topic to emit data to.
     * @param data data in any format to pass on.
     */
    publish(topic, data) {
        const subject = this.channels[topic];
        if (!subject) {
            // Or you can create a new subject for future subscribers
            return;
        }
        subject.next(data);
    }
    /**
     * When you are sure that you are done with the topic and the subscribers no longer needs to listen to a particular topic, you can
     * destroy the observable of the topic using this method.
     * @param topic The name of the topic to destroy.
     */
    destroy(topic) {
        const subject = this.channels[topic];
        if (!subject) {
            return;
        }
        subject.complete();
        delete this.channels[topic];
    }
};
Events = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], Events);



/***/ }),

/***/ "3tmi":
/*!***********************************************!*\
  !*** ./src/app/services/settings/settings.ts ***!
  \***********************************************/
/*! exports provided: SettingsProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsProvider", function() { return SettingsProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");




let SettingsProvider = class SettingsProvider {
    constructor(storage, platform, appRef) {
        this.storage = storage;
        this.platform = platform;
        this.appRef = appRef;
        this.SETTINGS_KEY = "settings";
        this.settings = {};
        console.log("Hello SettingsProvider");
    }
    load() {
        console.log("Loaded Setting");
        return this.storage.get(this.SETTINGS_KEY).then(val => {
            if (val) {
                this.settings = val;
                return this.settings;
            }
            else {
                this.storage.set(this.SETTINGS_KEY, this.settings);
            }
        });
    }
    setSettings(data, id) {
        this.settings[id] = {};
        this.settings[id] = data;
        this.appRef.tick();
        return this.save(this.settings);
    }
    save(data) {
        return this.storage.set(this.SETTINGS_KEY, data);
    }
    get all() {
        return this.settings;
    }
    get cartCount() {
        return this.settings.cart_count;
    }
    get countryList() {
        let arr = [];
        for (let i in this.settings.appSettings.countries)
            arr.push({ id: i, name: this.settings.appSettings.countries[i] });
        return arr;
    }
    getState(country_id) {
        let arr = [];
        let obj = this.settings.appSettings.county_states[country_id];
        for (let i in obj)
            arr.push({ id: i, name: obj[i] });
        return arr;
    }
    get appSettings() {
        return this.settings.appSettings;
    }
    get reviewSettings() {
        return this.settings.reviewSettings || {};
    }
    get country() {
        return this.settings.country;
    }
    get state() {
        return this.settings.state;
    }
    get postcode() {
        return this.settings.postcode;
    }
    get category() {
        return this.settings.category;
    }
    get layout() {
        return this.settings.layout;
    }
    get attributes() {
        return this.settings.attributes;
    }
    get dir() {
        return this.settings.dir;
    }
};
SettingsProvider.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ApplicationRef"] }
];
SettingsProvider = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: "root",
    })
], SettingsProvider);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "EEhM":
/*!*****************************************!*\
  !*** ./src/app/services/notif/notif.ts ***!
  \*****************************************/
/*! exports provided: NotifProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifProvider", function() { return NotifProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");



let NotifProvider = class NotifProvider {
    constructor(storage) {
        this.storage = storage;
        this.NOTIF_KEY = 'notif';
        this.notif = [];
        this.load();
    }
    load() {
        return this.storage.get(this.NOTIF_KEY).then((val) => {
            if (val) {
                this.notif = val;
                return this.notif;
            }
            else {
                this.save();
            }
        });
    }
    remove(id) {
        for (let i in this.notif) {
            if (this.notif[i].id == id) {
                this.notif.splice(i, 1);
                break;
            }
        }
        return this.save();
    }
    post(data) {
        data.id = new Date().getTime();
        this.notif.push(data);
        return this.save();
    }
    get clear() {
        this.notif = [];
        return this.save();
    }
    save() {
        return this.storage.set(this.NOTIF_KEY, this.notif);
    }
    get all() {
        if (this.notif) {
            return this.notif;
        }
        else {
            return [];
        }
    }
};
NotifProvider.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__["Storage"] }
];
NotifProvider = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], NotifProvider);



/***/ }),

/***/ "L4fY":
/*!*****************************************!*\
  !*** ./src/app/services/toast/toast.ts ***!
  \*****************************************/
/*! exports provided: ToastProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastProvider", function() { return ToastProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");




let ToastProvider = class ToastProvider {
    constructor(_toast, translate) {
        this._toast = _toast;
        this.translate = translate;
    }
    show(msg, pos = "bottom") {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this._toast.create({
                message: msg,
                duration: 2000,
                position: 'bottom'
            });
            toast.present();
        });
    }
    showWithClose(msg, pos = 'bottom') {
        this.translate.get(['OK']).subscribe((x) => {
            this.showTost(msg, pos, x);
        });
    }
    showTost(msg, pos = 'bottom', x) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this._toast.create({
                message: msg,
                position: 'bottom',
                buttons: [{
                        text: x.OK, role: 'cancel',
                    }]
            });
            toast.present();
        });
    }
    showError() {
        this.translate.get(['ERROR']).subscribe((x) => {
            this.showPoError(x);
        });
    }
    showPoError(x) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this._toast.create({
                message: x.ERROR,
                duration: 2000,
                position: 'bottom'
            });
            toast.present();
        });
    }
};
ToastProvider.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }
];
ToastProvider = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: "root",
    })
], ToastProvider);



/***/ }),

/***/ "MeOy":
/*!***********************************************!*\
  !*** ./src/app/ShareComponent/login/login.ts ***!
  \***********************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.html */ "xdK+");
/* harmony import */ var _login_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.scss */ "lCbl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app.config */ "aR35");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_providers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/providers */ "fC+V");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "up+p");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "GGTb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");












let LoginPage = class LoginPage {
    constructor(navCtrl, viewCtrl, settings, _fb, user, loader, platform, toast, translate, googlePlus, fb, route) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.settings = settings;
        this._fb = _fb;
        this.user = user;
        this.loader = loader;
        this.toast = toast;
        this.translate = translate;
        this.googlePlus = googlePlus;
        this.fb = fb;
        this.route = route;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.resetForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.referralForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.storeName = { value: _app_config__WEBPACK_IMPORTED_MODULE_5__["App"].store };
        this.dir = platform.isRTL ? 'rtl' : 'ltr';
        ;
        this.route.queryParams.subscribe(params => {
            this.page = params.page ? params.page : "login";
            this.loginForm = this._fb.group({
                user: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                pass: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            });
            this.resetForm = this._fb.group({
                email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            });
            this.signupForm = this._fb.group({
                fname: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                lname: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
                pass: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                pass2: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                affiliate: [""],
            });
            this.referralForm = this._fb.group({
                refer_code: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
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
            }
            else {
                this.translate.get(["REGISTER_SUCCESS"]).subscribe((x) => {
                    this.toast.show(x.REGISTER_SUCCESS);
                });
                this.goToLogin();
            }
        }
        else {
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
        obj.user.login(obj.loginForm.value).then((res) => {
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
            }
            else {
                obj.translate.get(["LOGIN_FAILED"]).subscribe((x) => {
                    obj.toast.show(x.LOGIN_FAILED);
                });
            }
        }, (err) => {
            this.loader.dismiss();
            console.error(err);
            this.toast.show(err.code);
        });
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
        this.user.register(this.signupForm.value).then((res) => {
            console.log(res);
            this.loader.dismiss();
            if (res.status == "1") {
                if (this.settings.appSettings.referearn && res.refer_earn == "1") {
                    this.signupby = "form";
                    this.currentUserId = res.user_id;
                    this.goToReferral();
                }
                else {
                    this.translate.get(["REGISTER_SUCCESS"]).subscribe((x) => {
                        this.toast.show(x.REGISTER_SUCCESS);
                    });
                    this.goToLogin();
                }
            }
            else {
                //this.translate.get(['REGISTER_FAILED'], { value: res.firstname + res.lastname }).subscribe((x) => {
                this.toast.showWithClose(res.error);
                //});
            }
        }, (err) => {
            this.loader.dismiss();
            console.error(err);
            this.toast.show(err.code);
        });
    }
    getAffiliate() {
        if (this.referralForm.value.refer_code == "") {
            this.toast.show("Please enter code");
            return false;
        }
        this.user.affiliate(this.referralForm.value.refer_code, this.currentUserId).then((res) => {
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
        this.user.reset(this.resetForm.value).then((res) => {
            console.log(res);
            this.loader.dismiss();
            this.toast.show(res.message);
            if (res.code == 1) {
                this.goToLogin();
            }
        }, (err) => {
            this.loader.dismiss();
            console.error(err);
            this.toast.show(err.code);
        });
    }
    googleLogin() {
        this.loader.show();
        this.googlePlus
            .login({})
            .then((res) => {
            res.mode = "google";
            console.log(res);
            this.user.socialLogin(res).then((res) => {
                console.log(res);
                this.loader.dismiss();
                if (res.code == 1) {
                    this.user.loggedIn(res.details);
                    if (this.settings.appSettings.referearn &&
                        res.refer_earn == "1") {
                        this.goToReferral();
                        this.signupby = "social";
                        this.currentUserId = this.user.id;
                    }
                    else {
                        this.translate
                            .get(["LOGIN_SUCCESS"], {
                            value: res.details.first_name || res.details.username,
                        })
                            .subscribe((x) => {
                            this.toast.show(x.LOGIN_SUCCESS);
                        });
                        this.viewCtrl.dismiss({ code: true });
                    }
                }
                else {
                    this.translate.get(["LOGIN_FAILED"]).subscribe((x) => {
                        this.toast.show(x.LOGIN_FAILED);
                    });
                }
            }, (err) => {
                this.loader.dismiss();
                console.error(err);
                this.toast.show(err.code);
            });
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
            .then((res) => {
            console.log("Logged into Facebook!", res);
            this.fb
                .api("me?fields=id,name,email,first_name,last_name", [])
                .then((res) => {
                console.log(res);
                res.mode = "facebook";
                if (res.email && res.email !== "") {
                    this.loader.show();
                    this.user.socialLogin(res).then((res) => {
                        console.log(res);
                        this.loader.dismiss();
                        if (res.code == 1) {
                            this.user.loggedIn(res.details);
                            if (this.settings.appSettings.referearn &&
                                res.refer_earn == "1") {
                                this.goToReferral();
                                this.signupby = "social";
                                this.currentUserId = this.user.id;
                            }
                            else {
                                this.translate
                                    .get(["LOGIN_SUCCESS"], {
                                    value: res.details.first_name || res.details.username,
                                })
                                    .subscribe((x) => {
                                    this.toast.show(x.LOGIN_SUCCESS);
                                });
                                this.viewCtrl.dismiss({ code: true });
                            }
                        }
                        else {
                            this.translate.get(["LOGIN_FAILED"]).subscribe((x) => {
                                this.toast.show(x.LOGIN_FAILED);
                            });
                        }
                    }, (err) => {
                        this.loader.dismiss();
                        console.error(err);
                        this.toast.show(err.code);
                    });
                }
                else {
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
            .then((x) => {
            this.loader.dismiss();
            if (x.status == 1) {
                if (this.signupby === "form") {
                    this.translate.get(["REGISTER_SUCCESS"]).subscribe((x) => {
                        this.toast.show(x.REGISTER_SUCCESS);
                    });
                    this.goToLogin();
                }
                else {
                    this.translate
                        .get(["LOGIN_SUCCESS"], {
                        value: this.user.first_name || this.user.username,
                    })
                        .subscribe((x) => {
                        this.toast.show(x.LOGIN_SUCCESS);
                    });
                    this.viewCtrl.dismiss({ code: true });
                }
            }
            else {
                this.toast.showWithClose(x.message);
            }
        }, (err) => {
            this.loader.dismiss();
            console.log(err);
        });
        console.log(this.referralForm.value);
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: src_app_services_providers__WEBPACK_IMPORTED_MODULE_7__["SettingsProvider"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_services_providers__WEBPACK_IMPORTED_MODULE_7__["UserProvider"] },
    { type: src_app_services_providers__WEBPACK_IMPORTED_MODULE_7__["LoadingProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: src_app_services_providers__WEBPACK_IMPORTED_MODULE_7__["ToastProvider"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
    { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_9__["GooglePlus"] },
    { type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_10__["Facebook"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "page-login",
        template: _raw_loader_login_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginPage);



/***/ }),

/***/ "OkR+":
/*!*****************************************************!*\
  !*** ./src/app/services/woocommerce/woocommerce.ts ***!
  \*****************************************************/
/*! exports provided: WooCommerceProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WooCommerceProvider", function() { return WooCommerceProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../settings/settings */ "3tmi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.config */ "aR35");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/http/ngx */ "XSEc");
/* harmony import */ var _woocommerce_woocommerce_rest_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @woocommerce/woocommerce-rest-api */ "abBO");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");









let WooCommerceProvider = class WooCommerceProvider {
    constructor(storage, http, _platform, mHTTP, temp) {
        this.storage = storage;
        this.http = http;
        this._platform = _platform;
        this.mHTTP = mHTTP;
        this.temp = temp;
        this.woo = {};
        this.RestURL = _app_config__WEBPACK_IMPORTED_MODULE_4__["App"].url + "/wp-json/wc/v2/";
        this.init();
    }
    init() {
        this.WooCommerce = new _woocommerce_woocommerce_rest_api__WEBPACK_IMPORTED_MODULE_7__["default"]({
            url: _app_config__WEBPACK_IMPORTED_MODULE_4__["App"].url,
            consumerKey: _app_config__WEBPACK_IMPORTED_MODULE_4__["App"].consumerKey,
            consumerSecret: _app_config__WEBPACK_IMPORTED_MODULE_4__["App"].consumerSecret,
            wpAPI: true,
            version: "wc/v2",
            //verifySsl: true,
            queryStringAuth: true,
        });
        return this.WooCommerce;
    }
    // getAllCategories(parent?, per_page = 100, order?, orderby?) {//: Promise<any> {
    //   let pt = parent ? "&parent=" + parent : '';
    //   let pp = "?per_page=" + per_page;
    //   let o = order ? "&order=" + order : '';
    //   let ob = orderby ? "&orderby=" + orderby : '';
    //   return this.WooCommerce.get("products/categories" + pp + pt + o + ob).then((x) => {
    //     console.log(x.data);
    //     return x.data;
    //   });
    // }
    getAllCategories(parent) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //: Promise<any> {
            let pt = parent ? "?parent=" + parent : "";
            let data1 = yield this.mHTTP.get(this.RestURL + "products/all-categories" + pt, {}, {});
            return new Promise((resolve) => {
                resolve(JSON.parse(data1 === null || data1 === void 0 ? void 0 : data1.data));
            });
            // return this.http.get(this.RestURL + "products/all-categories" + pt);
        });
    }
    getOrderItemsReason() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            /*console.log(this.RestURL + "order-item/action-settings");
            let data1 = await this.mHTTP.get(this.RestURL + "", {}, {});
            console.log(data1);
            return new Promise((resolve) => {
              resolve(JSON.parse(data1?.data));
            });*/
            return this.WooCommerce.get("order-item/action-settings").then((x) => {
                //console.log(x.data);
                return x.data;
            });
        });
    }
    getSubCategories(c) {
        //: Promise<any> {
        return this.WooCommerce.get("products/categories?parent=" + c).then((x) => {
            //console.log(x.data);
            return x.data;
        });
    }
    loadSetting() {
        return this.WooCommerce.get("system_status").then((x) => {
            console.log(x);
            this.temp.setSettings(x.data.settings, "settings");
            return x.data.settings;
        }, (err) => {
            console.log(err);
        });
    }
    // getAllProducts(page: number, category: number, search: string, min_price: number, max_price: number, per_page: number, status: string, order: string, attribute: string = '', attribute_term: string = '', include: string, orderby: string, featured: boolean, on_sale: boolean, visible: boolean) {//: Promise<any> {
    //   let p = page ? '&page=' + page : '';
    //   let pp = per_page ? '&per_page=' + per_page : '&per_page=10';
    //   let c = category ? '&category=' + category : '';
    //   let q = search ? '&search=' + search : '';
    //   let min = min_price ? '&min_price=' + min_price : '';
    //   let max = max_price ? '&max_price=' + max_price : '';
    //   let s = status ? '?status=' + status : '?status=publish';
    //   let a = attribute ? '&attribute=' + attribute : '';
    //   let t = attribute_term ? '&attribute_term=' + attribute_term : '';
    //   let o = order ? '&order=' + order : '';
    //   let i = include ? '&include=' + include : '';
    //   let ob = orderby ? '&orderby=' + orderby : '';
    //   let f = featured ? '&featured=' + featured : '';
    //   let os = on_sale ? '&on_sale=' + on_sale : '';
    //   let v = visible ? '&visible=' + visible : '';
    //   return this.WooCommerce.get("products" + s + p + pp + c + q + min + max + a + t + o + i + ob + f + os + v).then((x) => {
    //     console.log(x.data);
    //     return x.data;
    //   });
    // }
    getProductById(include, id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //Multiple ids suppoerted(include=1,2,3,4,5) or single id supported(id=1)
            let incl = include ? "?include=" + include : "";
            let i = id ? "?id=" + id : "";
            let data1 = yield this.mHTTP.get(this.RestURL + "get-products-by-id" + incl + i, {}, {});
            return new Promise((resolve) => {
                resolve(JSON.parse(data1 === null || data1 === void 0 ? void 0 : data1.data));
            });
            // return this.http.get(this.RestURL + "get-products-by-id" + incl + i);
        });
    }
    search(search, per_page) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let s = search ? "?search=" + search : "?search=''";
            let pp = per_page ? "&per_page=" + per_page : "";
            let data1 = yield this.mHTTP.get(this.RestURL + "custom-search" + s + pp, {}, {});
            return new Promise((resolve) => {
                resolve(JSON.parse(data1 === null || data1 === void 0 ? void 0 : data1.data));
            });
            //return this.http.get(this.RestURL + "custom-search" + s + pp);
        });
    }
    getOrderItemsCancel(order_id, item_id, reason, request_item_action) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let clientConfirmData = new FormData();
            clientConfirmData.append("dev", "test");
            clientConfirmData.append("order_id", order_id);
            clientConfirmData.append("item_id", item_id);
            clientConfirmData.append("reason", reason);
            clientConfirmData.append("request_item_action", request_item_action);
            this.mHTTP.setDataSerializer("multipart");
            console.log(clientConfirmData);
            let data1 = yield this.mHTTP.post(this.RestURL + "order-item/cancel", clientConfirmData, {});
            console.log(data1);
            return new Promise((resolve) => {
                resolve(JSON.parse(data1 === null || data1 === void 0 ? void 0 : data1.data));
            });
        });
    }
    getOrderItemsExchange(order_id, item_id, reason, request_item_action) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // this.mHTTP.setDataSerializer("json");
            let clientConfirmData = new FormData();
            clientConfirmData.append("dev", "test");
            clientConfirmData.append("order_id", order_id);
            clientConfirmData.append("item_id", item_id);
            clientConfirmData.append("reason", reason);
            clientConfirmData.append("request_item_action", request_item_action);
            this.mHTTP.setDataSerializer("multipart");
            console.log(clientConfirmData);
            console.log(this.RestURL + "order-item/exchange");
            let data1 = yield this.mHTTP.post(this.RestURL + "order-item/exchange", clientConfirmData, {});
            return new Promise((resolve) => {
                resolve(JSON.parse(data1 === null || data1 === void 0 ? void 0 : data1.data));
            });
        });
    }
    getOrderItemsReturn(order_id, item_id, reason, request_item_action) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let clientConfirmData = new FormData();
            clientConfirmData.append("dev", "test");
            clientConfirmData.append("order_id", order_id);
            clientConfirmData.append("item_id", item_id);
            clientConfirmData.append("reason", reason);
            clientConfirmData.append("request_item_action", request_item_action);
            this.mHTTP.setDataSerializer("multipart");
            console.log(clientConfirmData);
            let data1 = yield this.mHTTP.post(this.RestURL + "order-item/refund", clientConfirmData, {});
            return new Promise((resolve) => {
                console.log(data1);
                resolve(JSON.parse(data1 === null || data1 === void 0 ? void 0 : data1.data));
            });
        });
    }
    getCustomProducts(page, per_page, sort, category, search, min_price, max_price, on_sale, featured, filterData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let p = page ? "?page=" + page : "?page=1";
            let pp = per_page ? "&per_page=" + per_page : "&per_page=10";
            let s = sort ? "&sort=" + sort : "&sort=default";
            let c = category ? "&category=" + category : "";
            let sh = search ? "&search=" + search : "";
            let min_p = min_price ? "&min_price=" + min_price : "";
            let max_p = max_price ? "&max_price=" + max_price : "";
            let os = on_sale ? "&on_sale=" + on_sale : "";
            let f = featured ? "&featured=" + featured : "";
            console.log("custom-products" + p + pp + s + c + sh + min_p + max_p);
            let data1 = yield this.mHTTP.post(this.RestURL +
                "custom-products" +
                p +
                pp +
                s +
                c +
                sh +
                min_p +
                max_p +
                os +
                f, filterData, {});
            return new Promise((resolve) => {
                resolve(JSON.parse(data1 === null || data1 === void 0 ? void 0 : data1.data));
            });
            /*
            return this.http.post(
              this.RestURL +
                "custom-products" +
                p +
                pp +
                s +
                c +
                sh +
                min_p +
                max_p +
                os +
                f,
              filterData
            );*/
        });
    }
    getProductThumb(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let data1 = yield this.mHTTP.get(this.RestURL + "product/thumbnail?id=" + id, {}, {});
            return new Promise((resolve) => {
                resolve(JSON.parse(data1 === null || data1 === void 0 ? void 0 : data1.data));
            });
            //return this.http.get(this.RestURL + "product/thumbnail?id=" + id);
        });
    }
    getAttributeTerms(id) {
        return this.WooCommerce.get("products/attributes/" + id + "/terms?hide_empty=true").then((x) => {
            // console.log(x.data);
            return x.data;
        });
    }
    getAttributes() {
        //: Promise<any> {
        return this.WooCommerce.get("products/attributes").then((x) => {
            // console.log(x.data);
            return x.data;
        });
    }
    getProductAttributes(id) {
        let i = id ? "?id=" + id : "";
        return this.WooCommerce.get("products/product-attributes/" + i).then((x) => {
            // console.log(x.data);
            return x.data;
        });
    }
    getCustomAttributes(product) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let p = product ? "&product=" + product : "";
            let data1 = yield this.mHTTP.get(this.RestURL + "products/custom-attributes?hide_empty=true" + p, {}, {});
            return new Promise((resolve) => {
                resolve(JSON.parse(data1 === null || data1 === void 0 ? void 0 : data1.data));
            });
            /*
            return this.http.get(
              this.RestURL + "products/custom-attributes?hide_empty=true" + p
            );*/
        });
    }
    getProductVariation(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.mHTTP.setDataSerializer("json");
            //Custom api made by phoeniixx
            console.log(data);
            let data1 = yield this.mHTTP.post(this.RestURL + "products/get-variation", data, {});
            return new Promise((resolve) => {
                console.log(data1);
                resolve(JSON.parse(data1 === null || data1 === void 0 ? void 0 : data1.data));
            });
            // return this.http.post(this.RestURL + "products/get-variation", data);
        });
    }
    getOrders(id, page, per_page) {
        let p = page ? "&page=" + page : "";
        let pp = per_page ? "&per_page=" + per_page : "&per_page=5";
        console.log("orders?customer=" + id + p + pp);
        return this.WooCommerce.get("orders?customer=" + id + p + pp).then((data) => {
            return data.data;
        });
    }
    updateOrder(id, status, transaction_id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var data = {
                "order_id": id,
                "cancel_reason": status
            };
            console.log(data);
            this.mHTTP.setDataSerializer("json");
            let data1 = yield this.mHTTP.post(this.RestURL + "order/cancel", data, {});
            return new Promise((resolve) => {
                console.log(data1);
                resolve(JSON.parse(data1 === null || data1 === void 0 ? void 0 : data1.data));
            });
            /*return this.WooCommerce.put("order/cancel", data).then((data) => {
              return data.data;
            });*/
        });
    }
    getOrder(order_id) {
        return this.WooCommerce.get("orders/" + order_id).then((data) => {
            return data.data;
        });
    }
    getDownloads(id) {
        return this.WooCommerce.get("customers/" + id + "/downloads").then((x) => {
            // console.log(x.data);
            return x.data;
        });
    }
    getUserInfo(id) {
        return this.WooCommerce.get("customers/" + id).then((x) => {
            // console.log(x.data);
            return x.data;
        });
    }
    updateUserInfo(id, data) {
        return this.WooCommerce.post("customers/" + id, data).then((x) => {
            return x.data;
        });
    }
    createOrder(data) {
        return this.WooCommerce.post("orders", data).then((x) => {
            return x.data;
        });
    }
    saveAppSettings() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            /*if(this._platform.is("mobileweb") || this._platform.is("desktop")){
              return this.http.get(this.RestURL + "app-settings");
            }else{*/
            console.log(this.RestURL + "app-settings");
            let data = yield this.mHTTP.get(this.RestURL + "app-settings", {}, {});
            return new Promise((resolve) => {
                resolve(JSON.parse(data === null || data === void 0 ? void 0 : data.data));
            });
            //}
        });
    }
    checkPincode(pincode, product_id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let p = {};
            p.pincode = pincode;
            if (product_id) {
                p.product_id = product_id;
            }
            let data1 = yield this.mHTTP.post(this.RestURL + "checkpincode", p, {});
            return new Promise((resolve) => {
                resolve(JSON.parse(data1 === null || data1 === void 0 ? void 0 : data1.data));
            });
            //return this.http.post(this.RestURL + "checkpincode", p);
        });
    }
    getFAQ() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let data1 = yield this.mHTTP.get(this.RestURL + "faq-settings", {}, {});
            return new Promise((resolve) => {
                resolve(JSON.parse(data1 === null || data1 === void 0 ? void 0 : data1.data));
            });
            //return this.http.get(this.RestURL + "faq-settings");
        });
    }
    getCoupons() {
        return this.WooCommerce.get("coupons").then((x) => {
            return x.data;
        });
    }
    getReviewSettings(product_id, user_id) {
        let p_id = product_id ? "?product_id=" + product_id : "?";
        let u_id = user_id ? "&user_id=" + user_id : "";
        return this.http
            .get(this.RestURL + "product/review-settings" + p_id + u_id)
            .subscribe((x) => {
            this.temp.setSettings(x, "reviewSettings");
            return x;
        });
    }
    getProductReviews(id, status = "approved") {
        let WCv3 = new _woocommerce_woocommerce_rest_api__WEBPACK_IMPORTED_MODULE_7__["default"]({
            url: _app_config__WEBPACK_IMPORTED_MODULE_4__["App"].url,
            consumerKey: _app_config__WEBPACK_IMPORTED_MODULE_4__["App"].consumerKey,
            consumerSecret: _app_config__WEBPACK_IMPORTED_MODULE_4__["App"].consumerSecret,
            wpAPI: true,
            version: "wc/v3",
            //verifySsl: true,
            queryStringAuth: true,
        });
        let p = id ? "?product=" + id : "";
        let s = "&status=" + status;
        return WCv3.get("products/reviews" + p + s).then((x) => {
            console.log(x.data);
            return x.data;
        });
    }
    postProductReviews(data) {
        let WCv3 = new _woocommerce_woocommerce_rest_api__WEBPACK_IMPORTED_MODULE_7__["default"]({
            url: _app_config__WEBPACK_IMPORTED_MODULE_4__["App"].url,
            consumerKey: _app_config__WEBPACK_IMPORTED_MODULE_4__["App"].consumerKey,
            consumerSecret: _app_config__WEBPACK_IMPORTED_MODULE_4__["App"].consumerSecret,
            wpAPI: true,
            version: "wc/v3",
            //verifySsl: true,
            queryStringAuth: true,
        });
        return WCv3.post("products/reviews", data).then((x) => {
            return x.data;
        });
    }
    getTermConditon() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let data1 = yield this.mHTTP.get(this.RestURL + "terms", {}, {});
            return new Promise((resolve) => {
                resolve(JSON.parse(data1 === null || data1 === void 0 ? void 0 : data1.data));
            });
            //return this.http.get(this.RestURL + "terms");
        });
    }
    getHomePageLayout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let data1 = yield this.mHTTP.get(this.RestURL + "layout", {}, {});
            console.log(data1);
            return new Promise((resolve) => {
                resolve(JSON.parse(data1 === null || data1 === void 0 ? void 0 : data1.data));
            });
            // return this.http.get(this.RestURL + "layout");
        });
    }
    getProductByUrl(url) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(this.RestURL + "get-product-by-url?url=" + url);
            return this.WooCommerce.get("get-product-by-url?url=" + url).then((x) => {
                return x.data;
            });
            //return this.http.get(this.RestURL + "get-product-by-url?url=" + url);
        });
    }
    getOrderTrackData(order_id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(this.RestURL + "order/track/delivery?order_id=" + order_id);
            return this.WooCommerce.get("order/track/delivery?order_id=" + order_id).then((x) => {
                return x.data;
            });
        });
    }
    getCustomOrderTrackData(order_id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(this.RestURL + "order/manual-tracking?order_id=" + order_id);
            return this.WooCommerce.get("order/manual-tracking?order_id=" + order_id).then((x) => {
                return x.data;
            });
        });
    }
    getOrderItemsStatus(order_id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(this.RestURL + "order-items/status?order_id=" + order_id);
            return this.WooCommerce.get("order-items/status?order_id=" + order_id).then((x) => {
                return x.data;
            });
        });
    }
    getImages(product_id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(this.RestURL + "product/image?id=" + product_id);
            return this.WooCommerce.get("product/image?id=" + product_id).then((x) => {
                return x.data;
            });
        });
    }
};
WooCommerceProvider.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__["HTTP"] },
    { type: _settings_settings__WEBPACK_IMPORTED_MODULE_1__["SettingsProvider"] }
];
WooCommerceProvider = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: "root",
    })
], WooCommerceProvider);



/***/ }),

/***/ "Pr2J":
/*!*****************************************************************!*\
  !*** ./src/app/services/analytics-service/analytics-service.ts ***!
  \*****************************************************************/
/*! exports provided: AnalyticsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsService", function() { return AnalyticsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_google_analytics_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/google-analytics/ngx */ "hVmN");



let AnalyticsService = class AnalyticsService {
    constructor(ga) {
        this.ga = ga;
        this.isInitialized = false;
        console.log('Analytics Service Loaded');
    }
    init(id, interval) {
        return this.ga.startTrackerWithId(id).then(() => {
            console.log('Google analytics is ready now');
            this.isInitialized = true;
        }).catch(e => console.log('Error starting GoogleAnalytics', e));
    }
    trackView(title, campaignUrl, newSession) {
        if (this.isInitialized)
            this.ga.trackView(title);
    }
    setAppVersion(appVersion) {
        if (this.isInitialized)
            this.ga.setAppVersion(appVersion);
    }
};
AnalyticsService.ctorParameters = () => [
    { type: _ionic_native_google_analytics_ngx__WEBPACK_IMPORTED_MODULE_2__["GoogleAnalytics"] }
];
AnalyticsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], AnalyticsService);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/providers */ "fC+V");
/* harmony import */ var _services_Events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/Events */ "3C+A");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-image-loader-v5 */ "JBbo");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.config */ "aR35");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/email-composer/ngx */ "aaed");
/* harmony import */ var _ionic_native_app_rate_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/app-rate/ngx */ "k0k6");
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ "uJRU");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");
/* harmony import */ var _ShareComponent_login_login__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ShareComponent/login/login */ "MeOy");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");

















let AppComponent = class AppComponent {
    constructor(platform, statusBar, zone, settings, translate, rest, toast, modalCtrl, emailComposer, appRate, alertCtrl, appVersion, WC, user, menuCtrl, iab, anlyticsService, loader, imageLoaderConfig, events, navCon, storage) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.zone = zone;
        this.settings = settings;
        this.translate = translate;
        this.toast = toast;
        this.modalCtrl = modalCtrl;
        this.emailComposer = emailComposer;
        this.appRate = appRate;
        this.alertCtrl = alertCtrl;
        this.appVersion = appVersion;
        this.WC = WC;
        this.user = user;
        this.menuCtrl = menuCtrl;
        this.iab = iab;
        this.anlyticsService = anlyticsService;
        this.loader = loader;
        this.imageLoaderConfig = imageLoaderConfig;
        this.events = events;
        this.navCon = navCon;
        this.storage = storage;
        this.setting = {};
        this.settings.load().then(res => {
            this.setting = res;
            this.initTranslate();
        });
        events.subscribe("cartchanged", () => {
            rest.getCartCount().then(res => {
                console.log("Test cartchanged");
                console.log(res);
                settings.setSettings(JSON.parse(res.data), "cart_count");
            });
        });
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            //image loader configs
            imageLoaderConfig.enableSpinner(false);
            this.imageLoaderConfig.setFallbackUrl("assets/imgs/placeholder-square.png");
            this.imageLoaderConfig.setMaximumCacheAge(7 * 24 * 60 * 60 * 1000); //7days
            this.imageLoaderConfig.enableFallbackAsPlaceholder(true);
            this.imageLoaderConfig.setFileNameCachedWithExtension(true);
            this.imageLoaderConfig.setImageReturnType("base64");
            this.initApp();
            statusBar.styleLightContent();
            if (platform.is("android")) {
                statusBar.overlaysWebView(false);
                platform.backButton.subscribeWithPriority(10, (processNextHandler) => {
                    /* let activePortal =
                       ionicApp._loadingPortal.getActive() ||
                       ionicApp._modalPortal.getActive() ||
                       ionicApp._toastPortal.getActive() ||
                       ionicApp._overlayPortal.getActive();
                     if (activePortal) {
                       activePortal.dismiss();
                     }*/
                    if (this.routerOutlet && this.routerOutlet.canGoBack()) {
                        this.routerOutlet.pop();
                    }
                    else if (menuCtrl.isOpen()) {
                        menuCtrl.close();
                    }
                    else {
                        if (this.routerOutlet.canGoBack()) {
                            this.routerOutlet.pop();
                        }
                        else if (this.lastBack + 300 < Date.now()) {
                            this.exit();
                        }
                    }
                    this.lastBack = Date.now();
                });
            }
            else {
                statusBar.overlaysWebView(true);
            }
            //this.rootPage="MenuPage";
        });
    }
    initTranslate() {
        if (this.setting && this.setting.language !== undefined) {
            this.translate.setDefaultLang(this.setting.language);
            this.translate.use(this.setting.language);
        }
        else {
            this.translate.setDefaultLang(_app_config__WEBPACK_IMPORTED_MODULE_9__["App"].defaultLang);
            this.translate.use(_app_config__WEBPACK_IMPORTED_MODULE_9__["App"].defaultLang);
        }
    }
    initApp() {
        this.WC.saveAppSettings().then((res) => {
            console.log(res);
            this.settings.setSettings(res, "appSettings").then(() => {
                const colors = new Map([
                    ["primary_color", res.primary_color],
                    ["primary_color_dark", res.primary_color_dark],
                    ["accent_color", res.accent_color],
                    ["toolbar_text_color", res.primary_color_text],
                    ["toolbar-badge-color", res.toolbarbadgecolor || res.accent_color],
                    ["primary_text_color", "#212121"],
                    ["secondary_text_color", "#757575"]
                ]);
                Array.from(colors.entries()).forEach(([name, value]) => {
                    document.body.style.setProperty(`--${name}`, value);
                });
                this.zone.run(() => {
                    // this.rootPage = HomePage;
                    this.navCon.navigateRoot("home");
                });
                if (this.platform.is("cordova")) {
                    this.events.publish("cartchanged");
                    this.statusBar.backgroundColorByHexString(res.primary_color_dark);
                    this.appVersion.getVersionNumber().then(v => {
                        this.version = v;
                        if (res.google_analytics_tracker_id &&
                            res.google_analytics_tracker_id !== "") {
                            this.anlyticsService
                                .init(res.google_analytics_tracker_id)
                                .then(() => {
                                //console.log('Google analytics is ready now');
                                this.events.subscribe("view:enter", (view) => {
                                    this.anlyticsService.trackView(view);
                                    console.log("view:enter" + view);
                                });
                                this.events.publish("view:enter", "Home Page");
                                this.anlyticsService.setAppVersion("Android - " + v);
                            })
                                .catch(e => console.log("Error starting GoogleAnalytics", e));
                        }
                    });
                }
            });
        }, err => {
            console.log("saveAppSettings");
            console.log(err);
            this.toast.showError();
        });
    }
    goTo(page, params) {
        console.log(page);
        this.menuCtrl.close();
        let navigationExtras = { queryParams: params };
        this.navCon.navigateForward([page], navigationExtras);
    }
    popToRoot() {
        this.menuCtrl.close();
        console.log("popToRoot");
        this.navCon.navigateRoot("home");
    }
    login() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.menuCtrl.close();
            //this.modalCtrl.create("LoginPage", {}).present();
            const modal = yield this.modalCtrl.create({
                component: _ShareComponent_login_login__WEBPACK_IMPORTED_MODULE_15__["LoginPage"]
            });
            return yield modal.present();
        });
    }
    email() {
        this.menuCtrl.close();
        this.platform.ready().then(() => {
            if (this.platform.is("cordova")) {
                let email = {
                    to: this.settings.appSettings.contact_email,
                    subject: "App Support",
                    body: "Hi, please help me.",
                    isHtml: true
                };
                this.emailComposer.open(email);
            }
            else {
                this.translate
                    .get(["ONLY_DEVICE", "ONLY_DEVICE_DESC", "OK"])
                    .subscribe(x => {
                    this.presentAlert(x.ONLY_DEVICE, x.ONLY_DEVICE_DESC, "", [{ text: x.OK }]);
                    /*
                    this.alertCtrl
                      .create({
                        title: x.ONLY_DEVICE,
                        message: x.ONLY_DEVICE_DESC,
                        buttons: [
                          {
                            text: x.OK
                          }
                        ]
                      })
                      .present();*/
                });
            }
        });
    }
    call() {
        this.menuCtrl.close();
        window.location.href = "tel:" + this.settings.appSettings.contact_phone;
    }
    rate() {
        var obj = this;
        obj.menuCtrl.close();
        if (!obj.platform.is("cordova")) {
            obj.translate
                .get(["OK", "ONLY_DEVICE", "ONLY_DEVICE_DESC"])
                .subscribe(x => {
                obj.presentAlert(x.ONLY_DEVICE, x.ONLY_DEVICE_DESC, "", [{ text: x.OK }]);
                return false;
            });
        }
        else {
            obj.appRate.preferences = {
                usesUntilPrompt: 5,
                useLanguage: 'en',
                displayAppName: '',
                promptAgainForEachNewVersion: false,
                inAppReview: true,
                storeAppURL: {
                    ios: '',
                    android: '',
                },
                openUrl: function (url) {
                    window.open(url, '_blank', 'location=yes');
                },
            };
            obj.appVersion.getAppName().then(res => {
                obj.appRate.preferences.displayAppName = res;
                console.log(res);
                obj.appVersion.getPackageName().then(res => {
                    console.log(res);
                    obj.appRate.preferences.storeAppURL = {
                        ios: _app_config__WEBPACK_IMPORTED_MODULE_9__["App"].IosAppId,
                        android: "market://details?id=" + res // FOR ANDROID, use your own android package name
                    };
                    obj.appRate.promptForRating(true);
                });
            });
        }
    }
    exit() {
        this.translate
            .get(["CONFIRM", "EXIT_MSG", "EXIT", "CANCEL"])
            .subscribe(x => {
            /* const alert = await this.alertCtrl
               .create({
                 header: x.CONFIRM,
                 message: x.EXIT_MSG,
                 buttons: [
                   {
                     text: x.EXIT + "?",
                     handler: () => {
                       this.platform.exitApp();
                     }
                   },
                   {
                     text: "Cancel",
                     role: x.CANCEL
                   }
                 ]
               });
               alert.present();
     */
            this.presentAlert(x.CONFIRM, x.EXIT_MSG, "", [
                {
                    text: x.EXIT + "?",
                    handler: () => {
                        navigator['app'].exitApp();
                    }
                },
                {
                    text: "Cancel",
                    role: x.CANCEL
                }
            ]);
        });
    }
    openChat() {
        this.menuCtrl.close();
        if (this.settings.all.appSettings &&
            this.settings.all.appSettings.direct_tawk_id &&
            this.settings.all.appSettings.direct_tawk_id !== "") {
            this.loader.show();
            const browser = this.iab.create(this.settings.all.appSettings.direct_tawk_id, "_self", { location: "no", closebuttoncaption: "Done", hidden: "yes" });
            browser.on("loadstop").subscribe(event => {
                browser.show();
                this.loader.dismiss();
            });
        }
    }
    contact() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.menuCtrl.close();
            if (this.settings.appSettings.contact_email &&
                this.settings.appSettings.contact_phone &&
                this.settings.appSettings.contact_email !== "" &&
                this.settings.appSettings.contact_phone !== "") {
                this.presentAlert("Contact us", '', "custom_alert_call", [
                    {
                        text: "Email",
                        handler: () => {
                            this.email();
                        }
                    },
                    {
                        text: "Call",
                        handler: () => {
                            this.call();
                        }
                    }
                ]);
                /*
                const alert = await this.alertCtrl
                  .create({
                    header: "Contact us",
                    cssClass: "custom_alert_call",
                    buttons: [
                      {
                        text: "Email",
                        handler: () => {
                          this.email();
                        }
                      },
                      {
                        text: "Call",
                        handler: () => {
                          this.call();
                        }
                      }
                    ]
                  });
                  alert.present();*/
            }
            else if (this.settings.appSettings.contact_email !== "") {
                this.email();
            }
            else {
                this.call();
            }
        });
    }
    presentAlert(header, message, cssClass, buttons) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: header,
                cssClass: cssClass,
                message: message,
                buttons: buttons
            });
            yield alert.present();
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_10__["StatusBar"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_5__["SettingsProvider"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_5__["RestProvider"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_5__["ToastProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_11__["EmailComposer"] },
    { type: _ionic_native_app_rate_ngx__WEBPACK_IMPORTED_MODULE_12__["AppRate"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_13__["AppVersion"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_5__["WooCommerceProvider"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_5__["UserProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_14__["InAppBrowser"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_5__["AnalyticsService"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_5__["LoadingProvider"] },
    { type: ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_8__["ImageLoaderConfigService"] },
    { type: _services_Events__WEBPACK_IMPORTED_MODULE_6__["Events"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_16__["Storage"] }
];
AppComponent.propDecorators = {
    routerOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRouterOutlet"],] }]
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-menu contentId=\"main\"  class=\"menu-css\">\n    <ion-header>\n      <ion-toolbar>\n        <ion-item lines=\"none\" class=\"primary-background menu-header\" *ngIf=\"user.all\">\n          <div class=\"menu-header-des\">\n            <h4 text-capitalize>{{user.first_name+' '+user.last_name}}</h4>\n            <p style=\"margin: 0;\">{{user.email}}</p>\n          </div>\n          <ion-avatar item-end>\n            <svg\n              version=\"1.1\"\n              id=\"Capa_1\"\n              xmlns=\"http://www.w3.org/2000/svg\"\n              xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n              x=\"0px\"\n              y=\"0px\"\n              viewBox=\"0 0 55 55\"\n              style=\"enable-background: new 0 0 55 55;\"\n              xml:space=\"preserve\"\n            >\n              <path\n                style=\"fill: var(--toolbar_text_color);\"\n                d=\"M55,27.5C55,12.337,42.663,0,27.5,0S0,12.337,0,27.5c0,8.009,3.444,15.228,8.926,20.258l-0.026,0.023l0.892,0.752\n               c0.058,0.049,0.121,0.089,0.179,0.137c0.474,0.393,0.965,0.766,1.465,1.127c0.162,0.117,0.324,0.234,0.489,0.348\n               c0.534,0.368,1.082,0.717,1.642,1.048c0.122,0.072,0.245,0.142,0.368,0.212c0.613,0.349,1.239,0.678,1.88,0.98\n               c0.047,0.022,0.095,0.042,0.142,0.064c2.089,0.971,4.319,1.684,6.651,2.105c0.061,0.011,0.122,0.022,0.184,0.033\n               c0.724,0.125,1.456,0.225,2.197,0.292c0.09,0.008,0.18,0.013,0.271,0.021C25.998,54.961,26.744,55,27.5,55\n               c0.749,0,1.488-0.039,2.222-0.098c0.093-0.008,0.186-0.013,0.279-0.021c0.735-0.067,1.461-0.164,2.178-0.287\n               c0.062-0.011,0.125-0.022,0.187-0.034c2.297-0.412,4.495-1.109,6.557-2.055c0.076-0.035,0.153-0.068,0.229-0.104\n               c0.617-0.29,1.22-0.603,1.811-0.936c0.147-0.083,0.293-0.167,0.439-0.253c0.538-0.317,1.067-0.648,1.581-1\n               c0.185-0.126,0.366-0.259,0.549-0.391c0.439-0.316,0.87-0.642,1.289-0.983c0.093-0.075,0.193-0.14,0.284-0.217l0.915-0.764\n               l-0.027-0.023C51.523,42.802,55,35.55,55,27.5z M2,27.5C2,13.439,13.439,2,27.5,2S53,13.439,53,27.5\n               c0,7.577-3.325,14.389-8.589,19.063c-0.294-0.203-0.59-0.385-0.893-0.537l-8.467-4.233c-0.76-0.38-1.232-1.144-1.232-1.993v-2.957\n               c0.196-0.242,0.403-0.516,0.617-0.817c1.096-1.548,1.975-3.27,2.616-5.123c1.267-0.602,2.085-1.864,2.085-3.289v-3.545\n               c0-0.867-0.318-1.708-0.887-2.369v-4.667c0.052-0.519,0.236-3.448-1.883-5.864C34.524,9.065,31.541,8,27.5,8\n               s-7.024,1.065-8.867,3.168c-2.119,2.416-1.935,5.345-1.883,5.864v4.667c-0.568,0.661-0.887,1.502-0.887,2.369v3.545\n               c0,1.101,0.494,2.128,1.34,2.821c0.81,3.173,2.477,5.575,3.093,6.389v2.894c0,0.816-0.445,1.566-1.162,1.958l-7.907,4.313\n               c-0.252,0.137-0.502,0.297-0.752,0.476C5.276,41.792,2,35.022,2,27.5z M42.459,48.132c-0.35,0.254-0.706,0.5-1.067,0.735\n               c-0.166,0.108-0.331,0.216-0.5,0.321c-0.472,0.292-0.952,0.57-1.442,0.83c-0.108,0.057-0.217,0.111-0.326,0.167\n               c-1.126,0.577-2.291,1.073-3.488,1.476c-0.042,0.014-0.084,0.029-0.127,0.043c-0.627,0.208-1.262,0.393-1.904,0.552\n               c-0.002,0-0.004,0.001-0.006,0.001c-0.648,0.16-1.304,0.293-1.964,0.402c-0.018,0.003-0.036,0.007-0.054,0.01\n               c-0.621,0.101-1.247,0.174-1.875,0.229c-0.111,0.01-0.222,0.017-0.334,0.025C28.751,52.97,28.127,53,27.5,53\n               c-0.634,0-1.266-0.031-1.895-0.078c-0.109-0.008-0.218-0.015-0.326-0.025c-0.634-0.056-1.265-0.131-1.89-0.233\n               c-0.028-0.005-0.056-0.01-0.084-0.015c-1.322-0.221-2.623-0.546-3.89-0.971c-0.039-0.013-0.079-0.027-0.118-0.04\n               c-0.629-0.214-1.251-0.451-1.862-0.713c-0.004-0.002-0.009-0.004-0.013-0.006c-0.578-0.249-1.145-0.525-1.705-0.816\n               c-0.073-0.038-0.147-0.074-0.219-0.113c-0.511-0.273-1.011-0.568-1.504-0.876c-0.146-0.092-0.291-0.185-0.435-0.279\n               c-0.454-0.297-0.902-0.606-1.338-0.933c-0.045-0.034-0.088-0.07-0.133-0.104c0.032-0.018,0.064-0.036,0.096-0.054l7.907-4.313\n               c1.36-0.742,2.205-2.165,2.205-3.714l-0.001-3.602l-0.23-0.278c-0.022-0.025-2.184-2.655-3.001-6.216l-0.091-0.396l-0.341-0.221\n               c-0.481-0.311-0.769-0.831-0.769-1.392v-3.545c0-0.465,0.197-0.898,0.557-1.223l0.33-0.298v-5.57l-0.009-0.131\n               c-0.003-0.024-0.298-2.429,1.396-4.36C21.583,10.837,24.061,10,27.5,10c3.426,0,5.896,0.83,7.346,2.466\n               c1.692,1.911,1.415,4.361,1.413,4.381l-0.009,5.701l0.33,0.298c0.359,0.324,0.557,0.758,0.557,1.223v3.545\n               c0,0.713-0.485,1.36-1.181,1.575l-0.497,0.153l-0.16,0.495c-0.59,1.833-1.43,3.526-2.496,5.032c-0.262,0.37-0.517,0.698-0.736,0.949\n               l-0.248,0.283V39.8c0,1.612,0.896,3.062,2.338,3.782l8.467,4.233c0.054,0.027,0.107,0.055,0.16,0.083\n               C42.677,47.979,42.567,48.054,42.459,48.132z\"\n              />\n            </svg>\n          </ion-avatar>\n        </ion-item>\n        <ion-item lines=\"none\" (click)=\"login()\" *ngIf=\"!user.all\" class=\"primary-background menu-header\">\n          <div class=\"menu-header-des\">\n            <h4>{{'LOGIN/REGISTER' | translate}}</h4>\n            <p style=\"margin: 0;\">{{'LOGIN_DESC2' | translate}}</p>\n          </div>\n          <ion-avatar item-end>\n            <svg\n              version=\"1.1\"\n              id=\"Capa_1\"\n              xmlns=\"http://www.w3.org/2000/svg\"\n              xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n              x=\"0px\"\n              y=\"0px\"\n              viewBox=\"0 0 55 55\"\n              style=\"enable-background: new 0 0 55 55;\"\n              xml:space=\"preserve\"\n            >\n              <path\n                style=\"fill: var(--toolbar_text_color);\"\n                d=\"M55,27.5C55,12.337,42.663,0,27.5,0S0,12.337,0,27.5c0,8.009,3.444,15.228,8.926,20.258l-0.026,0.023l0.892,0.752\n               c0.058,0.049,0.121,0.089,0.179,0.137c0.474,0.393,0.965,0.766,1.465,1.127c0.162,0.117,0.324,0.234,0.489,0.348\n               c0.534,0.368,1.082,0.717,1.642,1.048c0.122,0.072,0.245,0.142,0.368,0.212c0.613,0.349,1.239,0.678,1.88,0.98\n               c0.047,0.022,0.095,0.042,0.142,0.064c2.089,0.971,4.319,1.684,6.651,2.105c0.061,0.011,0.122,0.022,0.184,0.033\n               c0.724,0.125,1.456,0.225,2.197,0.292c0.09,0.008,0.18,0.013,0.271,0.021C25.998,54.961,26.744,55,27.5,55\n               c0.749,0,1.488-0.039,2.222-0.098c0.093-0.008,0.186-0.013,0.279-0.021c0.735-0.067,1.461-0.164,2.178-0.287\n               c0.062-0.011,0.125-0.022,0.187-0.034c2.297-0.412,4.495-1.109,6.557-2.055c0.076-0.035,0.153-0.068,0.229-0.104\n               c0.617-0.29,1.22-0.603,1.811-0.936c0.147-0.083,0.293-0.167,0.439-0.253c0.538-0.317,1.067-0.648,1.581-1\n               c0.185-0.126,0.366-0.259,0.549-0.391c0.439-0.316,0.87-0.642,1.289-0.983c0.093-0.075,0.193-0.14,0.284-0.217l0.915-0.764\n               l-0.027-0.023C51.523,42.802,55,35.55,55,27.5z M2,27.5C2,13.439,13.439,2,27.5,2S53,13.439,53,27.5\n               c0,7.577-3.325,14.389-8.589,19.063c-0.294-0.203-0.59-0.385-0.893-0.537l-8.467-4.233c-0.76-0.38-1.232-1.144-1.232-1.993v-2.957\n               c0.196-0.242,0.403-0.516,0.617-0.817c1.096-1.548,1.975-3.27,2.616-5.123c1.267-0.602,2.085-1.864,2.085-3.289v-3.545\n               c0-0.867-0.318-1.708-0.887-2.369v-4.667c0.052-0.519,0.236-3.448-1.883-5.864C34.524,9.065,31.541,8,27.5,8\n               s-7.024,1.065-8.867,3.168c-2.119,2.416-1.935,5.345-1.883,5.864v4.667c-0.568,0.661-0.887,1.502-0.887,2.369v3.545\n               c0,1.101,0.494,2.128,1.34,2.821c0.81,3.173,2.477,5.575,3.093,6.389v2.894c0,0.816-0.445,1.566-1.162,1.958l-7.907,4.313\n               c-0.252,0.137-0.502,0.297-0.752,0.476C5.276,41.792,2,35.022,2,27.5z M42.459,48.132c-0.35,0.254-0.706,0.5-1.067,0.735\n               c-0.166,0.108-0.331,0.216-0.5,0.321c-0.472,0.292-0.952,0.57-1.442,0.83c-0.108,0.057-0.217,0.111-0.326,0.167\n               c-1.126,0.577-2.291,1.073-3.488,1.476c-0.042,0.014-0.084,0.029-0.127,0.043c-0.627,0.208-1.262,0.393-1.904,0.552\n               c-0.002,0-0.004,0.001-0.006,0.001c-0.648,0.16-1.304,0.293-1.964,0.402c-0.018,0.003-0.036,0.007-0.054,0.01\n               c-0.621,0.101-1.247,0.174-1.875,0.229c-0.111,0.01-0.222,0.017-0.334,0.025C28.751,52.97,28.127,53,27.5,53\n               c-0.634,0-1.266-0.031-1.895-0.078c-0.109-0.008-0.218-0.015-0.326-0.025c-0.634-0.056-1.265-0.131-1.89-0.233\n               c-0.028-0.005-0.056-0.01-0.084-0.015c-1.322-0.221-2.623-0.546-3.89-0.971c-0.039-0.013-0.079-0.027-0.118-0.04\n               c-0.629-0.214-1.251-0.451-1.862-0.713c-0.004-0.002-0.009-0.004-0.013-0.006c-0.578-0.249-1.145-0.525-1.705-0.816\n               c-0.073-0.038-0.147-0.074-0.219-0.113c-0.511-0.273-1.011-0.568-1.504-0.876c-0.146-0.092-0.291-0.185-0.435-0.279\n               c-0.454-0.297-0.902-0.606-1.338-0.933c-0.045-0.034-0.088-0.07-0.133-0.104c0.032-0.018,0.064-0.036,0.096-0.054l7.907-4.313\n               c1.36-0.742,2.205-2.165,2.205-3.714l-0.001-3.602l-0.23-0.278c-0.022-0.025-2.184-2.655-3.001-6.216l-0.091-0.396l-0.341-0.221\n               c-0.481-0.311-0.769-0.831-0.769-1.392v-3.545c0-0.465,0.197-0.898,0.557-1.223l0.33-0.298v-5.57l-0.009-0.131\n               c-0.003-0.024-0.298-2.429,1.396-4.36C21.583,10.837,24.061,10,27.5,10c3.426,0,5.896,0.83,7.346,2.466\n               c1.692,1.911,1.415,4.361,1.413,4.381l-0.009,5.701l0.33,0.298c0.359,0.324,0.557,0.758,0.557,1.223v3.545\n               c0,0.713-0.485,1.36-1.181,1.575l-0.497,0.153l-0.16,0.495c-0.59,1.833-1.43,3.526-2.496,5.032c-0.262,0.37-0.517,0.698-0.736,0.949\n               l-0.248,0.283V39.8c0,1.612,0.896,3.062,2.338,3.782l8.467,4.233c0.054,0.027,0.107,0.055,0.16,0.083\n               C42.677,47.979,42.567,48.054,42.459,48.132z\"\n              />\n            </svg>\n          </ion-avatar>\n        </ion-item>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content class=\"menu\">\n      <ion-list mode=\"md\" lines=\"none\">\n        <ion-item class=\"btn\" (click)=\"popToRoot()\">\n          <ion-icon item-start name=\"home-outline\"></ion-icon>\n          {{ 'HOME' | translate }}\n        </ion-item>\n  \n        <ion-item class=\"btn\" (click)=\"goTo('product','')\">\n          <ion-icon item-start name=\"basket-outline\"></ion-icon>\n          {{'SHOP' | translate}}\n        </ion-item>\n  \n        <ion-item  class=\"btn\" (click)=\"goTo('categories','')\">\n          <ion-icon item-start name=\"pricetags-outline\"></ion-icon>\n          {{'SHOP_BY_CATEGORY' | translate}}\n        </ion-item>\n      </ion-list>\n  \n      <div class=\"devider\" *ngIf=\"user.all\">\n        <hr />\n      </div>\n  \n      <ion-list mode=\"md\" lines=\"none\" *ngIf=\"user.all\">\n        <ion-item class=\"btn\" (click)=\"goTo('notification','')\">\n          <ion-icon item-start name=\"notifications-outline\"></ion-icon>\n          {{'NOTIFICATIONS' | translate}}\n        </ion-item>\n        <ion-item (click)=\"goTo('orders','')\" style=\"padding-left: 18px;\">\n          <img src=\"assets/imgs/order.png\" style=\" width: 42px;  height: 24px;  padding-right: 20px;   margin-right: 12px;\"/>\n          {{ 'ORDER' | translate }}\n        </ion-item>\n        <ion-item  class=\"btn\"  (click)=\"goTo('downloads','')\">\n          <ion-icon item-start name=\"download-outline\"></ion-icon>\n          {{'DOWNLOAD' | translate }}\n        </ion-item>\n        <ion-item class=\"btn\" (click)=\"goTo('walletPage','')\"\n          *ngIf=\"this.settings.all.appSettings && this.settings.all.appSettings.wallet_active\"\n        >\n          <img src=\"assets/imgs/wallet.png\"\n            style=\"\n              width: 40px;\n              height: 28px;\n              padding-right: 18px;\n              margin-right: 16px;\n            \"\n            item-start\n          />\n          {{'WALLET' | translate}}\n        </ion-item>\n        <ion-item class=\"btn\" (click)=\"goTo('accountSetting','')\">\n          <img src=\"assets/imgs/Account_Setting.png\"\n            style=\"width: 42px;height: 24px;padding-right: 20px;margin-right: 12px;\"/>\n          {{'ACCOUNT' | translate}} {{'SETTING' | translate}}\n        </ion-item>\n        <ion-item class=\"btn\" (click)=\"goTo('address','')\">\n          <img src=\"assets/imgs/Manage_your_address.png\"  style=\"\n              width: 42px;\n              height: 24px;\n              padding-right: 20px;\n              margin-right: 12px; \"/>\n          {{'MANAGE_ADDRESS' | translate}}\n        </ion-item>\n        <ion-item  class=\"btn\"  (click)=\"user.logout()\">\n          <ion-icon item-start name=\"exit-outline\"></ion-icon>\n          {{'SIGN_OUT' | translate}}\n        </ion-item>\n      </ion-list>\n  \n      <div class=\"devider\">\n        <hr />\n      </div>\n  \n      <ion-list mode=\"md\" lines=\"none\" *ngIf=\"this.settings.appSettings\">\n        <ion-item class=\"btn\" (click)=\"openChat()\"\n          *ngIf=\"this.settings.appSettings.direct_tawk_id && this.settings.all.appSettings.direct_tawk_id !== ''\">\n          <ion-icon item-start name=\"chatbubbles-outline\"></ion-icon>\n          {{'CHAT_SUPPORT' | translate}}\n        </ion-item>\n\n        <ion-item class=\"btn\" (click)=\"contact()\"\n          *ngIf=\"this.settings.appSettings.contact_email !== '' || this.settings.appSettings.contact_phone !== ''\">\n          <ion-icon item-start name=\"call-outline\"></ion-icon>\n          {{'CONTACT' | translate}}\n        </ion-item>\n  \n        <ion-item class=\"btn\" (click)=\"goTo('faqPage','')\" *ngIf=\"this.settings.appSettings.enable_faq\">\n          <ion-icon item-start name=\"help-circle-outline\"></ion-icon>\n          {{'FAQ' | translate}}\n        </ion-item>\n  \n        <ion-item style=\"padding-left: 8px;\" (click)=\"goTo('tosPage','')\"  *ngIf=\"this.settings.appSettings.enable_term_condition\"\n        >\n          <img  src=\"assets/imgs/About_Us.png\"  style=\"width: 55px; height: 40px; padding-right: 15px;\"/>\n          {{'TOS' | translate}}\n        </ion-item>\n\n        <ion-item (click)=\"rate()\" style=\"padding-left: 14px;\">\n          <img\n            src=\"assets/imgs/Feedback.png\"\n            style=\"width: 30px; height: 30px; margin-right: 26px;\"\n            item-start\n          />\n          {{'GIVE_FEEDBACK' | translate}}\n        </ion-item>\n      </ion-list>\n    </ion-content>\n    <ion-footer padding text-end>\n      {{'VERSION' | translate}} : {{version}}\n    </ion-footer>\n  </ion-menu>\n  <ion-router-outlet id=\"main\"></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ "X4wO":
/*!***************************************!*\
  !*** ./src/app/services/rest/rest.ts ***!
  \***************************************/
/*! exports provided: RestProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestProvider", function() { return RestProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/http/ngx */ "XSEc");
/* harmony import */ var _user_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../user/user */ "0Rne");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.config */ "aR35");





let RestProvider = class RestProvider {
    constructor(user, ahttp) {
        this.user = user;
        this.ahttp = ahttp;
        this.isApp = true;
        this.url = _app_config__WEBPACK_IMPORTED_MODULE_4__["App"].url + "/wp-json/wc/v2";
        this.ahttp.setHeader("*", "Content-Type", "application/json");
    }
    addToCart(data) {
        this.ahttp.setDataSerializer("json");
        return this.ahttp.post(this.url + "/cart/add", data, {});
    }
    getCart(pakage, shipping_method) {
        let country = pakage.country;
        let state = pakage.state;
        let postcode = pakage.postcode;
        let c = country ? "?country=" + country : "?";
        let s = state ? "&state=" + state : "";
        let p = postcode ? "&postcode=" + postcode : "";
        let sm = shipping_method ? "&shipping_method=" + shipping_method : "";
        let uid = this.user.id ? "&user_id=" + this.user.id : "";
        return this.ahttp.get(this.url + "/cart" + c + s + p + sm + uid, {}, {});
    }
    removeCartItem(pakage, cart_item_key) {
        let country = pakage.country;
        let state = pakage.state;
        let postcode = pakage.postcode;
        let c = country ? "?country=" + country : "?";
        let s = state ? "&state=" + state : "";
        let p = postcode ? "&postcode=" + postcode : "";
        let cik = cart_item_key ? "&cart_item_key=" + cart_item_key : "";
        return this.ahttp.get(this.url + "/cart/remove" + c + s + p + cik, {}, {});
    }
    applyCoupon(pakage, coupon_code) {
        let country = pakage.country;
        let state = pakage.state;
        let postcode = pakage.postcode;
        let c = country ? "?country=" + country : "?";
        let s = state ? "&state=" + state : "";
        let p = postcode ? "&postcode=" + postcode : "";
        let cc = coupon_code ? "&coupon_code=" + coupon_code : "";
        let uid = this.user.id ? "&user_id=" + this.user.id : "";
        return this.ahttp.get(this.url + "/cart/coupon" + c + s + p + cc + uid, {}, {});
    }
    removeCoupon(pakage, coupon_code) {
        let country = pakage.country;
        let state = pakage.state;
        let postcode = pakage.postcode;
        let c = country ? "?country=" + country : "?";
        let s = state ? "&state=" + state : "";
        let p = postcode ? "&postcode=" + postcode : "";
        let cc = coupon_code ? "&coupon_code=" + coupon_code : "";
        return this.ahttp.get(this.url + "/cart/remove-coupon" + c + s + p + cc, {}, {});
    }
    updateCart(pakage, cart_item_key, quantity) {
        let country = pakage.country;
        let state = pakage.state;
        let postcode = pakage.postcode;
        let c = country ? "?country=" + country : "?";
        let s = state ? "&state=" + state : "";
        let p = postcode ? "&postcode=" + postcode : "";
        let cik = cart_item_key ? "&cart_item_key=" + cart_item_key : "";
        let q = quantity ? "&quantity=" + quantity : "";
        return this.ahttp.get(this.url + "/cart/update" + c + s + p + cik + q, {}, {});
    }
    getCartCount() {
        return this.ahttp.get(this.url + "/cart/item-count", {}, {});
    }
    getReview(shipping_method, chosen_payment_method, pay_via_wallet) {
        if (this.user && this.user.shipping) {
            let c = "?country=" + this.user.shipping.country;
            let st = "&state=" + this.user.shipping.state;
            let p = "&postcode=" + this.user.shipping.postcode;
            let s = shipping_method ? "&shipping_method=" + shipping_method : "";
            let uid = this.user.id ? "&user_id=" + this.user.id : "";
            let cp = chosen_payment_method
                ? "&chosen_payment_method=" + chosen_payment_method
                : "";
            let pw = pay_via_wallet ? "&pay_via_wallet=" + pay_via_wallet : "";
            return this.ahttp.get(this.url + "/checkout/review-order" + c + st + p + s + cp + uid + pw, {}, {});
        }
        else {
            let s = shipping_method ? "?shipping_method=" + shipping_method : "?";
            let cp = chosen_payment_method
                ? "&chosen_payment_method=" + chosen_payment_method
                : "";
            return this.ahttp.get(this.url + "/checkout/review-order" + s + cp, {}, {});
        }
    }
    createOrder(payment_method, shipping_method, data = {}, pay_via_wallet) {
        this.ahttp.setDataSerializer("json");
        console.log(data);
        let u = this.user && this.user.id ? "?user_id=" + this.user.id : "?user_id=";
        let p = "&payment_method=" + payment_method;
        let c = "&shipping_method=" + shipping_method;
        let pw = pay_via_wallet ? "&pay_via_wallet=" + pay_via_wallet : "";
        console.log(u + p + c + pw);
        return this.ahttp.post(this.url + "/checkout/new-order" + u + p + c + pw, data, {});
    }
    makeAffiliate(orderId) {
        let clientConfirmData = new FormData();
        clientConfirmData.append("dev_inspact", "test");
        clientConfirmData.append("order_id", orderId);
        clientConfirmData.append("item_id", this.user.id);
        this.ahttp.setDataSerializer("multipart");
        return this.ahttp.post(this.url + "make/affiliate/referal", clientConfirmData, {});
    }
    getCartClear() {
        return this.ahttp
            .get(this.url + "/cart/clear", {}, {})
            .then((res) => {
            this.ahttp.clearCookies();
        })
            .catch((err) => {
            this.ahttp.clearCookies();
        });
    }
    getWalletDetails() {
        return this.ahttp.get(this.url + "/wallet?uid=" + this.user.id, {}, {});
    }
    addMoneyToCart(amount) {
        this.ahttp.setDataSerializer("json");
        let data = {
            woo_add_to_wallet: "Add",
            woo_wallet_balance_to_add: amount,
        };
        return this.ahttp.post(this.url + "/wallet/add", data, {});
    }
};
RestProvider.ctorParameters = () => [
    { type: _user_user__WEBPACK_IMPORTED_MODULE_2__["UserProvider"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_1__["HTTP"] }
];
RestProvider = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: "root",
    })
], RestProvider);



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _ShareComponent_shareComponent_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ShareComponent/shareComponent.module */ "m6dh");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ionic-image-loader-v5 */ "JBbo");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/storage */ "fwsW");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _services_rest_rest__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/rest/rest */ "X4wO");
/* harmony import */ var _services_user_user__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/user/user */ "0Rne");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "up+p");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "GGTb");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic-native/http/ngx */ "XSEc");
/* harmony import */ var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ionic-native/email-composer/ngx */ "aaed");
/* harmony import */ var _ionic_native_app_rate_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ionic-native/app-rate/ngx */ "k0k6");
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ "uJRU");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");
/* harmony import */ var _ionic_native_google_analytics_ngx__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ionic-native/google-analytics/ngx */ "hVmN");
var AppModule_1;


























function createTranslateLoader(http) {
    console.log("TranslateLoader");
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__["TranslateHttpLoader"](http, "./assets/i18n/", ".json");
}
let AppModule = AppModule_1 = class AppModule {
    constructor(injector, storage) {
        this.storage = storage;
        AppModule_1.injector = injector;
        this.ngOnInit();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.storage.create();
        });
    }
};
AppModule.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_13__["Storage"] }
];
AppModule = AppModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ShareComponent_shareComponent_module__WEBPACK_IMPORTED_MODULE_8__["ShareComModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_10__["IonicImageLoaderModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateLoader"],
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]],
                },
            }),
            _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_14__["IonicStorageModule"].forRoot({
                name: "wooapp",
                driverOrder: [_ionic_storage__WEBPACK_IMPORTED_MODULE_13__["Drivers"].IndexedDB, _ionic_storage__WEBPACK_IMPORTED_MODULE_13__["Drivers"].LocalStorage, _ionic_storage__WEBPACK_IMPORTED_MODULE_13__["Drivers"].SecureStorage],
            }),
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot({
                backButtonText: "",
                mode: "md"
            }), _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"]],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"] },
            _ionic_storage__WEBPACK_IMPORTED_MODULE_13__["Storage"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_15__["StatusBar"],
            _services_rest_rest__WEBPACK_IMPORTED_MODULE_16__["RestProvider"],
            _services_user_user__WEBPACK_IMPORTED_MODULE_17__["UserProvider"],
            _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_18__["GooglePlus"],
            _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_19__["Facebook"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_20__["HTTP"],
            _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_21__["EmailComposer"],
            _ionic_native_app_rate_ngx__WEBPACK_IMPORTED_MODULE_22__["AppRate"],
            _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_23__["AppVersion"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_24__["InAppBrowser"],
            _ionic_native_google_analytics_ngx__WEBPACK_IMPORTED_MODULE_25__["GoogleAnalytics"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "aR35":
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
const App = {
    store: "Fastcon Shopping",
    url: "https://www.fastconshopping.com",
    consumerKey: "ck_c933773ee5a241fd065610dd89f4c71c767d8e2f",
    consumerSecret: "cs_8bdab20f412f1af99c353e31eb355e867bd56ffc",
    IosAppId: "",
    languages: [
        //Don't Change multilanguage is in beta
        { id: "en", name: "English" },
        { id: "hi", name: "हिन्दी" },
        { id: "ar", name: "عربى" },
    ],
    defaultLang: "en",
};


/***/ }),

/***/ "bcVD":
/*!***************************************************!*\
  !*** ./src/app/ShareComponent/search/search.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".searchbar .searchbar-input {\n  background: #fff !important;\n  border-radius: 2px;\n}\n\nion-searchbar {\n  padding-bottom: 1px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlYXJjaC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtBQUROOztBQUlFO0VBQ0UsOEJBQUE7QUFESiIsImZpbGUiOiJzZWFyY2guc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAuc2VhcmNoYmFyIHtcbiAgICAuc2VhcmNoYmFyLWlucHV0IHtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICB9XG4gIH1cbiAgaW9uLXNlYXJjaGJhcntcbiAgICBwYWRkaW5nLWJvdHRvbTogMXB4IWltcG9ydGFudDtcbiAgfSJdfQ== */");

/***/ }),

/***/ "f6Pw":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ShareComponent/search/search.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" mode=\"ios\">\n      <ion-button fill=\"clear\" icon-only (click)=\"dismiss()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-searchbar autocomplete mode=\"ios\" #searchBar [(ngModel)]=\"search\" debounce=1000 (ionInput)=\"searchSuggestions()\"\n      (keyup.enter)=\"submit('product',{search_data: search})\" [placeholder]=\"'SEARCH' | translate\" showCancelButton=\"focus\">\n    </ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list *ngIf=\"results\">\n    <ng-container *ngIf=\"results['categories']\">\n      <ion-item *ngFor=\"let c of results['categories']\"   (click)=\"submit('product',c)\">\n        <h5 [innerHTML]=\"c.name\"></h5>\n      </ion-item>\n    </ng-container>\n    <ng-container *ngIf=\"results['products']\">\n      <ion-item *ngFor=\"let product of results['products']\"   (click)=\"submit('productdetail',product)\">\n        <img-loader useImg [src]=\"product.images[0].src\" item-start style=\"max-width:60px\"></img-loader>\n        <h5 [innerHTML]=\"product.name\"></h5>\n        <div class=\"price\">\n          <span [innerHTML]=\"product.price_html\"></span>\n        </div>\n      </ion-item>\n    </ng-container>\n\n    <ion-item *ngIf=\"search !== ''\"   (click)=\"submit('product',{search_data: search})\">\n      <div text-center>{{'SEARCH_MORE' | translate }}\"{{search}}\"</div>\n    </ion-item>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "fC+V":
/*!***************************************!*\
  !*** ./src/app/services/providers.ts ***!
  \***************************************/
/*! exports provided: UserProvider, WishlistProvider, WooCommerceProvider, SettingsProvider, LoadingProvider, ToastProvider, NotifProvider, RestProvider, AnalyticsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _analytics_service_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./analytics-service/analytics-service */ "Pr2J");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnalyticsService", function() { return _analytics_service_analytics_service__WEBPACK_IMPORTED_MODULE_0__["AnalyticsService"]; });

/* harmony import */ var _user_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user/user */ "0Rne");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserProvider", function() { return _user_user__WEBPACK_IMPORTED_MODULE_1__["UserProvider"]; });

/* harmony import */ var _notif_notif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notif/notif */ "EEhM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotifProvider", function() { return _notif_notif__WEBPACK_IMPORTED_MODULE_2__["NotifProvider"]; });

/* harmony import */ var _wishlist_wishlist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wishlist/wishlist */ "+wdU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WishlistProvider", function() { return _wishlist_wishlist__WEBPACK_IMPORTED_MODULE_3__["WishlistProvider"]; });

/* harmony import */ var _loading_loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loading/loading */ "qGMB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadingProvider", function() { return _loading_loading__WEBPACK_IMPORTED_MODULE_4__["LoadingProvider"]; });

/* harmony import */ var _toast_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toast/toast */ "L4fY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastProvider", function() { return _toast_toast__WEBPACK_IMPORTED_MODULE_5__["ToastProvider"]; });

/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings/settings */ "3tmi");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SettingsProvider", function() { return _settings_settings__WEBPACK_IMPORTED_MODULE_6__["SettingsProvider"]; });

/* harmony import */ var _woocommerce_woocommerce__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./woocommerce/woocommerce */ "OkR+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WooCommerceProvider", function() { return _woocommerce_woocommerce__WEBPACK_IMPORTED_MODULE_7__["WooCommerceProvider"]; });

/* harmony import */ var _rest_rest__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rest/rest */ "X4wO");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RestProvider", function() { return _rest_rest__WEBPACK_IMPORTED_MODULE_8__["RestProvider"]; });













/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "lCbl":
/*!*************************************************!*\
  !*** ./src/app/ShareComponent/login/login.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  background: #0a67a9 !important;\n  background-color: transparent !important;\n  border: none !important;\n}\n\npage-login {\n  background: #0a67a9 !important;\n}\n\nion-content {\n  --background: #0a67a9 !important;\n  background-color: #0a67a9;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\ninput {\n  width: 100% !important;\n  background: transparent !important;\n  border: 0px !important;\n  border-bottom: 1px solid #fff !important;\n}\n\n.productimage {\n  text-align: center;\n}\n\n.row .col:nth-of-type(1) {\n  padding: 0px;\n}\n\n.row .col:nth-of-type(2) {\n  padding: 0px;\n}\n\n.col button {\n  border: 1px solid #fff;\n}\n\n.alternate-login p {\n  display: flex;\n  flex-direction: row;\n  color: #fff;\n  margin: 30px 0px;\n  font-weight: 300;\n  color: #fffffe;\n  font-size: 0.9rem;\n}\n\n.alternate-login p:before {\n  content: \"\";\n  flex: 1 1;\n  border-bottom: 1px solid #fff;\n  margin: auto 5px auto auto;\n}\n\n.alternate-login p:after {\n  content: \"\";\n  flex: 1 1;\n  border-bottom: 1px solid #fff;\n  margin: auto;\n  margin: auto auto auto 5px;\n}\n\n.item {\n  --background: transparent !important;\n  color: #fff;\n}\n\n.item .item-inner {\n  padding: 0px !important;\n}\n\n.item .label {\n  color: #fff;\n  font-size: 13px;\n}\n\n.item .input .text-input {\n  color: #fff;\n  padding: 5px 0;\n  width: 100%;\n  border-bottom: 1px solid #fff;\n  margin-top: 0px;\n}\n\n.item.item-input-has-focus.input-has-focus .label {\n  color: #fff;\n}\n\n.top_header {\n  color: #fff;\n  margin-top: 20px;\n}\n\n.top_header h2 {\n  color: #fff;\n  font-weight: 500;\n}\n\n.top_header p {\n  font-weight: 300;\n  color: #fffffe;\n  font-size: 0.9rem;\n}\n\n.mandatory {\n  color: #fff;\n}\n\n.go-back {\n  display: inline-flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.go-back span {\n  color: #fff;\n  font-size: 0.9rem;\n  margin: 10px;\n  font-weight: 300;\n  color: #fffffe;\n}\n\n.go-back .button {\n  border: 1px solid #fff;\n}\n\n.input-cover {\n  position: static !important;\n}\n\n.button {\n  color: #ffffff !important;\n}\n\n.login {\n  margin-top: 80px;\n  padding: 0px 25px;\n}\n\n.login form {\n  margin-bottom: 5% !important;\n}\n\n.login .forgot-btn .button {\n  margin: 10px 12px;\n  font-weight: 300;\n  color: #fffffe;\n  font-size: 0.9rem;\n}\n\n.signup {\n  margin-top: 80px;\n  padding: 0px 25px;\n}\n\n.signup .term_div {\n  color: #fff;\n  font-size: 1.2rem;\n  font-weight: 300;\n  color: #fffffe;\n  margin-bottom: 40px;\n}\n\n.reset,\n.referral {\n  margin-top: 80px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: calc(100% - 32px);\n  margin-left: 16px;\n}\n\n.reset h1,\n.referral h1 {\n  color: #fff;\n}\n\n.reset p,\n.referral p {\n  font-size: 0.9rem;\n  font-weight: 300;\n  color: #fffffe;\n  color: #fffffe;\n  margin-top: 10px;\n}\n\n.reset .item .text-input::placeholder,\n.referral .item .text-input::placeholder {\n  color: #ddd;\n}\n\n.reset .item .text-input,\n.referral .item .text-input {\n  color: white;\n}\n\n.login-btn.button,\n.reset-btn.button,\n.signup-btn.button,\n.refferal-btn button {\n  box-shadow: none;\n  color: #000 !important;\n  border-radius: 2px;\n  --background: white!important;\n  margin-bottom: 20px;\n  margin-top: 20px;\n  font-size: 15px;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ2luLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSw4QkFBQTtFQUNBLHdDQUFBO0VBQ0EsdUJBQUE7QUFBSjs7QUFFRTtFQUNFLDhCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxnQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQUVKOztBQUFFO0VBQ0Usc0JBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esd0NBQUE7QUFHSjs7QUFERTtFQUNFLGtCQUFBO0FBSUo7O0FBR0k7RUFDRSxZQUFBO0FBQU47O0FBR0k7RUFDRSxZQUFBO0FBRE47O0FBS0U7RUFDRSxzQkFBQTtBQUZKOztBQUtFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFGSjs7QUFJSTtFQUNFLFdBQUE7RUFDQSxTQUFBO0VBQ0EsNkJBQUE7RUFDQywwQkFBQTtBQUZQOztBQUtJO0VBQ0UsV0FBQTtFQUNBLFNBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQywwQkFBQTtBQUhQOztBQVVFO0VBQ0Usb0NBQUE7RUFDQSxXQUFBO0FBUEo7O0FBUUk7RUFDRSx1QkFBQTtBQU5OOztBQVNJO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFQTjs7QUFXTTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQVRSOztBQWVJO0VBQ0UsV0FBQTtBQVpOOztBQWdCRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQWJKOztBQWVJO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBYk47O0FBZ0JJO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFkTjs7QUFrQkU7RUFDRSxXQUFBO0FBZko7O0FBa0JFO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBZko7O0FBaUJJO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQWZOOztBQWtCSTtFQUNFLHNCQUFBO0FBaEJOOztBQW9CRTtFQUNFLDJCQUFBO0FBakJKOztBQW9CRTtFQUNFLHlCQUFBO0FBakJKOztBQW9CRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFqQko7O0FBa0JJO0VBQ0UsNEJBQUE7QUFoQk47O0FBb0JNO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQWxCUjs7QUF1QkU7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBcEJKOztBQXFCSTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBbkJOOztBQXVCRTs7RUFFRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0FBcEJKOztBQXFCSTs7RUFDRSxXQUFBO0FBbEJOOztBQXFCSTs7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQWxCTjs7QUFzQk07O0VBQ0UsV0FBQTtBQW5CUjs7QUFzQk07O0VBQ0UsWUFBQTtBQW5CUjs7QUF3QkU7Ozs7RUFJRSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFyQkoiLCJmaWxlIjoibG9naW4uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpb24tdG9vbGJhcntcbiAgICBiYWNrZ3JvdW5kOiAjMGE2N2E5ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuICBwYWdlLWxvZ2lue1xuICAgIGJhY2tncm91bmQ6ICMwYTY3YTkgIWltcG9ydGFudDtcbiAgfVxuICBpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMGE2N2E5ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBhNjdhOTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIH1cbiAgaW5wdXR7XG4gICAgd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IWltcG9ydGFudDtcbiAgICBib3JkZXI6IDBweCFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmYhaW1wb3J0YW50O1xuICB9XG4gIC5wcm9kdWN0aW1hZ2V7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5zb2NpYWwtbG9naW4tdG9nZ2xlIHtcbiAgICAvL2Rpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAucm93IHtcbiAgICAuY29sOm50aC1vZi10eXBlKDEpIHtcbiAgICAgIHBhZGRpbmc6bnVsbCBudWxsIG51bGwgMHB4O1xuICAgIH1cblxuICAgIC5jb2w6bnRoLW9mLXR5cGUoMikge1xuICAgICAgcGFkZGluZzpudWxsIDBweCBudWxsIG51bGw7XG4gICAgfVxuICB9XG5cbiAgLmNvbCBidXR0b24ge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gIH1cblxuICAuYWx0ZXJuYXRlLWxvZ2luIHAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW46IDMwcHggMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgY29sb3I6ICNmZmZmZmU7XG4gICAgZm9udC1zaXplOiAuOXJlbTtcblxuICAgICY6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBmbGV4OiAxIDE7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcbiAgICAgICBtYXJnaW46YXV0byA1cHggYXV0byBhdXRvO1xuICAgIH1cblxuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIGZsZXg6IDEgMTtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgIG1hcmdpbjphdXRvIGF1dG8gYXV0byA1cHg7XG4gICAgfVxuICB9XG5cbiAgLy8gRnVsbHNjcmVlbiBjZW50ZXJlZCBpbWFnZSBiYWNrZ3JvdW5kXG5cblxuICAuaXRlbSB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIC5pdGVtLWlubmVyIHtcbiAgICAgIHBhZGRpbmc6bnVsbCAwcHggbnVsbCBudWxsIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAubGFiZWwge1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgfVxuXG4gICAgLmlucHV0IHtcbiAgICAgIC50ZXh0LWlucHV0IHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHBhZGRpbmc6IDVweCAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuaXRlbS5pdGVtLWlucHV0LWhhcy1mb2N1cy5pbnB1dC1oYXMtZm9jdXMge1xuICAgIC5sYWJlbCB7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG4gIH1cblxuICAudG9wX2hlYWRlciB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcblxuICAgIGgyIHtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICBjb2xvcjogI2ZmZmZmZTtcbiAgICAgIGZvbnQtc2l6ZTogLjlyZW07XG4gICAgfVxuICB9XG5cbiAgLm1hbmRhdG9yeSB7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cblxuICAuZ28tYmFjayB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgc3BhbiB7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGZvbnQtc2l6ZTogLjlyZW07XG4gICAgICBtYXJnaW46bnVsbCAxMHB4IG51bGwgbnVsbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICBjb2xvcjogI2ZmZmZmZTtcbiAgICB9XG5cbiAgICAuYnV0dG9uIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gICAgfVxuICB9XG5cbiAgLmlucHV0LWNvdmVyIHtcbiAgICBwb3NpdGlvbjogc3RhdGljICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYnV0dG9uIHtcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmxvZ2luIHtcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xuICAgIHBhZGRpbmc6IDBweCAyNXB4O1xuICAgIGZvcm0ge1xuICAgICAgbWFyZ2luLWJvdHRvbTogNSUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuZm9yZ290LWJ0biB7XG4gICAgICAuYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luOjEwcHggbnVsbCAxMnB4IG51bGw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZlO1xuICAgICAgICBmb250LXNpemU6IC45cmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5zaWdudXAge1xuICAgIG1hcmdpbi10b3A6IDgwcHg7XG4gICAgcGFkZGluZzogMHB4IDI1cHg7XG4gICAgLnRlcm1fZGl2IHtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgY29sb3I6ICNmZmZmZmU7XG4gICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgIH1cbiAgfVxuXG4gIC5yZXNldCxcbiAgLnJlZmVycmFsIHtcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMnB4KTtcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICBoMSB7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIGZvbnQtc2l6ZTogLjlyZW07XG4gICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgY29sb3I6ICNmZmZmZmU7XG4gICAgICBjb2xvcjogI2ZmZmZmZTtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgfVxuXG4gICAgLml0ZW0ge1xuICAgICAgLnRleHQtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6ICNkZGQ7XG4gICAgICB9XG5cbiAgICAgIC50ZXh0LWlucHV0IHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5sb2dpbi1idG4uYnV0dG9uLFxuICAucmVzZXQtYnRuLmJ1dHRvbixcbiAgLnNpZ251cC1idG4uYnV0dG9uLFxuICAucmVmZmVyYWwtYnRuIGJ1dHRvbiB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cblxuIl19 */");

/***/ }),

/***/ "m6dh":
/*!*********************************************************!*\
  !*** ./src/app/ShareComponent/shareComponent.module.ts ***!
  \*********************************************************/
/*! exports provided: ShareComModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareComModule", function() { return ShareComModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _login_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login */ "MeOy");
/* harmony import */ var _search_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search/search */ "y3Op");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







let ShareComModule = class ShareComModule {
};
ShareComModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        entryComponents: [
            _login_login__WEBPACK_IMPORTED_MODULE_3__["LoginPage"], _search_search__WEBPACK_IMPORTED_MODULE_4__["SearchPage"]
        ],
        exports: [_login_login__WEBPACK_IMPORTED_MODULE_3__["LoginPage"], _search_search__WEBPACK_IMPORTED_MODULE_4__["SearchPage"]],
        declarations: [
            _login_login__WEBPACK_IMPORTED_MODULE_3__["LoginPage"], _search_search__WEBPACK_IMPORTED_MODULE_4__["SearchPage"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"].forChild()
        ],
    })
], ShareComModule);



/***/ }),

/***/ "qGMB":
/*!*********************************************!*\
  !*** ./src/app/services/loading/loading.ts ***!
  \*********************************************/
/*! exports provided: LoadingProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingProvider", function() { return LoadingProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");



//import { TranslateService } from "@ngx-translate/core";
let LoadingProvider = class LoadingProvider {
    constructor(loader //private translate: TranslateService
    ) {
        this.loader = loader;
    }
    show(dismissOnPageChange = true) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // this.translate.get(["LOADING"]).subscribe(x => {
            this.load = yield this.loader.create({
                //content: x.LOADING,
                // spinner: 'ios',
                cssClass: "loading-custom",
                message: `<div class="header">
                  </div>
                  <div class="content">
                    <div class="loader_outer">
                      <div class="loader">
                      </div>
                    </div>
                  </div>`,
                spinner: null,
                backdropDismiss: dismissOnPageChange,
            });
            yield this.load.present();
            // });
        });
    }
    showWithMessage(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.load = yield this.loader.create({
                //content: x.LOADING,
                // spinner: 'ios',
                cssClass: "loading-custom-msg",
                message: `<div class="header">
                  </div>
                  <div class="content">
                    <div class="loader_outer">
                      <div class="loader"></div></br>
                      ${msg}
                    </div>
                  </div>`,
                spinner: null,
                backdropDismiss: false,
            });
            yield this.load.present();
        });
    }
    dismiss() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.load) {
                yield this.load.dismiss();
                this.load = null;
            }
        });
    }
    dismissInstant() {
        this.load.dismiss();
    }
};
LoadingProvider.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
LoadingProvider = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], LoadingProvider);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() | pages-home-home-module */[__webpack_require__.e("default~pages-home-home-module~pages-orderitems-orderitems-module~pages-orders-detail-detail-module~~e6677aeb"), __webpack_require__.e("common"), __webpack_require__.e("pages-home-home-module")]).then(__webpack_require__.bind(null, /*! ./pages/home/home.module */ "99Un")).then(m => m.HomePageModule)
    }, {
        path: 'product',
        loadChildren: () => Promise.all(/*! import() | pages-product-product-module */[__webpack_require__.e("default~pages-home-home-module~pages-orderitems-orderitems-module~pages-orders-detail-detail-module~~e6677aeb"), __webpack_require__.e("default~pages-categories-categories-module~pages-product-product-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-product-product-module")]).then(__webpack_require__.bind(null, /*! ./pages/product/product.module */ "dFHt")).then(m => m.ProductPageModule)
    }, {
        path: 'imageGallery',
        loadChildren: () => Promise.all(/*! import() | pages-image-gallery-image-gallery-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-image-gallery-image-gallery-module")]).then(__webpack_require__.bind(null, /*! ./pages/image-gallery/image-gallery.module */ "z6mI")).then(m => m.ImageGalleryPageModule)
    }, {
        path: 'categories',
        loadChildren: () => Promise.all(/*! import() | pages-categories-categories-module */[__webpack_require__.e("default~pages-categories-categories-module~pages-product-product-module"), __webpack_require__.e("pages-categories-categories-module")]).then(__webpack_require__.bind(null, /*! ./pages/categories/categories.module */ "U5Jw")).then(m => m.CategoriesPageModule)
    }, {
        path: 'notification',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-notification-notification-module */ "pages-notification-notification-module").then(__webpack_require__.bind(null, /*! ./pages/notification/notification.module */ "UUPU")).then(m => m.NotificationPageModule)
    }, {
        path: 'orders',
        loadChildren: () => Promise.all(/*! import() | pages-orders-orders-module */[__webpack_require__.e("default~pages-home-home-module~pages-orderitems-orderitems-module~pages-orders-detail-detail-module~~e6677aeb"), __webpack_require__.e("pages-orders-orders-module")]).then(__webpack_require__.bind(null, /*! ./pages/orders/orders.module */ "Xlj8")).then(m => m.OrdersPageModule)
    }, {
        path: 'downloads',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-downloads-downloads-module */ "pages-downloads-downloads-module").then(__webpack_require__.bind(null, /*! ./pages/downloads/downloads.module */ "Gdcr")).then(m => m.DownloadsPageModule)
    }, {
        path: 'walletPage',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-wallet-wallet-module */ "pages-wallet-wallet-module").then(__webpack_require__.bind(null, /*! ./pages/wallet/wallet.module */ "qzon")).then(m => m.WalletPageModule)
    }, {
        path: 'accountSetting',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-account-setting-account-setting-module */ "pages-account-setting-account-setting-module").then(__webpack_require__.bind(null, /*! ./pages/account-setting/account-setting.module */ "kEEI")).then(m => m.AccountSettingPageModule)
    }, {
        path: 'address',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-address-address-module */ "pages-address-address-module").then(__webpack_require__.bind(null, /*! ./pages/address/address.module */ "tJS4")).then(m => m.AddressPageModule)
    }, {
        path: 'faqPage',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-faq-faq-module */ "pages-faq-faq-module").then(__webpack_require__.bind(null, /*! ./pages/faq/faq.module */ "BhQr")).then(m => m.FaqPageModule)
    }, {
        path: 'tosPage',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-tos-tos-module */ "pages-tos-tos-module").then(__webpack_require__.bind(null, /*! ./pages/tos/tos.module */ "legO")).then(m => m.TosPageModule)
    }, {
        path: 'myCart',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-cart-cart-module */ "pages-cart-cart-module").then(__webpack_require__.bind(null, /*! ./pages/cart/cart.module */ "sFz8")).then(m => m.CartPageModule)
    }, {
        path: 'productdetail',
        loadChildren: () => Promise.all(/*! import() | pages-productdetail-productdetail-module */[__webpack_require__.e("default~pages-home-home-module~pages-orderitems-orderitems-module~pages-orders-detail-detail-module~~e6677aeb"), __webpack_require__.e("default~pages-productdetail-productdetail-module~pages-wallet-refer-earn-refer-earn-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-productdetail-productdetail-module")]).then(__webpack_require__.bind(null, /*! ./pages/productdetail/productdetail.module */ "n/OH")).then(m => m.ProductdetailPageModule)
    }, {
        path: 'orderDetail',
        loadChildren: () => Promise.all(/*! import() | pages-orders-detail-detail-module */[__webpack_require__.e("default~pages-home-home-module~pages-orderitems-orderitems-module~pages-orders-detail-detail-module~~e6677aeb"), __webpack_require__.e("pages-orders-detail-detail-module")]).then(__webpack_require__.bind(null, /*! ./pages/orders/detail/detail.module */ "uiy6")).then(m => m.OrderDetailPageModule)
    }, {
        path: 'wishlist',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-wishlist-wishlist-module */ "pages-wishlist-wishlist-module").then(__webpack_require__.bind(null, /*! ./pages/wishlist/wishlist.module */ "rCse")).then(m => m.WishlistPageModule)
    }, {
        path: 'referEarn',
        loadChildren: () => Promise.all(/*! import() | pages-wallet-refer-earn-refer-earn-module */[__webpack_require__.e("default~pages-productdetail-productdetail-module~pages-wallet-refer-earn-refer-earn-module"), __webpack_require__.e("pages-wallet-refer-earn-refer-earn-module")]).then(__webpack_require__.bind(null, /*! ./pages/wallet/refer-earn/refer-earn.module */ "DHOI")).then(m => m.ReferEarnPageModule)
    }, {
        path: 'checkout',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-checkout-checkout-module */ "pages-checkout-checkout-module").then(__webpack_require__.bind(null, /*! ./pages/checkout/checkout.module */ "Tjht")).then(m => m.CheckoutPageModule)
    }, {
        path: 'payment',
        loadChildren: () => Promise.all(/*! import() | pages-payment-payment-module */[__webpack_require__.e("default~pages-home-home-module~pages-orderitems-orderitems-module~pages-orders-detail-detail-module~~e6677aeb"), __webpack_require__.e("pages-payment-payment-module")]).then(__webpack_require__.bind(null, /*! ./pages/payment/payment.module */ "mDHw")).then(m => m.PaymentPageModule)
    },
    {
        path: 'orderitems',
        loadChildren: () => Promise.all(/*! import() | pages-orderitems-orderitems-module */[__webpack_require__.e("default~pages-home-home-module~pages-orderitems-orderitems-module~pages-orders-detail-detail-module~~e6677aeb"), __webpack_require__.e("pages-orderitems-orderitems-module")]).then(__webpack_require__.bind(null, /*! ./pages/orderitems/orderitems.module */ "4CDP")).then(m => m.OrderitemsPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "xdK+":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ShareComponent/login/login.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-button fill=\"clear\" style=\"position: absolute;top: 10px;left: 10px;\" (click)=\"dismiss()\">\n    <ion-icon slot=\"icon-only\" name=\"close\" style=\"translate:scale(2)\"></ion-icon>\n  </ion-button>\n  <div class=\"login\" *ngIf=\"page=='login'\" >\n\n    <div class=\"top_header\">\n      <h2>{{'WELCOME_TO_WOOAPP' | translate:storeName}}</h2>\n      <p>{{\"FASHION_INFO\"| translate}}</p>\n    </div>\n\n    <ion-row class=\"social-login-toggle\">\n      <ion-col col-6>\n        <ion-button expand=\"block\" fill=\"outline\" icon-start tappable (click)=\"facebookLogin()\">\n          <ion-icon name=\"logo-facebook\"></ion-icon> \n          {{'FACEBOOK' | translate}}\n        </ion-button>\n      </ion-col>\n      <ion-col col-6>\n        <ion-button expand=\"block\" fill=\"outline\" icon-start tappable (click)=\"googleLogin()\">\n          <ion-icon name=\"logo-google\"></ion-icon> \n          {{\"GOOGLE\" | translate}}\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <div class=\"alternate-login social-login-toggle\">\n      <p>{{\"LOGIN_METHODS\" | translate}}</p>\n    </div>\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\" >\n      <ion-item  >\n        <ion-label  position=\"stacked\">{{'EMAIL' | translate}} <span class=\"mandatory\">*</span></ion-label>\n        <input  formControlName=\"user\" autocomplete=\"off\" type=\"text\"  />\n      </ion-item>\n      <ion-item  >\n        <ion-label  position=\"stacked\">{{'PASSWORD' | translate}} <span class=\"mandatory\">*</span></ion-label>\n        <input  formControlName=\"pass\" autocomplete=\"off\" type=\"password\"  />\n      </ion-item>\n      <div class=\"forgot-btn\" >\n        <ion-button slot=\"end\" size=\"small\" type=\"button\" fill=\"clear\" (click)=\"goToReset()\">{{'FORGOT' | translate}}</ion-button>\n      </div>\n\n      <ion-button class=\"login-btn\" expand=\"block\" type=\"submit\">{{'SIGN_IN' | translate}}</ion-button>\n\n    </form>\n\n    <div class=\"go-back\">\n      <span>{{\"DONT_HAVE_ACCOUNT\" | translate}}</span>\n      <ion-button type=\"button\" size=\"small\" fill=\"outline\" (click)=\"goToSignup()\">\n        {{'SIGN_UP' | translate}}\n      </ion-button>\n    </div>\n\n  </div>\n\n  <div class=\"reset\" *ngIf=\"page=='reset'\">\n    <h1>{{'RESET_PASS' | translate}}</h1>\n    <p> {{'FORGOT_DESC' | translate}}</p>\n    <form [formGroup]=\"resetForm\" (ngSubmit)=\"reset()\"   >\n      <ion-item  >\n        <ion-label  position=\"stacked\">{{'EMAIL' | translate}} <span class=\"mandatory\">*</span></ion-label>\n        <input type=\"email\"  formControlName=\"email\" autocomplete=\"off\"  />\n      </ion-item>\n      <ion-button class=\"reset-btn\" type=\"submit\" expand=\"block\">{{'RESET_PASS' | translate}}</ion-button>\n    </form>\n    <div class=\"go-back\" tappable (click)=\"goToLogin()\">\n      <ion-icon name=\"arrow-back\"></ion-icon>\n      <span>{{'GO_BACK' | translate}}</span>\n    </div>\n  </div>\n\n  <div class=\"signup\" *ngIf=\"page=='signup'\">\n    <div class=\"top_header\">\n      <h2>{{\"WELCOME_TO_WOOAPP\" | translate:storeName}}</h2>\n      <p>{{\"LOGIN_METHOD\" | translate}}</p>\n    </div>\n\n    <ion-row class=\"social-login-toggle\">\n      <ion-col col-6>\n        <ion-button expand=\"block\" fill=\"outline\" icon-start (click)=\"facebookLogin()\">\n          <ion-icon name=\"logo-facebook\"></ion-icon>\n          {{\"FACEBOOK\" | translate}}\n        </ion-button>\n      </ion-col>\n      <ion-col col-6>\n        <ion-button expand=\"block\" fill=\"outline\" icon-start (click)=\"googleLogin()\">\n          <ion-icon name=\"logo-google\"></ion-icon>\n          {{\"GOOGLE\" | translate}}\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <div class=\"alternate-login social-login-toggle\">\n      <p>{{'OR' | translate}}</p>\n    </div>\n    <form [formGroup]=\"signupForm\" (ngSubmit)=\"register()\"   >\n      <ion-item  >\n        <ion-label  position=\"stacked\">{{'FIRST_NAME' | translate}} <span class=\"mandatory\">*</span></ion-label>\n        <input  formControlName=\"fname\" autocomplete=\"off\" type=\"text\"  />\n      </ion-item>\n      <ion-item  >\n        <ion-label  position=\"stacked\">{{'LAST_NAME' | translate}} <span class=\"mandatory\">*</span></ion-label>\n        <input  formControlName=\"lname\" autocomplete=\"off\" type=\"text\"  />\n      </ion-item>\n      <ion-item  >\n        <ion-label  position=\"stacked\">{{'EMAIL' | translate}} <span class=\"mandatory\">*</span></ion-label>\n        <input  formControlName=\"email\" autocomplete=\"off\" type=\"email\"  />\n      </ion-item>\n      <ion-item  >\n        <ion-label  position=\"stacked\">{{'PASSWORD' | translate}} <span class=\"mandatory\">*</span></ion-label>\n        <input  formControlName=\"pass\" autocomplete=\"off\" type=\"password\"  />\n      </ion-item>\n      <ion-item  >\n        <ion-label  position=\"stacked\">{{'CONFIRM_PASSWORD' | translate}} <span class=\"mandatory\">*</span></ion-label>\n        <input  formControlName=\"pass2\" autocomplete=\"off\" type=\"password\"  />\n      </ion-item>\n\n \n      <ion-button class=\"signup-btn\" expand=\"block\" type=\"submit\" >{{'SIGN_UP' | translate}}</ion-button>\n\n      <div class=\"term_div\"> {{\"SIGNIN_POLICY\"| translate}} <strong>{{\"PRIVACY_POLICY\" | translate}}</strong> {{'AND' |\n        translate}} <strong>{{\"TERMS\" | translate}}</strong></div>\n    </form>\n    <div class=\"go-back\">\n      <span>{{'HAVE_AN_ACCOUNT' | translate}}</span>\n      <ion-button size=\"small\" fill=\"outline\" tappable (click)=\"goToLogin()\">\n        {{'SIGN_IN' | translate}}\n      </ion-button>\n    </div>\n  </div>\n\n  <div class=\"referral\" *ngIf=\"page=='referral'\">\n    <h1>{{'HAVE_REFERRAL_CODE' | translate}}</h1>\n    <p> {{'REFERRAL_CODE_DESC' | translate}}</p>\n    <form [formGroup]=\"referralForm\" (ngSubmit)=\"applyReferralCode()\"   >\n      <ion-item  >\n        <ion-label  position=\"stacked\">{{'REFFERAL_CODE' | translate}} <span class=\"mandatory\">*</span></ion-label>\n        <input type=\"text\"  formControlName=\"refer_code\" autocomplete=\"off\"  />\n      </ion-item>\n      <ion-row class=\"refferal-btn\">\n        <ion-col>\n          <ion-button expand=\"block\" (click)=\"getAffiliate()\">{{'APPLY' | translate}}</ion-button>\n        </ion-col>\n        <ion-col>\n          <ion-button expand=\"block\" type=\"button\" (click)=\"dismiss(true)\">{{'SKIP' | translate}}</ion-button>\n        </ion-col> \n      </ion-row>\n    </form>\n  </div> \n</ion-content>  ");

/***/ }),

/***/ "y3Op":
/*!*************************************************!*\
  !*** ./src/app/ShareComponent/search/search.ts ***!
  \*************************************************/
/*! exports provided: SearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPage", function() { return SearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_search_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./search.html */ "f6Pw");
/* harmony import */ var _search_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.scss */ "bcVD");
/* harmony import */ var _services_woocommerce_woocommerce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/woocommerce/woocommerce */ "OkR+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/providers */ "fC+V");







let SearchPage = class SearchPage {
    constructor(settings, viewCtrl, zone, navCtrl, WC) {
        this.settings = settings;
        this.viewCtrl = viewCtrl;
        this.zone = zone;
        this.navCtrl = navCtrl;
        this.WC = WC;
        this.search = "";
    }
    submit(page, params) {
        console.log("dismiss");
        this.viewCtrl.dismiss({ page: page, params: params });
    }
    searchSuggestions() {
        console.log("searchSuggestions");
        console.log(this.search);
        if (this.search == "") {
            this.results = [];
        }
        else {
            this.WC.search(this.search, 4).then((res) => {
                console.log(res);
                this.zone.run(() => {
                    this.results = res;
                });
            }, (err) => {
                console.log(err);
            });
        }
    }
    ionViewDidEnter() { }
    ionViewWillEnter() {
        //this.history.load();
    }
    dismiss() {
        console.log("dismiss");
        this.viewCtrl.dismiss();
    }
};
SearchPage.ctorParameters = () => [
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_6__["SettingsProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _services_woocommerce_woocommerce__WEBPACK_IMPORTED_MODULE_3__["WooCommerceProvider"] }
];
SearchPage.propDecorators = {
    searchbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ["searchBar",] }]
};
SearchPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: "page-search",
        template: _raw_loader_search_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_search_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SearchPage);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@font-face {\n  font-family: \"GIDOLE\";\n  src: url('Gidole-Regular.ttf');\n}\n* {\n  font-family: \"GIDOLE\", sans-serif;\n}\n.menu-css .menu-header .label,\n.menu-css .menu-header .label p {\n  color: var(--toolbar_text_color);\n}\n.menu-css .list-md {\n  margin: 0;\n}\n.menu-css .devider {\n  padding: 0px 16px;\n}\n.menu-css .devider hr {\n  height: 1px !important;\n  background-color: #cecece;\n}\n.toolbar-title-md {\n  padding: 0px 38px;\n}\n.footer .button {\n  height: 44px;\n  text-transform: uppercase;\n}\n.footer .button.light-grey-button {\n  background-color: #f7f7f7;\n  color: #000;\n  font-weight: bolder;\n}\nbody {\n  background-color: #f5f5f5 !important;\n}\n.center {\n  display: flex;\n  align-items: center;\n}\nfieldset {\n  margin: 0px !important;\n  padding: 0px !important;\n}\nfieldset ion-item {\n  font-size: 1.3rem !important;\n}\nfieldset ion-label {\n  margin: 0 !important;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n  padding: 0;\n}\n.tabs .tabbar {\n  background: white !important;\n}\n.tabs-md .tab-button-text {\n  font-size: 8px;\n}\n.button-md {\n  text-transform: capitalize;\n}\n.alertModal {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  contain: strict;\n}\n@media (min-height: 680px) {\n  .alertModal ion-backdrop {\n    visibility: visible;\n  }\n}\n.alertModal .scroll-content {\n  padding-bottom: 0 !important;\n}\n.alertModal .modal-wrapper {\n  display: flex;\n  overflow: hidden;\n  flex-direction: column;\n  opacity: 0;\n  height: auto;\n}\n.alertModal .modal-wrapper,\n.alertModal .modal-wrapper .ion-page,\n.alertModal .modal-wrapper .ion-page .content,\n.alertModal .modal-wrapper .ion-page .content .scroll-content {\n  contain: content;\n  position: relative;\n}\n.treeview {\n  /* tslint:disable */\n}\n.treeview .tree-children.tree-children-no-padding {\n  padding: 0px;\n}\n.treeview .tree-children {\n  padding: 20px;\n  overflow: hidden;\n}\n.treeview .node-drop-slot.is-dragging-over {\n  background: #ddffee;\n  height: 20px;\n  border: 2px dotted #888;\n}\n.treeview .toggle-children-wrapper-expanded .toggle-children {\n  transform: rotate(90deg);\n  background-image: url('substract.svg');\n}\n.treeview .toggle-children-wrapper-collapsed .toggle-children {\n  transform: rotate(0deg);\n  background-image: url('add.svg');\n}\n.treeview .toggle-children-wrapper {\n  padding: 8px;\n}\n.treeview .toggle-children {\n  transition: transform 0.25s ease-out;\n  height: 1.5rem;\n  width: 1.5rem;\n  background-size: cover;\n  display: inline-block;\n  position: relative;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.treeview .toggle-children-placeholder {\n  display: inline-block;\n  height: 10px;\n  width: 10px;\n  position: relative;\n  top: 1px;\n  padding: 3px;\n}\n.treeview .node-content-wrapper {\n  display: inline-block;\n  width: 100%;\n  border-radius: 2px;\n  transition: background-color 0.15s, box-shadow 0.15s;\n}\n.treeview .node-content-wrapper .product-count {\n  display: inline-block;\n}\n.treeview tree-viewport {\n  height: 100%;\n  overflow: auto;\n  display: block;\n}\n.treeview .empty-tree-drop-slot .node-drop-slot {\n  height: 20px;\n  min-width: 100px;\n}\n.treeview .angular-tree-component {\n  width: 100%;\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n  -webkit-touch-callout: none;\n  /* iOS Safari */\n  -webkit-user-select: none;\n  /* Chrome/Safari/Opera */\n  /* Konqueror */\n  /* Firefox */\n  /* IE/Edge */\n  user-select: none;\n  /* non-prefixed version, currently not supported by any browser */\n}\n.treeview tree-root .angular-tree-component-rtl {\n  direction: rtl;\n}\n.treeview tree-root .angular-tree-component-rtl .toggle-children-wrapper-collapsed .toggle-children {\n  transform: rotate(180deg) !important;\n}\n.treeview tree-root .angular-tree-component-rtl .tree-children {\n  padding: 20px 0;\n}\n.treeview tree-node-checkbox {\n  padding: 1px;\n}\n.treeview ion-badge {\n  position: absolute;\n  font-weight: 400;\n  border-radius: 50% !important;\n  top: 0.5rem;\n  opacity: 0.9;\n}\n.treeview .node-wrapper {\n  padding: 10px 10px 0;\n}\n.treeview ion-thumbnail {\n  min-width: unset;\n  min-height: unset;\n  margin: 8px !important;\n}\n.treeview ion-thumbnail .thumb {\n  width: 36px;\n  height: 36px;\n}\n.treeview ion-thumbnail .thumb img {\n  width: 36px;\n  height: 36px;\n}\n.alert-title {\n  text-transform: capitalize !important;\n}\n.strike {\n  text-decoration: line-through;\n  color: #999;\n}\n.ago {\n  font-size: 1.2rem;\n  color: #aaa;\n}\n.product-slider .item .label {\n  font-weight: 700;\n}\n.product-slider .item button[item-end] {\n  margin: 0px;\n}\n.product-slider .scroll-item {\n  overflow-x: auto;\n}\n.product-slider .swiper-container {\n  padding: 10px;\n}\n.category-slide {\n  margin-bottom: 16px;\n  margin-top: 16px;\n  height: 115px !important;\n}\n.category-slide ion-col {\n  margin: 10px !important;\n}\n.category-slide .scroll-content {\n  padding: 8px !important;\n}\n.category-slide .img {\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n  margin: 0 auto;\n}\n.category-slide h5 {\n  text-transform: uppercase;\n  text-align: center;\n  color: #fff;\n  font-weight: bold;\n  font-size: 1rem;\n  display: block;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  word-wrap: break-word;\n  letter-spacing: 1px;\n  width: 100%;\n  padding: 4px 4px 2px;\n  margin: 0;\n  border-bottom-left-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\n.category-slide .col:nth-child(4n) h5 {\n  background-color: #0085da;\n}\n.category-slide .col:nth-child(4n+1) h5 {\n  background-color: #deb887;\n}\n.category-slide .col:nth-child(4n+2) h5 {\n  background-color: #c4e7e1;\n}\n.category-slide .col:nth-child(4n+3) h5 {\n  background-color: #b6ada8;\n}\n.price {\n  font-size: 1.2rem;\n  color: var(--primary_text_color);\n}\n.price ins {\n  text-decoration: none;\n}\n.product-item {\n  text-align: \"start\";\n}\n.product-item ion-badge {\n  position: absolute;\n  font-size: 1rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50% !important;\n  height: 30px;\n  width: 30px;\n}\n.product-item button.fav {\n  padding: 4px !important;\n  position: absolute;\n  display: block;\n  z-index: 3;\n  font-size: 1.3rem;\n  height: auto;\n}\n.product-item .product-name {\n  margin: 5px;\n}\n.product-item .price {\n  margin: 5px 5px 0px 5px;\n}\n.product-item .product-name {\n  font-size: 1.3rem;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-weight: 700;\n}\n.product-item img {\n  width: 100%;\n}\n.product-item .rate {\n  display: inline-flex;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.product-item .rate .rating_count {\n  font-size: 1.2rem;\n  display: inline !important;\n}\n.product-item ul {\n  padding: 0px;\n  margin: 0px 0px 0px 5px;\n}\n.product-item ul.rating li {\n  padding: 0px !important;\n  background: none;\n  color: var(--accent_color) !important;\n}\n.product-item ul.rating li ion-icon {\n  font-size: 15px;\n}\n.rightborder {\n  text-align: \"start\";\n  border-bottom: 1px solid #ddd;\n}\n.rightborder ion-badge {\n  position: absolute;\n  font-size: 1rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50% !important;\n  height: 30px;\n  width: 30px;\n}\n.rightborder button.fav {\n  padding: 4px !important;\n  position: absolute;\n  display: block;\n  z-index: 3;\n  font-size: 1.3rem;\n  height: auto;\n}\n.rightborder .product-name {\n  margin: 5px;\n}\n.rightborder .price {\n  margin: 5px 5px 0px 5px;\n}\n.rightborder .product-name {\n  font-size: 1.3rem;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-weight: 700;\n}\n.rightborder img {\n  width: 100%;\n}\n.rightborder .rate {\n  display: inline-flex;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.rightborder .rate .rating_count {\n  font-size: 1.2rem;\n  display: inline !important;\n}\n.rightborder ul {\n  padding: 0px;\n  margin: 0px 0px 0px 5px;\n}\n.rightborder ul.rating li {\n  padding: 0px !important;\n  background: none;\n  color: var(--accent_color) !important;\n}\n.rightborder ul.rating li ion-icon {\n  font-size: 15px;\n}\n.full-popup .popover-content {\n  width: calc(100% - 70px) !important;\n  box-shadow: 1px 1px 8px 0px rgba(0, 0, 0, 0.3);\n}\n.full-popup .popover-content .item-radio-checked .label {\n  color: var(--accent_color);\n}\n.full-popup .popover-content .item-radio-checked .radio-checked {\n  border-color: var(--accent_color);\n}\n.full-popup .popover-content .item-radio-checked .radio-checked .radio-inner {\n  background: var(--accent_color);\n}\n.full-popup .popover-content .input-wrapper .label {\n  white-space: normal;\n  overflow: visible;\n  text-overflow: initial;\n  line-height: 1.5;\n}\n.loader {\n  border: 6px solid #e3e3e3;\n  border-radius: 50%;\n  border-top: 6px solid var(--accent_color);\n  width: 48px;\n  height: 48px;\n  margin: 0px auto;\n  animation: spin 2s linear infinite;\n  /* Safari */\n  -webkit-animation: spin 2s linear infinite;\n}\n.ribbon-end {\n  position: absolute;\n  background: black;\n  color: white;\n  transform: rotate(45deg);\n  text-align: center;\n  top: 20px;\n  width: 200px;\n  text-transform: capitalize;\n  font-size: 14px;\n  line-height: 1.5;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/* Safari */\n.list .item-input.item-input-has-focus:last-child {\n  border: 0px !important;\n  box-shadow: none !important;\n  -webkit-box-shadow: none !important;\n}\n.item.item-input .item-inner {\n  border: 0px !important;\n  box-shadow: none !important;\n  -webkit-box-shadow: none !important;\n}\n.footer .button {\n  margin: 0 !important;\n}\n.toolbar .toolbar-background {\n  background-color: var(--primary_color);\n}\n.toolbar .bar-button,\n.toolbar .toolbar-title {\n  color: var(--toolbar_text_color);\n}\n.toolbar .bar-button ion-badge {\n  position: absolute;\n  opacity: 0.9;\n  background-color: var(--toolbar-badge-color) !important;\n  color: white !important;\n}\n.toolbar .bar-button ion-badge ~ ion-icon {\n  margin: 1.2rem;\n}\nion-badge {\n  background-color: var(--accent_color) !important;\n  color: white !important;\n}\nbutton.fav {\n  color: var(--accent_color);\n}\n.primary {\n  color: var(--primary_color) !important;\n}\n.primary-background {\n  background-color: var(--primary_color) !important;\n}\n.accent {\n  color: var(--accent_color) !important;\n}\n.accent-background {\n  background-color: var(--accent_color) !important;\n}\n.accent-border {\n  border-color: var(--accent_color) !important;\n}\n.primary-border {\n  border-color: var(--primary_color) !important;\n}\n.swiper-pagination-bullet.swiper-pagination-bullet-active {\n  background-color: var(--primary_color) !important;\n}\nion-alert .alert-wrapper .alert-radio-group .alert-radio-button[aria-checked=true] .button-inner .alert-radio-icon {\n  border-color: var(--accent_color) !important;\n}\nion-alert .alert-wrapper .alert-radio-group .alert-radio-button[aria-checked=true] .button-inner .alert-radio-icon .alert-radio-inner {\n  background-color: var(--accent_color) !important;\n}\nion-alert .alert-wrapper .alert-radio-group .alert-radio-button[aria-checked=true] .button-inner .alert-radio-label {\n  color: var(--accent_color) !important;\n}\nion-alert .alert-wrapper .alert-button-group .alert-button {\n  color: var(--accent_color) !important;\n}\nion-alert .alert-wrapper .alert-input-group .alert-input-wrapper .alert-input:focus {\n  border-bottom: 2px solid #dedede;\n}\nion-alert .alert-top {\n  padding: 0 !important;\n  align-items: center !important;\n}\nion-modal.mini-cart ion-backdrop,\nion-modal.sort ion-backdrop,\nion-modal.filter ion-backdrop,\nion-modal.shipping ion-backdrop {\n  visibility: visible !important;\n  z-index: 0;\n}\nion-modal.mini-cart .modal-wrapper,\nion-modal.sort .modal-wrapper,\nion-modal.filter .modal-wrapper,\nion-modal.shipping .modal-wrapper {\n  bottom: 0;\n  width: 100%;\n  height: auto;\n  position: absolute;\n}\nion-modal.mini-cart .modal-wrapper .header:after,\nion-modal.sort .modal-wrapper .header:after,\nion-modal.filter .modal-wrapper .header:after,\nion-modal.shipping .modal-wrapper .header:after {\n  height: 1px !important;\n}\nion-modal.mini-cart .modal-wrapper .toolbar-background,\nion-modal.mini-cart .modal-wrapper ion-navbar,\nion-modal.mini-cart .modal-wrapper ion-header,\nion-modal.sort .modal-wrapper .toolbar-background,\nion-modal.sort .modal-wrapper ion-navbar,\nion-modal.sort .modal-wrapper ion-header,\nion-modal.filter .modal-wrapper .toolbar-background,\nion-modal.filter .modal-wrapper ion-navbar,\nion-modal.filter .modal-wrapper ion-header,\nion-modal.shipping .modal-wrapper .toolbar-background,\nion-modal.shipping .modal-wrapper ion-navbar,\nion-modal.shipping .modal-wrapper ion-header {\n  background: transparent !important;\n  background-color: transparent !important;\n  border: none !important;\n}\nion-modal.mini-cart .modal-wrapper .toolbar .toolbar-title,\nion-modal.sort .modal-wrapper .toolbar .toolbar-title,\nion-modal.filter .modal-wrapper .toolbar .toolbar-title,\nion-modal.shipping .modal-wrapper .toolbar .toolbar-title {\n  color: #000 !important;\n}\nion-modal.mini-cart .modal-wrapper .toolbar .bar-button,\nion-modal.sort .modal-wrapper .toolbar .bar-button,\nion-modal.filter .modal-wrapper .toolbar .bar-button,\nion-modal.shipping .modal-wrapper .toolbar .bar-button {\n  color: #000 !important;\n}\nion-modal.mini-cart .modal-wrapper .toolbar .bar-button .icon,\nion-modal.sort .modal-wrapper .toolbar .bar-button .icon,\nion-modal.filter .modal-wrapper .toolbar .bar-button .icon,\nion-modal.shipping .modal-wrapper .toolbar .bar-button .icon {\n  color: #000 !important;\n}\nion-modal.mini-cart .modal-wrapper {\n  min-height: 220px;\n}\nion-modal.sort .modal-wrapper {\n  min-height: 300px;\n}\nion-modal.sort .modal-wrapper .scroll-content {\n  overflow: hidden;\n}\nion-modal.filter .modal-wrapper {\n  min-height: 100%;\n}\nion-modal.filter .modal-wrapper .scroll-content {\n  overflow: hidden;\n}\nion-modal.shipping .modal-wrapper {\n  min-height: 280px;\n}\nion-modal.shipping .modal-wrapper .scroll-content {\n  overflow: hidden;\n}\n.loading-custom .loading-wrapper {\n  background: transparent;\n  box-shadow: none;\n}\n.loading-custom .loader {\n  border: 6px solid #e3e3e3;\n  border-radius: 50%;\n  border-top: 6px solid var(--accent_color);\n  width: 48px;\n  height: 48px;\n  margin: 0px auto;\n  animation: spin 2s linear infinite;\n  /* Safari */\n  -webkit-animation: spin 2s linear infinite;\n}\n.loading-custom .loader_outer {\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\nloading-custom-msg .loading-wrapper {\n  background: white !important;\n  box-shadow: none;\n}\nloading-custom-msg .loader {\n  border: 6px solid #e3e3e3;\n  border-radius: 50%;\n  border-top: 6px solid var(--accent_color);\n  width: 48px;\n  height: 48px;\n  margin: 0px auto;\n  animation: spin 2s linear infinite;\n  /* Safari */\n  -webkit-animation: spin 2s linear infinite;\n}\nloading-custom-msg .loader_outer {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.custom_alert .alert-wrapper {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  max-width: 100%;\n  left: 0;\n}\n.custom_alert .alert-wrapper .alert-message {\n  color: #000;\n  padding: 8px;\n  border: 2px dashed #eee;\n  margin: 0 10px 10px;\n}\n.custom_alert .alert-wrapper .alert-head {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.custom_alert .alert-wrapper .alert-head .alert-title {\n  font-size: 20px;\n}\n.custom_alert .alert-wrapper .alert-button-group {\n  justify-content: space-between;\n  padding: 8px;\n  border-top: 1px solid #ccc;\n}\n.custom_alert .alert-wrapper .alert-button-group .alert-button {\n  flex: 1;\n  color: #fff !important;\n  margin: 0px;\n}\n.custom_alert .alert-wrapper .alert-button-group .alert-button:nth-of-type(1) {\n  background: var(--primary_color);\n}\n.custom_alert .alert-wrapper .alert-button-group .alert-button:nth-of-type(2) {\n  background: var(--accent_color);\n}\n.custom_alert .alert-wrapper .alert-button-group .alert-button span.button-inner {\n  justify-content: center;\n}\n.custom_alert_call .alert-wrapper {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  max-width: 100%;\n  left: 0;\n}\n.custom_alert_call .alert-wrapper .alert-head {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.custom_alert_call .alert-wrapper .alert-head .alert-title {\n  font-size: 20px;\n}\n.custom_alert_call .alert-wrapper .alert-button-group {\n  justify-content: space-between;\n  padding: 8px;\n  border-top: 1px solid #ccc;\n}\n.custom_alert_call .alert-wrapper .alert-button-group .alert-button {\n  flex: 1;\n  color: #fff !important;\n  margin: 0px;\n}\n.custom_alert_call .alert-wrapper .alert-button-group .alert-button:nth-of-type(1) {\n  background: var(--primary_color);\n}\n.custom_alert_call .alert-wrapper .alert-button-group .alert-button:nth-of-type(2) {\n  background: var(--accent_color);\n}\n.custom_alert_call .alert-wrapper .alert-button-group .alert-button span.button-inner {\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLHFCQUFBO0VBQ0EsOEJBQUE7QUFGSjtBQUtFO0VBQ0UsaUNBQUE7QUFISjtBQVFNOztFQUVFLGdDQUFBO0FBTFI7QUFTSTtFQUNFLFNBQUE7QUFQTjtBQVVJO0VBQ0UsaUJBQUE7QUFSTjtBQVVNO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtBQVJSO0FBYUU7RUFDRSxpQkFBQTtBQVZKO0FBY0k7RUFDRSxZQUFBO0VBQ0EseUJBQUE7QUFYTjtBQWNJO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFaTjtBQWdCRTtFQUNFLG9DQUFBO0FBYko7QUFnQkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFiSjtBQWdCRTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7QUFiSjtBQWVJO0VBQ0UsNEJBQUE7QUFiTjtBQWdCSTtFQUNFLG9CQUFBO0FBZE47QUFrQkU7Ozs7OztFQU1FLFNBQUE7RUFDQSxVQUFBO0FBZko7QUFtQkU7RUFDRSw0QkFBQTtBQWhCSjtBQW1CRTtFQUNFLGNBQUE7QUFoQko7QUFvQkU7RUFDRSwwQkFBQTtBQWpCSjtBQW9CRTtFQVdFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBM0JKO0FBYUk7RUFDRTtJQUNFLG1CQUFBO0VBWE47QUFDRjtBQWNJO0VBQ0UsNEJBQUE7QUFaTjtBQXFCSTtFQVNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUEzQk47QUFlTTs7OztFQUlFLGdCQUFBO0VBQ0Esa0JBQUE7QUFiUjtBQXdCRTtFQW9DRSxtQkFBQTtBQXhESjtBQXFCSTtFQUNFLFlBQUE7QUFuQk47QUFzQkk7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFwQk47QUE2Qkk7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQTNCTjtBQThCSTtFQUNFLHdCQUFBO0VBQ0Esc0NBQUE7QUE1Qk47QUErQkk7RUFDRSx1QkFBQTtFQUNBLGdDQUFBO0FBN0JOO0FBZ0NJO0VBQ0UsWUFBQTtBQTlCTjtBQWtDSTtFQUVFLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0FBakNOO0FBb0NJO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUFsQ047QUFxQ0k7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG9EQUFBO0FBbkNOO0FBcUNNO0VBQ0UscUJBQUE7QUFuQ1I7QUF1Q0k7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFyQ047QUF3Q0k7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUF0Q047QUF5Q0k7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBRUEsY0FBQTtFQUVBLFlBQUE7RUFFQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpRUFBQTtBQXZDTjtBQTBDSTtFQUNFLGNBQUE7QUF4Q047QUEyQ0k7RUFJRSxvQ0FBQTtBQTVDTjtBQStDSTtFQUNFLGVBQUE7QUE3Q047QUFnREk7RUFDRSxZQUFBO0FBOUNOO0FBaURJO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUEvQ047QUFrREk7RUFDRSxvQkFBQTtBQWhETjtBQW1ESTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQWpETjtBQW1ETTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBakRSO0FBbURRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFqRFY7QUF1REU7RUFDRSxxQ0FBQTtBQXBESjtBQXVERTtFQUNFLDZCQUFBO0VBQ0EsV0FBQTtBQXBESjtBQXVERTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQXBESjtBQXlETTtFQUNFLGdCQUFBO0FBdERSO0FBd0RNO0VBQ0UsV0FBQTtBQXREUjtBQTBESTtFQUNFLGdCQUFBO0FBeEROO0FBMERJO0VBQ0UsYUFBQTtBQXhETjtBQTRERTtFQVNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQWpFSjtBQXVESTtFQUNFLHVCQUFBO0FBckROO0FBd0RJO0VBQ0UsdUJBQUE7QUF0RE47QUE2REk7RUFHRSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtBQTdETjtBQWtFSTtFQUVFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBTUEsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsU0FBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7QUF0RU47QUF3RUk7RUFDRSx5QkFBQTtBQXRFTjtBQXdFSTtFQUNFLHlCQUFBO0FBdEVOO0FBd0VJO0VBQ0UseUJBQUE7QUF0RU47QUF3RUk7RUFDRSx5QkFBQTtBQXRFTjtBQTBFRTtFQUNFLGlCQUFBO0VBQ0EsZ0NBQUE7QUF2RUo7QUF5RUk7RUFDRSxxQkFBQTtBQXZFTjtBQTRFRTtFQUNFLG1CQUFBO0FBekVKO0FBNEVJO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQTFFTjtBQTZFSTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQTNFTjtBQThFSTtFQUNFLFdBQUE7QUE1RU47QUE4RUk7RUFDRSx1QkFBQTtBQTVFTjtBQStFSTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBN0VOO0FBZ0ZJO0VBQ0UsV0FBQTtBQTlFTjtBQWlGSTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQS9FTjtBQWlGTTtFQUNFLGlCQUFBO0VBQ0EsMEJBQUE7QUEvRVI7QUFtRkk7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7QUFqRk47QUFtRk07RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7QUFqRlI7QUFtRlE7RUFDRSxlQUFBO0FBakZWO0FBdUZFO0VBQ0UsbUJBQUE7RUFDQSw2QkFBQTtBQXBGSjtBQXFGSTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFuRk47QUFzRkk7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFwRk47QUF1Rkk7RUFDRSxXQUFBO0FBckZOO0FBdUZJO0VBQ0UsdUJBQUE7QUFyRk47QUF3Rkk7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQXRGTjtBQXlGSTtFQUNFLFdBQUE7QUF2Rk47QUEwRkk7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUF4Rk47QUEwRk07RUFDRSxpQkFBQTtFQUNBLDBCQUFBO0FBeEZSO0FBNEZJO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0FBMUZOO0FBNEZNO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFDQUFBO0FBMUZSO0FBNEZRO0VBQ0UsZUFBQTtBQTFGVjtBQWlHSTtFQUNFLG1DQUFBO0VBQ0EsOENBQUE7QUE5Rk47QUFpR1E7RUFDRSwwQkFBQTtBQS9GVjtBQWtHUTtFQUNFLGlDQUFBO0FBaEdWO0FBa0dVO0VBQ0UsK0JBQUE7QUFoR1o7QUFzR1E7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQXBHVjtBQTBHRTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSwwQ0FBQTtBQXZHSjtBQTBHRTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUF2R0o7QUEwR0U7RUFDRTtJQUNFLHVCQUFBO0VBdkdKO0VBMEdFO0lBQ0UseUJBQUE7RUF4R0o7QUFDRjtBQTJHRSxXQUFBO0FBV0E7RUFDRSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7QUEzR0o7QUErR0k7RUFDRSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7QUE1R047QUFnSEU7RUFDRSxvQkFBQTtBQTdHSjtBQWtISTtFQUNFLHNDQUFBO0FBL0dOO0FBa0hJOztFQUVFLGdDQUFBO0FBaEhOO0FBb0hNO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsdURBQUE7RUFDQSx1QkFBQTtBQWxIUjtBQW9IUTtFQUNFLGNBQUE7QUFsSFY7QUF3SEU7RUFDRSxnREFBQTtFQUNBLHVCQUFBO0FBckhKO0FBd0hFO0VBQ0UsMEJBQUE7QUFySEo7QUF3SEU7RUFDRSxzQ0FBQTtBQXJISjtBQXdIRTtFQUNFLGlEQUFBO0FBckhKO0FBd0hFO0VBQ0UscUNBQUE7QUFySEo7QUF3SEU7RUFDRSxnREFBQTtBQXJISjtBQXdIRTtFQUNFLDRDQUFBO0FBckhKO0FBd0hFO0VBQ0UsNkNBQUE7QUFySEo7QUF3SEU7RUFDRSxpREFBQTtBQXJISjtBQTZIWTtFQUNFLDRDQUFBO0FBMUhkO0FBNEhjO0VBQ0UsZ0RBQUE7QUExSGhCO0FBOEhZO0VBQ0UscUNBQUE7QUE1SGQ7QUFtSVE7RUFDRSxxQ0FBQTtBQWpJVjtBQXVJVTtFQUNFLGdDQUFBO0FBcklaO0FBMklJO0VBQ0UscUJBQUE7RUFDQSw4QkFBQTtBQXpJTjtBQWlKSTs7OztFQUNFLDhCQUFBO0VBQ0EsVUFBQTtBQTNJTjtBQThJSTs7OztFQUNFLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBeklOO0FBMklNOzs7O0VBQ0Usc0JBQUE7QUF0SVI7QUF5SU07Ozs7Ozs7Ozs7OztFQUdFLGtDQUFBO0VBQ0Esd0NBQUE7RUFDQSx1QkFBQTtBQTlIUjtBQWtJUTs7OztFQUNFLHNCQUFBO0FBN0hWO0FBZ0lROzs7O0VBQ0Usc0JBQUE7QUEzSFY7QUE2SFU7Ozs7RUFDRSxzQkFBQTtBQXhIWjtBQWdJSTtFQUNFLGlCQUFBO0FBN0hOO0FBa0lJO0VBQ0UsaUJBQUE7QUEvSE47QUFpSU07RUFDRSxnQkFBQTtBQS9IUjtBQXFJSTtFQUNFLGdCQUFBO0FBbElOO0FBb0lNO0VBQ0UsZ0JBQUE7QUFsSVI7QUF3SUk7RUFDRSxpQkFBQTtBQXJJTjtBQXVJTTtFQUNFLGdCQUFBO0FBcklSO0FBMklJO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtBQXhJTjtBQTJJSTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSwwQ0FBQTtBQXpJTjtBQTRJSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUExSU47QUErSUk7RUFDRSw0QkFBQTtFQUNBLGdCQUFBO0FBNUlOO0FBK0lJO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLDBDQUFBO0FBN0lOO0FBZ0pJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBOUlOO0FBbUpJO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0FBaEpOO0FBa0pNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBaEpSO0FBbUpNO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBQWpKUjtBQW1KUTtFQUNFLGVBQUE7QUFqSlY7QUFxSk07RUFDRSw4QkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBQW5KUjtBQXFKUTtFQUNFLE9BQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFuSlY7QUFxSlU7RUFDRSxnQ0FBQTtBQW5KWjtBQXNKVTtFQUNFLCtCQUFBO0FBcEpaO0FBdUpVO0VBQ0UsdUJBQUE7QUFySlo7QUE2Skk7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLE9BQUE7QUExSk47QUFtS007RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0FBaktSO0FBbUtRO0VBQ0UsZUFBQTtBQWpLVjtBQXFLTTtFQUNFLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FBbktSO0FBcUtRO0VBQ0UsT0FBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQW5LVjtBQXFLVTtFQUNFLGdDQUFBO0FBbktaO0FBc0tVO0VBQ0UsK0JBQUE7QUFwS1o7QUF1S1U7RUFDRSx1QkFBQTtBQXJLWiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL0BpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDoxMDAsMjAwLDMwMCw0MDAsNTAwLDYwMCw3MDAsODAwLDkwMCcpO1xuLy9AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG86MTAwLDEwMGksMzAwLDMwMGksNDAwLDQwMGksNzAwLDcwMGksOTAwLDkwMGknKTtcblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiR0lET0xFXCI7XG4gICAgc3JjOiB1cmwoXCIuLi9hc3NldHMvZm9udHMvR2lkb2xlLVJlZ3VsYXIudHRmXCIpO1xuICB9XG4gIFxuICAqIHtcbiAgICBmb250LWZhbWlseTogXCJHSURPTEVcIiwgc2Fucy1zZXJpZjtcbiAgfVxuICBcbiAgLm1lbnUtY3NzIHtcbiAgICAubWVudS1oZWFkZXIge1xuICAgICAgLmxhYmVsLFxuICAgICAgLmxhYmVsIHAge1xuICAgICAgICBjb2xvcjogdmFyKC0tdG9vbGJhcl90ZXh0X2NvbG9yKTtcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIC5saXN0LW1kIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gIFxuICAgIC5kZXZpZGVyIHtcbiAgICAgIHBhZGRpbmc6IDBweCAxNnB4O1xuICBcbiAgICAgIGhyIHtcbiAgICAgICAgaGVpZ2h0OiAxcHggIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NlY2VjZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC50b29sYmFyLXRpdGxlLW1kIHtcbiAgICBwYWRkaW5nOiAwcHggMzhweDtcbiAgfVxuICBcbiAgLmZvb3RlciB7XG4gICAgLmJ1dHRvbiB7XG4gICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIH1cbiAgXG4gICAgLmJ1dHRvbi5saWdodC1ncmV5LWJ1dHRvbiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xuICAgICAgY29sb3I6ICMwMDA7XG4gICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIH1cbiAgfVxuICBcbiAgYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNSAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAuY2VudGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4OyAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIFxuICBmaWVsZHNldCB7XG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgXG4gICAgaW9uLWl0ZW0ge1xuICAgICAgZm9udC1zaXplOiAxLjNyZW0gIWltcG9ydGFudDtcbiAgICB9XG4gIFxuICAgIGlvbi1sYWJlbCB7XG4gICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbiAgXG4gIGgxLFxuICBoMixcbiAgaDMsXG4gIGg0LFxuICBoNSxcbiAgaDYge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIFxuICAvL0JvdHRvbSBUYWJzIFRoZW1lXG4gIC50YWJzIC50YWJiYXIge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC50YWJzLW1kIC50YWItYnV0dG9uLXRleHQge1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICB9XG4gIFxuICAvL0J1dHRvbiBUaGVtZVxuICAuYnV0dG9uLW1kIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgfVxuICBcbiAgLmFsZXJ0TW9kYWwge1xuICAgIEBtZWRpYSAobWluLWhlaWdodDogNjgwcHgpIHtcbiAgICAgIGlvbi1iYWNrZHJvcCB7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICAuc2Nyb2xsLWNvbnRlbnQge1xuICAgICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgICB9XG4gIFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgY29udGFpbjogc3RyaWN0O1xuICBcbiAgICAubW9kYWwtd3JhcHBlciB7XG4gICAgICAmLFxuICAgICAgLmlvbi1wYWdlLFxuICAgICAgLmlvbi1wYWdlIC5jb250ZW50LFxuICAgICAgLmlvbi1wYWdlIC5jb250ZW50IC5zY3JvbGwtY29udGVudCB7XG4gICAgICAgIGNvbnRhaW46IGNvbnRlbnQ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cbiAgfVxuICBcbiAgLnRyZWV2aWV3IHtcbiAgICAudHJlZS1jaGlsZHJlbi50cmVlLWNoaWxkcmVuLW5vLXBhZGRpbmcge1xuICAgICAgcGFkZGluZzpudWxsIG51bGwgbnVsbCAwcHg7XG4gICAgfVxuICBcbiAgICAudHJlZS1jaGlsZHJlbiB7XG4gICAgICBwYWRkaW5nOm51bGwgbnVsbCBudWxsIDIwcHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cbiAgXG4gICAgLm5vZGUtZHJvcC1zbG90IHtcbiAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICM4ODg7XG4gICAgICAvLyBkaXNwbGF5OiBibG9jaztcbiAgICAgIC8vaGVpZ2h0OiAxcHhcbiAgICB9XG4gIFxuICAgIC5ub2RlLWRyb3Atc2xvdC5pcy1kcmFnZ2luZy1vdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNkZGZmZWU7XG4gICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICBib3JkZXI6IDJweCBkb3R0ZWQgIzg4ODtcbiAgICB9XG4gIFxuICAgIC50b2dnbGUtY2hpbGRyZW4td3JhcHBlci1leHBhbmRlZCAudG9nZ2xlLWNoaWxkcmVuIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy9zdmdzL3N1YnN0cmFjdC5zdmdcIik7XG4gICAgfVxuICBcbiAgICAudG9nZ2xlLWNoaWxkcmVuLXdyYXBwZXItY29sbGFwc2VkIC50b2dnbGUtY2hpbGRyZW4ge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9hc3NldHMvc3Zncy9hZGQuc3ZnXCIpO1xuICAgIH1cbiAgXG4gICAgLnRvZ2dsZS1jaGlsZHJlbi13cmFwcGVyIHtcbiAgICAgIHBhZGRpbmc6IDhweDtcbiAgICB9XG4gIFxuICAgIC8qIHRzbGludDpkaXNhYmxlICovXG4gICAgLnRvZ2dsZS1jaGlsZHJlbiB7XG4gICAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQkFBQUFBU0NBWUFBQUJTTzE1cUFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFCQWhwVkZoMFdFMU1PbU52YlM1aFpHOWlaUzU0YlhBQUFBQUFBRHcvZUhCaFkydGxkQ0JpWldkcGJqMGk3N3UvSWlCcFpEMGlWelZOTUUxd1EyVm9hVWg2Y21WVGVrNVVZM3ByWXpsa0lqOCtJRHg0T25odGNHMWxkR0VnZUcxc2JuTTZlRDBpWVdSdlltVTZibk02YldWMFlTOGlJSGc2ZUcxd2RHczlJa0ZrYjJKbElGaE5VQ0JEYjNKbElEVXVOaTFqTURZM0lEYzVMakUxTnpjME55d2dNakF4TlM4d015OHpNQzB5TXpvME1EbzBNaUFnSUNBZ0lDQWdJajRnUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0Z1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSWdlRzFzYm5NNmVHMXdUVTA5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5dGJTOGlJSGh0Ykc1ek9uTjBVbVZtUFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdmMxUjVjR1V2VW1WemIzVnlZMlZTWldZaklpQjRiV3h1Y3pwNGJYQTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzhpSUhodGJHNXpPbVJqUFNKb2RIUndPaTh2Y0hWeWJDNXZjbWN2WkdNdlpXeGxiV1Z1ZEhNdk1TNHhMeUlnZUcxd1RVMDZUM0pwWjJsdVlXeEViMk4xYldWdWRFbEVQU0oxZFdsa09qWTFSVFl6T1RBMk9EWkRSakV4UkVKQk5rVXlSRGc0TjBORlFVTkNOREEzSWlCNGJYQk5UVHBFYjJOMWJXVnVkRWxFUFNKNGJYQXVaR2xrT2tZelJrUkZRamN4T0RVek5URXhSVFU0UlRRd1JrUXdPREZFT1VaRU1FRTNJaUI0YlhCTlRUcEpibk4wWVc1alpVbEVQU0o0YlhBdWFXbGtPa1l6UmtSRlFqY3dPRFV6TlRFeFJUVTRSVFF3UmtRd09ERkVPVVpFTUVFM0lpQjRiWEE2UTNKbFlYUnZjbFJ2YjJ3OUlrRmtiMkpsSUZCb2IzUnZjMmh2Y0NCRFF5QXlNREUxSUNoTllXTnBiblJ2YzJncElqNGdQSGh0Y0UxTk9rUmxjbWwyWldSR2NtOXRJSE4wVW1WbU9tbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZNVGs1TnpBMU9HRXRaREkzT0MwME5EWmtMV0U0T0RndE5HTTRNR1E0WVdJMU56Tm1JaUJ6ZEZKbFpqcGtiMk4xYldWdWRFbEVQU0poWkc5aVpUcGtiMk5wWkRwd2FHOTBiM05vYjNBNll6UmtabVF4TUdNdFkyTmxOUzB4TVRjNExXRTVPR1F0WTJOa1ptTTVPRGs1WVdZd0lpOCtJRHhrWXpwMGFYUnNaVDRnUEhKa1pqcEJiSFErSUR4eVpHWTZiR2tnZUcxc09teGhibWM5SW5ndFpHVm1ZWFZzZENJK1oyeDVjR2hwWTI5dWN6d3ZjbVJtT214cFBpQThMM0prWmpwQmJIUStJRHd2WkdNNmRHbDBiR1UrSUR3dmNtUm1Pa1JsYzJOeWFYQjBhVzl1UGlBOEwzSmtaanBTUkVZK0lEd3ZlRHA0YlhCdFpYUmhQaUE4UDNod1lXTnJaWFFnWlc1a1BTSnlJajgrNWlvZ0Z3QUFBR2hKUkVGVWVOcGlZR0JnS0FCaWdmLy8vek9RZzBFQVJINEE0Z1p5RElJWjhCL0pvQUpLRElEaEIwQ2NRSWtCUkJ0RXlBQmtneHdvTVFDR0Q2QWJSS29CR0FZeFFnWElCUnVaR0tnQUtQSUMzUUx4QXJuUlNIWkNJanNwazUyWktNck9GQlVvQUFFR0FLbnE1OTNNUUFadEFBQUFBRWxGVGtTdVFtQ0MnKTtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cyBlYXNlLW91dDtcbiAgICAgIGhlaWdodDogMS41cmVtO1xuICAgICAgd2lkdGg6IDEuNXJlbTtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIH1cbiAgXG4gICAgLnRvZ2dsZS1jaGlsZHJlbi1wbGFjZWhvbGRlciB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICB3aWR0aDogMTBweDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRvcDogMXB4O1xuICAgICAgcGFkZGluZzpudWxsIDNweCBudWxsIG51bGw7XG4gICAgfVxuICBcbiAgICAubm9kZS1jb250ZW50LXdyYXBwZXIge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzLCBib3gtc2hhZG93IDAuMTVzO1xuICBcbiAgICAgIC5wcm9kdWN0LWNvdW50IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgdHJlZS12aWV3cG9ydCB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgXG4gICAgLmVtcHR5LXRyZWUtZHJvcC1zbG90IC5ub2RlLWRyb3Atc2xvdCB7XG4gICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgIH1cbiAgXG4gICAgLmFuZ3VsYXItdHJlZS1jb21wb25lbnQge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gICAgICAvKiBpT1MgU2FmYXJpICovXG4gICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgLyogQ2hyb21lL1NhZmFyaS9PcGVyYSAqL1xuICAgICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgLyogS29ucXVlcm9yICovXG4gICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgLyogRmlyZWZveCAqL1xuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgLyogSUUvRWRnZSAqL1xuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAvKiBub24tcHJlZml4ZWQgdmVyc2lvbiwgY3VycmVudGx5IG5vdCBzdXBwb3J0ZWQgYnkgYW55IGJyb3dzZXIgKi9cbiAgICB9XG4gIFxuICAgIHRyZWUtcm9vdCAuYW5ndWxhci10cmVlLWNvbXBvbmVudC1ydGwge1xuICAgICAgZGlyZWN0aW9uOiBydGw7XG4gICAgfVxuICBcbiAgICB0cmVlLXJvb3RcbiAgICAgIC5hbmd1bGFyLXRyZWUtY29tcG9uZW50LXJ0bFxuICAgICAgLnRvZ2dsZS1jaGlsZHJlbi13cmFwcGVyLWNvbGxhcHNlZFxuICAgICAgLnRvZ2dsZS1jaGlsZHJlbiB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpICFpbXBvcnRhbnQ7XG4gICAgfVxuICBcbiAgICB0cmVlLXJvb3QgLmFuZ3VsYXItdHJlZS1jb21wb25lbnQtcnRsIC50cmVlLWNoaWxkcmVuIHtcbiAgICAgIHBhZGRpbmc6bnVsbCAyMHB4IG51bGwgMDtcbiAgICB9XG4gIFxuICAgIHRyZWUtbm9kZS1jaGVja2JveCB7XG4gICAgICBwYWRkaW5nOiAxcHg7XG4gICAgfVxuICBcbiAgICBpb24tYmFkZ2Uge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xuICAgICAgdG9wOiAwLjVyZW07XG4gICAgICBvcGFjaXR5OiAwLjk7XG4gICAgfVxuICBcbiAgICAubm9kZS13cmFwcGVyIHtcbiAgICAgIHBhZGRpbmc6IDEwcHggMTBweCAwO1xuICAgIH1cbiAgXG4gICAgaW9uLXRodW1ibmFpbCB7XG4gICAgICBtaW4td2lkdGg6IHVuc2V0O1xuICAgICAgbWluLWhlaWdodDogdW5zZXQ7XG4gICAgICBtYXJnaW46bnVsbCA4cHggbnVsbCBudWxsIWltcG9ydGFudDtcbiAgXG4gICAgICAudGh1bWIge1xuICAgICAgICB3aWR0aDogMzZweDtcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICBcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMzZweDtcbiAgICAgICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC5hbGVydC10aXRsZSB7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLnN0cmlrZSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgY29sb3I6ICM5OTk7XG4gIH1cbiAgXG4gIC5hZ28ge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGNvbG9yOiAjYWFhO1xuICB9XG4gIFxuICAucHJvZHVjdC1zbGlkZXIge1xuICAgIC5pdGVtIHtcbiAgICAgIC5sYWJlbCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICB9XG4gICAgICBidXR0b25baXRlbS1lbmRdIHtcbiAgICAgICAgbWFyZ2luOm51bGwgMHB4IG51bGwgbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIC5zY3JvbGwtaXRlbSB7XG4gICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIH1cbiAgICAuc3dpcGVyLWNvbnRhaW5lciB7XG4gICAgICBwYWRkaW5nOm51bGwgbnVsbCBudWxsIDEwcHg7XG4gICAgfVxuICB9XG4gIFxuICAuY2F0ZWdvcnktc2xpZGUge1xuICAgIGlvbi1jb2wge1xuICAgICAgbWFyZ2luOm51bGwgMTBweCBudWxsIG51bGwhaW1wb3J0YW50O1xuICAgIH1cbiAgXG4gICAgLnNjcm9sbC1jb250ZW50IHtcbiAgICAgIHBhZGRpbmc6bnVsbCBudWxsIG51bGwgOHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICBcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgaGVpZ2h0OiAxMTVweCAhaW1wb3J0YW50O1xuICBcbiAgICAuaW1nIHtcbiAgICAgIC8vd2lkdGg6IDkwcHg7XG4gICAgICAvL2hlaWdodDogNjBweDtcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzcHg7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIC8vbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIC8vYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB9XG4gIFxuICAgIGg1IHtcbiAgICAgIC8vcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAvLyAgIHRvIGJvdHRvbSxcbiAgICAgIC8vICAgcmdiYSgxNzUsIDE3NSwgMTc1LCAwLjM3KSAwJSxcbiAgICAgIC8vICAgcmdiYSgwLCAwLCAwLCAxKSAxMDAlXG4gICAgICAvLyApO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nOiA0cHggNHB4IDJweDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzcHg7XG4gICAgfVxuICAgIC5jb2w6bnRoLWNoaWxkKDRuKSBoNSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4NWRhO1xuICAgIH1cbiAgICAuY29sOm50aC1jaGlsZCg0biArIDEpIGg1IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZWI4ODc7XG4gICAgfVxuICAgIC5jb2w6bnRoLWNoaWxkKDRuICsgMikgaDUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2M0ZTdlMTtcbiAgICB9XG4gICAgLmNvbDpudGgtY2hpbGQoNG4gKyAzKSBoNSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjZhZGE4O1xuICAgIH1cbiAgfVxuICBcbiAgLnByaWNlIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeV90ZXh0X2NvbG9yKTtcbiAgXG4gICAgaW5zIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG4gIFxuICB9XG4gIFxuICAucHJvZHVjdC1pdGVtIHtcbiAgICB0ZXh0LWFsaWduOlwic3RhcnRcIjtcbiAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgICAvL2JvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZGQ7XG4gICAgaW9uLWJhZGdlIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICB3aWR0aDogMzBweDtcbiAgICB9XG4gIFxuICAgIGJ1dHRvbi5mYXYge1xuICAgICAgcGFkZGluZzogNHB4ICFpbXBvcnRhbnQ7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHotaW5kZXg6IDM7XG4gICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG4gIFxuICAgIC5wcm9kdWN0LW5hbWUge1xuICAgICAgbWFyZ2luOiA1cHg7XG4gICAgfVxuICAgIC5wcmljZSB7XG4gICAgICBtYXJnaW46IDVweCA1cHggMHB4IDVweDtcbiAgICB9XG4gIFxuICAgIC5wcm9kdWN0LW5hbWUge1xuICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgIH1cbiAgXG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgXG4gICAgLnJhdGUge1xuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgXG4gICAgICAucmF0aW5nX2NvdW50IHtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgdWwge1xuICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgbWFyZ2luOjBweCAwcHggMHB4IDVweDtcbiAgXG4gICAgICAmLnJhdGluZyBsaSB7XG4gICAgICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50X2NvbG9yKSAhaW1wb3J0YW50O1xuICBcbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLnJpZ2h0Ym9yZGVyIHtcbiAgICB0ZXh0LWFsaWduOlwic3RhcnRcIjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgICBpb24tYmFkZ2Uge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIHdpZHRoOiAzMHB4O1xuICAgIH1cbiAgXG4gICAgYnV0dG9uLmZhdiB7XG4gICAgICBwYWRkaW5nOiA0cHggIWltcG9ydGFudDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgei1pbmRleDogMztcbiAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cbiAgXG4gICAgLnByb2R1Y3QtbmFtZSB7XG4gICAgICBtYXJnaW46IDVweDtcbiAgICB9XG4gICAgLnByaWNlIHtcbiAgICAgIG1hcmdpbjogNXB4IDVweCAwcHggNXB4O1xuICAgIH1cbiAgXG4gICAgLnByb2R1Y3QtbmFtZSB7XG4gICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgfVxuICBcbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICBcbiAgICAucmF0ZSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBcbiAgICAgIC5yYXRpbmdfY291bnQge1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICB1bCB7XG4gICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICBtYXJnaW46MHB4IDBweCAwcHggNXB4O1xuICBcbiAgICAgICYucmF0aW5nIGxpIHtcbiAgICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnRfY29sb3IpICFpbXBvcnRhbnQ7XG4gIFxuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAuZnVsbC1wb3B1cCB7XG4gICAgLnBvcG92ZXItY29udGVudCB7XG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gNzBweCkgIWltcG9ydGFudDtcbiAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIFxuICAgICAgLml0ZW0tcmFkaW8tY2hlY2tlZCB7XG4gICAgICAgIC5sYWJlbCB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudF9jb2xvcik7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIC5yYWRpby1jaGVja2VkIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudF9jb2xvcik7XG4gIFxuICAgICAgICAgIC5yYWRpby1pbm5lciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnRfY29sb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICBcbiAgICAgIC5pbnB1dC13cmFwcGVyIHtcbiAgICAgICAgLmxhYmVsIHtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGluaXRpYWw7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLmxvYWRlciB7XG4gICAgYm9yZGVyOiA2cHggc29saWQgI2UzZTNlMztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyLXRvcDogNnB4IHNvbGlkIHZhcigtLWFjY2VudF9jb2xvcik7XG4gICAgd2lkdGg6IDQ4cHg7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAvKiBTYWZhcmkgKi9cbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XG4gIH1cbiAgXG4gIC5yaWJib24tZW5kIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdG9wOiAyMHB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBzcGluIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gIFxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB9XG4gIH1cbiAgXG4gIC8qIFNhZmFyaSAqL1xuICBALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XG4gICAgMCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gIFxuICAgIDEwMCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIH1cbiAgfVxuICBcbiAgLmxpc3QgLml0ZW0taW5wdXQuaXRlbS1pbnB1dC1oYXMtZm9jdXM6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyOiAwcHggIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5pdGVtLml0ZW0taW5wdXQge1xuICAgIC5pdGVtLWlubmVyIHtcbiAgICAgIGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbiAgXG4gIC5mb290ZXIgLmJ1dHRvbiB7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC8vRHluYW1pY1xuICAudG9vbGJhciB7XG4gICAgLnRvb2xiYXItYmFja2dyb3VuZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5X2NvbG9yKTtcbiAgICB9XG4gIFxuICAgIC5iYXItYnV0dG9uLFxuICAgIC50b29sYmFyLXRpdGxlIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10b29sYmFyX3RleHRfY29sb3IpO1xuICAgIH1cbiAgXG4gICAgLmJhci1idXR0b24ge1xuICAgICAgaW9uLWJhZGdlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBvcGFjaXR5OiAwLjk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRvb2xiYXItYmFkZ2UtY29sb3IpICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBcbiAgICAgICAgJiB+IGlvbi1pY29uIHtcbiAgICAgICAgICBtYXJnaW46bnVsbCAxLjJyZW0gbnVsbCBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBpb24tYmFkZ2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudF9jb2xvcikgIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgYnV0dG9uLmZhdiB7XG4gICAgY29sb3I6IHZhcigtLWFjY2VudF9jb2xvcik7XG4gIH1cbiAgXG4gIC5wcmltYXJ5IHtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeV9jb2xvcikgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLnByaW1hcnktYmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeV9jb2xvcikgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLmFjY2VudCB7XG4gICAgY29sb3I6IHZhcigtLWFjY2VudF9jb2xvcikgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLmFjY2VudC1iYWNrZ3JvdW5kIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnRfY29sb3IpICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5hY2NlbnQtYm9yZGVyIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudF9jb2xvcikgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLnByaW1hcnktYm9yZGVyIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnlfY29sb3IpICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeV9jb2xvcikgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgaW9uLWFsZXJ0IHtcbiAgICAuYWxlcnQtd3JhcHBlciB7XG4gICAgICAuYWxlcnQtcmFkaW8tZ3JvdXAge1xuICAgICAgICAuYWxlcnQtcmFkaW8tYnV0dG9uW2FyaWEtY2hlY2tlZD1cInRydWVcIl0ge1xuICAgICAgICAgIC5idXR0b24taW5uZXIge1xuICAgICAgICAgICAgLmFsZXJ0LXJhZGlvLWljb24ge1xuICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudF9jb2xvcikgIWltcG9ydGFudDtcbiAgXG4gICAgICAgICAgICAgIC5hbGVydC1yYWRpby1pbm5lciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50X2NvbG9yKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgLmFsZXJ0LXJhZGlvLWxhYmVsIHtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudF9jb2xvcikgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgXG4gICAgICAuYWxlcnQtYnV0dG9uLWdyb3VwIHtcbiAgICAgICAgLmFsZXJ0LWJ1dHRvbiB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudF9jb2xvcikgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuICBcbiAgICAgIC5hbGVydC1pbnB1dC1ncm91cCB7XG4gICAgICAgIC5hbGVydC1pbnB1dC13cmFwcGVyIHtcbiAgICAgICAgICAuYWxlcnQtaW5wdXQ6Zm9jdXMge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkZWRlZGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBcbiAgICAuYWxlcnQtdG9wIHtcbiAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbiAgXG4gIGlvbi1tb2RhbC5taW5pLWNhcnQsXG4gIGlvbi1tb2RhbC5zb3J0LFxuICBpb24tbW9kYWwuZmlsdGVyLFxuICBpb24tbW9kYWwuc2hpcHBpbmcge1xuICAgIGlvbi1iYWNrZHJvcCB7XG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4gICAgICB6LWluZGV4OiAwO1xuICAgIH1cbiAgXG4gICAgLm1vZGFsLXdyYXBwZXIge1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIFxuICAgICAgLmhlYWRlcjphZnRlciB7XG4gICAgICAgIGhlaWdodDogMXB4ICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gIFxuICAgICAgLnRvb2xiYXItYmFja2dyb3VuZCxcbiAgICAgIGlvbi1uYXZiYXIsXG4gICAgICBpb24taGVhZGVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gIFxuICAgICAgLnRvb2xiYXIge1xuICAgICAgICAudG9vbGJhci10aXRsZSB7XG4gICAgICAgICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICBcbiAgICAgICAgLmJhci1idXR0b24ge1xuICAgICAgICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gIFxuICAgICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBpb24tbW9kYWwubWluaS1jYXJ0IHtcbiAgICAubW9kYWwtd3JhcHBlciB7XG4gICAgICBtaW4taGVpZ2h0OiAyMjBweDtcbiAgICB9XG4gIH1cbiAgXG4gIGlvbi1tb2RhbC5zb3J0IHtcbiAgICAubW9kYWwtd3JhcHBlciB7XG4gICAgICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgXG4gICAgICAuc2Nyb2xsLWNvbnRlbnQge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgaW9uLW1vZGFsLmZpbHRlciB7XG4gICAgLm1vZGFsLXdyYXBwZXIge1xuICAgICAgbWluLWhlaWdodDogMTAwJTtcbiAgXG4gICAgICAuc2Nyb2xsLWNvbnRlbnQge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgaW9uLW1vZGFsLnNoaXBwaW5nIHtcbiAgICAubW9kYWwtd3JhcHBlciB7XG4gICAgICBtaW4taGVpZ2h0OiAyODBweDtcbiAgXG4gICAgICAuc2Nyb2xsLWNvbnRlbnQge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLmxvYWRpbmctY3VzdG9tIHtcbiAgICAubG9hZGluZy13cmFwcGVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG4gIFxuICAgIC5sb2FkZXIge1xuICAgICAgYm9yZGVyOiA2cHggc29saWQgI2UzZTNlMztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJvcmRlci10b3A6IDZweCBzb2xpZCB2YXIoLS1hY2NlbnRfY29sb3IpO1xuICAgICAgd2lkdGg6IDQ4cHg7XG4gICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgIC8qIFNhZmFyaSAqL1xuICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xuICAgIH1cbiAgXG4gICAgLmxvYWRlcl9vdXRlciB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gIH1cbiAgXG4gIGxvYWRpbmctY3VzdG9tLW1zZyB7XG4gICAgLmxvYWRpbmctd3JhcHBlciB7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG4gIFxuICAgIC5sb2FkZXIge1xuICAgICAgYm9yZGVyOiA2cHggc29saWQgI2UzZTNlMztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJvcmRlci10b3A6IDZweCBzb2xpZCB2YXIoLS1hY2NlbnRfY29sb3IpO1xuICAgICAgd2lkdGg6IDQ4cHg7XG4gICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgIC8qIFNhZmFyaSAqL1xuICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xuICAgIH1cbiAgXG4gICAgLmxvYWRlcl9vdXRlciB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgfVxuICBcbiAgLmN1c3RvbV9hbGVydCB7XG4gICAgLmFsZXJ0LXdyYXBwZXIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICBsZWZ0OiAwO1xuICBcbiAgICAgIC5hbGVydC1tZXNzYWdlIHtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgYm9yZGVyOiAycHggZGFzaGVkICNlZWU7XG4gICAgICAgIG1hcmdpbjogMCAxMHB4IDEwcHg7XG4gICAgICB9XG4gIFxuICAgICAgLmFsZXJ0LWhlYWQge1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIFxuICAgICAgICAuYWxlcnQtdGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICBcbiAgICAgIC5hbGVydC1idXR0b24tZ3JvdXAge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XG4gIFxuICAgICAgICAuYWxlcnQtYnV0dG9uIHtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgICAgICAgbWFyZ2luOm51bGwgMHB4IG51bGwgbnVsbDtcbiAgXG4gICAgICAgICAgJjpudGgtb2YtdHlwZSgxKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5X2NvbG9yKTtcbiAgICAgICAgICB9XG4gIFxuICAgICAgICAgICY6bnRoLW9mLXR5cGUoMikge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50X2NvbG9yKTtcbiAgICAgICAgICB9XG4gIFxuICAgICAgICAgIHNwYW4uYnV0dG9uLWlubmVyIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLmN1c3RvbV9hbGVydF9jYWxsIHtcbiAgICAuYWxlcnQtd3JhcHBlciB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIGxlZnQ6IDA7XG4gIFxuICAgICAgLy8gLmFsZXJ0LW1lc3NhZ2Uge1xuICAgICAgLy8gICBjb2xvcjogIzAwMDtcbiAgICAgIC8vICAgcGFkZGluZzogOHB4O1xuICAgICAgLy8gICBib3JkZXI6IDJweCBkYXNoZWQgI2VlZTtcbiAgICAgIC8vICAgbWFyZ2luOiAwIDEwcHggMTBweDtcbiAgICAgIC8vIH1cbiAgXG4gICAgICAuYWxlcnQtaGVhZCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgXG4gICAgICAgIC5hbGVydC10aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gIFxuICAgICAgLmFsZXJ0LWJ1dHRvbi1ncm91cCB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcbiAgXG4gICAgICAgIC5hbGVydC1idXR0b24ge1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAgICAgICBtYXJnaW46bnVsbCAwcHggbnVsbCBudWxsO1xuICBcbiAgICAgICAgICAmOm50aC1vZi10eXBlKDEpIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnlfY29sb3IpO1xuICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgJjpudGgtb2YtdHlwZSgyKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnRfY29sb3IpO1xuICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgc3Bhbi5idXR0b24taW5uZXIge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gICJdfQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map