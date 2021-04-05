(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-product-product-module"],{

/***/ "0bjF":
/*!*********************************************************!*\
  !*** ./src/app/pages/product/product-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ProductPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPageRoutingModule", function() { return ProductPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product */ "zbmi");




const routes = [
    {
        path: '',
        component: _product__WEBPACK_IMPORTED_MODULE_3__["ProductPage"],
    }
];
let ProductPageRoutingModule = class ProductPageRoutingModule {
};
ProductPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ProductPageRoutingModule);



/***/ }),

/***/ "0nXY":
/*!************************************************!*\
  !*** ./src/app/pages/product/filter/filter.ts ***!
  \************************************************/
/*! exports provided: FilterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPage", function() { return FilterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_filter_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./filter.html */ "yfp/");
/* harmony import */ var _filter_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter.scss */ "5aUB");
/* harmony import */ var _services_settings_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/settings/settings */ "3tmi");
/* harmony import */ var _services_woocommerce_woocommerce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/woocommerce/woocommerce */ "OkR+");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");









let FilterPage = class FilterPage {
    constructor(navCtrl, route, zone, settings, fb, viewCtrl, WC, platform) {
        this.navCtrl = navCtrl;
        this.route = route;
        this.zone = zone;
        this.settings = settings;
        this.fb = fb;
        this.viewCtrl = viewCtrl;
        this.WC = WC;
        this.categories = [];
        this.dir = platform.isRTL ? 'rtl' : 'ltr';
        ;
    }
    ionViewDidEnter() {
        console.log('ionViewDidEnter FilterPage');
        this.toggleClass(this.items[this.active]);
        this.priceForm = this.fb.group({
            min_price: [this.items[0].min_price || 0],
            max_price: [this.items[0].max_price || '']
        });
        if (this.settings.category && this.settings.category.length > 0) {
            this.zone.run(() => {
                this.categories = this.settings.category;
            });
        }
        this.loadCategories();
    }
    loadCategories() {
        this.WC.getAllCategories().then((res) => {
            this.settings.setSettings(res, "category");
            this.zone.run(() => {
                this.categories = res;
            });
        }, err => {
            console.log(err);
        });
    }
    toggleClass(item) {
        for (let i = 0; i < this.items.length; i++) {
            if (item.slug === this.items[i].slug) {
                this.items[i].active = true;
            }
            else {
                this.items[i].active = false;
            }
        }
    }
    close() {
        this.viewCtrl.dismiss(null);
    }
    submit() {
        this.items[0].min_price = this.priceForm.value.min_price;
        this.items[0].max_price = this.priceForm.value.max_price;
        this.viewCtrl.dismiss(this.items);
    }
    count(item) {
        let i = 0;
        for (let j in item.options) {
            if (item.options[j].checked) {
                i++;
            }
        }
        return i > 0 ? " (" + i + ")" : '';
    }
    setName() {
        for (let i in this.categories) {
            if (this.categories[i].id == this.items[1].id) {
                this.items[1].cat_name = this.categories[i].name;
            }
        }
    }
    reset() {
        this.priceForm.controls['min_price'].setValue("0");
        this.priceForm.controls['max_price'].setValue("");
        this.items[1].cat_name = '';
        this.items[1].id = '';
        for (let i = 2; i < this.items.length; i++) {
            for (let j in this.items[i].options) {
                this.items[i].options[j].checked = false;
            }
        }
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
            mappedArr[arrElem.id]['children'] = [];
        }
        for (var id in mappedArr) {
            if (mappedArr.hasOwnProperty(id)) {
                mappedElem = mappedArr[id];
                // If the element is not at the root level, add it to its parent array of children.
                if (mappedElem.parent != 0) {
                    mappedArr[mappedElem['parent']]['children'].push(mappedElem);
                }
                // If the element is at the root level, add it to first level elements array.
                else {
                    tree.push(mappedElem);
                }
            }
        }
        return tree;
    }
};
FilterPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgZone"] },
    { type: _services_settings_settings__WEBPACK_IMPORTED_MODULE_3__["SettingsProvider"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _services_woocommerce_woocommerce__WEBPACK_IMPORTED_MODULE_4__["WooCommerceProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] }
];
FilterPage.propDecorators = {
    items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
    active: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }]
};
FilterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'page-filter',
        template: _raw_loader_filter_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_filter_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FilterPage);



