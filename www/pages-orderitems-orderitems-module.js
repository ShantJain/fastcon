(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-orderitems-orderitems-module"],{

/***/ "4CDP":
/*!*******************************************************!*\
  !*** ./src/app/pages/orderitems/orderitems.module.ts ***!
  \*******************************************************/
/*! exports provided: OrderitemsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderitemsPageModule", function() { return OrderitemsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _orderitems_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orderitems-routing.module */ "kOUV");
/* harmony import */ var _orderitems_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orderitems.page */ "i1s8");
/* harmony import */ var _reasons_reasons_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reasons/reasons.component */ "O+9Z");
/* harmony import */ var ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-image-loader-v5 */ "JBbo");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "eHpL");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "iTUp");











let OrderitemsPageModule = class OrderitemsPageModule {
};
OrderitemsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _orderitems_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderitemsPageRoutingModule"],
            ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_8__["IonicImageLoaderModule"],
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_10__["PipesModule"]
        ],
        providers: [_ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_9__["WebView"]],
        declarations: [_orderitems_page__WEBPACK_IMPORTED_MODULE_6__["OrderitemsPage"], _reasons_reasons_component__WEBPACK_IMPORTED_MODULE_7__["ReasonsComponent"]],
        entryComponents: [_reasons_reasons_component__WEBPACK_IMPORTED_MODULE_7__["ReasonsComponent"]],
        exports: [_reasons_reasons_component__WEBPACK_IMPORTED_MODULE_7__["ReasonsComponent"]]
    })
], OrderitemsPageModule);



/***/ }),

/***/ "52dP":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/orderitems/reasons/reasons.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header *ngIf=\"_dataRes\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button mode=\"md\" fill=\"clear\" (click)=\"dismiss()\">\n        <ion-icon style=\"font-size: 2em;\" name=\"close-circle\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{_dataRes.tag}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-item *ngFor=\"let re of res\" (click)=\"selecRes(re)\">\n      <ion-label>\n        {{re.element}}\n      </ion-label>\n    </ion-item>\n</ion-content> \n");

/***/ }),

/***/ "O+9Z":
/*!***************************************************************!*\
  !*** ./src/app/pages/orderitems/reasons/reasons.component.ts ***!
  \***************************************************************/
/*! exports provided: ReasonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReasonsComponent", function() { return ReasonsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_reasons_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./reasons.component.html */ "52dP");
/* harmony import */ var _reasons_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reasons.component.scss */ "fnoR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let ReasonsComponent = class ReasonsComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.res = [];
    }
    set data(d) {
        this._dataRes = JSON.parse(d);
        console.log(this._dataRes);
        this._dataRes.reasons.forEach(element => {
            console.log(element);
            this.res.push({ "element": element });
        });
    }
    ngOnInit() { }
    dismiss() {
        this.modalCtrl.dismiss();
    }
    selecRes(re) {
        this.modalCtrl.dismiss({
            'data': re
        });
    }
};
ReasonsComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
ReasonsComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ["data",] }]
};
ReasonsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-reasons',
        template: _raw_loader_reasons_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reasons_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ReasonsComponent);



/***/ }),

