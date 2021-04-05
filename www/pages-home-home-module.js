(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

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

/***/ "54vc":
/*!****************************************************************************!*\
  !*** ./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js ***!
  \****************************************************************************/
/*! exports provided: SplashScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashScreen", function() { return SplashScreen; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "C6fG");




var SplashScreen = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SplashScreen, _super);
    function SplashScreen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SplashScreen.prototype.show = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "show", { "sync": true }, arguments); };
    SplashScreen.prototype.hide = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "hide", { "sync": true }, arguments); };
    SplashScreen.pluginName = "SplashScreen";
    SplashScreen.plugin = "cordova-plugin-splashscreen";
    SplashScreen.pluginRef = "navigator.splashscreen";
    SplashScreen.repo = "https://github.com/apache/cordova-plugin-splashscreen";
    SplashScreen.platforms = ["Amazon Fire OS", "Android", "iOS", "Windows"];
SplashScreen.ɵfac = function SplashScreen_Factory(t) { return ɵSplashScreen_BaseFactory(t || SplashScreen); };
SplashScreen.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SplashScreen, factory: function (t) { return SplashScreen.ɵfac(t); } });
var ɵSplashScreen_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](SplashScreen);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SplashScreen, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();
    return SplashScreen;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvc3BsYXNoLXNjcmVlbi9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7QUFDeEU7QUFJQyxJQXVCaUMsZ0NBQWlCO0FBQUM7QUFFOUI7QUFRcEI7QUFBTSxJQUhOLDJCQUFJO0FBTU8sSUFFWCwyQkFBSTtBQUUyRDtBQUE4QztBQUF5RDtBQUF1RDtBQUFpRjtnREFsQi9TLFVBQVU7Ozs7OzBCQUNMO0FBQUMsdUJBN0JQO0FBQUUsRUE2QmdDLGlCQUFpQjtBQUNsRCxTQURZLFlBQVk7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIFNwbGFzaCBTY3JlZW5cbiAqIEBwcmVtaWVyIHNwbGFzaHNjcmVlblxuICogQGNhcGFjaXRvcmluY29tcGF0aWJsZSB0cnVlXG4gKiBAZGVzY3JpcHRpb24gVGhpcyBwbHVnaW4gZGlzcGxheXMgYW5kIGhpZGVzIGEgc3BsYXNoIHNjcmVlbiBkdXJpbmcgYXBwbGljYXRpb24gbGF1bmNoLiBUaGUgbWV0aG9kcyBiZWxvdyBhbGxvd3Mgc2hvd2luZyBhbmQgaGlkaW5nIHRoZSBzcGxhc2hzY3JlZW4gYWZ0ZXIgdGhlIGFwcCBoYXMgbG9hZGVkLlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBTcGxhc2hTY3JlZW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL3NwbGFzaC1zY3JlZW4vbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHNwbGFzaFNjcmVlbjogU3BsYXNoU2NyZWVuKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLnNwbGFzaFNjcmVlbi5zaG93KCk7XG4gKlxuICogdGhpcy5zcGxhc2hTY3JlZW4uaGlkZSgpO1xuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnU3BsYXNoU2NyZWVuJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tc3BsYXNoc2NyZWVuJyxcbiAgcGx1Z2luUmVmOiAnbmF2aWdhdG9yLnNwbGFzaHNjcmVlbicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLXNwbGFzaHNjcmVlbicsXG4gIHBsYXRmb3JtczogWydBbWF6b24gRmlyZSBPUycsICdBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNwbGFzaFNjcmVlbiBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFNob3dzIHRoZSBzcGxhc2hzY3JlZW5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBzaG93KCk6IHZvaWQge31cblxuICAvKipcbiAgICogSGlkZXMgdGhlIHNwbGFzaHNjcmVlblxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIGhpZGUoKTogdm9pZCB7fVxufVxuIl19

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

/***/ "99Un":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/components.module */ "j1ZV");
/* harmony import */ var ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ionic-image-loader-v5 */ "JBbo");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../pipes/pipes.module */ "iTUp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home */ "qwQQ");
/* harmony import */ var ionic4_rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic4-rating */ "Xcyb");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home-routing.module */ "9oos");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/deeplinks/ngx */ "lQWD");
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ "wljF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "eHpL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ "TEn/");















let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        declarations: [
            _home__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_8__["HomePageRoutingModule"],
            ionic4_rating__WEBPACK_IMPORTED_MODULE_7__["IonicRatingModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forChild(),
            ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_2__["IonicImageLoaderModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"]
        ],
        providers: [
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_9__["SplashScreen"],
            _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_10__["Deeplinks"],
            _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_11__["OneSignal"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_13__["WebView"]
        ]
    })
], HomePageModule);



/***/ }),

/***/ "9oos":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ "qwQQ");