/***/ }),

/***/ "1R7p":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/sort/sort.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\n  <ion-toolbar>\n    <ion-title>{{'SORT' | translate}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button icon-only type=\"button\" (click)=\"dismiss()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n<ion-content>\n  <ion-radio-group [(ngModel)]=\"sortby\" (ionChange)=\"dismiss(sortby)\">\n    <ion-list lines=\"none\" >\n\n      <ion-item mode=\"ios\">\n        <ion-label>{{'POPULARITY' | translate}}</ion-label>\n        <ion-radio mode=\"ios\" value=\"popularity\"></ion-radio>\n      </ion-item>\n  \n      <ion-item mode=\"ios\">\n        <ion-label>{{'AVERAGE_RATING' | translate}}</ion-label>\n        <ion-radio mode=\"ios\" value=\"rating\"></ion-radio>\n      </ion-item>\n  \n      <ion-item mode=\"ios\">\n        <ion-label>{{'NEWNESS' | translate}}</ion-label>\n        <ion-radio mode=\"ios\" value=\"date\"></ion-radio>\n      </ion-item>\n  \n      <ion-item mode=\"ios\">\n        <ion-label>{{'PRICE_ASC' | translate}}</ion-label>\n        <ion-radio mode=\"ios\" value=\"price_asc\"></ion-radio>\n      </ion-item>\n  \n      <ion-item mode=\"ios\">\n        <ion-label>{{'PRICE_DESC' | translate}}</ion-label>\n        <ion-radio mode=\"ios\" value=\"price_desc\"></ion-radio>\n      </ion-item>\n  \n    </ion-list>\n  </ion-radio-group>\n</ion-content>\n");

/***/ }),

