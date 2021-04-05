(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-account-setting-account-setting-module"],{

/***/ "0WUV":
/*!*************************************************************************!*\
  !*** ./src/app/pages/account-setting/account-setting-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: AccountSettingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountSettingPageRoutingModule", function() { return AccountSettingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _account_setting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account-setting */ "IiHs");




const routes = [
    {
        path: '',
        component: _account_setting__WEBPACK_IMPORTED_MODULE_3__["AccountSettingPage"],
    }
];
let AccountSettingPageRoutingModule = class AccountSettingPageRoutingModule {
};
AccountSettingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AccountSettingPageRoutingModule);



/***/ }),

/***/ "IiHs":
/*!**********************************************************!*\
  !*** ./src/app/pages/account-setting/account-setting.ts ***!
  \**********************************************************/
/*! exports provided: AccountSettingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountSettingPage", function() { return AccountSettingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_account_setting_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./account-setting.html */ "uEZi");
/* harmony import */ var _account_setting_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account-setting.scss */ "omBJ");
/* harmony import */ var _services_loading_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/loading/loading */ "qGMB");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _services_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/providers */ "fC+V");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");









let AccountSettingPage = class AccountSettingPage {
    constructor(navCtrl, formBuilder, user, WC, toast, platform, translate, settings, loader) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.user = user;
        this.WC = WC;
        this.toast = toast;
        this.translate = translate;
        this.settings = settings;
        this.loader = loader;
        this.dir = platform.isRTL ? 'rtl' : 'ltr';
        ;
        this.form_info = this.formBuilder.group({
            first_name: [this.user.first_name, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            last_name: [this.user.last_name, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            email: [this.user.email, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
        this.form_change_pass = formBuilder.group({
            opass: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            npass: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            cpass: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
    }
    backHome() {
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
                if (this.form_change_pass.controls["npass"].value !==
                    this.form_change_pass.controls["cpass"].value) {
                    this.toast.show(x.PASSWORD_NOT_MATCH);
                    return;
                }
            }
            console.log("here1");
            this.loader.show();
            this.WC.updateUserInfo(this.user.id, this.form_info.value).then(res => {
                console.log(res);
                this.user.loggedIn(res);
                if (this.isEmptyObject(this.form_change_pass.value)) {
                    this.loader.dismiss();
                    this.toast.showWithClose(x.PROFILE_UPDATED);
                }
                else {
                    this.user.changePassword(this.form_change_pass.value).then((res) => {
                        console.log(res);
                        this.loader.dismiss();
                        if (res.code == 1) {
                            this.toast.showWithClose(x.PROFILE_UPDATED);
                        }
                        else {
                            this.toast.show(res.message);
                        }
                    }, err => {
                        this.loader.dismiss();
                        console.error(err);
                        this.toast.show(err.code);
                    });
                }
            }, err => {
                this.loader.dismiss();
                console.error(err);
            });
        });
    }
    isEmptyObject(o) {
        return Object.keys(o).every(x => {
            return o[x] === "" || o[x] === null;
        });
    }
};
AccountSettingPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_5__["UserProvider"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_5__["WooCommerceProvider"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_5__["ToastProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_5__["SettingsProvider"] },
    { type: _services_loading_loading__WEBPACK_IMPORTED_MODULE_3__["LoadingProvider"] }
];
AccountSettingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: "page-account-setting",
        template: _raw_loader_account_setting_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_account_setting_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AccountSettingPage);



/***/ }),

/***/ "kEEI":
/*!*****************************************************************!*\
  !*** ./src/app/pages/account-setting/account-setting.module.ts ***!
  \*****************************************************************/
/*! exports provided: AccountSettingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountSettingPageModule", function() { return AccountSettingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _account_setting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account-setting */ "IiHs");
/* harmony import */ var _account_setting_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account-setting-routing.module */ "0WUV");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








let AccountSettingPageModule = class AccountSettingPageModule {
};
AccountSettingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _account_setting__WEBPACK_IMPORTED_MODULE_4__["AccountSettingPage"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _account_setting_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccountSettingPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"].forChild()
        ],
    })
], AccountSettingPageModule);



/***/ }),

