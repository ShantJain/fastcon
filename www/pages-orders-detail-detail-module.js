(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-orders-detail-detail-module"],{

/***/ "7rkf":
/*!*********************************************************************!*\
  !*** ./src/app/pages/orders/detail/orders-detail-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: OrderDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailPageRoutingModule", function() { return OrderDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail */ "Z4SK");




const routes = [
    {
        path: '',
        component: _detail__WEBPACK_IMPORTED_MODULE_3__["OrderDetailPage"],
    }
];
let OrderDetailPageRoutingModule = class OrderDetailPageRoutingModule {
};
OrderDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], OrderDetailPageRoutingModule);



/***/ }),

/***/ "BuKi":
/*!*************************************************!*\
  !*** ./src/app/pages/orders/detail/detail.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\nion-content {\n  --background: #f5f5f5;\n}\n.order-details {\n  margin-bottom: 8px;\n  background: #fff;\n  padding-bottom: 10px;\n  padding-top: 10px;\n}\n.order-details ion-list-header, .order-details .ion-list-header {\n  border: none;\n  padding-bottom: 5px;\n  margin-bottom: 10px;\n  color: #000 !important;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.order-details .ion-no-padding {\n  padding: 0px 20px;\n  margin-top: -15px;\n}\n.order-details .add_info {\n  background: #f1f1f12e;\n  margin-bottom: 15px;\n  padding: 10px !important;\n  box-shadow: 0px 1px 5px #ccc;\n}\n.order-details .add_info .item-inner .input-wrapper .label div {\n  margin-bottom: 5px;\n}\n.order-details .order_products p {\n  font-size: 16px;\n  font-weight: 600;\n  color: #000;\n}\n.order-details .order_products ion-row ion-col {\n  justify-content: space-between;\n  flex-direction: row;\n  color: #bdbdbd;\n}\n.order-details .order_products:last-child {\n  border-bottom: none;\n}\n.order-details .item {\n  min-height: initial;\n}\n.order-details .item img {\n  margin: 0px, 10px, 0px, 0px !important;\n}\n.order-details .item .item-inner {\n  border-bottom: none;\n}\n.order-details .item .item-inner .input-wrapper .label {\n  margin: 0px;\n  color: #757575;\n}\n.order-details .item .item-inner .input-wrapper .icon {\n  margin: 0 !important;\n  min-height: 2rem !important;\n  font-size: 2rem !important;\n}\n.order-details .item .item-inner span[item-end],\n.order-details .item .item-inner button[item-end],\n.order-details .item .item-inner div[item-end] {\n  margin: 0px 0px 5px 0px;\n  text-transform: capitalize;\n}\n.order-details .item .item-inner .radio {\n  margin: 0px 0px 5px 5px !important;\n}\n.order-details .ord_total.item .item-inner {\n  border-top: 1px solid #ddd;\n  padding-top: 8px;\n  font-weight: 700;\n  color: #000 !important;\n  margin-top: 8px;\n}\n.footer {\n  background: #fff;\n  padding: 8px;\n}\n.multi-steps > li.is-active ~ li:before, .multi-steps > li.is-active:before {\n  font-family: inherit;\n  font-weight: 700;\n}\n.multi-steps > li.is-active ~ li:after, .multi-steps > li.is-active:after {\n  background-color: #ededed;\n}\n.multi-steps {\n  display: table;\n  table-layout: fixed;\n  width: 100%;\n  padding: 0;\n  font-size: 1.1rem;\n  margin-bottom: 0;\n}\n.multi-steps > li {\n  counter-increment: stepNum;\n  text-align: center;\n  display: table-cell;\n  position: relative;\n  color: green;\n  z-index: 1;\n}\n.multi-steps > li:before {\n  content: \"\";\n  content: \"✓;\";\n  content: \"𐀃\";\n  content: \"𐀄\";\n  content: \"✓\";\n  display: block;\n  margin: 0 auto 4px;\n  background-color: green;\n  color: #fff;\n  width: 16px;\n  height: 16px;\n  line-height: 18px;\n  text-align: center;\n  font-weight: bold;\n  border-width: 1px;\n  border-style: solid;\n  border-color: green;\n  border-radius: 50%;\n}\n.multi-steps > li:after {\n  content: \"\";\n  height: 2px;\n  width: 100%;\n  background-color: green;\n  position: absolute;\n  z-index: -1;\n  margin-top: -15px;\n  margin-left: -15px;\n}\n.multi-steps > li:last-child:after {\n  display: none;\n}\n.multi-steps > li.is-active:before {\n  background-color: green;\n  border-color: green;\n  color: #fff;\n}\n.multi-steps > li.is-active ~ li {\n  color: #808080;\n}\n.multi-steps > li.is-active ~ li:before {\n  background-color: #ededed;\n  border-color: #ededed;\n}\n.link {\n  text-transform: capitalize;\n  background: var(--primary_color);\n  color: #ffffff;\n  font-weight: 700;\n  padding: 16px;\n  border-radius: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2RldGFpbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUNkO0VBQ0UscUJBQUE7QUFDSjtBQUVFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUFDSjtBQUFJO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFFUjtBQUFJO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQUVOO0FBQUk7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtBQUVOO0FBR1k7RUFDRSxrQkFBQTtBQURkO0FBU007RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBUFI7QUFVUTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBUlY7QUFXTTtFQUNFLG1CQUFBO0FBVFI7QUFhSTtFQUNFLG1CQUFBO0FBWE47QUFhTTtFQUNFLHNDQUFBO0FBWFI7QUFjTTtFQUNFLG1CQUFBO0FBWlI7QUFlVTtFQUNFLFdBQUE7RUFDQSxjQUFBO0FBYlo7QUFpQlU7RUFDRSxvQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7QUFmWjtBQW1CUTs7O0VBR0UsdUJBQUE7RUFDQSwwQkFBQTtBQWpCVjtBQW9CUTtFQUNFLGtDQUFBO0FBbEJWO0FBdUJJO0VBQ0UsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FBckJOO0FBd0JFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FBckJKO0FBeUJJO0VBRUUsb0JBQUE7RUFDQSxnQkFBQTtBQXZCTjtBQTBCSTtFQUNFLHlCQUFBO0FBeEJOO0FBNEJFO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBekJKO0FBMkJJO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQXpCTjtBQTJCTTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFHRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQTNCVjtBQStCTTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQTdCUjtBQWlDUTtFQUNFLGFBQUE7QUEvQlY7QUFzQ1E7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQXBDVjtBQXVDUTtFQUNFLGNBQUE7QUFyQ1Y7QUF3Q1U7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FBdENaO0FBNkNFO0VBQ0UsMEJBQUE7RUFDQSxnQ0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQTFDSiIsImZpbGUiOiJkZXRhaWwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpb24tY29udGVudHtcbiAgICAtLWJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIH1cblxuICAub3JkZXItZGV0YWlscyB7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgaW9uLWxpc3QtaGVhZGVyLC5pb24tbGlzdC1oZWFkZXIge1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgfVxuICAgIC5pb24tbm8tcGFkZGluZ3tcbiAgICAgIHBhZGRpbmc6IDBweCAyMHB4O1xuICAgICAgbWFyZ2luLXRvcDogLTE1cHg7XG4gICAgfVxuICAgIC5hZGRfaW5mbyB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxMmU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICAgICAgYm94LXNoYWRvdzogMHB4IDFweCA1cHggI2NjYztcblxuICAgICAgLml0ZW0taW5uZXIge1xuICAgICAgICAuaW5wdXQtd3JhcHBlciB7XG4gICAgICAgICAgLmxhYmVsIHtcbiAgICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAub3JkZXJfcHJvZHVjdHMge1xuICAgICAgcHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgIH1cbiAgICAgIGlvbi1yb3d7XG4gICAgICAgIGlvbi1jb2x7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgY29sb3I6ICNiZGJkYmQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLml0ZW0ge1xuICAgICAgbWluLWhlaWdodDogaW5pdGlhbDtcblxuICAgICAgaW1nIHtcbiAgICAgICAgbWFyZ2luOjBweCAsIDEwcHgsIDBweCwgMHB4IWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgLml0ZW0taW5uZXIge1xuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuXG4gICAgICAgIC5pbnB1dC13cmFwcGVyIHtcbiAgICAgICAgICAubGFiZWwge1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICBjb2xvcjogIzc1NzU3NTtcbiAgICAgICAgICAgIC8vIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAycmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW0gIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzcGFuW2l0ZW0tZW5kXSxcbiAgICAgICAgYnV0dG9uW2l0ZW0tZW5kXSxcbiAgICAgICAgZGl2W2l0ZW0tZW5kXSB7XG4gICAgICAgICAgbWFyZ2luOjBweCAwcHggNXB4IDBweDtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yYWRpbyB7XG4gICAgICAgICAgbWFyZ2luOjBweCAwcHggNXB4IDVweCFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAub3JkX3RvdGFsLml0ZW0gLml0ZW0taW5uZXIge1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XG4gICAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgfVxuICB9XG4gIC5mb290ZXIge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZzogOHB4O1xuICB9XG5cbiAgJXJlbWFpbi1zdGVwcyB7XG4gICAgJjpiZWZvcmUge1xuICAgICAgLy9jb250ZW50OiBjb3VudGVyKHN0ZXBOdW0pO1xuICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgIH1cblxuICAgICY6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcbiAgICB9XG4gIH1cblxuICAubXVsdGktc3RlcHMge1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuXG4gICAgPiBsaSB7XG4gICAgICBjb3VudGVyLWluY3JlbWVudDogc3RlcE51bTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBjb2xvcjogZ3JlZW47XG4gICAgICB6LWluZGV4OiAxO1xuXG4gICAgICAmOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXFxmMDBjXCI7XG4gICAgICAgIGNvbnRlbnQ6IFwiXFwyNzEzO1wiO1xuICAgICAgICBjb250ZW50OiBcIlxcMTAwMDNcIjtcbiAgICAgICAgY29udGVudDogXCJcXDEwMDA0XCI7XG4gICAgICAgIGNvbnRlbnQ6IFwiXFwyNzEzXCI7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IDAgYXV0byA0cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgICAgICAgYm9yZGVyOiB7XG4gICAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgICBzdHlsZTogc29saWQ7XG4gICAgICAgICAgY29sb3I6IGdyZWVuO1xuICAgICAgICAgIHJhZGl1czogNTAlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICBtYXJnaW4tdG9wOiAtMTVweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICAgICAgfVxuXG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYuaXMtYWN0aXZlIHtcbiAgICAgICAgQGV4dGVuZCAlcmVtYWluLXN0ZXBzO1xuXG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgICAgICAgICBib3JkZXItY29sb3I6IGdyZWVuO1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG5cbiAgICAgICAgfiBsaSB7XG4gICAgICAgICAgY29sb3I6ICM4MDgwODA7XG4gICAgICAgICAgQGV4dGVuZCAlcmVtYWluLXN0ZXBzO1xuXG4gICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2VkZWRlZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubGluayB7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeV9jb2xvcik7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIH1cbiJdfQ== */");