/***/ "5aUB":
/*!**************************************************!*\
  !*** ./src/app/pages/product/filter/filter.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tab_btn {\n  width: 100%;\n  height: 100%;\n  float: start;\n  background: #ECEEF5;\n  overflow-y: auto;\n  margin-top: 4.5px;\n}\n.tab_btn ul .tabs {\n  list-style: none;\n  width: 100%;\n  padding: 15px;\n  font-size: 15px;\n  font-weight: 500;\n  text-align: \"start\";\n  text-transform: capitalize;\n  margin-bottom: 1px;\n  cursor: pointer;\n  outline: none;\n}\n.tab_btn ul .active {\n  background: #fff;\n}\n.tab_btn .tab_btn_inner {\n  height: auto;\n}\n.tab_content {\n  background: #fff;\n  width: 100%;\n  height: 100%;\n  float: end;\n}\n.tab_content .item .checkbox {\n  margin: 15px;\n}\n.tab_content .item .checkbox .checkbox-icon.checkbox-checked {\n  border-color: var(--primary_color);\n  background-color: var(--primary_color);\n}\n.tab_content .item .radio .radio-checked {\n  border-color: var(--primary_color);\n}\n.tab_content .item .radio .radio-checked .radio-inner {\n  background-color: var(--primary_color);\n}\n.tab_content .item-radio-checked.item .label {\n  color: var(--primary_color);\n  font-weight: 600;\n}\n.tab_content .item.item-radio .item-inner {\n  flex-direction: row-reverse;\n}\n.tab_content .active {\n  display: block;\n}\n.tab_content .disable {\n  display: none;\n}\n.tab_content_div:not(:first-child) {\n  overflow-y: auto;\n  height: 100%;\n}\nion-input {\n  border: 1px solid #e2e1e1;\n  border-radius: 2px;\n  margin-top: 8px;\n}\ninput.text-input {\n  margin: 0px 0px 0px;\n  margin: 8px !important;\n  font-size: 1.4rem !important;\n  width: calc(100% - 16px) !important;\n}\n::placeholder {\n  font-size: 1.3rem;\n}\n.footer {\n  background: #fff;\n  padding: 8px;\n}\n.footer .col {\n  padding: 0px;\n}\n.footer .col .button {\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2ZpbHRlci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBREo7QUFNTTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQUpSO0FBT007RUFDRSxnQkFBQTtBQUxSO0FBU0k7RUFDRSxZQUFBO0FBUE47QUFXRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBUko7QUFZTTtFQUNHLFlBQUE7QUFWVDtBQVdRO0VBQ0Usa0NBQUE7RUFDQSxzQ0FBQTtBQVRWO0FBY1E7RUFDRSxrQ0FBQTtBQVpWO0FBY1U7RUFDRSxzQ0FBQTtBQVpaO0FBbUJJO0VBQ0UsMkJBQUE7RUFDQSxnQkFBQTtBQWpCTjtBQXFCTTtFQUNFLDJCQUFBO0FBbkJSO0FBdUJJO0VBQ0UsY0FBQTtBQXJCTjtBQXdCSTtFQUNFLGFBQUE7QUF0Qk47QUE0Qkk7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUF6Qk47QUE2QkU7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQTFCSjtBQTZCRTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLG1DQUFBO0FBMUJKO0FBNkJFO0VBQ0UsaUJBQUE7QUExQko7QUE2QkU7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUExQko7QUE0Qkk7RUFDRSxZQUFBO0FBMUJOO0FBNEJNO0VBQ0UsV0FBQTtBQTFCUiIsImZpbGUiOiJmaWx0ZXIuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4gIC50YWJfYnRuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZmxvYXQ6c3RhcnQ7XG4gICAgYmFja2dyb3VuZDogI0VDRUVGNTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDQuNXB4O1xuXG4gICAgdWwge1xuICAgICAgLy9tYXJnaW4tdG9wOjZweDtcblxuICAgICAgLnRhYnMge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICB0ZXh0LWFsaWduOidzdGFydCc7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnRhYl9idG5faW5uZXIge1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cbiAgfVxuXG4gIC50YWJfY29udGVudCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZmxvYXQ6ZW5kO1xuICAgIC8vb3ZlcmZsb3cteTogc2Nyb2xsO1xuXG4gICAgLml0ZW0ge1xuICAgICAgLmNoZWNrYm94IHtcbiAgICAgICAgIG1hcmdpbjpudWxsIDE1cHggbnVsbCBudWxsO1xuICAgICAgICAuY2hlY2tib3gtaWNvbi5jaGVja2JveC1jaGVja2VkIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnlfY29sb3IpO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnlfY29sb3IpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5yYWRpbyB7XG4gICAgICAgIC5yYWRpby1jaGVja2VkIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnlfY29sb3IpO1xuXG4gICAgICAgICAgLnJhZGlvLWlubmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnlfY29sb3IpO1xuXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLml0ZW0tcmFkaW8tY2hlY2tlZC5pdGVtIC5sYWJlbCB7XG4gICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeV9jb2xvcik7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cblxuICAgIC5pdGVtLml0ZW0tcmFkaW8ge1xuICAgICAgLml0ZW0taW5uZXIge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmFjdGl2ZSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAuZGlzYWJsZSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC50YWJfY29udGVudF9kaXYge1xuXG4gICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgfVxuXG4gIGlvbi1pbnB1dCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UyZTFlMTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICB9XG5cbiAgaW5wdXQudGV4dC1pbnB1dCB7XG4gICAgbWFyZ2luOjBweCAwcHggMHB4IG51bGw7XG4gICAgbWFyZ2luOm51bGwgbnVsbCBudWxsIDhweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMS40cmVtICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE2cHgpICFpbXBvcnRhbnQ7XG4gIH1cblxuICA6OnBsYWNlaG9sZGVyIHtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgfVxuXG4gIC5mb290ZXIge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZzogOHB4O1xuXG4gICAgLmNvbCB7XG4gICAgICBwYWRkaW5nOiAwcHg7XG5cbiAgICAgIC5idXR0b24ge1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ== */");

/***/ }),

