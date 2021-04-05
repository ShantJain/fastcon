(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-notification-notification-module"],{

/***/ "3Oss":
/*!******************************************************!*\
  !*** ./src/app/pages/notification/notification.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #f5f5f5;\n}\n\n.div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100%;\n  color: var(--accent_color);\n  padding-top: 40%;\n  text-align: center;\n}\n\n.div .icon {\n  font-size: 4rem;\n}\n\nion-item-sliding {\n  margin-bottom: 8px;\n}\n\n.notification-item .icon {\n  font-size: 3rem;\n}\n\n.notification-item .label-md {\n  margin: 8px 8px 8px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vdGlmaWNhdGlvbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNHO0VBQ0MscUJBQUE7QUFBSjs7QUFFRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUFJO0VBQ0UsZUFBQTtBQUVOOztBQUVFO0VBQ0Usa0JBQUE7QUFDSjs7QUFHSTtFQUNFLGVBQUE7QUFBTjs7QUFFSTtFQUNFLHFCQUFBO0FBQU4iLCJmaWxlIjoibm90aWZpY2F0aW9uLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgIGlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIH1cbiAgLmRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50X2NvbG9yKSA7XG4gICAgcGFkZGluZy10b3A6IDQwJTs7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC5pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICB9XG4gIH1cblxuICBpb24taXRlbS1zbGlkaW5nIHtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIH1cblxuICAubm90aWZpY2F0aW9uLWl0ZW0ge1xuICAgIC5pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICB9XG4gICAgLmxhYmVsLW1kIHtcbiAgICAgIG1hcmdpbjo4cHggOHB4IDhweCAwO1xuICAgIH1cbiAgfVxuIl19 */");

/***/ }),

/***/ "UUPU":
/*!***********************************************************!*\
  !*** ./src/app/pages/notification/notification.module.ts ***!
  \***********************************************************/
/*! exports provided: NotificationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPageModule", function() { return NotificationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification */ "YsIU");
/* harmony import */ var ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-image-loader-v5 */ "JBbo");
/* harmony import */ var _notification_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notification-routing.module */ "lyFq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "eHpL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");









let NotificationPageModule = class NotificationPageModule {
};
NotificationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _notification__WEBPACK_IMPORTED_MODULE_3__["NotificationPage"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"],
            _notification_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotificationPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"].forChild(),
            ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_4__["IonicImageLoaderModule"]
        ], providers: [
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__["WebView"]
        ]
    })
], NotificationPageModule);



/***/ }),

/***/ "YsIU":
/*!****************************************************!*\
  !*** ./src/app/pages/notification/notification.ts ***!
  \****************************************************/
/*! exports provided: NotificationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPage", function() { return NotificationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_notification_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./notification.html */ "yRJv");
/* harmony import */ var _notification_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification.scss */ "3Oss");
/* harmony import */ var _services_notif_notif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/notif/notif */ "EEhM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






let NotificationPage = class NotificationPage {
    constructor(navCtrl, _notif, alert) {
        this.navCtrl = navCtrl;
        this._notif = _notif;
        this.alert = alert;
        this.notif = [];
        console.log(_notif.all);
    }
    backHome() {
        this.navCtrl.back();
    }
    showAlert(x) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                header: x.title,
                message: x.body,
                buttons: ['OK']
            });
        });
    }
    remove(x) {
        this._notif.remove(x.id);
    }
    // clear(){
    //   this.notif=[]; 
    //   this._notif.clear;
    // }
    ionViewDidEnter() {
        this.notif = this._notif.all.reverse();
        console.log('ionViewDidEnter AccountNotificationPage');
    }
};
NotificationPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _services_notif_notif__WEBPACK_IMPORTED_MODULE_3__["NotifProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
NotificationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'page-notification',
        template: _raw_loader_notification_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_notification_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NotificationPage);



/***/ }),

/***/ "lyFq":
/*!*******************************************************************!*\
  !*** ./src/app/pages/notification/notification-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: NotificationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPageRoutingModule", function() { return NotificationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification */ "YsIU");




const routes = [
    {
        path: '',
        component: _notification__WEBPACK_IMPORTED_MODULE_3__["NotificationPage"],
    }
];
let NotificationPageRoutingModule = class NotificationPageRoutingModule {
};
NotificationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], NotificationPageRoutingModule);



/***/ }),

/***/ "yRJv":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notification/notification.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border no-lines>\n\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button mode=\"md\" fill=\"clear\" icon-only (click)=\"backHome()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      {{\"NOTIFICATIONS\" | translate}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"div\" *ngIf=\"notif.length == 0\">\n    <ion-grid>\n      <ion-row align-items-center>\n        <ion-col align-self-center text-center>\n          <ion-icon name=\"notifications-off\" class=\"accent\"></ion-icon>\n          <h4 margin-top class=\"accent\">{{\"NO_NOTIFY\" | translate}}</h4>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <ion-list no-lines>\n    <ion-item-sliding *ngFor=\"let x of notif\" class=\"notification-item\">\n      <ion-item text-wrap>\n        <ion-item no-lines no-padding (click)=\"showAlert(x)\">\n          <ion-icon name=\"pricetag-outline\" item-start></ion-icon>\n          <div class=\"notification-content\">\n            <h3>{{x.title}}</h3>\n            <p>{{x.body}}</p>\n          </div>\n        </ion-item>\n        <img-loader useImg [src]=\"x.bigPicture\" *ngIf=\"x.bigPicture && x.bigPicture!==''\"></img-loader>\n\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-button small class=\"accent-background\" tappable (click)=\"remove(x)\">\n          <ion-icon name=\"trash\"></ion-icon>\n          {{\"REMOVE\" | translate}}\n        </ion-button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=pages-notification-notification-module.js.map