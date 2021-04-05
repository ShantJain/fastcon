(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-productdetail-productdetail-module"],{

/***/ "/ROT":
/*!**************************************************************!*\
  !*** ./src/app/pages/productdetail/mini-cart/mini-cart.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".accent {\n  color: var(--accent_color) !important;\n}\n\n.msg {\n  padding: 5px;\n  text-align: center;\n  margin: 0 15% auto;\n  border: 1px dashed #ccc;\n  border-width: 2px;\n  margin-bottom: 5px;\n}\n\n.header::after,\n.footer::before {\n  display: none;\n}\n\n.fixed-content {\n  border-bottom: 1px solid #eee;\n}\n\n.row .col {\n  padding: 5px 0;\n}\n\n.row .col .button {\n  border-left: 1px solid #ddd;\n  height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL21pbmktY2FydC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UscUNBQUE7QUFBRjs7QUFFRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUU7O0VBRUUsYUFBQTtBQUNKOztBQUVFO0VBQ0UsNkJBQUE7QUFDSjs7QUFFRTtFQUNFLGNBQUE7QUFDSjs7QUFDSTtFQUNFLDJCQUFBO0VBQ0EsWUFBQTtBQUNOIiwiZmlsZSI6Im1pbmktY2FydC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uYWNjZW50e1xuICBjb2xvcjogdmFyKC0tYWNjZW50X2NvbG9yKSAhaW1wb3J0YW50O1xufVxuICAubXNnIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMCAxNSUgYXV0bztcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgI2NjYztcbiAgICBib3JkZXItd2lkdGg6IDJweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cblxuICAuaGVhZGVyOjphZnRlcixcbiAgLmZvb3Rlcjo6YmVmb3JlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmZpeGVkLWNvbnRlbnQge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuICB9XG5cbiAgLnJvdyAuY29sIHtcbiAgICBwYWRkaW5nOiA1cHggMDtcblxuICAgIC5idXR0b24ge1xuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgIH1cbiAgfSJdfQ== */");

/***/ }),

/***/ "0Jvj":
/*!********************************************************!*\
  !*** ./src/app/pages/productdetail/reviews/reviews.ts ***!
  \********************************************************/
/*! exports provided: ReviewsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsPage", function() { return ReviewsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_reviews_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./reviews.html */ "NC/o");
/* harmony import */ var _reviews_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reviews.scss */ "H8ni");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/providers */ "fC+V");
/* harmony import */ var _add_review_add_review__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-review/add-review */ "ipuk");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








let ReviewsPage = class ReviewsPage {
    constructor(navCtrl, WC, zone, route, settings, user, modalCtrl) {
        this.navCtrl = navCtrl;
        this.zone = zone;
        this.route = route;
        this.settings = settings;
        this.user = user;
        this.modalCtrl = modalCtrl;
        this.route.queryParams.subscribe(params => {
            this.product = params.params;
        });
        WC.getProductReviews(this.product.id).then((data) => {
            this.zone.run(() => {
                this.reviews = data;
            });
        });
        WC.getReviewSettings(this.product.id, this.user.id);
    }
    ionViewDidEnter() {
        console.log('ionViewDidEnter ReviewsPage');
    }
    promptReview() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _add_review_add_review__WEBPACK_IMPORTED_MODULE_6__["AddReviewPage"],
                componentProps: this.product
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            if (data != null) {
                if (data && data.status && data.status === 'approved') {
                    this.reviews.unshift(data);
                }
            }
        });
    }
};
ReviewsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_5__["WooCommerceProvider"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_5__["SettingsProvider"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_5__["UserProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
ReviewsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'page-reviews',
        template: _raw_loader_reviews_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reviews_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ReviewsPage);



/***/ }),

/***/ "2oBd":
/*!*********************************************************************!*\
  !*** ./src/app/pages/productdetail/productdetail-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ProductdetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductdetailPageRoutingModule", function() { return ProductdetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _productdetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./productdetail */ "ZdgJ");




const routes = [
    {
        path: '',
        component: _productdetail__WEBPACK_IMPORTED_MODULE_3__["ProductdetailPage"],
    }
];
let ProductdetailPageRoutingModule = class ProductdetailPageRoutingModule {
};
ProductdetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ProductdetailPageRoutingModule);



/***/ }),

/***/ "3T5i":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/productdetail/mini-cart/mini-cart.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button icon-only>\n        <ion-icon name=\"checkmark\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{\"ADDED_TO_CART\" | translate}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button icon-only tappable (click)=\"dismiss()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <div class=\"msg\" [innerHTML]=\"msg\"></div>\n</ion-content>\n\n<ion-footer>\n  <ion-row>\n    <ion-col size=\"6\">\n      <ion-button expand=\"full\" fill=\"clear\"  class=\"accent\" (click)=\"dismiss('back')\">\n        {{'CONTINUE_BROWSING' | translate }}\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"6\" style=\"border-left: 1px solid #ccc;\">\n      <ion-button expand=\"full\" fill=\"clear\" class=\"accent\" (click)=\"dismiss('root')\">\n        {{'GO_TO_HOME' | translate }}\n      </ion-button>\n    </ion-col>\n  </ion-row>\n  <ion-button style=\"color: black;margin: 0;height: 50px;\" expand=\"full\" class=\"accent-background\" icon-end\n    (click)=\"dismiss('cart')\">\n    {{('GO_TO_CART' | translate )}} ({{settings.cartCount}}) &nbsp;\n    <ion-icon name=\"arrow-forward\"></ion-icon>\n  </ion-button>\n</ion-footer>\n");

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

/***/ "H8ni":
/*!**********************************************************!*\
  !*** ./src/app/pages/productdetail/reviews/reviews.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("page-reviews .loader_outer {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\npage-reviews .loader_outer .no-reviews {\n  font-size: 1.8rem;\n  font-weight: 500;\n}\npage-reviews .loader_outer .no-reviews .review-first {\n  margin-top: 20px;\n}\npage-reviews .reviews {\n  margin-bottom: 8px;\n}\npage-reviews .reviews .reviewer-name span:nth-of-type(1) {\n  font-weight: 700;\n}\npage-reviews .rating {\n  padding: 0px !important;\n  margin: 0px !important;\n  display: inline-block;\n}\npage-reviews .rating.rating li {\n  padding: 0px 2px 0px 0px !important;\n  background: none;\n  color: var(--accent_color) !important;\n}\npage-reviews .rating.rating li ion-icon {\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Jldmlld3Muc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUFKO0FBRUk7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBQU47QUFFTTtFQUNFLGdCQUFBO0FBQVI7QUFLRTtFQUNFLGtCQUFBO0FBSEo7QUFNTTtFQUNFLGdCQUFBO0FBSlI7QUFTRTtFQUNFLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQVBKO0FBU0k7RUFDRSxtQ0FBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7QUFQTjtBQVNNO0VBQ0UsZUFBQTtBQVBSIiwiZmlsZSI6InJldmlld3Muc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInBhZ2UtcmV2aWV3cyB7XG4gIC5sb2FkZXJfb3V0ZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAubm8tcmV2aWV3cyB7XG4gICAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG5cbiAgICAgIC5yZXZpZXctZmlyc3Qge1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5yZXZpZXdzIHtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG5cbiAgICAucmV2aWV3ZXItbmFtZSB7XG4gICAgICBzcGFuOm50aC1vZi10eXBlKDEpIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAucmF0aW5nIHtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAgICYucmF0aW5nIGxpIHtcbiAgICAgIHBhZGRpbmc6MHB4IDJweCAwcHggMHB4IWltcG9ydGFudDtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBjb2xvcjogdmFyKC0tYWNjZW50X2NvbG9yKSAhaW1wb3J0YW50O1xuXG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "NC/o":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/productdetail/reviews/reviews.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\n  <ion-toolbar>\n    <ion-title>Reviews</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class=\"loader_outer\" *ngIf=\"!reviews\">\n    <div class=\"loader\"></div>\n  </div>\n  <div class=\"loader_outer\" *ngIf=\"reviews && reviews.length==0\">\n    <div class=\"no-reviews\">\n      There are no reviews yet.\n      <div class=\"review-first\" *ngIf=\"settings.reviewSettings.enable_reviews && (!settings.reviewSettings.review_rating_verification_required ||\n       (settings.reviewSettings.review_rating_verification_required && settings.reviewSettings.user_bought_product))\">\n        Be the first to review “{{product.name}}”.\n      </div>\n    </div>\n  </div>\n  <ion-list mode=\"md\" no-padding *ngIf=\"reviews && reviews.length>0\">\n    <ng-container *ngFor=\"let x of reviews\">\n      <ion-item text-wrap class=\"reviews\" no-padding text-wrap *ngIf=\"x.status == 'approved'\">\n        <div class=\"reviewer-name\"><span [innerHTML]=\"x.reviewer\"></span> <span *ngIf=\"settings.reviewSettings.review_rating_verification_label && x.verified\">(verified\n            owner)</span></div>\n        <div>\n          <rating *ngIf=\"x.rating\" max=\"5\" readOnly=\"true\" [(ngModel)]=\"x.rating\" class=\"rating\"> </rating>\n          <span class=\"ago\">{{x.date_created | moment:\"ago\" | lowercase}}</span>\n        </div>\n        <div [innerHTML]=\"x.review\"></div>\n      </ion-item>\n    </ng-container>\n  </ion-list>\n\n  <ion-fab bottom end *ngIf=\"settings.reviewSettings.enable_reviews && (!settings.reviewSettings.review_rating_verification_required ||\n  (settings.reviewSettings.review_rating_verification_required && settings.reviewSettings.user_bought_product))\">\n    <ion-button ion-fab class=\"accent-background\" (click)=\"promptReview()\">\n      <ion-icon name=\"create\"></ion-icon>\n    </ion-button>\n  </ion-fab>\n</ion-content>");

/***/ }),

/***/ "Nbfl":
/*!***************************************************************!*\
  !*** ./src/app/pages/productdetail/reviews/reviews.module.ts ***!
  \***************************************************************/