/***/ "omBJ":
/*!************************************************************!*\
  !*** ./src/app/pages/account-setting/account-setting.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #f5f5f5 !important;\n}\n\n.account-setting-form {\n  margin: 10px;\n  padding: 4px 16px;\n  background: #fff;\n}\n\n.account-setting-form .list .list-header {\n  border: none;\n  min-height: initial;\n}\n\n.account-setting-form .list .list-header .label {\n  color: #000 !important;\n  font-weight: 600;\n  text-transform: capitalize;\n  margin-bottom: 0px;\n}\n\n.account-setting-form .list .item.item-block {\n  margin-top: 10px;\n}\n\n.account-setting-form .list .item.item-block .item-inner {\n  border: none;\n}\n\n.account-setting-form .list .item.item-block .label[stacked] {\n  margin-bottom: 0px;\n  color: var(--secondary_text_color);\n}\n\n.account-setting-form .list .item.item-block ion-input {\n  border-bottom: 1px solid #c0c0bd;\n  border-radius: 2px;\n}\n\n.account-setting-form .list .item.item-block ion-input input.text-input {\n  margin-top: 0px !important;\n  margin-bottom: 2px !important;\n  font-size: 1.4rem !important;\n  width: calc(100% - 16px) !important;\n}\n\n.account-setting-form .list .item.item-block ion-select {\n  border-bottom: 1px solid #c0c0bd !important;\n  border-radius: 2px !important;\n  padding: 0px !important;\n  margin-top: 0px !important;\n}\n\n.account-setting-form .list .item.item-block ion-select .select-text,\n.account-setting-form .list .item.item-block ion-select .select-text-placeholder {\n  padding: 0px;\n  font-size: 1.4rem;\n}\n\n.account-setting-form .list .item.item-block ion-select .select-icon {\n  content: url('arrow-down.svg') !important;\n  margin: 0px;\n  width: 15px !important;\n  height: 20px !important;\n}\n\n.account-setting-form .list .item.item-block ion-select .select-icon .select-icon-inner {\n  border: 0px !important;\n}\n\n.account-setting-form .list .item.item-block ion-textarea {\n  border-bottom: 1px solid #c0c0bd;\n  border-radius: 2px;\n  margin-top: 0px;\n}\n\n.account-setting-form .list .item.item-block ion-textarea textarea.text-input {\n  margin: 0px !important;\n  font-size: 1.4rem !important;\n  width: calc(100% - 16px) !important;\n}\n\n.account-setting-form .list .item.item-block:last-child {\n  border: none !important;\n  box-shadow: none !important;\n}\n\n.account-setting-form .list .item-input-has-focus ion-input,\n.account-setting-form .list .item-input-has-focus ion-select {\n  border-bottom: 1px solid var(--accent_color) !important;\n}\n\n.footer {\n  background: #fff;\n  padding: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FjY291bnQtc2V0dGluZy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZ0NBQUE7QUFBSjs7QUFHRTtFQUVFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBREo7O0FBSU07RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUFGUjs7QUFJUTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FBRlY7O0FBTU07RUFDRSxnQkFBQTtBQUpSOztBQU1RO0VBQ0UsWUFBQTtBQUpWOztBQU9RO0VBQ0Usa0JBQUE7RUFDQSxrQ0FBQTtBQUxWOztBQVFRO0VBQ0UsZ0NBQUE7RUFDQSxrQkFBQTtBQU5WOztBQVFVO0VBQ0UsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUNBQUE7QUFOWjs7QUFVUTtFQUNFLDJDQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0FBUlY7O0FBVVU7O0VBRUUsWUFBQTtFQUNBLGlCQUFBO0FBUlo7O0FBV1U7RUFDRSx5Q0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBVFo7O0FBV1k7RUFDRSxzQkFBQTtBQVRkOztBQWNRO0VBQ0UsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFaVjs7QUFjVTtFQUNFLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQ0FBQTtBQVpaOztBQWdCUTtFQUNFLHVCQUFBO0VBQ0EsMkJBQUE7QUFkVjs7QUFvQlE7O0VBRUUsdURBQUE7QUFsQlY7O0FBd0JFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FBckJKIiwiZmlsZSI6ImFjY291bnQtc2V0dGluZy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6ICNmNWY1ZjUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hY2NvdW50LXNldHRpbmctZm9ybSB7XG5cbiAgICBtYXJnaW46IDEwcHg7XG4gICAgcGFkZGluZzogNHB4IDE2cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcblxuICAgIC5saXN0IHtcbiAgICAgIC5saXN0LWhlYWRlciB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgbWluLWhlaWdodDogaW5pdGlhbDtcblxuICAgICAgICAubGFiZWwge1xuICAgICAgICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLml0ZW0uaXRlbS1ibG9jayB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG5cbiAgICAgICAgLml0ZW0taW5uZXIge1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sYWJlbFtzdGFja2VkXSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnlfdGV4dF9jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICBpb24taW5wdXQge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzBjMGJkO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcblxuICAgICAgICAgIGlucHV0LnRleHQtaW5wdXQge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTZweCkgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpb24tc2VsZWN0IHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2MwYzBiZCAhaW1wb3J0YW50O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweCAhaW1wb3J0YW50O1xuICAgICAgICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgLnNlbGVjdC10ZXh0LFxuICAgICAgICAgIC5zZWxlY3QtdGV4dC1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc2VsZWN0LWljb24ge1xuICAgICAgICAgICAgY29udGVudDogdXJsKCcuLi8uLi8uLi9hc3NldHMvc3Zncy9hcnJvdy1kb3duLnN2ZycpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcblxuICAgICAgICAgICAgLnNlbGVjdC1pY29uLWlubmVyIHtcbiAgICAgICAgICAgICAgYm9yZGVyOiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpb24tdGV4dGFyZWEge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzBjMGJkO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG5cbiAgICAgICAgICB0ZXh0YXJlYS50ZXh0LWlucHV0IHtcbiAgICAgICAgICAgIG1hcmdpbjpudWxsIG51bGwgbnVsbCAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTZweCkgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuaXRlbS1pbnB1dC1oYXMtZm9jdXMge1xuXG4gICAgICAgIGlvbi1pbnB1dCxcbiAgICAgICAgaW9uLXNlbGVjdCB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWFjY2VudF9jb2xvcikgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5mb290ZXIge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZzogOHB4O1xuICB9Il19 */");