const routes = [
    {
        path: '',
        component: _home__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



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

/***/ "HRNH":
/*!**************************************!*\
  !*** ./src/app/pages/home/home.scss ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".thumnails {\n  overflow-x: scroll;\n  overflow-y: hidden;\n  flex-wrap: nowrap;\n  padding: 0px 10px;\n}\n.thumnails ion-col:nth-child(4n+1) .categoriesBox {\n  background: #deb887;\n}\n.thumnails ion-col:nth-child(4n+2) .categoriesBox {\n  background: #c4e7e1 !important;\n}\n.thumnails ion-col:nth-child(4n+3) .categoriesBox {\n  background: #b7aca8 !important;\n}\n.thumnails ion-col:nth-child(4n+4) .categoriesBox {\n  background: #0c81ce !important;\n}\n.thumnails h5 {\n  border-radius: 0px 0px 5px 5px;\n  font-size: 13px;\n  padding: 5px;\n  color: #fff;\n  text-align: center;\n}\n::-webkit-scrollbar {\n  display: none;\n}\n.fade {\n  border-radius: 2px;\n}\nion-slides {\n  height: auto;\n}\nion-slides .slide-zoom .banner_img {\n  width: 100% !important;\n}\n.shien .shien-strip img {\n  width: 100%;\n}\n.shien .shien-category .shien-category-item {\n  padding: 5px 16px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.shien .shien-category .shien-category-item .shien-img img {\n  padding: 10px;\n  border-radius: 50%;\n  width: 100%;\n  height: auto;\n}\n.shien .shein-product-row {\n  padding: 8px;\n}\n.shien .shein-product-row .shein-product-row-title {\n  padding: 8px;\n  font-weight: 600;\n}\n.shien .shein-product-row .shein-product-row-slider .swiper-container {\n  padding: 8px;\n}\n.shien .shein-product-item div[text-start] {\n  display: flex;\n  flex-direction: column-reverse;\n}\n.shien .shein-product-item div[text-start] del {\n  color: #aeaeae;\n  font-size: 12px;\n  margin-bottom: 4px;\n}\n.shien .shein-product-item div[text-start] ins {\n  text-decoration: none;\n  font-weight: bold;\n  font-size: 13px;\n  color: var(--accent_color);\n  margin: 8px 0 2px 0;\n}\n.shien .shein-single-banner {\n  padding: 10px 0 0 0;\n}\n.shien .shein-single-banner img-loader img {\n  width: 100%;\n}\n.shien .shein-double-banner.row .col {\n  padding: 0px 5px;\n}\n.shien .shein-double-tilted-banner {\n  background: #f1b205;\n  margin-top: 10px;\n}\n.shien .shein-double-tilted-banner .shein-double-tilted-banner-title {\n  padding-top: 16px;\n  font-weight: 800;\n  font-size: 2rem;\n}\n.shien .shein-double-tilted-banner .col:nth-of-type(1) {\n  padding: 16px 8px 16px 16px;\n}\n.shien .shein-double-tilted-banner .col:nth-of-type(2) {\n  padding: 16px 16px 16px 8px;\n}\n.shien .shein-double-tilted-banner .col img-loader img {\n  transform: rotate(-2deg);\n}\n.shien .shein-double-tilted-banner .col div[text-center] {\n  padding-top: 15px;\n  font-size: 10px;\n  text-transform: uppercase;\n  color: white;\n}\n.shien .shein-double-tilted-banner .col div[text-center] span {\n  background: #222222;\n  padding: 5px 30px;\n}\n.shien .shein-product-grid .shein-product-grid-title {\n  text-transform: uppercase;\n  font-weight: 900;\n  font-size: 16px;\n  margin: 16px 12px;\n}\n.shien .shein-product-grid .row {\n  padding: 4px !important;\n}\n.shien .shein-product-grid .row .col {\n  padding: 4px;\n}\n.koovs .koovs-main-banner .swiper-pagination {\n  align-items: center;\n  display: flex;\n  justify-content: flex-end;\n  padding: 4px;\n}\n.koovs .koovs-main-banner .swiper-pagination .swiper-pagination-bullet {\n  width: 5px;\n  height: 5px;\n  margin: 0 2px;\n}\n.koovs .koovs-main-banner .swiper-pagination .swiper-pagination-bullet-active {\n  width: 8px;\n  height: 8px;\n}\n.koovs .koovs-main-banner .swiper-container .slide-zoom img {\n  object-fit: cover;\n}\n.koovs .koovs-category-slide {\n  padding: 10px;\n}\n.koovs .koovs-category-slide .swiper-container {\n  padding: 10px;\n}\n.koovs .koovs-category-slide .swiper-container .koovs-category-slide-title {\n  font-size: 12px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.koovs .koovs-product-slider .koovs-product-slider-title {\n  display: flex;\n  justify-content: space-between;\n  margin: 20px 5px;\n  text-transform: uppercase;\n  margin: 20px 10px 10px;\n  font-weight: 800;\n  align-items: center;\n}\n.koovs .koovs-product-slider .koovs-product-slider-title span:nth-of-type(2) {\n  height: 1px;\n  flex: 1;\n  background: #000;\n  margin: 0px 10px;\n}\n.koovs .koovs-product-slider .swiper-container {\n  padding: 10px;\n}\n.koovs .koovs-product-slider .swiper-container ion-slide {\n  border: 1px solid #aeaeae;\n}\n.koovs .koovs-product-slider .swiper-container ion-slide .koovs-product-slider-product-name {\n  font-size: 12px;\n  line-height: 16px;\n  text-transform: uppercase;\n  margin-top: 5px;\n}\n.koovs .koovs-product-slider .swiper-container ion-slide .koovs-product-slider-product-price {\n  font-size: 12px;\n  line-height: 16px;\n  text-transform: uppercase;\n  margin-bottom: 5px;\n}\n.koovs .koovs-single-banner {\n  margin-top: 15px;\n}\n.koovs .koovs-single-banner img {\n  width: 100%;\n}\n.nnnow .nnnow-main-banner .swiper-container {\n  overflow: visible;\n}\n.nnnow .nnnow-main-banner .swiper-pagination {\n  bottom: -10px;\n}\n.nnnow .nnnow-cat-title {\n  font-size: 20px;\n  text-transform: uppercase;\n  font-weight: 800;\n  margin-top: 28px;\n  margin-bottom: 15px;\n}\n.nnnow .nnnow-cat-slider .nnnow-cat-slider-img {\n  width: 100px;\n  height: 100px;\n  line-height: 100px;\n  object-fit: cover;\n  border-radius: 100px;\n}\n@media screen and (max-width: 320px) {\n  .nnnow .nnnow-cat-slider .nnnow-cat-slider-img {\n    width: 70px;\n    height: 70px;\n  }\n}\n.nnnow .nnnow-cat-slider .nnnow-cat-slider-title {\n  font-size: 16px;\n  font-weight: 800;\n  margin-bottom: 20px;\n  margin-top: 5px;\n}\n.nnnow .nnnow-quick-links .nnnow-quick-links-title {\n  color: #000;\n  font-size: 18px;\n  font-weight: 800;\n  margin-top: 35px;\n  margin-bottom: 18px;\n}\n.nnnow .nnnow-quick-links .nnnow-quick-links-list {\n  width: 95%;\n  margin: 0 auto;\n}\n.nnnow .nnnow-quick-links .nnnow-quick-links-list .nnnow-quick-links-item {\n  text-transform: uppercase;\n  font-size: 13px;\n  border-left: 1px solid #aeaeae;\n  border-right: 1px solid #aeaeae;\n  border-bottom: 1px solid #aeaeae;\n}\n.nnnow .nnnow-quick-links .nnnow-quick-links-list .nnnow-quick-links-item:nth-of-type(1) {\n  border-top: 1px solid #aeaeae;\n}\n.nnnow .nnnow-banner-title {\n  margin-top: 40px;\n  font-size: 18px;\n  font-weight: 800;\n}\n.nnnow .nnnow-banner-img {\n  margin-top: 15px;\n}\n.flipkart {\n  width: 100%;\n}\n.flipkart .four-grid-category {\n  background-color: url('login-background.jpg');\n  width: 100%;\n  height: auto;\n  padding: 15px 16px 26px;\n}\n.flipkart .four-grid-category .vewall_area {\n  width: 100%;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 19px 0px 0px;\n  text-transform: capitalize;\n}\n.flipkart .four-grid-category .vewall_area p {\n  font-size: 14px;\n  margin-top: 3px;\n  color: #878787;\n  margin-bottom: 0px;\n}\n.flipkart .four-grid-category .vewall_area h1 {\n  font-size: 15px;\n  color: #fff;\n}\n.flipkart .four-grid-category button {\n  background: #2ca032;\n  color: white;\n  padding: 10px 12px;\n  font-size: 14px;\n  border-radius: 4px;\n  text-transform: capitalize;\n  box-shadow: none;\n}\n.flipkart .four-grid-category .productarea {\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: 0 1px 1.5px 0px rgba(0, 0, 0, 0.16);\n  transform: translate(0, 12px);\n}\n.flipkart .four-grid-category .productarea ion-col {\n  border: 1px solid #f0f0f0;\n  padding: 0;\n}\n.flipkart .four-grid-category .productarea ion-col .productcontent {\n  text-align: center;\n  padding-top: 7px;\n  padding-bottom: 5px;\n}\n.flipkart .four-grid-category .productarea ion-col .productcontent span {\n  font-size: 13px;\n  color: #262626;\n  line-height: 16px;\n  margin-top: 8px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 100%;\n  overflow: hidden;\n  text-align: center;\n}\n.flipkart .four-grid-category .productarea ion-col .productcontent p {\n  font-size: 14px;\n  color: #388e3c;\n  line-height: 24px;\n  margin-top: 0px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 100%;\n  overflow: hidden;\n  text-align: center;\n  margin-bottom: 0px;\n}\n.flipkart .four-grid-category .productarea ion-col .productimage {\n  width: 100%;\n  margin: 0 auto;\n  text-align: center;\n  padding: 24px 0;\n}\n.flipkart .four-grid-category .productarea ion-col .productimage img {\n  width: 140px;\n}\n.flipkart .four-grid-category .productarea ion-col .productimage p {\n  margin: 5px 0;\n}\n.flipkart .four-grid-category .productarea ion-col .productimage h3 {\n  font-size: 18px;\n}\n.flipkart .three-grid-category {\n  background: #fff;\n  width: 100%;\n  height: auto;\n  padding: 15px 0 0px;\n}\n.flipkart .three-grid-category .vewall_area {\n  width: 100%;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0px;\n  padding: 19px 16px 0;\n  text-transform: capitalize;\n}\n.flipkart .three-grid-category .vewall_area p {\n  font-size: 14px;\n  margin-top: 3px;\n  color: #878787;\n  margin-bottom: 0px;\n}\n.flipkart .three-grid-category .vewall_area h1 {\n  font-size: 15px;\n  color: #fff;\n}\n.flipkart .three-grid-category button {\n  background: #2ca032;\n  color: white;\n  padding: 10px 12px;\n  font-size: 14px;\n  border-radius: 4px;\n  text-transform: capitalize;\n  box-shadow: none;\n}\n.flipkart .three-grid-category .productarea {\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: 0 1px 1.5px 0px rgba(0, 0, 0, 0.16);\n  transform: translate(0, 8px);\n}\n.flipkart .three-grid-category .productarea ion-col:first-child {\n  display: flex;\n  align-items: center;\n}\n.flipkart .three-grid-category .productarea ion-col:first-child img {\n  width: auto;\n}\n.flipkart .three-grid-category .productarea ion-col {\n  border: 1px solid #f0f0f0 !important;\n  padding: 0;\n}\n.flipkart .three-grid-category .productarea ion-col .productcontent {\n  text-align: center;\n  padding-top: 7px;\n  padding-bottom: 5px;\n}\n.flipkart .three-grid-category .productarea ion-col .productcontent span {\n  font-size: 13px;\n  color: #262626;\n  line-height: 16px;\n  margin-top: 8px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 100%;\n  overflow: hidden;\n  text-align: center;\n}\n.flipkart .three-grid-category .productarea ion-col .productcontent p {\n  font-size: 14px;\n  color: #388e3c;\n  line-height: 24px;\n  margin-top: 0px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 100%;\n  overflow: hidden;\n  text-align: center;\n  margin-bottom: 0px;\n}\n.flipkart .three-grid-category .productarea ion-col .productimage {\n  width: 100%;\n  margin: 0 auto;\n  text-align: center;\n  padding: 10px 10px;\n}\n.flipkart .three-grid-category .productarea ion-col .productimage img {\n  width: 140px;\n}\n.flipkart .three-grid-category .productarea ion-col .productimage p {\n  margin: 5px 0;\n}\n.flipkart .three-grid-category .productarea ion-col .productimage h3 {\n  font-size: 18px;\n}\n.flipkart .two-grid-category {\n  background: #fff;\n  width: 100%;\n  height: auto;\n  padding: 15px 0 0px;\n}\n.flipkart .two-grid-category .vewall_area {\n  width: 100%;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0px;\n  padding: 19px 16px 0;\n  text-transform: capitalize;\n}\n.flipkart .two-grid-category .vewall_area p {\n  font-size: 14px;\n  margin-top: 3px;\n  color: #878787;\n  margin-bottom: 0px;\n}\n.flipkart .two-grid-category .vewall_area h1 {\n  font-size: 15px;\n  color: #fff;\n}\n.flipkart .two-grid-category button {\n  background: #2ca032;\n  color: white;\n  padding: 10px 12px;\n  font-size: 14px;\n  border-radius: 4px;\n  text-transform: capitalize;\n  box-shadow: none;\n}\n.flipkart .two-grid-category .productarea {\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: 0 1px 1.5px 0px rgba(0, 0, 0, 0.16);\n  transform: translate(0, 8px);\n}\n.flipkart .two-grid-category .productarea ion-col {\n  border: 1px solid #f0f0f0 !important;\n  padding: 0;\n}\n.flipkart .two-grid-category .productarea ion-col .productcontent {\n  text-align: center;\n  padding-top: 7px;\n  padding-bottom: 5px;\n}\n.flipkart .two-grid-category .productarea ion-col .productcontent span {\n  font-size: 13px;\n  color: #262626;\n  line-height: 16px;\n  margin-top: 8px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 100%;\n  overflow: hidden;\n  text-align: center;\n}\n.flipkart .two-grid-category .productarea ion-col .productcontent p {\n  font-size: 14px;\n  color: #388e3c;\n  line-height: 24px;\n  margin-top: 0px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 100%;\n  overflow: hidden;\n  text-align: center;\n  margin-bottom: 0px;\n}\n.flipkart .two-grid-category .productarea ion-col .productimage {\n  width: 100%;\n  margin: 0 auto;\n  text-align: center;\n  padding: 24px 0;\n}\n.flipkart .two-grid-category .productarea ion-col .productimage img {\n  width: 140px;\n}\n.flipkart .two-grid-category .productarea ion-col .productimage p {\n  margin: 5px 0;\n}\n.flipkart .two-grid-category .productarea ion-col .productimage h3 {\n  font-size: 18px;\n}\n.flipkart .two-grid-category .col {\n  padding: 0;\n  border: 1px solid #f0f0f0;\n}\n.flipkart .one-grid-category {\n  background: #fff;\n  width: 100%;\n  height: auto;\n  padding: 15px 0 0px;\n}\n.flipkart .one-grid-category .vewall_area {\n  width: 100%;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0px;\n  padding: 19px 16px 0;\n  text-transform: capitalize;\n}\n.flipkart .one-grid-category .vewall_area p {\n  font-size: 14px;\n  margin-top: 3px;\n  color: #878787;\n  margin-bottom: 0px;\n}\n.flipkart .one-grid-category .vewall_area h1 {\n  font-size: 15px;\n  color: #fff;\n}\n.flipkart .one-grid-category button {\n  background: #2ca032;\n  color: white;\n  padding: 10px 12px;\n  font-size: 14px;\n  border-radius: 4px;\n  text-transform: capitalize;\n  box-shadow: none;\n}\n.flipkart .one-grid-category .productarea {\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: 0 1px 1.5px 0px rgba(0, 0, 0, 0.16);\n  transform: translate(0, 8px);\n}\n.flipkart .one-grid-category .productarea ion-col {\n  border: 1px solid #f0f0f0 !important;\n  padding: 0;\n}\n.flipkart .one-grid-category .productarea ion-col .productcontent {\n  text-align: center;\n  padding-top: 7px;\n  padding-bottom: 5px;\n}\n.flipkart .one-grid-category .productarea ion-col .productcontent span {\n  font-size: 13px;\n  color: #262626;\n  line-height: 16px;\n  margin-top: 8px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 100%;\n  overflow: hidden;\n  text-align: center;\n}\n.flipkart .one-grid-category .productarea ion-col .productcontent p {\n  font-size: 14px;\n  color: #388e3c;\n  line-height: 24px;\n  margin-top: 0px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 100%;\n  overflow: hidden;\n  text-align: center;\n  margin-bottom: 0px;\n}\n.flipkart .one-grid-category .productarea ion-col .productimage {\n  width: 100%;\n  margin: 0 auto;\n  text-align: center;\n  padding: 24px 0;\n}\n.flipkart .one-grid-category .productarea ion-col .productimage img {\n  width: 140px;\n}\n.flipkart .one-grid-category .productarea ion-col .productimage p {\n  margin: 5px 0;\n}\n.flipkart .one-grid-category .productarea ion-col .productimage h3 {\n  font-size: 18px;\n}\n.flipkart .one-grid-category .col {\n  padding: 0;\n  border: 1px solid #f0f0f0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hvbWUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBQUo7QUFFTTtFQUNFLG1CQUFBO0FBQVI7QUFJTTtFQUNBLDhCQUFBO0FBRk47QUFNTTtFQUNFLDhCQUFBO0FBSlI7QUFRTTtFQUNFLDhCQUFBO0FBTlI7QUFTSTtFQUNFLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFQTjtBQVdFO0VBQ0UsYUFBQTtBQVJKO0FBV0U7RUFDRSxrQkFBQTtBQVJKO0FBa0JFO0VBQ0UsWUFBQTtBQWZKO0FBaUJNO0VBQ0Usc0JBQUE7QUFmUjtBQXNCTTtFQUNFLFdBQUE7QUFuQlI7QUF1Qk07RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQXJCUjtBQXVCVTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBckJaO0FBMEJJO0VBQ0UsWUFBQTtBQXhCTjtBQXlCTTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQXZCUjtBQTBCUTtFQUNFLFlBQUE7QUF4QlY7QUE2Qk07RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUEzQlI7QUE0QlE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBMUJWO0FBNEJRO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0FBMUJWO0FBOEJJO0VBQ0UsbUJBQUE7QUE1Qk47QUE4QlE7RUFDRSxXQUFBO0FBNUJWO0FBaUNNO0VBQ0UsZ0JBQUE7QUEvQlI7QUFrQ0k7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FBaENOO0FBaUNNO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUEvQlI7QUFrQ1E7RUFDRywyQkFBQTtBQWhDWDtBQWtDUTtFQUNFLDJCQUFBO0FBaENWO0FBbUNVO0VBQ0Usd0JBQUE7QUFqQ1o7QUFvQ1E7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFsQ1Y7QUFtQ1U7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FBakNaO0FBdUNNO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQXJDUjtBQXVDTTtFQUNFLHVCQUFBO0FBckNSO0FBc0NRO0VBQ0UsWUFBQTtBQXBDVjtBQTRDTTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQXpDUjtBQTBDUTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQXhDVjtBQTBDUTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FBeENWO0FBOENVO0VBQ0UsaUJBQUE7QUE1Q1o7QUFpREk7RUFDRSxhQUFBO0FBL0NOO0FBZ0RNO0VBQ0csYUFBQTtBQTlDVDtBQStDUTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUE3Q1Y7QUFrRE07RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBaERSO0FBaURRO0VBQ0UsV0FBQTtFQUNBLE9BQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBL0NWO0FBa0RNO0VBQ0UsYUFBQTtBQWhEUjtBQWlEUTtFQUNFLHlCQUFBO0FBL0NWO0FBZ0RVO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBOUNaO0FBZ0RVO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQTlDWjtBQW1ESTtFQUNFLGdCQUFBO0FBakROO0FBa0RNO0VBQ0UsV0FBQTtBQWhEUjtBQXVETTtFQUNFLGlCQUFBO0FBcERSO0FBc0RNO0VBQ0UsYUFBQTtBQXBEUjtBQXdESTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQXRETjtBQXlETTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBdkRSO0FBd0RRO0VBTkY7SUFPSSxXQUFBO0lBQ0EsWUFBQTtFQXJEUjtBQUNGO0FBdURNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBckRSO0FBMERNO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUF4RFI7QUEwRE07RUFDRSxVQUFBO0VBQ0EsY0FBQTtBQXhEUjtBQXlEUTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtBQXZEVjtBQXdEVTtFQUNFLDZCQUFBO0FBdERaO0FBMkRJO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUF6RE47QUEyREk7RUFDRSxnQkFBQTtBQXpETjtBQTZERTtFQUNFLFdBQUE7QUExREo7QUE0REk7RUFHRSw2Q0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUE1RE47QUErRE07RUFDRSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7QUE3RFI7QUE4RFE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQTVEVjtBQThEUTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FBNURWO0FBK0RNO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0FBN0RSO0FBK0RNO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLCtDQUFBO0VBQ0EsNkJBQUE7QUE3RFI7QUE4RFE7RUFDRSx5QkFBQTtFQUNBLFVBQUE7QUE1RFY7QUE4RFU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUE1RFo7QUE2RFk7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQTNEZDtBQTZEWTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUEzRGQ7QUE4RFU7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQTVEWjtBQTZEWTtFQUNFLFlBQUE7QUEzRGQ7QUE2RFk7RUFDRSxhQUFBO0FBM0RkO0FBNkRZO0VBQ0UsZUFBQTtBQTNEZDtBQWlFSTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQS9ETjtBQWtFTTtFQUNFLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLDBCQUFBO0FBaEVSO0FBaUVRO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUEvRFY7QUFpRVE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQS9EVjtBQWtFTTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQWhFUjtBQWtFTTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQ0FBQTtFQUNBLDRCQUFBO0FBaEVSO0FBaUVRO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBL0RWO0FBZ0VVO0VBQ0UsV0FBQTtBQTlEWjtBQWlFUTtFQUNFLG9DQUFBO0VBQ0EsVUFBQTtBQS9EVjtBQWlFVTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQS9EWjtBQWdFWTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBOURkO0FBZ0VZO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQTlEZDtBQWlFVTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQS9EWjtBQWdFWTtFQUNFLFlBQUE7QUE5RGQ7QUFnRVk7RUFDRSxhQUFBO0FBOURkO0FBZ0VZO0VBQ0UsZUFBQTtBQTlEZDtBQW9FSTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQWxFTjtBQXFFTTtFQUNFLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLDBCQUFBO0FBbkVSO0FBb0VRO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFsRVY7QUFvRVE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQWxFVjtBQXFFTTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQW5FUjtBQXFFTTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQ0FBQTtFQUNBLDRCQUFBO0FBbkVSO0FBb0VRO0VBQ0Usb0NBQUE7RUFDQSxVQUFBO0FBbEVWO0FBb0VVO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBbEVaO0FBbUVZO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFqRWQ7QUFtRVk7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBakVkO0FBb0VVO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFsRVo7QUFtRVk7RUFDRSxZQUFBO0FBakVkO0FBbUVZO0VBQ0UsYUFBQTtBQWpFZDtBQW1FWTtFQUNFLGVBQUE7QUFqRWQ7QUFzRU07RUFDRSxVQUFBO0VBQ0EseUJBQUE7QUFwRVI7QUF3RUk7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUF0RU47QUF5RU07RUFDRSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSwwQkFBQTtBQXZFUjtBQXdFUTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBdEVWO0FBd0VRO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUF0RVY7QUF5RU07RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUF2RVI7QUF5RU07RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0NBQUE7RUFDQSw0QkFBQTtBQXZFUjtBQXdFUTtFQUNFLG9DQUFBO0VBQ0EsVUFBQTtBQXRFVjtBQXdFVTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQXRFWjtBQXVFWTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBckVkO0FBdUVZO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQXJFZDtBQXdFVTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBdEVaO0FBdUVZO0VBQ0UsWUFBQTtBQXJFZDtBQXVFWTtFQUNFLGFBQUE7QUFyRWQ7QUF1RVk7RUFDRSxlQUFBO0FBckVkO0FBMEVNO0VBQ0UsVUFBQTtFQUNBLHlCQUFBO0FBeEVSIiwiZmlsZSI6ImhvbWUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAudGh1bW5haWxze1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgcGFkZGluZzogMHB4IDEwcHg7XG4gICAgaW9uLWNvbDpudGgtY2hpbGQoNG4rMSkge1xuICAgICAgLmNhdGVnb3JpZXNCb3h7XG4gICAgICAgIGJhY2tncm91bmQ6ICNkZWI4ODc7XG4gICAgICB9XG4gICAgfVxuICAgIGlvbi1jb2w6bnRoLWNoaWxkKDRuKzIpIHsgXG4gICAgICAuY2F0ZWdvcmllc0JveCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjYzRlN2UxIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG4gICAgaW9uLWNvbDpudGgtY2hpbGQoNG4rMykge1xuICAgICAgLmNhdGVnb3JpZXNCb3gge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjYjdhY2E4IWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG4gICAgaW9uLWNvbDpudGgtY2hpbGQoNG4rNCkgeyBcbiAgICAgIC5jYXRlZ29yaWVzQm94e1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMGM4MWNlIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG4gICAgaDV7XG4gICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgfVxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHsgXG4gICAgZGlzcGxheTogbm9uZTsgXG4gIH1cblxuICAuZmFkZSB7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB9XG5cbiAgLmJhc2ljIHtcbiAgICAucHJvZHVjdC1zbGlkZXIge1xuICAgICAgLml0ZW0ge1xuXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlvbi1zbGlkZXMge1xuICAgIGhlaWdodDogYXV0bztcbiAgICAuc2xpZGUtem9vbSB7XG4gICAgICAuYmFubmVyX2ltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnNoaWVuIHtcbiAgICAuc2hpZW4tc3RyaXAge1xuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICAgIC5zaGllbi1jYXRlZ29yeSB7XG4gICAgICAuc2hpZW4tY2F0ZWdvcnktaXRlbSB7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxNnB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIC5zaGllbi1pbWcge1xuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5zaGVpbi1wcm9kdWN0LXJvdyB7XG4gICAgICBwYWRkaW5nIDo4cHggbnVsbDtcbiAgICAgIC5zaGVpbi1wcm9kdWN0LXJvdy10aXRsZSB7XG4gICAgICAgIHBhZGRpbmc6bnVsbCAgbnVsbCBudWxsIDhweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIH1cbiAgICAgIC5zaGVpbi1wcm9kdWN0LXJvdy1zbGlkZXIge1xuICAgICAgICAuc3dpcGVyLWNvbnRhaW5lciB7XG4gICAgICAgICAgcGFkZGluZzpudWxsIG51bGwgbnVsbCA4cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLnNoZWluLXByb2R1Y3QtaXRlbSB7XG4gICAgICBkaXZbdGV4dC1zdGFydF0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgICAgIGRlbCB7XG4gICAgICAgICAgY29sb3I6ICNhZWFlYWU7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgfVxuICAgICAgICBpbnMge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudF9jb2xvcik7XG4gICAgICAgICAgbWFyZ2luOjhweCAwIDJweCAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5zaGVpbi1zaW5nbGUtYmFubmVyIHtcbiAgICAgIHBhZGRpbmc6IDEwcHggMCAwIDA7XG4gICAgICBpbWctbG9hZGVyIHtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAuc2hlaW4tZG91YmxlLWJhbm5lci5yb3cge1xuICAgICAgLmNvbCB7XG4gICAgICAgIHBhZGRpbmc6IDBweCA1cHg7XG4gICAgICB9XG4gICAgfVxuICAgIC5zaGVpbi1kb3VibGUtdGlsdGVkLWJhbm5lciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjFiMjA1O1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIC5zaGVpbi1kb3VibGUtdGlsdGVkLWJhbm5lci10aXRsZSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICB9XG4gICAgICAuY29sIHtcbiAgICAgICAgJjpudGgtb2YtdHlwZSgxKSB7XG4gICAgICAgICAgIHBhZGRpbmc6MTZweCA4cHggMTZweCAxNnB4O1xuICAgICAgICB9XG4gICAgICAgICY6bnRoLW9mLXR5cGUoMikge1xuICAgICAgICAgIHBhZGRpbmc6MTZweCAxNnB4IDE2cHggOHB4O1xuICAgICAgICB9XG4gICAgICAgIGltZy1sb2FkZXIge1xuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMmRlZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRpdlt0ZXh0LWNlbnRlcl0ge1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyMjIyMjI7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMzBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLnNoZWluLXByb2R1Y3QtZ3JpZCB7XG4gICAgICAuc2hlaW4tcHJvZHVjdC1ncmlkLXRpdGxlIHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBtYXJnaW46MTZweCBudWxsIDEycHgsIG51bGw7XG4gICAgICB9XG4gICAgICAucm93IHtcbiAgICAgICAgcGFkZGluZzogNHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIC5jb2wge1xuICAgICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5rb292cyB7XG4gICAgLmtvb3ZzLW1haW4tYmFubmVyIHtcbiAgICAgIC5zd2lwZXItcGFnaW5hdGlvbiB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIHBhZGRpbmc6bnVsbCA0cHggbnVsbCBudWxsO1xuICAgICAgICAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgICAgICAgICB3aWR0aDogNXB4O1xuICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgIG1hcmdpbjogMCAycHg7XG4gICAgICAgIH1cbiAgICAgICAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xuICAgICAgICAgIHdpZHRoOiA4cHg7XG4gICAgICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnN3aXBlci1jb250YWluZXIge1xuICAgICAgICAuc2xpZGUtem9vbSB7XG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAua29vdnMtY2F0ZWdvcnktc2xpZGUge1xuICAgICAgcGFkZGluZzoxMHB4IG51bGwgbnVsbCBudWxsO1xuICAgICAgLnN3aXBlci1jb250YWluZXIge1xuICAgICAgICAgcGFkZGluZzpudWxsIG51bGwgbnVsbCAxMHB4O1xuICAgICAgICAua29vdnMtY2F0ZWdvcnktc2xpZGUtdGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAua29vdnMtcHJvZHVjdC1zbGlkZXIge1xuICAgICAgLmtvb3ZzLXByb2R1Y3Qtc2xpZGVyLXRpdGxlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBtYXJnaW46IDIwcHggNXB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBtYXJnaW46MjBweCAxMHB4IDEwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHNwYW46bnRoLW9mLXR5cGUoMikge1xuICAgICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICAgICAgICBtYXJnaW46IDBweCAxMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuc3dpcGVyLWNvbnRhaW5lciB7XG4gICAgICAgIHBhZGRpbmc6bnVsbCBudWxsIG51bGwgMTBweDtcbiAgICAgICAgaW9uLXNsaWRlIHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYWVhZWFlO1xuICAgICAgICAgIC5rb292cy1wcm9kdWN0LXNsaWRlci1wcm9kdWN0LW5hbWUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAua29vdnMtcHJvZHVjdC1zbGlkZXItcHJvZHVjdC1wcmljZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5rb292cy1zaW5nbGUtYmFubmVyIHtcbiAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubm5ub3cge1xuICAgIC5ubm5vdy1tYWluLWJhbm5lciB7XG4gICAgICAuc3dpcGVyLWNvbnRhaW5lciB7XG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgICAgfVxuICAgICAgLnN3aXBlci1wYWdpbmF0aW9uIHtcbiAgICAgICAgYm90dG9tOiAtMTBweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubm5ub3ctY2F0LXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgbWFyZ2luLXRvcDogMjhweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgfVxuICAgIC5ubm5vdy1jYXQtc2xpZGVyIHtcbiAgICAgIC5ubm5vdy1jYXQtc2xpZGVyLWltZyB7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEwMHB4O1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gICAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAubm5ub3ctY2F0LXNsaWRlci10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5ubm5vdy1xdWljay1saW5rcyB7XG4gICAgICAubm5ub3ctcXVpY2stbGlua3MtdGl0bGUge1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICBtYXJnaW4tdG9wOiAzNXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICAgICAgfVxuICAgICAgLm5ubm93LXF1aWNrLWxpbmtzLWxpc3Qge1xuICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgLm5ubm93LXF1aWNrLWxpbmtzLWl0ZW0ge1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2FlYWVhZTtcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYWVhZWFlO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYWVhZWFlO1xuICAgICAgICAgICY6bnRoLW9mLXR5cGUoMSkge1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNhZWFlYWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5ubm5vdy1iYW5uZXItdGl0bGUge1xuICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgfVxuICAgIC5ubm5vdy1iYW5uZXItaW1nIHtcbiAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgfVxuICB9XG5cbiAgLmZsaXBrYXJ0IHtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIC5mb3VyLWdyaWQtY2F0ZWdvcnkge1xuICAgICAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYig0MCwgMTE2LCAyNDApLCByZ2IoNDAsIDExNiwgMjQwKSk7XG4gICAgICAvLyAgYmFja2dyb3VuZC1jb2xvcjogI2E1ZTRkYjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWdzL2xvZ2luLWJhY2tncm91bmQuanBnXCIpO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICBwYWRkaW5nOiAxNXB4IDE2cHggMjZweDtcbiAgICAgIC8vIG1hcmdpbi1ib3R0b206IDE2cHg7XG5cbiAgICAgIC52ZXdhbGxfYXJlYSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDE5cHggMHB4IDBweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgIHAge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgICAgICAgY29sb3I6ICM4Nzg3ODc7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICB9XG4gICAgICAgIGgxIHtcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMyY2EwMzI7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgcGFkZGluZzogMTBweCAxMnB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICB9XG4gICAgICAucHJvZHVjdGFyZWEge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDEuNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxMnB4KTtcbiAgICAgICAgaW9uLWNvbCB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2YwZjBmMDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgICAgLnByb2R1Y3Rjb250ZW50IHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA3cHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgY29sb3I6ICMyNjI2MjY7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgY29sb3I6ICMzODhlM2M7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcm9kdWN0aW1hZ2Uge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDI0cHggMDtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxNDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC50aHJlZS1ncmlkLWNhdGVnb3J5IHtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIHBhZGRpbmc6IDE1cHggMCAwcHg7XG4gICAgICAvL21hcmdpbi1ib3R0b206IDIzcHg7XG5cbiAgICAgIC52ZXdhbGxfYXJlYSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgcGFkZGluZzogMTlweCAxNnB4IDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICBwIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xuICAgICAgICAgIGNvbG9yOiAjODc4Nzg3O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgfVxuICAgICAgICBoMSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBidXR0b24ge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMmNhMDMyO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTJweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgfVxuICAgICAgLnByb2R1Y3RhcmVhIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICBib3gtc2hhZG93OiAwIDFweCAxLjVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgOHB4KTtcbiAgICAgICAgaW9uLWNvbDpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWNvbCB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2YwZjBmMCAhaW1wb3J0YW50O1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgICAgICAucHJvZHVjdGNvbnRlbnQge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDdweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICBjb2xvcjogIzI2MjYyNjtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICBjb2xvcjogIzM4OGUzYztcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLnByb2R1Y3RpbWFnZSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDE0MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLnR3by1ncmlkLWNhdGVnb3J5IHtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIHBhZGRpbmc6IDE1cHggMCAwcHg7XG4gICAgICAvL21hcmdpbi1ib3R0b206IDIzcHg7XG5cbiAgICAgIC52ZXdhbGxfYXJlYSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgcGFkZGluZzogMTlweCAxNnB4IDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICBwIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xuICAgICAgICAgIGNvbG9yOiAjODc4Nzg3O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgfVxuICAgICAgICBoMSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBidXR0b24ge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMmNhMDMyO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTJweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgfVxuICAgICAgLnByb2R1Y3RhcmVhIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICBib3gtc2hhZG93OiAwIDFweCAxLjVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgOHB4KTtcbiAgICAgICAgaW9uLWNvbCB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2YwZjBmMCAhaW1wb3J0YW50O1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgICAgICAucHJvZHVjdGNvbnRlbnQge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDdweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICBjb2xvcjogIzI2MjYyNjtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICBjb2xvcjogIzM4OGUzYztcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLnByb2R1Y3RpbWFnZSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogMjRweCAwO1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDE0MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5jb2wge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZjBmMGYwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5vbmUtZ3JpZC1jYXRlZ29yeSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICBwYWRkaW5nOiAxNXB4IDAgMHB4O1xuICAgICAgLy9tYXJnaW4tYm90dG9tOiAyM3B4O1xuXG4gICAgICAudmV3YWxsX2FyZWEge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgIHBhZGRpbmc6IDE5cHggMTZweCAwO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgcCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICAgICAgICBjb2xvcjogIzg3ODc4NztcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaDEge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYnV0dG9uIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzJjYTAzMjtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIH1cbiAgICAgIC5wcm9kdWN0YXJlYSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxcHggMS41cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDhweCk7XG4gICAgICAgIGlvbi1jb2wge1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMGYwZjAgIWltcG9ydGFudDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgICAgLnByb2R1Y3Rjb250ZW50IHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA3cHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgY29sb3I6ICMyNjI2MjY7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgY29sb3I6ICMzODhlM2M7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcm9kdWN0aW1hZ2Uge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDI0cHggMDtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxNDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuY29sIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2YwZjBmMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ== */");

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

/***/ "lQWD":
/*!************************************************************************!*\
  !*** ./node_modules/@ionic-native/deeplinks/__ivy_ngcc__/ngx/index.js ***!
  \************************************************************************/
/*! exports provided: Deeplinks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Deeplinks", function() { return Deeplinks; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "C6fG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");





var Deeplinks = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Deeplinks, _super);
    function Deeplinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Deeplinks.prototype.route = function (paths) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "route", { "observable": true }, arguments); };
    Deeplinks.prototype.routeWithNavController = function (navController, paths, options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "routeWithNavController", { "observable": true }, arguments); };
    Deeplinks.pluginName = "Deeplinks";
    Deeplinks.plugin = "ionic-plugin-deeplinks";
    Deeplinks.pluginRef = "IonicDeeplink";
    Deeplinks.repo = "https://github.com/ionic-team/ionic-plugin-deeplinks";
    Deeplinks.install = "ionic cordova plugin add ionic-plugin-deeplinks --variable URL_SCHEME=myapp --variable DEEPLINK_SCHEME=https --variable DEEPLINK_HOST=example.com --variable ANDROID_PATH_PREFIX=/";
    Deeplinks.installVariables = ["URL_SCHEME", "DEEPLINK_SCHEME", "DEEPLINK_HOST", "ANDROID_PATH_PREFIX"];
    Deeplinks.platforms = ["Android", "Browser", "iOS"];
Deeplinks.ɵfac = function Deeplinks_Factory(t) { return ɵDeeplinks_BaseFactory(t || Deeplinks); };
Deeplinks.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: Deeplinks, factory: function (t) { return Deeplinks.ɵfac(t); } });
var ɵDeeplinks_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](Deeplinks);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Deeplinks, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();
    return Deeplinks;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvZGVlcGxpbmtzL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBQ2xDO0FBR1csSUF5Rm9CLDZCQUFpQjtBQUFDO0FBRTlCO0FBRUk7QUFBTSxJQVUzQix5QkFBSyxhQUFDLEtBQVU7QUFNSixJQXVCWiwwQ0FBc0IsYUFBQyxhQUFrQixFQUFFLEtBQVUsRUFBRSxPQUF5QjtBQUl6QztBQUF3QztBQUFpRDtBQUEyQztBQUE2RTtBQUE4TTtBQUE0Rzs2Q0FoRG5qQixVQUFVOzs7OzswQkFDTDtBQUFDLG9CQS9GUDtBQUFFLEVBK0Y2QixpQkFBaUI7QUFDL0MsU0FEWSxTQUFTO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBEZWVwbGlua01hdGNoIHtcbiAgLyoqXG4gICAqIFRoZSByb3V0ZSBpbmZvIGZvciB0aGUgbWF0Y2hlZCByb3V0ZVxuICAgKi9cbiAgJHJvdXRlOiBhbnk7XG5cbiAgLyoqXG4gICAqIEFueSBhcmd1bWVudHMgcGFzc2VkIGVpdGhlciB0aHJvdWdoIHJvdXRlIHBhcmFtZXRlcnMgb3IgR0VUIHBhcmFtZXRlcnNcbiAgICovXG4gICRhcmdzOiBhbnk7XG5cbiAgLyoqXG4gICAqIFRoZSBkZWVwbGluayBvYmplY3QgcHJvY2Vzc2VkIGZyb20gdGhlIHBsdWdpbiwgYWxvbmcgd2l0aCBhbnlcbiAgICogYW55IGludGVybmFsIG5hdGl2ZSBkYXRhIGF2YWlsYWJsZSBhcyBcImV4dHJhc1wiIGF0IHRoZSB0aW1lXG4gICAqIHRoZSByb3V0ZSB3YXMgbWF0Y2hlZCAoZm9yIGV4YW1wbGUsIEZhY2Vib29rIHNvbWV0aW1lcyBhZGRzIGV4dHJhIGRhdGEpXG4gICAqL1xuICAkbGluazogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERlZXBsaW5rT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBTZXQgdGhlIG1hdGNoZWQgcm91dGUgYXMgcm9vdCBwYWdlIHVzaW5nIGBuYXZDdHJsLnNldFJvb3QoKWAgbWV0aG9kLlxuICAgKi9cbiAgcm9vdDogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBAbmFtZSBEZWVwbGlua3NcbiAqIEBwcmVtaWVyIGRlZXBsaW5rc1xuICogQGRlc2NyaXB0aW9uIFRoaXMgcGx1Z2luIGhhbmRsZXMgZGVlcGxpbmtzIG9uIGlPUyBhbmQgQW5kcm9pZCBmb3IgYm90aCBjdXN0b20gVVJMIHNjaGVtZSBsaW5rc1xuICogYW5kIFVuaXZlcnNhbCBBcHAgTGlua3MuXG4gKlxuICogUGxlYXNlIHJlYWQgdGhlIFtpb25pYyBwbHVnaW4gZGVlcGxpbmtzIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLXBsdWdpbi1kZWVwbGlua3MpIGZvciBpT1MgYW5kIEFuZHJvaWQgaW50ZWdyYXRpb24uXG4gKiBZb3UgbXVzdCBhZGQgYHVuaXZlcnNhbC1saW5rc2AgdG8geW91ciBgY29uZmlnLnhtbGAgYW5kIHNldCB1cCBBcHBsZSBBcHAgU2l0ZSBBc3NvY2lhdGlvbiAoQUFTQSkgZm9yIGlPUyBhbmQgQXNzZXQgTGlua3MgZm9yIEFuZHJvaWQuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBEZWVwbGlua3MgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2RlZXBsaW5rcy9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZGVlcGxpbmtzOiBEZWVwbGlua3MpIHsgfVxuICpcbiAqIHRoaXMuZGVlcGxpbmtzLnJvdXRlKHtcbiAqICAgICAgJy9hYm91dC11cyc6IEFib3V0UGFnZSxcbiAqICAgICAgJy91bml2ZXJzYWwtbGlua3MtdGVzdCc6IEFib3V0UGFnZSxcbiAqICAgICAgJy9wcm9kdWN0cy86cHJvZHVjdElkJzogUHJvZHVjdFBhZ2VcbiAqICAgIH0pLnN1YnNjcmliZShtYXRjaCA9PiB7XG4gKiAgICAgIC8vIG1hdGNoLiRyb3V0ZSAtIHRoZSByb3V0ZSB3ZSBtYXRjaGVkLCB3aGljaCBpcyB0aGUgbWF0Y2hlZCBlbnRyeSBmcm9tIHRoZSBhcmd1bWVudHMgdG8gcm91dGUoKVxuICogICAgICAvLyBtYXRjaC4kYXJncyAtIHRoZSBhcmdzIHBhc3NlZCBpbiB0aGUgbGlua1xuICogICAgICAvLyBtYXRjaC4kbGluayAtIHRoZSBmdWxsIGxpbmsgZGF0YVxuICogICAgICBjb25zb2xlLmxvZygnU3VjY2Vzc2Z1bGx5IG1hdGNoZWQgcm91dGUnLCBtYXRjaCk7XG4gKiAgICB9LCBub21hdGNoID0+IHtcbiAqICAgICAgLy8gbm9tYXRjaC4kbGluayAtIHRoZSBmdWxsIGxpbmsgZGF0YVxuICogICAgICBjb25zb2xlLmVycm9yKCdHb3QgYSBkZWVwbGluayB0aGF0IGRpZG5cXCd0IG1hdGNoJywgbm9tYXRjaCk7XG4gKiAgICB9KTtcbiAqIGBgYFxuICpcbiAqIEFsdGVybmF0aXZlbHksIGlmIHlvdSdyZSB1c2luZyBJb25pYywgdGhlcmUncyBhIGNvbnZlbmllbmNlIG1ldGhvZCB0aGF0IHRha2VzIGEgcmVmZXJlbmNlIHRvIGEgYE5hdkNvbnRyb2xsZXJgIGFuZCBoYW5kbGVzXG4gKiB0aGUgYWN0dWFsIG5hdmlnYXRpb24gZm9yIHlvdTpcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiB0aGlzLmRlZXBsaW5rcy5yb3V0ZVdpdGhOYXZDb250cm9sbGVyKHRoaXMubmF2Q29udHJvbGxlciwge1xuICogICAnL2Fib3V0LXVzJzogQWJvdXRQYWdlLFxuICogICAnL3Byb2R1Y3RzLzpwcm9kdWN0SWQnOiBQcm9kdWN0UGFnZVxuICogfSkuc3Vic2NyaWJlKG1hdGNoID0+IHtcbiAqICAgICAvLyBtYXRjaC4kcm91dGUgLSB0aGUgcm91dGUgd2UgbWF0Y2hlZCwgd2hpY2ggaXMgdGhlIG1hdGNoZWQgZW50cnkgZnJvbSB0aGUgYXJndW1lbnRzIHRvIHJvdXRlKClcbiAqICAgICAvLyBtYXRjaC4kYXJncyAtIHRoZSBhcmdzIHBhc3NlZCBpbiB0aGUgbGlua1xuICogICAgIC8vIG1hdGNoLiRsaW5rIC0gdGhlIGZ1bGwgbGluayBkYXRhXG4gKiAgICAgY29uc29sZS5sb2coJ1N1Y2Nlc3NmdWxseSBtYXRjaGVkIHJvdXRlJywgbWF0Y2gpO1xuICogICB9LCBub21hdGNoID0+IHtcbiAqICAgICAvLyBub21hdGNoLiRsaW5rIC0gdGhlIGZ1bGwgbGluayBkYXRhXG4gKiAgICAgY29uc29sZS5lcnJvcignR290IGEgZGVlcGxpbmsgdGhhdCBkaWRuXFwndCBtYXRjaCcsIG5vbWF0Y2gpO1xuICogICB9KTtcbiAqIGBgYFxuICpcbiAqIFNlZSB0aGUgW0lvbmljIERlZXBsaW5rcyBEZW1vXShodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYzItZGVlcGxpbmtzLWRlbW8vYmxvYi9tYXN0ZXIvYXBwL2FwcC50cykgZm9yIGFuIGV4YW1wbGUgb2YgaG93IHRvXG4gKiByZXRyaWV2ZSB0aGUgYE5hdkNvbnRyb2xsZXJgIHJlZmVyZW5jZSBhdCBydW50aW1lLlxuICpcbiAqIEBpbnRlcmZhY2VzXG4gKiBEZWVwbGlua01hdGNoXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRGVlcGxpbmtzJyxcbiAgcGx1Z2luOiAnaW9uaWMtcGx1Z2luLWRlZXBsaW5rcycsXG4gIHBsdWdpblJlZjogJ0lvbmljRGVlcGxpbmsnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWMtcGx1Z2luLWRlZXBsaW5rcycsXG4gIGluc3RhbGw6XG4gICAgJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBpb25pYy1wbHVnaW4tZGVlcGxpbmtzIC0tdmFyaWFibGUgVVJMX1NDSEVNRT1teWFwcCAtLXZhcmlhYmxlIERFRVBMSU5LX1NDSEVNRT1odHRwcyAtLXZhcmlhYmxlIERFRVBMSU5LX0hPU1Q9ZXhhbXBsZS5jb20gLS12YXJpYWJsZSBBTkRST0lEX1BBVEhfUFJFRklYPS8nLFxuICBpbnN0YWxsVmFyaWFibGVzOiBbJ1VSTF9TQ0hFTUUnLCAnREVFUExJTktfU0NIRU1FJywgJ0RFRVBMSU5LX0hPU1QnLCAnQU5EUk9JRF9QQVRIX1BSRUZJWCddLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdCcm93c2VyJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEZWVwbGlua3MgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBEZWZpbmUgYSBzZXQgb2YgcGF0aHMgdG8gbWF0Y2ggYWdhaW5zdCBpbmNvbWluZyBkZWVwbGlua3MuXG4gICAqXG4gICAqIEBwYXJhbSB7cGF0aHN9IHBhdGhzIERlZmluZSBhIHNldCBvZiBwYXRocyB0byBtYXRjaCBhZ2FpbnN0IGluY29taW5nIGRlZXBsaW5rcy5cbiAgICogcGF0aHMgdGFrZXMgYW4gb2JqZWN0IG9mIHRoZSBmb3JtIHsgJ3BhdGgnOiBkYXRhIH0uIElmIGEgZGVlcGxpbmtcbiAgICogbWF0Y2hlcyB0aGUgcGF0aCwgdGhlIHJlc3VsdGluZyBwYXRoLWRhdGEgcGFpciB3aWxsIGJlIHJldHVybmVkIGluIHRoZVxuICAgKiBwcm9taXNlIHJlc3VsdCB3aGljaCB5b3UgY2FuIHRoZW4gdXNlIHRvIG5hdmlnYXRlIGluIHRoZSBhcHAgYXMgeW91IHNlZSBmaXQuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPERlZXBsaW5rTWF0Y2g+fSBSZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBpcyBjYWxsZWQgZWFjaCB0aW1lIGEgZGVlcGxpbmsgY29tZXMgdGhyb3VnaCwgYW5kXG4gICAqIGVycm9ycyBpZiBhIGRlZXBsaW5rIGNvbWVzIHRocm91Z2ggdGhhdCBkb2VzIG5vdCBtYXRjaCBhIGdpdmVuIHBhdGguXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgfSlcbiAgcm91dGUocGF0aHM6IGFueSk6IE9ic2VydmFibGU8RGVlcGxpbmtNYXRjaD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBUaGlzIGlzIGEgY29udmVuaWVuY2UgdmVyc2lvbiBvZiBgcm91dGVgIHRoYXQgdGFrZXMgYSByZWZlcmVuY2UgdG8gYSBOYXZDb250cm9sbGVyXG4gICAqIGZyb20gSW9uaWMsIG9yIGEgY3VzdG9tIGNsYXNzIHRoYXQgY29uZm9ybXMgdG8gdGhpcyBwcm90b2NvbDpcbiAgICpcbiAgICogTmF2Q29udHJvbGxlci5wdXNoID0gZnVuY3Rpb24oVmlldywgUGFyYW1zKXt9XG4gICAqXG4gICAqIFRoaXMgaGFuZGxlciB3aWxsIGF1dG9tYXRpY2FsbHkgbmF2aWdhdGUgd2hlbiBhIHJvdXRlIG1hdGNoZXMuIElmIHlvdSBuZWVkIGZpbmVyLWdyYWluZWRcbiAgICogY29udHJvbCBvdmVyIHRoZSBiZWhhdmlvciBvZiBhIG1hdGNoaW5nIGRlZXBsaW5rLCB1c2UgdGhlIHBsYWluIGByb3V0ZWAgbWV0aG9kLlxuICAgKlxuICAgKiBAcGFyYW0ge05hdn0gbmF2Q29udHJvbGxlciBEZWZpbmUgYSBzZXQgb2YgcGF0aHMgdG8gbWF0Y2ggYWdhaW5zdCBpbmNvbWluZyBkZWVwbGlua3MuXG4gICAqIHBhdGhzIHRha2VzIGFuIG9iamVjdCBvZiB0aGUgZm9ybSB7ICdwYXRoJzogZGF0YSB9LiBJZiBhIGRlZXBsaW5rXG4gICAqIG1hdGNoZXMgdGhlIHBhdGgsIHRoZSByZXN1bHRpbmcgcGF0aC1kYXRhIHBhaXIgd2lsbCBiZSByZXR1cm5lZCBpbiB0aGVcbiAgICogcHJvbWlzZSByZXN1bHQgd2hpY2ggeW91IGNhbiB0aGVuIHVzZSB0byBuYXZpZ2F0ZSBpbiB0aGUgYXBwIGFzIHlvdSBzZWUgZml0LlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGF0aHNcbiAgICpcbiAgICogQHBhcmFtIHtEZWVwbGlua09wdGlvbnN9IG9wdGlvbnNcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8RGVlcGxpbmtNYXRjaD59IFJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IHJlc29sdmVzIGVhY2ggdGltZSBhIGRlZXBsaW5rIGNvbWVzIHRocm91Z2gsIGFuZFxuICAgKiBlcnJvcnMgaWYgYSBkZWVwbGluayBjb21lcyB0aHJvdWdoIHRoYXQgZG9lcyBub3QgbWF0Y2ggYSBnaXZlbiBwYXRoLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gIH0pXG4gIHJvdXRlV2l0aE5hdkNvbnRyb2xsZXIobmF2Q29udHJvbGxlcjogYW55LCBwYXRoczogYW55LCBvcHRpb25zPzogRGVlcGxpbmtPcHRpb25zKTogT2JzZXJ2YWJsZTxEZWVwbGlua01hdGNoPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ "qwQQ":
/*!************************************!*\
  !*** ./src/app/pages/home/home.ts ***!
  \************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.html */ "ta8K");
/* harmony import */ var _home_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.scss */ "HRNH");
/* harmony import */ var _services_notif_notif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/notif/notif */ "EEhM");
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ "wljF");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../app.config */ "aR35");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_providers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/providers */ "fC+V");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _decorator_page_track_decorator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../decorator/page-track.decorator */ "zUQQ");
/* harmony import */ var _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/deeplinks/ngx */ "lQWD");
/* harmony import */ var src_app_ShareComponent_search_search__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/ShareComponent/search/search */ "y3Op");