/*! exports provided: ReviewsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsPageModule", function() { return ReviewsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../pipes/pipes.module */ "iTUp");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _reviews__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reviews */ "0Jvj");
/* harmony import */ var ionic4_rating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic4-rating */ "Xcyb");
/* harmony import */ var _add_review_add_review__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-review/add-review */ "ipuk");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");









let ReviewsPageModule = class ReviewsPageModule {
};
ReviewsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _reviews__WEBPACK_IMPORTED_MODULE_4__["ReviewsPage"], _add_review_add_review__WEBPACK_IMPORTED_MODULE_6__["AddReviewPage"]
        ],
        entryComponents: [_add_review_add_review__WEBPACK_IMPORTED_MODULE_6__["AddReviewPage"], _reviews__WEBPACK_IMPORTED_MODULE_4__["ReviewsPage"]],
        exports: [_add_review_add_review__WEBPACK_IMPORTED_MODULE_6__["AddReviewPage"], _reviews__WEBPACK_IMPORTED_MODULE_4__["ReviewsPage"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forChild(),
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__["PipesModule"],
            ionic4_rating__WEBPACK_IMPORTED_MODULE_5__["IonicRatingModule"]
        ],
    })
], ReviewsPageModule);



/***/ }),

/***/ "VpAn":
/*!************************************************************!*\
  !*** ./src/app/pages/productdetail/mini-cart/mini-cart.ts ***!
  \************************************************************/
/*! exports provided: MiniCartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniCartPage", function() { return MiniCartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_mini_cart_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./mini-cart.html */ "3T5i");
/* harmony import */ var _mini_cart_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mini-cart.scss */ "/ROT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/providers */ "fC+V");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







let MiniCartPage = class MiniCartPage {
    constructor(navCtrl, viewCtrl, settings, route) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.settings = settings;
        this.route = route;
    }
    set MiniCartData(d) {
        this.msg = d;
    }
    ionViewDidEnter() {
        console.log('ionViewDidEnter MiniCartPage');
    }
    dismiss(action) {
        this.viewCtrl.dismiss(action);
    }
};
MiniCartPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_5__["SettingsProvider"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
];
MiniCartPage.propDecorators = {
    MiniCartData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ["MiniCartData",] }]
};
MiniCartPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'page-mini-cart',
        template: _raw_loader_mini_cart_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_mini_cart_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MiniCartPage);



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

/***/ "ZdgJ":
/*!******************************************************!*\
  !*** ./src/app/pages/productdetail/productdetail.ts ***!
  \******************************************************/
/*! exports provided: ProductdetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductdetailPage", function() { return ProductdetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_productdetail_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./productdetail.html */ "sPM5");
/* harmony import */ var _productdetail_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./productdetail.scss */ "ofNp");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "U3FU");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_providers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/providers */ "fC+V");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "/XPu");
/* harmony import */ var _services_Events__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/Events */ "3C+A");
/* harmony import */ var _mini_cart_mini_cart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mini-cart/mini-cart */ "VpAn");
/* harmony import */ var src_app_ShareComponent_search_search__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/ShareComponent/search/search */ "y3Op");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "tyNb");















