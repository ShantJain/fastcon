(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-orders-orders-module"],{

/***/ "3XAE":
/*!******************************************!*\
  !*** ./src/app/pages/orders/orders.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #f5f5f5;\n}\n\n.div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100%;\n}\n\n.loader_outer {\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n\nion-icon {\n  display: inline-block;\n  font-size: 4rem;\n}\n\n.order_items.item {\n  margin-bottom: 8px;\n}\n\n.order_items.item .item-inner {\n  border: none;\n}\n\n.order_items.item .item-inner .row .col[col-12] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.order_items.item .item-inner .row .col[col-12] div:nth-of-type(1) {\n  font-size: 17px;\n  color: #000;\n  font-weight: 800;\n}\n\n.order_items.item .item-inner .row .col[col-12] div:nth-of-type(2) {\n  text-transform: uppercase;\n  font-weight: 800;\n}\n\n.order_items.item .item-inner .row .col[col-6] div:nth-of-type(1) {\n  color: #adadad;\n  font-weight: 400;\n}\n\n.order_items.item .item-inner .row .col[col-6] div:nth-of-type(2) {\n  font-weight: 600;\n  color: #757575;\n}\n\n.pending {\n  color: #FDB82B;\n}\n\n.failed {\n  color: #ff0000;\n}\n\n.processing {\n  color: #76A42E;\n}\n\n.completed {\n  color: #39A3CA;\n}\n\n.on-hold {\n  color: #D0C035;\n}\n\n.refunded {\n  color: #76A42E;\n}\n\n.cancelled {\n  color: #ff0000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL29yZGVycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UscUJBQUE7QUFBSjs7QUFHRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUdFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdFO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0U7RUFDRSxrQkFBQTtBQUFKOztBQUVJO0VBQ0UsWUFBQTtBQUFOOztBQUdRO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBRFY7O0FBSVk7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBRmQ7O0FBS1k7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0FBSGQ7O0FBU1U7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFQWjs7QUFVVTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQVJaOztBQWVFO0VBQ0UsY0FBQTtBQVpKOztBQWVFO0VBQ0UsY0FBQTtBQVpKOztBQWVFO0VBQ0UsY0FBQTtBQVpKOztBQWVFO0VBQ0UsY0FBQTtBQVpKOztBQWVFO0VBQ0UsY0FBQTtBQVpKOztBQWdCRTtFQUNFLGNBQUE7QUFiSjs7QUFpQkU7RUFDRSxjQUFBO0FBZEoiLCJmaWxlIjoib3JkZXJzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgfVxuXG4gIC5kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAubG9hZGVyX291dGVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgaW9uLWljb24ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDRyZW07XG4gIH1cblxuICAub3JkZXJfaXRlbXMuaXRlbSB7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuXG4gICAgLml0ZW0taW5uZXIge1xuICAgICAgYm9yZGVyOiBub25lO1xuXG4gICAgICAucm93IHtcbiAgICAgICAgLmNvbFtjb2wtMTJdIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAmOm50aC1vZi10eXBlKDEpIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpudGgtb2YtdHlwZSgyKSB7XG4gICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmNvbFtjb2wtNl0gZGl2IHtcbiAgICAgICAgICAmOm50aC1vZi10eXBlKDEpIHtcbiAgICAgICAgICAgIGNvbG9yOiAjYWRhZGFkO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmOm50aC1vZi10eXBlKDIpIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBjb2xvcjogIzc1NzU3NTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAucGVuZGluZyB7XG4gICAgY29sb3I6ICNGREI4MkI7XG4gIH1cblxuICAuZmFpbGVkIHtcbiAgICBjb2xvcjogI2ZmMDAwMDtcbiAgfVxuXG4gIC5wcm9jZXNzaW5nIHtcbiAgICBjb2xvcjogIzc2QTQyRTtcbiAgfVxuXG4gIC5jb21wbGV0ZWQge1xuICAgIGNvbG9yOiAjMzlBM0NBO1xuICB9XG5cbiAgLm9uLWhvbGQge1xuICAgIGNvbG9yOiAjRDBDMDM1O1xuXG4gIH1cblxuICAucmVmdW5kZWQge1xuICAgIGNvbG9yOiAjNzZBNDJFO1xuXG4gIH1cblxuICAuY2FuY2VsbGVkIHtcbiAgICBjb2xvcjogI2ZmMDAwMDtcblxuICB9XG4iXX0= */");

/***/ }),

/***/ "8veL":
/*!*******************************************************!*\
  !*** ./src/app/pages/orders/orders-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: OrdersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPageRoutingModule", function() { return OrdersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _orders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orders */ "bYcY");




const routes = [
    {
        path: '',
        component: _orders__WEBPACK_IMPORTED_MODULE_3__["OrdersPage"],
    }
];
let OrdersPageRoutingModule = class OrdersPageRoutingModule {
};
OrdersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], OrdersPageRoutingModule);



