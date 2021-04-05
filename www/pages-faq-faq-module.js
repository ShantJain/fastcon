(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-faq-faq-module"],{

/***/ "1AwP":
/*!***********************************************************!*\
  !*** ./src/app/components/skeleton-item/skeleton-item.ts ***!
  \***********************************************************/
/*! exports provided: SkeletonItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkeletonItemComponent", function() { return SkeletonItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_skeleton_item_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./skeleton-item.html */ "ZnHu");
/* harmony import */ var _skeleton_item_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skeleton-item.scss */ "8L9B");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SkeletonItemComponent = class SkeletonItemComponent {
    constructor() {
        this.styles = {};
    }
    ngOnInit() {
        this.styles = {
            width: this.width ? this.width : '100%',
            height: this.height ? this.height : '16px'
        };
        if (typeof this.radius !== 'undefined' && this.radius !== '') {
            this.styles.borderRadius = this.radius;
        }
    }
};
SkeletonItemComponent.propDecorators = {
    width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    radius: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
SkeletonItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'skeleton-item',
        template: _raw_loader_skeleton_item_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_skeleton_item_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SkeletonItemComponent);



/***/ }),

/***/ "1WIY":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/faq/faq.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\n  <ion-toolbar>\n    <ion-title>{{\"FAQ\" | translate}}</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content>\n  <!-- <div class=\"loader_outer\" *ngIf=\"!faq\">\n    <div class=\"loader\"></div>\n  </div> -->\n  <ion-list class=\"m-n\" *ngIf=\"!faq\">\n    <ion-item no-lines *ngFor=\"let i of [0,1,2,3,4,5,6,7,8]\">\n      <skeleton-item no-animated></skeleton-item>\n      <skeleton-item no-animated width=\"67%\"></skeleton-item>\n    </ion-item>\n  </ion-list>\n  \n  <ng-container *ngIf=\"faq\">\n    <div *ngFor=\"let key of Object.keys(faq);let i=index\">\n      <ion-button ion-item full clear icon-end tappable (click)=\"toggle(i)\" class=\"header_button\">\n        {{key}}\n        <ion-icon name=\"arrow-forward\" item-end [ngClass]=\"toggles[i] ? 'rotate-90' : 'rotate-normal'\"></ion-icon>\n      </ion-button>\n\n      <div [ngClass]=\"toggles[i] ? 'visible' : 'invisible'\" *ngFor=\"let x of faq[key]\">\n        <ion-card>\n          <ion-card-title>\n            {{x.question}}\n          </ion-card-title>\n          <ion-card-content>\n            <p>\n              {{x.answer}}\n            </p>\n          </ion-card-content>\n        </ion-card>\n      </div>\n    </div>\n  </ng-container>\n\n</ion-content>");

/***/ }),

