(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cart-cart-module"],{

/***/ "0/KU":
/*!*********************************************!*\
  !*** ./src/app/pages/cart/coupon/coupon.ts ***!
  \*********************************************/
/*! exports provided: CouponPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponPage", function() { return CouponPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_coupon_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./coupon.html */ "VmbE");
/* harmony import */ var _coupon_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coupon.scss */ "N2tc");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _services_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/providers */ "fC+V");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_rest_rest__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/rest/rest */ "X4wO");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");









let CouponPage = class CouponPage {
    constructor(route, navCtrl, WC, toast, viewCtrl, zone, rest, loader, translate, platfrom) {
        this.route = route;
        this.navCtrl = navCtrl;
        this.WC = WC;
        this.toast = toast;
        this.viewCtrl = viewCtrl;
        this.zone = zone;
        this.rest = rest;
        this.loader = loader;
        this.translate = translate;
        this.inputCoupon = "";
        this.dir = platfrom.isRTL ? 'rtl' : 'ltr';
        this.route.queryParams.subscribe(params => {
            this.pakage = params.pakage;
            this.appliedCoupon = params.appliedCoupon;
        });
        this.WC.getCoupons().then((res) => {
            console.log(res);
            this.zone.run(() => {
                this.coupons = res;
            });
        }, (err) => {
            this.toast.showError();
        });
    }
    dismiss(data) {
        this.viewCtrl.dismiss(data);
    }
    ionViewDidEnter() {
        console.log('ionViewDidEnter CouponPage');
    }
    applyCoupon(coupon) {
        console.log(this.appliedCoupon);
        for (let c of this.appliedCoupon) {
            console.log(c);
            if (c['code'].toString().toUpperCase() === coupon.toUpperCase()) {
                this.toast.show("Coupon Already Applied");
                return;
            }
        }
        this.loader.show();
        this.rest.applyCoupon(this.pakage, coupon).then((res) => {
            this.loader.dismiss();
            console.log(res.data);
            let data = JSON.parse(res.data);
            this.zone.run(() => {
                if (data.code && data.code == 201) {
                    if (data.message && data.message.length > 0) {
                        this.errMsg = data.message.join();
                    }
                    else {
                        this.translate.get(['INVALID_COUPON']).subscribe(x => {
                            this.errMsg = x.INVALID_COUPON;
                        });
                    }
                }
                else if (data.code && data.code == 202) {
                    if (data.message && data.message !== '') {
                        this.errMsg = data.message;
                    }
                    else {
                        this.translate.get(['INVALID_COUPON']).subscribe(x => {
                            this.errMsg = x.INVALID_COUPON;
                        });
                    }
                }
                else {
                    this.dismiss(data);
                }
            });
        }).catch(err => {
            this.loader.dismiss();
            console.log(err);
            this.translate.get(['ERROR']).subscribe(x => {
                this.toast.show(x.ERROR);
            });
        });
    }
    toggleERR() {
        this.errMsg = undefined;
    }
};
CouponPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_4__["WooCommerceProvider"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_4__["ToastProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgZone"] },
    { type: _services_rest_rest__WEBPACK_IMPORTED_MODULE_7__["RestProvider"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_4__["LoadingProvider"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] }
];
CouponPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'page-coupon',
        template: _raw_loader_coupon_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_coupon_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CouponPage);



/***/ }),

/***/ "2Y+E":
/*!****************************************************!*\
  !*** ./src/app/pages/cart/coupon/coupon.module.ts ***!
  \****************************************************/
/*! exports provided: CouponPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponPageModule", function() { return CouponPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _coupon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coupon */ "0/KU");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






let CouponPageModule = class CouponPageModule {
};
CouponPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _coupon__WEBPACK_IMPORTED_MODULE_3__["CouponPage"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"].forChild()
        ],
        entryComponents: [_coupon__WEBPACK_IMPORTED_MODULE_3__["CouponPage"]],
        exports: [_coupon__WEBPACK_IMPORTED_MODULE_3__["CouponPage"]]
    })
], CouponPageModule);



/***/ }),

/***/ "42UM":
/*!*********************************************************************!*\
  !*** ./src/app/pages/cart/calculate-shipping/calculate-shipping.ts ***!
  \*********************************************************************/
/*! exports provided: CalculateShippingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculateShippingPage", function() { return CalculateShippingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_calculate_shipping_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./calculate-shipping.html */ "yxe9");
/* harmony import */ var _calculate_shipping_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calculate-shipping.scss */ "AGc/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/providers */ "fC+V");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");









let CalculateShippingPage = class CalculateShippingPage {
    constructor(navCtrl, route, formBuilder, platform, viewCtrl, translate, settings) {
        this.navCtrl = navCtrl;
        this.route = route;
        this.formBuilder = formBuilder;
        this.viewCtrl = viewCtrl;
        this.translate = translate;
        this.settings = settings;
        this.countries = [];
        this.states = [];
        this.countryOpts = {};
        this.stateOpts = {};
        this.data = { "country": "", "state": "", "postcode": "" };
        this.dir = platform.isRTL ? 'rtl' : 'ltr';
        ;
        this.translate.get(['SELECT_COUNTRY', 'SELCT_COUNTRY_DESC', 'SELECT_STATE', 'SELCT_STATE_DESC']).subscribe((x) => {
            this.countryOpts = {
                //title: x.SELECT_COUNTRY,
                subTitle: x.SELCT_COUNTRY_DESC
            };
            this.stateOpts = {
                // title: x.SELECT_STATE,
                subTitle: x.SELCT_STATE_DESC
            };
        });
        this.form = this.formBuilder.group({});
    }
    set pakage(d) {
        this.data = d;
    }
    ionViewDidEnter() {
        console.log('ionViewDidEnter CalculateShippingPage');
        this.countries = this.settings.countryList;
        this.form = this.formBuilder.group({
            country: [this.data.country, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
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
};
CalculateShippingPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_4__["SettingsProvider"] }
];
CalculateShippingPage.propDecorators = {
    pakage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"], args: ["pakage",] }]
};
CalculateShippingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'page-calculate-shipping',
        template: _raw_loader_calculate_shipping_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_calculate_shipping_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CalculateShippingPage);



/***/ }),