let ProductdetailPage = class ProductdetailPage {
    constructor(navCtrl, WC, wishlist, toast, loader, restClient, translate, platform, alertCtrl, socialSharing, events, iab, settings, zone, modalCtrl, route, photoViewer) {
        this.navCtrl = navCtrl;
        this.WC = WC;
        this.wishlist = wishlist;
        this.toast = toast;
        this.loader = loader;
        this.restClient = restClient;
        this.translate = translate;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.socialSharing = socialSharing;
        this.events = events;
        this.iab = iab;
        this.settings = settings;
        this.zone = zone;
        this.modalCtrl = modalCtrl;
        this.route = route;
        this.photoViewer = photoViewer;
        this.postcodeEnter = true;
        this.deliveryDetails = {};
        this.pattern = /\[.+\]/g;
        this.slidesPerView = 2.5;
        if (this.platform.width() >= 800) {
            this.slidesPerView = 3.5;
        }
        else if (this.platform.width() >= 600) {
            this.slidesPerView = 2.8;
        }
        else if (this.platform.width() >= 412) {
            this.slidesPerView = 2.5;
        }
        else if (this.platform.width() >= 319) {
            this.slidesPerView = 2.3;
        }
        this.dir = platform.isRTL ? 'rtl' : 'ltr';
        ;
        this.events.subscribe("Loaded Product", () => {
            console.log("Test");
            this.setupProduct();
        });
        this.route.queryParams.subscribe(params => {
            console.log(params);
            if (params.id) {
                this.WC.getProductById(null, params['id']).then((res) => {
                    if (res) {
                        this.product = res;
                        this.events.publish("Loaded Product");
                    }
                    else {
                        this.toast.show("Something wrong from server");
                        this.navCtrl.pop();
                    }
                }, (err) => {
                    this.toast.showError();
                    this.navCtrl.pop();
                });
            }
            else if (params && params['isReferedByDeeplinks']) {
                console.log("Deeplinks");
                this.loader.show();
                this.WC.getProductByUrl(params['link']).then((res) => {
                    if (res) {
                        this.product = res;
                        this.events.publish("Loaded Product");
                    }
                    else {
                        this.toast.showError();
                        this.navCtrl.pop();
                    }
                }, (err) => {
                    this.toast.showError();
                    this.navCtrl.pop();
                });
            }
            else {
                console.log("default");
                this.product = params;
                this.events.publish("Loaded Product");
            }
        });
    }
    back() {
        this.navCtrl.back();
    }
    setupProduct() {
        if (!this.product.extraImages) {
            this.product.extraImages = [];
        }
        if (!this.product.var_attributes) {
            this.product.var_attributes = [];
            for (let at of this.product.attributes) {
                if (at.variation) {
                    this.product.var_attributes.push(at);
                }
            }
        }
        if (!this.product.attr) {
            this.product.attr = {};
        }
        this.postcode = this.settings.postcode;
        if (this.postcode && this.settings.all.appSettings.pincode_active) {
            this.submitPincodeCheck(this.postcode);
        }
        if (this.product.type == "variable" || this.product.type == "simple") {
            this.product.quantity = 1;
        }
        if (this.product.related_ids.length > 0 && !this.product.related) {
            this.WC.getProductById(this.product.related_ids.join()).then((x) => {
                this.zone.run(() => {
                    this.product.related = x;
                });
            });
        }
        if (this.product.upsell_ids.length > 0 && !this.product.upsell) {
            this.WC.getProductById(this.product.upsell_ids.join()).then((x) => {
                this.zone.run(() => {
                    this.product.upsell = x;
                });
            });
        }
        if (this.product.grouped_products.length > 0 &&
            !this.product.grouped_products[0].name) {
            this.WC.getProductById(this.product.grouped_products.join()).then((x) => {
                x.map((element) => {
                    element.quantity = 0;
                });
                this.zone.run(() => {
                    this.product.grouped_products = x;
                });
            });
        }
        console.log(this.product);
    }
    ionViewDidEnter() {
        if (this.product) {
            this.events.publish("view:enter", "Single Product Page - " + this.product.name);
        }
        else {
            this.events.publish("view:enter", "Single Product Page - ");
        }
    }
    loadVariation(data) {
        this.loader.show();
        console.log("Loading Variation");
        this.WC.getProductVariation(data).then((res) => {
            this.loader.dismiss();
            console.log(res);
            if (!res.error) {
                this.setVariation(res);
            }
            else {
                this.product.issetVariation = false;
                this.toast.showWithClose("Currently This variation is not available. Select a different Variation");
            }
        }, (err) => {
            console.log(err);
            this.toast.showError();
            this.loader.dismiss();
            this.product.issetVariation = false;
        });
    }
    setVariation(x) {
        if (x.image.src) {
            this.product.extraImages = [x.image];
        }
        let newArr = [];
        for (let i = 0; i < x.woo_variation_gallery_images.length; i++) {
            if (x.woo_variation_gallery_images[i].src != "") {
                newArr.push(x.woo_variation_gallery_images[i]);
            }
        }
        this.product.extraImages = [...this.product.extraImages, ...newArr];
        this.product.variationImages = [...x.woo_variation_gallery_images];
        //this.slider.slideTo(0);
        this.product.variation_id = x.id;
        this.product.price = x.price;
        this.product.price_html = x.price_html;
        this.product.regular_price = x.regular_price;
        this.product.on_sale = x.on_sale;
        this.product.in_stock = x.in_stock;
        this.product.variation_selected = x;
        this.product.quantity = 1;
        this.product.issetVariation = true;
    }
    setFav(product) {
        this.wishlist.add(product);
    }
    showSearch() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: src_app_ShareComponent_search_search__WEBPACK_IMPORTED_MODULE_12__["SearchPage"],
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            if (data && data.page) {
                this.goTo(data.page, data.params);
            }
        });
    }
    goTo(page, params) {
        console.log(params);
        let navigationExtras = { queryParams: params };
        this.navCtrl.navigateForward(page, navigationExtras);
    }
    onCheckChange(e, item) {
        console.log(e.checked);
        if (e.checked) {
            item.quantity = 1;
        }
        else {
            item.quantity = 0;
        }
    }
    decreaseQuantity(i) {
        //console.log(i);
        if (this.product.type == "grouped") {
            if (this.product.grouped_products[i].quantity > 0) {
                this.product.grouped_products[i].quantity--;
            }
        }
        else {
            if (this.product.quantity > 1) {
                this.product.quantity--;
            }
        }
    }
    increaseQuantity(i) {
        this.translate.get(["NO_MORE_ADD"]).subscribe((x) => {
            if (this.product.type == "grouped") {
                this.product.grouped_products[i].quantity++;
            }
            else if (this.product.type == "variable") {
                if (this.product.issetVariation) {
                    if (this.product.variation_selected.manage_stock == "parent") {
                        if (this.product.manage_stock) {
                            if (this.product.quantity < this.product.stock_quantity) {
                                this.product.quantity++;
                            }
                            else {
                                this.toast.show(x.NO_MORE_ADD);
                            }
                        }
                        else {
                            this.product.quantity++;
                        }
                    }
                    else if (this.product.variation_selected.manage_stock) {
                        if (this.product.quantity <
                            this.product.variation_selected.stock_quantity) {
                            this.product.quantity++;
                        }
                        else {
                            this.toast.show(x.NO_MORE_ADD);
                        }
                    }
                    else {
                        this.product.quantity++;
                    }
                }
                else {
                    this.translate.get(["VALID_VARIATION"]).subscribe((x) => {
                        this.toast.show("Select a valid variation");
                    });
                }
            }
            else {
                if (this.product.manage_stock) {
                    if (this.product.quantity < this.product.stock_quantity) {
                        this.product.quantity++;
                    }
                    else {
                        this.toast.show(x.NO_MORE_ADD);
                    }
                }
                else {
                    this.product.quantity++;
                }
            }
        });
    }
    onChange() {
        if (Object.keys(this.product.attr).length ==
            this.product.var_attributes.length) {
            let data = {
                product_id: this.product.id,
                attributes: this.product.attr,
            };
            console.log(data);
            this.loadVariation(data);
        }
    }
    onVariationChange(key, option) {
        if (option.slug == "pa_color") {
            this.color = option.name;
        }
        else {
            this.size = option.name;
        }
        if (this.product.attr[key] == (option.slug ? option.slug : option)) {
            return;
        }
        this.product.attr = Object.assign(Object.assign({}, this.product.attr), { [key]: option.name ? option.name : option.slug });
        console.log(this.product.attr);
        let data = {
            product_id: this.product.id,
            attributes: this.product.attr,
        };
        console.log(JSON.stringify(data));
        this.loadVariation(data);
    }
    addToCart(isBuyNow) {
        this.translate
            .get([
            "PINCODE",
            "NO_DELIVERY",
            "SELECT_ONE_PRODUCT",
            "SELECT_PRODUCT_QUANTITY",
            "VALID_VARIATION",
        ])
            .subscribe((x) => {
            if (this.settings.all.appSettings.pincode_active) {
                if (!this.postcode) {
                    this.toast.show(x.PINCODE);
                    return;
                }
                if (this.postcode && !this.deliveryDetails.delivery) {
                    this.toast.show(x.NO_DELIVERY);
                    return;
                }
            }
            let data = {
                id: this.product.id,
            };
            console.log(this.product.type);
            console.log(this.product.issetVariation);
            if (this.product.type == "grouped") {
                if (this.product.grouped_products.every((element) => {
                    return element.quantity == 0;
                })) {
                    this.toast.show(x.SELECT_ONE_PRODUCT);
                    return;
                }
                data.quantity = {};
                for (let i in this.product.grouped_products) {
                    if (this.product.grouped_products[i].quantity > 0) {
                        data.quantity[this.product.grouped_products[i].id] = this.product.grouped_products[i].quantity;
                    }
                }
            }
            else if (this.product.type == "simple") {
                if (!this.product.quantity || this.product.quantity == 0) {
                    this.toast.show(x.SELECT_PRODUCT_QUANTITY);
                    return;
                }
                data.quantity = this.product.quantity;
            }
            else {
                data.quantity = this.product.quantity;
                if (this.product.issetVariation) {
                    data.variation_id = this.product.variation_id;
                    data.variation = this.product.attr;
                    //let temp = this.product.variation_selected.permalink.substring(this.product.variation_selected.permalink.lastIndexOf("?") + 1).split('&');
                }
                else {
                    this.toast.show(x.VALID_VARIATION);
                    return;
                }
            }
            console.log(data);
            this.loader.show();
            this.restClient
                .addToCart(data)
                .then((res) => {
                this.loader.dismiss();
                console.log(res);
                let data = JSON.parse(res.data);
                let msg = data instanceof Array
                    ? data.map((e) => e.message).join(", ")
                    : data.message;
                if (this.isError(data)) {
                    this.toast.showWithClose(msg);
                }
                else {
                    if (isBuyNow) {
                        this.goTo("myCart", "");
                    }
                    else {
                        this.viewCart(msg);
                    }
                    this.events.publish("cartchanged");
                }
            })
                .catch((err) => {
                console.log(err);
                this.loader.dismiss();
            });
        });
    }
    share(product) {
        if (!this.platform.is("cordova")) {
            this.translate
                .get(["OK", "ONLY_DEVICE", "ONLY_DEVICE_DESC"])
                .subscribe((x) => {
                this.presentAlert(x.ONLY_DEVICE, x.ONLY_DEVICE_DESC, [{ text: x.OK }]);
                return false;
            });
        }
        else {
            let img = [];
            for (let i in product.images)
                img.push(product.images[i].src);
            this.socialSharing
                .share(product.name, product.name, img, product.permalink)
                .then((x) => {
                console.log(x);
                this.translate.get(["SHARED"]).subscribe((x) => {
                    this.toast.show("Successfully shared");
                });
            })
                .catch((err) => {
                console.log(err);
            });
        }
    }
    presentAlert(header, message, buttons) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let confirm = yield this.alertCtrl.create({
                header: header,
                message: message,
                buttons: buttons
            });
            yield confirm.present();
        });
    }
    buyExternal() {
        this.iab.create(this.product.external_url, "_system");
    }
    submitPincodeCheck(newPostCode) {
        if (!this.postcodeEnter) {
            this.postcodeEnter = true;
            return;
        }
        this.loader.show();
        this.WC.checkPincode(newPostCode, this.product.id).then((res) => {
            this.loader.dismiss();
            console.log(res);
            this.postcode = newPostCode;
            this.postcodeEnter = false;
            console.log(this.postcode);
            this.settings.setSettings(this.postcode, "postcode");
            this.deliveryDetails = res;
        }, (err) => {
            this.loader.dismiss();
            this.toast.showError();
        });
    }
    viewCart(data1) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _mini_cart_mini_cart__WEBPACK_IMPORTED_MODULE_11__["MiniCartPage"],
                componentProps: { "MiniCartData": data1 },
                cssClass: "mini-cart",
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            if (data != null) {
                if (data && data == "root") {
                    this.navCtrl.navigateRoot("home");
                }
                else if (data == "back") {
                    this.navCtrl.pop();
                }
                else if (data == "cart") {
                    this.goTo("myCart", "");
                }
            }
        });
    }
    isError(data) {
        if (data instanceof Array) {
            return data.every((e) => e.code === "0");
        }
        else {
            return data.code == 0;
        }
    }
    zoomImage(src, name) {
        this.photoViewer.show(src, name, { share: false });
    }
};
ProductdetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_8__["WooCommerceProvider"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_8__["WishlistProvider"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_8__["ToastProvider"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_8__["LoadingProvider"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_8__["RestProvider"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_9__["SocialSharing"] },
    { type: _services_Events__WEBPACK_IMPORTED_MODULE_10__["Events"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_8__["SettingsProvider"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"] },
    { type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_3__["PhotoViewer"] }
];
ProductdetailPage.propDecorators = {
    slider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"], args: ["slider",] }]
};
ProductdetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: "page-productdetail",
        template: _raw_loader_productdetail_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_productdetail_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProductdetailPage);



/***/ }),

/***/ "gIbF":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/productdetail/reviews/add-review/add-review.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Add a Review</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" icon-only (click)=\"dismiss()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div class=\"review-form\">\n\n    <form [formGroup]=\"form_review\" (ngSubmit)=\"submit()\" novalidate>\n      <ion-list no-lines padding>\n        <ion-list-header mode=\"md\" no-margin no-padding text-wrap>\n          Your email address will not be published. Required fields are marked *\n        </ion-list-header>\n\n\n        <div>\n          <ion-label stacked>Your Rating*</ion-label>\n          <rating formControlName=\"rating\" readOnly=\"false\">\n          </rating>\n        </div>\n        <ion-item no-padding>\n          <ion-label stacked>Your Review*</ion-label>\n          <ion-textarea formControlName=\"review\" required [dir]=\"dir\"></ion-textarea>\n        </ion-item>\n\n        <ion-item no-padding *ngIf=\"!this.user.all\">\n          <ion-label stacked>Name*</ion-label>\n          <ion-input formControlName=\"reviewer\" type=\"text\" required [dir]=\"dir\" ></ion-input>\n        </ion-item>\n\n        <ion-item no-padding *ngIf=\"!this.user.all\">\n          <ion-label stacked>Email*</ion-label>\n          <ion-input formControlName=\"reviewer_email\" required [dir]=\"dir\" ></ion-input>\n        </ion-item>\n      </ion-list>\n      <ion-button full  class=\"accent-background\">Submit</ion-button>\n\n    </form>\n\n  </div>\n</ion-content>\n<!-- <ion-footer>\n</ion-footer> -->");

/***/ }),

/***/ "ipuk":
/*!**********************************************************************!*\
  !*** ./src/app/pages/productdetail/reviews/add-review/add-review.ts ***!
  \**********************************************************************/
/*! exports provided: AddReviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddReviewPage", function() { return AddReviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_review_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-review.html */ "gIbF");
/* harmony import */ var _add_review_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-review.scss */ "oR3V");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/providers */ "fC+V");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








let AddReviewPage = class AddReviewPage {
    constructor(route, navCtrl, platform, fb, user, toast, modalCtrl, settings, WC) {
        this.route = route;
        this.navCtrl = navCtrl;
        this.user = user;
        this.toast = toast;
        this.modalCtrl = modalCtrl;
        this.settings = settings;
        this.WC = WC;
        this.dir = platform.isRTL ? 'rtl' : 'ltr';
        this.route.queryParams.subscribe(params => {
            this.product = params.params;
        });
        let name = '';
        let email = '';
        if (this.user.id) {
            name = (this.user.first_name != '') ? this.user.first_name + " " + this.user.last_name : this.user.username;
            email = this.user.email;
        }
        this.form_review = fb.group({
            rating: [0],
            review: [''],
            reviewer: [name],
            reviewer_email: [email]
        });
    }
    ionViewDidEnter() {
        console.log('ionViewDidEnter AddReviewPage');
    }
    dismiss(data) {
        this.modalCtrl.dismiss(data);
    }
    submit() {
        let data = Object.assign({}, this.form_review.value);
        if (!data.rating || data.rating == 0) {
            this.toast.show("Rating is a required field");
            return;
        }
        if (data.review === '' || data.reviewer_email === '' || data.reviewer === '') {
            this.toast.show("Please fill requred details");
            return;
        }
        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(data.reviewer_email)) {
            this.toast.show("Please enter valid email");
            return;
        }
        data.product_id = this.product.id;
        if (!this.user.id) {
            data.status = 'hold';
        }
        this.WC.postProductReviews(data).then(x => {
            console.log(x);
            if (x.status && x.status !== 'approved') {
                this.toast.show("Reviews will be published after admin approval");
            }
            this.dismiss(x);
        }, err => {
            this.toast.showError();
        });
    }
};
AddReviewPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_6__["UserProvider"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_6__["ToastProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_6__["SettingsProvider"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_6__["WooCommerceProvider"] }
];
AddReviewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'page-add-review',
        template: _raw_loader_add_review_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_review_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddReviewPage);



