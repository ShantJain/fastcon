(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payment-payment-module"],{

/***/ "das9":
/*!*********************************************************!*\
  !*** ./src/app/pages/payment/payment-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: PaymentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageRoutingModule", function() { return PaymentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _payment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment */ "t5/N");




const routes = [
    {
        path: '',
        component: _payment__WEBPACK_IMPORTED_MODULE_3__["PaymentPage"],
    }
];
let PaymentPageRoutingModule = class PaymentPageRoutingModule {
};
PaymentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PaymentPageRoutingModule);



/***/ }),

/***/ "jcvp":
/*!********************************************!*\
  !*** ./src/app/pages/payment/payment.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #f5f5f5 !important;\n}\n\n.order-details {\n  padding: 10px 10px 10px 10px;\n  margin: 0px;\n  background: #f5f5f5;\n  border-bottom: 1px solid #d3d3d370;\n  border-top: 1px solid #d3d3d370;\n}\n\n.order-details .list .list-header {\n  border: none;\n  background: #fff;\n  padding: 10px !important;\n}\n\n.order-details .list .list-header .label {\n  color: #000 !important;\n  font-weight: 700;\n  text-transform: uppercase;\n  font-size: 1.5rem;\n  border-bottom: 1px solid #eee;\n  padding-bottom: 10px;\n}\n\n.order-details .list .list-header .label div {\n  font-weight: 800;\n}\n\n.order-details .list .item {\n  min-height: initial;\n}\n\n.order-details .list .item span[item-start] {\n  margin: 0px;\n}\n\n.order-details .list .item img {\n  margin: 0px 10px 0px 0px !important;\n}\n\n.order-details .list .item .item-inner {\n  border-bottom: none;\n}\n\n.order-details .list .item .item-inner .input-wrapper .label {\n  margin: 0px;\n  color: #757575;\n}\n\n.order-details .list .item .item-inner .input-wrapper .icon {\n  margin: 0 !important;\n  min-height: 2rem !important;\n  font-size: 2rem !important;\n}\n\n.order-details .list .item .item-inner span[item-end],\n.order-details .list .item .item-inner button[item-end],\n.order-details .list .item .item-inner div[item-end] {\n  margin: 0px 0px 5px 0px;\n}\n\n.order-details .list .item .item-inner .radio {\n  margin: 0px 0px 5px 5px !important;\n}\n\n.order-details .list .ord_total.item .item-inner {\n  border-top: 1px solid #ddd;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: 700;\n  color: #000 !important;\n}\n\n.order-details .list .button {\n  padding: 5px 0px 0px 0px;\n}\n\n.order-details .list:nth-of-type(1) {\n  margin-bottom: 0px !important;\n}\n\n.order-details .list:nth-of-type(2) {\n  margin-bottom: 35px;\n}\n\n.footer {\n  background: #fff;\n  padding: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BheW1lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGdDQUFBO0FBQUo7O0FBR0U7RUFDRSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EsK0JBQUE7QUFBSjs7QUFHTTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FBRFI7O0FBR1E7RUFDRSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7QUFEVjs7QUFHVTtFQUNFLGdCQUFBO0FBRFo7O0FBTU07RUFDRSxtQkFBQTtBQUpSOztBQUtRO0VBQ0UsV0FBQTtBQUhWOztBQU1RO0VBQ0UsbUNBQUE7QUFKVjs7QUFPUTtFQUNFLG1CQUFBO0FBTFY7O0FBUVk7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQU5kOztBQVVZO0VBQ0Usb0JBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0FBUmQ7O0FBWVU7OztFQUdFLHVCQUFBO0FBVlo7O0FBYVU7RUFDRSxrQ0FBQTtBQVhaOztBQWlCTTtFQUNFLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFmUjs7QUFrQk07RUFDRSx3QkFBQTtBQWhCUjs7QUFtQk07RUFDRSw2QkFBQTtBQWpCUjs7QUFvQk07RUFDRSxtQkFBQTtBQWxCUjs7QUF1QkU7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUFwQkoiLCJmaWxlIjoicGF5bWVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6ICNmNWY1ZjUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5vcmRlci1kZXRhaWxzIHtcbiAgICBwYWRkaW5nOjEwcHggMTBweCAxMHB4IDEwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QzZDNkMzcwO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDNkM2QzNzA7XG5cbiAgICAubGlzdCB7XG4gICAgICAubGlzdC1oZWFkZXIge1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcblxuICAgICAgICAubGFiZWwge1xuICAgICAgICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuXG4gICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5pdGVtIHtcbiAgICAgICAgbWluLWhlaWdodDogaW5pdGlhbDtcbiAgICAgICAgc3BhbltpdGVtLXN0YXJ0XSB7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBpbWcge1xuICAgICAgICAgIG1hcmdpbjowcHggMTBweCAwcHggMHB4IWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pdGVtLWlubmVyIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuXG4gICAgICAgICAgLmlucHV0LXdyYXBwZXIge1xuICAgICAgICAgICAgLmxhYmVsIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgIGNvbG9yOiAjNzU3NTc1O1xuICAgICAgICAgICAgICAvLyBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAycmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHNwYW5baXRlbS1lbmRdLFxuICAgICAgICAgIGJ1dHRvbltpdGVtLWVuZF0sXG4gICAgICAgICAgZGl2W2l0ZW0tZW5kXSB7XG4gICAgICAgICAgICBtYXJnaW46MHB4IDBweCA1cHggMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5yYWRpbyB7XG4gICAgICAgICAgICBtYXJnaW46MHB4IDBweCA1cHggNXB4IWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgfVxuXG4gICAgICAub3JkX3RvdGFsLml0ZW0gLml0ZW0taW5uZXIge1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgLmJ1dHRvbiB7XG4gICAgICAgIHBhZGRpbmc6NXB4IDBweCAwcHggMHB4O1xuICAgICAgfVxuXG4gICAgICAmOm50aC1vZi10eXBlKDEpIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgICY6bnRoLW9mLXR5cGUoMikge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5mb290ZXIge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZzogOHB4O1xuICB9Il19 */");