/***/ }),

/***/ "IEUe":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/orders/detail/detail.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button mode=\"md\" fill=\"clear\" (click)=\"backHome()\">\n        <ion-icon style=\"font-size: 2em;\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{'ORDER' | translate}} #{{data.id}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding *ngIf=\"data\">\n  <div class=\"order-details\" padding-left padding-right>\n    <ion-list>\n      <ion-item no-padding class=\"ion-list-header\" lines=\"none\">\n          {{'PRODUCTS' | translate}}\n          <div slot=\"end\">\n            {{data.line_items.length}} {{'ITEM' | translate}}&rlm;(s)\n          </div> \n      </ion-item>\n      <ion-item class=\"order_products\" *ngFor=\"let x of data.line_items\">\n        <ion-row style=\"width: 100%;\">\n          <ion-col size=\"3\"> \n            <img-loader useImg [src]=\"x.img_src ? x.img_src : ''\" style=\"max-width: 90px\"></img-loader>\n          </ion-col>\n          <ion-col size=\"9\" class=\"order_products\">   \n            <p [innerHTML]=\"x.name\" style=\"margin: 0px;\"></p>\n            <ion-row >\n              <ion-col size=\"5\">{{x.price | money: settings.all.settings}}   </ion-col>\n              <ion-col size=\"3\"> Qty:{{x.quantity}} </ion-col> \n              <ion-col size=\"4\"> {{x.subtotal}} </ion-col> \n            </ion-row>\n            <ion-row >\n              <ion-col size=\"12\" *ngIf=\"x.itemSratus\" > \n                <span style=\"font-weight: 700;color: #000;\">{{x.itemSratus}}</span>\n              </ion-col>\n              <ion-col size=\"12\" *ngIf=\"(con &lt; (data.line_items.length -1)) && data.line_items.length != 1 && !x.itemSratus && (data.status==='on-hold' || data.status==='pending'|| data.status==='processing')\"> \n                <ion-button (click)=\"cancelItrems(x,0)\"  color=\"danger\">Cancel Items</ion-button></ion-col>\n              <ion-col size=\"12\" *ngIf=\"(con &lt; (data.line_items.length -1)) && data.line_items.length != 1 && (!x.itemSratus && x.itemSratus!='Cancelled' && x.itemSratus!='Cancel Requested' && x.itemSratus!='Refund Requested' && x.itemSratus!='Refunded') && (data.status==='on-hold' || data.status==='pending'|| data.status==='delivered' || data.status==='completed')\"> \n                <ion-button (click)=\"cancelItrems(x,1)\"  color=\"danger\"> Return/exchange </ion-button></ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <div class=\"order-details\" padding-left padding-right>\n    <ion-list lines=\"none\">\n      <ion-list-header no-padding lines=\"none\" no-margin>\n        {{'ORDER_SUMMARY' | translate}}\n      </ion-list-header>\n      <ion-item class=\"ion-no-padding\" style=\"\">\n        Status  <span slot=\"end\"> {{data.status}} </span>\n      </ion-item>\n      <ion-item class=\"ion-no-padding\">\n        {{\"PAYMENT_METHODS\" | translate}}   <span slot=\"end\">\n          {{data.payment_method_title || data.payment_method}}\n        </span>\n      </ion-item>\n      <ion-item class=\"ion-no-padding\" *ngIf=\"data.fee_lines[0]\">\n        {{data.fee_lines[0].name}}  \n          <span slot=\"end\">\n            <span slot=\"end\">{{data.currency_symbol}}</span>\n            {{data.fee_lines[0].total}}\n          </span>\n      </ion-item>\n      <ion-item class=\"ion-no-padding\" *ngIf=\"data.shipping_lines[0]\">\n        {{'SHIPPING' | translate}} ({{data.shipping_lines[0].method_title}})\n        <span slot=\"end\">\n          {{data.shipping_lines[0].total | money: settings.all.settings}}\n        </span>\n      </ion-item>\n      <ion-item class=\"ion-no-padding\" *ngIf=\"data.shipping_lines[0]\">\n        {{'TAX' | translate}}\n        <span slot=\"end\">\n          {{data.total_tax | money: settings.all.settings}}\n        </span>\n      </ion-item>\n      <ion-item class=\"ion-no-padding\" *ngFor=\"let c of data.coupon_lines\">\n        {{'COUPON' | translate}}( {{c.code}})\n        <span slot=\"end\"> {{c.discount | money: settings.all.settings}} </span>\n      </ion-item>\n      <ion-item class=\"ion-no-padding\" class=\"ord_total\">\n        {{'TOTAL' | translate}} Amount\n        <span slot=\"end\">\n          {{calculatePrice(data) | money: settings.all.settings}} (inc. taxes)\n        </span>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <div class=\"order-details\" *ngIf=\"check\">\n    <ion-list lines=\"none\">\n      <ion-list-header lines=\"none\" >\n        Order Track\n      </ion-list-header>\n      <div>\n        <ul class=\"list-unstyled multi-steps\">\n          <li [class]=\"page=='placed'?'is-active':''\">Placed</li>\n          <li [class]=\"page=='accepted'?'is-active':''\">Accepted</li>\n          <li [class]=\"page=='picked'?'is-active':''\">Picked</li>\n          <li [class]=\"page=='shipped'?'is-active':''\">Shipped</li>\n          <li [class]=\"page=='delivered'?'is-active':''\">Delivered</li>\n        </ul>\n      </div>\n    </ion-list>\n  </div>\n\n  <div class=\"order-details\"\n    padding-left\n    padding-right\n    *ngIf=\"details !='' && details.phoe_wc_manual_ship_enable \"\n  >\n    <ion-list lines=\"none\">\n      <ion-list-header no-padding lines=\"none\" no-margin>\n        Click The Link To Track The Order\n      </ion-list-header>\n      <div>\n        <!-- <ion-item class=\"ion-no-padding\">\n          Tracking Number\n          <span slot=\"end\">\n            {{details.phoe_wc_manual_ship_tracking_number}}\n          </span>\n        </ion-item>\n        <ion-item class=\"ion-no-padding\">\n          Name\n          <span slot=\"end\"> {{details.phoe_wc_manual_ship_provider_name}} </span>\n        </ion-item> -->\n        <ion-item class=\"ion-no-padding\">\n          <ion-button color=\"dark\" fill=\"clear\" (click)=\"customTrackOrder(details.phoe_wc_manual_ship_tracking_link)\">\n            <p class=\"link\">Open Tracking Link</p>\n          </ion-button>\n        </ion-item>\n      </div>\n    </ion-list>\n  </div>\n\n  <div class=\"order-details\" padding-left padding-right>\n    <ion-list lines=\"none\">\n      <ion-list-header class=\"ion-no-padding\" lines=\"none\" no-margin>\n        {{'ADDRESS_INFORMATION' | translate}}\n      </ion-list-header>\n      <ion-card class=\"ion-no-padding\" class=\"add_info\">\n        <ion-card-header>\n          <b>{{'BILLING' | translate}} {{'ADDRESS' | translate}}</b>\n        </ion-card-header>\n        <ion-card-content>\n          <p *ngIf=\"data.billing.company!=''\">{{data.billing.company}}</p>\n          <p>{{data.billing.first_name}} {{data.billing.last_name}}</p>\n          <p>{{data.billing.address_1}}</p>\n          <p *ngIf=\"data.billing.address_2!=''\">{{data.billing.address_2}}</p>\n          <p>{{data.billing.city}} - {{data.billing.postcode}}</p>\n          <p>{{data.billing.state}} • {{data.billing.country}}</p>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card class=\"ion-no-padding\" class=\"add_info\">\n        <ion-card-header>\n          <b>{{'SHIPPING' | translate}} {{'ADDRESS' | translate}}</b>\n        </ion-card-header>\n        <ion-card-content>\n          <p *ngIf=\"data.shipping.company!=''\">{{data.shipping.company}}</p>\n          <p>{{data.shipping.first_name}} {{data.shipping.last_name}}</p>\n          <p>{{data.shipping.address_1}}</p>\n          <p *ngIf=\"data.shipping.address_2!=''\">{{data.shipping.address_2}}</p>\n          <p>{{data.shipping.city}} - {{data.shipping.postcode}}</p>\n          <p>{{data.shipping.state}} • {{data.shipping.country}}</p>\n        </ion-card-content>\n      </ion-card>\n    </ion-list>\n  </div>\n</ion-content>\n<ion-footer *ngIf=\"data.status==='on-hold' || data.status==='pending' || data.status==='processing'\">\n  <ion-button expand=\"full\" class=\"accent-background\" (click)=\"orderCancel()\">\n    Cancel Order\n  </ion-button>\n</ion-footer>\n");

