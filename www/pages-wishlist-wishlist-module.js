(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-wishlist-wishlist-module"],{

/***/ "+94+":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wishlist/wishlist.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button mode=\"md\" fill=\"clear\" icon-only (click)=\"backHome()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{ 'WISHLIST'| translate }} ({{products.length}})</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button mode=\"md\" fill=\"clear\" icon-only (click)=\"showSearch()\">\n        <ion-icon name=\"search\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <div class=\"div\" *ngIf=\"products.length == 0\">\n    <ion-grid class=\"empty\">\n      <ion-row align-items-center>\n        <ion-col align-self-center text-center>\n          <ion-icon name=\"heart-outline\" class=\"accent\"></ion-icon>\n          <h4 margin-top class=\"accent\">{{'NO_WISHLIST' | translate}}</h4>\n          <ion-button class=\"accent-background\" ion-button (click)=\"goTo('ProductPage','')\" margin-top>{{'START_SHOPPING' |\n            translate}}</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <!-- <ion-list no-padding>\n    <ion-item-sliding *ngFor=\"let product of products\">\n      <ion-item tappable (click)=\"goTo('ProductdetailPage', product)\"> \n          <img-loader useImg [src]=\"product.images[0].src\" item-start style=\"max-width:90px\"></img-loader>\n        <h5 [innerHTML]=\"product.name\"></h5>\n        <div class=\"price\">\n          <span [innerHTML]=\"product.price_html\"></span>\n        </div>\n        <rating *ngIf=\"product.average_rating\" max=\"5\" readOnly=\"true\" [(ngModel)]=\"product.average_rating\">\n        </rating>\n        <span class=\"rating_count\" *ngIf=\"product.rating_count\">({{product.rating_count}})</span>\n      </ion-item>\n\n      <ion-item-options side=\"end\">\n        <ion-button icon-top class=\"accent-background\" tappable (click)=\"remove(product)\">\n          <ion-icon name=\"trash\"></ion-icon>\n          {{\"DELETE\"|translate}}\n        </ion-button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list> -->\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6 col-md-3 col-sm-4 *ngFor=\"let product of products\" class=\"wishlist-product\" tappable\n        (click)=\"goTo('ProductdetailPage', product)\">\n        <img-loader useImg [src]=\"product.images[0].src\"></img-loader>\n        <div class=\"wishlist-product-name-container\">\n          <span [innerHTML]=\"product.name\" class=\"wishlist-product-name\"></span>\n          <ion-icon name=\"trash\" class=\"accent\" tappable (click)=\"remove(product);$event.stopPropagation();\"></ion-icon>\n        </div>\n        <div class=\"price\" [innerHTML]=\"product.price_html\"> </div>\n        <rating *ngIf=\"product.average_rating\" max=\"5\" readOnly=\"true\" [(ngModel)]=\"product.average_rating\">\n        </rating>\n        <span class=\"rating_count\" *ngIf=\"product.rating_count\">({{product.rating_count}})</span>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>");

/***/ }),

/***/ "+OxE":
/*!********************************************!*\
  !*** ./src/app/pages/wishlist/wishlist.ts ***!
  \********************************************/
/*! exports provided: WishlistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistPage", function() { return WishlistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_wishlist_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./wishlist.html */ "+94+");
/* harmony import */ var _wishlist_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wishlist.scss */ "NiGx");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _services_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/providers */ "fC+V");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_ShareComponent_search_search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/ShareComponent/search/search */ "y3Op");