/***/ }),

/***/ "uEZi":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account-setting/account-setting.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button mode=\"md\" fill=\"clear\" icon-only (click)=\"backHome()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{'ACCOUNT'|translate}} {{'SETTING'|translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div class=\"account-setting-form\">\n    <form [formGroup]=\"form_info\" (ngSubmit)=\"submit()\" novalidate>\n      <ion-list no-lines>\n        <ion-list-header mode=\"md\" no-margin no-padding>\n          {{\"INFORMATION\" | translate}}\n        </ion-list-header>\n        <ion-item no-padding>\n          <ion-label position=\"stacked\">{{'FIRST_NAME'| translate }}</ion-label>\n          <ion-input formControlName=\"first_name\" type=\"text\" required [dir]=\"dir\"></ion-input>\n        </ion-item>\n\n        <ion-item no-padding>\n          <ion-label position=\"stacked\">{{'LAST_NAME'| translate }}</ion-label>\n          <ion-input formControlName=\"last_name\" type=\"text\" required [dir]=\"dir\"></ion-input>\n        </ion-item>\n\n        <ion-item no-padding>\n          <ion-label position=\"stacked\">{{'EMAIL' | translate}}</ion-label>\n          <ion-input formControlName=\"email\" required [dir]=\"dir\"></ion-input>\n        </ion-item>\n      </ion-list>\n    </form>\n  </div>\n  <div class=\"account-setting-form\">\n    <form [formGroup]=\"form_change_pass\" (ngSubmit)=\"submit()\" novalidate>\n      <ion-list no-lines>\n        <ion-list-header mode=\"md\" no-margin no-padding>\n          {{\"PASSWORD_INFO\" | translate}}\n        </ion-list-header>\n        <ion-item no-padding>\n          <ion-label position=\"stacked\">{{'OLD'| translate}} {{'PASSWORD'| translate}}</ion-label>\n          <ion-input formControlName=\"opass\" type=\"password\" [dir]=\"dir\"></ion-input>\n        </ion-item>\n\n        <ion-item no-padding>\n          <ion-label position=\"stacked\">{{'NEW'| translate}} {{'PASSWORD'| translate}}</ion-label>\n          <ion-input formControlName=\"npass\" type=\"password\" [dir]=\"dir\"></ion-input>\n        </ion-item>\n\n        <ion-item no-padding>\n          <ion-label position=\"stacked\">{{'CONFIRM_PASSWORD'| translate}}</ion-label>\n          <ion-input formControlName=\"cpass\" type=\"password\" [dir]=\"dir\"></ion-input>\n        </ion-item>\n      </ion-list>\n    </form>\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-button expand=\"full\"  (click)=\"submit()\" class=\"accent-background\">{{'SAVE'| translate}}</ion-button>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=pages-account-setting-account-setting-module.js.map