/***/ "AGc/":
/*!***********************************************************************!*\
  !*** ./src/app/pages/cart/calculate-shipping/calculate-shipping.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".list {\n  margin: 10px 10px;\n  background: #fff;\n  padding: 10px 10px 20px;\n}\n.list .item.item-block {\n  margin-top: 4px;\n}\n.list .item.item-block .label[stacked] {\n  margin-bottom: 0px;\n  color: var(--secondary_text_color);\n}\n.list .item.item-block ion-input {\n  border-bottom: 1px solid #c0c0bd;\n  border-radius: 2px;\n}\n.list .item.item-block ion-input input.text-input {\n  margin-top: 0px !important;\n  margin-bottom: 2px !important;\n  font-size: 1.4rem !important;\n  width: calc(100% - 16px) !important;\n}\n.list .item.item-block ion-select {\n  border-bottom: 1px solid #c0c0c0 !important;\n  border-radius: 2px !important;\n  padding: 0px !important;\n  margin-top: 0px !important;\n}\n.list .item.item-block ion-select .select-text,\n.list .item.item-block ion-select .select-text-placeholder {\n  padding: 0px;\n  font-size: 1.4rem;\n}\n.list .item.item-block ion-select .select-icon {\n  content: url('arrow-down.svg') !important;\n  margin: 0px;\n  width: 15px !important;\n  height: 20px !important;\n}\n.list .item.item-block ion-select .select-icon .select-icon-inner {\n  border: 0px !important;\n}\n.list .item.item-block ion-textarea {\n  border-bottom: 1px solid #c0c0bd;\n  border-radius: 2px;\n  margin-top: 0px;\n}\n.list .item.item-block ion-textarea textarea.text-input {\n  margin: 0px !important;\n  font-size: 1.4rem !important;\n  width: calc(100% - 16px) !important;\n}\n.list .item.item-block:last-child {\n  border-bottom: 0px !important;\n}\n.list .item-input-has-focus ion-input,\n.list .item-input-has-focus ion-select {\n  border-bottom: 1px solid var(--accent_color) !important;\n}\n.header::after,\n.footer::before {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NhbGN1bGF0ZS1zaGlwcGluZy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBQUo7QUFFSTtFQUNFLGVBQUE7QUFBTjtBQUVNO0VBQ0Usa0JBQUE7RUFDQSxrQ0FBQTtBQUFSO0FBR007RUFDRSxnQ0FBQTtFQUNBLGtCQUFBO0FBRFI7QUFHUTtFQUNFLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLG1DQUFBO0FBRFY7QUFNTTtFQUNFLDJDQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0FBSlI7QUFNUTs7RUFFRSxZQUFBO0VBQ0EsaUJBQUE7QUFKVjtBQU9RO0VBQ0UseUNBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQUxWO0FBT1U7RUFDRSxzQkFBQTtBQUxaO0FBVU07RUFDRSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQVJSO0FBVVE7RUFDRSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUNBQUE7QUFSVjtBQVlNO0VBQ0UsNkJBQUE7QUFWUjtBQWdCTTs7RUFFRSx1REFBQTtBQWRSO0FBbUJFOztFQUVFLGFBQUE7QUFoQkoiLCJmaWxlIjoiY2FsY3VsYXRlLXNoaXBwaW5nLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgLmxpc3Qge1xuICAgIG1hcmdpbjpudWxsIDEwcHggbnVsbCAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZzogMTBweCAxMHB4IDIwcHg7XG5cbiAgICAuaXRlbS5pdGVtLWJsb2NrIHtcbiAgICAgIG1hcmdpbi10b3A6IDRweDtcblxuICAgICAgLmxhYmVsW3N0YWNrZWRdIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5X3RleHRfY29sb3IpO1xuICAgICAgfVxuXG4gICAgICBpb24taW5wdXQge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2MwYzBiZDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuXG4gICAgICAgIGlucHV0LnRleHQtaW5wdXQge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJweCAhaW1wb3J0YW50O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE2cHgpICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuXG4gICAgICBpb24tc2VsZWN0IHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjMGMwYzAgIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcblxuICAgICAgICAuc2VsZWN0LXRleHQsXG4gICAgICAgIC5zZWxlY3QtdGV4dC1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNlbGVjdC1pY29uIHtcbiAgICAgICAgICBjb250ZW50OiB1cmwoJy4vLi4vLi4vLi4vLi4vYXNzZXRzL3N2Z3MvYXJyb3ctZG93bi5zdmcnKSAhaW1wb3J0YW50O1xuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgIHdpZHRoOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAuc2VsZWN0LWljb24taW5uZXIge1xuICAgICAgICAgICAgYm9yZGVyOiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaW9uLXRleHRhcmVhIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjMGMwYmQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuXG4gICAgICAgIHRleHRhcmVhLnRleHQtaW5wdXQge1xuICAgICAgICAgIG1hcmdpbjpudWxsIG51bGwgbnVsbCAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICBmb250LXNpemU6IDEuNHJlbSAhaW1wb3J0YW50O1xuICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNnB4KSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5pdGVtLWlucHV0LWhhcy1mb2N1cyB7XG5cbiAgICAgIGlvbi1pbnB1dCxcbiAgICAgIGlvbi1zZWxlY3Qge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYWNjZW50X2NvbG9yKSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5oZWFkZXI6OmFmdGVyLFxuICAuZm9vdGVyOjpiZWZvcmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuIl19 */");

/***/ }),

