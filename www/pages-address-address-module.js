(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-address-address-module"],{

/***/ "4R4x":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/address/edit-address/edit-address.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" mode=\"ios\">\n      <ion-button icon-only ion-button (click)=\"dismiss()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      {{(addressType.toUpperCase() || '') | translate}} {{'ADDRESS' | translate}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n  <form [formGroup]=\"form\" (ngSubmit)=\"submit()\" novalidate>\n    <ion-list no-lines padding-left padding-right>\n      <ion-item>\n        <ion-label position=\"stacked\">{{'FIRST_NAME' | translate}} <span class=\"mandatory\">*</span></ion-label>\n        <ion-input formControlName=\"first_name\" type=\"text\" [dir]=\"dir\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">{{'LAST_NAME' | translate}} <span class=\"mandatory\">*</span></ion-label>\n        <ion-input formControlName=\"last_name\" type=\"text\" [dir]=\"dir\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">{{'COMPANY' | translate}}</ion-label>\n        <ion-input formControlName=\"company\" type=\"text\" [dir]=\"dir\"></ion-input>\n      </ion-item>\n\n      <ion-item *ngIf=\"addressType=='billing'\">\n        <ion-label position=\"stacked\">{{'EMAIL' | translate}} <span class=\"mandatory\">*</span></ion-label>\n        <ion-input formControlName=\"email\" type=\"email\" [dir]=\"dir\"></ion-input>\n      </ion-item>\n\n      <ion-item *ngIf=\"addressType=='billing'\">\n        <ion-label position=\"stacked\">{{'PHONE_NUMBER' | translate}} <span class=\"mandatory\">*</span></ion-label>\n        <ion-input formControlName=\"phone\" type=\"number\" inputmode=\"numeric\" pattern=\"[0-9]*\" [dir]=\"dir\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">{{'COUNTRY' | translate}} <span class=\"mandatory\">*</span></ion-label>\n        <ion-select formControlName=\"country\" interface=\"popover\" (ionChange)=\"getStates()\">\n          <ion-select-option *ngFor=\"let x of countries\" [value]=\"x.id\" [innerHTML]=\"x.name\"></ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item *ngIf=\"states.length > 0\">\n        <ion-label position=\"stacked\">{{'STATE' | translate}} <span class=\"mandatory\">*</span></ion-label>\n        <ion-select formControlName=\"state\" interface=\"popover\">\n          <ion-select-option *ngFor=\"let x of states\" [value]=\"x.id\" [innerHTML]=\"x.name\"></ion-select-option>\n        </ion-select>\n      </ion-item>\n<!-- \n      <ion-item *ngIf=\"states.length == 0\">\n        <ion-label position=\"stacked\">{{'STATE' | translate}} <span class=\"mandatory\">*</span></ion-label>\n        <ion-input formControlName=\"state\" type=\"text\"></ion-input>\n      </ion-item> -->\n\n      <ion-item>\n        <ion-label position=\"stacked\">{{'CITY' | translate}} <span class=\"mandatory\">*</span></ion-label>\n        <ion-input formControlName=\"city\" type=\"text\" [dir]=\"dir\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">{{'POSTCODE' | translate}} <span class=\"mandatory\">*</span></ion-label>\n        <ion-input formControlName=\"postcode\" type=\"number\" inputmode=\"numeric\" pattern=\"[0-9]*\" [dir]=\"dir\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">{{'ADDRESS_1' | translate}} <span class=\"mandatory\">*</span></ion-label>\n        <ion-textarea formControlName=\"address_1\" name=\"description\"></ion-textarea>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">{{'ADDRESS_2' | translate}}</ion-label>\n        <ion-textarea formControlName=\"address_2\" name=\"description\"></ion-textarea>\n      </ion-item>\n    </ion-list>\n    <ion-button expand=\"full\"  (click)=\"submit()\" class=\"accent-background\">{{'SAVE' | translate}}</ion-button>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "9mXj":
/*!********************************************!*\
  !*** ./src/app/pages/address/address.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-label {\n  white-space: normal !important;\n}\n\n.addressLab {\n  color: var(--accent_color);\n}\n\n.addressLab ion-button {\n  color: var(--accent_color);\n  float: right;\n}\n\ndiv b {\n  color: var(--accent_color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FkZHJlc3Muc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLDhCQUFBO0FBQUo7O0FBRUU7RUFDRSwwQkFBQTtBQUNKOztBQUFJO0VBQ0UsMEJBQUE7RUFDQSxZQUFBO0FBRU47O0FBR0k7RUFDRSwwQkFBQTtBQUFOIiwiZmlsZSI6ImFkZHJlc3Muc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpb24tbGFiZWwge1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgfVxuICAuYWRkcmVzc0xhYntcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50X2NvbG9yKTtcbiAgICBpb24tYnV0dG9ue1xuICAgICAgY29sb3I6IHZhcigtLWFjY2VudF9jb2xvcik7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgfVxuICB9XG5cbiAgZGl2IHtcbiAgICBiIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnRfY29sb3IpO1xuICAgIH1cbiAgfVxuXG4iXX0= */");

/***/ }),