let HomePage = class HomePage {
    constructor(menu, navCtrl, WC, loader, wishlist, modalCtrl, settings, toast, splash, platform, deeplinks, oneSignal, notif) {
        this.menu = menu;
        this.navCtrl = navCtrl;
        this.WC = WC;
        this.loader = loader;
        this.wishlist = wishlist;
        this.modalCtrl = modalCtrl;
        this.settings = settings;
        this.splash = splash;
        this.platform = platform;
        this.deeplinks = deeplinks;
        this.oneSignal = oneSignal;
        this.notif = notif;
        this.isLayout = false;
        this.storeName = _app_config__WEBPACK_IMPORTED_MODULE_5__["App"].store;
        this.slideTapOpts = {
            spaceBetween: 200,
            slidesPerView: 3,
            direction: 'vertical'
        };
        this.slideOpts = {
            initialSlide: 0,
            speed: 2000,
            loop: true,
            autoplay: true
        };
        this.dir = platform.isRTL ? 'rtl' : 'ltr';
        ;
        this.WC.loadSetting();
        this.slideTapOpts.direction = platform.isRTL ? 'vertical' : '';
        if (this.platform.width() >= 800) {
            this.slideTapOpts.slidesPerView = 5;
        }
        else if (this.platform.width() >= 600) {
            this.slideTapOpts.slidesPerView = 4;
        }
        else if (this.platform.width() >= 412) {
            this.slideTapOpts.slidesPerView = 4;
        }
        else if (this.platform.width() >= 319) {
            this.slideTapOpts.slidesPerView = 3;
        }
        this.WC.getHomePageLayout().then((x) => {
            console.log(x);
            this.layout = x;
            if (this.layout) {
                this.isLayout = true;
            }
            this.settings.setSettings(x, "layout");
        }, (err) => {
            if (this.settings.layout) {
                this.layout = this.settings.layout;
                this.isLayout = true;
            }
            console.log(err);
            toast.showError();
        });
        if (this.platform.is("cordova")) {
            if (this.settings.all.appSettings.one_signal_app_id &&
                this.settings.all.appSettings.one_signal_app_id != "" &&
                this.settings.all.appSettings.google_project_number &&
                this.settings.all.appSettings.google_project_number != "") {
                this.oneSignal.startInit(this.settings.all.appSettings.one_signal_app_id, this.settings.all.appSettings.google_project_number);
                this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
                this.oneSignal.handleNotificationReceived().subscribe((x) => {
                    // do something when notification is received
                    console.log(x);
                    if (x && x.payload) {
                        this.notif.post(x.payload);
                    }
                });
                this.oneSignal.handleNotificationOpened().subscribe((x) => {
                    // do something when a notification is opened
                    console.log(x);
                    if (x && x.notification && x.notification.payload) {
                        this.notif.post(x.notification.payload);
                        if (x.notification.payload.additionalData &&
                            x.notification.payload.additionalData.product_id) {
                            let params = {
                                id: x.notification.payload.additionalData.product_id,
                                isReferedByPush: true,
                            };
                            this.goTo("productdetail", params);
                        }
                        else if (x.notification.payload.additionalData &&
                            x.notification.payload.additionalData.category_id) {
                            let params = {
                                id: x.notification.payload.additionalData.category_id,
                            };
                            this.goTo("product", params);
                        }
                    }
                });
                this.oneSignal.endInit();
            }
            this.deeplinks.route({}).subscribe((match) => {
                // match.$route - the route we matched, which is the matched entry from the arguments to route()
                // match.$args - the args passed in the link
                // match.$link - the full link data
                //console.log('Successfully matched route', match);
            }, (nomatch) => {
                console.log(nomatch.$link.url);
                if (nomatch.$link.url &&
                    nomatch.$link.url.includes(_app_config__WEBPACK_IMPORTED_MODULE_5__["App"].url + "/product/")) {
                    let params = {
                        link: nomatch.$link.url,
                        isReferedByDeeplinks: true,
                    };
                    this.goTo("productdetail", params);
                    console.log("go to product details page");
                }
            });
        }
    }
    getRandomColor() {
        var color = Math.floor(0x1000000 * Math.random()).toString(16);
        return '#' + ('000000' + color).slice(-6);
    }
    openMenu() {
        this.menu.open();
    }
    ionViewDidEnter() {
        this.splash.hide();
        if (this.slides !== undefined) {
            //this.slides.autoplayDisableOnInteraction = false;
            this.slides.startAutoplay();
        }
    }
    ionViewWillLeave() {
        if (this.slides !== undefined) {
            this.slides.stopAutoplay();
        }
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
    handleSlideClick() {
        //Using This Function due to there is a bug in ion-slides in autoplay loop can't detect 1st silde click
        //Need To fix when official team fix this
        // let index = this.slides._slides[this.slides.clickedIndex].getAttribute(
        //   "data-swiper-slide-index"
        // );
        this.slides.getActiveIndex().then((index) => {
            console.log(index);
            if (index) {
                this.gridClick("product", this.layout.banner[index]);
            }
        });
    }
    goTo(page, params) {
        let navigationExtras = { queryParams: params };
        this.navCtrl.navigateForward(page, navigationExtras);
    }
    gridClick(page, data) {
        let params = {};
        if (data && data.type == "brand") {
            params.brand_id = data.id;
            params.brand_name = data.name;
        }
        else {
            params = data;
        }
        this.goTo(page, params);
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_8__["WooCommerceProvider"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_8__["LoadingProvider"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_8__["WishlistProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_8__["SettingsProvider"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_8__["ToastProvider"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_9__["SplashScreen"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
    { type: _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_11__["Deeplinks"] },
    { type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_4__["OneSignal"] },
    { type: _services_notif_notif__WEBPACK_IMPORTED_MODULE_3__["NotifProvider"] }
];
HomePage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"], args: ["slider", { static: true },] }]
};
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_decorator_page_track_decorator__WEBPACK_IMPORTED_MODULE_10__["PageTrack"])({ pageName: "Home Page" }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: "page-home",
        template: _raw_loader_home_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ }),

/***/ "ta8K":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.html ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button  clear icon-only (click)=\"openMenu()\" >\n      <ion-icon name=\"menu\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      <img src=\"assets/imgs/FASTCON.png\" style=\"width: 100px; height: 36px\" />\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button\n        mode=\"md\"\n        clear\n        icon-only\n        (click)=\"goTo('notification')\"\n      >\n        <ion-icon name=\"notifications-outline\"></ion-icon>\n      </ion-button>\n      <ion-button mode=\"md\" ion-button icon-only (click)=\"goTo('wishlist')\">\n        <ion-icon name=\"heart\"></ion-icon>\n        <ion-badge *ngIf=\"wishlist.total && wishlist.total > 0\">{{wishlist.total}}</ion-badge>\n       \n      </ion-button>\n      <ion-button mode=\"md\" fill=\"clear\" icon-only (click)=\"goTo('myCart')\">\n        <ion-icon name=\"cart\"></ion-icon>\n        <ion-badge *ngIf=\"settings.cartCount && settings.cartCount > 0\"\n          >{{settings.cartCount}}</ion-badge\n        >\n       \n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <ion-searchbar\n    style=\"background-color: var(--primary_color); margin-top: -5px\"\n    (click)=\"showSearch()\"\n    autocomplete\n    mode=\"ios\"\n    #searchBar\n    [placeholder]=\"'SEARCH' | translate\"\n  >\n  </ion-searchbar>\n</ion-header>\n\n<ion-content no-padding>\n\n  <ng-container *ngIf=\"!layout\">\n    <skeleton-item no-animated height=\"180px\"></skeleton-item>\n    <ion-item lines=\"none\">\n      <skeleton-item no-animated width=\"36%\"></skeleton-item>\n      <skeleton-item no-animated item-end width=\"20%\"></skeleton-item>\n    </ion-item>\n    <ion-row>\n      <ion-col *ngFor=\"let x of [0,1,2,3]\">\n        <skeleton-item no-animated height=\"60px\"></skeleton-item>\n      </ion-col>\n    </ion-row>\n    <div class=\"product-slider\" *ngFor=\"let x of [0,1,2,3]\">\n      <ion-item lines=\"none\">\n        <skeleton-item no-animated width=\"36%\"></skeleton-item>\n      </ion-item>\n      <ion-slides  pager=\"false\" [options]=\"slideTapOpts\" scrollbar=\"false\" >\n        <ion-slide *ngFor=\"let x of [0,1,2,3,4]\">\n          <skeleton-item no-animated height=\"160px\"></skeleton-item>\n          <skeleton-item no-animated></skeleton-item>\n          <skeleton-item no-animated width=\"50%\"></skeleton-item>\n          <skeleton-item no-animated width=\"70%\" height=\"10px\"></skeleton-item>\n        </ion-slide>\n      </ion-slides>\n    </div>\n  </ng-container>\n\n  <div class=\"basic\" *ngIf=\"layout\">\n    <ion-slides  [options]=\"slideOpts\" class=\"banner-slide\" pager=\"true\"\n      *ngIf=\"layout.banner && layout.banner.length>0\" (click)=\"handleSlideClick()\" >\n      <ion-slide *ngFor=\"let banner of layout.banner\">\n        <img [src]=\"banner.banner_url\" class=\"banner_img\" />\n      </ion-slide>\n    </ion-slides>\n\n    <ion-list  *ngIf=\"layout.categories && layout.categories.length>0\">\n      <ion-item no-padding no-lines style=\"font-weight: 700\">\n        {{'ALL_CATEGORIES'| translate}}\n        <ion-button slot=\"end\" fill=\"clear\" (click)=\"goTo('categories','')\">\n          {{'VIEW_ALL'| translate}}\n          <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\n        </ion-button>\n      </ion-item>\n    </ion-list>\n      <ion-row class=\"thumnails\">\n        <ion-col size=\"auto\"  *ngFor=\"let x of layout.categories\">\n          <img-loader class=\"img\" width=\"90px\" height=\"90px\"\n            backgroundSize=\"cover\"\n            [src]=\"x.image ? x.image : ''\"\n            (click)=\"goTo('product', x)\">\n          </img-loader>\n          <h5 class=\"categoriesBox\" [innerHTML]=\"x.name\"></h5>\n        </ion-col>\n      </ion-row>\n        \n    <!--Custom Layout-->\n    <div class=\"flipkart\">\n      <ng-container *ngFor=\"let section of layout.section_banners\">\n        <div class=\"one-grid-category\" [style.background]=\"section.background_color\"\n          *ngIf=\"section.layout_type=='1' && (section.bg_img != '' && (section.background_color != '' || section.background_color == '' ))  \"\n          [style.backgroundImage]=\"'url(' + section.bg_img + ')'\"\n          style=\"background-repeat: no-repeat\">\n\n          <div class=\"vewall_area\">\n            <h1 [style.color]=\"section.title_color\">{{section.title}}</h1>\n            <ion-button slot=\"end\" (click)=\"goTo('product', { id: section.layout_main })\"\n              [style.background]=\"section.view_more_bg_color\"\n              [style.color]=\"section.view_more_text_color\" >\n              {{'VIEW_ALL'| translate}}\n            </ion-button>\n          </div>\n          <div class=\"productarea\">\n            <ion-row>\n              <ion-col>\n                <div class=\"productimage\" (click)=\"goTo('product', section.banner[0])\">\n                  <img [src]=\"section.banner[0].banner_url\" />\n                  <p  [ngStyle]=\"{'color':section.banner[0].item_title.color,\n                  'font-weight':section.banner[0].item_title.font_weight,\n                  'font-size':section.banner[0].item_title.font_size,\n                  'font-style':section.banner[0].item_title.style}\"\n                  >\n                    {{section.banner[0].item_title.text}}\n                  </p>\n                  <h3\n                    [ngStyle]=\"{'color':section.banner[0].item_sub_title.color,\n                  'font-weight':section.banner[0].item_sub_title.font_weight,\n                  'font-size':section.banner[0].item_sub_title.font_size,\n                  'font-style':section.banner[0].item_sub_title.style}\"\n                  >\n                    {{section.banner[0].item_sub_title.text}}\n                  </h3>\n                </div>\n              </ion-col>\n            </ion-row>\n          </div>\n        </div>\n\n        <div class=\"one-grid-category\" [style.background]=\"section.background_color\" *ngIf=\"section.layout_type=='1'  && section.bg_img == '' \" >\n          <div class=\"vewall_area\">\n            <h1 [style.color]=\"section.title_color\"> {{section.title}}</h1>\n            <ion-button slot=\"end\" mode=\"md\" clear icon-end (click)=\"goTo('product', { id: section.layout_main })\"\n              [ngStyle]=\"{'background':section.view_more_bg_color,'color':section.view_more_text_color}\">\n            {{'VIEW_ALL'| translate}}\n            </ion-button>\n          </div>\n          <div class=\"productarea\">\n            <ion-row>\n              <ion-col>\n                <div class=\"productimage\" (click)=\"goTo('product', section.banner[0])\">\n                  <img [src]=\"section.banner[0].banner_url\" />\n                  <p [ngStyle]=\"{'color':section.banner[0].item_title.color,\n                  'font-weight':section.banner[0].item_title.font_weight,\n                  'font-size':section.banner[0].item_title.font_size,\n                  'font-style':section.banner[0].item_title.style}\"\n                  >\n                    {{section.banner[0].item_title.text}}\n                  </p>\n                  <h3 [ngStyle]=\"{'color':section.banner[0].item_sub_title.color,\n                  'font-weight':section.banner[0].item_sub_title.font_weight,\n                  'font-size':section.banner[0].item_sub_title.font_size,\n                  'font-style':section.banner[0].item_sub_title.style}\"\n                  >\n                    {{section.banner[0].item_sub_title.text}}\n                  </h3>\n                </div>\n              </ion-col>\n            </ion-row>\n          </div>\n        </div>\n\n        <div class=\"two-grid-category\" [style.background]=\"section.background_color\"\n          *ngIf=\"section.layout_type=='2' && (section.bg_img != '' && (section.background_color != '' || section.background_color == '' )) \"\n          [style.backgroundImage]=\"'url(' + section.bg_img + ')'\" style=\"background-repeat: no-repeat\">\n          <div class=\"vewall_area\">\n            <h1 [style.color]=\"section.title_color\"> {{section.title}}</h1>\n            <ion-button slot=\"end\" fill=\"clear\" (click)=\"goTo('product', { id: section.layout_main })\"\n              [ngStyle]=\"{'background':section.view_more_bg_color,'color':section.view_more_text_color}\">\n            {{'VIEW_ALL'| translate}}\n            </ion-button>\n          </div>\n          <div class=\"productarea\">\n            <ion-row>\n              <ion-col size=\"6\" *ngFor=\"let layout_data of section.banner\">\n                <div class=\"productimage\" (click)=\"goTo('product', layout_data)\" >\n                  <img [src]=\"layout_data.banner_url\" />\n                  <p style=\"text-align: center;\" [ngStyle]=\"{'color':layout_data.item_title.color,\n                  'font-weight':layout_data.item_title.font_weight,\n                  'font-size':layout_data.item_title.font_size,\n                  'font-style':layout_data.item_title.style}\"\n                  >\n                    {{layout_data.item_title.text}}\n                  </p>\n                  <h3 style=\"text-align: center;\"\n                    [ngStyle]=\"{'color':layout_data.item_sub_title.color,\n                  'font-weight':layout_data.item_sub_title.font_weight,\n                  'font-size':layout_data.item_sub_title.font_size,\n                  'font-style':layout_data.item_sub_title.style}\"\n                  >\n                    {{layout_data.item_sub_title.text}}\n                  </h3>\n                </div>\n              </ion-col>\n            </ion-row>\n          </div>\n        </div>\n\n        <div class=\"two-grid-category\" [style.background]=\"section.background_color\" *ngIf=\"section.layout_type=='2' && section.bg_img == '' \"\n        >\n          <div class=\"vewall_area\">\n            <h1 [style.color]=\"section.title_color\"> {{section.title}}</h1>\n            <ion-button slot=\"end\" fill=\"clear\" (click)=\"goTo('product', { id: section.layout_main })\"\n              [ngStyle]=\"{'background':section.view_more_bg_color,'color':section.view_more_text_color}\"\n            >\n            {{'VIEW_ALL'| translate}}\n            </ion-button>\n          </div>\n          <div class=\"productarea\">\n            <ion-row>\n              <ion-col size=\"6\" *ngFor=\"let layout_data of section.banner\">\n                <div  class=\"productimage\" tappable (click)=\"goTo('product', layout_data)\" >\n                  <img [src]=\"layout_data.banner_url\" />\n                  <p style=\"text-align: center;\"\n                    [ngStyle]=\"{'color':layout_data.item_title.color,\n                  'font-weight':layout_data.item_title.font_weight,\n                  'font-size':layout_data.item_title.font_size,\n                  'font-style':layout_data.item_title.style}\"\n                  >\n                    {{layout_data.item_title.text}}\n                  </p>\n                  <h3 style=\"text-align: center;\"\n                    [ngStyle]=\"{'color':layout_data.item_sub_title.color,\n                  'font-weight':layout_data.item_sub_title.font_weight,\n                  'font-size':layout_data.item_sub_title.font_size,\n                  'font-style':layout_data.item_sub_title.style}\"\n                  >\n                    {{layout_data.item_sub_title.text}}\n                  </h3>\n                </div>\n              </ion-col>\n            </ion-row>\n          </div>\n        </div>\n\n        <div class=\"three-grid-category\"\n          [ngStyle]=\"{'background':section.background_color}\"\n          *ngIf=\"section.layout_type=='3'&& (section.bg_img != '' && (section.background_color != '' || section.background_color == '' )) \"\n          [style.backgroundImage]=\"'url(' + section.bg_img + ')'\"\n          style=\"background-repeat: no-repeat\"\n        >\n          <div class=\"vewall_area\">\n            <h1 [ngStyle]=\"{'color':section.title_color}\">  {{section.title}}</h1>\n            <ion-button slot=\"end\" fill=\"clear\" (click)=\"goTo('product', { id: section.layout_main })\"\n              [ngStyle]=\"{'background':section.view_more_bg_color,'color':section.view_more_text_color}\"\n            >\n            {{'VIEW_ALL'| translate}}\n            </ion-button>\n          </div>\n          <div class=\"productarea\">\n            <ion-row>\n              <ion-col size=\"8\">\n                <div\n                  class=\"productimage\"\n                  (click)=\"goTo('product', section.banner[0])\"\n                >\n                  <img [src]=\"section.banner[0].banner_url\" />\n                  <p style=\"text-align: center;\"\n                    [ngStyle]=\"{'color':section.banner[0].item_title.color,\n                  'font-weight':section.banner[0].item_title.font_weight,\n                  'font-size':section.banner[0].item_title.font_size,\n                  'font-style':section.banner[0].item_title.style}\"\n                  >\n                    {{section.banner[0].item_title.text}}\n                  </p>\n                  <h3 style=\"text-align: center;\"\n                    [ngStyle]=\"{'color':section.banner[0].item_sub_title.color,\n                  'font-weight':section.banner[0].item_sub_title.font_weight,\n                  'font-size':section.banner[0].item_sub_title.font_size,\n                  'font-style':section.banner[0].item_sub_title.style}\"\n                  >\n                    {{section.banner[0].item_sub_title.text}}\n                  </h3>\n                </div>\n              </ion-col>\n\n              <ion-col col-4>\n                <div\n                  class=\"productimage\"\n                  tappable\n                  (click)=\"goTo('product', section.banner[1])\"\n                >\n                  <img [src]=\"section.banner[1].banner_url\" />\n                  <p\n                    [ngStyle]=\"{'color':section.banner[1].item_title.color,\n                  'font-weight':section.banner[1].item_title.font_weight,\n                  'font-size':section.banner[1].item_title.font_size,\n                  'font-style':section.banner[1].item_title.style}\"\n                  >\n                    {{section.banner[1].item_title.text}}\n                  </p>\n                  <h3\n                    [ngStyle]=\"{'color':section.banner[1].item_sub_title.color,\n                  'font-weight':section.banner[1].item_sub_title.font_weight,\n                  'font-size':section.banner[1].item_sub_title.font_size,\n                  'font-style':section.banner[1].item_sub_title.style}\"\n                  >\n                    {{section.banner[1].item_sub_title.text}}\n                  </h3>\n                </div>\n                <div\n                  class=\"productimage\"\n                  tappable\n                  (click)=\"goTo('product', section.banner[2])\"\n                >\n                  <img [src]=\"section.banner[2].banner_url\" />\n                  <p\n                    [ngStyle]=\"{'color':section.banner[2].item_title.color,\n                  'font-weight':section.banner[2].item_title.font_weight,\n                  'font-size':section.banner[2].item_title.font_size,\n                  'font-style':section.banner[2].item_title.style}\"\n                  >\n                    {{section.banner[2].item_title.text}}\n                  </p>\n                  <h3\n                    [ngStyle]=\"{'color':section.banner[2].item_sub_title.color,\n                  'font-weight':section.banner[2].item_sub_title.font_weight,\n                  'font-size':section.banner[2].item_sub_title.font_size,\n                  'font-style':section.banner[2].item_sub_title.style}\"\n                  >\n                    {{section.banner[2].item_sub_title.text}}\n                  </h3>\n                </div>\n              </ion-col>\n            </ion-row>\n          </div>\n        </div>\n\n        <div class=\"three-grid-category\" [ngStyle]=\"{'background':section.background_color}\"\n          *ngIf=\"section.layout_type=='3' && section.bg_img == ''\"\n        >\n          <div class=\"vewall_area\">\n            <h1 [ngStyle]=\"{'color':section.title_color}\"> {{section.title}} </h1>\n            <ion-button slot=\"end\" fill=\"clear\" (click)=\"goTo('product', { id: section.layout_main })\"\n              [ngStyle]=\"{'background':section.view_more_bg_color,'color':section.view_more_text_color}\"\n            >\n            {{'VIEW_ALL'| translate}}\n            </ion-button>\n          </div>\n          <div class=\"productarea\">\n            <ion-row>\n              <ion-col size=\"8\">\n                <div\n                  class=\"productimage\"\n                  (click)=\"goTo('product', section.banner[0])\"\n                >\n                  <img [src]=\"section.banner[0].banner_url\" />\n                  <p style=\"text-align: center;\"\n                    [ngStyle]=\"{'color':section.banner[0].item_title.color,\n                  'font-weight':section.banner[0].item_title.font_weight,\n                  'font-size':section.banner[0].item_title.font_size,\n                  'font-style':section.banner[0].item_title.style}\"\n                  >\n                    {{section.banner[0].item_title.text}}\n                  </p>\n                  <h3 style=\"text-align: center;\"\n                    [ngStyle]=\"{'color':section.banner[0].item_sub_title.color,\n                  'font-weight':section.banner[0].item_sub_title.font_weight,\n                  'font-size':section.banner[0].item_sub_title.font_size,\n                  'font-style':section.banner[0].item_sub_title.style}\"\n                  >\n                    {{section.banner[0].item_sub_title.text}}\n                  </h3>\n                </div>\n              </ion-col>\n\n              <ion-col col-4>\n                <div\n                  class=\"productimage\"\n                  tappable\n                  (click)=\"goTo('product', section.banner[1])\"\n                >\n                  <img [src]=\"section.banner[1].banner_url\" />\n                  <p\n                    [ngStyle]=\"{'color':section.banner[1].item_title.color,\n                  'font-weight':section.banner[1].item_title.font_weight,\n                  'font-size':section.banner[1].item_title.font_size,\n                  'font-style':section.banner[1].item_title.style}\"\n                  >\n                    {{section.banner[1].item_title.text}}\n                  </p>\n                  <h3\n                    [ngStyle]=\"{'color':section.banner[1].item_sub_title.color,\n                  'font-weight':section.banner[1].item_sub_title.font_weight,\n                  'font-size':section.banner[1].item_sub_title.font_size,\n                  'font-style':section.banner[1].item_sub_title.style}\"\n                  >\n                    {{section.banner[1].item_sub_title.text}}\n                  </h3>\n                </div>\n                <div\n                  class=\"productimage\"\n                  tappable\n                  (click)=\"goTo('product', section.banner[2])\"\n                >\n                  <img [src]=\"section.banner[2].banner_url\" />\n                  <p\n                    [ngStyle]=\"{'color':section.banner[2].item_title.color,\n                  'font-weight':section.banner[2].item_title.font_weight,\n                  'font-size':section.banner[2].item_title.font_size,\n                  'font-style':section.banner[2].item_title.style}\"\n                  >\n                    {{section.banner[2].item_title.text}}\n                  </p>\n                  <h3\n                    [ngStyle]=\"{'color':section.banner[2].item_sub_title.color,\n                  'font-weight':section.banner[2].item_sub_title.font_weight,\n                  'font-size':section.banner[2].item_sub_title.font_size,\n                  'font-style':section.banner[2].item_sub_title.style}\"\n                  >\n                    {{section.banner[2].item_sub_title.text}}\n                  </h3>\n                </div>\n              </ion-col>\n            </ion-row>\n          </div>\n        </div>\n\n        <div *ngIf=\"section.layout_type=='4' && (section.bg_img != '' && (section.background_color != '' || section.background_color == '' )) \"\n          class=\"four-grid-category\"\n          [style.backgroundImage]=\"'url(' + section.bg_img + ')'\"\n          style=\"background-repeat: no-repeat\"\n        >\n          <div class=\"vewall_area\">\n            <h1 [ngStyle]=\"{'color':section.title_color}\"> {{section.title}}</h1>\n            <ion-button slot=\"end\" fill=\"clear\" (click)=\"goTo('product', { id: section.layout_main })\"\n              [ngStyle]=\"{'background':section.view_more_bg_color,'color':section.view_more_text_color}\"\n            >\n            {{'VIEW_ALL'| translate}}\n            </ion-button>\n          </div>\n          <div class=\"productarea\">\n            <ion-row>\n              <ion-col size=\"6\" *ngFor=\"let layout_data of section.banner\">\n                <div class=\"productimage\"\n                  (click)=\"goTo('product', layout_data)\"\n                >\n                  <img [src]=\"layout_data.banner_url\" />\n                  <p style=\"text-align: center;\"\n                    [ngStyle]=\"{'color':layout_data.item_title.color,'font-weight':layout_data.item_title.font_weight,'font-size':layout_data.item_title.font_size,'font-style':layout_data.item_title.style}\"\n                  >\n                    {{layout_data.item_title.text}}\n                  </p>\n                  <h3 style=\"text-align: center;\"\n                    [ngStyle]=\"{'color':layout_data.item_sub_title.color,'font-weight':layout_data.item_sub_title.font_weight,'font-size':layout_data.item_sub_title.font_size,'font-style':layout_data.item_sub_title.style}\"\n                  >\n                    {{layout_data.item_sub_title.text}}\n                  </h3>\n                </div>\n              </ion-col>\n            </ion-row>\n          </div>\n        </div>\n\n        <div class=\"four-grid-category\"\n          [style.background]=\"section.background_color\"\n          *ngIf=\"section.layout_type=='4' && section.bg_img == ''\" >\n          <div class=\"vewall_area\">\n            <h1 [ngStyle]=\"{'color':section.title_color}\">{{section.title}}</h1>\n            <ion-button slot=\"end\" fill=\"clear\" (click)=\"goTo('product', { id: section.layout_main })\"\n              [ngStyle]=\"{'background':section.view_more_bg_color,'color':section.view_more_text_color}\">\n            {{'VIEW_ALL'| translate}}\n            </ion-button>\n          </div>\n          <div class=\"productarea\">\n            <ion-row>\n              <ion-col size=\"6\" *ngFor=\"let layout_data of section.banner\">\n                <div class=\"productimage\" (click)=\"goTo('product', layout_data)\">\n                  <img [src]=\"layout_data.banner_url\" />\n                  <p style=\"text-align: center;\"\n                    [ngStyle]=\"{'color':layout_data.item_title.color,'font-weight':layout_data.item_title.font_weight,'font-size':layout_data.item_title.font_size,'font-style':layout_data.item_title.style}\"\n                  >\n                    {{layout_data.item_title.text}}\n                  </p>\n                  <h3 style=\"text-align: center;\"\n                    [ngStyle]=\"{'color':layout_data.item_sub_title.color,'font-weight':layout_data.item_sub_title.font_weight,'font-size':layout_data.item_sub_title.font_size,'font-style':layout_data.item_sub_title.style}\"\n                  >\n                    {{layout_data.item_sub_title.text}}\n                  </h3>\n                </div>\n              </ion-col>\n            </ion-row>\n          </div>\n        </div>\n      </ng-container>\n    </div>\n\n    <div class=\"product-slider\" *ngIf=\"layout.featured_products && layout.featured_products.length>0\">\n      <ion-item lines=\"none\" >\n        {{'FEATURED' | translate}}\n        <ion-button slot=\"end\" fill=\"clear\" (click)=\"goTo('product',{featured:true})\" >\n          See More\n          <ion-icon name=\"arrow-forward\"></ion-icon>\n        </ion-button>\n      </ion-item>\n      <ion-row class=\"thumnails\" >\n        <ion-col size=\"4\" *ngFor=\"let product of layout.featured_products\">\n          <div class=\"product-item\">\n            <ion-button class=\"fav\" (click)=\"setFav(product)\" fill=\"clear\" slot=\"icon-only\">\n              <ion-icon name=\"heart{{!wishlist.isFav(product) ? '-outline' : ''}}\"></ion-icon>\n            </ion-button>\n            <div (click)=\"goTo('productdetail', product)\">\n              <img-loader [src]=\"product.images[0].src\" useImg>\n                <ion-badge *ngIf=\"product.on_sale\">{{product | discount}}</ion-badge>\n              </img-loader>\n              <h5 [innerHTML]=\"product.name\" class=\"product-name\"></h5>\n              <div class=\"price\">\n                <span [innerHTML]=\"product.price_html\"></span>\n              </div>\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <div class=\"product-slider\"  *ngIf=\"layout.top_seller && layout.top_seller.length>0\">\n      <ion-item lines=\"none\">\n        {{'TOP_SELLERS'| translate}}\n        <ion-button slot=\"end\" fill=\"clear\" (click)=\"goTo('product',{sortby:'popularity'})\" >\n          See More\n          <ion-icon name=\"arrow-forward\"></ion-icon>\n        </ion-button>\n      </ion-item>\n      <ion-row class=\"thumnails\" >\n        <ion-col size=\"4\" *ngFor=\"let product of layout.top_seller\">\n          <div class=\"product-item\">\n            <ion-button class=\"fav\" (click)=\"setFav(product)\" fill=\"clear\" slot=\"icon-only\">\n              <ion-icon name=\"heart{{!wishlist.isFav(product) ? '-outline' : ''}}\"></ion-icon>\n            </ion-button>\n            <div (click)=\"goTo('productdetail', product)\">\n              <img-loader [src]=\"product.images[0].src\" useImg>\n                <ion-badge *ngIf=\"product.on_sale\">{{product | discount}}</ion-badge>\n              </img-loader>\n              <h5 [innerHTML]=\"product.name\" class=\"product-name\"></h5>\n              <div class=\"price\">\n                <span [innerHTML]=\"product.price_html\"></span>\n              </div>\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <div class=\"product-slider\" *ngIf=\"layout.sale_products && layout.sale_products.length>0\">\n      <ion-item lines=\"none\">\n        {{\"TRENDING_OFFERS\"| translate}}\n        <ion-button slot=\"end\" fill=\"clear\" (click)=\"goTo('product',{on_sale:true})\">\n          See More\n          <ion-icon name=\"arrow-forward\"></ion-icon>\n        </ion-button>\n      </ion-item>\n      <ion-row class=\"thumnails\" >\n        <ion-col size=\"4\" *ngFor=\"let product of layout.sale_products\">\n          <div class=\"product-item\">\n            <ion-button class=\"fav\" (click)=\"setFav(product)\" fill=\"clear\" slot=\"icon-only\" >\n              <ion-icon name=\"heart{{!wishlist.isFav(product) ? '-outline' : ''}}\"\n              ></ion-icon>\n            </ion-button>\n            <div (click)=\"goTo('productdetail', product)\">\n              <img-loader [src]=\"product.images[0].src\" useImg>\n                <ion-badge *ngIf=\"product.on_sale\">{{product | discount}}</ion-badge></img-loader>\n              <h5 [innerHTML]=\"product.name\" class=\"product-name\"></h5>\n              <div class=\"price\">\n                <span [innerHTML]=\"product.price_html\"></span>\n              </div>\n              \n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n\n      <div class=\"product-slider\" *ngIf=\"layout.top_rated_products && layout.top_rated_products.length>0\">\n      <ion-item lines=\"none\">\n        {{\"TOP_RATED\" | translate}}\n        <ion-button slot=\"end\" fill=\"clear\"  (click)=\"goTo('product',{sortby:'rating'})\">\n          See More\n          <ion-icon name=\"arrow-forward\"></ion-icon>\n        </ion-button>\n      </ion-item>\n      <ion-row class=\"thumnails\" >\n        <ion-col size=\"4\" *ngFor=\"let product of layout.top_rated_products\">\n          <div class=\"product-item\">\n            <ion-button class=\"fav\" (click)=\"setFav(product)\" fill=\"clear\" slot=\"icon-only\">\n              <ion-icon name=\"heart{{!wishlist.isFav(product) ? '-outline' : ''}}\"></ion-icon>\n            </ion-button>\n            <div  (click)=\"goTo('productdetail', product)\">\n              <img-loader [src]=\"product.images[0].src\" useImg>\n                <ion-badge *ngIf=\"product.on_sale\">{{product | discount}}</ion-badge>\n              </img-loader>\n              <h5 [innerHTML]=\"product.name\" class=\"product-name\"></h5>\n              <div class=\"price\">\n                <span [innerHTML]=\"product.price_html\"></span>\n              </div>\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "wljF":
/*!************************************************************************!*\
  !*** ./node_modules/@ionic-native/onesignal/__ivy_ngcc__/ngx/index.js ***!
  \************************************************************************/
/*! exports provided: OSLockScreenVisibility, OSDisplayType, OSActionType, OneSignal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OSLockScreenVisibility", function() { return OSLockScreenVisibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OSDisplayType", function() { return OSDisplayType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OSActionType", function() { return OSActionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneSignal", function() { return OneSignal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "C6fG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");




/**
 * **ANDROID** - Privacy setting for how the notification should be shown on the lockscreen of Android 5+ devices.
 */

var OSLockScreenVisibility;
(function (OSLockScreenVisibility) {
    /**
     * Fully visible (default)
     */
    OSLockScreenVisibility[OSLockScreenVisibility["Public"] = 1] = "Public";
    /**
     * Contents are hidden
     */
    OSLockScreenVisibility[OSLockScreenVisibility["Private"] = 0] = "Private";
    /**
     * Not shown
     */
    OSLockScreenVisibility[OSLockScreenVisibility["Secret"] = -1] = "Secret";
})(OSLockScreenVisibility || (OSLockScreenVisibility = {}));
/**
 * How the notification was displayed to the user. Part of OSNotification. See inFocusDisplaying for more information on how this is used.
 */
var OSDisplayType;
(function (OSDisplayType) {
    /**
     * notification is silent, or inFocusDisplaying is disabled.
     */
    OSDisplayType[OSDisplayType["None"] = 0] = "None";
    /**
     * (**DEFAULT**) - native alert dialog display.
     */
    OSDisplayType[OSDisplayType["InAppAlert"] = 1] = "InAppAlert";
    /**
     * native notification display.
     */
    OSDisplayType[OSDisplayType["Notification"] = 2] = "Notification";
})(OSDisplayType || (OSDisplayType = {}));
var OSActionType;
(function (OSActionType) {
    OSActionType[OSActionType["Opened"] = 0] = "Opened";
    OSActionType[OSActionType["ActionTake"] = 1] = "ActionTake";
})(OSActionType || (OSActionType = {}));
var OneSignal = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(OneSignal, _super);
    function OneSignal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * constants to use in inFocusDisplaying()
         * @hidden
         */
        _this.OSInFocusDisplayOption = {
            None: 0,
            InAppAlert: 1,
            Notification: 2,
        };
        return _this;
    }
    OneSignal.prototype.startInit = function (appId, googleProjectNumber) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "startInit", { "sync": true }, arguments); };
    OneSignal.prototype.handleNotificationReceived = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "handleNotificationReceived", { "observable": true }, arguments); };
    OneSignal.prototype.handleNotificationOpened = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "handleNotificationOpened", { "observable": true }, arguments); };
    OneSignal.prototype.handleInAppMessageClicked = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "handleInAppMessageClicked", { "observable": true }, arguments); };
    OneSignal.prototype.iOSSettings = function (settings) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "iOSSettings", { "sync": true, "platforms": ["iOS"] }, arguments); };
    OneSignal.prototype.endInit = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "endInit", { "sync": true }, arguments); };
    OneSignal.prototype.promptForPushNotificationsWithUserResponse = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "promptForPushNotificationsWithUserResponse", { "platforms": ["iOS"] }, arguments); };
    OneSignal.prototype.getTags = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getTags", {}, arguments); };
    OneSignal.prototype.getIds = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getIds", {}, arguments); };
    OneSignal.prototype.sendTag = function (key, value) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "sendTag", { "sync": true }, arguments); };
    OneSignal.prototype.sendTags = function (json) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "sendTags", { "sync": true }, arguments); };
    OneSignal.prototype.deleteTag = function (key) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "deleteTag", { "sync": true }, arguments); };
    OneSignal.prototype.deleteTags = function (keys) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "deleteTags", { "sync": true }, arguments); };
    OneSignal.prototype.registerForPushNotifications = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "registerForPushNotifications", { "sync": true }, arguments); };
    OneSignal.prototype.enableVibrate = function (enable) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "enableVibrate", { "sync": true }, arguments); };
    OneSignal.prototype.enableSound = function (enable) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "enableSound", { "sync": true }, arguments); };
    OneSignal.prototype.inFocusDisplaying = function (displayOption) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "inFocusDisplaying", { "sync": true }, arguments); };
    OneSignal.prototype.setSubscription = function (enable) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setSubscription", { "sync": true }, arguments); };
    OneSignal.prototype.getPermissionSubscriptionState = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getPermissionSubscriptionState", {}, arguments); };
    OneSignal.prototype.postNotification = function (notificationObj) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "postNotification", {}, arguments); };
    OneSignal.prototype.cancelNotification = function (notificationId) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "cancelNotification", { "sync": true }, arguments); };
    OneSignal.prototype.promptLocation = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "promptLocation", { "sync": true }, arguments); };
    OneSignal.prototype.syncHashedEmail = function (email) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "syncHashedEmail", { "sync": true }, arguments); };
    OneSignal.prototype.setLogLevel = function (logLevel) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setLogLevel", { "sync": true }, arguments); };
    OneSignal.prototype.setLocationShared = function (shared) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setLocationShared", { "sync": true }, arguments); };
    OneSignal.prototype.addPermissionObserver = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "addPermissionObserver", { "observable": true }, arguments); };
    OneSignal.prototype.addSubscriptionObserver = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "addSubscriptionObserver", { "observable": true }, arguments); };
    OneSignal.prototype.setEmail = function (email, emailAuthToken) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setEmail", {}, arguments); };
    OneSignal.prototype.logoutEmail = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "logoutEmail", {}, arguments); };
    OneSignal.prototype.addEmailSubscriptionObserver = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "addEmailSubscriptionObserver", { "observable": true }, arguments); };
    OneSignal.prototype.clearOneSignalNotifications = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "clearOneSignalNotifications", { "sync": true }, arguments); };
    OneSignal.prototype.setRequiresUserPrivacyConsent = function (required) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setRequiresUserPrivacyConsent", {}, arguments); };
    OneSignal.prototype.provideUserConsent = function (granted) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "provideUserConsent", {}, arguments); };
    OneSignal.prototype.userProvidedPrivacyConsent = function (callback) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "userProvidedPrivacyConsent", {}, arguments); };
    OneSignal.prototype.setExternalUserId = function (externalId) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setExternalUserId", {}, arguments); };
    OneSignal.prototype.removeExternalUserId = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "removeExternalUserId", {}, arguments); };
    OneSignal.prototype.addTrigger = function (key, value) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "addTrigger", { "sync": true }, arguments); };
    OneSignal.prototype.addTriggers = function (triggers) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "addTriggers", { "sync": true }, arguments); };
    OneSignal.prototype.removeTriggerForKey = function (key) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "removeTriggerForKey", { "sync": true }, arguments); };
    OneSignal.prototype.removeTriggersForKeys = function (keys) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "removeTriggersForKeys", { "sync": true }, arguments); };
    OneSignal.prototype.getTriggerValueForKey = function (key) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getTriggerValueForKey", {}, arguments); };
    OneSignal.prototype.pauseInAppMessages = function (pause) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "pauseInAppMessages", { "sync": true }, arguments); };
    OneSignal.pluginName = "OneSignal";
    OneSignal.plugin = "onesignal-cordova-plugin";
    OneSignal.pluginRef = "plugins.OneSignal";
    OneSignal.repo = "https://github.com/OneSignal/OneSignal-Cordova-SDK";
    OneSignal.platforms = ["Amazon Fire OS", "Android", "iOS", "Windows"];