/***/ "G5ZI":
/*!**************************************!*\
  !*** ./src/app/pages/cart/cart.scss ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #f5f5f5!important;\n}\n\n.list-md .item-block .item-inner {\n  border-bottom: 0px solid #dedede;\n}\n\n.div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100%;\n  text-align: center;\n  color: var(--accent_color) !important;\n  padding-top: 40%;\n}\n\n.loader_outer {\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n\n.product-name-and-delete {\n  display: flex;\n  justify-content: space-between;\n}\n\n.product_desc {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.variation-div dl {\n  display: flex;\n  flex-direction: row;\n  text-transform: capitalize;\n  color: #757575;\n  margin: 0px;\n  flex-wrap: wrap;\n}\n\n.variation-div dl dd {\n  margin: 0;\n  color: #000;\n}\n\n.variation-div dl dd:not(:last-child) {\n  border-right: 1px solid #ccc;\n}\n\n.price_quantity {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 5px;\n}\n\n.price_quantity .center-div-quantity {\n  display: flex;\n  align-items: center;\n}\n\n.price_quantity .center-div-quantity .button {\n  padding: 2px;\n  background: #f6f6f6;\n  border: 1px solid #efefef;\n}\n\n.price_quantity .center-div-quantity .button:nth-of-type(1) {\n  margin: 0;\n}\n\n.price_quantity .center-div-quantity .button:nth-of-type(2) {\n  margin: 0;\n}\n\n.cart_product_img {\n  height: auto !important;\n}\n\n.price-details {\n  padding: 10px 10px 10px 10px;\n  margin: 8px 0;\n  background: #fff;\n  border-bottom: 0px solid #d3d3d370;\n  border-top: 1px solid #d3d3d370;\n}\n\n.price-details .applied_coupons {\n  display: flex;\n}\n\n.price-details .applied_coupons p {\n  display: flex;\n  align-items: center;\n  margin: 0 7px 0 0;\n  background: #f6f6f6c2;\n  padding: 0 0 0 7px;\n}\n\n.price-details .applied_coupons p span:nth-of-type(1) {\n  color: #00cc00;\n  margin: 6px;\n}\n\n.price-details ion-list {\n  padding: 0px;\n}\n\n.price-details ion-list ion-list-header {\n  border: none;\n  padding-bottom: 5px;\n  color: #000 !important;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n\n.price-details ion-list .calculateBut {\n  margin-top: -15px;\n}\n\n.price-details ion-list .calculateBut ion-button {\n  color: #757575;\n  font-weight: 600;\n}\n\n.price-details ion-list .item {\n  min-height: initial;\n}\n\n.price-details ion-list .item img {\n  margin: 0px 10px 0px 0px !important;\n}\n\n.price-details ion-list .item ion-label {\n  margin: 0px;\n  color: #757575;\n}\n\n.price-details ion-list .item span[item-end],\n.price-details ion-list .item button[item-end],\n.price-details ion-list .item div[item-end] {\n  margin: 0px 0 5px 0;\n}\n\n.price-details ion-list .item .icon {\n  margin: 0 !important;\n  min-height: 2rem !important;\n  font-size: 2rem !important;\n}\n\n.price-details ion-list .ord_total .totalCost {\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: 700;\n  color: #000 !important;\n}\n\n.price-details ion-list .button {\n  padding: 5px 0 0 0;\n}\n\n.footer {\n  background: #fff;\n  padding: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NhcnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLCtCQUFBO0FBQUo7O0FBRUU7RUFDRSxnQ0FBQTtBQUNKOztBQUVFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFDSjs7QUFNRTtFQUNFLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUpKOztBQVFJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBR0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFQTjs7QUFTTTtFQUNFLFNBQUE7RUFDQSxXQUFBO0FBUFI7O0FBV1E7RUFDRSw0QkFBQTtBQVRWOztBQWVFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FBWko7O0FBY0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFaTjs7QUFjTTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBWlI7O0FBY1E7RUFDRSxTQUFBO0FBWlY7O0FBZVE7RUFDRSxTQUFBO0FBYlY7O0FBbUJFO0VBQ0UsdUJBQUE7QUFoQko7O0FBbUJFO0VBQ0UsNEJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLCtCQUFBO0FBaEJKOztBQWtCSTtFQUNFLGFBQUE7QUFoQk47O0FBa0JNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBaEJSOztBQWtCUTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FBaEJWOztBQXFCSTtFQUNFLFlBQUE7QUFuQk47O0FBb0JNO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FBbEJSOztBQW9CTTtFQUNFLGlCQUFBO0FBbEJSOztBQW1CUTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQWpCVjs7QUFvQk07RUFDRSxtQkFBQTtBQWxCUjs7QUFtQlE7RUFDRSxtQ0FBQTtBQWpCVjs7QUFtQlE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQWpCVjs7QUFvQlE7OztFQUdFLG1CQUFBO0FBbEJWOztBQW9CUTtFQUNFLG9CQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtBQWxCVjs7QUEwQlE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQXhCVjs7QUE0Qk07RUFDRSxrQkFBQTtBQTFCUjs7QUErQkU7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUE1QkoiLCJmaWxlIjoiY2FydC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGlvbi1jb250ZW50e1xuICAgIC0tYmFja2dyb3VuZDogI2Y1ZjVmNSFpbXBvcnRhbnQ7XG4gIH1cbiAgLmxpc3QtbWQgLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuICAgIGJvcmRlci1ib3R0b206IDBweCBzb2xpZCAjZGVkZWRlO1xuICB9XG5cbiAgLmRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHZhcigtLWFjY2VudF9jb2xvcikgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXRvcDogNDAlO1xuICB9XG5cbiAgLmxvYWRlcl9vdXRlciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5wcm9kdWN0LW5hbWUtYW5kLWRlbGV0ZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAuYnV0dG9uIHtcblxuICAgIH1cbiAgfVxuXG4gIC5wcm9kdWN0X2Rlc2Mge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC52YXJpYXRpb24tZGl2IHtcbiAgICBkbCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIC8vZmxleC1ncm93OiBjb2x1bW47XG4gICAgICAvL2FsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgIGNvbG9yOiAjNzU3NTc1O1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAgIGRkIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBjb2xvcjogIzAwMDtcblxuXG4gICAgICAgIC8vIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2NjYztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5wcmljZV9xdWFudGl0eSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG5cbiAgICAuY2VudGVyLWRpdi1xdWFudGl0eSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgLmJ1dHRvbiB7XG4gICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VmZWZlZjtcblxuICAgICAgICAmOm50aC1vZi10eXBlKDEpIHtcbiAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bnRoLW9mLXR5cGUoMikge1xuICAgICAgICAgIG1hcmdpbjowO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNhcnRfcHJvZHVjdF9pbWcge1xuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnByaWNlLWRldGFpbHMge1xuICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEwcHg7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1ib3R0b206IDBweCBzb2xpZCAjZDNkM2QzNzA7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkM2QzZDM3MDtcblxuICAgIC5hcHBsaWVkX2NvdXBvbnMge1xuICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgcCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMCA3cHggMCAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjZmNmY2YzI7XG4gICAgICAgIHBhZGRpbmc6IDAgMCAwIDdweDtcblxuICAgICAgICBzcGFuOm50aC1vZi10eXBlKDEpIHtcbiAgICAgICAgICBjb2xvcjogIzAwY2MwMDtcbiAgICAgICAgICBtYXJnaW46bnVsbCA2cHggbnVsbCBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW9uLWxpc3Qge1xuICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgaW9uLWxpc3QtaGVhZGVyIHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgIH1cbiAgICAgIC5jYWxjdWxhdGVCdXR7XG4gICAgICAgIG1hcmdpbi10b3A6IC0xNXB4O1xuICAgICAgICBpb24tYnV0dG9ue1xuICAgICAgICAgIGNvbG9yOiAjNzU3NTc1O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5pdGVtIHtcbiAgICAgICAgbWluLWhlaWdodDogaW5pdGlhbDtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBtYXJnaW46IDBweCAxMHB4IDBweCAwcHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgIGNvbG9yOiAjNzU3NTc1O1xuICAgICAgICAgIC8vIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cbiAgICAgICAgc3BhbltpdGVtLWVuZF0sXG4gICAgICAgIGJ1dHRvbltpdGVtLWVuZF0sXG4gICAgICAgIGRpdltpdGVtLWVuZF0ge1xuICAgICAgICAgIG1hcmdpbjogMHB4IDAgNXB4IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmljb24ge1xuICAgICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDJyZW0gIWltcG9ydGFudDtcbiAgICAgICAgICBmb250LXNpemU6IDJyZW0gIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAub3JkX3RvdGFsIHtcbiAgICAgICAgLnRvdGFsTGFie1xuXG4gICAgICAgIH1cbiAgICAgICAgLnRvdGFsQ29zdCB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuYnV0dG9uIHtcbiAgICAgICAgcGFkZGluZzogNXB4IDAgMCAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5mb290ZXIge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZzogOHB4O1xuICB9XG4iXX0= */");