/***/ "Aw4v":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/product.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button mode=\"md\" fill=\"clear\" icon-only (click)=\"back()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title><span [innerHTML]=\"params.search || ('PRODUCTS' | translate)\"></span></ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button mode=\"md\" fill=\"clear\" icon-only (click)=\"showSearch()\">\n        <ion-icon name=\"search\"></ion-icon>\n      </ion-button>\n      <ion-button mode=\"md\" ion-button icon-only (click)=\"goTo('wishlist')\">\n        <ion-icon name=\"heart\"></ion-icon>\n        <ion-badge *ngIf=\"wishlist.total && wishlist.total > 0\">{{wishlist.total}}</ion-badge >\n       \n      </ion-button>\n      <ion-button mode=\"md\" fill=\"clear\" icon-only (click)=\"goTo('myCart')\">\n        <ion-icon name=\"cart\"></ion-icon>\n        <ion-badge *ngIf=\"settings.all && settings.cartCount > 0\">{{settings.cartCount}}</ion-badge>\n      \n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-row class=\"sorting\">\n    <ion-col size=\"4\">\n      <ion-button expand=\"full\" slots=\"star\" fill=\"clear\"  (click)=\"filter(1)\">\n        <ion-icon name=\"menu-outline\"></ion-icon>\n        <span [innerHTML]=\"this.items[1].cat_name || 'CATEGORIES' | translate\"></span>\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"4\">\n      <ion-button  expand=\"full\" slots=\"star\" fill=\"clear\" (click)=\"sort()\">\n        <ion-icon name=\"swap-horizontal-outline\"></ion-icon>\n        {{'SORT' | translate}}\n      </ion-button>\n    </ion-col>\n    <ion-col  size=\"4\">\n      <ion-button expand=\"full\" slots=\"star\" fill=\"clear\" (click)=\"filter(0)\">\n        <ion-icon name=\"funnel-outline\"></ion-icon>\n        {{'FILTER' | translate}}\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-header>\n\n<ion-content no-padding>\n  <!-- <div class=\"loader_outer\" *ngIf=\"show_loader\">\n    <div class=\"loader\"></div>\n  </div> -->\n\n  <ion-grid *ngIf=\"show_loader\">\n    <ion-row>\n      <ion-col col-6 col-md-3 col-sm-4 no-padding *ngFor=\"let x of [0,1,2,3,4,5,6,7]\">\n        <skeleton-item no-animated height=\"160px\"></skeleton-item>\n        <skeleton-item no-animated></skeleton-item>\n        <skeleton-item no-animated width=\"50%\"></skeleton-item>\n        <skeleton-item no-animated width=\"70%\" height=\"10px\"></skeleton-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div class=\"div\" *ngIf=\"showEmpty\">\n    <ion-grid>\n      <ion-row align-items-center>\n        <ion-col align-self-center text-center>\n          <ion-icon\n            name=\"cart\"\n            class=\"accent\"\n            style=\"transform: scale(3)\"\n          ></ion-icon>\n          <h4 margin-top class=\"accent\">{{'NO_PRODUCTS' | translate}}</h4>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <ion-virtual-scroll\n    *ngIf=\"!show_loader && categories && categories.length>0\"\n    scrollX=\"true\"\n    class=\"category-slide\"\n  >\n    <ion-row nowrap>\n      <ng-container *ngFor=\"let x of categories; let i=index\">\n        <ion-col col-auto no-padding>\n          <img-loader\n            class=\"img\"\n            width=\"90px\"\n            height=\"90px\"\n            backgroundSize=\"cover\"\n            [src]=\"x.image ? x.image.src : ''\"\n            tappable\n            (click)=\"goTo('product', x)\"\n          >\n          </img-loader>\n          <h5 [innerHTML]=\"x.name\"></h5>\n        </ion-col>\n      </ng-container>\n    </ion-row>\n  </ion-virtual-scroll>\n\n  <ion-grid *ngIf=\"!show_loader\">\n    <ion-row>\n      <ion-col size=\"6\" size-md=\"3\" size-sm=\"4\" *ngFor=\"let product of products;let i=index\">\n        <div class=\"product-item\">\n          <ion-button class=\"fav\" (click)=\"setFav(product)\" fill=\"clear\" Slots=\"icon-only\" >\n            <ion-icon  name=\"heart{{!wishlist.isFav(product) ? '-outline' : ''}}\"></ion-icon>\n          </ion-button>\n          <div (click)=\"goTo('productdetail', product)\">\n            <img-loader [src]=\"product.images[0].src\" useImg>\n              <ion-badge *ngIf=\"product.on_sale\">{{product | discount}}</ion-badge>\n            </img-loader>\n            <h5 [innerHTML]=\"product.name\" class=\"product-name\"></h5>\n            <div class=\"price\">\n              <span [innerHTML]=\"product.price_html\" style=\"font-size: 14px\"></span>\n            </div>\n            <div class=\"rate\">\n              <rating  *ngIf=\"product.average_rating\" max=\"5\" readOnly=\"true\"  [(ngModel)]=\"product.average_rating\">\n              </rating>\n              <span class=\"rating_count\" *ngIf=\"product.rating_count\"\n                >({{product.rating_count}})</span\n              >\n            </div>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-infinite-scroll *ngIf=\"hasMore\" (ionInfinite)=\"loadMoreProducts($event)\">\n    <ion-infinite-scroll-content> </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n");