/***/ "8L9B":
/*!*************************************************************!*\
  !*** ./src/app/components/skeleton-item/skeleton-item.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("skeleton-item {\n  display: block;\n}\nskeleton-item[inline] {\n  display: inline-block;\n}\nskeleton-item[inline] div {\n  display: inline-block;\n}\nskeleton-item[rounded] div {\n  border-radius: 999em;\n}\nskeleton-item[radius] div {\n  border-radius: 4px;\n}\nskeleton-item[no-animated] div {\n  animation: none !important;\n  background: rgba(130, 130, 130, 0.2);\n}\nskeleton-item + skeleton-item {\n  margin-top: 6px;\n}\n.animated-background, skeleton-item div {\n  animation-duration: 1s;\n  animation-fill-mode: forwards;\n  animation-iteration-count: infinite;\n  animation-name: placeHolderShimmer;\n  animation-timing-function: linear;\n  background: rgba(130, 130, 130, 0.2);\n  background: linear-gradient(to right, rgba(130, 130, 130, 0.2) 8%, rgba(130, 130, 130, 0.3) 18%, rgba(130, 130, 130, 0.2) 33%);\n  background-size: 800px 100px;\n  position: relative;\n}\n@keyframes placeHolderShimmer {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NrZWxldG9uLWl0ZW0uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNJLGNBQUE7QUFMSjtBQU9JO0VBQ0kscUJBQUE7QUFMUjtBQU9RO0VBQ0kscUJBQUE7QUFMWjtBQVNJO0VBQ0ksb0JBQUE7QUFQUjtBQVVJO0VBQ0ksa0JBcEJjO0FBWXRCO0FBZUk7RUFDSSwwQkFBQTtFQUNBLG9DQTVCUztBQWVqQjtBQWlCQTtFQUNJLGVBcENrQjtBQXNCdEI7QUFpQkE7RUFDSSxzQkF2Q2dCO0VBd0NoQiw2QkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUNBLG9DQTFDYTtFQTJDYiw4SEFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUFkSjtBQTJCQTtFQUNJO0lBQ0ksNkJBQUE7RUFoQk47RUFtQkU7SUFDSSw0QkFBQTtFQWpCTjtBQUNGIiwiZmlsZSI6InNrZWxldG9uLWl0ZW0uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRza2VsZXRvbkxpbmVTcGFjaW5nOiA2cHg7XG4kYW5pbWF0aW9uRHVyYXRpb246IDFzO1xuJGRlZmF1bHRCb3JkZXJSYWRpdXM6IDRweDtcbiRncmFkaWVudENvbG9yMTogcmdiYSgxMzAsIDEzMCwgMTMwLCAuMik7XG4kZ3JhZGllbnRDb2xvcjI6IHJnYmEoMTMwLCAxMzAsIDEzMCwgLjMpO1xuXG5za2VsZXRvbi1pdGVtIHtcbiAgICBkaXNwbGF5OiBibG9jaztcblxuICAgICZbaW5saW5lXSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAgICAgICBkaXYge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJltyb3VuZGVkXSBkaXYge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA5OTllbTtcbiAgICB9XG5cbiAgICAmW3JhZGl1c10gZGl2IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogJGRlZmF1bHRCb3JkZXJSYWRpdXM7XG4gICAgfVxuXG4gICAgZGl2IHtcbiAgICAgICAgQGV4dGVuZCAuYW5pbWF0ZWQtYmFja2dyb3VuZDtcbiAgICB9XG5cbiAgICAmW25vLWFuaW1hdGVkXSBkaXYge1xuICAgICAgICBhbmltYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZDogJGdyYWRpZW50Q29sb3IxO1xuICAgIH1cbn1cblxuc2tlbGV0b24taXRlbStza2VsZXRvbi1pdGVtIHtcbiAgICBtYXJnaW4tdG9wOiAkc2tlbGV0b25MaW5lU3BhY2luZztcbn1cblxuLmFuaW1hdGVkLWJhY2tncm91bmQge1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogJGFuaW1hdGlvbkR1cmF0aW9uO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgIGFuaW1hdGlvbi1uYW1lOiBwbGFjZUhvbGRlclNoaW1tZXI7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgIGJhY2tncm91bmQ6ICRncmFkaWVudENvbG9yMTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRncmFkaWVudENvbG9yMSA4JSwgJGdyYWRpZW50Q29sb3IyIDE4JSwgJGdyYWRpZW50Q29sb3IxIDMzJSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiA4MDBweCAxMDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBwbGFjZUhvbGRlclNoaW1tZXIge1xuICAgIDAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ2OHB4IDBcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNDY4cHggMFxuICAgIH1cbn1cblxuQGtleWZyYW1lcyBwbGFjZUhvbGRlclNoaW1tZXIge1xuICAgIDAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ2OHB4IDBcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNDY4cHggMFxuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "8Oie":
/*!************************************!*\
  !*** ./src/app/pages/faq/faq.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("page-faq .loader_outer {\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\npage-faq .visible {\n  display: block;\n}\npage-faq .invisible {\n  display: none;\n}\npage-faq .rotate-90 {\n  transition: transform ease-in 200ms;\n  transform: rotate(90deg);\n}\npage-faq .rotate-normal {\n  transform: rotate(0deg);\n  transition: transform ease-out 200ms;\n}\npage-faq .card {\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 3px 0px rgba(0, 0, 0, 0.2), 0 0px 0px 0 rgba(0, 0, 0, 0.12);\n}\npage-faq .card .card-title {\n  font-size: 16px;\n  font-weight: 600;\n  padding: 5px 16px;\n  font-family: \"GIDOLE\", sans-serif;\n}\npage-faq .card .card-content {\n  padding: 5px 16px;\n}\npage-faq .card .card-content p {\n  font-size: 14px;\n  color: #000;\n  font-weight: 500;\n  font-family: \"GIDOLE\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ZhcS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUFKO0FBSUU7RUFDRSxjQUFBO0FBRko7QUFLRTtFQUNFLGFBQUE7QUFISjtBQU1FO0VBQ0UsbUNBQUE7RUFDQSx3QkFBQTtBQUpKO0FBT0U7RUFDRSx1QkFBQTtFQUNBLG9DQUFBO0FBTEo7QUFRRTtFQUNFLDhHQUFBO0FBTko7QUFVSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUNBQUE7QUFSTjtBQVdJO0VBQ0UsaUJBQUE7QUFUTjtBQVdNO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0FBVFIiLCJmaWxlIjoiZmFxLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwYWdlLWZhcSB7XG4gIC5sb2FkZXJfb3V0ZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuXG4gIC52aXNpYmxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5pbnZpc2libGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAucm90YXRlLTkwIHtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gZWFzZS1pbiAyMDBtcztcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIH1cblxuICAucm90YXRlLW5vcm1hbCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIGVhc2Utb3V0IDIwMG1zO1xuICB9XG5cbiAgLmNhcmQge1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMnB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDBweCAwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuXG5cblxuICAgIC5jYXJkLXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBwYWRkaW5nOiA1cHggMTZweDtcbiAgICAgIGZvbnQtZmFtaWx5OiAnR0lET0xFJywgc2Fucy1zZXJpZjtcbiAgICB9XG5cbiAgICAuY2FyZC1jb250ZW50IHtcbiAgICAgIHBhZGRpbmc6IDVweCAxNnB4O1xuXG4gICAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdHSURPTEUnLCBzYW5zLXNlcmlmO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG4iXX0= */");