/***/ }),

/***/ "n/OH":
/*!*************************************************************!*\
  !*** ./src/app/pages/productdetail/productdetail.module.ts ***!
  \*************************************************************/
/*! exports provided: ProductdetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductdetailPageModule", function() { return ProductdetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ionic-image-loader-v5 */ "JBbo");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../pipes/pipes.module */ "iTUp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _productdetail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./productdetail */ "ZdgJ");
/* harmony import */ var _productdetail_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./productdetail-routing.module */ "2oBd");
/* harmony import */ var ionic4_rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic4-rating */ "Xcyb");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "/XPu");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "U3FU");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "eHpL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _reviews_reviews_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./reviews/reviews.module */ "Nbfl");
/* harmony import */ var _mini_cart_mini_cart__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./mini-cart/mini-cart */ "VpAn");
















let ProductdetailPageModule = class ProductdetailPageModule {
};
ProductdetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        declarations: [
            _productdetail__WEBPACK_IMPORTED_MODULE_5__["ProductdetailPage"], _mini_cart_mini_cart__WEBPACK_IMPORTED_MODULE_15__["MiniCartPage"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["IonicModule"],
            _reviews_reviews_module__WEBPACK_IMPORTED_MODULE_14__["ReviewsPageModule"],
            _productdetail_routing_module__WEBPACK_IMPORTED_MODULE_6__["ProductdetailPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forChild(),
            _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            ionic4_rating__WEBPACK_IMPORTED_MODULE_7__["IonicRatingModule"],
            ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_1__["IonicImageLoaderModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__["PipesModule"]
        ],
        providers: [
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_9__["SocialSharing"],
            _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_10__["PhotoViewer"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_11__["WebView"]
        ],
        exports: [
            _mini_cart_mini_cart__WEBPACK_IMPORTED_MODULE_15__["MiniCartPage"]
        ], entryComponents: [_mini_cart_mini_cart__WEBPACK_IMPORTED_MODULE_15__["MiniCartPage"]]
    })
], ProductdetailPageModule);



/***/ }),

/***/ "oR3V":
/*!************************************************************************!*\
  !*** ./src/app/pages/productdetail/reviews/add-review/add-review.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #f5f5f5 !important;\n}\n\n.list {\n  margin: 10px 10px;\n  background: #fff;\n}\n\n.list .item.item-block {\n  margin-top: 10px;\n}\n\n.list .item.item-block .label[stacked] {\n  margin-bottom: 0px;\n  color: var(--secondary_text_color);\n}\n\n.list .item.item-block ion-input {\n  border-bottom: 1px solid #c0c0bd;\n  border-radius: 2px;\n}\n\n.list .item.item-block ion-input input.text-input {\n  margin-top: 0px !important;\n  margin-bottom: 2px !important;\n  font-size: 1.4rem !important;\n  width: calc(100% - 16px) !important;\n}\n\n.list .item.item-block ion-select {\n  border-bottom: 1px solid #c0c0c0 !important;\n  border-radius: 2px !important;\n  padding: 0px !important;\n  margin-top: 0px !important;\n}\n\n.list .item.item-block ion-select .select-text,\n.list .item.item-block ion-select .select-text-placeholder {\n  padding: 0px;\n  font-size: 1.4rem;\n}\n\n.list .item.item-block ion-select .select-icon {\n  content: url('arrow-down.svg') !important;\n  margin: 0px;\n  width: 15px !important;\n  height: 20px !important;\n}\n\n.list .item.item-block ion-select .select-icon .select-icon-inner {\n  border: 0px !important;\n}\n\n.list .item.item-block ion-textarea {\n  border-bottom: 1px solid #c0c0bd;\n  border-radius: 2px;\n  margin-top: 0px;\n}\n\n.list .item.item-block ion-textarea textarea.text-input {\n  margin: 0px !important;\n  font-size: 1.4rem !important;\n  width: calc(100% - 16px) !important;\n}\n\n.list .item.item-block:last-child {\n  border-bottom: 0px !important;\n  box-shadow: none !important;\n}\n\n.list .item-input-has-focus ion-input,\n.list .item-input-has-focus ion-select {\n  border-bottom: 1px solid var(--accent_color) !important;\n}\n\nul {\n  padding: 0px;\n}\n\nul.rating li {\n  padding: 5px 5px 5px 0px !important;\n  background: none;\n  color: #ffb400;\n}\n\nul.rating li ion-icon {\n  font-size: 20px;\n}\n\n.button {\n  margin: 20px;\n  width: calc(100% - 40px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2FkZC1yZXZpZXcuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGdDQUFBO0FBQVI7O0FBR0k7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FBQVI7O0FBRVE7RUFDSSxnQkFBQTtBQUFaOztBQUVZO0VBQ0ksa0JBQUE7RUFDQSxrQ0FBQTtBQUFoQjs7QUFHWTtFQUNJLGdDQUFBO0VBQ0Esa0JBQUE7QUFEaEI7O0FBR2dCO0VBQ0ksMEJBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUNBQUE7QUFEcEI7O0FBTVk7RUFDSSwyQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtBQUpoQjs7QUFNZ0I7O0VBRUksWUFBQTtFQUNBLGlCQUFBO0FBSnBCOztBQU9nQjtFQUNJLHlDQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFMcEI7O0FBT29CO0VBQ0ksc0JBQUE7QUFMeEI7O0FBVVk7RUFDSSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQVJoQjs7QUFVZ0I7RUFDSSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUNBQUE7QUFScEI7O0FBWVk7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0FBVmhCOztBQWdCWTs7RUFFSSx1REFBQTtBQWRoQjs7QUFvQkk7RUFDSSxZQUFBO0FBakJSOztBQW1CUTtFQUNJLG1DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBakJaOztBQW1CWTtFQUNJLGVBQUE7QUFqQmhCOztBQTBCSTtFQUNJLFlBQUE7RUFDQSx3QkFBQTtBQXZCUiIsImZpbGUiOiJhZGQtcmV2aWV3LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpb24tY29udGVudCB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogI2Y1ZjVmNSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5saXN0IHtcbiAgICAgICAgbWFyZ2luOm51bGwgMTBweCBudWxsIDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG5cbiAgICAgICAgLml0ZW0uaXRlbS1ibG9jayB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuXG4gICAgICAgICAgICAubGFiZWxbc3RhY2tlZF0ge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5X3RleHRfY29sb3IpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpb24taW5wdXQge1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzBjMGJkO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcblxuICAgICAgICAgICAgICAgIGlucHV0LnRleHQtaW5wdXQge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNnB4KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICBpb24tc2VsZWN0IHtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2MwYzBjMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICAgICAgLnNlbGVjdC10ZXh0LFxuICAgICAgICAgICAgICAgIC5zZWxlY3QtdGV4dC1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnNlbGVjdC1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogdXJsKCcuLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdmdzL2Fycm93LWRvd24uc3ZnJykgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweCAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICAgICAgICAgIC5zZWxlY3QtaWNvbi1pbm5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpb24tdGV4dGFyZWEge1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzBjMGJkO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG5cbiAgICAgICAgICAgICAgICB0ZXh0YXJlYS50ZXh0LWlucHV0IHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOm51bGwgbnVsbCBudWxsIDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTZweCkgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLml0ZW0taW5wdXQtaGFzLWZvY3VzIHtcblxuICAgICAgICAgICAgaW9uLWlucHV0LFxuICAgICAgICAgICAgaW9uLXNlbGVjdCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWFjY2VudF9jb2xvcikgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgdWwge1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG5cbiAgICAgICAgJi5yYXRpbmcgbGkge1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDVweCA1cHggMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgICAgY29sb3I6ICNmZmI0MDA7XG5cbiAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAuZm9vdGVyIHtcbiAgICAvLyAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAvLyAgICAgcGFkZGluZzogOHB4O1xuICAgIC8vIH1cbiAgICAuYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luOiAyMHB4O1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XG4gICAgfVxuIl19 */");

/***/ }),

