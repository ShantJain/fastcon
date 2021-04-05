(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-categories-categories-module"],{

/***/ "/0+N":
/*!***************************************************************!*\
  !*** ./src/app/pages/categories/categories-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: CategoriesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPageRoutingModule", function() { return CategoriesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories */ "hh4Q");




const routes = [
    {
        path: '',
        component: _categories__WEBPACK_IMPORTED_MODULE_3__["CategoriesPage"],
    }
];
let CategoriesPageRoutingModule = class CategoriesPageRoutingModule {
};
CategoriesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CategoriesPageRoutingModule);



/***/ }),

/***/ "66SL":
/*!**************************************************!*\
  !*** ./src/app/pages/categories/categories.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #e0dede!important;\n}\n\n.loader_outer {\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n\n.thumb img {\n  max-width: 36px;\n}\n\n.treeview .node-wrapper {\n  padding: 10px 10px 0px;\n}\n\n.scroll-content {\n  background-color: #eceef5;\n}\n\n.tab_btn {\n  height: 100%;\n  float: start;\n  overflow-y: auto;\n  margin-top: 4.5px;\n  background: white;\n}\n\n.tab_btn ul .tabs {\n  list-style: none;\n  font-size: 15px;\n  font-weight: 500;\n  text-transform: capitalize;\n  cursor: pointer;\n  outline: none;\n  text-align: center;\n  padding: 0 20px;\n}\n\n.tab_btn ul .active {\n  color: #f4579c;\n  background: #eceef5;\n  border-left: 5px solid #f4579c;\n}\n\n.tab_btn .tab_btn_inner {\n  height: auto;\n}\n\n.tab_content {\n  background: #eceef5;\n  height: 100%;\n  float: end;\n  overflow-y: scroll;\n}\n\n.tab_content .item .checkbox {\n  margin: 15px;\n}\n\n.tab_content .item .checkbox .checkbox-icon.checkbox-checked {\n  border-color: var(--primary_color);\n  background-color: var(--primary_color);\n}\n\n.tab_content .item .radio .radio-checked {\n  border-color: var(--primary_color);\n}\n\n.tab_content .item .radio .radio-checked .radio-inner {\n  background-color: var(--primary_color);\n}\n\n.tab_content .item-radio-checked.item .label {\n  color: var(--primary_color);\n  font-weight: 600;\n}\n\n.tab_content .item.item-radio .item-inner {\n  flex-direction: row-reverse;\n}\n\n.tab_content .active {\n  display: block;\n}\n\n.tab_content .disable {\n  display: none;\n}\n\n.tab_content_div:not(:first-child) {\n  overflow-y: auto;\n  height: 100%;\n}\n\nion-input {\n  border: 1px solid #e2e1e1;\n  border-radius: 2px;\n  margin-top: 8px;\n}\n\ninput.text-input {\n  margin: 0px 0px 0px 8px !important;\n  font-size: 1.4rem !important;\n  width: calc(100% - 16px) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NhdGVnb3JpZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLCtCQUFBO0FBQUo7O0FBRUU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUk7RUFDRSxlQUFBO0FBQ047O0FBRUU7RUFDRSxzQkFBQTtBQUNKOztBQUNFO0VBQ0UseUJBQUE7QUFFSjs7QUFBRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBRUEsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBR007RUFDRSxnQkFBQTtFQUdBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBRUEsZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFKUjs7QUFPTTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBTFI7O0FBU0k7RUFDRSxZQUFBO0FBUE47O0FBV0U7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFSSjs7QUFXTTtFQUNFLFlBQUE7QUFUUjs7QUFVUTtFQUNFLGtDQUFBO0VBQ0Esc0NBQUE7QUFSVjs7QUFhUTtFQUNFLGtDQUFBO0FBWFY7O0FBYVU7RUFDRSxzQ0FBQTtBQVhaOztBQWlCSTtFQUNFLDJCQUFBO0VBQ0EsZ0JBQUE7QUFmTjs7QUFtQk07RUFDRSwyQkFBQTtBQWpCUjs7QUFxQkk7RUFDRSxjQUFBO0FBbkJOOztBQXNCSTtFQUNFLGFBQUE7QUFwQk47O0FBeUJJO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FBdEJOOztBQTBCRTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBdkJKOztBQTBCRTtFQUNFLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQ0FBQTtBQXZCSiIsImZpbGUiOiJjYXRlZ29yaWVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW9uLWNvbnRlbnR7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZTBkZWRlIWltcG9ydGFudDtcbiAgfVxuICAubG9hZGVyX291dGVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC50aHVtYiB7XG4gICAgaW1nIHtcbiAgICAgIG1heC13aWR0aDogMzZweDtcbiAgICB9XG4gIH1cbiAgLnRyZWV2aWV3IC5ub2RlLXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDEwcHggMTBweCAwcHg7XG4gIH1cbiAgLnNjcm9sbC1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlZWY1O1xuICB9XG4gIC50YWJfYnRuIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZmxvYXQ6c3RhcnQ7XG4gICAgLy9iYWNrZ3JvdW5kOiAjZWNlZWY1O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgbWFyZ2luLXRvcDogNC41cHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG5cbiAgICB1bCB7XG4gICAgICAvL21hcmdpbi10b3A6NnB4O1xuXG4gICAgICAudGFicyB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIC8vIHdpZHRoOiAxMDAlO1xuICAgICAgICAvLyBwYWRkaW5nOiAxNXB4O1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAvLyBtYXJnaW4tYm90dG9tOiAxcHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICB9XG5cbiAgICAgIC5hY3RpdmUge1xuICAgICAgICBjb2xvcjogI2Y0NTc5YztcbiAgICAgICAgYmFja2dyb3VuZDogI2VjZWVmNTtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZjQ1NzljO1xuICAgICAgfVxuICAgIH1cblxuICAgIC50YWJfYnRuX2lubmVyIHtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG4gIH1cblxuICAudGFiX2NvbnRlbnQge1xuICAgIGJhY2tncm91bmQ6ICNlY2VlZjU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZsb2F0OmVuZDtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG5cbiAgICAuaXRlbSB7XG4gICAgICAuY2hlY2tib3gge1xuICAgICAgICBtYXJnaW46bnVsbCAxNXB4IG51bGwgbnVsbDtcbiAgICAgICAgLmNoZWNrYm94LWljb24uY2hlY2tib3gtY2hlY2tlZCB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5X2NvbG9yKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5X2NvbG9yKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAucmFkaW8ge1xuICAgICAgICAucmFkaW8tY2hlY2tlZCB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5X2NvbG9yKTtcblxuICAgICAgICAgIC5yYWRpby1pbm5lciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5X2NvbG9yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaXRlbS1yYWRpby1jaGVja2VkLml0ZW0gLmxhYmVsIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5X2NvbG9yKTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuXG4gICAgLml0ZW0uaXRlbS1yYWRpbyB7XG4gICAgICAuaXRlbS1pbm5lciB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYWN0aXZlIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIC5kaXNhYmxlIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLnRhYl9jb250ZW50X2RpdiB7XG4gICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgfVxuXG4gIGlvbi1pbnB1dCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UyZTFlMTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICB9XG5cbiAgaW5wdXQudGV4dC1pbnB1dCB7XG4gICAgbWFyZ2luOjBweCAwcHggMHB4IDhweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMS40cmVtICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE2cHgpICFpbXBvcnRhbnQ7XG4gIH1cbiJdfQ== */");