/***/ }),

/***/ "YfyC":
/*!*******************************************************!*\
  !*** ./src/app/pages/product/filter/filter.module.ts ***!
  \*******************************************************/
/*! exports provided: FilterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPageModule", function() { return FilterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter */ "0nXY");
/* harmony import */ var angular_tree_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-tree-component */ "rDsv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








let FilterPageModule = class FilterPageModule {
};
FilterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _filter__WEBPACK_IMPORTED_MODULE_3__["FilterPage"],
        ],
        entryComponents: [_filter__WEBPACK_IMPORTED_MODULE_3__["FilterPage"]],
        exports: [_filter__WEBPACK_IMPORTED_MODULE_3__["FilterPage"]],
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"].forChild(),
            angular_tree_component__WEBPACK_IMPORTED_MODULE_4__["TreeModule"]
        ],
    })
], FilterPageModule);



/***/ }),

/***/ "bufi":
/*!***************************************************!*\
  !*** ./src/app/pages/product/sort/sort.module.ts ***!
  \***************************************************/
/*! exports provided: SortPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortPageModule", function() { return SortPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sort */ "qMPz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






let SortPageModule = class SortPageModule {
};
SortPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _sort__WEBPACK_IMPORTED_MODULE_3__["SortPage"],
        ],
        entryComponents: [_sort__WEBPACK_IMPORTED_MODULE_3__["SortPage"]],
        exports: [_sort__WEBPACK_IMPORTED_MODULE_3__["SortPage"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"].forChild()
        ],
    })
], SortPageModule);



/***/ }),

/***/ "dFHt":
/*!*************************************************!*\
  !*** ./src/app/pages/product/product.module.ts ***!
  \*************************************************/
/*! exports provided: ProductPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPageModule", function() { return ProductPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product */ "zbmi");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _product_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-routing.module */ "0bjF");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");
/* harmony import */ var ionic4_rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic4-rating */ "Xcyb");
/* harmony import */ var ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-image-loader-v5 */ "JBbo");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "iTUp");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "eHpL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _sort_sort_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sort/sort.module */ "bufi");
/* harmony import */ var _filter_filter_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./filter/filter.module */ "YfyC");














let ProductPageModule = class ProductPageModule {
};
ProductPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _product__WEBPACK_IMPORTED_MODULE_2__["ProductPage"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonicModule"],
            _sort_sort_module__WEBPACK_IMPORTED_MODULE_12__["SortPageModule"], _filter_filter_module__WEBPACK_IMPORTED_MODULE_13__["FilterPageModule"],
            _product_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProductPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild(),
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
            ionic4_rating__WEBPACK_IMPORTED_MODULE_7__["IonicRatingModule"],
            ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_8__["IonicImageLoaderModule"],
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__["PipesModule"]
        ],
        providers: [
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_10__["WebView"]
        ]
    })
], ProductPageModule);



/***/ }),

/***/ "qMPz":
/*!********************************************!*\
  !*** ./src/app/pages/product/sort/sort.ts ***!
  \********************************************/
/*! exports provided: SortPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortPage", function() { return SortPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sort_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sort.html */ "1R7p");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let SortPage = class SortPage {
    constructor(navCtrl, route, viewCtrl) {
        this.navCtrl = navCtrl;
        this.route = route;
        this.viewCtrl = viewCtrl;
        this.firstTime = true;
        this.sortby = "popularity";
    }
    ionViewDidEnter() {
        console.log('ionViewDidEnter SortPage');
        console.log(this.sortby);
        if (this.sortby == "") {
            this.sortby = "popularity";
        }
    }
    dismiss(data) {
        /*if(data && this.firstTime){
          this.firstTime=!this.firstTime;
          return;
        }*/
        this.viewCtrl.dismiss(data);
    }
};
SortPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
SortPage.propDecorators = {
    sortby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
SortPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'page-sort',
        template: _raw_loader_sort_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], SortPage);