/***/ "ofNp":
/*!********************************************************!*\
  !*** ./src/app/pages/productdetail/productdetail.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #eae8e8;\n}\n\nion-list-header {\n  font-weight: 700;\n}\n\n.thumnails {\n  overflow-x: scroll;\n  overflow-y: hidden;\n  flex-wrap: nowrap;\n  padding: 0px 10px;\n}\n\n.thumnails h5 {\n  border-radius: 0px 0px 5px 5px;\n  font-size: 13px;\n  padding: 5px;\n  color: #fff;\n}\n\nion-slides.header-image {\n  height: auto;\n}\n\nion-slides.header-image .slide-zoom img {\n  width: 100% !important;\n}\n\n.discount {\n  background: #fcd947;\n  position: absolute;\n  top: 10px;\n  right: 0px;\n  z-index: 99;\n  padding: 10px 10px 10px 16px;\n  border-radius: 20px 0px 0px 20px;\n}\n\n.item.item-block .item-inner {\n  padding: 0px;\n}\n\nion-select {\n  border: 1px solid #e2e1e1 !important;\n  border-radius: 2px !important;\n  padding: 0px !important;\n  margin-bottom: 5px;\n}\n\n.select-text,\n.select-text-paceholder {\n  border-left: 1px solid #e2e1e1;\n  padding: 8px;\n  font-size: 1.4rem;\n}\n\n.select-icon {\n  content: url('arrow-down.svg') !important;\n  margin: 8px;\n  width: 15px !important;\n  height: 20px !important;\n}\n\n.select-icon .select-icon-inner {\n  border: 0px !important;\n}\n\n.specs ion-col {\n  text-transform: capitalize;\n}\n\n.specs ion-col span:after {\n  content: \",\";\n}\n\n.specs ion-col span:last-child:after {\n  content: \"\";\n}\n\n.specs ion-row {\n  margin-bottom: 0px;\n}\n\n.specs ion-row:last-child {\n  margin: 0px;\n}\n\n.rating {\n  padding: 0px !important;\n  margin: 0px !important;\n  display: inline-block;\n}\n\n.rating.rating li {\n  padding: 0px 2px 0px 0px !important;\n  background: none;\n  color: var(--accent_color) !important;\n}\n\n.rating.rating li ion-icon {\n  font-size: 15px;\n}\n\n.in-stock:before {\n  content: \"In stock\";\n  color: green;\n}\n\n.out-stock:before {\n  content: \"Out of stock\";\n  color: gray;\n}\n\n.swatches-container-main {\n  padding: 8px 0;\n}\n\n.swatches-title {\n  font-weight: 600;\n  font-size: 13px;\n}\n\n.swatches-container {\n  display: inline-block;\n  height: 36px;\n  min-width: 36px;\n  margin: 10px 10px 0 0;\n  border-radius: 50%;\n  border: 1px solid #aeaeae;\n  padding: 2px;\n}\n\n.swatches-container-img {\n  width: 36px;\n}\n\n.swatches-container-default {\n  padding: 2px 4px;\n}\n\n.swatches-selected {\n  border: 2px solid black;\n}\n\n.swatches {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 12px;\n}\n\nion-footer .button {\n  margin: 0px !important;\n  text-decoration: none;\n  min-height: 3.5rem;\n}\n\nion-content {\n  --background: #f5f5f5;\n}\n\n.single-product-section {\n  padding: 0px 15px;\n  margin-bottom: 8px;\n  background: #fff;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.single-product-section .price_n_stock {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.single-product-section .price_n_stock h5 {\n  font-weight: bolder;\n}\n\n.single-product-section .price_n_stock ion-item p {\n  margin: 0;\n  color: #676666;\n}\n\n.single-product-section .product_shot_desc {\n  margin-bottom: 8px;\n}\n\n.single-product-section .product_shot_desc * {\n  margin: 0;\n  padding: 0;\n}\n\n.single-product-section .product_shot_desc ul {\n  list-style-type: none;\n}\n\n.single-product-section .product_rating .rating ion-buttons ion-button {\n  --padding-top: 5px!important;\n  --padding-end: 0px!important;\n  --padding-bottom: 5px!important;\n  --padding-start: 0px!important;\n  width: 25px;\n  height: 25px;\n}\n\n.single-product-section .price_n_stock,\n.single-product-section .product_rating,\n.single-product-section .product_quantity {\n  margin-bottom: 8px;\n}\n\n.single-product-section .price_n_stock .review,\n.single-product-section .product_rating .review,\n.single-product-section .product_quantity .review {\n  text-decoration: underline;\n}\n\n.single-product-section .product_quantity {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n  align-items: center;\n}\n\n.single-product-section .product_quantity p {\n  margin: 0;\n}\n\n.single-product-section .product_quantity .center .button {\n  background: #efefef;\n  border: 1px solid #d8d6d6;\n}\n\n.single-product-section .product_quantity .center .button ion-icon {\n  color: #000;\n}\n\n.single-product-section .product_quantity .center .button .icon {\n  font-weight: bolder;\n  font-size: 14px;\n}\n\n.single-product-section .product_quantity .center .button:nth-of-type(1) {\n  margin: 10px;\n}\n\n.single-product-section .product_quantity .center .button:nth-of-type(2) {\n  margin: 10px;\n}\n\n.single-product-section .list-header {\n  border: none;\n}\n\n.single-product-section .list-header .label {\n  color: #000 !important;\n  font-weight: 600;\n  font-size: 15px !important;\n  text-transform: capitalize;\n}\n\n.single-product-section .item {\n  min-height: initial;\n}\n\n.single-product-section .item .item-inner {\n  border-bottom: none;\n  margin: 0;\n}\n\n.single-product-section .item .item-inner .input-wrapper .label {\n  margin: 0px;\n  color: #757575;\n}\n\n.single-product-section .item .item-inner .input-wrapper .label p {\n  white-space: normal;\n}\n\n.single-product-section .item .item-inner .input-wrapper .icon {\n  margin: 0 !important;\n  min-height: 2rem !important;\n  font-size: 2rem !important;\n}\n\n.single-product-section .item .item-inner .input-wrapper .delivery_availablity {\n  font-size: 14px;\n  font-weight: 800;\n}\n\n.single-product-section .item .item-inner .input-wrapper .delivery_availablity span {\n  font-weight: 800;\n}\n\n.single-product-section .location {\n  font-size: 12px;\n  font-weight: 600;\n  margin-top: 5px;\n}\n\n.single-product-section .item.del_option .item-inner {\n  align-items: flex-end;\n}\n\n.single-product-section .item.del_option .item-inner .label[stacked] {\n  padding-top: 7px;\n  padding-bottom: 0;\n}\n\n.single-product-section .item.del_option .item-inner .text-input {\n  margin: 0px;\n  padding: 0;\n}\n\n.single-product-section .delivery_option .item.item-block {\n  padding-bottom: 10px;\n}\n\n.single-product-section .delivery_option .row {\n  border-top: 1px solid #eee;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.single-product-section .delivery_option .row .col div p {\n  text-align: center;\n  margin: 0;\n  color: #757575;\n}\n\n.single-product-section .delivery_option .row .col div p:nth-of-type(1) {\n  font-size: 2.2rem;\n}\n\n.single-product-section .delivery_option .row .col div p:nth-of-type(3) {\n  color: #424242;\n  font-weight: 600;\n}\n\n.single-product-section .grouped_products .button {\n  padding: 5px 7px;\n  background: #f6f6f6;\n  border: 1px solid #efefef;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.single-product-section .grouped_products .button .icon {\n  font-weight: bolder;\n  font-size: 14px;\n}\n\n.single-product-section .grouped_products .button:nth-of-type(1) {\n  margin: 10px;\n}\n\n.single-product-section .grouped_products .button:nth-of-type(2) {\n  margin: 10px;\n}\n\n.wpsm_boxad,\n.mediad {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2R1Y3RkZXRhaWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHFCQUFBO0FBQUY7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUNFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFESTtFQUNFLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBR047O0FBSUU7RUFDRSxZQUFBO0FBREo7O0FBR007RUFDRSxzQkFBQTtBQURSOztBQU1FO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsZ0NBQUE7QUFISjs7QUFNRTtFQUNFLFlBQUE7QUFISjs7QUFNRTtFQUNFLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBSEo7O0FBTUU7O0VBRUUsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFISjs7QUFNRTtFQUNFLHlDQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFISjs7QUFLSTtFQUNFLHNCQUFBO0FBSE47O0FBUUk7RUFDRSwwQkFBQTtBQUxOOztBQU9NO0VBQ0UsWUFBQTtBQUxSOztBQVFNO0VBQ0UsV0FBQTtBQU5SOztBQVVJO0VBQ0Usa0JBQUE7QUFSTjs7QUFVTTtFQUNFLFdBQUE7QUFSUjs7QUFhRTtFQUNFLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQVZKOztBQVlJO0VBQ0UsbUNBQUE7RUFDQSxnQkFBQTtFQUNBLHFDQUFBO0FBVk47O0FBWU07RUFDRSxlQUFBO0FBVlI7O0FBZUU7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUFaSjs7QUFlRTtFQUNFLHVCQUFBO0VBQ0EsV0FBQTtBQVpKOztBQWVFO0VBQ0UsY0FBQTtBQVpKOztBQWNFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBWEo7O0FBY0U7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQVhKOztBQWFFO0VBQ0UsV0FBQTtBQVZKOztBQWFFO0VBQ0UsZ0JBQUE7QUFWSjs7QUFhRTtFQUNFLHVCQUFBO0FBVko7O0FBYUU7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFWSjs7QUFhRTtFQUNFLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQVZKOztBQWFFO0VBQ0UscUJBQUE7QUFWSjs7QUFhRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFWSjs7QUFZSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBVk47O0FBWU07RUFDRSxtQkFBQTtBQVZSOztBQWFRO0VBQ0UsU0FBQTtFQUNBLGNBQUE7QUFYVjs7QUFpQkk7RUFDRSxrQkFBQTtBQWZOOztBQWlCTTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBZlI7O0FBa0JNO0VBQ0UscUJBQUE7QUFoQlI7O0FBdUJVO0VBQ0UsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQXJCWjs7QUEwQkk7OztFQUdFLGtCQUFBO0FBeEJOOztBQTBCTTs7O0VBQ0UsMEJBQUE7QUF0QlI7O0FBMEJJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQXhCTjs7QUEwQk07RUFDRSxTQUFBO0FBeEJSOztBQTJCTTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7QUF6QlI7O0FBMEJRO0VBQ0UsV0FBQTtBQXhCVjs7QUEyQlE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QUF6QlY7O0FBNEJRO0VBQ0UsWUFBQTtBQTFCVjs7QUE2QlE7RUFDRSxZQUFBO0FBM0JWOztBQWdDSTtFQUNFLFlBQUE7QUE5Qk47O0FBa0NNO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7QUFoQ1I7O0FBb0NJO0VBQ0UsbUJBQUE7QUFsQ047O0FBb0NNO0VBQ0UsbUJBQUE7RUFDQSxTQUFBO0FBbENSOztBQXFDVTtFQUNFLFdBQUE7RUFDQSxjQUFBO0FBbkNaOztBQXFDWTtFQUNFLG1CQUFBO0FBbkNkOztBQXVDVTtFQUNFLG9CQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtBQXJDWjs7QUF3Q1U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUF0Q1o7O0FBd0NZO0VBQ0UsZ0JBQUE7QUF0Q2Q7O0FBOENJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQTVDTjs7QUFnRE07RUFDRSxxQkFBQTtBQTlDUjs7QUFnRFE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBOUNWOztBQWlEUTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FBL0NWOztBQXFETTtFQUNFLG9CQUFBO0FBbkRSOztBQXNETTtFQUNFLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQXBEUjs7QUF3RFk7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FBdERkOztBQXdEYztFQUNFLGlCQUFBO0FBdERoQjs7QUF5RGM7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUF2RGhCOztBQWdFTTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQTlEUjs7QUFnRVE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QUE5RFY7O0FBaUVRO0VBQ0UsWUFBQTtBQS9EVjs7QUFrRVE7RUFDRyxZQUFBO0FBaEVYOztBQXVFRTs7RUFFRSxhQUFBO0FBcEVKIiwiZmlsZSI6InByb2R1Y3RkZXRhaWwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLWNvbnRlbnR7XG4gIC0tYmFja2dyb3VuZDogI2VhZThlODtcbn1cbmlvbi1saXN0LWhlYWRlcntcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbiAgLnRodW1uYWlsc3tcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xuICAgIGg1e1xuICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuXG4gIH1cbiAgaDN7XG5cbiAgfVxuICBpb24tc2xpZGVzLmhlYWRlci1pbWFnZSB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIC5zbGlkZS16b29tIHtcbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmRpc2NvdW50IHtcbiAgICBiYWNrZ3JvdW5kOiAjZmNkOTQ3O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgICB6LWluZGV4OiA5OTtcbiAgICBwYWRkaW5nOjEwcHggMTBweCAxMHB4IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czoyMHB4IDBweCAwcHggMjBweDtcbiAgfVxuXG4gIC5pdGVtLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuICAgIHBhZGRpbmc6bnVsbCAwcHggbnVsbCBudWxsO1xuICB9XG5cbiAgaW9uLXNlbGVjdCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UyZTFlMSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxuXG4gIC5zZWxlY3QtdGV4dCxcbiAgLnNlbGVjdC10ZXh0LXBhY2Vob2xkZXIge1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2UyZTFlMTtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gIH1cblxuICAuc2VsZWN0LWljb24ge1xuICAgIGNvbnRlbnQ6IHVybChcIi4vLi4vLi4vLi4vYXNzZXRzL3N2Z3MvYXJyb3ctZG93bi5zdmdcIikgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDhweDtcbiAgICB3aWR0aDogMTVweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMjBweCAhaW1wb3J0YW50O1xuXG4gICAgLnNlbGVjdC1pY29uLWlubmVyIHtcbiAgICAgIGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbiAgLnNwZWNzIHtcbiAgICBpb24tY29sIHtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuXG4gICAgICBzcGFuOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCIsXCI7XG4gICAgICB9XG5cbiAgICAgIHNwYW46bGFzdC1jaGlsZDphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW9uLXJvdyB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG5cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5yYXRpbmcge1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICAgJi5yYXRpbmcgbGkge1xuICAgICAgcGFkZGluZzogMHB4IDJweCAwcHggMHB4ICFpbXBvcnRhbnQ7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgY29sb3I6IHZhcigtLWFjY2VudF9jb2xvcikgIWltcG9ydGFudDtcblxuICAgICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmluLXN0b2NrOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJJbiBzdG9ja1wiO1xuICAgIGNvbG9yOiBncmVlbjtcbiAgfVxuXG4gIC5vdXQtc3RvY2s6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIk91dCBvZiBzdG9ja1wiO1xuICAgIGNvbG9yOiBncmF5O1xuICB9XG5cbiAgLnN3YXRjaGVzLWNvbnRhaW5lci1tYWluIHtcbiAgICBwYWRkaW5nOiA4cHggMDtcbiAgfVxuICAuc3dhdGNoZXMtdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG5cbiAgLnN3YXRjaGVzLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGhlaWdodDogMzZweDtcbiAgICBtaW4td2lkdGg6IDM2cHg7XG4gICAgbWFyZ2luOjEwcHggMTBweCAwIDA7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhZWFlYWU7XG4gICAgcGFkZGluZzogMnB4O1xuICB9XG4gIC5zd2F0Y2hlcy1jb250YWluZXItaW1nIHtcbiAgICB3aWR0aDogMzZweDtcbiAgfVxuXG4gIC5zd2F0Y2hlcy1jb250YWluZXItZGVmYXVsdCB7XG4gICAgcGFkZGluZzogMnB4IDRweDtcbiAgfVxuXG4gIC5zd2F0Y2hlcy1zZWxlY3RlZCB7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIH1cblxuICAuc3dhdGNoZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG5cbiAgaW9uLWZvb3RlciAuYnV0dG9uIHtcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBtaW4taGVpZ2h0OiAzLjVyZW07XG4gIH1cblxuICBpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICB9XG5cbiAgLnNpbmdsZS1wcm9kdWN0LXNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDBweCAxNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuXG4gICAgLnByaWNlX25fc3RvY2sge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgIGg1e1xuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgICAgfVxuICAgICAgaW9uLWl0ZW17XG4gICAgICAgIHB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGNvbG9yOiAjNjc2NjY2O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICBcbiAgICAucHJvZHVjdF9zaG90X2Rlc2Mge1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuXG4gICAgICAqIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuXG4gICAgICB1bCB7XG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLnByb2R1Y3RfcmF0aW5ne1xuICAgICAgLnJhdGluZ3tcbiAgICAgICAgaW9uLWJ1dHRvbnN7XG4gICAgICAgICAgaW9uLWJ1dHRvbntcbiAgICAgICAgICAgIC0tcGFkZGluZy10b3A6IDVweCFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAwcHghaW1wb3J0YW50O1xuICAgICAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogNXB4IWltcG9ydGFudDtcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4IWltcG9ydGFudDtcbiAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAucHJpY2Vfbl9zdG9jayxcbiAgICAucHJvZHVjdF9yYXRpbmcsXG4gICAgLnByb2R1Y3RfcXVhbnRpdHkge1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuXG4gICAgICAucmV2aWV3IHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnByb2R1Y3RfcXVhbnRpdHkge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuXG4gICAgICAuY2VudGVyIC5idXR0b24ge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDhkNmQ2O1xuICAgICAgICBpb24taWNvbntcbiAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bnRoLW9mLXR5cGUoMSkge1xuICAgICAgICAgIG1hcmdpbjpudWxsIDEwcHggbnVsbCBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpudGgtb2YtdHlwZSgyKSB7XG4gICAgICAgICAgbWFyZ2luOm51bGwgbnVsbCBudWxsIDEwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAubGlzdC1oZWFkZXIge1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgLy9tYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAvL21pbi1oZWlnaHQ6IDBweDtcblxuICAgICAgLmxhYmVsIHtcbiAgICAgICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5pdGVtIHtcbiAgICAgIG1pbi1oZWlnaHQ6IGluaXRpYWw7XG5cbiAgICAgIC5pdGVtLWlubmVyIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuXG4gICAgICAgIC5pbnB1dC13cmFwcGVyIHtcbiAgICAgICAgICAubGFiZWwge1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICBjb2xvcjogIzc1NzU3NTtcblxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAycmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW0gIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZGVsaXZlcnlfYXZhaWxhYmxpdHkge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgICAgIC8vIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgICAgICAgIC8vY29sb3I6ICMwMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmxvY2F0aW9uIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgfVxuXG4gICAgLml0ZW0uZGVsX29wdGlvbiB7XG4gICAgICAuaXRlbS1pbm5lciB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblxuICAgICAgICAubGFiZWxbc3RhY2tlZF0ge1xuICAgICAgICAgIHBhZGRpbmctdG9wOiA3cHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgIH1cblxuICAgICAgICAudGV4dC1pbnB1dCB7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5kZWxpdmVyeV9vcHRpb24ge1xuICAgICAgLml0ZW0uaXRlbS1ibG9jayB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgfVxuXG4gICAgICAucm93IHtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcblxuICAgICAgICAuY29sIHtcbiAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICBjb2xvcjogIzc1NzU3NTtcblxuICAgICAgICAgICAgICAmOm50aC1vZi10eXBlKDEpIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuMnJlbTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICY6bnRoLW9mLXR5cGUoMykge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNDI0MjQyO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZ3JvdXBlZF9wcm9kdWN0cyB7XG4gICAgICAuYnV0dG9uIHtcbiAgICAgICAgcGFkZGluZzogNXB4IDdweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VmZWZlZjtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcblxuICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAmOm50aC1vZi10eXBlKDEpIHtcbiAgICAgICAgICBtYXJnaW46bnVsbCAxMHB4IG51bGwgbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bnRoLW9mLXR5cGUoMikge1xuICAgICAgICAgICBtYXJnaW46bnVsbCBudWxsIG51bGwgMTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vcmVtb3ZpbmcgZ29vZ2xlIGFkc2Vuc2UgYWRkZWQgaW4gZGVzY3JpcHRpb25cbiAgLndwc21fYm94YWQsXG4gIC5tZWRpYWQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiJdfQ== */");

