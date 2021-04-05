(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tos-tos-module"],{

/***/ "+v3Q":
/*!**********************************!*\
  !*** ./src/app/pages/tos/tos.ts ***!
  \**********************************/
/*! exports provided: TosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TosPage", function() { return TosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tos_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tos.html */ "8Mmr");
/* harmony import */ var _tos_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tos.scss */ "/aHI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/providers */ "fC+V");






let TosPage = class TosPage {
    constructor(navCtrl, WC) {
        this.navCtrl = navCtrl;
        this.WC = WC;
        this.WC.getTermConditon().then((x) => {
            console.log(x);
            if (x.term_condition && x.term_condition != '') {
                this.tos = x.term_condition;
            }
            else {
                this.tos = "Please Set a terms in backend panel";
            }
        });
    }
    ionViewDidEnter() {
        console.log('ionViewDidEnter TosPage');
    }
};
TosPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_5__["WooCommerceProvider"] }
];
TosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'page-tos',
        template: _raw_loader_tos_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tos_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TosPage);



/***/ }),

/***/ "/aHI":
/*!************************************!*\
  !*** ./src/app/pages/tos/tos.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("page-tos .tos {\n  white-space: pre-wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Rvcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0kscUJBQUE7QUFBUiIsImZpbGUiOiJ0b3Muc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInBhZ2UtdG9zIHtcbiAgICAudG9zIHtcbiAgICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgICAvLyAgIGxpbmUtaGVpZ2h0OiAyO1xuICAgIH1cbn0iXX0= */");

/***/ }),

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

/***/ "8Mmr":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tos/tos.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{'TOS' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div *ngIf=\"!tos\">\n    <skeleton-item no-animated></skeleton-item>\n    <skeleton-item no-animated></skeleton-item>\n    <skeleton-item no-animated width=\"67%\" style=\"margin-bottom: 12px\"></skeleton-item>\n    <skeleton-item no-animated></skeleton-item>\n    <skeleton-item no-animated></skeleton-item>\n    <skeleton-item no-animated></skeleton-item>\n    <skeleton-item no-animated width=\"67%\" style=\"margin-bottom: 12px\"></skeleton-item>\n    <skeleton-item no-animated></skeleton-item>\n    <skeleton-item no-animated></skeleton-item>\n    <skeleton-item no-animated width=\"67%\" style=\"margin-bottom: 12px\"></skeleton-item>\n    <skeleton-item no-animated></skeleton-item>\n    <skeleton-item no-animated></skeleton-item>\n    <skeleton-item no-animated width=\"67%\" style=\"margin-bottom: 12px\"></skeleton-item>\n    <skeleton-item no-animated></skeleton-item>\n    <skeleton-item no-animated></skeleton-item>\n    <skeleton-item no-animated></skeleton-item>\n    <skeleton-item no-animated width=\"67%\" style=\"margin-bottom: 12px\"></skeleton-item>\n  </div>\n  <div [innerHTML]=\"tos\" class=\"tos\" *ngIf=\"tos\"></div>\n</ion-content>");

/***/ }),

/***/ "Ggyq":
/*!*************************************************!*\
  !*** ./src/app/pages/tos/tos-routing.module.ts ***!
  \*************************************************/
/*! exports provided: TosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TosPageRoutingModule", function() { return TosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tos */ "+v3Q");




const routes = [
    {
        path: '',
        component: _tos__WEBPACK_IMPORTED_MODULE_3__["TosPage"],
    }
];
let TosPageRoutingModule = class TosPageRoutingModule {
};
TosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TosPageRoutingModule);



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

/***/ "legO":
/*!*****************************************!*\
  !*** ./src/app/pages/tos/tos.module.ts ***!
  \*****************************************/
/*! exports provided: TosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TosPageModule", function() { return TosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/components.module */ "j1ZV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _tos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tos */ "+v3Q");
/* harmony import */ var _tos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tos-routing.module */ "Ggyq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");








let TosPageModule = class TosPageModule {
};
TosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _tos__WEBPACK_IMPORTED_MODULE_4__["TosPage"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
            _tos_routing_module__WEBPACK_IMPORTED_MODULE_5__["TosPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forChild(),
            _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"]
        ],
    })
], TosPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-tos-tos-module.js.map