/***/ }),

/***/ "K3Qp":
/*!****************************************************************************!*\
  !*** ./src/app/pages/cart/calculate-shipping/calculate-shipping.module.ts ***!
  \****************************************************************************/
/*! exports provided: CalculateShippingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculateShippingPageModule", function() { return CalculateShippingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _calculate_shipping__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calculate-shipping */ "42UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







let CalculateShippingPageModule = class CalculateShippingPageModule {
};
CalculateShippingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _calculate_shipping__WEBPACK_IMPORTED_MODULE_3__["CalculateShippingPage"],
        ],
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"].forChild()
        ],
        entryComponents: [_calculate_shipping__WEBPACK_IMPORTED_MODULE_3__["CalculateShippingPage"]],
        exports: [_calculate_shipping__WEBPACK_IMPORTED_MODULE_3__["CalculateShippingPage"]]
    })
], CalculateShippingPageModule);



/***/ }),

/***/ "N2tc":
/*!***********************************************!*\
  !*** ./src/app/pages/cart/coupon/coupon.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title.title-md {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  text-align: center;\n}\n\n.scroll-content {\n  background: #f5f5f5;\n  padding: 10px;\n}\n\n.scroll-content .coupon-list .item.coupon .label {\n  margin: 8px;\n}\n\n.scroll-content .coupon-list .coupon_code_name span {\n  font-size: 1.7rem;\n  font-weight: bold;\n}\n\n.scroll-content .coupon-list .coupon_desc p:nth-of-type(1) {\n  font-size: 1.2rem;\n  color: #b0b0b0;\n}\n\n.scroll-content .coupon-list .coupon_desc p span {\n  font-size: 1.2rem;\n  color: #333333;\n}\n\n.inputBut {\n  height: 100%;\n  width: 100px;\n  right: 0px;\n  margin: 0px;\n}\n\nion-input {\n  margin-left: 10px;\n  height: 55px;\n}\n\n.coupon_enter_bar {\n  margin: 10px;\n  border: 1px solid #ccc !important;\n  padding: 0px !important;\n  width: auto;\n  border-radius: 3px;\n  min-height: auto;\n  --border-width: 0px;\n}\n\n.coupon_enter_bar img {\n  margin: 0 !important;\n}\n\n.coupon_enter_bar .item-inner {\n  padding: 0px !important;\n}\n\n.coupon_enter_bar .item-inner .button {\n  margin: 0;\n  height: 100%;\n  width: 100px;\n}\n\n.coupon_enter_bar .item-inner .input-wrapper .input .text-input::placeholder {\n  font-size: 1.4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NvdXBvbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0U7RUFDRSxtQkFBQTtFQUNBLGFBQUE7QUFBSjs7QUFJUTtFQUNFLFdBQUE7QUFGVjs7QUFNUTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUFKVjs7QUFTVTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQVBaOztBQVNVO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FBUFo7O0FBYUU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBVko7O0FBWUU7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUFUSjs7QUFXRTtFQUNFLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQVJKOztBQVNJO0VBQ0Usb0JBQUE7QUFQTjs7QUFVSTtFQUNFLHVCQUFBO0FBUk47O0FBVU07RUFDRSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFSUjs7QUFhVTtFQUNFLGlCQUFBO0FBWFoiLCJmaWxlIjoiY291cG9uLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgLnRpdGxlLnRpdGxlLW1kIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5zY3JvbGwtY29udGVudCB7XG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuXG4gICAgLmNvdXBvbi1saXN0IHtcbiAgICAgIC5pdGVtLmNvdXBvbntcbiAgICAgICAgLmxhYmVse1xuICAgICAgICAgIG1hcmdpbjpudWxsIG51bGwgbnVsbCA4cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5jb3Vwb25fY29kZV9uYW1le1xuICAgICAgICBzcGFue1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS43cmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuY291cG9uX2Rlc2N7XG4gICAgICAgIHB7XG4gICAgICAgICAgJjpudGgtb2YtdHlwZSgxKXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxLjJyZW07XG4gICAgICAgICAgICBjb2xvcjogI2IwYjBiMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3BhbntcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxLjJyZW07XG4gICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgfVxuICB9XG4gIC5pbnB1dEJ1dHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gIH1cbiAgaW9uLWlucHV0e1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGhlaWdodDogNTVweDtcbiAgfVxuICAuY291cG9uX2VudGVyX2JhciB7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2MgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOm51bGwgbnVsbCBudWxsIDBweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gICAgaW1nIHtcbiAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5pdGVtLWlubmVyIHtcbiAgICAgIHBhZGRpbmc6bnVsbCAwcHggbnVsbCBudWxsIWltcG9ydGFudDtcblxuICAgICAgLmJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICB9XG5cbiAgICAgIC5pbnB1dC13cmFwcGVyIHtcbiAgICAgICAgLmlucHV0IHtcbiAgICAgICAgICAudGV4dC1pbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9Il19 */");

