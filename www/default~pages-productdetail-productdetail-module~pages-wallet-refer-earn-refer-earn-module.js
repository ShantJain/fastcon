(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-productdetail-productdetail-module~pages-wallet-refer-earn-refer-earn-module"],{

/***/ "/XPu":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ionic-native/social-sharing/__ivy_ngcc__/ngx/index.js ***!
  \*****************************************************************************/
/*! exports provided: SocialSharing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialSharing", function() { return SocialSharing; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "C6fG");




var SocialSharing = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SocialSharing, _super);
    function SocialSharing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SocialSharing.prototype.share = function (message, subject, file, url) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "share", { "successIndex": 4, "errorIndex": 5 }, arguments); };
    SocialSharing.prototype.shareWithOptions = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "shareWithOptions", { "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.canShareVia = function (appName, message, subject, image, url) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "canShareVia", { "successIndex": 5, "errorIndex": 6, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaTwitter = function (message, image, url) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "shareViaTwitter", { "successIndex": 3, "errorIndex": 4, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaFacebook = function (message, image, url) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "shareViaFacebook", { "successIndex": 3, "errorIndex": 4, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaFacebookWithPasteMessageHint = function (message, image, url, pasteMessageHint) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "shareViaFacebookWithPasteMessageHint", { "successIndex": 4, "errorIndex": 5, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaInstagram = function (message, image) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "shareViaInstagram", { "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaWhatsApp = function (message, image, url) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "shareViaWhatsApp", { "successIndex": 3, "errorIndex": 4, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaWhatsAppToReceiver = function (receiver, message, image, url) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "shareViaWhatsAppToReceiver", { "successIndex": 4, "errorIndex": 5, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaSMS = function (messge, phoneNumber) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "shareViaSMS", { "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.canShareViaEmail = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "canShareViaEmail", { "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaEmail = function (message, subject, to, cc, bcc, files) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "shareViaEmail", { "platforms": ["iOS", "Android"], "successIndex": 6, "errorIndex": 7 }, arguments); };
    SocialSharing.prototype.shareVia = function (appName, message, subject, image, url) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "shareVia", { "successIndex": 5, "errorIndex": 6, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.setIPadPopupCoordinates = function (targetBounds) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setIPadPopupCoordinates", { "sync": true, "platforms": ["iOS"] }, arguments); };
    SocialSharing.prototype.saveToPhotoAlbum = function (fileOrFileArray) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "saveToPhotoAlbum", { "platforms": ["iOS"] }, arguments); };
    SocialSharing.prototype.shareViaWhatsAppToPhone = function (phone, message, fileOrFileArray, url) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "shareViaWhatsAppToPhone", { "successIndex": 5, "errorIndex": 6, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.pluginName = "SocialSharing";
    SocialSharing.plugin = "cordova-plugin-x-socialsharing";
    SocialSharing.pluginRef = "plugins.socialsharing";
    SocialSharing.repo = "https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin";
    SocialSharing.platforms = ["Android", "Browser", "iOS", "Windows", "Windows Phone"];
SocialSharing.??fac = function SocialSharing_Factory(t) { return ??SocialSharing_BaseFactory(t || SocialSharing); };
SocialSharing.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: SocialSharing, factory: function (t) { return SocialSharing.??fac(t); } });
var ??SocialSharing_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getInheritedFactory"](SocialSharing);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](SocialSharing, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();
    return SocialSharing;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvc29jaWFsLXNoYXJpbmcvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0FBQ3hFO0FBRzBCLElBcUNTLGlDQUFpQjtBQUFDO0FBRTlCO0FBQ3VDO0FBQzVELElBU0EsNkJBQUssYUFBQyxPQUFnQixFQUFFLE9BQWdCLEVBQUUsSUFBd0IsRUFBRSxHQUFZO0FBS2xDLElBTzlDLHdDQUFnQixhQUFDLE9BTWhCO0FBTUksSUFZTCxtQ0FBVyxhQUFDLE9BQWUsRUFBRSxPQUFnQixFQUFFLE9BQWdCLEVBQUUsS0FBYyxFQUFFLEdBQVk7QUFPckUsSUFTeEIsdUNBQWUsYUFBQyxPQUFlLEVBQUUsS0FBYyxFQUFFLEdBQVk7QUFRN0QsSUFRQSx3Q0FBZ0IsYUFBQyxPQUFlLEVBQUUsS0FBYyxFQUFFLEdBQVk7QUFPNUQsSUFVRiw0REFBb0MsYUFDbEMsT0FBZSxFQUNmLEtBQWMsRUFDZCxHQUFZLEVBQ1osZ0JBQXlCO0FBU1YsSUFLakIseUNBQWlCLGFBQUMsT0FBZSxFQUFFLEtBQWE7QUFNMUIsSUFVdEIsd0NBQWdCLGFBQUMsT0FBZSxFQUFFLEtBQWMsRUFBRSxHQUFZO0FBTWYsSUFXL0Msa0RBQTBCLGFBQUMsUUFBZ0IsRUFBRSxPQUFlLEVBQUUsS0FBYyxFQUFFLEdBQVk7QUFPckQsSUFNckMsbUNBQVcsYUFBQyxNQUFjLEVBQUUsV0FBbUI7QUFNckMsSUFLVix3Q0FBZ0I7QUFPQSxJQVloQixxQ0FBYSxhQUNYLE9BQWUsRUFDZixPQUFlLEVBQ2YsRUFBWSxFQUNaLEVBQWEsRUFDYixHQUFjLEVBQ2QsS0FBeUI7QUFPa0MsSUFZN0QsZ0NBQVEsYUFBQyxPQUFlLEVBQUUsT0FBZSxFQUFFLE9BQWdCLEVBQUUsS0FBYyxFQUFFLEdBQVk7QUFNckUsSUFNcEIsK0NBQXVCLGFBQUMsWUFBb0I7QUFJTCxJQU12Qyx3Q0FBZ0IsYUFBQyxlQUFrQztBQUtWLElBWXpDLCtDQUF1QixhQUFDLEtBQWEsRUFBRSxPQUFlLEVBQUUsZUFBa0MsRUFBRSxHQUFZO0FBSUY7QUFBZ0Q7QUFBNkQ7QUFBdUQ7QUFBNEY7aURBclF2VyxVQUFVOzs7OzswQkFDTDtBQUFDLHdCQTFDUDtBQUFFLEVBMENpQyxpQkFBaUI7QUFDbkQsU0FEWSxhQUFhO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBTb2NpYWwgU2hhcmluZ1xuICogQHByZW1pZXIgc29jaWFsLXNoYXJpbmdcbiAqIEBkZXNjcmlwdGlvblxuICogU2hhcmUgdGV4dCwgZmlsZXMsIGltYWdlcywgYW5kIGxpbmtzIHZpYSBzb2NpYWwgbmV0d29ya3MsIHNtcywgYW5kIGVtYWlsLlxuICpcbiAqIEZvciBCcm93c2VyIHVzYWdlIGNoZWNrIG91dCB0aGUgV2ViIFNoYXJlIEFQSSBkb2NzOiBodHRwczovL2dpdGh1Yi5jb20vRWRkeVZlcmJydWdnZW4vU29jaWFsU2hhcmluZy1QaG9uZUdhcC1QbHVnaW4jNS13ZWItc2hhcmUtYXBpXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBTb2NpYWxTaGFyaW5nIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zb2NpYWwtc2hhcmluZy9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc29jaWFsU2hhcmluZzogU29jaWFsU2hhcmluZykgeyB9XG4gKlxuICogLi4uXG4gKlxuICogLy8gQ2hlY2sgaWYgc2hhcmluZyB2aWEgZW1haWwgaXMgc3VwcG9ydGVkXG4gKiB0aGlzLnNvY2lhbFNoYXJpbmcuY2FuU2hhcmVWaWFFbWFpbCgpLnRoZW4oKCkgPT4ge1xuICogICAvLyBTaGFyaW5nIHZpYSBlbWFpbCBpcyBwb3NzaWJsZVxuICogfSkuY2F0Y2goKCkgPT4ge1xuICogICAvLyBTaGFyaW5nIHZpYSBlbWFpbCBpcyBub3QgcG9zc2libGVcbiAqIH0pO1xuICpcbiAqIC8vIFNoYXJlIHZpYSBlbWFpbFxuICogdGhpcy5zb2NpYWxTaGFyaW5nLnNoYXJlVmlhRW1haWwoJ0JvZHknLCAnU3ViamVjdCcsIFsncmVjaXBpZW50QGV4YW1wbGUub3JnJ10pLnRoZW4oKCkgPT4ge1xuICogICAvLyBTdWNjZXNzIVxuICogfSkuY2F0Y2goKCkgPT4ge1xuICogICAvLyBFcnJvciFcbiAqIH0pO1xuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnU29jaWFsU2hhcmluZycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXgtc29jaWFsc2hhcmluZycsXG4gIHBsdWdpblJlZjogJ3BsdWdpbnMuc29jaWFsc2hhcmluZycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vRWRkeVZlcmJydWdnZW4vU29jaWFsU2hhcmluZy1QaG9uZUdhcC1QbHVnaW4nLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdCcm93c2VyJywgJ2lPUycsICdXaW5kb3dzJywgJ1dpbmRvd3MgUGhvbmUnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU29jaWFsU2hhcmluZyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFNoYXJlcyB1c2luZyB0aGUgc2hhcmUgc2hlZXRcbiAgICogQHBhcmFtIG1lc3NhZ2Uge3N0cmluZ30gVGhlIG1lc3NhZ2UgeW91IHdvdWxkIGxpa2UgdG8gc2hhcmUuXG4gICAqIEBwYXJhbSBzdWJqZWN0IHtzdHJpbmd9IFRoZSBzdWJqZWN0XG4gICAqIEBwYXJhbSBmaWxlIHtzdHJpbmd8c3RyaW5nW119IFVSTChzKSB0byBmaWxlKHMpIG9yIGltYWdlKHMpLCBsb2NhbCBwYXRoKHMpIHRvIGZpbGUocykgb3IgaW1hZ2UocyksIG9yIGJhc2U2NCBkYXRhIG9mIGFuIGltYWdlLiBPbmx5IHRoZSBmaXJzdCBmaWxlL2ltYWdlIHdpbGwgYmUgdXNlZCBvbiBXaW5kb3dzIFBob25lLlxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IEEgVVJMIHRvIHNoYXJlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiA0LFxuICAgIGVycm9ySW5kZXg6IDUsXG4gIH0pXG4gIHNoYXJlKG1lc3NhZ2U/OiBzdHJpbmcsIHN1YmplY3Q/OiBzdHJpbmcsIGZpbGU/OiBzdHJpbmcgfCBzdHJpbmdbXSwgdXJsPzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hhcmVzIHVzaW5nIHRoZSBzaGFyZSBzaGVldCB3aXRoIGFkZGl0aW9uYWwgb3B0aW9ucyBhbmQgcmV0dXJucyBhIHJlc3VsdCBvYmplY3Qgb3IgYW4gZXJyb3IgbWVzc2FnZSAocmVxdWlyZXMgcGx1Z2luIHZlcnNpb24gNS4xLjArKVxuICAgKiBAcGFyYW0gb3B0aW9ucyB7b2JqZWN0fSBUaGUgb3B0aW9ucyBvYmplY3Qgd2l0aCB0aGUgbWVzc2FnZSwgc3ViamVjdCwgZmlsZXMsIHVybCBhbmQgY2hvb3NlclRpdGxlIHByb3BlcnRpZXMuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXG4gIH0pXG4gIHNoYXJlV2l0aE9wdGlvbnMob3B0aW9uczoge1xuICAgIG1lc3NhZ2U/OiBzdHJpbmc7XG4gICAgc3ViamVjdD86IHN0cmluZztcbiAgICBmaWxlcz86IHN0cmluZyB8IHN0cmluZ1tdO1xuICAgIHVybD86IHN0cmluZztcbiAgICBjaG9vc2VyVGl0bGU/OiBzdHJpbmc7XG4gIH0pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgeW91IGNhbiBzaGFyZSB2aWEgYSBzcGVjaWZpYyBhcHAuXG4gICAqIEBwYXJhbSBhcHBOYW1lIHtzdHJpbmd9IEFwcCBuYW1lIG9yIHBhY2thZ2UgbmFtZS4gRXhhbXBsZXM6IGluc3RhZ3JhbSBvciBjb20uYXBwbGUuc29jaWFsLmZhY2Vib29rXG4gICAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBzdWJqZWN0IHtzdHJpbmd9XG4gICAqIEBwYXJhbSBpbWFnZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiA1LFxuICAgIGVycm9ySW5kZXg6IDYsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXG4gIH0pXG4gIGNhblNoYXJlVmlhKGFwcE5hbWU6IHN0cmluZywgbWVzc2FnZT86IHN0cmluZywgc3ViamVjdD86IHN0cmluZywgaW1hZ2U/OiBzdHJpbmcsIHVybD86IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNoYXJlcyBkaXJlY3RseSB0byBUd2l0dGVyXG4gICAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBpbWFnZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAzLFxuICAgIGVycm9ySW5kZXg6IDQsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXG4gIH0pXG4gIHNoYXJlVmlhVHdpdHRlcihtZXNzYWdlOiBzdHJpbmcsIGltYWdlPzogc3RyaW5nLCB1cmw/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaGFyZXMgZGlyZWN0bHkgdG8gRmFjZWJvb2tcbiAgICogQHBhcmFtIG1lc3NhZ2Uge3N0cmluZ31cbiAgICogQHBhcmFtIGltYWdlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ31cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDMsXG4gICAgZXJyb3JJbmRleDogNCxcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXSxcbiAgfSlcbiAgc2hhcmVWaWFGYWNlYm9vayhtZXNzYWdlOiBzdHJpbmcsIGltYWdlPzogc3RyaW5nLCB1cmw/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaGFyZXMgZGlyZWN0bHkgdG8gRmFjZWJvb2sgd2l0aCBhIHBhc3RlIG1lc3NhZ2UgaGludFxuICAgKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gaW1hZ2Uge3N0cmluZ31cbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfVxuICAgKiBAcGFyYW0gcGFzdGVNZXNzYWdlSGludCB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogNCxcbiAgICBlcnJvckluZGV4OiA1LFxuICAgIHBsYXRmb3JtczogWydpT1MnLCAnQW5kcm9pZCddLFxuICB9KVxuICBzaGFyZVZpYUZhY2Vib29rV2l0aFBhc3RlTWVzc2FnZUhpbnQoXG4gICAgbWVzc2FnZTogc3RyaW5nLFxuICAgIGltYWdlPzogc3RyaW5nLFxuICAgIHVybD86IHN0cmluZyxcbiAgICBwYXN0ZU1lc3NhZ2VIaW50Pzogc3RyaW5nXG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNoYXJlcyBkaXJlY3RseSB0byBJbnN0YWdyYW1cbiAgICogQHBhcmFtIG1lc3NhZ2Uge3N0cmluZ31cbiAgICogQHBhcmFtIGltYWdlIHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXG4gIH0pXG4gIHNoYXJlVmlhSW5zdGFncmFtKG1lc3NhZ2U6IHN0cmluZywgaW1hZ2U6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNoYXJlcyBkaXJlY3RseSB0byBXaGF0c0FwcFxuICAgKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gaW1hZ2Uge3N0cmluZ31cbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMyxcbiAgICBlcnJvckluZGV4OiA0LFxuICAgIHBsYXRmb3JtczogWydpT1MnLCAnQW5kcm9pZCddLFxuICB9KVxuICBzaGFyZVZpYVdoYXRzQXBwKG1lc3NhZ2U6IHN0cmluZywgaW1hZ2U/OiBzdHJpbmcsIHVybD86IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNoYXJlcyBkaXJlY3RseSB0byBhIFdoYXRzQXBwIENvbnRhY3RcbiAgICogQHBhcmFtIHJlY2VpdmVyIHtzdHJpbmd9IFBhc3MgcGhvbmUgbnVtYmVyIG9uIEFuZHJvaWQsIGFuZCBBZGRyZXNzYm9vayBJRCAoYWJpZCkgb24gaU9TXG4gICAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmd9IE1lc3NhZ2UgdG8gc2VuZFxuICAgKiBAcGFyYW0gaW1hZ2Uge3N0cmluZ30gSW1hZ2UgdG8gc2VuZCAoZG9lcyBub3Qgd29yayBvbiBpT1NcbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBMaW5rIHRvIHNlbmRcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDQsXG4gICAgZXJyb3JJbmRleDogNSxcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXSxcbiAgfSlcbiAgc2hhcmVWaWFXaGF0c0FwcFRvUmVjZWl2ZXIocmVjZWl2ZXI6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nLCBpbWFnZT86IHN0cmluZywgdXJsPzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hhcmUgdmlhIFNNU1xuICAgKiBAcGFyYW0gbWVzc2dlIHtzdHJpbmd9IG1lc3NhZ2UgdG8gc2VuZFxuICAgKiBAcGFyYW0gcGhvbmVOdW1iZXIge3N0cmluZ30gTnVtYmVyIG9yIG11bHRpcGxlIG51bWJlcnMgc2VwZXJhdGVkIGJ5IGNvbW1hc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydpT1MnLCAnQW5kcm9pZCddLFxuICB9KVxuICBzaGFyZVZpYVNNUyhtZXNzZ2U6IHN0cmluZywgcGhvbmVOdW1iZXI6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB5b3UgY2FuIHNoYXJlIHZpYSBlbWFpbFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydpT1MnLCAnQW5kcm9pZCddLFxuICB9KVxuICBjYW5TaGFyZVZpYUVtYWlsKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNoYXJlIHZpYSBFbWFpbFxuICAgKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gc3ViamVjdCB7c3RyaW5nfVxuICAgKiBAcGFyYW0gdG8ge3N0cmluZ1tdfVxuICAgKiBAcGFyYW0gY2Mge3N0cmluZ1tdfSBPcHRpb25hbFxuICAgKiBAcGFyYW0gYmNjIHtzdHJpbmdbXX0gT3B0aW9uYWxcbiAgICogQHBhcmFtIGZpbGVzIHtzdHJpbmd8c3RyaW5nW119IE9wdGlvbmFsIFVSTCBvciBsb2NhbCBwYXRoIHRvIGZpbGUocykgdG8gYXR0YWNoXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXG4gICAgc3VjY2Vzc0luZGV4OiA2LFxuICAgIGVycm9ySW5kZXg6IDcsXG4gIH0pXG4gIHNoYXJlVmlhRW1haWwoXG4gICAgbWVzc2FnZTogc3RyaW5nLFxuICAgIHN1YmplY3Q6IHN0cmluZyxcbiAgICB0bzogc3RyaW5nW10sXG4gICAgY2M/OiBzdHJpbmdbXSxcbiAgICBiY2M/OiBzdHJpbmdbXSxcbiAgICBmaWxlcz86IHN0cmluZyB8IHN0cmluZ1tdXG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNoYXJlIHZpYSBBcHBOYW1lXG4gICAqIEBwYXJhbSBhcHBOYW1lIHtzdHJpbmd9IEFwcCBuYW1lIG9yIHBhY2thZ2UgbmFtZS4gRXhhbXBsZXM6IGluc3RhZ3JhbSBvciBjb20uYXBwbGUuc29jaWFsLmZhY2Vib29rXG4gICAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBzdWJqZWN0IHtzdHJpbmd9XG4gICAqIEBwYXJhbSBpbWFnZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiA1LFxuICAgIGVycm9ySW5kZXg6IDYsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXG4gIH0pXG4gIHNoYXJlVmlhKGFwcE5hbWU6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nLCBzdWJqZWN0Pzogc3RyaW5nLCBpbWFnZT86IHN0cmluZywgdXJsPzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogZGVmaW5lcyB0aGUgcG9wdXAgcG9zaXRpb24gYmVmb3JlIGNhbGwgdGhlIHNoYXJlIG1ldGhvZC5cbiAgICogQHBhcmFtIHRhcmdldEJvdW5kcyB7c3RyaW5nfSBsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICAgIHBsYXRmb3JtczogWydpT1MnXSxcbiAgfSlcbiAgc2V0SVBhZFBvcHVwQ29vcmRpbmF0ZXModGFyZ2V0Qm91bmRzOiBzdHJpbmcpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFNhdmUgYW4gYXJyYXkgb2YgaW1hZ2VzIHRvIHRoZSBjYW1lcmEgcm9sbFxuICAgKiBAcGFyYW0gIHtzdHJpbmd8c3RyaW5nW119IGZpbGVPckZpbGVBcnJheSBTaW5nbGUgb3IgbXVsdGlwbGUgZmlsZXNcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55PiB9XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ2lPUyddLFxuICB9KVxuICBzYXZlVG9QaG90b0FsYnVtKGZpbGVPckZpbGVBcnJheTogc3RyaW5nIHwgc3RyaW5nW10pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuICBcbiAgLyoqXG4gICAqIFNoYXJlcyBkaXJlY3RseSB0byBhIFdoYXRzQXBwIENvbnRhY3Qgd2l0aCBwaG9uZSBudW1iZXIuXG4gICAqIEBwYXJhbSBwaG9uZSB7c3RyaW5nfSBQYXNzIHBob25lIG51bWJlclxuICAgKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfSBNZXNzYWdlIHRvIHNlbmRcbiAgICogQHBhcmFtIGZpbGVPckZpbGVBcnJheSBmaWxlT3JGaWxlQXJyYXkgU2luZ2xlIG9yIG11bHRpcGxlIGZpbGVzXG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gTGluayB0byBzZW5kXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiA1LFxuICAgIGVycm9ySW5kZXg6IDYsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXG4gIH0pXG4gIHNoYXJlVmlhV2hhdHNBcHBUb1Bob25lKHBob25lOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZywgZmlsZU9yRmlsZUFycmF5OiBzdHJpbmcgfCBzdHJpbmdbXSwgdXJsPzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==

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



/***/ })

}]);
//# sourceMappingURL=default~pages-productdetail-productdetail-module~pages-wallet-refer-earn-refer-earn-module.js.map