/***/ }),

/***/ "xZJO":
/*!********************************************!*\
  !*** ./src/app/pages/product/product.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sorting {\n  border: 1px solid #fff;\n  background: #fff;\n  height: 40px;\n}\n.sorting ion-col {\n  padding: 0px;\n}\n.sorting ion-col ion-button {\n  color: var(--primary_text_color) !important;\n  margin: 0;\n}\n.loader_outer {\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100%;\n}\n.grid {\n  padding: 0px !important;\n}\n.grid .row {\n  margin: 0px !important;\n  padding: 4px !important;\n}\n.grid .col {\n  padding: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2R1Y3Quc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQUo7QUFDSTtFQUNFLFlBQUE7QUFDTjtBQUFNO0VBQ0UsMkNBQUE7RUFDQSxTQUFBO0FBRVI7QUFHRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUdFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBQUo7QUFHRTtFQUNFLHVCQUFBO0FBQUo7QUFFSTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7QUFBTjtBQUdJO0VBQ0UsWUFBQTtBQUROIiwiZmlsZSI6InByb2R1Y3Quc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAuc29ydGluZyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBpb24tY29sIHtcbiAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeV90ZXh0X2NvbG9yKSAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmxvYWRlcl9vdXRlciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAuZ3JpZCB7XG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG5cbiAgICAucm93IHtcbiAgICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICBwYWRkaW5nOiA0cHggIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuY29sIHtcbiAgICAgIHBhZGRpbmc6IDFweDtcbiAgICB9XG4gIH1cbiJdfQ== */");

/***/ }),

/***/ "yfp/":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/filter/filter.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\n  <ion-toolbar>\n    <ion-title>{{'FILTER' | translate}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button icon-only type=\"button\" (click)=\"close()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-row style=\"height: 100%;\">\n    <ion-col size=\"4\">\n      <div class=\"tab_btn\">\n        <ul style=\"padding: 0px;\">\n          <ng-container *ngFor=\"let item of items;let i=index\">\n            <li *ngIf=\"i==0\" class=\"tabs\" tappable (click)=\"toggleClass(item)\" [ngClass]=\"{'active': item.active}\">\n              {{ item.name}}\n            </li>\n            <li *ngIf=\"i==1\" class=\"tabs\" tappable (click)=\"toggleClass(item)\" [ngClass]=\"{'active': item.active}\">\n              {{ item.name }} <span *ngIf=\"this.items[1].id && this.items[1].id!=''\">&#9679;</span>\n            </li>\n            <li *ngIf=\"i>1 && item.options.length>0 \" class=\"tabs tab_1\" tappable (click)=\"toggleClass(item)\" [ngClass]=\"{'active': item.active}\">\n              {{ item.name +count(item)}}\n            </li>\n    \n          </ng-container>\n    \n        </ul>\n      </div>\n    </ion-col>\n    <ion-col size=\"8\">\n      <div class=\"tab_content\">\n        <ng-container *ngFor=\"let item of items;let i=index\">\n          <div class=\"tab_content_div\" *ngIf=\"i==0;\" [ngClass]=\"item.active ? 'active' : 'disable'\" padding>\n            <form [formGroup]=\"priceForm\" novalidate>\n              <ion-item lines=\"none\">\n                <ion-label position=\"stacked\">{{\"MIN_PRICE\" | translate}}</ion-label>\n                <ion-input formControlName=\"min_price\" [dir]=\"dir\"></ion-input>\n              </ion-item> \n              <ion-item lines=\"none\">\n                <ion-label position=\"stacked\">{{\"MAX_PRICE\" | translate}}</ion-label>\n                <ion-input formControlName=\"max_price\" [dir]=\"dir\"></ion-input>\n              </ion-item>\n            </form>\n          </div>\n    \n          <div class=\"tab_content_div\" *ngIf=\"i==1\" [ngClass]=\"item.active ? 'active' : 'disable'\" padding>\n            <ion-list lines =\"none\" >\n              <ion-radio-group [(ngModel)]=\"item.id\" (ionChange)=\"setName()\">\n                <ion-item no-padding *ngFor=\"let cat of categories\">\n                  <ion-label>{{cat.name}} </ion-label>\n                  <ion-radio [value]=\"cat.id\"></ion-radio>\n                </ion-item> \n              </ion-radio-group>\n            </ion-list>\n          </div>\n    \n          <div class=\"tab_content_div\" *ngIf=\"i > 1 && item.options.length>0\" [ngClass]=\"item.active ? 'active' : 'disable'\"  padding>\n            <ion-list lines=\"none\">\n              <ion-item no-padding *ngFor=\"let option of item.options\">\n                <ion-label text-capitalize><span [innerHTML]=\"option.name\"></span></ion-label>\n                <ion-checkbox [(ngModel)]=\"option.checked\"></ion-checkbox>\n              </ion-item>\n            </ion-list>\n          </div>\n        </ng-container>\n      </div>\n    </ion-col>\n    </ion-row>\n</ion-content>\n<ion-footer>\n  <ion-row>\n    <ion-col size=\"4\">\n      <ion-button expand=\"block\"  fill=\"clear\" class=\"accent\"  (click)=\"reset()\">\n        {{'RESET_ALL'|translate}}\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"8\">\n      <ion-button expand=\"block\"  class=\"accent-background\"  (click)=\"submit()\">\n        {{'SHOW_RESULTS'|translate}}\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n");