/***/ }),

/***/ "BPbf":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/orders/orders.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button mode=\"md\" fill=\"clear\" icon-only (click)=\"backHome()\">\n        <ion-icon style=\"font-size: 2em;\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{\"ORDERS\" | translate}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button mode=\"md\" fill=\"clear\" icon-only (click)=\"showSearch()\">\n        <ion-icon style=\"font-size: 2em;\" name=\"search\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"loader_outer\" *ngIf=\"!orders\">\n    <div class=\"loader\"></div>\n  </div>\n  <div class=\"div\" *ngIf=\"orders && orders.length == 0\">\n    <ion-grid>\n      <ion-row align-items-center>\n        <ion-col align-self-center text-center>\n          <ion-icon class=\"accent\"></ion-icon>\n          <h4 margin-top class=\"accent\">{{'NO_ORDER' | translate}}</h4>\n          <ion-button\n            class=\"accent-background\"\n            ion-button\n            (click)=\"goHome()\"\n            margin-top\n          >\n            {{'START_SHOPPING' | translate}}\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  \n  <ion-card class=\"order_items\" *ngFor=\"let x of newOrder\" (click)=\"goTo('orderDetail',x)\">\n    <ion-card-content>\n      <ion-row>\n        <ion-col size=\"8\">\n          <h3 style=\"white-space: normal; font-weight: 600; font-size: 16px\">\n            {{x.line_items[0].name}}\n          </h3>\n          <p style=\"margin: 5px 0 10px\">{{'ORDER_ID' | translate}}- {{x.id}}</p>\n          <p style=\"font-size: 24px; font-weight: 600; color: black\">\n            {{calculatePrice(x) | money: settings.all.settings}}\n          </p>\n        </ion-col>\n        <ion-col size=\"4\">\n          <img-loader useImg\n            [src]=\"x.line_items[0].data.src ? x.line_items[0].data.src : ''\" style=\"max-width: 90px\"\n          ></img-loader>\n          <h3 style=\"text-align: end;text-transform: uppercase;\" class=\"{{x.status}}\" >{{x.status}}</h3>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n\n  <ion-infinite-scroll *ngIf=\"hasMore\" (ionInfinite)=\"loadMoreOrders($event)\">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n\n<!-- <ion-content>\n  <div class=\"loader_outer\" *ngIf=\"!orders\">\n    <div class=\"loader\"></div>\n  </div>\n  <div class=\"div\" *ngIf=\"orders && orders.length == 0\">\n    <ion-grid>\n      <ion-row align-items-center>\n        <ion-col align-self-center text-center>\n          <ion-icon class=\"accent\"></ion-icon>\n          <h4 margin-top class=\"accent\">{{'NO_ORDER' | translate}}</h4>\n          <ion-button\n            class=\"accent-background\"\n            ion-button\n            (click)=\"goHome()\"\n            margin-top\n          >\n            {{'START_SHOPPING' | translate}}\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <ion-button\n    class=\"order_items\"\n    *ngFor=\"let x of orders\"\n    ion-item\n    tappable\n    (click)=\"goTo('orderDetail',x)\"\n  >\n    <ion-row>\n      <ion-col col-12>\n        <div>{{'ORDER_ID' | translate}}- {{x.id}}</div>\n        <div [class]=\"x.status\">{{x.status}}</div>\n      </ion-col>\n      <ion-col col-6>\n        <div>{{\"NO_OF_ITEMS\" | translate}}</div>\n        <div>{{x.line_items.length}} {{'ITEM' | translate}}&rlm;(s)</div>\n      </ion-col>\n      <ion-col col-6>\n        <div>{{\"TOTAL\" | translate}}</div>\n        <div>{{calculatePrice(x) | money: settings.all.settings}}</div>\n      </ion-col>\n      <ion-col col-6>\n        <div>{{\"ORDER_DATE\" | translate}}:</div>\n        <div>{{x.date_created | date:'MMM dd,yyyy hh:mma'}}</div>\n      </ion-col>\n      <ion-col col-6>\n        <div>{{\"BUYER\" | translate}}:</div>\n        <div>{{x.billing.first_name +\" \"+ x.billing.last_name}}</div>\n      </ion-col>\n      <ion-col col-6>\n        <div style=\"font-weight: 600; color: #757575\">Track Your Order</div>\n        <div></div>\n      </ion-col>\n    </ion-row>\n  </ion-button>\n  <ion-infinite-scroll *ngIf=\"hasMore\" (ionInfinite)=\"loadMoreOrders($event)\">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content> -->\n");

/***/ }),

/***/ "Xlj8":
/*!***********************************************!*\
  !*** ./src/app/pages/orders/orders.module.ts ***!
  \***********************************************/