/***/ "J0Tw":
/*!*********************************************************!*\
  !*** ./src/app/pages/address/address-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: AddressPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressPageRoutingModule", function() { return AddressPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _address__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./address */ "L2QG");




const routes = [
    {
        path: '',
        component: _address__WEBPACK_IMPORTED_MODULE_3__["AddressPage"],
    }
];
let AddressPageRoutingModule = class AddressPageRoutingModule {
};
AddressPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AddressPageRoutingModule);



/***/ }),

/***/ "L2QG":
/*!******************************************!*\
  !*** ./src/app/pages/address/address.ts ***!
  \******************************************/
/*! exports provided: AddressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressPage", function() { return AddressPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_address_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./address.html */ "xXFE");
/* harmony import */ var _address_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./address.scss */ "9mXj");
/* harmony import */ var _services_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/providers */ "fC+V");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _edit_address_edit_address__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-address/edit-address */ "M/U6");







let AddressPage = class AddressPage {
    constructor(navCtrl, modalCtrl, user, settings) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.user = user;
        this.settings = settings;
    }
    backHome() {
        this.navCtrl.back();
    }
    ionViewDidEnter() {
        console.log('ionViewDidEnter AddressPage');
    }
    createModal(page, params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _edit_address_edit_address__WEBPACK_IMPORTED_MODULE_6__["EditAddressPage"],
                componentProps: {
                    'addressType': params
                }
            });
            return yield modal.present();
        });
    }
    isEmptyObject(o) {
        return Object.keys(o).every(function (x) {
            return o[x] === '' || o[x] === null; // or just "return o[x];" for falsy values
        });
    }
};
AddressPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_3__["UserProvider"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_3__["SettingsProvider"] }
];
AddressPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'page-address',
        template: _raw_loader_address_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_address_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddressPage);



/***/ }),

/***/ "M/U6":
/*!************************************************************!*\
  !*** ./src/app/pages/address/edit-address/edit-address.ts ***!
  \************************************************************/
/*! exports provided: EditAddressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAddressPage", function() { return EditAddressPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_address_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-address.html */ "4R4x");
/* harmony import */ var _edit_address_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-address.scss */ "fIar");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _services_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/providers */ "fC+V");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");









