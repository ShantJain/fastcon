(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-checkout-checkout-module"],{

/***/ "Pnd0":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkout/checkout.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button mode=\"md\" fill=\"clear\" icon-only (click)=\"backHome()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{\"CHECKOUT\" | translate}}</ion-title>\n  </ion-toolbar>\n  <div>\n    <ul class=\"list-unstyled multi-steps\">\n      <li [class]=\"page=='billing'?'is-active':''\">\n        {{'BILLING' | translate}} <br />{{'ADDRESS' | translate}}\n      </li>\n      <li [class]=\"page=='shipping'?'is-active':''\">\n        {{'SHIPPING' | translate}} <br />{{'ADDRESS' | translate}}\n      </li>\n      <li [class]=\"page=='review'?'is-active':''\">{{'REVIEW' | translate}}</li>\n    </ul>\n  </div>\n</ion-header>\n\n<ion-content no-bounce>\n  <div class=\"multi-steps-contents\">\n    <div *ngIf=\"page=='billing'\" class=\"billing\">\n      <form [formGroup]=\"formBilling\" (ngSubmit)=\"billingSubmit()\" novalidate>\n        <ion-list  padding-left padding-right>\n          <ion-item no-padding no-padding>\n            <ion-label position=\"stacked\">{{'FIRST_NAME' | translate}}\n              <span class=\"mandatory\">*</span></ion-label\n            >\n            <ion-input formControlName=\"first_name\" type=\"text\"></ion-input>\n          </ion-item>\n\n          <ion-item no-padding no-padding>\n            <ion-label position=\"stacked\">{{'LAST_NAME'| translate}}</ion-label>\n            <ion-input formControlName=\"last_name\" type=\"text\"></ion-input>\n          </ion-item>\n\n          <ion-item no-padding no-padding style=\"display: none;\">\n            <ion-label position=\"stacked\">{{'COMPANY' | translate}} </ion-label>\n            <ion-input formControlName=\"company\" type=\"text\"></ion-input>\n          </ion-item> \n\n          <ion-item no-padding no-padding>\n            <ion-label position=\"stacked\"\n              >{{'EMAIL' | translate}}\n              <span class=\"mandatory\">*</span></ion-label\n            >\n            <ion-input formControlName=\"email\" type=\"email\"></ion-input>\n          </ion-item>\n\n          <ion-item no-padding no-padding>\n            <ion-label position=\"stacked\">{{'PHONE_NUMBER' | translate}}\n              <span class=\"mandatory\">*</span></ion-label>\n           <!--\n<ion-input formControlName=\"phone\" type=\"number\" inputmode=\"numeric\" pattern=\"[0-9]*\"></ion-input>\n           --> \n           <ion-input formControlName=\"phone\" type=\"text\" inputmode=\"numeric\" ></ion-input>\n          </ion-item>\n          <ion-item no-padding no-padding>\n            <ion-label position=\"stacked\">{{'COUNTRY' | translate}}\n              <span class=\"mandatory\">*</span></ion-label\n            >\n            <ion-select formControlName=\"country\" interface=\"popover\" (ionChange)=\"getBillingStates()\">\n              <ion-select-option *ngFor=\"let x of countries\" [value]=\"x.id\" [innerHTML]=\"x.name\"></ion-select-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item no-padding no-padding *ngIf=\"billingStates.length > 0\">\n            <ion-label position=\"stacked\"\n              >{{'STATE' | translate}}\n              <span class=\"mandatory\">*</span></ion-label\n            >\n            <ion-select formControlName=\"state\" interface=\"popover\">\n              <ion-select-option *ngFor=\"let x of billingStates\" [value]=\"x.id\" [innerHTML]=\"x.name\"></ion-select-option>\n            </ion-select>\n          </ion-item>\n\n          <!-- <ion-item no-padding no-padding *ngIf=\"billingStates.length == 0\">\n            <ion-label position=\"stacked\">{{'STATE' | translate}} <span class=\"mandatory\">*</span></ion-label>\n            <ion-input formControlName=\"state\" type=\"text\"></ion-input>\n          </ion-item> -->\n\n          <ion-item no-padding no-padding>\n            <ion-label position=\"stacked\">{{'CITY' | translate}}\n              <span class=\"mandatory\">*</span></ion-label\n            >\n            <ion-input formControlName=\"city\" type=\"text\"></ion-input>\n          </ion-item>\n\n          <ion-item no-padding no-padding>\n            <ion-label position=\"stacked\">{{'POSTCODE' | translate}}\n              <span class=\"mandatory\">*</span></ion-label>\n            <ion-input formControlName=\"postcode\" type=\"text\"></ion-input>\n          </ion-item>\n\n          <ion-item no-padding no-padding>\n            <ion-label position=\"stacked\">{{'ADDRESS_1' | translate}}\n              <span class=\"mandatory\">*</span></ion-label>\n            <ion-textarea formControlName=\"address_1\" name=\"description\"></ion-textarea>\n          </ion-item>\n          <ion-item no-padding no-padding>\n            <ion-label position=\"stacked\">{{'ADDRESS_2' | translate}}</ion-label>\n            <ion-textarea formControlName=\"address_2\" name=\"description\"></ion-textarea>\n          </ion-item>\n        </ion-list>\n      </form>\n    </div>\n    <div *ngIf=\"page=='shipping'\" class=\"shipping\">\n      <form [formGroup]=\"formShipping\" (ngSubmit)=\"shippingSubmit()\" novalidate>\n        <ion-list  padding-left padding-right>\n          <ion-item no-padding no-padding>\n            <ion-label position=\"stacked\"\n              >{{'FIRST_NAME' | translate}}\n              <span class=\"mandatory\">*</span></ion-label\n            >\n            <ion-input\n              formControlName=\"first_name\"\n              type=\"text\"\n              placeholder=\"First Name\"\n            ></ion-input>\n          </ion-item>\n\n          <ion-item no-padding no-padding>\n            <ion-label position=\"stacked\">{{'LAST_NAME' | translate}}</ion-label>\n            <ion-input\n              formControlName=\"last_name\"\n              type=\"text\"\n              placeholder=\"Last Name\"\n            ></ion-input>\n          </ion-item>\n\n          <ion-item no-padding no-padding>\n            <ion-label position=\"stacked\"\n              >{{'COUNTRY' | translate}}\n              <span class=\"mandatory\">*</span></ion-label\n            >\n            <ion-select\n              formControlName=\"country\"\n              interface=\"popover\"\n              (ionChange)=\"getShippingStates()\"\n            >\n              <ion-select-option\n                *ngFor=\"let x of countries\"\n                [value]=\"x.id\"\n                [innerHTML]=\"x.name\"\n              ></ion-select-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item no-padding no-padding *ngIf=\"shippingStates.length > 0\">\n            <ion-label position=\"stacked\"\n              >{{'STATE' | translate}}\n              <span class=\"mandatory\">*</span></ion-label\n            >\n            <ion-select formControlName=\"state\" interface=\"popover\">\n              <ion-select-option\n                *ngFor=\"let x of shippingStates\"\n                [value]=\"x.id\"\n                [innerHTML]=\"x.name\"\n              ></ion-select-option>\n            </ion-select>\n          </ion-item>\n\n          <!-- <ion-item no-padding no-padding *ngIf=\"shippingStates.length == 0\">\n            <ion-label position=\"stacked\">{{'STATE' | translate}} <span class=\"mandatory\">*</span></ion-label>\n            <ion-input formControlName=\"state\" type=\"text\"></ion-input>\n          </ion-item> -->\n\n          <ion-item no-padding no-padding>\n            <ion-label position=\"stacked\"\n              >{{'CITY' | translate}}\n              <span class=\"mandatory\">*</span></ion-label\n            >\n            <ion-input formControlName=\"city\" type=\"text\"></ion-input>\n          </ion-item>\n\n          <ion-item no-padding no-padding>\n            <ion-label position=\"stacked\"\n              >{{'POSTCODE' | translate}}\n              <span class=\"mandatory\">*</span></ion-label\n            >\n            <ion-input formControlName=\"postcode\" type=\"text\"></ion-input>\n          </ion-item>\n\n          <ion-item no-padding no-padding>\n            <ion-label position=\"stacked\"\n              >{{'ADDRESS_1' | translate}}\n              <span class=\"mandatory\">*</span></ion-label\n            >\n            <ion-textarea\n              formControlName=\"address_1\"\n              name=\"description\"\n            ></ion-textarea>\n          </ion-item>\n\n          <ion-item no-padding no-padding  >\n            <ion-label position=\"stacked\">{{'ADDRESS_2' | translate}}</ion-label>\n            <ion-textarea\n              formControlName=\"address_2\"\n              name=\"description\"\n            ></ion-textarea>\n          </ion-item>\n        </ion-list>\n      </form>\n    </div>\n    <div *ngIf=\"page=='review'\" class=\"review\">\n      <div class=\"loader_outer\" *ngIf=\"!reviewData\">\n        <div class=\"loader\"></div>\n      </div>\n\n      <div *ngIf=\"reviewData\">\n        <div class=\"order-details\" *ngIf=\"reviewData.cart_discount_coupon_error\">\n          <ion-list>\n            <ion-item no-padding text-wrap>\n              <span [innerHTML]=\"reviewData.cart_discount_coupon_error\"></span>\n            </ion-item>\n          </ion-list>\n        </div>\n        <div class=\"order-details\" *ngIf=\"reviewData.cart_discount_coupon && reviewData.cart_discount_coupon.length>0\">\n          <ion-list  no-margin no-padding>\n            <ion-list-header mode=\"md\">\n              {{\"APPLIED_COUPONS\" | translate}}\n            </ion-list-header>\n            <ion-item no-padding *ngFor=\"let coupon of reviewData.cart_discount_coupon; let i=index\"\n            >\n              <span [innerHTML]=\"coupon.code\"></span>\n              <span slot=\"end\" [innerHTML]=\"coupon.discount\"></span>\n            </ion-item>\n          </ion-list>\n        </div>\n\n        <div class=\"order-details\" *ngIf=\"reviewData.shipping_method && reviewData.shipping_method.length>0\"\n        >\n          <ion-list  >\n            <ion-radio-group  [(ngModel)]=\"reviewData.chosen_shipping_method\">\n              <ion-list-header mode=\"md\">\n                {{\"SHIPPING_METHODS\" | translate}}\n              </ion-list-header>\n              <ng-container *ngFor=\"let method of reviewData.shipping_method\">\n                <ion-item lines=\"none\" >\n                  <ion-label [innerHtml]=\"method.shipping_method_name\"></ion-label>\n                  <span slot=\"end\"  [innerHTML]=\"method.shipping_method_price\"></span>\n                  <ion-radio [value]=\"method.id\" color=\"light\"\n                    (click)=\"getReview(method.id,reviewData.chosen_gateway,reviewData.pay_via_wallet)\"\n                  >\n                  </ion-radio>\n                </ion-item>\n              </ng-container>\n            </ion-radio-group>\n          </ion-list>\n        </div>\n        <div class=\"order-details\" *ngIf=\"reviewData.shipping_required_msg\">\n          <ion-list>\n            <ion-list-header mode=\"md\">\n              {{\"SHIPPING_METHODS\" | translate}}\n            </ion-list-header>\n            <ion-item no-padding lines=\"none\"  text-wrap>\n              <span [innerHTML]=\"reviewData.shipping_required_msg\"></span>\n            </ion-item>\n          </ion-list>\n        </div>\n\n        <div class=\"order-details\">\n          <ion-list   mode=\"md\" >\n            <ion-list-header mode=\"md\" >\n              {{'ORDER_SUMMARY' | translate}}\n            </ion-list-header>\n\n            <ion-item  *ngFor=\"let item of reviewData.product\" lines=\"none\">\n              <span style=\"product-name\" > {{item.product_name}} x{{item.product_qty}} </span>\n              <span slot=\"end\" [innerHTML]=\"item.product_total\" class=\"order\">\n              </span>\n            </ion-item>\n            <ion-item   class=\"discount\" lines=\"none\">\n              <span> {{\"TOTAL_SALE_SAVING\" | translate}}</span>\n              <span slot=\"end\" [innerHTML]=\"reviewData.total_sale_saving\"></span>\n            </ion-item>\n            <ion-item  lines=\"none\">\n              <span> {{\"SUBTOTAL\" | translate}} </span>\n              <span slot=\"end\"  [innerHTML]=\"reviewData.cart_subtotal\"  class=\"order\"\n              ></span>\n            </ion-item>\n\n            <ion-item  lines=\"none\" \n              *ngIf=\"reviewData.shipping_method && reviewData.shipping_method.length>0\">\n              <div [innerHTML]=\"'SHIPPING_FEE' | translate\"></div>\n              <div slot=\"end\" [innerHTML]=\"shipping_price()\"></div>\n            </ion-item>\n            <ion-item lines=\"none\"  *ngIf=\"reviewData.cod_charges\">\n              <div [innerHTML]=\"'COD_CHARGES' | translate\"></div>\n              <div slot=\"end\" [innerHTML]=\"reviewData.cod_charges\"></div>\n            </ion-item>\n\n            <ng-container *ngIf=\"reviewData.cart_tax_total\">\n              <ion-item  lines=\"none\"\n                *ngFor=\"let key of objectKeys(reviewData.cart_tax_total)\">\n                <div [innerHTML]=\"key\"></div>\n                <div [innerHTML]=\"reviewData.cart_tax_total[key]\"></div>\n              </ion-item>\n            </ng-container>\n\n            <ng-container *ngIf=\"reviewData.cart_fees\">\n              <ion-item lines=\"none\" *ngFor=\"let key of objectKeys(reviewData.cart_fees)\"\n              >\n                <div [innerHTML]=\"key\"></div>\n                <div [innerHTML]=\"reviewData.cart_fees[key]\"\n                  class=\"cart_fees\"\n                ></div>\n              </ion-item>\n            </ng-container>\n\n            <ion-item no-padding class=\"discount\">\n              <span> {{\"TOTAL_DISCOUNT\" | translate}}</span>\n              <span slot=\"end\" [innerHTML]=\"reviewData.discount_total\"></span>\n            </ion-item>\n            <ion-item no-padding class=\"ord_total\" lines=\"none\">\n              <span> {{\"TOTAL\" | translate}} </span>\n              <span slot=\"end\" [innerHTML]=\"reviewData.cart_order_total\"></span>\n            </ion-item>\n            <ion-item  no-padding text-wrap\n              *ngIf=\"reviewData.wallet_message\">\n              <span [innerHTML]=\"reviewData.wallet_message\"></span>\n            </ion-item>\n            <ion-item no-padding class=\"wallet-payment\" lines=\"none\"\n              *ngIf=\"reviewData.hasOwnProperty('pay_via_wallet')\">\n              <ion-label>{{'PAY_VIA_WALLET' | translate}}</ion-label>\n              <ion-checkbox\n                [(ngModel)]=\"reviewData.pay_via_wallet\"\n                color=\"light\"\n                (ionChange)=\"getReview(reviewData.chosen_shipping_method,reviewData.chosen_gateway,reviewData.pay_via_wallet)\"\n              >\n              </ion-checkbox>\n            </ion-item>\n          </ion-list>\n        </div>\n\n        <div class=\"order-details payment_method\">\n          <ion-list   *ngIf=\"reviewData\" >\n          <ion-radio-group [(ngModel)]=\"reviewData.chosen_gateway\">\n            <ion-list-header mode=\"md\"> {{\"PAYMENT_METHODS\" | translate}}</ion-list-header>\n            <ion-item  lines=\"none\"\n              *ngFor=\"let option of reviewData.payment_gateway; let i=index\" >\n              <ion-label><span [innerHTML]=\"option.gateway_title\"></span></ion-label>\n              <ion-radio [value]=\"option.gateway_id\" color=\"light\"\n                (click)=\"getReview(reviewData.chosen_shipping_method,option.gateway_id,reviewData.pay_via_wallet)\"\n              >\n              </ion-radio>\n            </ion-item>\n          </ion-radio-group>\n          </ion-list>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-col *ngIf=\"page=='billing'\">\n    <ion-item lines=\"none\">\n      <ion-label item-start>{{\"SAME_FOR_SHIPPING\" | translate}}</ion-label>\n      <ion-toggle [(ngModel)]=\"isToggled\" slot=\"end\"></ion-toggle>\n    </ion-item>\n  </ion-col>\n  <ion-row  *ngIf=\"page=='billing'\">\n    <ion-col >\n      <ion-button style=\"color: black;height: 45px;\" expand=\"full\" type=\"button\" class=\"accent-background\" (click)=\"billingSubmit()\">\n        {{'NEXT'| translate}}\n      </ion-button>\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf=\"page=='shipping'\">\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-button type=\"button\" style=\"height: 45px;\" expand=\"full\" class=\"primary-background\" (click)=\"goToBilling()\">\n          {{'PREVIOUS' | translate}}\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-button (click)=\"shippingSubmit(true)\" expand=\"full\" slot=\"end\" style=\"color: black;height: 45px;\" type=\"submit\"  class=\"accent-background\">\n          {{'NEXT' | translate}}\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-row>\n  <ion-row *ngIf=\"page=='review'\">\n    <ion-col size=\"6\" style=\"padding-left: 0px;padding-right: 0px;\">\n      <ion-button style=\"height: 45px;\"  class=\"primary-background\" expand=\"full\" (click)=\"goBack()\">\n        {{'PREVIOUS' | translate}}\n      </ion-button>\n    </ion-col>\n    <!-- -->\n    <ion-col size=\"6\" *ngIf=\"reviewData && !reviewData.shipping_required_msg\" style=\"padding-left: 0px;padding-right: 0px;\">\n      <ion-button style=\"color: black;height: 45px;\" expand=\"full\" (click)=\"orderNow()\" class=\"accent-background\">\n        {{\"PLACE_ORDER\" | translate}}\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n");