/***/ }),

/***/ "mDHw":
/*!*************************************************!*\
  !*** ./src/app/pages/payment/payment.module.ts ***!
  \*************************************************/
/*! exports provided: PaymentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageModule", function() { return PaymentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../pipes/pipes.module */ "iTUp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _payment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./payment */ "t5/N");
/* harmony import */ var _payment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payment-routing.module */ "das9");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");








let PaymentPageModule = class PaymentPageModule {
};
PaymentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _payment__WEBPACK_IMPORTED_MODULE_4__["PaymentPage"],
        ],
        imports: [
            _payment_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentPageRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"].forChild(),
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__["PipesModule"]
        ],
    })
], PaymentPageModule);



/***/ }),

/***/ "nXDu":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/payment.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{\"ORDER_RECEIVED\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  \n  <ion-item style=\"text-align: center;\" *ngIf=\"orderDetails && (orderDetails.status=='processing' || orderDetails.status=='on-hold')\"\n  >\n    <h2>{{'ORDER_CREATED_THANKYOU_MESSAGE' | translate}}</h2>\n  </ion-item>\n  <ion-item text-wrap text-center\n    *ngIf=\"orderDetails && orderDetails.status==='failed'\">\n    <h2>{{'ORDER_FAILED' | translate}}</h2>\n  </ion-item>\n\n  <div class=\"order-details\">\n    <ion-list *ngIf=\"orderDetails\">\n      <ion-list-header mode=\"ios\" lines=\"none\">\n        {{\"ORDER_DETAILS\" | translate}}\n      </ion-list-header>\n      <ion-item lines=\"none\">\n        <span>{{\"ORDER_ID\"| translate}}</span>\n        <span slot=\"end\">{{orderDetails.id}} </span>\n      </ion-item>\n\n      <ion-item *ngFor=\"let item of orderDetails.line_items\">\n        <div>{{item.name}} x{{item.quantity}}</div>\n        <div slot=\"end\">{{item.total | money : settings.all.settings }}</div>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <span>{{\"DATE\" | translate}}</span>\n        <span slot=\"end\">{{orderDetails.date_created | date:'MMM dd,yyyy hh:mma'}}</span\n        >\n      </ion-item>\n      <ion-item lines=\"none\">\n        <span>{{\"SHIPPING_CHARGE\" | translate}}:</span>\n        <span slot=\"end\"><span>{{orderDetails.currency_symbol}}</span>{{orderDetails.shipping_total}}\n        </span>\n      </ion-item>\n      <ion-item lines=\"none\" *ngIf=\"orderDetails.fee_lines && orderDetails.fee_lines[0]\"\n      >\n        <span>{{orderDetails.fee_lines[0].name}}</span>\n        <span slot=\"end\"\n          ><span>{{orderDetails.currency_symbol}}</span\n          >{{orderDetails.fee_lines[0].total}}\n        </span>\n      </ion-item>\n      <ion-item\n        lines=\"none\"\n        *ngIf=\"orderDetails.shipping_lines && orderDetails.shipping_lines[0]\"\n      >\n        <span>{{\"SHIPPING\" | translate}}:</span>\n        <span slot=\"end\">{{orderDetails.shipping_lines[0].method_title}} </span>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <span>{{\"PAYMENT_METHODS\" | translate}}</span>\n        <span slot=\"end\" text-capitalize\n          >{{orderDetails.payment_method_title ||\n          orderDetails.payment_method}}</span\n        >\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <span>{{\"STATUS\" | translate}}</span>\n        <span slot=\"end\" text-capitalize>{{orderDetails.status}}</span>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <span>{{\"TOTAL_AMOUNT\" | translate}}</span>\n        <span slot=\"end\"\n          >{{calculatePrice(orderDetails) | money: settings.all.settings}} (inc.\n          taxes)\n        </span>\n      </ion-item>\n    </ion-list>\n\n    <ion-list *ngIf=\"orderDetails && orderDetails.billing\">\n      <ion-list-header mode=\"ios\" lines=\"none\">\n        {{\"CUSTOMER_DETAILS\" | translate}}\n      </ion-list-header>\n      <ion-item>\n        <span>{{\"NAME\" | translate}}</span>\n        <span slot=\"end\"\n          >{{orderDetails.billing.first_name + \" \"\n          +orderDetails.billing.last_name}}</span\n        >\n      </ion-item>\n      <ion-item>\n        <span>{{\"EMAIL\" | translate}}</span>\n        <span slot=\"end\">{{orderDetails.billing.email}}</span>\n      </ion-item>\n      <ion-item>\n        <span>{{\"PHONE_NUMBER\" | translate}}</span>\n        <span slot=\"end\">{{orderDetails.billing.phone}}</span>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-button expand=\"full\" style=\"height: 40px;\" class=\"accent-background\" (click)=\"goToHome()\"\n    *ngIf=\"(orderDetails && (orderDetails.status=='processing' || orderDetails.status=='on-hold'))\"\n  > {{\"CONTINUE_SHOPPING\" | translate}}\n  </ion-button>\n</ion-footer>\n");