let EditAddressPage = class EditAddressPage {
    constructor(navCtrl, router, viewCtrl, platform, formBuilder, user, settings, loader, WC, translate, toast) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.viewCtrl = viewCtrl;
        this.formBuilder = formBuilder;
        this.user = user;
        this.settings = settings;
        this.loader = loader;
        this.WC = WC;
        this.translate = translate;
        this.toast = toast;
        this.countries = [];
        this.states = [];
        //addressType: any;
        this.stateOpts = {};
        this.dir = platform.isRTL ? 'rtl' : 'ltr';
        ;
        this.form = this.formBuilder.group({});
    }
    ionViewDidEnter() {
        console.log('ionViewDidEnter EditAddressPage');
        if (this.addressType == 'billing') {
            this.data = this.user.billing;
            this.form = this.formBuilder.group({
                first_name: [this.data.first_name, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                last_name: [this.data.last_name, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                company: [this.data.company],
                email: [this.data.email, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                phone: [this.data.phone, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                city: [this.data.city, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                state: [this.data.state],
                postcode: [this.data.postcode, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                address_1: [this.data.address_1, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                address_2: [this.data.address_2],
                country: [this.data.country, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            });
        }
        else {
            this.data = this.user.shipping;
            this.form = this.formBuilder.group({
                first_name: [this.data.first_name, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                last_name: [this.data.last_name, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                company: [this.data.company],
                city: [this.data.city, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                state: [this.data.state],
                postcode: [this.data.postcode, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                address_1: [this.data.address_1, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                address_2: [this.data.address_2],
                country: [this.data.country, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
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
        let data = {};
        if (this.addressType == 'billing') {
            data.billing = this.form.value;
        }
        else {
            data.shipping = this.form.value;
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
};
EditAddressPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_4__["UserProvider"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_4__["SettingsProvider"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_4__["LoadingProvider"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_4__["WooCommerceProvider"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_4__["ToastProvider"] }
];
EditAddressPage.propDecorators = {
    addressType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }]
};
EditAddressPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'page-edit-address',
        template: _raw_loader_edit_address_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_address_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditAddressPage);



/***/ }),

/***/ "VQQF":
/*!*******************************************************************!*\
  !*** ./src/app/pages/address/edit-address/edit-address.module.ts ***!
  \*******************************************************************/
/*! exports provided: EditAddressPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAddressPageModule", function() { return EditAddressPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _edit_address__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-address */ "M/U6");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







let EditAddressPageModule = class EditAddressPageModule {
};
EditAddressPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _edit_address__WEBPACK_IMPORTED_MODULE_3__["EditAddressPage"],
        ],
        imports: [
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"].forChild()
        ],
        exports: [_edit_address__WEBPACK_IMPORTED_MODULE_3__["EditAddressPage"]],
        entryComponents: [_edit_address__WEBPACK_IMPORTED_MODULE_3__["EditAddressPage"]]
    })
], EditAddressPageModule);



/***/ }),

/***/ "fIar":
/*!**************************************************************!*\
  !*** ./src/app/pages/address/edit-address/edit-address.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: var(--primary_color) !important;\n  --border: none !important;\n  color: #fff;\n}\nion-toolbar ion-buttons ion-icon {\n  color: #fff;\n}\nion-toolbar ion-buttons ion-badge {\n  background: #fcd947;\n  padding: 2px 5px;\n  position: absolute;\n  margin-right: -17px;\n  margin-top: -10px;\n}\n.toolbar-content {\n  text-transform: capitalize;\n}\nion-content {\n  --background: #f5f5f5;\n}\n.list {\n  margin: 10px 10px;\n  background: #fff;\n}\n.list .item.item-block {\n  margin-top: 10px;\n}\n.list .item.item-block .label[stacked] {\n  margin-bottom: 0px;\n  color: var(--secondary_text_color);\n}\n.list .item.item-block ion-input {\n  border-bottom: 1px solid #c0c0bd;\n  border-radius: 2px;\n}\n.list .item.item-block ion-input input.text-input {\n  margin-top: 0px !important;\n  margin-bottom: 2px !important;\n  font-size: 1.4rem !important;\n  width: calc(100% - 16px) !important;\n}\n.list .item.item-block ion-select {\n  border-bottom: 1px solid #c0c0c0 !important;\n  border-radius: 2px !important;\n  padding: 0px !important;\n  margin-top: 0px !important;\n}\n.list .item.item-block ion-select .select-text,\n.list .item.item-block ion-select .select-text-placeholder {\n  padding: 0px;\n  font-size: 1.4rem;\n}\n.list .item.item-block ion-select .select-icon {\n  content: url('arrow-down.svg') !important;\n  margin: 0px;\n  width: 15px !important;\n  height: 20px !important;\n}\n.list .item.item-block ion-select .select-icon .select-icon-inner {\n  border: 0px !important;\n}\n.list .item.item-block ion-textarea {\n  border-bottom: 1px solid #c0c0bd;\n  border-radius: 2px;\n  margin-top: 0px;\n}\n.list .item.item-block ion-textarea textarea.text-input {\n  margin: 0px !important;\n  font-size: 1.4rem !important;\n  width: calc(100% - 16px) !important;\n}\n.list .item.item-block:last-child {\n  border-bottom: 0px !important;\n}\n.list .item-input-has-focus ion-input,\n.list .item-input-has-focus ion-select {\n  border-bottom: 1px solid var(--accent_color) !important;\n}\n.button {\n  margin: 20px;\n  width: calc(100% - 40px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2VkaXQtYWRkcmVzcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkNBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUFDRjtBQUNJO0VBQ0UsV0FBQTtBQUNOO0FBQ0k7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQ047QUFHRTtFQUNFLDBCQUFBO0FBQUo7QUFHRTtFQUNFLHFCQUFBO0FBQUo7QUFJRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUFESjtBQUdJO0VBQ0UsZ0JBQUE7QUFETjtBQUdNO0VBQ0Usa0JBQUE7RUFDQSxrQ0FBQTtBQURSO0FBSU07RUFDRSxnQ0FBQTtFQUNBLGtCQUFBO0FBRlI7QUFJUTtFQUNFLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLG1DQUFBO0FBRlY7QUFPTTtFQUNFLDJDQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0FBTFI7QUFPUTs7RUFFRSxZQUFBO0VBQ0EsaUJBQUE7QUFMVjtBQVFRO0VBQ0UseUNBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQU5WO0FBUVU7RUFDRSxzQkFBQTtBQU5aO0FBV007RUFDRSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQVRSO0FBV1E7RUFDRSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUNBQUE7QUFUVjtBQWFNO0VBQ0UsNkJBQUE7QUFYUjtBQWlCTTs7RUFFRSx1REFBQTtBQWZSO0FBb0JFO0VBQ0UsWUFBQTtFQUNBLHdCQUFBO0FBakJKIiwiZmlsZSI6ImVkaXQtYWRkcmVzcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeV9jb2xvcikgIWltcG9ydGFudDtcbiAgLS1ib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG4gIGlvbi1idXR0b25ze1xuICAgIGlvbi1pY29ue1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuICAgIGlvbi1iYWRnZXtcbiAgICAgIGJhY2tncm91bmQ6ICNmY2Q5NDc7XG4gICAgICBwYWRkaW5nOiAycHggNXB4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAtMTdweDtcbiAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgIH1cbiAgfVxufVxuICAudG9vbGJhci1jb250ZW50IHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgfVxuXG4gIGlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIH1cblxuXG4gIC5saXN0IHtcbiAgICBtYXJnaW46bnVsbCAxMHB4IG51bGwgMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuXG4gICAgLml0ZW0uaXRlbS1ibG9jayB7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuXG4gICAgICAubGFiZWxbc3RhY2tlZF0ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnlfdGV4dF9jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIGlvbi1pbnB1dCB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzBjMGJkO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG5cbiAgICAgICAgaW5wdXQudGV4dC1pbnB1dCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjRyZW0gIWltcG9ydGFudDtcbiAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTZweCkgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuXG5cbiAgICAgIGlvbi1zZWxlY3Qge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2MwYzBjMCAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHggIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuXG4gICAgICAgIC5zZWxlY3QtdGV4dCxcbiAgICAgICAgLnNlbGVjdC10ZXh0LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuc2VsZWN0LWljb24ge1xuICAgICAgICAgIGNvbnRlbnQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL3N2Z3MvYXJyb3ctZG93bi5zdmcnKSAhaW1wb3J0YW50O1xuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgIHdpZHRoOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAuc2VsZWN0LWljb24taW5uZXIge1xuICAgICAgICAgICAgYm9yZGVyOiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaW9uLXRleHRhcmVhIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjMGMwYmQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuXG4gICAgICAgIHRleHRhcmVhLnRleHQtaW5wdXQge1xuICAgICAgICAgIG1hcmdpbjpudWxsIG51bGwgbnVsbCAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICBmb250LXNpemU6IDEuNHJlbSAhaW1wb3J0YW50O1xuICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNnB4KSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5pdGVtLWlucHV0LWhhcy1mb2N1cyB7XG5cbiAgICAgIGlvbi1pbnB1dCxcbiAgICAgIGlvbi1zZWxlY3Qge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYWNjZW50X2NvbG9yKSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5idXR0b24ge1xuICAgIG1hcmdpbjogMjBweDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XG4gIH1cblxuICAuaXRlbSAuaXRlbS1pbm5lciB7XG4gIH0iXX0= */");

/***/ }),

/***/ "tJS4":
/*!*************************************************!*\
  !*** ./src/app/pages/address/address.module.ts ***!
  \*************************************************/
/*! exports provided: AddressPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressPageModule", function() { return AddressPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _address__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./address */ "L2QG");
/* harmony import */ var _address_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./address-routing.module */ "J0Tw");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _edit_address_edit_address_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-address/edit-address.module */ "VQQF");








let AddressPageModule = class AddressPageModule {
};
AddressPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _address__WEBPACK_IMPORTED_MODULE_3__["AddressPage"],
        ],
        imports: [
            _edit_address_edit_address_module__WEBPACK_IMPORTED_MODULE_7__["EditAddressPageModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _address_routing_module__WEBPACK_IMPORTED_MODULE_4__["AddressPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"].forChild()
        ],
    })
], AddressPageModule);