OneSignal.ɵfac = function OneSignal_Factory(t) { return ɵOneSignal_BaseFactory(t || OneSignal); };
OneSignal.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OneSignal, factory: function (t) { return OneSignal.ɵfac(t); } });
var ɵOneSignal_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](OneSignal);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OneSignal, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();
    return OneSignal;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvb25lc2lnbmFsL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUEwRmxDO0FBQ0E7QUFDQSxHQUFHOztBQUNILE1BQU0sQ0FBTixJQUFZLHNCQWFYO0FBYkQsV0FBWSxzQkFBc0I7QUFDakMsSUFBQztBQUNGO0FBQ0UsT0FBRztBQUNMLElBQUUsdUVBQVUsQ0FBQTtBQUFDLElBQ1g7QUFDRjtBQUNFLE9BQUc7QUFDTCxJQUFFLHlFQUFXLENBQUE7QUFBQyxJQUNaO0FBQ0Y7QUFDRSxPQUFHO0FBQ0wsSUFBRSx3RUFBVyxDQUFBO0FBQ2IsQ0FBQyxFQWJXLHNCQUFzQixLQUF0QixzQkFBc0IsUUFhakM7QUFFRDtBQUNBO0FBQ0EsR0FBRztBQUNILE1BQU0sQ0FBTixJQUFZLGFBYVg7QUFiRCxXQUFZLGFBQWE7QUFDeEIsSUFBQztBQUNGO0FBQ0UsT0FBRztBQUNMLElBQUUsaURBQVEsQ0FBQTtBQUFDLElBQ1Q7QUFDRjtBQUNFLE9BQUc7QUFDTCxJQUFFLDZEQUFjLENBQUE7QUFBQyxJQUNmO0FBQ0Y7QUFDRSxPQUFHO0FBQ0wsSUFBRSxpRUFBZ0IsQ0FBQTtBQUNsQixDQUFDLEVBYlcsYUFBYSxLQUFiLGFBQWEsUUFheEI7QUE4S0QsTUFBTSxDQUFOLElBQVksWUFHWDtBQUhELFdBQVksWUFBWTtBQUN2QixJQUFDLG1EQUFVLENBQUE7QUFBQyxJQUNYLDJEQUFjLENBQUE7QUFDaEIsQ0FBQyxFQUhXLFlBQVksS0FBWixZQUFZLFFBR3ZCO0FBQ0Q7QUFFOEMsSUFzSWYsNkJBQWlCO0FBQUM7QUFFOUI7QUFJZixRQUxGO0FBQ0Y7QUFDTTtBQUVBLFdBREQ7QUFDTCxRQUFFLDRCQUFzQixHQUFHO0FBQzNCLFlBQUksSUFBSSxFQUFFLENBQUM7QUFDWCxZQUFJLFVBQVUsRUFBRSxDQUFDO0FBQ2pCLFlBQUksWUFBWSxFQUFFLENBQUM7QUFDbkIsU0FBRyxDQUFDO0FBQ0o7QUFFZTtBQUFNLElBT25CLDZCQUFTLGFBQUMsS0FBYSxFQUFFLG1CQUE0QjtBQUtoQixJQU9yQyw4Q0FBMEI7QUFLdUIsSUFTakQsNENBQXdCO0FBS1csSUFPbkMsNkNBQXlCO0FBT3pCLElBWUEsK0JBQVcsYUFBQyxRQUFzRjtBQUtyQyxJQUs3RCwyQkFBTztBQUt3QyxJQU0vQyw4REFBMEM7QUFLbUMsSUFPN0UsMkJBQU87QUFLaUIsSUFVeEIsMEJBQU07QUFFTixJQVVBLDJCQUFPLGFBQUMsR0FBVyxFQUFFLEtBQWE7QUFHZSxJQU1qRCw0QkFBUSxhQUFDLElBQVM7QUFHZ0MsSUFLbEQsNkJBQVMsYUFBQyxHQUFXO0FBRzhCLElBS25ELDhCQUFVLGFBQUMsSUFBYztBQUcyQixJQUlwRCxnREFBNEI7QUFJd0MsSUFRcEUsaUNBQWEsYUFBQyxNQUFlO0FBSVksSUFRekMsK0JBQVcsYUFBQyxNQUFlO0FBSXFCLElBTWhELHFDQUFpQixhQUFDLGFBQTRCO0FBS0QsSUFNN0MsbUNBQWUsYUFBQyxNQUFlO0FBRzBCLElBS3pELGtEQUE4QjtBQU1kLElBSWhCLG9DQUFnQixhQUFDLGVBQStCO0FBSzNCLElBSXJCLHNDQUFrQixhQUFDLGNBQXNCO0FBR21CLElBRzVELGtDQUFjO0FBT1gsSUFBSCxtQ0FBZSxhQUFDLEtBQWE7QUFHNEIsSUFRekQsK0JBQVcsYUFBQyxRQUFtRDtBQUdWLElBSXJELHFDQUFpQixhQUFDLE1BQWU7QUFHMEIsSUFVM0QseUNBQXFCO0FBS2tDLElBV3ZELDJDQUF1QjtBQVF6QixJQUFFLDRCQUFRLGFBQUMsS0FBYSxFQUFFLGNBQXVCO0FBS2xDLElBR2IsK0JBQVc7QUFLaUIsSUFXNUIsZ0RBQTRCO0FBT1osSUFDaEIsK0NBQTJCO0FBR3NELElBS2pGLGlEQUE2QixhQUFDLFFBQWlCO0FBR1UsSUFLekQsc0NBQWtCLGFBQUMsT0FBZ0I7QUFHVyxJQUk5Qyw4Q0FBMEIsYUFBQyxRQUFrQjtBQUdTLElBS3RELHFDQUFpQixhQUFDLFVBQWtCO0FBR1MsSUFHN0Msd0NBQW9CO0FBR3dDLElBUTVELDhCQUFVLGFBQUMsR0FBVyxFQUFFLEtBQStCO0FBR0gsSUFPcEQsK0JBQVcsYUFBQyxRQUFnQjtBQUd5QixJQU9yRCx1Q0FBbUIsYUFBQyxHQUFXO0FBRzhCLElBTzdELHlDQUFxQixhQUFDLElBQWM7QUFLaEMsSUFJSix5Q0FBcUIsYUFBQyxHQUFXO0FBSzVCLElBUUwsc0NBQWtCLGFBQUMsS0FBYztBQUVnQztBQUF3QztBQUFtRDtBQUErQztBQUEyRTs2Q0EzYnZSLFVBQVU7Ozs7OzBCQUNMO0FBQUMsb0JBeGJQO0FBQUUsRUF3YjZCLGlCQUFpQjtBQUMvQyxTQURZLFNBQVM7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE9TTm90aWZpY2F0aW9uIHtcbiAgLyoqXG4gICAqIFdhcyBhcHAgaW4gZm9jdXMuXG4gICAqL1xuICBpc0FwcEluRm9jdXM/OiBib29sZWFuO1xuICAvKipcbiAgICogV2FzIG5vdGlmaWNhdGlvbiBzaG93biB0byB0aGUgdXNlci4gV2lsbCBiZSBmYWxzZSBmb3Igc2lsZW50IG5vdGlmaWNhdGlvbnMuXG4gICAqL1xuICBzaG93bj86IGJvb2xlYW47XG4gIC8qKlxuICAgKiAqKkFORFJPSUQqKiAtIEFuZHJvaWQgTm90aWZpY2F0aW9uIGFzc2lnbmVkIHRvIHRoZSBub3RpZmljYXRpb24uIENhbiBiZSB1c2VkIHRvIGNhbmNlbCBvciByZXBsYWNlIHRoZSBub3RpZmljYXRpb24uXG4gICAqL1xuICBhbmRyb2lkTm90aWZpY2F0aW9uSWQ/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBQYXlsb2FkIHJlY2VpdmVkIGZyb20gT25lU2lnbmFsLlxuICAgKi9cbiAgcGF5bG9hZD86IE9TTm90aWZpY2F0aW9uUGF5bG9hZDtcbiAgLyoqXG4gICAqIEhvdyB0aGUgbm90aWZpY2F0aW9uIHdhcyBkaXNwbGF5ZWQgdG8gdGhlIHVzZXIuIENhbiBiZSBzZXQgdG8gYE5vdGlmaWNhdGlvbmAsIGBJbkFwcEFsZXJ0YCwgb3IgYE5vbmVgIGlmIGl0IHdhcyBub3QgZGlzcGxheWVkLlxuICAgKi9cbiAgZGlzcGxheVR5cGU/OiBPU0Rpc3BsYXlUeXBlO1xuICAvKipcbiAgICogKipBTkRST0lEKiogLSBOb3RpZmljYXRpb24gaXMgYSBzdW1tYXJ5IG5vdGlmaWNhdGlvbiBmb3IgYSBncm91cCB0aGlzIHdpbGwgY29udGFpbiBhbGwgbm90aWZpY2F0aW9uIHBheWxvYWRzIGl0IHdhcyBjcmVhdGVkIGZyb20uXG4gICAqL1xuICBncm91cGVkTm90aWZpY2F0aW9ucz86IE9TTm90aWZpY2F0aW9uUGF5bG9hZFtdO1xuICBhcHBfaWQ/OiBzdHJpbmc7XG4gIGNvbnRlbnRzPzogYW55O1xuICBoZWFkaW5ncz86IGFueTtcbiAgaXNJb3M/OiBib29sZWFuO1xuICBpc0FuZHJvaWQ/OiBib29sZWFuO1xuICBpc1dQPzogYm9vbGVhbjtcbiAgaXNXUF9XTlM/OiBib29sZWFuO1xuICBpc0FkbT86IGJvb2xlYW47XG4gIGlzQ2hyb21lPzogYm9vbGVhbjtcbiAgaXNDaHJvbWVXZWI/OiBib29sZWFuO1xuICBpc1NhZmFyaT86IGJvb2xlYW47XG4gIGlzQW55V2ViPzogYm9vbGVhbjtcbiAgaW5jbHVkZWRfc2VnbWVudHM/OiBzdHJpbmdbXTtcbiAgZXhjbHVkZWRfc2VnbWVudHM/OiBzdHJpbmdbXTtcbiAgaW5jbHVkZV9wbGF5ZXJfaWRzPzogc3RyaW5nW107XG4gIGluY2x1ZGVfaW9zX3Rva2Vucz86IHN0cmluZ1tdO1xuICBpbmNsdWRlX2FuZHJvaWRfcmVnX2lkcz86IHN0cmluZ1tdO1xuICBpbmNsdWRlX3dwX3VyaXM/OiBzdHJpbmdbXTtcbiAgaW5jbHVkZV93cF93bnNfdXJpcz86IHN0cmluZ1tdO1xuICBpbmNsdWRlX2FtYXpvbl9yZWdfaWRzPzogc3RyaW5nW107XG4gIGluY2x1ZGVfY2hyb21lX3JlZ19pZHM/OiBzdHJpbmdbXTtcbiAgaW5jbHVkZV9jaHJvbWVfd2ViX3JlZ19pZHM/OiBzdHJpbmdbXTtcbiAgYXBwX2lkcz86IHN0cmluZ1tdO1xuICB0YWdzPzogYW55W107XG4gIGlvc19iYWRnZVR5cGU/OiBzdHJpbmc7XG4gIGlvc19iYWRnZUNvdW50PzogbnVtYmVyO1xuICBpb3Nfc291bmQ/OiBzdHJpbmc7XG4gIGFuZHJvaWRfc291bmQ/OiBzdHJpbmc7XG4gIGFkbV9zb3VuZD86IHN0cmluZztcbiAgd3Bfc291bmQ/OiBzdHJpbmc7XG4gIHdwX3duc19zb3VuZD86IHN0cmluZztcbiAgZGF0YT86IGFueTtcbiAgYnV0dG9ucz86IGFueTtcbiAgY29sbGFwc2VfaWQ/OiBzdHJpbmc7XG4gIHNtYWxsX2ljb24/OiBzdHJpbmc7XG4gIGxhcmdlX2ljb24/OiBzdHJpbmc7XG4gIGJpZ19waWN0dXJlPzogc3RyaW5nO1xuICBhZG1fc21hbGxfaWNvbj86IHN0cmluZztcbiAgYWRtX2xhcmdlX2ljb24/OiBzdHJpbmc7XG4gIGFkbV9iaWdfcGljdHVyZT86IHN0cmluZztcbiAgY2hyb21lX2ljb24/OiBzdHJpbmc7XG4gIGNocm9tZV9iaWdfcGljdHVyZT86IHN0cmluZztcbiAgY2hyb21lX3dlYl9pY29uPzogc3RyaW5nO1xuICBmaXJlZm94X2ljb24/OiBzdHJpbmc7XG4gIHVybD86IHN0cmluZztcbiAgc2VuZF9hZnRlcj86IHN0cmluZztcbiAgZGVsYXllZF9vcHRpb24/OiBzdHJpbmc7XG4gIGRlbGl2ZXJ5X3RpbWVfb2ZfZGF5Pzogc3RyaW5nO1xuICBhbmRyb2lkX2xlZF9jb2xvcj86IHN0cmluZztcbiAgYW5kcm9pZF9hY2NlbnRfY29sb3I/OiBzdHJpbmc7XG4gIGFuZHJvaWRfdmlzaWJpbGl0eT86IG51bWJlcjtcbiAgY29udGVudF9hdmFpbGFibGU/OiBib29sZWFuO1xuICBhbWF6b25fYmFja2dyb3VuZF9kYXRhPzogYm9vbGVhbjtcbiAgdGVtcGxhdGVfaWQ/OiBzdHJpbmc7XG4gIGFuZHJvaWRfZ3JvdXA/OiBzdHJpbmc7XG4gIGFuZHJvaWRfZ3JvdXBfbWVzc2FnZT86IGFueTtcbiAgYWRtX2dyb3VwPzogc3RyaW5nO1xuICBhZG1fZ3JvdXBfbWVzc2FnZT86IGFueTtcbiAgdHRsPzogbnVtYmVyO1xuICBwcmlvcml0eT86IG51bWJlcjtcbiAgaW9zX2NhdGVnb3J5Pzogc3RyaW5nO1xufVxuXG4vKipcbiAqICoqQU5EUk9JRCoqIC0gUHJpdmFjeSBzZXR0aW5nIGZvciBob3cgdGhlIG5vdGlmaWNhdGlvbiBzaG91bGQgYmUgc2hvd24gb24gdGhlIGxvY2tzY3JlZW4gb2YgQW5kcm9pZCA1KyBkZXZpY2VzLlxuICovXG5leHBvcnQgZW51bSBPU0xvY2tTY3JlZW5WaXNpYmlsaXR5IHtcbiAgLyoqXG4gICAqIEZ1bGx5IHZpc2libGUgKGRlZmF1bHQpXG4gICAqL1xuICBQdWJsaWMgPSAxLFxuICAvKipcbiAgICogQ29udGVudHMgYXJlIGhpZGRlblxuICAgKi9cbiAgUHJpdmF0ZSA9IDAsXG4gIC8qKlxuICAgKiBOb3Qgc2hvd25cbiAgICovXG4gIFNlY3JldCA9IC0xLFxufVxuXG4vKipcbiAqIEhvdyB0aGUgbm90aWZpY2F0aW9uIHdhcyBkaXNwbGF5ZWQgdG8gdGhlIHVzZXIuIFBhcnQgb2YgT1NOb3RpZmljYXRpb24uIFNlZSBpbkZvY3VzRGlzcGxheWluZyBmb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiBob3cgdGhpcyBpcyB1c2VkLlxuICovXG5leHBvcnQgZW51bSBPU0Rpc3BsYXlUeXBlIHtcbiAgLyoqXG4gICAqIG5vdGlmaWNhdGlvbiBpcyBzaWxlbnQsIG9yIGluRm9jdXNEaXNwbGF5aW5nIGlzIGRpc2FibGVkLlxuICAgKi9cbiAgTm9uZSA9IDAsXG4gIC8qKlxuICAgKiAoKipERUZBVUxUKiopIC0gbmF0aXZlIGFsZXJ0IGRpYWxvZyBkaXNwbGF5LlxuICAgKi9cbiAgSW5BcHBBbGVydCA9IDEsXG4gIC8qKlxuICAgKiBuYXRpdmUgbm90aWZpY2F0aW9uIGRpc3BsYXkuXG4gICAqL1xuICBOb3RpZmljYXRpb24gPSAyLFxufVxuXG4vKipcbiAqIENvbnRlbnRzIGFuZCBzZXR0aW5ncyBvZiB0aGUgbm90aWZpY2F0aW9uIHRoZSB1c2VyIHJlY2VpdmVkLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIE9TTm90aWZpY2F0aW9uUGF5bG9hZCB7XG4gIC8qKlxuICAgKiBPbmVTaWduYWwgbm90aWZpY2F0aW9uIFVVSUQuXG4gICAqL1xuICBub3RpZmljYXRpb25JRDogc3RyaW5nO1xuICAvKipcbiAgICogVGl0bGUgb2YgdGhlIG5vdGlmaWNhdGlvbi5cbiAgICovXG4gIHRpdGxlOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBCb2R5IG9mIHRoZSBub3RpZmljYXRpb24uXG4gICAqL1xuICBib2R5OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBDdXN0b20gYWRkaXRpb25hbCBkYXRhIHRoYXQgd2FzIHNlbnQgd2l0aCB0aGUgbm90aWZpY2F0aW9uLiBTZXQgb24gdGhlIGRhc2hib2FyZCB1bmRlciBPcHRpb25zID4gQWRkaXRpb25hbCBEYXRhXG4gICAqIG9yIHdpdGggdGhlICdkYXRhJyBmaWVsZCBvbiB0aGUgUkVTVCBBUEkuXG4gICAqL1xuICBhZGRpdGlvbmFsRGF0YT86IGFueTtcbiAgLyoqXG4gICAqICoqQU5EUk9JRCoqIC0gU21hbGwgaWNvbiByZXNvdXJjZSBuYW1lIHNldCBvbiB0aGUgbm90aWZpY2F0aW9uLlxuICAgKi9cbiAgc21hbGxJY29uPzogc3RyaW5nO1xuICAvKipcbiAgICogKipBTkRST0lEKiogLSBMYXJnZSBpY29uIHNldCBvbiB0aGUgbm90aWZpY2F0aW9uLlxuICAgKi9cbiAgbGFyZ2VJY29uPzogc3RyaW5nO1xuICAvKipcbiAgICogKipBTkRST0lEKiogLSBCaWcgcGljdHVyZSBpbWFnZSBzZXQgb24gdGhlIG5vdGlmaWNhdGlvbi5cbiAgICovXG4gIGJpZ1BpY3R1cmU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiAqKkFORFJPSUQqKiAtIEFjY2VudCBjb2xvciBzaG93biBhcm91bmQgc21hbGwgbm90aWZpY2F0aW9uIGljb24gb24gQW5kcm9pZCA1KyBkZXZpY2VzLiBBUkdCIGZvcm1hdC5cbiAgICovXG4gIHNtYWxsSWNvbkFjY2VudENvbG9yPzogc3RyaW5nO1xuICAvKipcbiAgICogVVJMIHRvIG9wZW4gd2hlbiBvcGVuaW5nIHRoZSBub3RpZmljYXRpb24uXG4gICAqL1xuICBsYXVuY2hVUkw/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBTb3VuZCByZXNvdXJjZSB0byBwbGF5IHdoZW4gdGhlIG5vdGlmaWNhdGlvbiBpcyBzaG93bi5cbiAgICovXG4gIHNvdW5kOiBzdHJpbmc7XG4gIC8qKlxuICAgKiAqKkFORFJPSUQqKiAtIERldmljZXMgdGhhdCBoYXZlIGEgbm90aWZpY2F0aW9uIExFRCB3aWxsIGJsaW5rIGluIHRoaXMgY29sb3IuIEFSR0IgZm9ybWF0LlxuICAgKi9cbiAgbGVkQ29sb3I/OiBzdHJpbmc7XG4gIGxvY2tTY3JlZW5WaXNpYmlsaXR5PzogT1NMb2NrU2NyZWVuVmlzaWJpbGl0eTtcbiAgLyoqXG4gICAqICoqQU5EUk9JRCoqIC0gTm90aWZpY2F0aW9ucyB3aXRoIHRoaXMgc2FtZSBrZXkgd2lsbCBiZSBncm91cGVkIHRvZ2V0aGVyIGFzIGEgc2luZ2xlIHN1bW1hcnkgbm90aWZpY2F0aW9uLlxuICAgKi9cbiAgZ3JvdXBLZXk/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiAqKkFORFJPSUQqKiAtIFN1bW1hcnkgdGV4dCBkaXNwbGF5ZWQgaW4gdGhlIHN1bW1hcnkgbm90aWZpY2F0aW9uLlxuICAgKi9cbiAgZ3JvdXBNZXNzYWdlPzogc3RyaW5nO1xuICAvKipcbiAgICogTGlzdCBvZiBhY3Rpb24gYnV0dG9ucyBvbiB0aGUgbm90aWZpY2F0aW9uLlxuICAgKi9cbiAgYWN0aW9uQnV0dG9uczogT1NBY3Rpb25CdXR0b25bXTtcbiAgLyoqXG4gICAqICoqQU5EUk9JRCoqIC0gVGhlIEdvb2dsZSBwcm9qZWN0IG51bWJlciB0aGUgbm90aWZpY2F0aW9uIHdhcyBzZW50IHVuZGVyLlxuICAgKi9cbiAgZnJvbVByb2plY3ROdW1iZXI/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiAqKkFORFJPSUQqKiAtIElmIGEgYmFja2dyb3VuZCBpbWFnZSB3YXMgc2V0IHRoaXMgb2JqZWN0IHdpbGwgYmUgYXZhaWxhYmxlLlxuICAgKi9cbiAgYmFja2dyb3VuZEltYWdlTGF5b3V0PzogT1NCYWNrZ3JvdW5kSW1hZ2VMYXlvdXQ7XG4gIHByaW9yaXR5PzogbnVtYmVyO1xuICAvKipcbiAgICogTGlzdCBvZiBhY3Rpb24gYnV0dG9ucyBvbiB0aGUgbm90aWZpY2F0aW9uLlxuICAgKi9cbiAgcmF3UGF5bG9hZDogc3RyaW5nO1xufVxuXG4vKipcbiAqIExpc3Qgb2YgYWN0aW9uIGJ1dHRvbnMgb24gdGhlIG5vdGlmaWNhdGlvbi5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBPU0FjdGlvbkJ1dHRvbiB7XG4gIC8qKlxuICAgKiBJZCBhc3NpZ25lZCB0byB0aGUgYnV0dG9uLlxuICAgKi9cbiAgaWQ6IHN0cmluZztcbiAgLyoqXG4gICAqIFRleHQgc2hvdyBvbiB0aGUgYnV0dG9uIHRvIHRoZSB1c2VyLlxuICAgKi9cbiAgdGV4dDogc3RyaW5nO1xuICAvKipcbiAgICogKipBTkRST0lEKiogLSBJY29uIHNob3duIG9uIHRoZSBidXR0b24uXG4gICAqL1xuICBpY29uOiBzdHJpbmc7XG59XG5cbi8qKlxuICogT1NQZXJtaXNzaW9uU3RhdGVcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBPU1Blcm1pc3Npb25TdGF0ZSB7XG4gIC8qKlxuICAgKiBVc2VyIHdhcyBwcm9tcHRlZC5cbiAgICovXG4gIGhhc1Byb21wdGVkOiBib29sZWFuO1xuICAvKipcbiAgICogUGVybWlzc2lvbnMgU3RhdHVzIChpT1MgT25seSlcbiAgICovXG4gIHN0YXR1czogYW55O1xuICAvKipcbiAgICogUGVybWlzc2lvbnMgU3RhdGUgKEFuZHJvaWQgT25seSlcbiAgICovXG4gIHN0YXRlOiBhbnk7XG59XG5cbi8qKlxuICogT1NTdWJzY3JpcHRpb25TdGF0ZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIE9TU3Vic2NyaXB0aW9uU3RhdGUge1xuICBzdWJzY3JpYmVkOiBib29sZWFuO1xuICB1c2VyU3Vic2NyaXB0aW9uU2V0dGluZzogYW55O1xuICB1c2VySWQ6IGFueTtcbiAgcHVzaFRva2VuOiBhbnk7XG59XG5cbi8qKlxuICogU3Vic2NyaXB0aW9uIGFuZCBwZXJtaXNzaW9ucyBzdGF0dXNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBPU1Blcm1pc3Npb25TdWJzY3JpcHRpb25TdGF0ZSB7XG4gIC8qKlxuICAgKiBJZCBhc3NpZ25lZCB0byB0aGUgYnV0dG9uLlxuICAgKi9cbiAgcGVybWlzc2lvblN0YXR1czogT1NQZXJtaXNzaW9uU3RhdGU7XG4gIC8qKlxuICAgKiBUZXh0IHNob3cgb24gdGhlIGJ1dHRvbiB0byB0aGUgdXNlci5cbiAgICovXG4gIHN1YnNjcmlwdGlvblN0YXR1czogT1NTdWJzY3JpcHRpb25TdGF0ZTtcbn1cblxuLyoqXG4gKiAqKkFORFJPSUQqKiAtIElmIGEgYmFja2dyb3VuZCBpbWFnZSB3YXMgc2V0LCB0aGlzIG9iamVjdCB3aWxsIGJlIGF2YWlsYWJsZS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBPU0JhY2tncm91bmRJbWFnZUxheW91dCB7XG4gIC8qKlxuICAgKiBJbWFnZSBVUkwgb3IgbmFtZSB1c2VkIGFzIHRoZSBiYWNrZ3JvdW5kIGltYWdlLlxuICAgKi9cbiAgaW1hZ2U6IHN0cmluZztcbiAgLyoqXG4gICAqIFRleHQgY29sb3Igb2YgdGhlIHRpdGxlIG9uIHRoZSBub3RpZmljYXRpb24uIEFSR0IgRm9ybWF0LlxuICAgKi9cbiAgdGl0bGVUZXh0Q29sb3I6IHN0cmluZztcbiAgLyoqXG4gICAqIFRleHQgY29sb3Igb2YgdGhlIGJvZHkgb24gdGhlIG5vdGlmaWNhdGlvbi4gQVJHQiBGb3JtYXQuXG4gICAqL1xuICBib2R5VGV4dENvbG9yOiBzdHJpbmc7XG59XG5cbi8qKlxuICogVGhlIGluZm9ybWF0aW9uIHJldHVybmVkIGZyb20gYSBub3RpZmljYXRpb24gdGhlIHVzZXIgcmVjZWl2ZWQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgT1NOb3RpZmljYXRpb25PcGVuZWRSZXN1bHQge1xuICBhY3Rpb246IHtcbiAgICAvKipcbiAgICAgKiBXYXMgdGhlIG5vdGlmaWNhdGlvbiBvcGVuZWQgbm9ybWFsbHkgKGBPcGVuZWRgKSBvciB3YXMgYSBidXR0b24gcHJlc3NlZCBvbiB0aGUgbm90aWZpY2F0aW9uIChgQWN0aW9uVGFrZW5gKS5cbiAgICAgKi9cbiAgICB0eXBlOiBPU0FjdGlvblR5cGU7XG4gICAgLyoqXG4gICAgICogSWYgYHR5cGVgID09IGBBY3Rpb25UYWtlbmAgdGhlbiB0aGlzIHdpbGwgY29udGFpbiB0aGUgaWQgb2YgdGhlIGJ1dHRvbiBwcmVzc2VkLlxuICAgICAqL1xuICAgIGFjdGlvbklEPzogc3RyaW5nO1xuICB9O1xuICBub3RpZmljYXRpb246IE9TTm90aWZpY2F0aW9uO1xufVxuXG5leHBvcnQgZW51bSBPU0FjdGlvblR5cGUge1xuICBPcGVuZWQgPSAwLFxuICBBY3Rpb25UYWtlID0gMSxcbn1cblxuLyoqXG4gKiBEZXRhaWxzIGFib3V0IHRoZSBJbi1BcHAgTWVzc2FnZSBhY3Rpb24gZWxlbWVudCAoYnV0dG9uIG9yIGltYWdlKSB0aGF0IHdhcyB0YXBwZWQgb24uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgT1NJbkFwcE1lc3NhZ2VBY3Rpb24ge1xuICAvKipcbiAgICogQW4gb3B0aW9uYWwgY2xpY2sgbmFtZSBkZWZpbmVkIGZvciB0aGUgYWN0aW9uIGVsZW1lbnQuIG51bGwgb3IgbmlsIChpT1MpIGlmIG5vdCBzZXQuXG4gICAqL1xuICBjbGlja19uYW1lOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBbiBvcHRpb25hbCBVUkwgdGhhdCBvcGVucyB3aGVuIHRoZSBhY3Rpb24gdGFrZXMgcGxhY2UuIG51bGwgb3IgbmlsIChpT1MpIGlmIG5vdCBzZXQuXG4gICAqL1xuICBjbGlja191cmw6IHN0cmluZztcbiAgLyoqXG4gICAqIGB0cnVlYCBpZiB0aGlzIGlzIHRoZSBmaXJzdCB0aW1lIHRoZSB1c2VyIGhhcyBwcmVzc2VkIGFueSBhY3Rpb24gb24gdGhlIEluLUFwcCBNZXNzYWdlLlxuICAgKi9cbiAgZmlyc3RfY2xpY2s6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBJbi1BcHAgTWVzc2FnZSB3aWxsIGFuaW1hdGUgb2ZmIHRoZSBzY3JlZW4uIElmIGBmYWxzZWAsIHRoZSBJbi1BcHAgTWVzc2FnZSB3aWxsIHN0YXkgb24gc2NyZWVuIHVudGlsIHRoZSB1c2VyIGRpc21pc3NlcyBpdC5cbiAgICovXG4gIGNsb3Nlc19tZXNzYWdlOiBib29sZWFuO1xufVxuXG4vKipcbiAqIEBuYW1lIE9uZVNpZ25hbFxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGUgT25lU2lnbmFsIHBsdWdpbiBpcyBhbiBjbGllbnQgaW1wbGVtZW50YXRpb24gZm9yIHVzaW5nIHRoZSBbT25lU2lnbmFsXShodHRwczovL29uZXNpZ25hbC5jb20vKSBTZXJ2aWNlLlxuICogT25lU2lnbmFsIGlzIGEgc2ltcGxlIGltcGxlbWVudGF0aW9uIGZvciBkZWxpdmVyaW5nIHB1c2ggbm90aWZpY2F0aW9ucy5cbiAqXG4gKiBQbGVhc2UgdmlldyB0aGUgb2ZmaWNpYWwgW09uZVNpZ25hbCBJb25pYyBTREsgSW5zdGFsbGF0aW9uXShodHRwczovL2RvY3VtZW50YXRpb24ub25lc2lnbmFsLmNvbS9kb2NzL2lvbmljLXNkay1zZXR1cCkgZ3VpZGVcbiAqIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqICMjIyMgSWNvbnNcbiAqIElmIHlvdSB3YW50IHRvIHVzZSBnZW5lcmF0ZWQgaWNvbnMgd2l0aCBjb21tYW5kIGBpb25pYyBjb3Jkb3ZhIHJlc291cmNlc2A6XG4gKlxuICogMS4gQWRkIGEgZmlsZSB0byB5b3VyIGBob29rc2AgZGlyZWN0b3J5IGNhbGxlZCBgY29weV9hbmRyb2lkX25vdGlmaWNhdGlvbl9pY29ucy5qc2BcbiAqXG4gKiAyLiBDb25maWd1cmUgdGhlIGhvb2sgaW4geW91ciBjb25maWcueG1sXG4gKiBgYGBcbiAqICAgICA8cGxhdGZvcm0gbmFtZT1cImFuZHJvaWRcIj5cbiAqICAgICAgICAgPGhvb2sgdHlwZT1cImFmdGVyX3ByZXBhcmVcIiBzcmM9XCJob29rcy9jb3B5X2FuZHJvaWRfbm90aWZpY2F0aW9uX2ljb25zLmpzXCIgLz5cbiAqICAgICA8L3BsYXRmb3JtPlxuICogYGBgXG4gKlxuICogMy4gUHV0IHRoZSBmb2xsb3dpbmcgY29kZSBpbiBpdDpcbiAqXG4gKiBgYGBcbiAqICMhL3Vzci9iaW4vZW52IG5vZGVcbiAqXG4gKiB2YXIgZnMgPSByZXF1aXJlKCdmcycpO1xuICogdmFyIHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG4gKlxuICogdmFyIGZpbGVzdG9jb3B5ID0gW3tcbiAqICAgICBcInJlc291cmNlcy9hbmRyb2lkL2ljb24vZHJhd2FibGUtaGRwaS1pY29uLnBuZ1wiOlxuICogICAgICAgICBcInBsYXRmb3Jtcy9hbmRyb2lkL2FwcC9zcmMvbWFpbi9yZXMvZHJhd2FibGUtaGRwaS9pY19zdGF0X29uZXNpZ25hbF9kZWZhdWx0LnBuZ1wiXG4gKiB9LCB7XG4gKiAgICAgXCJyZXNvdXJjZXMvYW5kcm9pZC9pY29uL2RyYXdhYmxlLW1kcGktaWNvbi5wbmdcIjpcbiAqICAgICAgICAgXCJwbGF0Zm9ybXMvYW5kcm9pZC9hcHAvc3JjL21haW4vcmVzL2RyYXdhYmxlLW1kcGkvaWNfc3RhdF9vbmVzaWduYWxfZGVmYXVsdC5wbmdcIlxuICogfSwge1xuICogICAgIFwicmVzb3VyY2VzL2FuZHJvaWQvaWNvbi9kcmF3YWJsZS14aGRwaS1pY29uLnBuZ1wiOlxuICogICAgICAgICBcInBsYXRmb3Jtcy9hbmRyb2lkL2FwcC9zcmMvbWFpbi9yZXMvZHJhd2FibGUteGhkcGkvaWNfc3RhdF9vbmVzaWduYWxfZGVmYXVsdC5wbmdcIlxuICogfSwge1xuICogICAgIFwicmVzb3VyY2VzL2FuZHJvaWQvaWNvbi9kcmF3YWJsZS14eGhkcGktaWNvbi5wbmdcIjpcbiAqICAgICAgICAgXCJwbGF0Zm9ybXMvYW5kcm9pZC9hcHAvc3JjL21haW4vcmVzL2RyYXdhYmxlLXh4aGRwaS9pY19zdGF0X29uZXNpZ25hbF9kZWZhdWx0LnBuZ1wiXG4gKiB9LCB7XG4gKiAgICAgXCJyZXNvdXJjZXMvYW5kcm9pZC9pY29uL2RyYXdhYmxlLXh4eGhkcGktaWNvbi5wbmdcIjpcbiAqICAgICAgICAgXCJwbGF0Zm9ybXMvYW5kcm9pZC9hcHAvc3JjL21haW4vcmVzL2RyYXdhYmxlLXh4eGhkcGkvaWNfc3RhdF9vbmVzaWduYWxfZGVmYXVsdC5wbmdcIlxuICogfSBdO1xuICpcbiAqIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY29udGV4dCkge1xuICpcbiAqICAgICAvLyBubyBuZWVkIHRvIGNvbmZpZ3VyZSBiZWxvd1xuICogICAgIHZhciByb290ZGlyID0gY29udGV4dC5vcHRzLnByb2plY3RSb290O1xuICpcbiAqICAgICBmaWxlc3RvY29weS5mb3JFYWNoKGZ1bmN0aW9uKG9iaikge1xuICogICAgICAgICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gKiAgICAgICAgICAgICB2YXIgdmFsID0gb2JqW2tleV07XG4gKiAgICAgICAgICAgICB2YXIgc3JjZmlsZSA9IHBhdGguam9pbihyb290ZGlyLCBrZXkpO1xuICogICAgICAgICAgICAgdmFyIGRlc3RmaWxlID0gcGF0aC5qb2luKHJvb3RkaXIsIHZhbCk7XG4gKiAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvcHlpbmcgXCIrc3JjZmlsZStcIiB0byBcIitkZXN0ZmlsZSk7XG4gKiAgICAgICAgICAgICB2YXIgZGVzdGRpciA9IHBhdGguZGlybmFtZShkZXN0ZmlsZSk7XG4gKiAgICAgICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhzcmNmaWxlKSAmJiBmcy5leGlzdHNTeW5jKGRlc3RkaXIpKSB7XG4gKiAgICAgICAgICAgICAgICAgZnMuY3JlYXRlUmVhZFN0cmVhbShzcmNmaWxlKS5waXBlKFxuICogICAgICAgICAgICAgICAgICAgICBmcy5jcmVhdGVXcml0ZVN0cmVhbShkZXN0ZmlsZSkpO1xuICogICAgICAgICAgICAgfVxuICogICAgICAgICB9KTtcbiAqICAgICB9KTtcbiAqXG4gKiB9O1xuICogYGBgXG4gKlxuICogMy4gRnJvbSB0aGUgcm9vdCBvZiB5b3VyIHByb2plY3QgbWFrZSB0aGUgZmlsZSBleGVjdXRhYmxlOlxuICogYCQgY2htb2QgK3ggaG9va3MvY29weV9hbmRyb2lkX25vdGlmaWNhdGlvbl9pY29ucy5qc2BcbiAqXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBPbmVTaWduYWwgfSBmcm9tICdAaW9uaWMtbmF0aXZlL29uZXNpZ25hbC9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgb25lU2lnbmFsOiBPbmVTaWduYWwpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMub25lU2lnbmFsLnN0YXJ0SW5pdCgnYjJmN2Y5NjYtZDhjYy0xMWU0LWJlZDEtZGY4ZjA1YmU1NWJhJywgJzcwMzMyMjc0NDI2MScpO1xuICpcbiAqIHRoaXMub25lU2lnbmFsLmluRm9jdXNEaXNwbGF5aW5nKHRoaXMub25lU2lnbmFsLk9TSW5Gb2N1c0Rpc3BsYXlPcHRpb24uSW5BcHBBbGVydCk7XG4gKlxuICogdGhpcy5vbmVTaWduYWwuaGFuZGxlTm90aWZpY2F0aW9uUmVjZWl2ZWQoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICogIC8vIGRvIHNvbWV0aGluZyB3aGVuIG5vdGlmaWNhdGlvbiBpcyByZWNlaXZlZFxuICogfSk7XG4gKlxuICogdGhpcy5vbmVTaWduYWwuaGFuZGxlTm90aWZpY2F0aW9uT3BlbmVkKCkuc3Vic2NyaWJlKCgpID0+IHtcbiAqICAgLy8gZG8gc29tZXRoaW5nIHdoZW4gYSBub3RpZmljYXRpb24gaXMgb3BlbmVkXG4gKiB9KTtcbiAqXG4gKiB0aGlzLm9uZVNpZ25hbC5lbmRJbml0KCk7XG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBPU05vdGlmaWNhdGlvblxuICogT1NMb2NrU2NyZWVuVmlzaWJpbGl0eVxuICogT1NEaXNwbGF5VHlwZVxuICogT1NOb3RpZmljYXRpb25QYXlsb2FkXG4gKiBPU0FjdGlvbkJ1dHRvblxuICogT1NCYWNrZ3JvdW5kSW1hZ2VMYXlvdXRcbiAqIE9TTm90aWZpY2F0aW9uT3BlbmVkUmVzdWx0XG4gKiBPU0FjdGlvblR5cGVcbiAqIE9TSW5BcHBNZXNzYWdlQWN0aW9uXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnT25lU2lnbmFsJyxcbiAgcGx1Z2luOiAnb25lc2lnbmFsLWNvcmRvdmEtcGx1Z2luJyxcbiAgcGx1Z2luUmVmOiAncGx1Z2lucy5PbmVTaWduYWwnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL09uZVNpZ25hbC9PbmVTaWduYWwtQ29yZG92YS1TREsnLFxuICBwbGF0Zm9ybXM6IFsnQW1hem9uIEZpcmUgT1MnLCAnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPbmVTaWduYWwgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBjb25zdGFudHMgdG8gdXNlIGluIGluRm9jdXNEaXNwbGF5aW5nKClcbiAgICogQGhpZGRlblxuICAgKi9cbiAgT1NJbkZvY3VzRGlzcGxheU9wdGlvbiA9IHtcbiAgICBOb25lOiAwLFxuICAgIEluQXBwQWxlcnQ6IDEsXG4gICAgTm90aWZpY2F0aW9uOiAyLFxuICB9O1xuXG4gIC8qKlxuICAgKiBTdGFydCB0aGUgaW5pdGlhbGl6YXRpb24gcHJvY2Vzcy4gT25jZSB5b3UgYXJlIGRvbmUgY29uZmlndXJpbmcgT25lU2lnbmFsLCBjYWxsIHRoZSBgZW5kSW5pdGAgZnVuY3Rpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhcHBJZCBZb3VyIE9uZVNpZ25hbCBhcHAgaWRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGdvb2dsZVByb2plY3ROdW1iZXIgKipBTkRST0lEKiogLSB5b3VyIEdvb2dsZSBwcm9qZWN0IG51bWJlcjsgb25seSByZXF1aXJlZCBmb3IgQW5kcm9pZCBHQ00vRkNNIHB1c2hlcy5cbiAgICogQHJldHVybnMge2FueX1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzdGFydEluaXQoYXBwSWQ6IHN0cmluZywgZ29vZ2xlUHJvamVjdE51bWJlcj86IHN0cmluZyk6IGFueSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIHJ1biB3aGVuIGEgbm90aWZpY2F0aW9uIGlzIHJlY2VpdmVkLCB3aGV0aGVyIGl0IHdhcyBkaXNwbGF5ZWQgb3Igbm90LlxuICAgKlxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPE9uZVNpZ25hbFJlY2VpdmVkTm90aWZpY2F0aW9uPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICB9KVxuICBoYW5kbGVOb3RpZmljYXRpb25SZWNlaXZlZCgpOiBPYnNlcnZhYmxlPE9TTm90aWZpY2F0aW9uPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIHJ1biB3aGVuIGEgbm90aWZpY2F0aW9uIGlzIHRhcHBlZCBvbiBmcm9tIHRoZSBub3RpZmljYXRpb24gc2hhZGUgKCoqQU5EUk9JRCoqKSBvciBub3RpZmljYXRpb25cbiAgICogY2VudGVyICgqKmlPUyoqKSwgb3Igd2hlbiBjbG9zaW5nIGFuIEFsZXJ0IG5vdGlmaWNhdGlvbiBzaG93biBpbiB0aGUgYXBwIChpZiBJbkFwcEFsZXJ0IGlzIGVuYWJsZWQgaW5cbiAgICogaW5Gb2N1c0Rpc3BsYXlpbmcpLlxuICAgKlxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPE9uZVNpZ25hbE9wZW5lZE5vdGlmaWNhdGlvbj59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgfSlcbiAgaGFuZGxlTm90aWZpY2F0aW9uT3BlbmVkKCk6IE9ic2VydmFibGU8T1NOb3RpZmljYXRpb25PcGVuZWRSZXN1bHQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVXNlIHRvIHByb2Nlc3MgYW4gSW4tQXBwIE1lc3NhZ2UgdGhlIHVzZXIganVzdCB0YXBwZWQgb24uXG4gICAqXG4gICAqIEByZXR1cm4ge09ic2VydmFibGU8T1NJbkFwcE1lc3NhZ2VBY3Rpb24+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gIH0pXG4gIGhhbmRsZUluQXBwTWVzc2FnZUNsaWNrZWQoKTogT2JzZXJ2YWJsZTxPU0luQXBwTWVzc2FnZUFjdGlvbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiAqKmlPUyoqIC0gU2V0dGluZ3MgZm9yIGlPUyBhcHBzXG4gICAqXG4gICAqIEBwYXJhbSBzZXR0aW5nc1xuICAgKiAga09TU2V0dGluZ3NLZXlBdXRvUHJvbXB0OiBib29sZWFuID0gdHJ1ZVxuICAgKiAgQXV0byBwcm9tcHQgdXNlciBmb3Igbm90aWZpY2F0aW9uIHBlcm1pc3Npb25zLlxuICAgKlxuICAgKiAga09TU2V0dGluZ3NLZXlJbkFwcExhdW5jaFVSTDogYm9vbGVhbiA9IGZhbHNlXG4gICAqICBMYXVuY2ggbm90aWZpY2F0aW9ucyB3aXRoIGEgbGF1bmNoIFVSTCBhcyBhbiBpbiBhcHAgd2Vidmlldy5cbiAgICogQHJldHVybnMge2FueX1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICAgIHBsYXRmb3JtczogWydpT1MnXSxcbiAgfSlcbiAgaU9TU2V0dGluZ3Moc2V0dGluZ3M6IHsga09TU2V0dGluZ3NLZXlBdXRvUHJvbXB0OiBib29sZWFuOyBrT1NTZXR0aW5nc0tleUluQXBwTGF1bmNoVVJMOiBib29sZWFuIH0pOiBhbnkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNdXN0IGJlIGNhbGxlZCBhZnRlciBgc3RhcnRJbml0YCB0byBjb21wbGV0ZSBpbml0aWFsaXphdGlvbiBvZiBPbmVTaWduYWwuXG4gICAqXG4gICAqIEByZXR1cm5zIHthbnl9XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZW5kSW5pdCgpOiBhbnkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm9tcHQgdGhlIHVzZXIgZm9yIG5vdGlmaWNhdGlvbiBwZXJtaXNzaW9ucy4gQ2FsbGJhY2sgZmlyZXMgYXMgc29vbiBhcyB0aGUgdXNlciBhY2NlcHRzIG9yIGRlY2xpbmVzIG5vdGlmaWNhdGlvbnMuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydpT1MnXSxcbiAgfSlcbiAgcHJvbXB0Rm9yUHVzaE5vdGlmaWNhdGlvbnNXaXRoVXNlclJlc3BvbnNlKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZSBhIGxpc3Qgb2YgdGFncyB0aGF0IGhhdmUgYmVlbiBzZXQgb24gdGhlIHVzZXIgZnJvbSB0aGUgT25lU2lnbmFsIHNlcnZlci5cbiAgICpcbiAgICogKipRdWlyayoqOiBZb3UgbXVzdCB3YWl0IGZvciBgZ2V0VGFnc2AgdG8gcmVzb2x2ZSBiZWZvcmUgY2FsbGluZyBpdCBhZ2FpbiwgYXMgdGhlIHBsdWdpbiB3aWxsIG9ubHkgcHJvY2VzcyB0aGUgbGFzdCBtZXRob2QgY2FsbCBhbmQgZGlzY2FyZCBhbnkgcHJldmlvdXMgb25lcy5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRhZ3MgYXJlIHJlY2lldmVkLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRUYWdzKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIExldHMgeW91IHJldHJpZXZlIHRoZSBPbmVTaWduYWwgdXNlciBpZCBhbmQgZGV2aWNlIHRva2VuLlxuICAgKiBZb3VyIGhhbmRsZXIgaXMgY2FsbGVkIGFmdGVyIHRoZSBkZXZpY2UgaXMgc3VjY2Vzc2Z1bGx5IHJlZ2lzdGVyZWQgd2l0aCBPbmVTaWduYWwuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPE9iamVjdD59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgaWYgdGhlIGRldmljZSB3YXMgc3VjY2Vzc2Z1bGx5IHJlZ2lzdGVyZWQuXG4gICAqXG4gICAqICB1c2VySWQge3N0cmluZ30gT25lU2lnbmFsIHVzZXJJZCBpcyBhIFVVSUQgZm9ybWF0dGVkIHN0cmluZy4gKHVuaXF1ZSBwZXIgZGV2aWNlIHBlciBhcHApXG4gICAqXG4gICAqICBwdXNoVG9rZW4ge3N0cmluZ30gQSBwdXNoIHRva2VuIGlzIGEgR29vZ2xlL0FwcGxlIGFzc2lnbmVkIGlkZW50aWZpZXIodW5pcXVlIHBlciBkZXZpY2UgcGVyIGFwcCkuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldElkcygpOiBQcm9taXNlPHsgdXNlcklkOiBzdHJpbmc7IHB1c2hUb2tlbjogc3RyaW5nIH0+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGFnIGEgdXNlciBiYXNlZCBvbiBhbiBhcHAgZXZlbnQgb2YgeW91ciBjaG9vc2luZyBzbyBsYXRlciB5b3UgY2FuIGNyZWF0ZSBzZWdtZW50cyBvbiBbb25lc2lnbmFsLmNvbV0oaHR0cHM6Ly9vbmVzaWduYWwuY29tLykgdG8gdGFyZ2V0IHRoZXNlIHVzZXJzLlxuICAgKiBSZWNvbW1lbmQgdXNpbmcgc2VuZFRhZ3Mgb3ZlciBzZW5kVGFnIGlmIHlvdSBuZWVkIHRvIHNldCBtb3JlIHRoYW4gb25lIHRhZyBvbiBhIHVzZXIgYXQgYSB0aW1lLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gS2V5IG9mIHlvdXIgY2hvb3NpbmcgdG8gY3JlYXRlIG9yIHVwZGF0ZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFZhbHVlIHRvIHNldCBvbiB0aGUga2V5LiBOT1RFOiBQYXNzaW5nIGluIGEgYmxhbmsgU3RyaW5nIGRlbGV0ZXMgdGhlIGtleSwgeW91IGNhbiBhbHNvIGNhbGwgZGVsZXRlVGFnLlxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHNlbmRUYWcoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFRhZyBhIHVzZXIgYmFzZWQgb24gYW4gYXBwIGV2ZW50IG9mIHlvdXIgY2hvb3Npbmcgc28gbGF0ZXIgeW91IGNhbiBjcmVhdGUgc2VnbWVudHMgb24gW29uZXNpZ25hbC5jb21dKGh0dHBzOi8vb25lc2lnbmFsLmNvbS8pIHRvIHRhcmdldCB0aGVzZSB1c2Vycy5cbiAgICogUmVjb21tZW5kIHVzaW5nIHNlbmRUYWdzIG92ZXIgc2VuZFRhZyBpZiB5b3UgbmVlZCB0byBzZXQgbW9yZSB0aGFuIG9uZSB0YWcgb24gYSB1c2VyIGF0IGEgdGltZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFBhc3MgYSBqc29uIG9iamVjdCB3aXRoIGtleS92YWx1ZSBwYWlycyBsaWtlOiB7a2V5OiBcInZhbHVlXCIsIGtleTI6IFwidmFsdWUyXCJ9XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc2VuZFRhZ3MoanNvbjogYW55KTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGEgdGFnIHRoYXQgd2FzIHByZXZpb3VzbHkgc2V0IG9uIGEgdXNlciB3aXRoIGBzZW5kVGFnYCBvciBgc2VuZFRhZ3NgLiBVc2UgYGRlbGV0ZVRhZ3NgIGlmIHlvdSBuZWVkIHRvIGRlbGV0ZSBtb3JlIHRoYW4gb25lLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gS2V5IHRvIHJlbW92ZS5cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBkZWxldGVUYWcoa2V5OiBzdHJpbmcpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgdGFncyB0aGF0IHdlcmUgcHJldmlvdXNseSBzZXQgb24gYSB1c2VyIHdpdGggYHNlbmRUYWdgIG9yIGBzZW5kVGFnc2AuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IEtleXMgdG8gcmVtb3ZlLlxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGRlbGV0ZVRhZ3Moa2V5czogc3RyaW5nW10pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIENhbGwgdGhpcyB3aGVuIHlvdSB3b3VsZCBsaWtlIHRvIHByb21wdCBhbiBpT1MgdXNlciB0byBhY2NlcHQgcHVzaCBub3RpZmljYXRpb25zIHdpdGggdGhlIGRlZmF1bHQgc3lzdGVtIHByb21wdC5cbiAgICogT25seSB3b3JrcyBpZiB5b3Ugc2V0IGBrT1NTZXR0aW5nc0F1dG9Qcm9tcHRgIHRvIGBmYWxzZWAgaW4gYGlPU1NldHRpbmdzYFxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHJlZ2lzdGVyRm9yUHVzaE5vdGlmaWNhdGlvbnMoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBXYXJuaW5nOlxuICAgKiBPbmx5IGFwcGxpZXMgdG8gQW5kcm9pZCBhbmQgQW1hem9uLiBZb3UgY2FuIGNhbGwgdGhpcyBmcm9tIHlvdXIgVUkgZnJvbSBhIGJ1dHRvbiBwcmVzcyBmb3IgZXhhbXBsZSB0byBnaXZlIHlvdXIgdXNlcidzIG9wdGlvbnMgZm9yIHlvdXIgbm90aWZpY2F0aW9ucy5cbiAgICpcbiAgICogQnkgZGVmYXVsdCBPbmVTaWduYWwgYWx3YXlzIHZpYnJhdGVzIHRoZSBkZXZpY2Ugd2hlbiBhIG5vdGlmaWNhdGlvbiBpcyBkaXNwbGF5ZWQgdW5sZXNzIHRoZSBkZXZpY2UgaXMgaW4gYSB0b3RhbCBzaWxlbnQgbW9kZS5cbiAgICogUGFzc2luZyBmYWxzZSBtZWFucyB0aGF0IHRoZSBkZXZpY2Ugd2lsbCBvbmx5IHZpYnJhdGUgbGlnaHRseSB3aGVuIHRoZSBkZXZpY2UgaXMgaW4gaXQncyB2aWJyYXRlIG9ubHkgbW9kZS5cbiAgICpcbiAgICogQHBhcmFtIHtib29sZWFufSBmYWxzZSB0byBkaXNhYmxlIHZpYnJhdGUsIHRydWUgdG8gcmUtZW5hYmxlIGl0LlxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGVuYWJsZVZpYnJhdGUoZW5hYmxlOiBib29sZWFuKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBXYXJuaW5nOlxuICAgKiBPbmx5IGFwcGxpZXMgdG8gQW5kcm9pZCBhbmQgQW1hem9uLiBZb3UgY2FuIGNhbGwgdGhpcyBmcm9tIHlvdXIgVUkgZnJvbSBhIGJ1dHRvbiBwcmVzcyBmb3IgZXhhbXBsZSB0byBnaXZlIHlvdXIgdXNlcidzIG9wdGlvbnMgZm9yIHlvdXIgbm90aWZpY2F0aW9ucy5cbiAgICpcbiAgICogQnkgZGVmYXVsdCBPbmVTaWduYWwgcGxheXMgdGhlIHN5c3RlbSdzIGRlZmF1bHQgbm90aWZpY2F0aW9uIHNvdW5kIHdoZW4gdGhlIGRldmljZSdzIG5vdGlmaWNhdGlvbiBzeXN0ZW0gdm9sdW1lIGlzIHR1cm5lZCBvbi5cbiAgICogUGFzc2luZyBmYWxzZSBtZWFucyB0aGF0IHRoZSBkZXZpY2Ugd2lsbCBvbmx5IHZpYnJhdGUgdW5sZXNzIHRoZSBkZXZpY2UgaXMgc2V0IHRvIGEgdG90YWwgc2lsZW50IG1vZGUuXG4gICAqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZmFsc2UgdG8gZGlzYWJsZSBzb3VuZCwgdHJ1ZSB0byByZS1lbmFibGUgaXQuXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZW5hYmxlU291bmQoZW5hYmxlOiBib29sZWFuKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKlxuICAgKiBTZXR0aW5nIHRvIGNvbnRyb2wgaG93IE9uZVNpZ25hbCBub3RpZmljYXRpb25zIHdpbGwgYmUgc2hvd24gd2hlbiBvbmUgaXMgcmVjZWl2ZWQgd2hpbGUgeW91ciBhcHAgaXMgaW4gZm9jdXMuIEJ5IGRlZmF1bHQgdGhpcyBpcyBzZXQgdG8gaW5BcHBBbGVydCwgd2hpY2ggY2FuIGJlIGhlbHBmdWwgZHVyaW5nIGRldmVsb3BtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0Rpc3BsYXlUeXBlfSBkaXNwbGF5T3B0aW9uXG4gICAqIEByZXR1cm5zIHthbnl9XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgaW5Gb2N1c0Rpc3BsYXlpbmcoZGlzcGxheU9wdGlvbjogT1NEaXNwbGF5VHlwZSk6IGFueSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFlvdSBjYW4gY2FsbCB0aGlzIG1ldGhvZCB3aXRoIGZhbHNlIHRvIG9wdCB1c2VycyBvdXQgb2YgcmVjZWl2aW5nIGFsbCBub3RpZmljYXRpb25zIHRocm91Z2ggT25lU2lnbmFsLlxuICAgKiBZb3UgY2FuIHBhc3MgdHJ1ZSBsYXRlciB0byBvcHQgdXNlcnMgYmFjayBpbnRvIG5vdGlmaWNhdGlvbnMuXG4gICAqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZW5hYmxlXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0U3Vic2NyaXB0aW9uKGVuYWJsZTogYm9vbGVhbik6IHZvaWQge31cblxuICAvKipcbiAgICogR2V0IHRoZSBjdXJyZW50IG5vdGlmaWNhdGlvbiBhbmQgcGVybWlzc2lvbiBzdGF0ZS4gUmV0dXJucyBhIE9TUGVybWlzc2lvblN1YnNjcmlwdGlvblN0YXRlIHR5cGUgZGVzY3JpYmVkIGJlbG93LlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxPU1Blcm1pc3Npb25TdWJzY3JpcHRpb25TdGF0ZT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFBlcm1pc3Npb25TdWJzY3JpcHRpb25TdGF0ZSgpOiBQcm9taXNlPE9TUGVybWlzc2lvblN1YnNjcmlwdGlvblN0YXRlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7bm90aWZpY2F0aW9uT2JqfSBQYXJhbWV0ZXJzIHNlZSBQT1NUIFtkb2N1bWVudGF0aW9uXShodHRwczovL2RvY3VtZW50YXRpb24ub25lc2lnbmFsLmNvbS92Mi4wL2RvY3Mvbm90aWZpY2F0aW9ucy1jcmVhdGUtbm90aWZpY2F0aW9uKVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIGlmIHRoZSBub3RpZmljYXRpb24gd2FzIHNlbmQgc3VjY2Vzc2Z1bGx5LlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBwb3N0Tm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbk9iajogT1NOb3RpZmljYXRpb24pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYW5jZWxzIGEgc2luZ2xlIE9uZVNpZ25hbCBub3RpZmljYXRpb24gYmFzZWQgb24gaXRzIEFuZHJvaWQgbm90aWZpY2F0aW9uIGludGVnZXIgaWQuIFVzZSBpbnN0ZWFkIG9mIE5vdGlmaWNhdGlvbk1hbmFnZXIuY2FuY2VsKGlkKTsgb3RoZXJ3aXNlIHRoZSBub3RpZmljYXRpb24gd2lsbCBiZSByZXN0b3JlZCB3aGVuIHlvdXIgYXBwIGlzIHJlc3RhcnRlZC5cbiAgICogQHBhcmFtIG5vdGlmaWNhdGlvbklkIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgY2FuY2VsTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbklkOiBzdHJpbmcpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFByb21wdHMgdGhlIHVzZXIgZm9yIGxvY2F0aW9uIHBlcm1pc3Npb24gdG8gYWxsb3cgZ2VvdGFnZ2luZyBiYXNlZCBvbiB0aGUgXCJMb2NhdGlvbiByYWRpdXNcIiBmaWx0ZXIgb24gdGhlIE9uZVNpZ25hbCBkYXNoYm9hcmQuXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgcHJvbXB0TG9jYXRpb24oKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gZW1haWwge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzeW5jSGFzaGVkRW1haWwoZW1haWw6IHN0cmluZyk6IHZvaWQge31cblxuICAvKipcbiAgICogRW5hYmxlIGxvZ2dpbmcgdG8gaGVscCBkZWJ1ZyBpZiB5b3UgcnVuIGludG8gYW4gaXNzdWUgc2V0dGluZyB1cCBPbmVTaWduYWwuXG4gICAqIFRoZSBsb2dnaW5nIGxldmVscyBhcmUgYXMgZm9sbG93czogMCA9IE5vbmUsIDE9IEZhdGFsLCAyID0gRXJyb3JzLCAzID0gV2FybmluZ3MsIDQgPSBJbmZvLCA1ID0gRGVidWcsIDYgPSBWZXJib3NlXG4gICAqXG4gICAqIFRoZSBoaWdoZXIgdGhlIHZhbHVlIHRoZSBtb3JlIGluZm9ybWF0aW9uIGlzIHNob3duLlxuICAgKlxuICAgKiBAcGFyYW0ge2xvZ2xldmVsfSBjb250YWlucyB0d28gcHJvcGVydGllczogbG9nTGV2ZWwgKGZvciBjb25zb2xlIGxvZ2dpbmcpIGFuZCB2aXN1YWxMZXZlbCAoZm9yIGRpYWxvZyBtZXNzYWdlcylcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRMb2dMZXZlbChsb2dMZXZlbDogeyBsb2dMZXZlbDogbnVtYmVyOyB2aXN1YWxMZXZlbDogbnVtYmVyIH0pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIERpc2FibGUgb3IgZW5hYmxlIGxvY2F0aW9uIGNvbGxlY3Rpb24gKERlZmF1bHRzIHRvIGVuYWJsZWQpIGlmIHlvdXIgYXBwIGhhcyBsb2NhdGlvbiBwZXJtaXNzaW9uLlxuICAgKiBAcGFyYW0gc2hhcmVkIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHNldExvY2F0aW9uU2hhcmVkKHNoYXJlZDogYm9vbGVhbik6IHZvaWQge31cblxuICAvKipcbiAgICogVGhlIHBhc3NlZCBpbiBmdW5jdGlvbiB3aWxsIGJlIGZpcmVkIHdoZW4gYSBub3RpZmljYXRpb24gcGVybWlzc2lvbiBzZXR0aW5nIGNoYW5nZXMuXG4gICAqIFRoaXMgaW5jbHVkZXMgdGhlIGZvbGxvd2luZyBldmVudHM6XG4gICAqIC0gTm90aWZpY2F0aW9uIHBlcm1pc3Npb24gcHJvbXB0IHNob3duXG4gICAqIC0gVGhlIHVzZXIgYWNjZXB0aW5nIG9yIGRlY2xpbmluZyB0aGUgcGVybWlzc2lvbiBwcm9tcHRcbiAgICogLSBFbmFibGluZy9kaXNhYmxpbmcgbm90aWZpY2F0aW9ucyBmb3IgeW91ciBhcHAgaW4gdGhlIGRldmljZSBTZXR0aW5ncyBhZnRlciByZXR1cm5pbmcgdG8geW91ciBhcHAuXG4gICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICB9KVxuICBhZGRQZXJtaXNzaW9uT2JzZXJ2ZXIoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGhlIHBhc3NlZCBpbiBmdW5jdGlvbiB3aWxsIGJlIGZpcmVkIHdoZW4gYSBub3RpZmljYXRpb24gc3Vic2NyaXB0aW9uIHByb3BlcnR5IGNoYW5nZXMuXG4gICAqIFRoaXMgaW5jbHVkZXMgdGhlIGZvbGxvd2luZyBldmVudHM6XG4gICAqIC0gR2V0dGluZyBhIHB1c2ggdG9rZW4gZnJvbSBBcHBsZSAvIEdvb2dsZS5cbiAgICogLSBHZXR0aW5nIGEgcGxheWVyIC8gdXNlciBpZCBmcm9tIE9uZVNpZ25hbFxuICAgKiAtIE9uZVNpZ25hbC5zZXRTdWJzY3JpcHRpb24gaXMgY2FsbGVkXG4gICAqIC0gVXNlciBkaXNhYmxlcyBvciBlbmFibGVzIG5vdGlmaWNhdGlvbnNcbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gIH0pXG4gIGFkZFN1YnNjcmlwdGlvbk9ic2VydmVyKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFycyBhbGwgT25lU2lnbmFsIG5vdGlmaWNhdGlvbnNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0RW1haWwoZW1haWw6IHN0cmluZywgZW1haWxBdXRoVG9rZW4/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJZiB5b3VyIGFwcCBpbXBsZW1lbnRzIGxvZ291dCBmdW5jdGlvbmFsaXR5LCB5b3UgY2FuIGNhbGwgbG9nb3V0RW1haWwgdG8gZGlzc29jaWF0ZSB0aGUgZW1haWwgZnJvbSB0aGUgZGV2aWNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGxvZ291dEVtYWlsKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBwYXNzZWQgaW4gZnVuY3Rpb24gd2lsbCBiZSBmaXJlZCB3aGVuIGEgbm90aWZpY2F0aW9uIHN1YnNjcmlwdGlvbiBwcm9wZXJ0eSBjaGFuZ2VzLlxuICAgKiBUaGlzIGluY2x1ZGVzIHRoZSBmb2xsb3dpbmcgZXZlbnRzOlxuICAgKiAtIEdldHRpbmcgYSBwdXNoIHRva2VuIGZyb20gQXBwbGUgLyBHb29nbGUuXG4gICAqIC0gR2V0dGluZyBhIHBsYXllciAvIHVzZXIgaWQgZnJvbSBPbmVTaWduYWxcbiAgICogLSBPbmVTaWduYWwuc2V0U3Vic2NyaXB0aW9uIGlzIGNhbGxlZFxuICAgKiAtIFVzZXIgZGlzYWJsZXMgb3IgZW5hYmxlcyBub3RpZmljYXRpb25zXG4gICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICB9KVxuICBhZGRFbWFpbFN1YnNjcmlwdGlvbk9ic2VydmVyKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFycyBhbGwgT25lU2lnbmFsIG5vdGlmaWNhdGlvbnNcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBjbGVhck9uZVNpZ25hbE5vdGlmaWNhdGlvbnMoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBBbGxvd3MgeW91IHRvIGRlbGF5IHRoZSBpbml0aWFsaXphdGlvbiBvZiB0aGUgU0RLIHVudGlsIHRoZSB1c2VyIHByb3ZpZGVzIHByaXZhY3kgY29uc2VudC5cbiAgICogVGhlIFNESyB3aWxsIG5vdCBiZSBmdWxseSBpbml0aWFsaXplZCB1bnRpbCB0aGUgcHJvdmlkZVVzZXJDb25zZW50KHRydWUpIG1ldGhvZCBpcyBjYWxsZWQuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVxdWlyZWRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0UmVxdWlyZXNVc2VyUHJpdmFjeUNvbnNlbnQocmVxdWlyZWQ6IGJvb2xlYW4pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIElmIHlvdXIgYXBwbGljYXRpb24gaXMgc2V0IHRvIHJlcXVpcmUgdGhlIHVzZXIncyBwcml2YWN5IGNvbnNlbnQsIHlvdSBjYW4gcHJvdmlkZSB0aGlzIGNvbnNlbnQgdXNpbmcgdGhpcyBtZXRob2QuXG4gICAqIFVudGlsIHlvdSBjYWxsIHByb3ZpZGVVc2VyQ29uc2VudCh0cnVlKSwgdGhlIFNESyB3aWxsIG5vdCBmdWxseSBpbml0aWFsaXplIGFuZCB3aWxsIG5vdCBzZW5kIGFueSBkYXRhIHRvIE9uZVNpZ25hbC5cbiAgICogQHBhcmFtIHtib29sZWFufSBncmFudGVkXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHByb3ZpZGVVc2VyQ29uc2VudChncmFudGVkOiBib29sZWFuKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBBY2NlcHRzIGEgY2FsbGJhY2ssIHdoaWNoIHJldHVybnMgYSBib29sZWFuIHZhcmlhYmxlIGluZGljYXRpbmcgaWYgdGhlIHVzZXIgaGFzIGdpdmVuIHByaXZhY3kgY29uc2VudCB5ZXQuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHVzZXJQcm92aWRlZFByaXZhY3lDb25zZW50KGNhbGxiYWNrOiBGdW5jdGlvbik6IHZvaWQge31cblxuICAvKipcbiAgICogQWxsb3dzIHlvdSB0byB1c2UgeW91ciBvd24gc3lzdGVtJ3MgdXNlciBJRCdzIHRvIHNlbmQgcHVzaCBub3RpZmljYXRpb25zIHRvIHlvdXIgdXNlcnMuXG4gICAqIFRvIHRpZSBhIHVzZXIgdG8gYSBnaXZlbiB1c2VyIElELCB5b3UgY2FuIHVzZSB0aGlzIG1ldGhvZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV4dGVybmFsSWRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0RXh0ZXJuYWxVc2VySWQoZXh0ZXJuYWxJZDogc3RyaW5nKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHdoYXRldmVyIHdhcyBzZXQgYXMgdGhlIGN1cnJlbnQgdXNlcidzIGV4dGVybmFsIHVzZXIgSUQuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlbW92ZUV4dGVybmFsVXNlcklkKCk6IHZvaWQge31cblxuICAvKipcbiAgICogQWRkIGEgdHJpZ2dlci4gTWF5IHNob3cgYW4gSW4tQXBwIE1lc3NhZ2UgaWYgaXRzIHRyaWdnZXIgY29uZGl0aW9ucyB3ZXJlIG1ldC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBLZXkgZm9yIHRoZSB0cmlnZ2VyLlxuICAgKiBAcGFyYW0ge3N0cmluZyB8IG51bWJlciB8IE9iamVjdH0gdmFsdWUgVmFsdWUgZm9yIHRoZSB0cmlnZ2VyLiBTdHJpbmcgb3IgbnVtYmVyIHJlY29tbWVuZGVkLiBPYmplY3QgcGFzc2VkIGluIHdpbGwgYmUgY29udmVydGVkIHRvIGEgc3RyaW5nLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIGFkZFRyaWdnZXIoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfCBPYmplY3QpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEFkZCBhIG1hcCBvZiB0cmlnZ2Vycy4gTWF5IHNob3cgYW4gSW4tQXBwIE1lc3NhZ2UgaWYgaXRzIHRyaWdnZXIgY29uZGl0aW9ucyB3ZXJlIG1ldC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgc3RyaW5nIHwgbnVtYmVyIHwgT2JqZWN0Pn0gdHJpZ2dlcnMgQWxsb3dzIHlvdSB0byBzZXQgbXVsdGlwbGUgdHJpZ2dlciBrZXkvdmFsdWUgcGFpcnMgc2ltdWx0YW5lb3VzbHkuIFBhc3MgYSBqc29uIG9iamVjdCB3aXRoIGtleS92YWx1ZSBwYWlycyBsaWtlOiBge1wia2V5XCI6IFwidmFsdWVcIiwgXCJrZXkyXCI6IFwidmFsdWUyXCJ9YC5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBhZGRUcmlnZ2Vycyh0cmlnZ2VyczogT2JqZWN0KTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgc2luZ2xlIHRyaWdnZXIgZm9yIHRoZSBnaXZlbiBrZXkuIE1heSBzaG93IGFuIEluLUFwcCBNZXNzYWdlIGlmIGl0cyB0cmlnZ2VyIGNvbmRpdGlvbnMgd2VyZSBtZXQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgS2V5IGZvciB0cmlnZ2VyIHRvIHJlbW92ZS5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICByZW1vdmVUcmlnZ2VyRm9yS2V5KGtleTogc3RyaW5nKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgbGlzdCBvZiB0cmlnZ2VycyBiYXNlZCBvbiBhIGNvbGxlY3Rpb24gKGFycmF5KSBvZiBrZXlzLiBNYXkgc2hvdyBhbiBJbi1BcHAgTWVzc2FnZSBpZiBpdHMgdHJpZ2dlciBjb25kaXRpb25zIHdlcmUgbWV0LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzIFJlbW92ZXMgYSBjb2xsZWN0aW9uIG9mIHRyaWdnZXJzIGZyb20gdGhlaXIga2V5cy4gUGFzcyBhbiBhcnJheSBvZiB0cmlnZ2VyIGtleXMgbGlrZTogYFtcImtleTFcIiwgXCJrZXkyXCIsIFwia2V5M1wiXWAuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgcmVtb3ZlVHJpZ2dlcnNGb3JLZXlzKGtleXM6IHN0cmluZ1tdKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBHZXRzIGEgdHJpZ2dlciB2YWx1ZSBmb3IgYSBwcm92aWRlZCB0cmlnZ2VyIGtleS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBLZXkgZm9yIHRyaWdnZXIgdG8gZ2V0IHZhbHVlLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmcgfCBudW1iZXIgfCBPYmplY3Q+fSBSZXR1cm4gdmFsdWUgc2V0IHdpdGggYGFkZFRyaWdnZXJgLCBvciBgbnVsbGAvYG5pbGAgKGlPUykgaWYgbmV2ZXIgc2V0IG9yIHJlbW92ZWQuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFRyaWdnZXJWYWx1ZUZvcktleShrZXk6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nIHwgbnVtYmVyIHwgT2JqZWN0PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEFsbG93cyB5b3UgdG8gdGVtcG9yYXJpbHkgcGF1c2UgYWxsIEluLUFwcCBNZXNzYWdlcy4gWW91IG1heSB3YW50IHRvIGRvIHRoaXMgd2hpbGUgdGhlIHVzZXIgaXMgZW5nYWdlZCBpbiBhbiBhY3Rpdml0eSB0aGF0IHlvdSBkb24ndCB3YW50IGEgbWVzc2FnZSB0byBpbnRlcnJ1cHQgKHN1Y2ggYXMgd2F0Y2hpbmcgYSB2aWRlbykuXG4gICAqIEFuIEluLUFwcCBNZXNzYWdlIHRoYXQgd291bGQgZGlzcGxheSBpZiBub3QgcGF1c2VkIHdpbGwgZGlzcGxheSByaWdodCBhZnRlciByZXN1bWUgaWYgaXRzIGNvbmRpdGlvbnMgdG8gZGlzcGxheSByZW1haW5zIHNhdGlzZmllZC5cbiAgICpcbiAgICogQHBhcmFtIHtib29sZWFufSBwYXVzZSBUbyBwYXVzZSwgc2V0IGB0cnVlYC4gVG8gcmVzdW1lLCBzZXQgYGZhbHNlYC5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBwYXVzZUluQXBwTWVzc2FnZXMocGF1c2U6IGJvb2xlYW4pOiB2b2lkIHt9XG59XG4iXX0=

/***/ })

}]);
//# sourceMappingURL=pages-home-home-module.js.map