/***/ }),

/***/ "Kyq+":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categories/categories.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button mode=\"md\" fill=\"clear\" icon-only (click)=\"backHome()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{'CATEGORIES' | translate}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button mode=\"md\" fill=\"clear\" icon-only (click)=\"showSearch()\">\n        <ion-icon name=\"search\"></ion-icon>\n      </ion-button>\n      <ion-button  icon-only (click)=\"goTo('wishlist')\">\n        <ion-icon name=\"heart\"></ion-icon>\n        <ion-badge *ngIf=\"wishlist.total && wishlist.total > 0\"\n          >{{wishlist.total}}</ion-badge\n        >\n       \n      </ion-button>\n      <ion-button mode=\"md\" fill=\"clear\" icon-only (click)=\"goTo('myCart')\">\n        <ion-icon name=\"cart\"></ion-icon>\n        <ion-badge *ngIf=\"settings.all && settings.cartCount > 0\"\n          >{{settings.cartCount}}</ion-badge\n        >\n       \n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n  <ion-row style=\"height: 100%;\">\n    <ion-col size=\"4\" class=\"tab_btn\" style=\"padding: 0px;height: 100%;overflow-y: auto;\">\n        <ul style=\"padding: 0px;margin-top: 0px;\">\n          <ng-container *ngFor=\"let item of categories;let i=index\">\n            <div style=\"display: flex;flex-direction: column;justify-content: center;align-items: center;\"\n              [ngClass]=\"{'active': item.isExpanded}\"\n              (click)=\"gotoSubCategory(item)\"\n            >\n              <img\n                [src]=\"item.image ? item.image.src : 'https://ppc.tools/wp-content/themes/ppctools/img/no-thumbnail.jpg'\"\n                style=\"width: 40px; height: 40px; margin-top: 20px\"\n              />\n              <p class=\"tabs\" tappable>{{item.name.replace('amp;', '')}}</p>\n            </div>\n          </ng-container>\n        </ul>\n    </ion-col>\n    <ion-col size=\"8\" class=\"tab_content\" style=\"height: 100%;overflow-y: auto;\" >\n        <ion-row >\n          <ion-col size=\"auto\" >\n            <ng-container *ngFor=\"let item of subCategories;\">\n              <div style=\"padding: 10px 5px; background: #fff;margin: 5px;border-radius: 4px;\">\n                <p class=\"tabs\"  style=\"margin: 0; font-weight: 700; padding-left: 10px\">\n                  {{item.name.replace('amp;', '')}}\n                </p>\n                <div style=\"display: flex; flex-wrap: wrap\">\n                  <ng-container *ngIf=\"item.children.length>0\">\n                    <div\n                      *ngFor=\"let subItem of item.children;\"\n                      style=\"padding: 10px 0 5px; width: 33.33%; text-align: center\"\n                      (click)=\"goTo('product',subItem)\">\n                      <img [src]=\"subItem.image ? subItem.image.src : 'https://ppc.tools/wp-content/themes/ppctools/img/no-thumbnail.jpg'\"\n                        useImg style=\"width: 60px; height: 60px\"/>\n                      <p class=\"tabs\" style=\"margin: 0\">\n                        {{subItem.name.replace('amp;', '')}}\n                      </p>\n                    </div>\n                  </ng-container>\n                </div>\n              </div>\n            </ng-container>\n          </ion-col>\n        </ion-row>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "U5Jw":
/*!*******************************************************!*\
  !*** ./src/app/pages/categories/categories.module.ts ***!
  \*******************************************************/