/***/ "ZVV3":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/orderitems/orderitems.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header *ngIf=\"data\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button mode=\"md\" fill=\"clear\" (click)=\"backHome()\">\n        <ion-icon style=\"font-size: 2em;\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{data.name}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"data\">\n  <ion-row style=\"background: #fff;margin: 10px;\">\n    <ion-col size=\"3\"> \n      <img-loader useImg [src]=\"data.img_src ? data.img_src : ''\" style=\"max-width: 90px\"></img-loader>\n    </ion-col>\n    <ion-col size=\"9\">  \n       <p [innerHTML]=\"data.name\"></p>\n       <ion-row >\n        <ion-col size=\"4\">{{data.price | money: settings.all.settings}}</ion-col>\n        <ion-col size=\"4\">Qty:{{data.quantity}}</ion-col>\n        <ion-col size=\"4\">{{data.subtotal}}</ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n  <ion-row style=\"padding: 10px 20px;\" *ngIf=\"action=='1'\">\n    <ion-col size=\"12\"> \n      <ion-radio-group [(ngModel)]=\"itemsActions\" > \n        <ion-row>\n          <ion-col size=\"6\">  \n            <ion-item>\n              <ion-radio value=\"1\"></ion-radio>\n              <ion-label>EXCHANGE</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">  \n            <ion-item>\n              <ion-radio value=\"2\"></ion-radio>\n              <ion-label>REFUND</ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-radio-group>\n    </ion-col>\n  </ion-row>\n  <ion-row style=\"padding: 10px 20px;\">\n      <div style=\"margin: 10px;\">\n        Reason :{{selReason}}\n      </div>\n  </ion-row>\n  <ion-row style=\"padding: 10px 20px;\">\n      <ion-col size=\"auto\"   *ngFor=\"let re of reason\" (click)=\"openReasonBox(re)\" >\n          <span class=\"boxTag\" [ngClass]=\"{'active': re.tag == seltag }\">{{re.tag}}</span>\n      </ion-col>\n  </ion-row>\n \n  <ion-row style=\"text-align: right;margin: 20px;\" >\n    <ion-button expand=\"full\" class=\"accent-background\" style=\"width: 100%;\" *ngIf=\"action==0\" (click)=\"cancelItems(0)\">Cancel</ion-button>\n    <ion-button expand=\"full\" class=\"accent-background\" style=\"width: 100%;\" *ngIf=\"action==1\" (click)=\"cancelItems(1)\">Submit</ion-button>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "fnoR":
/*!*****************************************************************!*\
  !*** ./src/app/pages/orderitems/reasons/reasons.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWFzb25zLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "i1s8":
/*!*****************************************************!*\
  !*** ./src/app/pages/orderitems/orderitems.page.ts ***!
  \*****************************************************/
/*! exports provided: OrderitemsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderitemsPage", function() { return OrderitemsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_orderitems_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./orderitems.page.html */ "ZVV3");
/* harmony import */ var _orderitems_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orderitems.page.scss */ "p0s1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/providers */ "fC+V");
/* harmony import */ var _reasons_reasons_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reasons/reasons.component */ "O+9Z");