/***/ }),

/***/ "Z4SK":
/*!***********************************************!*\
  !*** ./src/app/pages/orders/detail/detail.ts ***!
  \***********************************************/
/*! exports provided: OrderDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailPage", function() { return OrderDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detail_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detail.html */ "IEUe");
/* harmony import */ var _detail_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail.scss */ "BuKi");
/* harmony import */ var _services_toast_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/toast/toast */ "L4fY");
/* harmony import */ var _services_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/providers */ "fC+V");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");











let OrderDetailPage = class OrderDetailPage {
    constructor(nav, route, settings, toast, WC, http, zone, alertCtrl, translate, iab) {
        this.nav = nav;
        this.route = route;
        this.settings = settings;
        this.toast = toast;
        this.WC = WC;
        this.http = http;
        this.zone = zone;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.iab = iab;
        this.order = "detail";
        this.page = "placed";
        this.details = "";
        this.check = false;
        this.con = 0;
        this.route.queryParams.subscribe(params => {
            this.data = JSON.parse(params.data);
            this.data.line_items.forEach((element) => {
                this.WC.getProductThumb(element.product_id).then((res) => {
                    this.zone.run(() => {
                        element.img_src = res.src;
                    });
                }, (err) => {
                    console.log(err);
                });
            });
            this.orderItemsStatus(this.data.id);
            this.customTrack(this.data.id);
        });
    }
    orderItemsStatus(orderID) {
        var obj = this;
        obj.WC.getOrderItemsStatus(orderID).then((res) => {
            console.log(res);
            console.log("getOrderItemsStatus");
            obj.data.line_items = obj.data.line_items.map(function (i) {
                var stArr = res.data.filter(function (t) { return t.item_id == i.id; });
                console.log(stArr);
                if (stArr.length > 0 && stArr[0].request_type == "Cancel") {
                    obj.con++;
                }
                else if (stArr.length > 0 && stArr[0].request_type == "Refund") {
                    obj.con++;
                }
                else if (stArr.length > 0 && stArr[0].request_type == "exchange") {
                    obj.con++;
                }
                if (stArr.length > 0 && stArr[0].request_status == "Canceled") {
                    stArr[0].request_status = "Cancelled";
                }
                return Object.assign(Object.assign({}, i), { "itemSratus": stArr.length > 0 ? stArr[0].request_status : "" });
            });
            console.log(obj.data.line_items);
        }, (err) => {
            this.toast.showError();
        });
    }
    trackyourOrder(data) {
        this.WC.getOrderTrackData(data).then((res) => {
            console.log(res);
            this.check = true;
            if (res.status_code != 0) {
                if (res.tracking_data.track_status) {
                    this.page = res.tracking_data.shipment_track[0].current_status;
                }
            }
        }, (err) => {
            this.toast.showError();
        });
    }
    backHome() {
        this.nav.back();
    }
    customTrack(data) {
        this.WC.getCustomOrderTrackData(data).then((res) => {
            console.log(res);
            if (res.status &&
                res.data.phoe_wc_manual_ship_enable &&
                res.data.phoe_wc_manual_ship_tracking_link != "") {
                this.zone.run(() => {
                    this.details = res.data;
                });
            }
            else {
                this.trackyourOrder(this.data.id);
            }
        }, (err) => {
            this.toast.showError();
        });
    }
    cancelItrems(items, action) {
        console.log(items);
        let navigationExtras = { queryParams: { "action": action, "items": JSON.stringify(items), "order_id": this.data.id } };
        this.nav.navigateForward(["orderitems"], navigationExtras);
    }
    customTrackOrder(link) {
        let browser;
        browser = this.iab.create(link, "_self", {
            location: "no",
            clearcache: "yes",
            clearsessioncache: "yes",
        });
        // this.translate.get(["TRACK_ORDER", "NO", "YES"]).subscribe((x) => {
        //   this.alertCtrl
        //     .create({
        //       title: x.TRACK_ORDER,
        //       message: "Yes,For track the order",
        //       buttons: [
        //         {
        //           text: x.NO,
        //         },
        //         {
        //           text: x.YES,
        //           handler: () => {
        //             this.loader.show();
        //             let browser;
        //             browser = this.iab.create(link, "_self", {
        //               location: "no",
        //               clearcache: "yes",
        //               clearsessioncache: "yes",
        //             });
        //             this.loader.dismiss();
        //           },
        //         },
        //       ],
        //     })
        //     .present();
        // });
    }
    ionViewDidEnter() {
        console.log("ionViewDidEnter OrderDetailPage");
    }
    calculatePrice(x) {
        return x.prices_include_tax
            ? x.total
            : (Number(x.total) + Number(x.total_tax)).toFixed(2);
    }
    orderCancel() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let confirm = yield this.alertCtrl.create({
                header: "Cancel Order",
                message: "Are you sure you want to cancel this order",
                buttons: [
                    {
                        text: "No",
                    },
                    {
                        text: "Yes",
                        handler: () => {
                            this.presentAlertPrompt();
                        },
                    },
                ],
            });
            yield confirm.present();
        });
    }
    presentAlertPrompt() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Order Cancel Reason',
                inputs: [
                    {
                        name: 'reason',
                        type: 'text',
                        placeholder: 'Cancel Reason'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary'
                    },
                    {
                        text: 'Ok',
                        handler: (alrData) => {
                            if (alrData.reason == "") {
                                this.toast.show("Please Enter order Cancellation Reasons");
                                return false;
                            }
                            this.WC.updateOrder(this.data.id, alrData.reason).then((res) => {
                                if (res.success) {
                                    this.data.status = "Cancel";
                                    alert.dismiss();
                                }
                            }, (err) => {
                                console.log(err);
                                this.toast.showError();
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
OrderDetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_4__["SettingsProvider"] },
    { type: _services_toast_toast__WEBPACK_IMPORTED_MODULE_3__["ToastProvider"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_4__["WooCommerceProvider"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__["InAppBrowser"] }
];
OrderDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: "page-order-detail",
        template: _raw_loader_detail_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detail_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OrderDetailPage);



/***/ }),

/***/ "uiy6":
/*!******************************************************!*\
  !*** ./src/app/pages/orders/detail/detail.module.ts ***!
  \******************************************************/
/*! exports provided: OrderDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailPageModule", function() { return OrderDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../pipes/pipes.module */ "iTUp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail */ "Z4SK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-image-loader-v5 */ "JBbo");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "eHpL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _orders_detail_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./orders-detail-routing.module */ "7rkf");










let OrderDetailPageModule = class OrderDetailPageModule {
};
OrderDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_detail__WEBPACK_IMPORTED_MODULE_3__["OrderDetailPage"]],
        imports: [
            _orders_detail_routing_module__WEBPACK_IMPORTED_MODULE_9__["OrderDetailPageRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild(),
            ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_5__["IonicImageLoaderModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__["PipesModule"],
        ], providers: [
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_6__["WebView"]
        ]
    })
], OrderDetailPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-orders-detail-detail-module.js.map