/***/ }),

/***/ "Pnj6":
/*!***********************************************************!*\
  !*** ./src/app/pages/checkout/checkout-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: CheckoutPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageRoutingModule", function() { return CheckoutPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _checkout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkout */ "l8M9");




const routes = [
    {
        path: '',
        component: _checkout__WEBPACK_IMPORTED_MODULE_3__["CheckoutPage"],
    }
];
let CheckoutPageRoutingModule = class CheckoutPageRoutingModule {
};
CheckoutPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CheckoutPageRoutingModule);



/***/ }),

/***/ "Tjht":
/*!***************************************************!*\
  !*** ./src/app/pages/checkout/checkout.module.ts ***!
  \***************************************************/
/*! exports provided: CheckoutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function() { return CheckoutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _checkout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkout */ "l8M9");
/* harmony import */ var _checkout_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkout-routing.module */ "Pnj6");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");








let CheckoutPageModule = class CheckoutPageModule {
};
CheckoutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _checkout__WEBPACK_IMPORTED_MODULE_3__["CheckoutPage"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _checkout_routing_module__WEBPACK_IMPORTED_MODULE_4__["CheckoutPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"].forChild()
        ],
    })
], CheckoutPageModule);



/***/ }),

/***/ "atmS":
/*!**********************************************!*\
  !*** ./src/app/pages/checkout/checkout.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.loader_outer {\n  height: 80vh;\n  display: flex;\n  align-items: center;\n}\n.multi-steps-contents {\n  background: #f5f5f5;\n}\n.multi-steps-contents .billing .list,\n.multi-steps-contents .shipping .list {\n  margin: 10px;\n  background: #fff;\n}\n.multi-steps-contents .billing .list .item.item-block,\n.multi-steps-contents .shipping .list .item.item-block {\n  margin-top: 10px;\n}\n.multi-steps-contents .billing .list .item.item-block .item-inner,\n.multi-steps-contents .shipping .list .item.item-block .item-inner {\n  border: none;\n}\n.multi-steps-contents .billing .list .item.item-block .label[stacked],\n.multi-steps-contents .shipping .list .item.item-block .label[stacked] {\n  margin-bottom: 0px;\n  color: var(--secondary_text_color);\n}\n.multi-steps-contents .billing .list .item.item-block ion-input,\n.multi-steps-contents .shipping .list .item.item-block ion-input {\n  border-bottom: 1px solid #c0c0bd;\n  border-radius: 2px;\n}\n.multi-steps-contents .billing .list .item.item-block ion-input input.text-input,\n.multi-steps-contents .shipping .list .item.item-block ion-input input.text-input {\n  margin-top: 0px !important;\n  margin-bottom: 2px !important;\n  font-size: 1.4rem !important;\n  width: calc(100% - 16px) !important;\n}\n.multi-steps-contents .billing .list .item.item-block ion-select,\n.multi-steps-contents .shipping .list .item.item-block ion-select {\n  border-bottom: 1px solid #c0c0bd !important;\n  border-radius: 2px !important;\n  padding: 0px !important;\n  margin-top: 0px !important;\n}\n.multi-steps-contents .billing .list .item.item-block ion-select .select-text,\n.multi-steps-contents .billing .list .item.item-block ion-select .select-text-placeholder,\n.multi-steps-contents .shipping .list .item.item-block ion-select .select-text,\n.multi-steps-contents .shipping .list .item.item-block ion-select .select-text-placeholder {\n  padding: 0px;\n  font-size: 1.4rem;\n}\n.multi-steps-contents .billing .list .item.item-block ion-select .select-icon,\n.multi-steps-contents .shipping .list .item.item-block ion-select .select-icon {\n  content: url('arrow-down.svg') !important;\n  margin: 0px;\n  width: 15px !important;\n  height: 20px !important;\n}\n.multi-steps-contents .billing .list .item.item-block ion-select .select-icon .select-icon-inner,\n.multi-steps-contents .shipping .list .item.item-block ion-select .select-icon .select-icon-inner {\n  border: 0px !important;\n}\n.multi-steps-contents .billing .list .item.item-block ion-textarea,\n.multi-steps-contents .shipping .list .item.item-block ion-textarea {\n  border-bottom: 1px solid #c0c0bd;\n  border-radius: 2px;\n  margin-top: 0px;\n}\n.multi-steps-contents .billing .list .item.item-block ion-textarea textarea.text-input,\n.multi-steps-contents .shipping .list .item.item-block ion-textarea textarea.text-input {\n  margin: 0px !important;\n  font-size: 1.4rem !important;\n  width: calc(100% - 16px) !important;\n}\n.multi-steps-contents .billing .list .item.item-block:last-child,\n.multi-steps-contents .shipping .list .item.item-block:last-child {\n  border-bottom-color: transparent;\n  box-shadow: none;\n}\n.multi-steps-contents .billing .list .item-input-has-focus ion-input,\n.multi-steps-contents .billing .list .item-input-has-focus ion-select,\n.multi-steps-contents .shipping .list .item-input-has-focus ion-input,\n.multi-steps-contents .shipping .list .item-input-has-focus ion-select {\n  border-bottom: 1px solid var(--accent_color) !important;\n}\n.multi-steps-contents .review .order-details {\n  margin: 10px;\n  padding: 16px;\n  background: #fff;\n  border-bottom: 1px solid #d3d3d370;\n  border-top: 1px solid #d3d3d370;\n}\n.multi-steps-contents .review .order-details .applied_coupons {\n  display: flex;\n}\n.multi-steps-contents .review .order-details .applied_coupons p {\n  display: flex;\n  align-items: center;\n  margin: 0px 7px 0px 0px;\n  background: #f6f6f6c2;\n  padding: 0 0 0 7px;\n}\n.multi-steps-contents .review .order-details .applied_coupons p span:nth-of-type(1) {\n  color: #00cc00;\n  margin: 6px;\n}\n.multi-steps-contents .review .order-details ion-list ion-list-header {\n  border: none;\n  padding-bottom: 0px;\n  padding: 0px;\n  margin-bottom: 5px;\n  color: #000 !important;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n.multi-steps-contents .review .order-details ion-list ion-item {\n  min-height: initial;\n}\n.multi-steps-contents .review .order-details ion-list ion-item img {\n  margin: 0px 10px 0px, 0px;\n}\n.multi-steps-contents .review .order-details ion-list ion-item .item-inner {\n  border-bottom: none;\n}\n.multi-steps-contents .review .order-details ion-list ion-item .item-inner .input-wrapper .label {\n  margin: 0px;\n  color: #757575;\n}\n.multi-steps-contents .review .order-details ion-list ion-item .item-inner .input-wrapper .icon {\n  margin: 0 !important;\n  min-height: 2rem !important;\n  font-size: 2rem !important;\n}\n.multi-steps-contents .review .order-details ion-list ion-item .item-inner span[item-end],\n.multi-steps-contents .review .order-details ion-list ion-item .item-inner button[item-end],\n.multi-steps-contents .review .order-details ion-list ion-item .item-inner div[item-end] {\n  margin: 5px, 0px;\n}\n.multi-steps-contents .review .order-details ion-list ion-item .item-inner .radio {\n  margin: 0px 0px 0px 5px !important;\n}\n.multi-steps-contents .review .order-details ion-list .discount span {\n  color: green;\n}\n.multi-steps-contents .review .order-details ion-list .ord_total {\n  border-top: 1px solid #ddd;\n  padding-top: 6px;\n  font-weight: 700;\n  color: #000 !important;\n  margin-top: 5px;\n}\n.multi-steps-contents .review .order-details ion-list .wallet-payment.item {\n  margin-top: 16px;\n}\n.multi-steps-contents .review .order-details ion-list .wallet-payment.item .checkbox {\n  margin: 9px !important;\n}\n.multi-steps-contents .review .payment_method .list .item {\n  margin-bottom: 4px;\n  border: 1px solid #ccc !important;\n  background: #f5f5f5;\n  padding: 7px 2px;\n  border-radius: 3px;\n}\n.multi-steps-contents .review .payment_method .list .item .label {\n  color: #000;\n}\n.multi-steps-contents .review .payment_method .list .item .item-inner .radio {\n  margin: 0px !important;\n}\n.multi-steps-contents .review .payment_method .list .list-header.item {\n  background: none;\n  border: none !important;\n  border-color: transparent;\n}\n.cart_fees a {\n  display: none;\n}\n.product-name {\n  font-size: 0.9rem !important;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin: 5px;\n  color: #000 !important;\n}\n.multi-steps > li.is-active ~ li:before, .multi-steps > li.is-active:before {\n  content: counter(stepNum);\n  font-family: inherit;\n  font-weight: 700;\n}\n.multi-steps > li.is-active ~ li:after, .multi-steps > li.is-active:after {\n  background-color: #ededed;\n}\n.multi-steps {\n  display: table;\n  table-layout: fixed;\n  width: 100%;\n  padding: 0;\n  font-size: 1.1rem;\n  margin-bottom: 0;\n}\n.multi-steps > li {\n  counter-increment: stepNum;\n  text-align: center;\n  display: table-cell;\n  position: relative;\n  color: green;\n}\n.multi-steps > li:before {\n  content: \"\";\n  content: \"✓;\";\n  content: \"𐀃\";\n  content: \"𐀄\";\n  content: \"✓\";\n  display: block;\n  margin: 0 auto 4px;\n  background-color: green;\n  color: #fff;\n  width: 16px;\n  height: 16px;\n  line-height: 18px;\n  text-align: center;\n  font-weight: bold;\n  border-width: 1px;\n  border-style: solid;\n  border-color: green;\n  border-radius: 50%;\n}\n.multi-steps > li:after {\n  content: \"\";\n  height: 2px;\n  width: 100%;\n  background-color: green;\n  position: absolute;\n  z-index: -1;\n  margin-top: -35px;\n  margin-left: -20px;\n}\n.multi-steps > li:last-child:after {\n  display: none;\n}\n.multi-steps > li.is-active:before {\n  background-color: green;\n  border-color: green;\n  color: #fff;\n}\n.multi-steps > li.is-active ~ li {\n  color: #808080;\n}\n.multi-steps > li.is-active ~ li:before {\n  background-color: #ededed;\n  border-color: #ededed;\n}\n.footer {\n  background: #fff;\n  padding: 8px;\n}\n.footer .col {\n  padding: 0px;\n}\n.footer .col .button {\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NoZWNrb3V0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQ2Q7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFFRTtFQUNFLG1CQUFBO0FBQ0o7QUFHTTs7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFBUjtBQUVROztFQUNFLGdCQUFBO0FBQ1Y7QUFDVTs7RUFDRSxZQUFBO0FBRVo7QUFDVTs7RUFDRSxrQkFBQTtFQUNBLGtDQUFBO0FBRVo7QUFDVTs7RUFDRSxnQ0FBQTtFQUNBLGtCQUFBO0FBRVo7QUFBWTs7RUFDRSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQ0FBQTtBQUdkO0FBQ1U7O0VBQ0UsMkNBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7QUFFWjtBQUFZOzs7O0VBRUUsWUFBQTtFQUNBLGlCQUFBO0FBSWQ7QUFEWTs7RUFDRSx5Q0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBSWQ7QUFGYzs7RUFDRSxzQkFBQTtBQUtoQjtBQUFVOztFQUNFLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBR1o7QUFEWTs7RUFDRSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUNBQUE7QUFJZDtBQUFVOztFQUNFLGdDQUFBO0VBQ0EsZ0JBQUE7QUFHWjtBQUVVOzs7O0VBRUUsdURBQUE7QUFFWjtBQUtNO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0EsK0JBQUE7QUFIUjtBQUtRO0VBQ0UsYUFBQTtBQUhWO0FBS1U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFIWjtBQUtZO0VBQ0UsY0FBQTtFQUNBLFdBQUE7QUFIZDtBQVNVO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FBUFo7QUFVVTtFQUNFLG1CQUFBO0FBUlo7QUFVWTtFQUNFLHlCQUFBO0FBUmQ7QUFXWTtFQUNFLG1CQUFBO0FBVGQ7QUFZZ0I7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQVZsQjtBQWNnQjtFQUNFLG9CQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtBQVpsQjtBQWdCYzs7O0VBR0UsZ0JBQUE7QUFkaEI7QUFpQmM7RUFDRSxrQ0FBQTtBQWZoQjtBQXFCWTtFQUNFLFlBQUE7QUFuQmQ7QUF1QlU7RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUFyQlo7QUF5QlU7RUFDRSxnQkFBQTtBQXZCWjtBQXlCWTtFQUNFLHNCQUFBO0FBdkJkO0FBK0JVO0VBQ0Usa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQTdCWjtBQStCWTtFQUNFLFdBQUE7QUE3QmQ7QUFpQ2M7RUFDRSxzQkFBQTtBQS9CaEI7QUFvQ1U7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7QUFsQ1o7QUF5Q0k7RUFDRSxhQUFBO0FBdENOO0FBMENFO0VBQ0UsNEJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBdkNKO0FBMENJO0VBQ0UseUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBdkNOO0FBMENJO0VBQ0UseUJBQUE7QUF4Q047QUE0Q0U7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUF6Q0o7QUEyQ0k7RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUF6Q047QUEyQ007RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBR0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUEzQ1Y7QUErQ007RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUE3Q1I7QUFpRFE7RUFDRSxhQUFBO0FBL0NWO0FBc0RRO0VBQ0UsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFwRFY7QUF1RFE7RUFDRSxjQUFBO0FBckRWO0FBd0RVO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtBQXREWjtBQTZERTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQTFESjtBQTRESTtFQUNFLFlBQUE7QUExRE47QUE0RE07RUFDRSxXQUFBO0FBMURSIiwiZmlsZSI6ImNoZWNrb3V0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgLmxvYWRlcl9vdXRlciB7XG4gICAgaGVpZ2h0OiA4MHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5tdWx0aS1zdGVwcy1jb250ZW50cyB7XG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcblxuICAgIC5iaWxsaW5nLFxuICAgIC5zaGlwcGluZyB7XG4gICAgICAubGlzdCB7XG4gICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcblxuICAgICAgICAuaXRlbS5pdGVtLWJsb2NrIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuXG4gICAgICAgICAgLml0ZW0taW5uZXIge1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5sYWJlbFtzdGFja2VkXSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5X3RleHRfY29sb3IpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlvbi1pbnB1dCB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2MwYzBiZDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcblxuICAgICAgICAgICAgaW5wdXQudGV4dC1pbnB1dCB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW0gIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE2cHgpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW9uLXNlbGVjdCB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2MwYzBiZCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICAuc2VsZWN0LXRleHQsXG4gICAgICAgICAgICAuc2VsZWN0LXRleHQtcGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2VsZWN0LWljb24ge1xuICAgICAgICAgICAgICBjb250ZW50OiB1cmwoXCIuLy4uLy4uLy4uL2Fzc2V0cy9zdmdzL2Fycm93LWRvd24uc3ZnXCIpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICB3aWR0aDogMTVweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcblxuICAgICAgICAgICAgICAuc2VsZWN0LWljb24taW5uZXIge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpb24tdGV4dGFyZWEge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjMGMwYmQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG5cbiAgICAgICAgICAgIHRleHRhcmVhLnRleHQtaW5wdXQge1xuICAgICAgICAgICAgICBtYXJnaW46bnVsbCBudWxsIG51bGwgMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNnB4KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLml0ZW0taW5wdXQtaGFzLWZvY3VzIHtcbiAgICAgICAgICBpb24taW5wdXQsXG4gICAgICAgICAgaW9uLXNlbGVjdCB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYWNjZW50X2NvbG9yKSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5yZXZpZXcge1xuICAgICAgLm9yZGVyLWRldGFpbHMge1xuICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDNkM2QzNzA7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDNkM2QzNzA7XG5cbiAgICAgICAgLmFwcGxpZWRfY291cG9ucyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICAgIHAge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW46MHB4IDdweCAwcHggMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y2ZjZmNmMyO1xuICAgICAgICAgICAgcGFkZGluZzowIDAgMCA3cHg7XG5cbiAgICAgICAgICAgIHNwYW46bnRoLW9mLXR5cGUoMSkge1xuICAgICAgICAgICAgICBjb2xvcjogIzAwY2MwMDtcbiAgICAgICAgICAgICAgbWFyZ2luOm51bGwgNnB4IG51bGwgbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpb24tbGlzdCB7XG4gICAgICAgICAgaW9uLWxpc3QtaGVhZGVyIHtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOm51bGwgbnVsbCBudWxsIDBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW9uLWl0ZW17XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiBpbml0aWFsO1xuXG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICBtYXJnaW46MHB4IDEwcHggMHB4LCAwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5pdGVtLWlubmVyIHtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcblxuICAgICAgICAgICAgICAuaW5wdXQtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgLmxhYmVsIHtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICAgICAgY29sb3I6ICM3NTc1NzU7XG4gICAgICAgICAgICAgICAgICAvLyBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMnJlbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgc3BhbltpdGVtLWVuZF0sXG4gICAgICAgICAgICAgIGJ1dHRvbltpdGVtLWVuZF0sXG4gICAgICAgICAgICAgIGRpdltpdGVtLWVuZF0ge1xuICAgICAgICAgICAgICAgIG1hcmdpbjo1cHgsIDBweDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5yYWRpbyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOjBweCAwcHggMHB4IDVweCFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZGlzY291bnQge1xuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgIGNvbG9yOiBncmVlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAub3JkX3RvdGFsICB7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA2cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcblxuICAgICAgICAgIH1cblxuICAgICAgICAgIC53YWxsZXQtcGF5bWVudC5pdGVtIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG5cbiAgICAgICAgICAgIC5jaGVja2JveCB7XG4gICAgICAgICAgICAgIG1hcmdpbjpudWxsLCA5cHggbnVsbCBudWxsIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnBheW1lbnRfbWV0aG9kIHtcbiAgICAgICAgLmxpc3Qge1xuICAgICAgICAgIC5pdGVtIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2MgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgICAgICAgICBwYWRkaW5nOiA3cHggMnB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuXG4gICAgICAgICAgICAubGFiZWwge1xuICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLml0ZW0taW5uZXIge1xuICAgICAgICAgICAgICAucmFkaW8ge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubGlzdC1oZWFkZXIuaXRlbSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAuY2FydF9mZWVzIHtcbiAgICBhIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLnByb2R1Y3QtbmFtZSB7XG4gICAgZm9udC1zaXplOiAwLjlyZW0gIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgfVxuICAlcmVtYWluLXN0ZXBzIHtcbiAgICAmOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBjb3VudGVyKHN0ZXBOdW0pO1xuICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgIH1cblxuICAgICY6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcbiAgICB9XG4gIH1cblxuICAubXVsdGktc3RlcHMge1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuXG4gICAgPiBsaSB7XG4gICAgICBjb3VudGVyLWluY3JlbWVudDogc3RlcE51bTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBjb2xvcjogZ3JlZW47XG5cbiAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCJcXGYwMGNcIjtcbiAgICAgICAgY29udGVudDogXCJcXDI3MTM7XCI7XG4gICAgICAgIGNvbnRlbnQ6IFwiXFwxMDAwM1wiO1xuICAgICAgICBjb250ZW50OiBcIlxcMTAwMDRcIjtcbiAgICAgICAgY29udGVudDogXCJcXDI3MTNcIjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvIDRweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcblxuICAgICAgICBib3JkZXI6IHtcbiAgICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgICAgIHN0eWxlOiBzb2xpZDtcbiAgICAgICAgICBjb2xvcjogZ3JlZW47XG4gICAgICAgICAgcmFkaXVzOiA1MCU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgIG1hcmdpbi10b3A6IC0zNXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogLTIwcHg7XG4gICAgICB9XG5cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5pcy1hY3RpdmUge1xuICAgICAgICBAZXh0ZW5kICVyZW1haW4tc3RlcHM7XG5cbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogZ3JlZW47XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cblxuICAgICAgICB+IGxpIHtcbiAgICAgICAgICBjb2xvcjogIzgwODA4MDtcbiAgICAgICAgICBAZXh0ZW5kICVyZW1haW4tc3RlcHM7XG5cbiAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZWRlZGVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5mb290ZXIge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZzogOHB4O1xuXG4gICAgLmNvbCB7XG4gICAgICBwYWRkaW5nOiAwcHg7XG5cbiAgICAgIC5idXR0b24ge1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ== */");

