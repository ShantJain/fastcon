(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-wallet-wallet-module"],{

/***/ "6Yfc":
/*!******************************************!*\
  !*** ./src/app/pages/wallet/wallet.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("page-wallet .no-transaction {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n}\npage-wallet .header::after {\n  display: none;\n}\npage-wallet .item-inner {\n  border-bottom: none !important;\n}\npage-wallet .loader_outer {\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\npage-wallet .wallet-transaction {\n  padding: 16px 16px;\n}\npage-wallet .wallet-transaction .item {\n  box-shadow: 0px 0px 2px 1px #eee;\n  margin-bottom: 10px;\n  padding: 0 6px;\n}\npage-wallet .wallet-transaction .item:first-child {\n  margin-top: 10px;\n}\npage-wallet .wallet-transaction .item .item-inner {\n  align-items: flex-start;\n  padding: 0px;\n}\npage-wallet .wallet-transaction .item .item-inner .label {\n  overflow: visible;\n  white-space: normal;\n  text-overflow: initial;\n}\npage-wallet .wallet-transaction .item .item-inner .label div:nth-of-type(1) {\n  margin-bottom: 10px;\n}\npage-wallet .wallet-transaction .item .item-inner .credit {\n  color: green;\n}\npage-wallet .wallet-transaction .item .item-inner .debit {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3dhbGxldC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQUo7QUFHRTtFQUNFLGFBQUE7QUFESjtBQUlFO0VBQ0UsOEJBQUE7QUFGSjtBQUtFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUhKO0FBTUU7RUFDRSxrQkFBQTtBQUpKO0FBS0k7RUFDRSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUhOO0FBS007RUFDRSxnQkFBQTtBQUhSO0FBTU07RUFDRSx1QkFBQTtFQUNBLFlBQUE7QUFKUjtBQU1RO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBSlY7QUFPWTtFQUNFLG1CQUFBO0FBTGQ7QUFVUTtFQUNFLFlBQUE7QUFSVjtBQVdRO0VBQ0UsVUFBQTtBQVRWIiwiZmlsZSI6IndhbGxldC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicGFnZS13YWxsZXQge1xuICAubm8tdHJhbnNhY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5oZWFkZXI6OmFmdGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLml0ZW0taW5uZXIge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmUhaW1wb3J0YW50O1xuICB9XG5cbiAgLmxvYWRlcl9vdXRlciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC53YWxsZXQtdHJhbnNhY3Rpb24ge1xuICAgIHBhZGRpbmc6bnVsbCAxNnB4IG51bGwgMTZweDtcbiAgICAuaXRlbSB7XG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDJweCAxcHggI2VlZTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICBwYWRkaW5nOjAgNnB4O1xuXG4gICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIH1cblxuICAgICAgLml0ZW0taW5uZXIge1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgcGFkZGluZzpudWxsIDBweCBudWxsIG51bGw7XG5cbiAgICAgICAgLmxhYmVsIHtcbiAgICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGluaXRpYWw7XG5cbiAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgJjpudGgtb2YtdHlwZSgxKSB7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmNyZWRpdCB7XG4gICAgICAgICAgY29sb3I6IGdyZWVuO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRlYml0IHtcbiAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "IUnk":
/*!*******************************************************!*\
  !*** ./src/app/pages/wallet/wallet-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: WalletPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletPageRoutingModule", function() { return WalletPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _wallet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wallet */ "P9yf");




const routes = [
    {
        path: '',
        component: _wallet__WEBPACK_IMPORTED_MODULE_3__["WalletPage"],
    }
];
let WalletPageRoutingModule = class WalletPageRoutingModule {
};
WalletPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], WalletPageRoutingModule);



/***/ }),

/***/ "P9yf":
/*!****************************************!*\
  !*** ./src/app/pages/wallet/wallet.ts ***!
  \****************************************/
/*! exports provided: WalletPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletPage", function() { return WalletPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_wallet_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./wallet.html */ "zVaT");
/* harmony import */ var _wallet_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wallet.scss */ "6Yfc");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _services_settings_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/settings/settings */ "3tmi");
/* harmony import */ var _services_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/providers */ "fC+V");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_Events__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/Events */ "3C+A");