/*! exports provided: CategoriesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPageModule", function() { return CategoriesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/components.module */ "j1ZV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./categories */ "hh4Q");
/* harmony import */ var ionic4_rating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic4-rating */ "Xcyb");
/* harmony import */ var angular_tree_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-tree-component */ "rDsv");
/* harmony import */ var ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-image-loader-v5 */ "JBbo");
/* harmony import */ var _categories_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./categories-routing.module */ "/0+N");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "eHpL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ "TEn/");












let CategoriesPageModule = class CategoriesPageModule {
};
CategoriesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _categories__WEBPACK_IMPORTED_MODULE_4__["CategoriesPage"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonicModule"],
            ionic4_rating__WEBPACK_IMPORTED_MODULE_5__["IonicRatingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forChild(),
            ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_7__["IonicImageLoaderModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"],
            _categories_routing_module__WEBPACK_IMPORTED_MODULE_8__["CategoriesPageRoutingModule"],
            angular_tree_component__WEBPACK_IMPORTED_MODULE_6__["TreeModule"]
        ],
        providers: [
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_10__["WebView"]
        ]
    })
], CategoriesPageModule);



/***/ }),

/***/ "YuTi":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "hh4Q":
/*!************************************************!*\
  !*** ./src/app/pages/categories/categories.ts ***!
  \************************************************/