let OrderitemsPage = class OrderitemsPage {
    constructor(nav, route, loader, toast, modalCanl, settings, WC) {
        this.nav = nav;
        this.route = route;
        this.loader = loader;
        this.toast = toast;
        this.modalCanl = modalCanl;
        this.settings = settings;
        this.WC = WC;
        this.route.queryParams.subscribe(params => {
            this.data = JSON.parse(params.items);
            this.action = params.action;
            this.order_id = params.order_id;
            this.getActionSettings();
        });
    }
    backHome() {
        this.nav.back();
    }
    getActionSettings() {
        this.loader.show();
        this.WC.getOrderItemsReason().then((res) => {
            if (this.action == "0") {
                this.reason = res.data.cancel.reason;
            }
            else {
                this.reason = res.data.exchange.reason;
            }
            this.loader.dismiss();
        }, (err) => {
            this.loader.dismiss();
            this.toast.showError();
        });
    }
    openReasonBox(subRes) {
        this.seltag = subRes.tag;
        this.presentModal(subRes);
    }
    cancelItems(type) {
        if (this.selReason == "") {
            this.toast.show("please select Reason");
            return false;
        }
        if (type == 0) {
            this.loader.show();
            this.WC.getOrderItemsCancel(this.order_id, this.data.id, this.selReason, "cancel").then((res) => {
                console.log(res);
                this.toast.show("Order request update");
                this.loader.dismiss();
                this.nav.back();
            }, (err) => {
                console.log(err);
                this.loader.dismiss();
                var ee = JSON.parse(err.error);
                this.toast.show(ee.data);
            });
        }
        else {
            if (this.itemsActions == "1") {
                this.loader.show();
                this.WC.getOrderItemsExchange(this.order_id, this.data.id, this.selReason, "exchange").then((res) => {
                    this.nav.back();
                    this.toast.show("Order request update");
                    this.loader.dismiss();
                }, (err) => {
                    this.loader.dismiss();
                    var ee = JSON.parse(err.error);
                    this.toast.show(ee.data);
                });
            }
            else {
                this.loader.show();
                this.WC.getOrderItemsReturn(this.order_id, this.data.id, this.selReason, "refund").then((res) => {
                    console.log(res);
                    this.toast.show("Order request update");
                    this.nav.back();
                    this.loader.dismiss();
                }, (err) => {
                    console.log(err);
                    var ee = JSON.parse(err.error);
                    this.loader.dismiss();
                    this.toast.show(ee.data);
                });
            }
        }
    }
    presentModal(reasons) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCanl.create({
                component: _reasons_reasons_component__WEBPACK_IMPORTED_MODULE_7__["ReasonsComponent"],
                componentProps: { "data": JSON.stringify(reasons) },
                cssClass: 'ReasonsBox'
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            console.log(data);
            this.selReason = data.data.element;
        });
    }
    ngOnInit() {
    }
};
OrderitemsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_providers__WEBPACK_IMPORTED_MODULE_6__["LoadingProvider"] },
    { type: src_app_services_providers__WEBPACK_IMPORTED_MODULE_6__["ToastProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: src_app_services_providers__WEBPACK_IMPORTED_MODULE_6__["SettingsProvider"] },
    { type: src_app_services_providers__WEBPACK_IMPORTED_MODULE_6__["WooCommerceProvider"] }
];
OrderitemsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-orderitems',
        template: _raw_loader_orderitems_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_orderitems_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OrderitemsPage);



/***/ }),

/***/ "kOUV":
/*!***************************************************************!*\
  !*** ./src/app/pages/orderitems/orderitems-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: OrderitemsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderitemsPageRoutingModule", function() { return OrderitemsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _orderitems_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orderitems.page */ "i1s8");




const routes = [
    {
        path: '',
        component: _orderitems_page__WEBPACK_IMPORTED_MODULE_3__["OrderitemsPage"]
    }
];
let OrderitemsPageRoutingModule = class OrderitemsPageRoutingModule {
};
OrderitemsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrderitemsPageRoutingModule);



/***/ }),

/***/ "p0s1":
/*!*******************************************************!*\
  !*** ./src/app/pages/orderitems/orderitems.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #f5f5f5!important;\n}\n\n.boxTag {\n  border: 1px solid #ccc;\n  padding: 5px 10px;\n}\n\n.active {\n  border: 1px solid #000;\n}\n\n.order_products p {\n  font-size: 16px;\n  font-weight: 600;\n  color: #000;\n}\n\n.order_products ion-row ion-col {\n  justify-content: space-between;\n  flex-direction: row;\n  color: #bdbdbd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL29yZGVyaXRlbXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQUE7QUFDSjs7QUFDQTtFQUNJLHNCQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFBQTtFQUNJLHNCQUFBO0FBR0o7O0FBQUk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBR047O0FBQU07RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUVSIiwiZmlsZSI6Im9yZGVyaXRlbXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjVmNWY1IWltcG9ydGFudDtcbn1cbi5ib3hUYWd7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbn1cbi5hY3RpdmV7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDsgXG59XG4ub3JkZXJfcHJvZHVjdHMge1xuICAgIHB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6ICMwMDA7XG4gICAgfVxuICAgIGlvbi1yb3d7XG4gICAgICBpb24tY29se1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGNvbG9yOiAjYmRiZGJkO1xuICAgICAgfVxuICAgIH1cbn0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=pages-orderitems-orderitems-module.js.map