let WishlistPage = class WishlistPage {
    constructor(navCtrl, wishlist, modalCtrl, alertCtrl, translate, settings) {
        this.navCtrl = navCtrl;
        this.wishlist = wishlist;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.settings = settings;
        this.products = [];
    }
    backHome() {
        this.navCtrl.back();
    }
    ionViewDidEnter() {
        console.log('ionViewDidEnter wishlist');
    }
    ionViewWillEnter() {
        this.wishlist.load().then(() => {
            this.products = this.wishlist.all;
        });
    }
    goTo(page, params) {
        let navigationExtras = { queryParams: params };
        this.navCtrl.navigateForward(page, navigationExtras);
    }
    goHome() {
        //this.navCtrl.parent.select(0);
        this.navCtrl.navigateRoot("home");
    }
    showSearch() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: src_app_ShareComponent_search_search__WEBPACK_IMPORTED_MODULE_7__["SearchPage"]
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
    remove(product) {
        this.translate.get(['REMOVE_FROM_WISHLIST', 'ARE_YOU_SURE', 'NO', 'YES']).subscribe((x) => {
            this.presentAlert(x.REMOVE_FROM_WISHLIST, x.ARE_YOU_SURE, "", [{
                    text: x.NO
                }, {
                    text: x.YES,
                    handler: () => {
                        this.reloadWish(product);
                    }
                }]);
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
    reloadWish(product) {
        this.wishlist.remove(product);
        this.products = this.wishlist.all;
    }
};
WishlistPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_4__["WishlistProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_4__["SettingsProvider"] }
];
WishlistPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'page-wishlist',
        template: _raw_loader_wishlist_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_wishlist_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], WishlistPage);



/***/ }),

/***/ "4/DR":
/*!*****************************************************************************!*\
  !*** ./node_modules/ionic4-rating/__ivy_ngcc__/dist/ionic-rating.module.js ***!
  \*****************************************************************************/
/*! exports provided: IonicRatingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicRatingModule", function() { return IonicRatingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_rating__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/rating */ "CbC+");

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var IonicRatingModule = /** @class */ (function () {
    function IonicRatingModule() {
    }
IonicRatingModule.ɵfac = function IonicRatingModule_Factory(t) { return new (t || IonicRatingModule)(); };
IonicRatingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: IonicRatingModule });
IonicRatingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IonicRatingModule, { declarations: function () { return [_components_rating__WEBPACK_IMPORTED_MODULE_4__["RatingComponent"]]; }, imports: function () { return [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]]; }, exports: function () { return [_components_rating__WEBPACK_IMPORTED_MODULE_4__["RatingComponent"]]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IonicRatingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]],
                exports: [_components_rating__WEBPACK_IMPORTED_MODULE_4__["RatingComponent"]],
                declarations: [_components_rating__WEBPACK_IMPORTED_MODULE_4__["RatingComponent"]]
            }]
    }], function () { return []; }, null); })();
    return IonicRatingModule;
}());


//# sourceMappingURL=ionic-rating.module.js.map

/***/ }),

/***/ "CbC+":
/*!***************************************************************************!*\
  !*** ./node_modules/ionic4-rating/__ivy_ngcc__/dist/components/rating.js ***!
  \***************************************************************************/
/*! exports provided: RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return RatingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




function RatingComponent_ion_button_1_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingComponent_ion_button_1_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var i_r2 = ctx.index; var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onClick(i_r2 + 1); })("mouseover", function RatingComponent_ion_button_1_Template_ion_button_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var i_r2 = ctx.index; var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.hoverRate = i_r2 + 1; })("mouseleave", function RatingComponent_ion_button_1_Template_ion_button_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.hoverRate = 0; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var i_r2 = ctx.index;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.readonly)("size", ctx_r0.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("filled", i_r2 + 1 <= ctx_r0.hoverRate || !ctx_r0.hoverRate && i_r2 + 1 <= ctx_r0.rate);
} }
var _c0 = function () { return [1, 2, 3, 4, 5]; };
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RatingComponent = /** @class */ (function () {
    function RatingComponent() {
        this.size = 'default';
        this.rateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    RatingComponent_1 = RatingComponent;
    RatingComponent.prototype.onClick = function (rate) {
        this.rate = rate;
        this.rateChange.emit(this.rate);
        this._onChange(this.rate);
    };
    RatingComponent.prototype.writeValue = function (value) {
        if (value !== undefined) {
            this.rate = value;
        }
    };
    RatingComponent.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    RatingComponent.prototype.registerOnTouched = function (fn) { };
    RatingComponent.prototype.setDisabledState = function (isDisabled) {
        this.readonly = isDisabled;
    };
    var RatingComponent_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], RatingComponent.prototype, "rate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], RatingComponent.prototype, "readonly", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], RatingComponent.prototype, "size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], RatingComponent.prototype, "rateChange", void 0);