/***/ }),

/***/ "sPM5":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/productdetail/productdetail.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button mode=\"md\" fill=\"clear\" (click)=\"back()\">\n        <ion-icon name=\"arrow-back\"  slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      <span [innerHTML]=\"product ? product.name :'Loading Product'\"></span>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button mode=\"md\" fill=\"clear\" (click)=\"showSearch()\">\n        <ion-icon name=\"search\"  slot=\"icon-only\"></ion-icon>\n      </ion-button>\n      <ion-button mode=\"md\" (click)=\"goTo('wishlist')\">\n        <ion-icon name=\"heart\"  slot=\"icon-only\"></ion-icon>\n        <ion-badge *ngIf=\"wishlist.total && wishlist.total > 0\"></ion-badge>\n       \n      </ion-button>\n      <ion-button mode=\"md\" fill=\"clear\" (click)=\"goTo('myCart')\"> \n        <ion-icon name=\"cart\"  slot=\"icon-only\"></ion-icon>\n        <ion-badge *ngIf=\"settings.all && settings.cartCount > 0\">{{settings.cartCount}}</ion-badge>\n       \n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n \n  <ng-container *ngIf=\"!product\">\n    <skeleton-item no-animated height=\"100vw\" margin></skeleton-item>\n    <skeleton-item no-animated height=\"25px\" width=\"80%\" margin></skeleton-item>\n    <skeleton-item no-animated height=\"14px\" width=\"60%\" margin></skeleton-item>\n    <skeleton-item\n      no-animated\n      height=\"50px\"\n      width=\"100%\"\n      margin\n    ></skeleton-item>\n    <skeleton-item no-animated height=\"12px\" width=\"40%\" margin></skeleton-item>\n    <skeleton-item no-animated height=\"12px\" width=\"20%\" margin></skeleton-item>\n  </ng-container>\n  <ng-container *ngIf=\"product\">\n    <ion-slides #slider pager class=\"header-image\" >\n      <ion-slide *ngFor=\"let x of product.extraImages\">\n        <img-loader [src]=\"x.src\" (click)=\"goTo('imageGallery',product)\" >\n        </img-loader>\n      </ion-slide>\n      <ng-container *ngFor=\"let x of product.images;let i=index\">\n        <ion-slide *ngIf=\"i>0 || product.extraImages.length==0\">\n          <img-loader\n            [src]=\"x.src\"\n            (click)=\"goTo('imageGallery',product)\"\n            useImg\n          >\n            <!-- <img-loader [src]=\"x.src\" (click)=\"zoomImage(x.src,'')\" useImg> -->\n          </img-loader>\n        </ion-slide>\n      </ng-container>\n    </ion-slides>\n    <ion-badge class=\"discount\" *ngIf=\"product.on_sale\" >{{product | discount}}</ion-badge >\n\n    <div class=\"single-product-section\">\n      <ion-row style=\"padding:0px\" align-items-center>\n        <ion-col size=\"11\">\n          <h3 item-start [innerHTML]=\"product.name\"></h3>\n        </ion-col>\n        <ion-col size=\"1\" style=\"padding-top: 20px;\">\n          <ion-button  size=\"small\" fill=\"clear\" (click)=\"share(product)\" color=\"dark\">\n            <ion-icon style=\"font-size: 25px; margin-left: -10px;\" name=\"share-social\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n\n      <!--Short Description-->\n      <!-- <div class=\"product_shot_desc\" [innerHTML]=\"product.short_description\"></div> -->\n      <!--Product price and stock availability-->\n      <div class=\"price_n_stock\">\n        <h5 [innerHTML]=\"product.price_html\"></h5>\n        <span [class]=\"product.in_stock?'in-stock':'out-stock'\"></span>\n      </div>\n\n      <!--Quantity-->\n      <div class=\"product_quantity\"  *ngIf=\"!product.sold_individually && (product.type=='simple' || product.type=='variable')\"\n      >\n        <p>{{'QUANTITY' | translate}}</p>\n        <div class=\"center\">\n          <ion-button class=\"quantituboxBut\" fill=\"clear\" color=\"light\" (click)=\"decreaseQuantity()\">\n            <ion-icon slot=\"icon-only\" name=\"remove\" ></ion-icon>\n          </ion-button>\n          <span class=\"border\">{{product.quantity}}</span>\n          <ion-button class=\"quantituboxBut\" fill=\"clear\" color=\"light\" (click)=\"increaseQuantity()\">\n            <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n          </ion-button>\n        </div>\n      </div>\n    </div>\n    <div  class=\"single-product-section\">\n      <div class=\"product_rating\">\n        <rating  *ngIf=\"product.average_rating\"   max=\"5\"  readOnly=\"true\" [(ngModel)]=\"product.average_rating\" class=\"rating\">\n        </rating>\n        <span>\n          ({{product.rating_count || 0}})\n          <span   (click)=\"goTo('ReviewsPage',product)\" class=\"review\" >{{\"SEE_ALL_REVIEWS\" | translate}}</span>\n        </span>\n       \n      </div>\n    </div>\n\n    <div class=\"single-product-section\"\n      *ngIf=\"product.variations.length > 0 && product.attributes.length > 0\">\n      <ion-list mode=\"md\">\n        <div  *ngFor=\"let attribute of product.var_attributes;\"\n          class=\"swatches-container-main\"\n        >\n          <span class=\"swatches-title\">{{attribute.name}}</span>\n          <div [ngSwitch]=\"attribute.options_type\">\n            <ng-container *ngSwitchCase=\"'color'\">\n              <div style=\"display: flex\">\n                <p style=\"font-weight: 700; margin-right: 8px\">Colour :</p>\n                <p>{{color}}</p>\n              </div>\n              <ng-container *ngFor=\"let option of attribute.value\">\n                <div\n                  [ngClass]=\"(product.attr[attribute.slug] && product.attr[attribute.slug]==(option.name?option.name:option))?'swatches-selected':''\"\n                  class=\"swatches-container swatches-container-img\"\n                   \n                  (click)=\"onVariationChange(attribute.slug,option)\"\n                >\n                  <img\n                    *ngIf=\"option.src[0] != ''\"\n                    [src]=\"option.src[0]\"\n                    class=\"swatches\"\n                  />\n                  <span\n                    *ngIf=\"option.src[0] == ''\"\n                    class=\"swatches\"\n                    [ngStyle]=\"{'background-color':option.value}\"\n                  ></span>\n                </div>\n              </ng-container>\n            </ng-container>\n            <ng-container *ngSwitchCase=\"'image'\">\n              <ng-container *ngFor=\"let option of attribute.value\">\n                <div\n                  [ngClass]=\"(product.attr[attribute.slug] && product.attr[attribute.slug]==(option.slug?option.slug:option))?'swatches-selected':''\"\n                  class=\"swatches-container swatches-container-img\"\n                   \n                  (click)=\"onVariationChange(attribute.slug,option)\"\n                >\n                  <img [src]=\"option.value\" class=\"swatches\" />\n                </div>\n              </ng-container>\n            </ng-container>\n            <ng-container *ngSwitchDefault>\n              <div style=\"display: flex\">\n                <p style=\"font-weight: 700; margin-right: 8px\">Size :</p>\n                <p style=\"text-transform: uppercase\">{{size}}</p>\n              </div>\n              <ng-container *ngFor=\"let option of attribute.value\">\n                <div\n                  [ngClass]=\"(product.attr[attribute.slug] && product.attr[attribute.slug]==(option.name?option.name:option))?'swatches-selected':''\"\n                  class=\"swatches-container swatches-container-default\"\n                  [ngStyle]=\"{'border-radius':(option.value||option.name||option).length>4?'3px':'50%'}\"\n                  (click)=\"onVariationChange(attribute.slug,option)\"\n                >\n                  <span class=\"swatches\" style=\"text-transform: uppercase\"\n                    >{{option.value||option.name||option}}</span\n                  >\n                </div>\n              </ng-container>\n            </ng-container>\n          </div>\n        </div>\n      </ion-list>\n    </div>\n\n    <div class=\"single-product-section\"\n      *ngIf=\"product.grouped_products.length > 0\"\n    >\n      <ion-list mode=\"md\" class=\"grouped_products\">\n        <ion-list-header mode=\"md\" style=\"padding:0px\">\n          {{'GROUPED_PRODUCTS' | translate}}\n        </ion-list-header>\n        <ng-container\n          *ngFor=\"let groupItems of product.grouped_products; let i = index\"\n        >\n          <ion-item\n            style=\"padding:0px\"\n            *ngIf=\"groupItems.sold_individually && groupItems.type!=='variable'\"\n          >\n            <ion-label [innerHTML]=\"groupItems.name\"> </ion-label>\n            <ion-checkbox (ionChange)=\"onCheckChange($event,groupItems)\"\n              item-end\n            ></ion-checkbox>\n          </ion-item>\n          <ion-item\n            style=\"padding:0px\"\n            *ngIf=\"!groupItems.sold_individually && groupItems.type!=='variable'\"\n          >\n            <ion-label [innerHTML]=\"groupItems.name\"></ion-label>\n            <div item-end class=\"center\">\n              <ion-button fill=\"clear\" color=\"dark\" (click)=\"decreaseQuantity(i)\">\n                <ion-icon slot=\"icon-only\" name=\"remove\"></ion-icon>\n              </ion-button>\n              <span  class=\"border\"  [innerHtml]=\"groupItems.quantity || 0\"\n              ></span>\n              <ion-button fill=\"clear\" color=\"dark\" (click)=\"increaseQuantity(i)\">\n                <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n              </ion-button>\n            </div>\n          </ion-item>\n          <ion-item\n            style=\"padding:0px\"\n            *ngIf=\"groupItems.type==='variable'\"\n            (click)=\"goTo('ProductdetailPage',groupItems)\"\n          >\n            <ion-label [innerHTML]=\"groupItems.name\"></ion-label>\n            <div item-end>\n              <u> {{'SELECT_OPTIONS' | translate}} </u>\n            </div>\n          </ion-item>\n        </ng-container>\n      </ion-list>\n    </div>\n\n    <div class=\"single-product-section\"\n      *ngIf=\"this.settings.all.appSettings.pincode_active\"\n    >\n      <ion-list class=\"delivery_option\" lines=\"none\" mode=\"md\" style=\"padding:0px\">\n        <ion-list-header mode=\"md\" style=\"padding:0px\">\n          {{'DELIVERY_OPTIONS' | translate}}\n        </ion-list-header>\n        <ion-item class=\"del_option\" *ngIf=\"postcodeEnter\" style=\"padding:0px\">\n          <ion-label stacked> {{'ENTER_POSTCODE' | translate}} </ion-label>\n          <ion-input type=\"number\"\n            [(ngModel)]=\"newPostCode\" clearInput [dir]=\"dir\"\n          ></ion-input>\n          <ion-button fill=\"clear\" (click)=\"submitPincodeCheck(newPostCode)\">\n            Apply\n          </ion-button>\n        </ion-item>\n        <ion-item *ngIf=\"!postcodeEnter\" style=\"padding:0px\">\n          <ion-icon item-start name=\"pin\" style=\"color: #757575\"></ion-icon>\n          <div class=\"delivery_availablity\" *ngIf=\"!deliveryDetails.delivery\">\n            Not Available On This Pin&nbsp;<span>{{postcode}} </span>\n          </div>\n          <div class=\"delivery_availablity\" *ngIf=\"deliveryDetails.delivery\">\n            Available On This Pin&nbsp;<span>{{postcode}} </span>\n          </div>\n          <ion-button fill=\"clear\"  (click)=\"submitPincodeCheck()\">\n            <ion-icon slot=\"icon-only\" name=\"create\"></ion-icon>\n          </ion-button>\n          <p class=\"location\" *ngIf=\"deliveryDetails.delivery\"\n            [innerHTML]=\"'('+deliveryDetails.state+', '+deliveryDetails.city+')'\"\n          ></p>\n        </ion-item>\n\n        <ion-row style=\"align-items: center\"\n          *ngIf=\"!postcodeEnter && postcode && deliveryDetails.delivery\"\n          style=\"padding:0px\"\n        >\n          <ion-col size=\"1\">\n            <div>\n              <ion-icon style=\"color: #757575\" name=\"checkmark\"></ion-icon>\n            </div>\n          </ion-col>\n          <ion-col size=\"1\">\n            <div>\n              <ion-icon\n                style=\"color: #757575\"\n                name=\"calendar-outline\"\n              ></ion-icon>\n            </div>\n          </ion-col>\n          <ion-col size=\"6\" >\n            <div style=\"font-weight: 800; color: #757575\">\n              Estimated Delivery\n            </div>\n            <div\n              style=\"font-weight: 600; font-size: 12px; color: #757575\"\n              [innerHTML]=\"deliveryDetails.delivery_date\"\n            ></div>\n          </ion-col>\n\n          <!-- </ion-col> -->\n        </ion-row>\n      </ion-list>\n    </div>\n\n    <div class=\"single-product-section\">\n      <ion-list lines=\"none\" mode=\"md\" class=\"specs\" style=\"padding:0px\">\n        <ion-list-header mode=\"md\" style=\"padding:0px\">\n          {{'SPECIFICATION' | translate}}\n        </ion-list-header>\n        <ion-grid style=\"padding:0px;    padding-bottom: 20px;\">\n          <ion-row style=\"padding:0px\">\n            <ion-col size=\"4\">{{'CATEGORY' | translate}}</ion-col>\n            <ion-col size=\"8\">\n              <span *ngFor=\"let cat of product.categories\" [innerHTML]=\"cat.name\"></span>\n            </ion-col>\n          </ion-row>\n          <ion-row style=\"padding:0px\" *ngIf=\"product.total_sales\">\n            <ion-col size=\"4\">{{'TOTAL_SALES' | translate}}</ion-col>\n            <ion-col size=\"8\"> {{product.total_sales}} </ion-col>\n          </ion-row>\n          <ion-row style=\"padding:0px\" *ngIf=\"product.sku\">\n            <ion-col size=\"4\">{{'SKU' | translate}}</ion-col>\n            <ion-col size=\"8\"> {{product.sku}} </ion-col>\n          </ion-row>\n          <ion-row *ngIf=\"product.stock_quantity && product.in_stock\">\n            <ion-col size=\"4\">{{'STOCK' | translate}}</ion-col>\n            <ion-col size=\"8\"> {{product.stock_quantity}} </ion-col>\n          </ion-row>\n          <ion-row style=\"padding:0px\" *ngIf=\"product.weight\">\n            <ion-col size=\"4\">{{'WEIGHT' | translate}}</ion-col>\n            <ion-col size=\"8\"> {{product.weight}} </ion-col>\n          </ion-row>\n  \n          <ion-row style=\"padding:0px\" *ngFor=\"let att of product.attributes\">\n            <ion-col col-4 style=\"padding:0px\">{{ att.options_type}}</ion-col>\n            <ion-col col-8 style=\"padding:0px\" *ngIf=\"att.options\">\n              <ng-container *ngFor=\"let option of att.options\">\n                <span *ngIf=\"option.slug\"> {{ option.name }}</span>\n                <span *ngIf=\"!option.slug\"> {{ option}}</span>\n              </ng-container>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-list>\n    </div>\n\n    <div style=\"padding: 0px 20px;\" class=\"single-product-section\"  *ngIf=\"product.description\">\n      <ion-list lines=\"none\" mode=\"md\" style=\"padding:0px\">\n        <ion-list-header mode=\"md\" style=\"padding:0px\">\n          {{'DESCRIPTION' | translate}}\n        </ion-list-header>\n        <ion-item lines=\"none\" style=\"padding:0px\" text-wrap>\n          <div [innerHTML]=\"product.description.replace(pattern,'')\"></div>\n        </ion-item>\n      </ion-list>\n    </div>\n\n    <div\n      class=\"product-slider single-product-section\"\n      *ngIf=\"product.upsell_ids.length>0 && product.upsell\"\n    >\n      <ion-list-header lines=\"none\" mode=\"md\">\n        {{'UPSELL' | translate}}\n      </ion-list-header>\n      <ion-slides spaceBetween=\"8\" [slidesPerView]=\"slidesPerView\" [dir]=\"dir\">\n        <ion-slide *ngFor=\"let y of product.upsell\">\n          <div class=\"product-item\">\n            <ion-button class=\"fav\" fill=\"clear\" (click)=\"setFav(y)\" >\n              <ion-icon slot=\"icon-only\" name=\"heart{{!wishlist.isFav(y) ? '-outline' : ''}}\"></ion-icon>\n            </ion-button>\n            <div   (click)=\"goTo('ProductdetailPage', y)\">\n              <img-loader [src]=\"y.images[0].src\" useImg>\n                <ion-badge *ngIf=\"y.on_sale\">{{y | discount}}</ion-badge>\n              </img-loader>\n              <h5 [innerHTML]=\"y.name\" class=\"product-name\"></h5>\n              <div class=\"price\">\n                <span [innerHTML]=\"y.price_html\"></span>\n              </div>\n              <div class=\"rate\">\n                <rating\n                  *ngIf=\"y.average_rating\"\n                  max=\"5\"\n                  readOnly=\"true\"\n                  [(ngModel)]=\"y.average_rating\"\n                >\n                </rating>\n                <span class=\"rating_count\" *ngIf=\"y.rating_count\"\n                  >({{product.rating_count}})</span\n                >\n              </div>\n            </div>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </div>\n\n    <div\n      class=\"product-slider single-product-section\"\n      *ngIf=\"product.related_ids.length>0 && product.related\"\n    >\n      <ion-list-header lines=\"none\" mode=\"md\">\n        {{'RELATED' | translate}}\n      </ion-list-header>\n      <ion-row class=\"thumnails\" >\n        <ion-col size=\"4\" *ngFor=\"let y of product.related\">\n          <div class=\"product-item\">\n            <ion-button  class=\"fav\" (click)=\"setFav(y)\" fill=\"clear\">\n              <ion-icon slot=\"icon-only\"  name=\"heart{{!wishlist.isFav(y) ? '-outline' : ''}}\" ></ion-icon>\n            </ion-button>\n            <div   (click)=\"goTo('ProductdetailPage', y)\">\n              <img-loader [src]=\"y.images[0].src\" useImg>\n                <ion-badge *ngIf=\"y.on_sale\">{{y | discount}}</ion-badge>\n              </img-loader>\n              <h5 [innerHTML]=\"y.name\" class=\"product-name\"></h5>\n              <div class=\"price\">\n                <span [innerHTML]=\"y.price_html\"></span>\n              </div>\n              <div class=\"rate\">\n                <rating\n                  *ngIf=\"y.average_rating\"\n                  max=\"5\"\n                  readOnly=\"true\"\n                  [(ngModel)]=\"y.average_rating\"\n                >\n                </rating>\n                <span class=\"rating_count\" *ngIf=\"y.rating_count\"\n                  >({{product.rating_count}})</span\n                >\n              </div>\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n  </ng-container>\n</ion-content>\n\n<ion-footer style=\"height: 50px;\" *ngIf=\"product && (product.purchasable || (product.type==='external' && product.external_url) || product.type==='grouped')\"\n>\n  <ion-row style=\"padding:0px\">\n    <ion-col style=\"padding: 0;\" *ngIf=\"product.type==='external';else purchaseOptions\" (click)=\"buyExternal()\">\n      <ion-button expand=\"full\"  slot=\"start\" class=\"accent-background\">\n        <ion-icon ios=\"ios-open\" md=\"md-open\"></ion-icon>\n        {{'BUY_EXTERNAL_PRODUCT' | translate}}\n      </ion-button>\n    </ion-col>\n    <ng-template #purchaseOptions>\n      <ion-col size=\"6\" style=\"padding: 0;\"  *ngIf=\"product.in_stock\" (click)=\"addToCart(true)\">\n        <ion-button  expand=\"full\" class=\"primary-background\">\n          <ion-icon name=\"basket\"></ion-icon>\n          {{'BUY_NOW' | translate}}\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\" style=\"padding: 0;\"  *ngIf=\"product.in_stock\" (click)=\"addToCart()\">\n        <ion-button expand=\"full\" class=\"accent-background\" style=\"color: black\" >\n          <ion-icon name=\"cart\"></ion-icon>\n          {{'ADD_TO_CART' | translate}}\n        </ion-button>\n      </ion-col>\n\n      <ion-col style=\"padding: 0;\"  *ngIf=\"!product.in_stock\">\n       \n        <ion-button expand=\"full\" class=\"accent-background\" style=\"color: black\" >\n          <ion-icon name=\"warning\"></ion-icon>\n           {{'OUT_OF_STOCK' | translate}}\n        </ion-button>\n      </ion-col>\n    </ng-template>\n  </ion-row>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=pages-productdetail-productdetail-module.js.map