/***/ }),

/***/ "VmbE":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/coupon/coupon.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismiss()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{\"APPLY_COUPON\" | translate}}</ion-title>\n  </ion-toolbar>\n  <ion-item no-lines class=\"coupon_enter_bar\">\n    <img src=\"assets/svgs/voucher.svg\" style=\"width:24px;height: 36px\" item-start />\n    <ion-input [placeholder]=\"'ENTER_COUPON_CODE' | translate\" [(ngModel)]=\"inputCoupon\" [dir]='dir'>\n    </ion-input>\n    <ion-button item-end ion-button small class=\"accent-background inputBut\" (click)=\"applyCoupon(inputCoupon)\">\n      {{\"APPLY\" | translate}}\n    </ion-button>\n  </ion-item>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list no-padding class=\"coupon-list\">\n    <ion-item text-wrap no-padding *ngFor=\"let coupon of coupons\" class=\"coupon\" tappable (click)=\"applyCoupon(coupon.code)\">\n      <div class=\"coupon_code_name\">\n        <!-- <span>\n          {{\"USE_CODE\" | translate}}\n        </span> -->\n        <span text-uppercase>\n          {{coupon.code}}\n        </span>\n      </div>\n      <div class=\"coupon_desc\">\n        <p>\n          {{coupon.description}}\n        </p>\n        <p>\n          <span>{{\"VALID_TILL\" | translate}} </span> <span>{{coupon.date_expires?(coupon.date_expires | date: 'MMM dd,yyyy'):'no limit'}}</span>\n        </p>\n      </div>\n      <ion-button class=\"accent-background coupon_apply_btn\" item-end>\n        {{\"APPLY\" | translate}}\n      </ion-button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n<ion-footer *ngIf=\"errMsg\">\n  <ion-item text-wrap color=\"dark\">\n    <span [innerHTML]=\"errMsg\"></span>\n    <ion-button item-end color=\"dark\" (click)=\"toggleERR()\">{{\"OK\" | translate}}</ion-button>\n  </ion-item>\n</ion-footer>");

/***/ }),