RatingComponent.ɵfac = function RatingComponent_Factory(t) { return new (t || RatingComponent)(); };
RatingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RatingComponent, selectors: [["rating"]], inputs: { size: "size", rate: "rate", readonly: "readonly" }, outputs: { rateChange: "rateChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return RatingComponent_1; }),
                multi: true
            }
        ])], decls: 2, vars: 2, consts: [["fill", "clear", 3, "disabled", "size", "click", "mouseover", "mouseleave", 4, "ngFor", "ngForOf"], ["fill", "clear", 3, "disabled", "size", "click", "mouseover", "mouseleave"], ["slot", "icon-only", "name", "star-outline"]], template: function RatingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RatingComponent_ion_button_1_Template, 2, 4, "ion-button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"]], styles: ["ion-buttons[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: center;\n      }\n\n      [ion-button][disabled][_ngcontent-%COMP%] {\n        opacity: 1;\n      }\n\n      ion-icon[_ngcontent-%COMP%] {\n        color: orange;\n      }\n\n      ion-icon.filled[_ngcontent-%COMP%] {\n        color: orange;\n      }"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RatingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "rating",
                template: "\n    <ion-buttons>\n      <ion-button [disabled]=\"readonly\" fill=\"clear\" [size]=\"size\" *ngFor=\"let current of [1, 2, 3, 4, 5]; let i = index\"\n        (click)=\"onClick(i + 1)\" (mouseover)=\"hoverRate = i + 1\" (mouseleave)=\"hoverRate = 0\">\n        <ion-icon slot=\"icon-only\" name=\"{{(i + 1 <= hoverRate || (!hoverRate && i + 1 <= rate))?'star':'star-outline'}}\" [class.filled]=\"(i + 1 <= hoverRate || (!hoverRate && i + 1 <= rate))\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  ",
                styles: [
                    "\n      ion-buttons {\n        display: flex;\n        justify-content: center;\n      }\n\n      [ion-button][disabled] {\n        opacity: 1;\n      }\n\n      ion-icon {\n        color: orange;\n      }\n\n      ion-icon.filled {\n        color: orange;\n      }\n    "
                ],
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return RatingComponent_1; }),
                        multi: true
                    }
                ]
            }]
    }], function () { return []; }, { size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], rate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], readonly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
    return RatingComponent;
}());


//# sourceMappingURL=rating.js.map

/***/ }),