/***/ }),

/***/ "l8M9":
/*!********************************************!*\
  !*** ./src/app/pages/checkout/checkout.ts ***!
  \********************************************/
/*! exports provided: CheckoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPage", function() { return CheckoutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_checkout_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./checkout.html */ "Pnd0");
/* harmony import */ var _checkout_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkout.scss */ "atmS");
/* harmony import */ var _services_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/providers */ "fC+V");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _services_Events__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/Events */ "3C+A");









let CheckoutPage = class CheckoutPage {
    constructor(navCtrl, formBuilder, loader, user, WC, rest, zone, events, translate, settings, toast) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.loader = loader;
        this.user = user;
        this.WC = WC;
        this.rest = rest;
        this.zone = zone;
        this.events = events;
        this.translate = translate;
        this.settings = settings;
        this.toast = toast;
        this.isToggled = true;
        this.countries = [];
        this.billingStates = [];
        this.shippingStates = [];
        this.page = "billing";
        this.objectKeys = Object.keys;
        this.billingData = this.user.billing;
        this.shippingData = this.user.shipping;
        this.formBilling = this.formBuilder.group({
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.billingData.first_name || this.user.first_name, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.billingData.last_name || this.user.last_name),
            company: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.billingData.company),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.billingData.email || this.user.email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.billingData.phone, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.billingData.city, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.billingData.state),
            postcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.billingData.postcode || settings.postcode, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            address_1: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.billingData.address_1, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            address_2: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.billingData.address_2),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.billingData.country || "IN", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
        });
        this.formShipping = this.formBuilder.group({
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.shippingData.first_name || this.user.first_name, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.shippingData.last_name || this.user.last_name),
            company: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.shippingData.company),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.shippingData.city, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.shippingData.state),
            postcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.shippingData.postcode || settings.postcode, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            address_1: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.shippingData.address_1, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            address_2: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.shippingData.address_2),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.shippingData.country || "IN", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
        });
        this.countries = this.settings.countryList;
        this.getBillingStates();
        this.getShippingStates();
    }
    backHome() {
        this.navCtrl.back();
    }
    ionViewDidEnter() {
        console.log("ionViewDidEnter CheckoutPage");
    }
    getReview(method, payment_method, pay_via_wallet) {
        console.log(payment_method);
        this.reviewData = undefined;
        this.rest
            .getReview(method, payment_method, pay_via_wallet)
            .then((res) => {
            console.log(res);
            let data = JSON.parse(res.data);
            if (data.err) {
                this.toast.show(data.err);
                this.goBack();
            }
            else {
                let payment = [];
                if (data.payment_gateway && data.payment_gateway.length > 0) {
                    for (let i = 0; i < data.payment_gateway.length; i++) {
                        if (data.payment_gateway[i].gateway_id == "cod" ||
                            //data.payment_gateway[i].gateway_id == "paytm" ||
                            data.payment_gateway[i].gateway_id == "bacs" ||
                            data.payment_gateway[i].gateway_id == "cheque" ||
                            data.payment_gateway[i].gateway_id == "razorpay" ||
                            //data.payment_gateway[i].gateway_id == "instamojo" ||
                            //data.payment_gateway[i].gateway_id == "pumcp" ||
                            data.payment_gateway[i].gateway_id == "ccavenue" ||
                            data.payment_gateway[i].gateway_id == "paypal" ||
                            data.payment_gateway[i].gateway_id == "wallet") {
                            payment.push(data.payment_gateway[i]);
                        }
                    }
                }
                data.payment_gateway = payment;
                this.zone.run(() => {
                    this.reviewData = data;
                    this.reviewData.chosen_gateway = payment_method;
                    console.log(this.reviewData);
                });
            }
        })
            .catch((err) => {
            console.log(err);
        });
    }
    getBillingStates() {
        let id = this.formBilling.value.country || this.billingData.state;
        this.billingStates = this.settings.getState(id);
        console.log(this.billingStates);
        if (this.billingStates.length == 0) {
            this.formBilling.controls["state"].setValue("");
        }
    }
    getShippingStates() {
        let id = this.formShipping.value.country || this.shippingData.state;
        this.shippingStates = this.settings.getState(id);
        if (this.shippingStates.length == 0) {
            this.formShipping.controls["state"].setValue("");
        }
    }
    billingSubmit() {
        console.log(this.formBilling);
        if (!this.formBilling.valid ||
            (this.billingStates.length > 0 &&
                this.formBilling.get("state").value == "")) {
            this.translate.get(["FILL_REQUIRED_FIELD"]).subscribe((x) => {
                this.toast.show(x.FILL_REQUIRED_FIELD);
            });
            return;
        }
        console.log("billing");
        let data = {};
        data.billing = this.formBilling.value;
        if (this.isToggled) {
            this.shippingSubmit();
        }
        else {
            this.goToShipping();
        }
    }
    shippingSubmit(isValidate) {
        if (isValidate &&
            (!this.formShipping.valid ||
                (this.shippingStates.length > 0 &&
                    this.formShipping.get("state").value == ""))) {
            this.translate.get(["FILL_REQUIRED_FIELD"]).subscribe((x) => {
                this.toast.show(x.FILL_REQUIRED_FIELD);
            });
            return;
        }
        this.loader.show();
        if (this.settings.all.appSettings.pincode_active) {
            let postcode = this.isToggled
                ? this.formBilling.value.postcode
                : this.formShipping.value.postcode;
            console.log(postcode);
            this.WC.checkPincode(postcode).then((res) => {
                console.log(res);
                if (res.delivery) {
                    this.finalShippingSubmit();
                }
                else {
                    this.loader.dismiss();
                    this.translate.get(["DELIVERY_NOT_AVAILABLE"]).subscribe((x) => {
                        this.toast.show(x.DELIVERY_NOT_AVAILABLE);
                    });
                }
            }, (err) => {
                console.log(err);
                this.loader.dismiss();
                this.toast.showError();
            });
        }
        else {
            this.finalShippingSubmit();
        }
    }
    finalShippingSubmit() {
        let data = {};
        data.billing = this.formBilling.value;
        if (this.isToggled) {
            data.shipping = this.formBilling.value;
        }
        else {
            data.shipping = this.formShipping.value;
        }
        this.WC.updateUserInfo(this.user.id, data).then((res) => {
            console.log(res);
            this.loader.dismiss();
            this.user.loggedIn(res);
            this.goToReview();
        }, (err) => {
            this.loader.dismiss();
            console.error(err);
        });
    }
    goToBilling() {
        this.page = "billing";
    }
    goToShipping() {
        this.page = "shipping";
    }
    goToReview() {
        this.page = "review";
        this.getReview();
    }
    goBack() {
        console.log(this.isToggled);
        if (this.page == "review") {
            this.page = this.isToggled ? "billing" : "shipping";
        }
        else {
            this.page = "billing";
        }
    }
    // notify() {
    //   this.isToggled = !this.isToggled;
    //   console.log(this.isToggled);
    // }
    orderNow() {
        if (!this.reviewData.chosen_gateway ||
            this.reviewData.chosen_gateway === "") {
            this.translate.get(["SELECT_PAYMENT_METHOD"]).subscribe((x) => {
                this.toast.show(x.SELECT_PAYMENT_METHOD);
            });
            return;
        }
        let data = {};
        if (this.settings.all.appSettings.pincode_active) {
            for (let item of this.reviewData.product) {
                if (item.delivery)
                    data[item.product_id] = item.delivery_date;
            }
        }
        let payment_method = this.reviewData.chosen_gateway;
        let shipping_method;
        if (this.reviewData.shipping_method &&
            this.reviewData.shipping_method.length > 0 &&
            !this.reviewData.chosen_shipping_method) {
            this.toast.show("Select a shipping method");
            return;
        }
        if (this.reviewData.chosen_shipping_method) {
            shipping_method = this.reviewData.chosen_shipping_method;
        }
        //console.log(payment_method);
        this.loader.show();
        this.rest
            .createOrder(payment_method, shipping_method, data, this.reviewData.pay_via_wallet)
            .then((res) => {
            let data = JSON.parse(res.data);
            console.log(data);
            this.rest.getCartClear().then(() => {
                this.events.publish("cartchanged");
            });
            this.rest.makeAffiliate(data).then((res) => { });
            let navigationExtras = { queryParams: data };
            this.navCtrl.navigateForward("payment", navigationExtras);
            this.loader.dismiss();
        }, (err) => {
            this.loader.dismiss();
            console.log(err);
        });
    }
    shipping_price() {
        return this.reviewData.shipping_method.find((x) => x.id == this.reviewData.chosen_shipping_method).shipping_method_price;
    }
};
CheckoutPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_3__["LoadingProvider"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_3__["UserProvider"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_3__["WooCommerceProvider"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_3__["RestProvider"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgZone"] },
    { type: _services_Events__WEBPACK_IMPORTED_MODULE_8__["Events"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_3__["SettingsProvider"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_3__["ToastProvider"] }
];
CheckoutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: "page-checkout",
        template: _raw_loader_checkout_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_checkout_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CheckoutPage);



/***/ })

}]);
//# sourceMappingURL=pages-checkout-checkout-module.js.map