/***/ }),

/***/ "xXFE":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/address/address.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button mode=\"md\" fill=\"clear\" icon-only (click)=\"backHome()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{'ADDRESS' | translate}}</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <div>\n\n    <div style=\"margin: 20px 10px;\">\n      <div class=\"addressLab\">\n        <b>{{'BILLING' | translate}} {{'ADDRESS' | translate}}</b>\n        <ion-button  fill=\"clear\" (click)=\"createModal('EditAddressPage','billing')\">\n          <ion-icon name=\"pencil\"></ion-icon>\n        </ion-button>\n      </div>\n      <span *ngIf=\"isEmptyObject(user.billing)\">{{'NO_ADDRESS_SAVED' | translate}}</span>\n      <div *ngIf=\"!isEmptyObject(user.billing)\">\n        <p *ngIf=\"user.billing.company!=''\">{{user.billing.company}}</p>\n        <p>{{user.billing.first_name}} {{user.billing.last_name}}</p>\n        <p>{{user.billing.address_1}}</p>\n        <p *ngIf=\"user.billing.address_2!=''\">{{user.billing.address_2}}</p>\n        <p>{{user.billing.city}} - {{user.billing.postcode}}</p>\n        <p>{{user.billing.state}} • {{user.billing.country}}</p>\n      </div>\n\n    </div>\n\n    <div style=\"margin: 20px 10px;\">\n      <div class=\"addressLab\">\n        <b>{{'SHIPPING' | translate}} {{'ADDRESS' | translate}}</b>\n        <ion-button  fill=\"clear\" (click)=\"createModal('EditAddressPage','shipping')\">\n          <ion-icon name=\"pencil\"></ion-icon>\n        </ion-button>\n      </div>\n      <span *ngIf=\"isEmptyObject(user.shipping)\">{{'NO_ADDRESS_SAVED' | translate}}</span>\n      <div *ngIf=\"!isEmptyObject(user.billing)\">\n        <p *ngIf=\"user.shipping.company!=''\">{{user.shipping.company}}</p>\n        <p>{{user.shipping.first_name}} {{user.shipping.last_name}}</p>\n        <p>{{user.shipping.address_1}}</p>\n        <p *ngIf=\"user.shipping.address_2!=''\">{{user.shipping.address_2}}</p>\n        <p>{{user.shipping.city}} - {{user.shipping.postcode}}</p>\n        <p>{{user.shipping.state}} • {{user.shipping.country}}</p>\n      </div>\n    </div>\n\n    <div style=\"margin: 20px 10px;\">\n      <span>{{'ADDRESS_USE'|translate}}</span>\n    </div>\n\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=pages-address-address-module.js.map