/***/ }),

/***/ "zbmi":
/*!******************************************!*\
  !*** ./src/app/pages/product/product.ts ***!
  \******************************************/
/*! exports provided: ProductPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPage", function() { return ProductPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_product_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./product.html */ "Aw4v");
/* harmony import */ var _product_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.scss */ "xZJO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/providers */ "fC+V");
/* harmony import */ var _decorator_page_track_decorator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../decorator/page-track.decorator */ "zUQQ");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _filter_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./filter/filter */ "0nXY");
/* harmony import */ var _sort_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sort/sort */ "qMPz");
/* harmony import */ var src_app_ShareComponent_search_search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/ShareComponent/search/search */ "y3Op");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");












let ProductPage = class ProductPage {
    constructor(navCtrl, route, WC, wishlist, zone, toast, translate, settings, modalCtrl) {
        this.navCtrl = navCtrl;
        this.route = route;
        this.WC = WC;
        this.wishlist = wishlist;
        this.zone = zone;
        this.toast = toast;
        this.translate = translate;
        this.settings = settings;
        this.modalCtrl = modalCtrl;
        this.params = {};
        this.page = 1;
        this.hasMore = false;
        this.sortby = 'popularity';
        this.per_page = 30;
        this.show_loader = true;
        this.showEmpty = false;
        this.filterData = {};
        this.translate.get(['CATEGORIES', 'PRICE']).subscribe((x) => {
            this.items = [
                { name: x.PRICE, slug: "native_price", min_price: this.settings.appSettings.price.min || 0, max_price: this.settings.appSettings.price.max || '' },
                { name: x.CATEGORIES, slug: "product_cat" }
            ];
        });
        this.route.queryParams.subscribe(params => {
            console.log(params);
            this.items[1].id = params['id'];
            this.items[1].cat_name = params['name'];
            this.params.search = params.search_data ? params['search_data'] : "";
            this.sortby = params.sortby ? params['sortby'] : "popularity";
            this.on_sale = params['on_sale'] ? params['on_sale'] : false;
            this.featured = params['featured'] ? params['featured'] : false;
            if (this.items[1].id && this.settings.category && this.settings.category.length > 0) {
                this.categories = this.settings.category.filter((item) => {
                    return item.parent == this.items[1].id;
                });
            }
            else if (this.items[1].id) {
                this.WC.getAllCategories(this.items[1].id).then((res) => {
                    this.categories = res;
                }, err => {
                    console.log(err);
                });
            }
            this.loadProducts();
        });
        // this.WC.getCustomAttributes().subscribe((res: any) => {
        //   console.log(res);
        //   res.forEach(element => {
        //     element.active = false;
        //   });
        //   //this.items.length = 2;
        //   this.items = this.items.concat(res);
        //   console.log(this.items);
        // });
    }
    back() {
        this.navCtrl.back();
    }
    ionViewDidEnter() {
        console.log('ionViewDidEnter ProductPage');
    }
    showSearch() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: src_app_ShareComponent_search_search__WEBPACK_IMPORTED_MODULE_10__["SearchPage"],
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            if (data && data.page) {
                this.goTo(data.page, data.params);
            }
        });
    }
    loadProducts() {
        this.show_loader = true;
        this.products = [];
        this.WC.getCustomProducts(this.page, this.per_page, this.sortby, this.items[1].id, this.params.search, this.items[0].min_price, this.items[0].max_price, this.on_sale, this.featured, this.filterData).then((res) => {
            this.show_loader = false;
            console.log(res);
            this.zone.run(() => {
                this.products = res;
                this.hasMore = (res.length == this.per_page);
                this.showEmpty = (res.length == 0);
                let p = this.joinProductIds(this.products);
                this.WC.getCustomAttributes(p).then((res) => {
                    res.forEach(element => {
                        element.active = false;
                    });
                    let newFilter = [];
                    for (let i = 0; i < res.length; i++) {
                        let flag = 0;
                        for (let j = 2; j < this.items.length; j++) {
                            //console.log(this.items[j].id);
                            if (res[i].id == this.items[j].id) {
                                flag = j;
                                break;
                            }
                        }
                        if (flag > 0) {
                            newFilter.push(this.items[flag]);
                        }
                        else {
                            newFilter.push(res[i]);
                        }
                        // newFilter.sort((a, b)=> { 
                        //   return a.id - b.id;
                        // });
                    }
                    this.items.length = 2;
                    this.items = this.items.concat(newFilter);
                    console.log(this.items);
                });
            });
        }, (err) => {
            this.toast.showError();
            this.show_loader = false;
            console.log(err);
        });
    }
    loadMoreProducts(event) {
        this.page++;
        this.WC.getCustomProducts(this.page, this.per_page, this.sortby, this.items[1].id, this.params.search, this.items[0].min_price, this.items[0].max_price, this.on_sale, this.featured, this.filterData).then((res) => {
            console.log(res);
            this.zone.run(() => {
                this.products = this.products.concat(res);
                let p = this.joinProductIds(this.products);
                this.WC.getCustomAttributes(p).then((res) => {
                    res.forEach(element => {
                        element.active = false;
                    });
                    this.items.length = 2;
                    this.items = this.items.concat(res);
                    console.log(this.items);
                });
                event.complete();
                if (res.length == this.per_page) {
                    this.hasMore = true;
                }
                else {
                    this.hasMore = false;
                    event.enable(false);
                }
            }, (err) => {
                this.toast.showError();
                console.log(err);
            });
        });
    }
    setFav(product) {
        //  this.translate.get(['REMOVE_WISH', 'ADDED_WISH']).subscribe( x=> {
        this.wishlist.add(product);
        // });
    }
    sort() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _sort_sort__WEBPACK_IMPORTED_MODULE_9__["SortPage"],
                componentProps: { sortby: this.sortby },
                cssClass: 'sort'
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            if (data) {
                this.sortby = data;
                this.page = 1;
                this.loadProducts();
            }
        });
    }
    joinProductIds(p) {
        let arr = [];
        for (let i of p) {
            if (i.attributes.length > 0) {
                arr.push(i.id);
            }
        }
        return arr.join(",");
    }
    filter(active) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _filter_filter__WEBPACK_IMPORTED_MODULE_8__["FilterPage"],
                componentProps: { items: this.items, active: active },
                cssClass: 'filter'
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            if (data) {
                this.items = data;
                console.log(this.items);
                this.page = 1;
                this.filterData = {};
                for (let i = 2; i < this.items.length; i++) {
                    let tmp = [];
                    for (let j in this.items[i].options) {
                        if (this.items[i].options[j].checked)
                            tmp.push(this.items[i].options[j].slug);
                    }
                    if (tmp.length > 0)
                        this.filterData[this.items[i].slug] = tmp;
                }
                console.log(this.filterData);
                this.loadProducts();
            }
        });
    }
    goTo(page, params) {
        console.log(page);
        console.log(params);
        let navigationExtras = { queryParams: params };
        this.navCtrl.navigateForward([page], navigationExtras);
    }
};
ProductPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_5__["WooCommerceProvider"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_5__["WishlistProvider"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_5__["ToastProvider"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_5__["SettingsProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
ProductPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_decorator_page_track_decorator__WEBPACK_IMPORTED_MODULE_6__["PageTrack"])({}),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'page-product',
        template: _raw_loader_product_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_product_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProductPage);



/***/ })

}]);
//# sourceMappingURL=pages-product-product-module.js.map