/***/ }),

/***/ "t5/N":
/*!******************************************!*\
  !*** ./src/app/pages/payment/payment.ts ***!
  \******************************************/
/*! exports provided: PaymentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPage", function() { return PaymentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_payment_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./payment.html */ "nXDu");
/* harmony import */ var _payment_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payment.scss */ "jcvp");
/* harmony import */ var _services_woocommerce_woocommerce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/woocommerce/woocommerce */ "OkR+");
/* harmony import */ var _services_loading_loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/loading/loading */ "qGMB");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../app.config */ "aR35");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");
/* harmony import */ var _services_providers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/providers */ "fC+V");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");












let PaymentPage = class PaymentPage {
    constructor(navCtrl, iab, WC, settings, platform, loader, toast, translate, route) {
        this.navCtrl = navCtrl;
        this.iab = iab;
        this.WC = WC;
        this.settings = settings;
        this.platform = platform;
        this.loader = loader;
        this.toast = toast;
        this.translate = translate;
        this.route = route;
        this.isShoppingComplete = false;
        this.route.queryParams.subscribe(params => {
            this.orderDetails = params;
            if (this.orderDetails.payment_method == "cod" ||
                this.orderDetails.payment_method == "bacs" ||
                this.orderDetails.payment_method == "cheque") {
                this.isShoppingComplete = true;
            }
            else {
                this.payment();
            }
        });
    }
    ionViewDidEnter() {
        console.log("ionViewDidEnter PaymentPage");
        this.initializeBackButtonCustomHandler();
        /*this.navBar.backButtonClick = (e: UIEvent) => {
          // todo something
          this.navCtrl.popToRoot();
        };*/
    }
    ionViewWillLeave() {
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    }
    initializeBackButtonCustomHandler() {
        /*this.unregisterBackButtonAction = this.platform.registerBackButtonAction(
          () => {
            let activePortal =
              this.ionicApp._loadingPortal.getActive() ||
              this.ionicApp._modalPortal.getActive() ||
              this.ionicApp._toastPortal.getActive() ||
              this.ionicApp._overlayPortal.getActive();
            if (!activePortal) {
              this.navCtrl.popToRoot();
            }
          },
          1
        );*/
    }
    refreshPage(payment_id) {
        this.loader.show();
        if (payment_id) {
            this.WC.updateOrder(this.orderDetails.id, "processing", payment_id).then((res) => {
                this.orderDetails = res;
                this.loader.dismiss();
            }, (err) => {
                console.log(err);
                this.toast.showError();
                this.loader.dismiss();
            });
        }
        else {
            this.WC.getOrder(this.orderDetails.id).then((res) => {
                this.orderDetails = res;
                this.loader.dismiss();
            }, (err) => {
                console.log(err);
                this.toast.showError();
                this.loader.dismiss();
            });
        }
    }
    goToHome() {
        this.navCtrl.navigateRoot("home");
    }
    payment() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var obj = this;
            if (this.orderDetails.status && this.orderDetails.status === "failed") {
                return;
            }
            let payment_method = "?payment_method=" + this.orderDetails.payment_method;
            let order_id = "&ORDER_ID=" + this.orderDetails.id;
            let cus_id = "&CUST_ID=" + this.orderDetails.customer_id;
            if (this.orderDetails.payment_method == "razorpay") {
                this.razorpayCheckout();
                return;
            }
            obj.loader.show();
            let browser;
            if (this.orderDetails.payment_method == "wallet") {
                browser = this.iab.create(_app_config__WEBPACK_IMPORTED_MODULE_5__["App"].url +
                    "/wp-json/wc/v2/wallet/payment" +
                    payment_method +
                    order_id +
                    cus_id, "_self", { location: "no", clearcache: "yes", clearsessioncache: "yes" });
            }
            else {
                browser = this.iab.create(_app_config__WEBPACK_IMPORTED_MODULE_5__["App"].url + "/wp-json/wc/v2/payment" + payment_method + order_id + cus_id, "_self", {
                    location: "no",
                    clearcache: "yes",
                    clearsessioncache: "yes",
                    hidden: "yes",
                });
            }
            browser.on("exit").subscribe((event) => {
                console.log(event);
                this.refreshPage();
            });
            switch (this.orderDetails.payment_method) {
                case "paytm":
                    browser.on("loadstart").subscribe((event) => {
                        if (event.url.includes("/order-received")) {
                            browser.close();
                        }
                    });
                    browser.on("loadstop").subscribe((event) => {
                        if (event.url.includes("paytm.com") ||
                            event.url.includes("paytm.in")) {
                            browser.show();
                            obj.loader.dismiss();
                        }
                    });
                    break;
                case "wallet":
                    browser.on("loadstart").subscribe((event) => {
                        obj.loader.dismiss();
                        console.log(event);
                    });
                    browser.on("loadstop").subscribe((event) => {
                        browser.close();
                    });
                    break;
                case "pumcp":
                    let openpumcp = false;
                    browser.on("loadstop").subscribe((event) => {
                        if (event.url.includes("payu")) {
                            browser.show();
                            openpumcp = true;
                            obj.loader.dismiss();
                        }
                        if (event.url.includes(_app_config__WEBPACK_IMPORTED_MODULE_5__["App"].url) && openpumcp) {
                            browser.close();
                        }
                    });
                    break;
                case "instamojo":
                    browser.show();
                    obj.loader.dismiss();
                    browser.on("loadstart").subscribe((event) => {
                        if (event.url.includes("/order-received")) {
                            browser.close();
                        }
                    });
                    "";
                    // browser.on("loadstop").subscribe(event => {
                    //   if (event.url.includes('payu')) {
                    //     browser.show();
                    //     openedgateway = true;
                    //     load.dismiss();
                    //   }
                    // });
                    break;
                case "ccavenue":
                    let openccavenue = false;
                    browser.on("loadstop").subscribe((event) => {
                        if (event.url.includes("ccavenue")) {
                            browser.show();
                            obj.loader.dismiss();
                            openccavenue = true;
                        }
                        browser.on("loadstart").subscribe((event) => {
                            if (event.url.includes(_app_config__WEBPACK_IMPORTED_MODULE_5__["App"].url) && openccavenue) {
                                browser.close();
                            }
                        });
                    });
                    break;
                case "paypal":
                    //browser.show();
                    browser.on("loadstart").subscribe((event) => {
                        if (event.url.includes("/order-received")) {
                            browser.close();
                        }
                    });
                    browser.on("loadstop").subscribe((event) => {
                        if (event.url.includes("/order-pay")) {
                            browser.show();
                            obj.loader.dismiss();
                        }
                    });
                    break;
            }
        });
    }
    razorpayCheckout() {
        let options = {
            description: "Order  " + this.orderDetails.id,
            image: "",
            currency: this.orderDetails.currency,
            key: "rzp_live_T4lyi6Ty1Kq76b",
            amount: parseFloat(this.orderDetails.total) * 100,
            name: _app_config__WEBPACK_IMPORTED_MODULE_5__["App"].store,
            prefill: {
                email: this.orderDetails.billing.email || "",
                contact: this.orderDetails.billing.phone || "",
                name: this.orderDetails.billing.first_name +
                    " " +
                    this.orderDetails.billing.last_name,
            },
            theme: {
                color: this.settings.all.appSettings.primary_color,
            },
            modal: {
                ondismiss: function () {
                    alert("Payment Cancelled");
                },
            },
        };
        //Below are js code which is not working
        /*let successCallback = function (payment_id) {
          //alert('payment_id: ' + payment_id);
          this.refreshPage(payment_id);
        };
    
        let cancelCallback = function (error) {
          //alert(error.description + ' (Error ' + error.code + ')');
          this.refreshPage();
        };*/
        //Working ported typescript
        RazorpayCheckout.open(options, (payment_id) => {
            // alert("payment_id: " + payment_id);
            this.refreshPage(payment_id);
        }, (error) => {
            //  alert(error.description + " (Error " + error.code + ")");
            this.refreshPage();
        });
    }
    calculatePrice(x) {
        return x.prices_include_tax
            ? x.total
            : (Number(x.total) + Number(x.total_tax)).toFixed(2);
    }
};
PaymentPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"] },
    { type: _services_woocommerce_woocommerce__WEBPACK_IMPORTED_MODULE_3__["WooCommerceProvider"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_9__["SettingsProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
    { type: _services_loading_loading__WEBPACK_IMPORTED_MODULE_4__["LoadingProvider"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_9__["ToastProvider"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"] }
];
PaymentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: "page-payment",
        template: _raw_loader_payment_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_payment_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PaymentPage);



/***/ })

}]);
//# sourceMappingURL=pages-payment-payment-module.js.map