/***/ "NiGx":
/*!**********************************************!*\
  !*** ./src/app/pages/wishlist/wishlist.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100%;\n  color: var(--accent_color);\n  padding-top: 40%;\n  text-align: center;\n}\n.div ion-icon {\n  display: inline-block;\n  font-size: 4rem;\n}\n.wishlist-product .wishlist-product-name-container {\n  display: flex;\n  margin-top: 10px;\n}\n.wishlist-product .wishlist-product-name-container .wishlist-product-name {\n  flex: 1;\n  font-size: 16px;\n  font-weight: 700;\n  margin: 20px 5px;\n}\n.wishlist-product .wishlist-product-name-container .icon {\n  font-size: 30px;\n  position: absolute;\n}\n.wishlist-product .price {\n  font-size: 14px;\n  margin: 5px 0px 5px 5px;\n}\n.wishlist-product rating {\n  float: start;\n  margin: 5px;\n}\n.wishlist-product rating ul {\n  padding: 0px;\n  margin: 0px;\n}\n.wishlist-product rating ul.rating li {\n  padding: 0px 2px 0px 0px !important;\n  background: none;\n  color: #ffb400;\n}\n.wishlist-product rating ul.rating li ion-icon {\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3dpc2hsaXN0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQUNJO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0FBQ047QUFJSTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQUROO0FBRU07RUFDRSxPQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFBUjtBQUVNO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBQVI7QUFHSTtFQUNFLGVBQUE7RUFDQSx1QkFBQTtBQUROO0FBR0k7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUROO0FBRU07RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUFSO0FBRVE7RUFDRSxtQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUFWO0FBRVU7RUFDRSxlQUFBO0FBQVoiLCJmaWxlIjoid2lzaGxpc3Quc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAuZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnRfY29sb3IpIDtcbiAgICBwYWRkaW5nLXRvcDogNDAlOztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaW9uLWljb24ge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgZm9udC1zaXplOiA0cmVtO1xuICAgIH1cbiAgfVxuXG4gIC53aXNobGlzdC1wcm9kdWN0IHtcbiAgICAud2lzaGxpc3QtcHJvZHVjdC1uYW1lLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIC53aXNobGlzdC1wcm9kdWN0LW5hbWUge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIG1hcmdpbjpudWxsIDIwcHggbnVsbCA1cHg7XG4gICAgICB9XG4gICAgICAuaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgfVxuICAgIH1cbiAgICAucHJpY2Uge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbWFyZ2luOjVweCAwcHggNXB4IDVweDtcbiAgICB9XG4gICAgcmF0aW5nIHtcbiAgICAgIGZsb2F0OnN0YXJ0O1xuICAgICAgbWFyZ2luOm51bGwgbnVsbCBudWxsIDVweDtcbiAgICAgIHVsIHtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICBtYXJnaW46IDBweDtcblxuICAgICAgICAmLnJhdGluZyBsaSB7XG4gICAgICAgICAgcGFkZGluZzowcHggMnB4IDBweCAwcHghaW1wb3J0YW50O1xuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgY29sb3I6ICNmZmI0MDA7XG5cbiAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0= */");

/***/ }),

/***/ "UPfu":
/*!***********************************************************!*\
  !*** ./src/app/pages/wishlist/wishlist-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: WishlistPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistPageRoutingModule", function() { return WishlistPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wishlist */ "+OxE");




const routes = [
    {
        path: '',
        component: _wishlist__WEBPACK_IMPORTED_MODULE_3__["WishlistPage"],
    }
];
let WishlistPageRoutingModule = class WishlistPageRoutingModule {
};
WishlistPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], WishlistPageRoutingModule);



/***/ }),

/***/ "Xcyb":
/*!***************************************************************!*\
  !*** ./node_modules/ionic4-rating/__ivy_ngcc__/dist/index.js ***!
  \***************************************************************/
/*! exports provided: IonicRatingModule, RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ionic_rating_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ionic-rating.module */ "4/DR");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicRatingModule", function() { return _ionic_rating_module__WEBPACK_IMPORTED_MODULE_0__["IonicRatingModule"]; });

/* harmony import */ var _components_rating__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/rating */ "CbC+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return _components_rating__WEBPACK_IMPORTED_MODULE_1__["RatingComponent"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "rCse":
/*!***************************************************!*\
  !*** ./src/app/pages/wishlist/wishlist.module.ts ***!
  \***************************************************/
/*! exports provided: WishlistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistPageModule", function() { return WishlistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ionic-image-loader-v5 */ "JBbo");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var ionic4_rating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ionic4-rating */ "Xcyb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wishlist */ "+OxE");
/* harmony import */ var _wishlist_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wishlist-routing.module */ "UPfu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "eHpL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");










let WishlistPageModule = class WishlistPageModule {
};
WishlistPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        declarations: [
            _wishlist__WEBPACK_IMPORTED_MODULE_5__["WishlistPage"],
        ],
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonicModule"],
            _wishlist_routing_module__WEBPACK_IMPORTED_MODULE_6__["WishlistPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forChild(),
            ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_1__["IonicImageLoaderModule"],
            ionic4_rating__WEBPACK_IMPORTED_MODULE_3__["IonicRatingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"]
        ],
        providers: [_ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_8__["WebView"]]
    })
], WishlistPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-wishlist-wishlist-module.js.map