let WalletPage = class WalletPage {
    constructor(navCtrl, settings, rest, toast, zone, alertCtrl, events, loader, translate) {
        this.navCtrl = navCtrl;
        this.settings = settings;
        this.rest = rest;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.loader = loader;
        this.translate = translate;
        this.rest.getWalletDetails().then((data) => {
            console.log(data);
            zone.run(() => {
                this.wallet = JSON.parse(data.data);
            });
        }).catch(err => {
            toast.showError();
        });
    }
    backHome() {
        this.navCtrl.back();
    }
    ionViewDidEnter() {
        console.log('ionViewDidEnter WalletPage');
    }
    isArray(transaction) {
        return (transaction instanceof Array);
    }
    addMoney() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.translate.get(['ADD_MONEY_TO_WALLET', 'AMOUNT', 'CANCEL', 'OK']).subscribe(x => {
                this.presentAlert(x.ADD_MONEY_TO_WALLET, [
                    {
                        name: 'amount',
                        placeholder: x.AMOUNT,
                        type: 'number'
                    }
                ], [
                    {
                        text: x.CANCEL,
                        role: 'cancel'
                    },
                    {
                        text: x.OK,
                        handler: data => {
                            this.loader.show();
                            this.rest.addMoneyToCart(data.amount).then((data) => {
                                console.log(data);
                                this.loader.dismiss();
                                let res = JSON.parse(data.data);
                                this.events.publish("cartchanged");
                                if (res.code) {
                                    this.goTo('checkout', {});
                                }
                                this.toast.show(res.message);
                            }).catch(err => {
                                this.loader.dismiss();
                                this.toast.showError();
                                console.log(err);
                            });
                        }
                    }
                ]);
            });
        });
    }
    presentAlert(header, message, buttons) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let confirm = yield this.alertCtrl.create({
                header: header,
                inputs: message,
                buttons: buttons
            });
            yield confirm.present();
        });
    }
    goTo(page, params) {
        let navigationExtras = { queryParams: params };
        this.navCtrl.navigateForward([page], navigationExtras);
    }
};
WalletPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
    { type: _services_settings_settings__WEBPACK_IMPORTED_MODULE_4__["SettingsProvider"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_5__["RestProvider"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_5__["ToastProvider"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _services_Events__WEBPACK_IMPORTED_MODULE_8__["Events"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_5__["LoadingProvider"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }
];
WalletPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'page-wallet',
        template: _raw_loader_wallet_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_wallet_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], WalletPage);



/***/ }),

/***/ "qzon":
/*!***********************************************!*\
  !*** ./src/app/pages/wallet/wallet.module.ts ***!
  \***********************************************/
/*! exports provided: WalletPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletPageModule", function() { return WalletPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _wallet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wallet */ "P9yf");
/* harmony import */ var _wallet_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wallet-routing.module */ "IUnk");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







let WalletPageModule = class WalletPageModule {
};
WalletPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _wallet__WEBPACK_IMPORTED_MODULE_3__["WalletPage"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _wallet_routing_module__WEBPACK_IMPORTED_MODULE_4__["WalletPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"].forChild()
        ],
    })
], WalletPageModule);



/***/ }),

/***/ "zVaT":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wallet/wallet.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button mode=\"md\" fill=\"clear\" icon-only (click)=\"backHome()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{'WALLET' | translate}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <span item-end [innerHTML]=\"(wallet && wallet.balance) ? wallet.balance : '-.--'\"></span>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-row>\n    <ion-col>\n      <ion-button icon-start class=\"accent-background\" full (click)=\"addMoney()\">\n        <ion-icon name=\"add\"></ion-icon>\n        {{\"ADD_MONEY\" | translate}}\n      </ion-button>\n    </ion-col>\n    <ion-col *ngIf=\"settings.appSettings.referearn\">\n      <ion-button icon-start class=\"accent-background\" full (click)=\"goTo('referEarn','')\">\n        <ion-icon name=\"share-alt\"></ion-icon>\n       {{\"REFER_AND_EARN\" | translate}}\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-header>\n\n<ion-content>\n  <div class=\"loader_outer\" *ngIf=\"!wallet\">\n    <div class=\"loader\"></div>\n  </div>\n  <ng-container *ngIf=\"wallet\">\n    <ion-list class=\"wallet-transaction\" *ngIf=\"isArray(wallet.transaction);else NoTransaction\">\n      <ion-item no-padding *ngFor=\"let t of wallet.transaction\">\n        <div [innerHTML]=\"t.details\"></div>\n        <div [innerHTML]=\"t.date\"></div>\n        <div [innerHTML]=\"t.amount\" item-end [class]=\"t.type=='credit'?'credit':'debit'\"></div>\n      </ion-item>\n    </ion-list>\n    <ng-template #NoTransaction>\n      <div class=\"no-transaction\" [innerHtml]=\"wallet.transaction\"></div>\n    </ng-template>\n  </ng-container>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=pages-wallet-wallet-module.js.map