/***/ }),

/***/ "BhQr":
/*!*****************************************!*\
  !*** ./src/app/pages/faq/faq.module.ts ***!
  \*****************************************/
/*! exports provided: FaqPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPageModule", function() { return FaqPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/components.module */ "j1ZV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _faq__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./faq */ "rZiA");
/* harmony import */ var _faq_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./faq-routing.module */ "IQNL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");








let FaqPageModule = class FaqPageModule {
};
FaqPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _faq__WEBPACK_IMPORTED_MODULE_4__["FaqPage"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
            _faq_routing_module__WEBPACK_IMPORTED_MODULE_5__["FaqPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forChild(),
            _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"]
        ],
    })
], FaqPageModule);



/***/ }),

/***/ "IQNL":
/*!*************************************************!*\
  !*** ./src/app/pages/faq/faq-routing.module.ts ***!
  \*************************************************/
/*! exports provided: FaqPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPageRoutingModule", function() { return FaqPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _faq__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./faq */ "rZiA");




const routes = [
    {
        path: '',
        component: _faq__WEBPACK_IMPORTED_MODULE_3__["FaqPage"],
    }
];
let FaqPageRoutingModule = class FaqPageRoutingModule {
};
FaqPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], FaqPageRoutingModule);



/***/ }),

/***/ "ZnHu":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/skeleton-item/skeleton-item.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [ngStyle]=\"styles\"></div>");

/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _skeleton_item_skeleton_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skeleton-item/skeleton-item */ "1AwP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





let ComponentsModule = class ComponentsModule {
};
ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_skeleton_item_skeleton_item__WEBPACK_IMPORTED_MODULE_3__["SkeletonItemComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]],
        exports: [_skeleton_item_skeleton_item__WEBPACK_IMPORTED_MODULE_3__["SkeletonItemComponent"]]
    })
], ComponentsModule);



/***/ }),

/***/ "rZiA":
/*!**********************************!*\
  !*** ./src/app/pages/faq/faq.ts ***!
  \**********************************/
/*! exports provided: FaqPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPage", function() { return FaqPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_faq_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./faq.html */ "1WIY");
/* harmony import */ var _faq_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./faq.scss */ "8Oie");
/* harmony import */ var _services_woocommerce_woocommerce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/woocommerce/woocommerce */ "OkR+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






let FaqPage = class FaqPage {
    constructor(navCtrl, WC, zone) {
        this.navCtrl = navCtrl;
        this.WC = WC;
        this.toggles = {};
        this.Object = Object;
        this.WC.getFAQ().then((res) => {
            console.log(res);
            zone.run(() => {
                this.faq = res;
                for (let i in this.faq) {
                    this.toggle[i] = false;
                }
            });
        }, err => {
        });
    }
    ionViewDidEnter() {
        console.log('ionViewDidEnter AccountHelpPage');
    }
    toggle(val) {
        this.toggles[val] = !this.toggles[val];
    }
};
FaqPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _services_woocommerce_woocommerce__WEBPACK_IMPORTED_MODULE_3__["WooCommerceProvider"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] }
];
FaqPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'page-faq',
        template: _raw_loader_faq_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_faq_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FaqPage);



/***/ })

}]);
//# sourceMappingURL=pages-faq-faq-module.js.map