/***/ "WR7O":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.html ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button mode=\"md\" fill=\"clear\" icon-only (click)=\"backHome()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      {{'CART' | translate}}\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" icon-only (click)=\"showSearch()\">\n        <ion-icon name=\"search\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n\n  <div class=\"div\" *ngIf=\"cart.cart_data && cart.cart_data.length==0\">\n    <ion-grid>\n      <ion-row align-items-center>\n        <ion-col align-self-center text-center>\n          <ion-icon name=\"cart\"  class=\"accent\" style=\"transform: scale(2);\"></ion-icon>\n          <h4 margin-top class=\"accent\">{{'CART_EMPTY' | translate}}</h4>\n          <ion-button  class=\"accent-background\" (click)=\"goTo('product','')\">\n            {{'START_SHOPPING' | translate}}\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <ion-list style=\"padding: 0px;margin: 0px;\" *ngIf=\"cart.cart_data && cart.cart_data.length>0\">\n    <!-- <ion-item-sliding #item > -->\n    <ion-item text-wrap *ngFor=\"let product of cart.cart_data; let i=index\">\n      <ion-row>\n        <ion-col size=\"4\"> \n          <img-loader useImg [src]=\"product.image\" style=\"max-width: 90px;\"></img-loader>\n        </ion-col>\n        <ion-col size=\"8\"> \n          <div class=\"product-name-and-delete\">\n            <h2 style=\"font-size: 16px; font-weight: 600;\" [innerHtml]=\"product.name\"></h2>\n            <ion-button fill=\"clear\" slot=\"end\"  (click)=\"removeCart(product.cart_item_key,i)\">\n              <ion-icon slot=\"icon-only\" style=\"color: #000;\" name=\"trash\"></ion-icon>\n            </ion-button>\n            \n          </div>\n          <!--<div class=\"variation-div\" [innerHtml]=\"product.varitions\" *ngIf=\"product.varitions\"></div>-->\n          <div class=\"price_quantity\">\n              <div class=\"product_price\" style=\"font-size: 16px; font-weight: 600;\">\n                {{'PRICE' | translate }}:\n                <span  [innerHtml]=\"product.subtotal\" style=\"font-size: medium;\"></span>\n              </div>\n              <div class=\"center-div-quantity product_quantity\" slot=\"end\" *ngIf=\"product.sold_ind=='false'\">\n                <ion-button fill=\"clear\" color=\"light\"  class=\"quantituboxBut\"  (click)=\"decreaseQuantity(i)\">\n                  <ion-icon slot=\"icon-only\" name=\"remove\"></ion-icon>\n                </ion-button>\n                <span class=\"border\" [innerHtml]=\"product.quantity || 0\"></span>\n                <ion-button fill=\"clear\" color=\"light\"  class=\"quantituboxBut\" (click)=\"increaseQuantity(i)\">\n                  <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n                </ion-button>\n              </div>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n    <!-- <ion-item-options side=\"end\">\n        <ion-button icon-top class=\"accent-background\" tappable (click)=\"removeCart(product.cart_item_key,i)\">\n          <ion-icon name=\"trash\" style=\"zoom:2\"></ion-icon>\n          {{'DELETE' | translate}}\n        </ion-button>\n      </ion-item-options>\n    </ion-item-sliding> -->\n  </ion-list>\n\n  <div *ngIf=\"cart.cart_data && cart.cart_data.length>0\" class=\"price-details\">\n    <ion-item *ngIf=\"!inputCoupon\" lines=\"none\" (click)=\"couponToggle()\">\n      <img src=\"assets/svgs/voucher.svg\" style=\"width: 24px; height: 36px;\"/>\n      <ion-label style=\"padding-left: 10px;\">{{'ENTER_COUPON_CODE' | translate}}</ion-label>\n      <ion-icon name=\"chevron-forward\" slot=\"end\"></ion-icon>\n    </ion-item>\n    \n    <div class=\"applied_coupons\" padding-left padding-right>\n      <p *ngFor=\"let coupon of cart.coupon; let i=index\">\n        <span [innerHTML]=\"coupon.code + ' '\"></span>\n        <span>{{\"APPLIED\" | translate}}</span>\n        <ion-button fill=\"clear\" size=\"small\" slot=\"end\" (click)=\"removeCoupon(coupon.code)\">\n          <ion-icon slot=\"icon-only\" name=\"close-circle\" color=\"light\"> </ion-icon>\n        </ion-button>\n      </p>\n    </div>\n  </div>\n\n  <div *ngIf=\"this.cart.shipping_method && this.cart.shipping_method.length>0\" class=\"price-details\">\n    <ion-list mode=\"md\" >\n      <ion-radio-group [ngModel]=\"this.cart.chosen_shipping_method\">\n        <ion-list-header mode=\"md\" no-margin>\n          {{\"SHIPPING_METHODS\" | translate}}\n        </ion-list-header>\n        <ion-item *ngFor=\"let method of this.cart.shipping_method; let i=index\" lines=\"none\">\n          <ion-label [innerHtml]=\"method.shipping_method_name\"></ion-label>\n          <span slot=\"end\" [innerHTML]=\"method.shipping_method_price\"></span>\n          <ion-radio [value]=\"method.id\" (click)=\"getCart(method.id)\" color=\"dark\" *ngIf=\"this.cart.shipping_method.length>1\">\n          </ion-radio>\n        </ion-item>      \n      </ion-radio-group>\n      <div class=\"calculateBut\" style=\"float: right;\">\n        <ion-button fill=\"clear\" slot=\"end\" (click)=\"calculateShipping()\" color=\"accent\">\n          <u>{{'CALCULATE_SHIPPING'|translate}}</u>\n        </ion-button>\n      </div>\n    </ion-list>\n  </div>\n\n  <div *ngIf=\"cart.cart_data && cart.cart_data.length>0\" class=\"price-details\">\n    <ion-list mode=\"md\">\n      <ion-list-header mode=\"md\" no-margin>\n        {{'ORDER_SUMMARY' | translate}}\n      </ion-list-header>\n      <ion-item lines=\"none\" style=\"height: 35px;\">\n        <div [innerHTML]=\"'SUBTOTAL' | translate\"></div>\n        <div slot=\"end\" [innerHTML]=\"cart.cart_subtotal\"></div>\n      </ion-item>\n\n      <ion-item *ngIf=\"cart.shipping_method && cart.shipping_method.length>0\" lines=\"none\" style=\"height: 35px;\">\n        <div [innerHTML]=\"'SHIPPING_FEE' | translate\"></div>\n        <div slot=\"end\" [innerHTML]=\"shipping_price()\"></div>\n      </ion-item>\n\n      <ion-item lines=\"none\" style=\"height: 35px;\">\n        <div>{{'TAX'| translate}}</div>\n        <div slot=\"end\" [innerHTML]=\"cart.taxes\"></div>\n      </ion-item>\n      <!-- <ng-container *ngIf=\"cart.taxes\" style=\"height: 35px;\">\n        <ion-item no-padding no-lines *ngFor=\"let key of objectKeys(cart.taxes)\">\n          <div [innerHTML]=\"key\"></div>\n          <div slot=\"end\" [innerHTML]=\"cart.taxes[key]\"></div>\n        </ion-item>\n      </ng-container> -->\n      <ion-item style=\"height: 35px;\">\n        <span> Total Discount</span>\n        <span slot=\"end\" [innerHTML]=\"cart.discount_total\"></span>\n      </ion-item>\n\n      <ion-item class=\"ord_total\" lines=\"none\" style=\"height: 35px;border-top: 1px solid #757575;\">\n        <div class=\"totalLab\">{{'TOTAL'|translate}}</div>\n        <div class=\"totalCost\" slot=\"end\" [innerHTML]=\"cart.total\"></div>\n      </ion-item>\n    </ion-list>\n    <!-- </fieldset> -->\n  </div>\n</ion-content>\n\n<ion-footer *ngIf=\"cart.cart_data && cart.cart_data.length>0\">\n  <ion-button expand=\"full\" class=\"accent-background\" (click)=\"checkout()\" style=\"color: black;height: 60px;\">\n    {{'CHECKOUT'|translate}} | &nbsp; <span [innerHtml]=\"cart.total\"></span>\n  </ion-button>\n</ion-footer>\n");

/***/ }),

/***/ "Y+Iu":
/*!***************************************************!*\
  !*** ./src/app/pages/cart/cart-routing.module.ts ***!
  \***************************************************/
/*! exports provided: CartPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageRoutingModule", function() { return CartPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart */ "dBIl");




const routes = [
    {
        path: '',
        component: _cart__WEBPACK_IMPORTED_MODULE_3__["CartPage"],
    }
];
let CartPageRoutingModule = class CartPageRoutingModule {
};
CartPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CartPageRoutingModule);



/***/ }),

/***/ "dBIl":
/*!************************************!*\
  !*** ./src/app/pages/cart/cart.ts ***!
  \************************************/