/*! exports provided: CategoriesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPage", function() { return CategoriesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_categories_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./categories.html */ "Kyq+");
/* harmony import */ var _categories_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categories.scss */ "66SL");
/* harmony import */ var _services_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/providers */ "fC+V");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_ShareComponent_search_search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/ShareComponent/search/search */ "y3Op");







//import * as _ from 'lodash';
let CategoriesPage = class CategoriesPage {
    constructor(navCtrl, settings, modalCtrl, WC, wishlist, zone) {
        this.navCtrl = navCtrl;
        this.settings = settings;
        this.modalCtrl = modalCtrl;
        this.WC = WC;
        this.wishlist = wishlist;
        this.zone = zone;
        this.options = { displayField: "name" };
        this.page = 1;
        this.indexTab = 0;
        this.tmp = [];
    }
    getAllCategories() {
        if (this.settings.category && this.settings.category.length > 0) {
            this.categories = this.convert(this.settings.category);
            console.log(this.categories);
            for (let i = 0; i < this.categories.length; i++) {
                if (this.categories[i].name === "Women's Fashion" &&
                    this.categories[i].isExpanded != true) {
                    this.gotoSubCategory(this.categories[i]);
                }
            }
            this.zone.run(() => {
                this.nodes = this.categories;
            });
        }
        this.WC.getAllCategories().then((res) => {
            this.settings.setSettings(res, "category");
            this.categories = this.convert(res);
            console.log(this.categories);
            for (let i = 0; i < this.categories.length; i++) {
                if (this.categories[i].name === "Women's Fashion" &&
                    this.categories[i].isExpanded != true) {
                    this.gotoSubCategory(this.categories[i]);
                }
            }
            this.zone.run(() => {
                this.nodes = this.categories;
            });
        });
    }
    backHome() {
        this.navCtrl.navigateRoot("home");
    }
    ionViewWillEnter() {
        console.log("ionViewDidEnter CategoriesPage");
        this.getAllCategories();
    }
    gotoSubCategory(item) {
        console.log(item);
        this.subSubCategories = [];
        for (let i = 0; i < this.categories.length; i++) {
            if (this.categories[i].id === item.id &&
                this.categories[i].isExpanded != true) {
                this.categories[i].isExpanded = true;
            }
            else {
                this.categories[i].isExpanded = false;
            }
        }
        this.subCategories = item.children;
    }
    convert(dataList) {
        Object.keys(dataList).forEach((key) => {
            dataList[key].isExpanded = false;
        });
        var tree = [], mappedArr = {}, arrElem, mappedElem;
        // First map the nodes of the array to an object -> create a hash table.
        for (var i = 0, len = dataList.length; i < len; i++) {
            arrElem = dataList[i];
            mappedArr[arrElem.id] = arrElem;
            mappedArr[arrElem.id]["children"] = [];
        }
        for (var id in mappedArr) {
            if (mappedArr.hasOwnProperty(id)) {
                mappedElem = mappedArr[id];
                // If the element is not at the root level, add it to its parent array of children.
                if (mappedElem.parent != 0) {
                    mappedArr[mappedElem["parent"]]["children"].push(mappedElem);
                }
                // If the element is at the root level, add it to first level elements array.
                else {
                    tree.push(mappedElem);
                }
            }
        }
        return tree;
    }
    showSearch() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: src_app_ShareComponent_search_search__WEBPACK_IMPORTED_MODULE_6__["SearchPage"],
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            if (data && data.page) {
                this.goTo(data.page, data.params);
            }
        });
    }
    goTo(page, params) {
        let navigationExtras = { queryParams: params };
        this.navCtrl.navigateForward([page], navigationExtras);
    }
};
CategoriesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_3__["SettingsProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_3__["WooCommerceProvider"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_3__["WishlistProvider"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] }
];
CategoriesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: "page-categories",
        template: _raw_loader_categories_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_categories_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CategoriesPage);



/***/ })

}]);
//# sourceMappingURL=pages-categories-categories-module.js.map