/*! exports provided: OrdersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPageModule", function() { return OrdersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../pipes/pipes.module */ "iTUp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _orders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./orders */ "bYcY");
/* harmony import */ var ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-image-loader-v5 */ "JBbo");
/* harmony import */ var _orders_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orders-routing.module */ "8veL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "eHpL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");










let OrdersPageModule = class OrdersPageModule {
};
OrdersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [_orders__WEBPACK_IMPORTED_MODULE_4__["OrdersPage"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonicModule"],
            _orders_routing_module__WEBPACK_IMPORTED_MODULE_6__["OrdersPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"].forChild(),
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__["PipesModule"],
            ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_5__["IonicImageLoaderModule"],
        ], providers: [
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_8__["WebView"]
        ]
    })
], OrdersPageModule);



/***/ }),

/***/ "bYcY":
/*!****************************************!*\
  !*** ./src/app/pages/orders/orders.ts ***!
  \****************************************/
/*! exports provided: OrdersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPage", function() { return OrdersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_orders_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./orders.html */ "BPbf");
/* harmony import */ var _orders_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orders.scss */ "3XAE");
/* harmony import */ var _services_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/providers */ "fC+V");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_ShareComponent_search_search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/ShareComponent/search/search */ "y3Op");







let OrdersPage = class OrdersPage {
    constructor(navCtrl, WC, RS, modalCtrl, toast, user, settings, zone) {
        this.navCtrl = navCtrl;
        this.WC = WC;
        this.RS = RS;
        this.modalCtrl = modalCtrl;
        this.toast = toast;
        this.user = user;
        this.settings = settings;
        this.zone = zone;
        this.per_page = 20;
        this.page = 1;
        this.hasMore = false;
    }
    backHome() {
        this.navCtrl.back();
    }
    ionViewDidEnter() {
        console.log("ionViewDidEnter OrdersPage");
        this.getOrders();
    }
    getOrders() {
        var obj = this;
        if (obj.user.all) {
            obj.WC.getOrders(obj.user.id, obj.page, obj.per_page).then((data) => {
                console.log(data);
                obj.zone.run(() => {
                    obj.orders = data;
                    let newOrder = [];
                    for (let i = 0; i < data.length; i++) {
                        if (obj.orders[i].refunds.length > 0) {
                            var amt = 0;
                            for (let j = 0; j < obj.orders[i].refunds.length; j++) {
                                amt = amt + parseInt(obj.orders[i].refunds[j].total);
                            }
                            var a = parseInt(obj.orders[i].total) + amt;
                            console.log(a);
                            obj.orders[i].total = a;
                            console.log(obj.orders[i].total);
                        }
                        obj.WC.getImages(data[i].line_items[0].product_id).then((data) => {
                            obj.zone.run(() => {
                                newOrder.push(Object.assign(Object.assign({}, obj.orders[i]), { line_items: obj.getLineItems(obj.orders[i].line_items, data) }));
                            });
                        });
                    }
                    //obj.orders = newOrder;
                    console.log(newOrder);
                    obj.newOrder = newOrder;
                    obj.hasMore = data.length == obj.per_page;
                });
            }, (err) => {
                this.toast.showError();
            });
        }
    }
    getLineItems(line_items, data) {
        let newArr = [];
        for (let i = 0; i < line_items.length; i++) {
            newArr.push(Object.assign(Object.assign({}, line_items[i]), { data }));
        }
        return newArr;
    }
    loadMoreOrders(event) {
        this.page++;
        this.WC.getOrders(this.user.id, this.page, this.per_page).then((data) => {
            this.zone.run(() => {
                this.orders = this.orders.concat(data);
                let newOrder = [];
                for (let i = 0; i < data.length; i++) {
                    this.WC.getImages(data[i].line_items[0].product_id).then((data) => {
                        this.zone.run(() => {
                            newOrder.push(Object.assign(Object.assign({}, this.orders[i]), { line_items: this.getLineItems(this.orders[i].line_items, data) }));
                        });
                    });
                }
                this.newOrder = this.newOrder.concat(newOrder);
                event.complete();
                if (data.length == this.per_page) {
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
    goHome() {
        this.navCtrl.navigateRoot('home');
    }
    goTo(page, params) {
        let navigationExtras = { queryParams: { data: JSON.stringify(params) } };
        this.navCtrl.navigateForward([page], navigationExtras);
    }
    calculatePrice(x) {
        return x.prices_include_tax
            ? x.total
            : (Number(x.total) + Number(x.total_tax)).toFixed(2);
    }
};
OrdersPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_3__["WooCommerceProvider"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_3__["RestProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_3__["ToastProvider"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_3__["UserProvider"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_3__["SettingsProvider"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] }
];
OrdersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: "page-orders",
        template: _raw_loader_orders_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_orders_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OrdersPage);



/***/ })

}]);
//# sourceMappingURL=pages-orders-orders-module.js.map