/*! exports provided: CartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPage", function() { return CartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cart_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cart.html */ "WR7O");
/* harmony import */ var _cart_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart.scss */ "G5ZI");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/providers */ "fC+V");
/* harmony import */ var _services_Events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/Events */ "3C+A");
/* harmony import */ var _calculate_shipping_calculate_shipping__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./calculate-shipping/calculate-shipping */ "42UM");
/* harmony import */ var _coupon_coupon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./coupon/coupon */ "0/KU");
/* harmony import */ var src_app_ShareComponent_search_search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/ShareComponent/search/search */ "y3Op");
/* harmony import */ var src_app_ShareComponent_login_login__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/ShareComponent/login/login */ "MeOy");












let CartPage = class CartPage {
    constructor(navCtrl, restClient, loader, user, toast, zone, translate, alertCtrl, modalCtrl, events, settings) {
        this.navCtrl = navCtrl;
        this.restClient = restClient;
        this.loader = loader;
        this.user = user;
        this.toast = toast;
        this.zone = zone;
        this.translate = translate;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.settings = settings;
        this.cart = {};
        this.inputCoupon = false;
        this.pakage = {};
        this.objectKeys = Object.keys;
        if (this.user.shipping) {
            this.pakage.country = this.user.shipping.country || "IN";
            this.pakage.state = this.user.shipping.state || null;
            this.pakage.postcode = this.user.shipping.postcode || null;
        }
        else {
            this.pakage.country = settings.country || "IN";
            this.pakage.state = settings.state || null;
            this.pakage.postcode = settings.postcode || null;
        }
        this.getCart();
    }
    ionViewDidEnter() {
        console.log('ionViewDidEnter CartPage');
    }
    getCart(method) {
        //this.loader.show();
        this.restClient.getCart(this.pakage, method).then((res) => {
            console.log(res);
            let data = JSON.parse(res.data);
            //this.zone.run(() => {
            this.cart = {};
            setTimeout(() => {
                //this.loader.dismiss();
                this.cart = data;
                console.log(this.cart);
                if (this.cart.error) {
                    this.toast.showWithClose(this.cart.error);
                }
            }, 10);
            // });
        }).catch(err => {
            console.log(err);
            this.loader.dismiss();
            this.translate.get(['ERROR']).subscribe(x => {
                this.toast.show(x.ERROR);
            });
        });
    }
    removeCart(cart_item_key, i) {
        this.translate.get(['REMOVE_FROM_CART', 'ARE_YOU_SURE', 'NO', 'YES']).subscribe((x) => {
            this.presentAlert(x.REMOVE_FROM_CART, x.ARE_YOU_SURE, "", [{
                    text: x.NO
                }, {
                    text: x.YES,
                    handler: () => {
                        this.loader.show();
                        this.restClient.removeCartItem(this.pakage, cart_item_key).then((res) => {
                            this.loader.dismiss();
                            this.events.publish("cartchanged");
                            let data = JSON.parse(res.data);
                            console.log(data);
                            //this.zone.run(() => {
                            this.cart = {};
                            setTimeout(() => {
                                this.cart = data;
                            }, 10);
                            //});
                        }).catch(err => {
                            console.log(err);
                            this.loader.dismiss();
                            this.translate.get(['ERROR']).subscribe(x => {
                                this.toast.show(x.ERROR);
                            });
                        });
                    }
                }]);
        });
    }
    removeCoupon(code) {
        this.translate.get(['REMOVE_FROM_COUPON', 'ARE_YOU_SURE', 'NO', 'YES']).subscribe((x) => {
            this.presentAlert(x.REMOVE_FROM_COUPON, x.ARE_YOU_SURE, "", [{
                    text: x.NO
                }, {
                    text: x.YES,
                    handler: () => {
                        this.loader.show();
                        this.restClient.removeCoupon(this.pakage, code).then((res) => {
                            this.loader.dismiss();
                            let data = JSON.parse(res.data);
                            console.log(data);
                            //this.zone.run(() => {
                            this.cart = {};
                            setTimeout(() => {
                                this.cart = data;
                            }, 10);
                            //});
                        }).catch(err => {
                            this.loader.dismiss();
                            console.log(err);
                            this.translate.get(['ERROR']).subscribe(x => {
                                this.toast.show(x.ERROR);
                            });
                        });
                    }
                }]);
        });
    }
    decreaseQuantity(i) {
        if (this.cart.cart_data[i].quantity > 1) {
            this.loader.show();
            this.restClient.updateCart(this.pakage, this.cart.cart_data[i].cart_item_key, --this.cart.cart_data[i].quantity)
                .then((res) => {
                this.loader.dismiss();
                this.events.publish("cartchanged");
                let data = JSON.parse(res.data);
                console.log(data);
                //this.zone.run(() => {
                this.cart = {};
                setTimeout(() => {
                    this.cart = data;
                }, 10);
                // });
            }).catch(err => {
                console.log(err);
                this.loader.dismiss();
                this.translate.get(['ERROR']).subscribe(x => {
                    this.toast.show(x.ERROR);
                });
            });
        }
        else {
            this.translate.get(['MIN_ITEM']).subscribe(x => {
                this.toast.show(x.MIN_ITEM);
            });
        }
    }
    increaseQuantity(i) {
        let quantity = this.cart.cart_data[i].quantity;
        if (this.cart.cart_data[i].manage_stock) {
            if (quantity < this.cart.cart_data[i].stock_quanity) {
                quantity++;
            }
            else {
                this.translate.get(['MAX_ITEM']).subscribe(x => {
                    this.toast.show(x.MAX_ITEM);
                });
            }
        }
        else {
            quantity++;
        }
        if (quantity != Number(this.cart.cart_data[i].quantity)) {
            this.loader.show();
            this.restClient.updateCart(this.pakage, this.cart.cart_data[i].cart_item_key, quantity)
                .then((res) => {
                this.events.publish("cartchanged");
                this.loader.dismiss();
                let data = JSON.parse(res.data);
                console.log(data);
                //this.zone.run(() => {
                this.cart = {};
                setTimeout(() => {
                    this.cart = data;
                }, 10);
                //});
                console.log(this.cart);
            }).catch(err => {
                this.loader.dismiss();
                console.log(err);
                this.translate.get(['ERROR']).subscribe(x => {
                    this.toast.show(x.ERROR);
                });
            });
        }
    }
    showSearch() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: src_app_ShareComponent_search_search__WEBPACK_IMPORTED_MODULE_10__["SearchPage"],
                componentProps: this.pakage,
                cssClass: 'shipping'
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            if (data != null) {
                if (data && data.page) {
                    this.goTo(data.page, data.params);
                }
            }
        });
    }
    calculateShipping() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _calculate_shipping_calculate_shipping__WEBPACK_IMPORTED_MODULE_8__["CalculateShippingPage"],
                componentProps: {
                    "pakage": this.pakage
                },
                cssClass: 'shipping'
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            if (data != null) {
                this.pakage = data;
                if (data.postcode !== '') {
                    this.settings.setSettings(data.country, 'country');
                    this.settings.setSettings(data.state, 'state');
                    this.settings.setSettings(data.postcode, 'postcode');
                }
                console.log(this.pakage);
                this.getCart();
            }
        });
    }
    goTo(page, params) {
        let navigationExtras = { queryParams: params };
        this.navCtrl.navigateForward(page, navigationExtras);
    }
    checkout() {
        if (this.user.all) {
            this.goTo('checkout', {});
        }
        else {
            this.translate.get(['LOGIN', 'LOGIN_FIRST', 'REGISTER']).subscribe((x) => {
                this.presentAlert(x.LOGIN, x.LOGIN_FIRST, "custom_alert", [{
                        text: x.LOGIN,
                        handler: () => {
                            this.loginPagePopUp({ page: "login" });
                        }
                    }, {
                        text: x.REGISTER,
                        handler: () => {
                            this.loginPagePopUp({ page: "signup" });
                        }
                    }]);
            });
        }
    }
    loginPagePopUp(rsg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: src_app_ShareComponent_login_login__WEBPACK_IMPORTED_MODULE_11__["LoginPage"],
                componentProps: rsg
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            if (data & data.code) {
                this.checkout();
            }
        });
    }
    backHome() {
        this.navCtrl.back();
    }
    shipping_price() {
        return this.cart.shipping_method.find(x => x.id == this.cart.chosen_shipping_method).shipping_method_price;
    }
    couponToggle() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _coupon_coupon__WEBPACK_IMPORTED_MODULE_9__["CouponPage"],
                componentProps: { pakage: this.pakage, appliedCoupon: this.cart.coupon },
                cssClass: 'coupon'
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            if (data != null) {
                this.cart = {};
                setTimeout(() => {
                    this.cart = data;
                }, 10);
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
CartPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_6__["RestProvider"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_6__["LoadingProvider"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_6__["UserProvider"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_6__["ToastProvider"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _services_Events__WEBPACK_IMPORTED_MODULE_7__["Events"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_6__["SettingsProvider"] }
];
CartPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'page-cart',
        template: _raw_loader_cart_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cart_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CartPage);



/***/ }),

/***/ "sFz8":
/*!*******************************************!*\
  !*** ./src/app/pages/cart/cart.module.ts ***!
  \*******************************************/
/*! exports provided: CartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart */ "dBIl");
/* harmony import */ var ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-image-loader-v5 */ "JBbo");
/* harmony import */ var _cart_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart-routing.module */ "Y+Iu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "eHpL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _coupon_coupon_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./coupon/coupon.module */ "2Y+E");
/* harmony import */ var _calculate_shipping_calculate_shipping_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./calculate-shipping/calculate-shipping.module */ "K3Qp");











let CartPageModule = class CartPageModule {
};
CartPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _cart__WEBPACK_IMPORTED_MODULE_3__["CartPage"],
        ],
        imports: [
            _coupon_coupon_module__WEBPACK_IMPORTED_MODULE_9__["CouponPageModule"],
            _calculate_shipping_calculate_shipping_module__WEBPACK_IMPORTED_MODULE_10__["CalculateShippingPageModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"],
            _cart_routing_module__WEBPACK_IMPORTED_MODULE_5__["CartPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"].forChild(),
            ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_4__["IonicImageLoaderModule"]
        ],
        providers: [_ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__["WebView"]]
    })
], CartPageModule);



/***/ }),

/***/ "yxe9":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/calculate-shipping/calculate-shipping.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content no-padding>\n    <ion-toolbar no-padding>\n        <ion-title>{{'CALCULATE_SHIPPING' | translate}}</ion-title>\n        <ion-buttons slot=\"end\">\n          <ion-button icon-only tappable (click)=\"close()\">\n            <ion-icon name=\"close\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-toolbar>\n\n  <form [formGroup]=\"form\" novalidate>\n\n    <ion-list no-lines>\n\n      <ion-item no-padding>\n        <ion-label position=\"stacked\">{{'COUNTRY'|translate}}</ion-label>\n        <ion-select formControlName=\"country\"  cancelText=\"Cancel\" okText=\"Select\"\n          required (ionChange)=\"getStates()\">\n          <ion-select-option *ngFor=\"let x of countries\" [value]=\"x.id\" [innerHTML]=\"x.name\"></ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item no-padding *ngIf=\"states.length > 0\">\n        <ion-label position=\"stacked\">{{'STATE'|translate}}</ion-label>\n        <ion-select formControlName=\"state\"  cancelText=\"Cancel\" okText=\"Select\">\n          <ion-select-option *ngFor=\"let x of states\" [value]=\"x.id\" [innerHTML]=\"x.name\"></ion-select-option>\n        </ion-select>\n      </ion-item>\n<!-- \n      <ion-item no-padding *ngIf=\"states.length == 0\">\n        <ion-label position=\"stacked\">{{'STATE'|translate}}</ion-label>\n        <ion-input formControlName=\"state\" type=\"text\"></ion-input>\n      </ion-item> -->\n\n      <ion-item no-padding>\n        <ion-label position=\"stacked\">{{'POSTCODE'|translate}}</ion-label>\n        <ion-input formControlName=\"postcode\" type=\"number\" inputmode=\"numeric\" pattern=\"[0-9]*\" [dir]=\"dir\"></ion-input>\n      </ion-item>\n\n    </ion-list>\n  </form>\n\n</ion-content>\n<ion-footer>\n  <ion-button expand=\"full\" class=\"accent-background\" (click)=\"submit()\">\n    {{\"DONE\" | translate}}\n  </ion-button>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=pages-cart-cart-module.js.map