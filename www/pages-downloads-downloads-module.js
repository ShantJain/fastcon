(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-downloads-downloads-module"],{

/***/ "0SfU":
/*!**********************************************!*\
  !*** ./src/app/pages/downloads/downloads.ts ***!
  \**********************************************/
/*! exports provided: DownloadsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadsPage", function() { return DownloadsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_downloads_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./downloads.html */ "EyIw");
/* harmony import */ var _downloads_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./downloads.scss */ "P8ik");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _services_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/providers */ "fC+V");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file/ngx */ "FAH8");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "B7Rs");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "WOgW");










let DownloadsPage = class DownloadsPage {
    constructor(navCtrl, WC, platform, toast, file, transfer, alertCtrl, zone, androidPermissions, loader, user, translate) {
        this.navCtrl = navCtrl;
        this.WC = WC;
        this.platform = platform;
        this.toast = toast;
        this.file = file;
        this.transfer = transfer;
        this.alertCtrl = alertCtrl;
        this.zone = zone;
        this.androidPermissions = androidPermissions;
        this.loader = loader;
        this.user = user;
        this.translate = translate;
        this.storageDirectory = '';
        this.WC.getDownloads(user.id).then((data) => {
            console.log(data);
            this.zone.run(() => {
                this.downloads = data;
            });
        }, (err) => {
            toast.showError();
        });
        if (!this.platform.is('cordova')) {
            this.translate.get(['ONLY_DEVICE']).subscribe(x => {
                this.toast.show(x.ONLY_DEVICE);
                return;
            });
        }
        if (this.platform.is('ios')) {
            this.storageDirectory = this.file.documentsDirectory;
        }
        else if (this.platform.is('android')) {
            this.storageDirectory = this.file.externalRootDirectory;
        }
    }
    ionViewDidEnter() {
        console.log('ionViewDidEnter DownloadsPage');
    }
    checkPermissionAndDownload(url, fileName) {
        if (!this.platform.is('cordova')) {
            this.translate.get(['ONLY_DEVICE', 'ONLY_DEVICE_DESC', 'OK']).subscribe(x => {
                this.presentAlert(x.ONLY_DEVICE, x.ONLY_DEVICE_DESC, "", [{
                        text: x.OK
                    }]);
            });
            return;
        }
        if (this.platform.is('android')) {
            this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(result => {
                console.log('Has permission?', result.hasPermission);
                if (result.hasPermission) {
                    this.downloadNow(url, fileName);
                }
            }, err => {
                this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE);
            });
        }
        else {
            this.downloadNow(url, fileName);
        }
    }
    downloadNow(url, fileName) {
        const fileTransfer = this.transfer.create();
        this.loader.show();
        this.translate.get(['OK', 'DOWNLOAD_SUCCESS', 'DOWNLOAD_FAILED']).subscribe((x) => {
            fileTransfer.download(url, this.storageDirectory + fileName).then((entry) => {
                this.loader.dismiss();
                this.presentAlert(x.DOWNLOAD_SUCCESS, fileName + ' was successfully downloaded to: ' + entry.toURL(), "", [x.OK]);
            }, (error) => {
                // handle error
                this.loader.dismiss();
                this.presentAlert(x.DOWNLOAD_FAILED, fileName + ' was not downloaded. Error code: ' + error.code, "", [x.OK]);
            });
            fileTransfer.onProgress((progress) => {
                this.progress = progress;
            });
        });
    }
    presentAlert(header, message, cssClass, buttons) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: header,
                cssClass: cssClass,
                message: message,
                buttons: buttons
            });
            yield alert.present();
        });
    }
};
DownloadsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_4__["WooCommerceProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_4__["ToastProvider"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__["FileTransfer"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgZone"] },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_9__["AndroidPermissions"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_4__["LoadingProvider"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_4__["UserProvider"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }
];
DownloadsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'page-downloads',
        template: _raw_loader_downloads_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_downloads_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DownloadsPage);



/***/ }),

/***/ "B7Rs":
/*!****************************************************************************!*\
  !*** ./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js ***!
  \****************************************************************************/
/*! exports provided: FileTransfer, FileTransferObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileTransfer", function() { return FileTransfer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileTransferObject", function() { return FileTransferObject; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "C6fG");




var FileTransfer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FileTransfer, _super);
    function FileTransfer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Error code rejected from upload with FileTransferError
         * Defined in FileTransferError.
         *      FILE_NOT_FOUND_ERR: 1   Return when file was not found
         *      INVALID_URL_ERR: 2,     Return when url was invalid
         *      CONNECTION_ERR: 3,      Return on connection error
         *      ABORT_ERR: 4,           Return on aborting
         *      NOT_MODIFIED_ERR: 5     Return on '304 Not Modified' HTTP response
         * @enum {number}
         */
        _this.FileTransferErrorCode = {
            FILE_NOT_FOUND_ERR: 1,
            INVALID_URL_ERR: 2,
            CONNECTION_ERR: 3,
            ABORT_ERR: 4,
            NOT_MODIFIED_ERR: 5,
        };
        return _this;
    }
    /**
     * Creates a new FileTransfer object
     * @return {FileTransferObject}
     */
    FileTransfer.prototype.create = function () {
        return new FileTransferObject();
    };
    FileTransfer.pluginName = "FileTransfer";
    FileTransfer.plugin = "cordova-plugin-file-transfer";
    FileTransfer.pluginRef = "FileTransfer";
    FileTransfer.repo = "https://github.com/apache/cordova-plugin-file-transfer";
    FileTransfer.platforms = ["Amazon Fire OS", "Android", "Browser", "iOS", "Ubuntu", "Windows", "Windows Phone"];
FileTransfer.ɵfac = function FileTransfer_Factory(t) { return ɵFileTransfer_BaseFactory(t || FileTransfer); };
FileTransfer.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FileTransfer, factory: function (t) { return FileTransfer.ɵfac(t); } });
var ɵFileTransfer_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](FileTransfer);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FileTransfer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();
    return FileTransfer;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));

var FileTransferObject = /** @class */ (function () {
    function FileTransferObject() {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(FileTransfer.getPluginRef(), null, FileTransfer.getPluginName()) === true) {
            this._objectInstance = new (FileTransfer.getPlugin())();
        }
    }
    FileTransferObject.prototype.upload = function (fileUrl, url, options, trustAllHosts) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaInstance"])(this, "upload", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    FileTransferObject.prototype.download = function (source, target, trustAllHosts, options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaInstance"])(this, "download", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    FileTransferObject.prototype.onProgress = function (listener) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["instanceAvailability"])(_this) === true) {
                _this._objectInstance.onprogress = listener;
            }
        })();
    };
    FileTransferObject.prototype.abort = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaInstance"])(this, "abort", { "sync": true }, arguments); };
    FileTransferObject.plugin = "cordova-plugin-file-transfer";
    FileTransferObject.pluginName = "FileTransfer";
    return FileTransferObject;
}());


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvZmlsZS10cmFuc2Zlci9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw0REFBNkQsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFDbEg7QUFHVSxJQXlLd0IsZ0NBQWlCO0FBQUM7QUFFOUI7QUFFakIsUUFISDtBQUNGO0FBQ007QUFDTTtBQUNNO0FBQ007QUFDTTtBQUNNO0FBR3BCO0FBQ0YsV0FGVDtBQUNMLFFBQUUsMkJBQXFCLEdBQUc7QUFDMUIsWUFBSSxrQkFBa0IsRUFBRSxDQUFDO0FBQ3pCLFlBQUksZUFBZSxFQUFFLENBQUM7QUFDdEIsWUFBSSxjQUFjLEVBQUUsQ0FBQztBQUNyQixZQUFJLFNBQVMsRUFBRSxDQUFDO0FBQ2hCLFlBQUksZ0JBQWdCLEVBQUUsQ0FBQztBQUN2QixTQUFHLENBQUM7QUFDSjtBQUVlO0FBQU0sSUFEbkI7QUFDRjtBQUNFO0FBQ0UsT0FBQztBQUNMLElBQUUsNkJBQU0sR0FBTjtBQUFjLFFBQ1osT0FBTyxJQUFJLGtCQUFrQixFQUFFLENBQUM7QUFDcEMsSUFBRSxDQUFDO0FBQ0Y7QUFNYztBQUVkO0FBRVE7QUFHK0I7Z0RBeEN2QyxVQUFVOzs7OzswQkFDTDtBQUFDLHVCQTlLUDtBQUFFLEVBOEtnQyxpQkFBaUI7QUFDbEQsU0FEWSxZQUFZO0FBQUk7QUFFTixJQW9DckI7QUFDYyxRQUFaLElBQUksaUJBQWlCLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxFQUFFLElBQUksRUFBRSxZQUFZLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBSyxJQUFJLEVBQUU7QUFDckcsWUFBTSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDO0FBQzlELFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQWNFLG1DQUFNLGFBQ0osT0FBZSxFQUNmLEdBQVcsRUFDWCxPQUEyQixFQUMzQixhQUF1QjtBQVExQixJQVVDLHFDQUFRLGFBQUMsTUFBYyxFQUFFLE1BQWMsRUFBRSxhQUF1QixFQUFFLE9BQThCO0FBS3ZDLElBSXpELHVDQUFVLGFBQUMsUUFBdUM7QUFBSTtBQUNwQztBQUNsQixzREFGMEQ7QUFDNUQsZ0JBQUksS0FBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO0FBQy9DLGFBQUc7QUFDSDtBQUVPO0FBQU8sSUFNWixrQ0FBSztBQUVtRTtBQUFnRTtBQUFvRCw2QkFuUjlMO0FBQUU7QUFBTSxTQWlOSyxrQkFBa0I7QUFDOUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhSW5zdGFuY2UsIEluc3RhbmNlQ2hlY2ssIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4sIGNoZWNrQXZhaWxhYmlsaXR5IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBGaWxlVXBsb2FkT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBUaGUgbmFtZSBvZiB0aGUgZm9ybSBlbGVtZW50LlxuICAgKiBEZWZhdWx0cyB0byAnZmlsZScuXG4gICAqL1xuICBmaWxlS2V5Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgZmlsZSBuYW1lIHRvIHVzZSB3aGVuIHNhdmluZyB0aGUgZmlsZSBvbiB0aGUgc2VydmVyLlxuICAgKiBEZWZhdWx0cyB0byAnaW1hZ2UuanBnJy5cbiAgICovXG4gIGZpbGVOYW1lPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgSFRUUCBtZXRob2QgdG8gdXNlIC0gZWl0aGVyIFBVVCBvciBQT1NULlxuICAgKiBEZWZhdWx0cyB0byBQT1NULlxuICAgKi9cbiAgaHR0cE1ldGhvZD86IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIG1pbWUgdHlwZSBvZiB0aGUgZGF0YSB0byB1cGxvYWQuXG4gICAqIERlZmF1bHRzIHRvIGltYWdlL2pwZWcuXG4gICAqL1xuICBtaW1lVHlwZT86IHN0cmluZztcblxuICAvKipcbiAgICogQSBzZXQgb2Ygb3B0aW9uYWwga2V5L3ZhbHVlIHBhaXJzIHRvIHBhc3MgaW4gdGhlIEhUVFAgcmVxdWVzdC5cbiAgICovXG4gIHBhcmFtcz86IHsgW3M6IHN0cmluZ106IGFueSB9O1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIHVwbG9hZCB0aGUgZGF0YSBpbiBjaHVua2VkIHN0cmVhbWluZyBtb2RlLlxuICAgKiBEZWZhdWx0cyB0byB0cnVlLlxuICAgKi9cbiAgY2h1bmtlZE1vZGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBIG1hcCBvZiBoZWFkZXIgbmFtZS9oZWFkZXIgdmFsdWVzLiBVc2UgYW4gYXJyYXkgdG8gc3BlY2lmeSBtb3JlXG4gICAqIHRoYW4gb25lIHZhbHVlLiBPbiBpT1MsIEZpcmVPUywgYW5kIEFuZHJvaWQsIGlmIGEgaGVhZGVyIG5hbWVkXG4gICAqIENvbnRlbnQtVHlwZSBpcyBwcmVzZW50LCBtdWx0aXBhcnQgZm9ybSBkYXRhIHdpbGwgTk9UIGJlIHVzZWQuXG4gICAqL1xuICBoZWFkZXJzPzogeyBbczogc3RyaW5nXTogYW55IH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmlsZVVwbG9hZFJlc3VsdCB7XG4gIC8qKlxuICAgKiBUaGUgbnVtYmVyIG9mIGJ5dGVzIHNlbnQgdG8gdGhlIHNlcnZlciBhcyBwYXJ0IG9mIHRoZSB1cGxvYWQuXG4gICAqL1xuICBieXRlc1NlbnQ6IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIEhUVFAgcmVzcG9uc2UgY29kZSByZXR1cm5lZCBieSB0aGUgc2VydmVyLlxuICAgKi9cbiAgcmVzcG9uc2VDb2RlOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBIVFRQIHJlc3BvbnNlIHJldHVybmVkIGJ5IHRoZSBzZXJ2ZXIuXG4gICAqL1xuICByZXNwb25zZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgSFRUUCByZXNwb25zZSBoZWFkZXJzIGJ5IHRoZSBzZXJ2ZXIuXG4gICAqL1xuICBoZWFkZXJzOiB7IFtzOiBzdHJpbmddOiBhbnkgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaWxlVHJhbnNmZXJFcnJvciB7XG4gIC8qKlxuICAgKiBPbmUgb2YgdGhlIHByZWRlZmluZWQgZXJyb3IgY29kZXMgbGlzdGVkIGJlbG93LlxuICAgKi9cbiAgY29kZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBVUkwgdG8gdGhlIHNvdXJjZS5cbiAgICovXG4gIHNvdXJjZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBVUkwgdG8gdGhlIHRhcmdldC5cbiAgICovXG4gIHRhcmdldDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBIVFRQIHN0YXR1cyBjb2RlLiBUaGlzIGF0dHJpYnV0ZSBpcyBvbmx5IGF2YWlsYWJsZSB3aGVuIGEgcmVzcG9uc2VcbiAgICogY29kZSBpcyByZWNlaXZlZCBmcm9tIHRoZSBIVFRQIGNvbm5lY3Rpb24uXG4gICAqL1xuICBodHRwX3N0YXR1czogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBSZXNwb25zZSBib2R5LiBUaGlzIGF0dHJpYnV0ZSBpcyBvbmx5IGF2YWlsYWJsZSB3aGVuIGEgcmVzcG9uc2UgaXMgcmVjZWl2ZWQgZnJvbSB0aGUgSFRUUCBjb25uZWN0aW9uLlxuICAgKi9cbiAgYm9keTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBFaXRoZXIgZS5nZXRNZXNzYWdlIG9yIGUudG9TdHJpbmcuXG4gICAqL1xuICBleGNlcHRpb246IHN0cmluZztcbn1cblxuLyoqXG4gKiBAbmFtZSBGaWxlIFRyYW5zZmVyXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBhbGxvd3MgeW91IHRvIHVwbG9hZCBhbmQgZG93bmxvYWQgZmlsZXMuXG4gKiBcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgRmlsZVRyYW5zZmVyLCBGaWxlVXBsb2FkT3B0aW9ucywgRmlsZVRyYW5zZmVyT2JqZWN0IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9maWxlLXRyYW5zZmVyL25neCc7XG4gKiBpbXBvcnQgeyBGaWxlIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9maWxlJztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zZmVyOiBGaWxlVHJhbnNmZXIsIHByaXZhdGUgZmlsZTogRmlsZSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogY29uc3QgZmlsZVRyYW5zZmVyOiBGaWxlVHJhbnNmZXJPYmplY3QgPSB0aGlzLnRyYW5zZmVyLmNyZWF0ZSgpO1xuICpcbiAqIC8vIFVwbG9hZCBhIGZpbGU6XG4gKiBmaWxlVHJhbnNmZXIudXBsb2FkKC4uKS50aGVuKC4uKS5jYXRjaCguLik7XG4gKlxuICogLy8gRG93bmxvYWQgYSBmaWxlOlxuICogZmlsZVRyYW5zZmVyLmRvd25sb2FkKC4uKS50aGVuKC4uKS5jYXRjaCguLik7XG4gKlxuICogLy8gQWJvcnQgYWN0aXZlIHRyYW5zZmVyOlxuICogZmlsZVRyYW5zZmVyLmFib3J0KCk7XG4gKlxuICogLy8gZnVsbCBleGFtcGxlXG4gKiB1cGxvYWQoKSB7XG4gKiAgIGxldCBvcHRpb25zOiBGaWxlVXBsb2FkT3B0aW9ucyA9IHtcbiAqICAgICAgZmlsZUtleTogJ2ZpbGUnLFxuICogICAgICBmaWxlTmFtZTogJ25hbWUuanBnJyxcbiAqICAgICAgaGVhZGVyczoge31cbiAqICAgICAgLi4uLi5cbiAqICAgfVxuICpcbiAqICAgZmlsZVRyYW5zZmVyLnVwbG9hZCgnPGZpbGUgcGF0aD4nLCAnPGFwaSBlbmRwb2ludD4nLCBvcHRpb25zKVxuICogICAgLnRoZW4oKGRhdGEpID0+IHtcbiAqICAgICAgLy8gc3VjY2Vzc1xuICogICAgfSwgKGVycikgPT4ge1xuICogICAgICAvLyBlcnJvclxuICogICAgfSlcbiAqIH1cbiAqXG4gKiBkb3dubG9hZCgpIHtcbiAqICAgY29uc3QgdXJsID0gJ2h0dHA6Ly93d3cuZXhhbXBsZS5jb20vZmlsZS5wZGYnO1xuICogICBmaWxlVHJhbnNmZXIuZG93bmxvYWQodXJsLCB0aGlzLmZpbGUuZGF0YURpcmVjdG9yeSArICdmaWxlLnBkZicpLnRoZW4oKGVudHJ5KSA9PiB7XG4gKiAgICAgY29uc29sZS5sb2coJ2Rvd25sb2FkIGNvbXBsZXRlOiAnICsgZW50cnkudG9VUkwoKSk7XG4gKiAgIH0sIChlcnJvcikgPT4ge1xuICogICAgIC8vIGhhbmRsZSBlcnJvclxuICogICB9KTtcbiAqIH1cbiAqXG4gKiBgYGBcbiAqXG4gKiBUbyBzdG9yZSBmaWxlcyBpbiBhIGRpZmZlcmVudC9wdWJsaWNseSBhY2Nlc3NpYmxlIGRpcmVjdG9yeSwgcGxlYXNlIHJlZmVyIHRvIHRoZSBmb2xsb3dpbmcgbGlua1xuICogaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1maWxlI3doZXJlLXRvLXN0b3JlLWZpbGVzXG4gKlxuICogQGludGVyZmFjZXNcbiAqIEZpbGVVcGxvYWRPcHRpb25zXG4gKiBGaWxlVXBsb2FkUmVzdWx0XG4gKiBGaWxlVHJhbnNmZXJFcnJvclxuICogQGNsYXNzZXNcbiAqIEZpbGVUcmFuc2Zlck9iamVjdFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0ZpbGVUcmFuc2ZlcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWZpbGUtdHJhbnNmZXInLFxuICBwbHVnaW5SZWY6ICdGaWxlVHJhbnNmZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1maWxlLXRyYW5zZmVyJyxcbiAgcGxhdGZvcm1zOiBbJ0FtYXpvbiBGaXJlIE9TJywgJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnLCAnVWJ1bnR1JywgJ1dpbmRvd3MnLCAnV2luZG93cyBQaG9uZSddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWxlVHJhbnNmZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBFcnJvciBjb2RlIHJlamVjdGVkIGZyb20gdXBsb2FkIHdpdGggRmlsZVRyYW5zZmVyRXJyb3JcbiAgICogRGVmaW5lZCBpbiBGaWxlVHJhbnNmZXJFcnJvci5cbiAgICogICAgICBGSUxFX05PVF9GT1VORF9FUlI6IDEgICBSZXR1cm4gd2hlbiBmaWxlIHdhcyBub3QgZm91bmRcbiAgICogICAgICBJTlZBTElEX1VSTF9FUlI6IDIsICAgICBSZXR1cm4gd2hlbiB1cmwgd2FzIGludmFsaWRcbiAgICogICAgICBDT05ORUNUSU9OX0VSUjogMywgICAgICBSZXR1cm4gb24gY29ubmVjdGlvbiBlcnJvclxuICAgKiAgICAgIEFCT1JUX0VSUjogNCwgICAgICAgICAgIFJldHVybiBvbiBhYm9ydGluZ1xuICAgKiAgICAgIE5PVF9NT0RJRklFRF9FUlI6IDUgICAgIFJldHVybiBvbiAnMzA0IE5vdCBNb2RpZmllZCcgSFRUUCByZXNwb25zZVxuICAgKiBAZW51bSB7bnVtYmVyfVxuICAgKi9cbiAgRmlsZVRyYW5zZmVyRXJyb3JDb2RlID0ge1xuICAgIEZJTEVfTk9UX0ZPVU5EX0VSUjogMSxcbiAgICBJTlZBTElEX1VSTF9FUlI6IDIsXG4gICAgQ09OTkVDVElPTl9FUlI6IDMsXG4gICAgQUJPUlRfRVJSOiA0LFxuICAgIE5PVF9NT0RJRklFRF9FUlI6IDUsXG4gIH07XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgRmlsZVRyYW5zZmVyIG9iamVjdFxuICAgKiBAcmV0dXJuIHtGaWxlVHJhbnNmZXJPYmplY3R9XG4gICAqL1xuICBjcmVhdGUoKTogRmlsZVRyYW5zZmVyT2JqZWN0IHtcbiAgICByZXR1cm4gbmV3IEZpbGVUcmFuc2Zlck9iamVjdCgpO1xuICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZmlsZS10cmFuc2ZlcicsXG4gIHBsdWdpbk5hbWU6ICdGaWxlVHJhbnNmZXInLFxufSlcbmV4cG9ydCBjbGFzcyBGaWxlVHJhbnNmZXJPYmplY3Qge1xuICBwcml2YXRlIF9vYmplY3RJbnN0YW5jZTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGlmIChjaGVja0F2YWlsYWJpbGl0eShGaWxlVHJhbnNmZXIuZ2V0UGx1Z2luUmVmKCksIG51bGwsIEZpbGVUcmFuc2Zlci5nZXRQbHVnaW5OYW1lKCkpID09PSB0cnVlKSB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZSA9IG5ldyAoRmlsZVRyYW5zZmVyLmdldFBsdWdpbigpKSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kcyBhIGZpbGUgdG8gYSBzZXJ2ZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlVXJsICBGaWxlc3lzdGVtIFVSTCByZXByZXNlbnRpbmcgdGhlIGZpbGUgb24gdGhlIGRldmljZSBvciBhIGRhdGEgVVJJLiBGb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHksIHRoaXMgY2FuIGFsc28gYmUgdGhlIGZ1bGwgcGF0aCBvZiB0aGUgZmlsZSBvbiB0aGUgZGV2aWNlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsICBVUkwgb2YgdGhlIHNlcnZlciB0byByZWNlaXZlIHRoZSBmaWxlLCBhcyBlbmNvZGVkIGJ5IGVuY29kZVVSSSgpLlxuICAgKiBAcGFyYW0ge0ZpbGVVcGxvYWRPcHRpb25zfSBbb3B0aW9uc10gIE9wdGlvbmFsIHBhcmFtZXRlcnMuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3RydXN0QWxsSG9zdHNdICBPcHRpb25hbCBwYXJhbWV0ZXIsIGRlZmF1bHRzIHRvIGZhbHNlLiBJZiBzZXQgdG8gdHJ1ZSwgaXQgYWNjZXB0cyBhbGwgc2VjdXJpdHkgY2VydGlmaWNhdGVzLiBUaGlzIGlzIHVzZWZ1bCBzaW5jZSBBbmRyb2lkIHJlamVjdHMgc2VsZi1zaWduZWQgc2VjdXJpdHkgY2VydGlmaWNhdGVzLiBOb3QgcmVjb21tZW5kZWQgZm9yIHByb2R1Y3Rpb24gdXNlLiBTdXBwb3J0ZWQgb24gQW5kcm9pZCBhbmQgaU9TLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxGaWxlVXBsb2FkUmVzdWx0Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byBhIEZpbGVVcGxvYWRSZXN1bHQgYW5kIHJlamVjdHMgd2l0aCBGaWxlVHJhbnNmZXJFcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2Uoe1xuICAgIHN1Y2Nlc3NJbmRleDogMixcbiAgICBlcnJvckluZGV4OiAzLFxuICB9KVxuICB1cGxvYWQoXG4gICAgZmlsZVVybDogc3RyaW5nLFxuICAgIHVybDogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiBGaWxlVXBsb2FkT3B0aW9ucyxcbiAgICB0cnVzdEFsbEhvc3RzPzogYm9vbGVhblxuICApOiBQcm9taXNlPEZpbGVVcGxvYWRSZXN1bHQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRG93bmxvYWRzIGEgZmlsZSBmcm9tIHNlcnZlci5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZSAgVVJMIG9mIHRoZSBzZXJ2ZXIgdG8gZG93bmxvYWQgdGhlIGZpbGUsIGFzIGVuY29kZWQgYnkgZW5jb2RlVVJJKCkuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0YXJnZXQgIEZpbGVzeXN0ZW0gdXJsIHJlcHJlc2VudGluZyB0aGUgZmlsZSBvbiB0aGUgZGV2aWNlLiBGb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHksIHRoaXMgY2FuIGFsc28gYmUgdGhlIGZ1bGwgcGF0aCBvZiB0aGUgZmlsZSBvbiB0aGUgZGV2aWNlLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFt0cnVzdEFsbEhvc3RzXSAgT3B0aW9uYWwgcGFyYW1ldGVyLCBkZWZhdWx0cyB0byBmYWxzZS4gSWYgc2V0IHRvIHRydWUsIGl0IGFjY2VwdHMgYWxsIHNlY3VyaXR5IGNlcnRpZmljYXRlcy4gVGhpcyBpcyB1c2VmdWwgYmVjYXVzZSBBbmRyb2lkIHJlamVjdHMgc2VsZi1zaWduZWQgc2VjdXJpdHkgY2VydGlmaWNhdGVzLiBOb3QgcmVjb21tZW5kZWQgZm9yIHByb2R1Y3Rpb24gdXNlLiBTdXBwb3J0ZWQgb24gQW5kcm9pZCBhbmQgaU9TLlxuICAgKiBAcGFyYW0ge29iamVjdH0gW09wdGlvbmFsXSBwYXJhbWV0ZXJzLCBjdXJyZW50bHkgb25seSBzdXBwb3J0cyBoZWFkZXJzIChzdWNoIGFzIEF1dGhvcml6YXRpb24gKEJhc2ljIEF1dGhlbnRpY2F0aW9uKSwgZXRjKS5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byBhIEZpbGVFbnRyeSBvYmplY3QuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHtcbiAgICBzdWNjZXNzSW5kZXg6IDIsXG4gICAgZXJyb3JJbmRleDogMyxcbiAgfSlcbiAgZG93bmxvYWQoc291cmNlOiBzdHJpbmcsIHRhcmdldDogc3RyaW5nLCB0cnVzdEFsbEhvc3RzPzogYm9vbGVhbiwgb3B0aW9ucz86IHsgW3M6IHN0cmluZ106IGFueSB9KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGEgbGlzdGVuZXIgdGhhdCBnZXRzIGNhbGxlZCB3aGVuZXZlciBhIG5ldyBjaHVuayBvZiBkYXRhIGlzIHRyYW5zZmVycmVkLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciBMaXN0ZW5lciB0aGF0IHRha2VzIGEgcHJvZ3Jlc3MgZXZlbnQuXG4gICAqL1xuICBASW5zdGFuY2VDaGVjayh7IHN5bmM6IHRydWUgfSlcbiAgb25Qcm9ncmVzcyhsaXN0ZW5lcjogKGV2ZW50OiBQcm9ncmVzc0V2ZW50KSA9PiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5vbnByb2dyZXNzID0gbGlzdGVuZXI7XG4gIH1cblxuICAvKipcbiAgICogQWJvcnRzIGFuIGluLXByb2dyZXNzIHRyYW5zZmVyLiBUaGUgb25lcnJvciBjYWxsYmFjayBpcyBwYXNzZWQgYSBGaWxlVHJhbnNmZXJFcnJvclxuICAgKiBvYmplY3Qgd2hpY2ggaGFzIGFuIGVycm9yIGNvZGUgb2YgRmlsZVRyYW5zZmVyRXJyb3IuQUJPUlRfRVJSLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgYWJvcnQoKTogdm9pZCB7fVxufVxuIl19

/***/ }),

/***/ "EyIw":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/downloads/downloads.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{'DOWNLOAD' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div class=\"loader_outer\" *ngIf=\"!downloads\">\n    <div class=\"loader\"></div>\n  </div>\n\n  <div class=\"div\" *ngIf=\"downloads && downloads.length==0\">\n    <ion-grid>\n      <ion-row align-items-center>\n        <ion-col align-self-center text-center>\n          <ion-icon name=\"download-outline\" class=\"accent\" style=\"transform: scale(3);\"></ion-icon>\n          <h4 margin-top class=\"accent\">{{'NO_DOWNLOADS' | translate}}</h4>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <ion-list *ngIf=\"downloads\">\n    <ion-item *ngFor=\"let x of downloads\">\n      <ion-thumbnail item-start>\n        <img src=\"assets/svgs/folder.svg\">\n      </ion-thumbnail>\n      <div>\n        <b [innerHtml]=\"x.product_name\"></b>\n      </div>\n      <div>\n        {{'FILE_NAME' | translate}} :\n        <span [innerHtml]=\"x.file.name\"></span>\n      </div>\n      <div>\n        {{'EXPIRES' | translate}} : {{ x.access_expires_gmt!='never'? (x.access_expires_gmt | date)\n        :x.access_expires_gmt}}\n      </div>\n      <ion-button fill=\"clear\" icon-only item-end style=\"zoom:2\" (click)=\"checkPermissionAndDownload(x.download_url,x.file.name)\">\n        <ion-icon name=\"download-outline\"></ion-icon>\n      </ion-button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "Gdcr":
/*!*****************************************************!*\
  !*** ./src/app/pages/downloads/downloads.module.ts ***!
  \*****************************************************/
/*! exports provided: DownloadsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadsPageModule", function() { return DownloadsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _downloads__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./downloads */ "0SfU");
/* harmony import */ var _downloads_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./downloads-routing.module */ "MRao");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "B7Rs");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file/ngx */ "FAH8");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "WOgW");










let DownloadsPageModule = class DownloadsPageModule {
};
DownloadsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _downloads__WEBPACK_IMPORTED_MODULE_3__["DownloadsPage"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _downloads_routing_module__WEBPACK_IMPORTED_MODULE_4__["DownloadsPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"].forChild()
        ],
        providers: [
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__["FileTransfer"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_9__["AndroidPermissions"]
        ]
    })
], DownloadsPageModule);



/***/ }),

/***/ "MRao":
/*!*************************************************************!*\
  !*** ./src/app/pages/downloads/downloads-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DownloadsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadsPageRoutingModule", function() { return DownloadsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _downloads__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./downloads */ "0SfU");




const routes = [
    {
        path: '',
        component: _downloads__WEBPACK_IMPORTED_MODULE_3__["DownloadsPage"],
    }
];
let DownloadsPageRoutingModule = class DownloadsPageRoutingModule {
};
DownloadsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DownloadsPageRoutingModule);



/***/ }),

/***/ "P8ik":
/*!************************************************!*\
  !*** ./src/app/pages/downloads/downloads.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".loader_outer {\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n\n.div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100%;\n  text-align: center;\n  color: var(--accent_color) !important;\n  padding-top: 40%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Rvd25sb2Fkcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUFSOztBQUVNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0FBQ1IiLCJmaWxlIjoiZG93bmxvYWRzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAubG9hZGVyX291dGVyIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuICAgICAgLmRpdiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudF9jb2xvcikgIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZy10b3A6IDQwJTtcbiAgICAgIH1cblxuIl19 */");

/***/ }),

/***/ "WOgW":
/*!**********************************************************************************!*\
  !*** ./node_modules/@ionic-native/android-permissions/__ivy_ngcc__/ngx/index.js ***!
  \**********************************************************************************/
/*! exports provided: AndroidPermissions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AndroidPermissions", function() { return AndroidPermissions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "C6fG");




var AndroidPermissions = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AndroidPermissions, _super);
    function AndroidPermissions() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PERMISSION = {
            ACCESS_CHECKIN_PROPERTIES: 'android.permission.ACCESS_CHECKIN_PROPERTIES',
            ACCESS_COARSE_LOCATION: 'android.permission.ACCESS_COARSE_LOCATION',
            ACCESS_FINE_LOCATION: 'android.permission.ACCESS_FINE_LOCATION',
            ACCESS_LOCATION_EXTRA_COMMANDS: 'android.permission.ACCESS_LOCATION_EXTRA_COMMANDS',
            ACCESS_MOCK_LOCATION: 'android.permission.ACCESS_MOCK_LOCATION',
            ACCESS_NETWORK_STATE: 'android.permission.ACCESS_NETWORK_STATE',
            ACCESS_SURFACE_FLINGER: 'android.permission.ACCESS_SURFACE_FLINGER',
            ACCESS_WIFI_STATE: 'android.permission.ACCESS_WIFI_STATE',
            ACCOUNT_MANAGER: 'android.permission.ACCOUNT_MANAGER',
            ADD_VOICEMAIL: 'com.android.voicemail.permission.ADD_VOICEMAIL',
            AUTHENTICATE_ACCOUNTS: 'android.permission.AUTHENTICATE_ACCOUNTS',
            BATTERY_STATS: 'android.permission.BATTERY_STATS',
            BIND_ACCESSIBILITY_SERVICE: 'android.permission.BIND_ACCESSIBILITY_SERVICE',
            BIND_APPWIDGET: 'android.permission.BIND_APPWIDGET',
            BIND_CARRIER_MESSAGING_SERVICE: 'android.permission.BIND_CARRIER_MESSAGING_SERVICE',
            BIND_DEVICE_ADMIN: 'android.permission.BIND_DEVICE_ADMIN',
            BIND_DREAM_SERVICE: 'android.permission.BIND_DREAM_SERVICE',
            BIND_INPUT_METHOD: 'android.permission.BIND_INPUT_METHOD',
            BIND_NFC_SERVICE: 'android.permission.BIND_NFC_SERVICE',
            BIND_NOTIFICATION_LISTENER_SERVICE: 'android.permission.BIND_NOTIFICATION_LISTENER_SERVICE',
            BIND_PRINT_SERVICE: 'android.permission.BIND_PRINT_SERVICE',
            BIND_REMOTEVIEWS: 'android.permission.BIND_REMOTEVIEWS',
            BIND_TEXT_SERVICE: 'android.permission.BIND_TEXT_SERVICE',
            BIND_TV_INPUT: 'android.permission.BIND_TV_INPUT',
            BIND_VOICE_INTERACTION: 'android.permission.BIND_VOICE_INTERACTION',
            BIND_VPN_SERVICE: 'android.permission.BIND_VPN_SERVICE',
            BIND_WALLPAPER: 'android.permission.BIND_WALLPAPER',
            BLUETOOTH: 'android.permission.BLUETOOTH',
            BLUETOOTH_ADMIN: 'android.permission.BLUETOOTH_ADMIN',
            BLUETOOTH_PRIVILEGED: 'android.permission.BLUETOOTH_PRIVILEGED',
            BODY_SENSORS: 'android.permission.BODY_SENSORS',
            BRICK: 'android.permission.BRICK',
            BROADCAST_PACKAGE_REMOVED: 'android.permission.BROADCAST_PACKAGE_REMOVED',
            BROADCAST_SMS: 'android.permission.BROADCAST_SMS',
            BROADCAST_STICKY: 'android.permission.BROADCAST_STICKY',
            BROADCAST_WAP_PUSH: 'android.permission.BROADCAST_WAP_PUSH',
            CALL_PHONE: 'android.permission.CALL_PHONE',
            CALL_PRIVILEGED: 'android.permission.CALL_PRIVILEGED',
            CAMERA: 'android.permission.CAMERA',
            CAPTURE_AUDIO_OUTPUT: 'android.permission.CAPTURE_AUDIO_OUTPUT',
            CAPTURE_SECURE_VIDEO_OUTPUT: 'android.permission.CAPTURE_SECURE_VIDEO_OUTPUT',
            CAPTURE_VIDEO_OUTPUT: 'android.permission.CAPTURE_VIDEO_OUTPUT',
            CHANGE_COMPONENT_ENABLED_STATE: 'android.permission.CHANGE_COMPONENT_ENABLED_STATE',
            CHANGE_CONFIGURATION: 'android.permission.CHANGE_CONFIGURATION',
            CHANGE_NETWORK_STATE: 'android.permission.CHANGE_NETWORK_STATE',
            CHANGE_WIFI_MULTICAST_STATE: 'android.permission.CHANGE_WIFI_MULTICAST_STATE',
            CHANGE_WIFI_STATE: 'android.permission.CHANGE_WIFI_STATE',
            CLEAR_APP_CACHE: 'android.permission.CLEAR_APP_CACHE',
            CLEAR_APP_USER_DATA: 'android.permission.CLEAR_APP_USER_DATA',
            CONTROL_LOCATION_UPDATES: 'android.permission.CONTROL_LOCATION_UPDATES',
            DELETE_CACHE_FILES: 'android.permission.DELETE_CACHE_FILES',
            DELETE_PACKAGES: 'android.permission.DELETE_PACKAGES',
            DEVICE_POWER: 'android.permission.DEVICE_POWER',
            DIAGNOSTIC: 'android.permission.DIAGNOSTIC',
            DISABLE_KEYGUARD: 'android.permission.DISABLE_KEYGUARD',
            DUMP: 'android.permission.DUMP',
            EXPAND_STATUS_BAR: 'android.permission.EXPAND_STATUS_BAR',
            FACTORY_TEST: 'android.permission.FACTORY_TEST',
            FLASHLIGHT: 'android.permission.FLASHLIGHT',
            FORCE_BACK: 'android.permission.FORCE_BACK',
            GET_ACCOUNTS: 'android.permission.GET_ACCOUNTS',
            GET_PACKAGE_SIZE: 'android.permission.GET_PACKAGE_SIZE',
            GET_TASKS: 'android.permission.GET_TASKS',
            GET_TOP_ACTIVITY_INFO: 'android.permission.GET_TOP_ACTIVITY_INFO',
            GLOBAL_SEARCH: 'android.permission.GLOBAL_SEARCH',
            HARDWARE_TEST: 'android.permission.HARDWARE_TEST',
            INJECT_EVENTS: 'android.permission.INJECT_EVENTS',
            INSTALL_LOCATION_PROVIDER: 'android.permission.INSTALL_LOCATION_PROVIDER',
            INSTALL_PACKAGES: 'android.permission.INSTALL_PACKAGES',
            INSTALL_SHORTCUT: 'com.android.launcher.permission.INSTALL_SHORTCUT',
            INTERNAL_SYSTEM_WINDOW: 'android.permission.INTERNAL_SYSTEM_WINDOW',
            INTERNET: 'android.permission.INTERNET',
            KILL_BACKGROUND_PROCESSES: 'android.permission.KILL_BACKGROUND_PROCESSES',
            LOCATION_HARDWARE: 'android.permission.LOCATION_HARDWARE',
            MANAGE_ACCOUNTS: 'android.permission.MANAGE_ACCOUNTS',
            MANAGE_APP_TOKENS: 'android.permission.MANAGE_APP_TOKENS',
            MANAGE_DOCUMENTS: 'android.permission.MANAGE_DOCUMENTS',
            MASTER_CLEAR: 'android.permission.MASTER_CLEAR',
            MEDIA_CONTENT_CONTROL: 'android.permission.MEDIA_CONTENT_CONTROL',
            MODIFY_AUDIO_SETTINGS: 'android.permission.MODIFY_AUDIO_SETTINGS',
            MODIFY_PHONE_STATE: 'android.permission.MODIFY_PHONE_STATE',
            MOUNT_FORMAT_FILESYSTEMS: 'android.permission.MOUNT_FORMAT_FILESYSTEMS',
            MOUNT_UNMOUNT_FILESYSTEMS: 'android.permission.MOUNT_UNMOUNT_FILESYSTEMS',
            NFC: 'android.permission.NFC',
            PERSISTENT_ACTIVITY: 'android.permission.PERSISTENT_ACTIVITY',
            PROCESS_OUTGOING_CALLS: 'android.permission.PROCESS_OUTGOING_CALLS',
            READ_CALENDAR: 'android.permission.READ_CALENDAR',
            READ_CALL_LOG: 'android.permission.READ_CALL_LOG',
            READ_CONTACTS: 'android.permission.READ_CONTACTS',
            READ_EXTERNAL_STORAGE: 'android.permission.READ_EXTERNAL_STORAGE',
            READ_FRAME_BUFFER: 'android.permission.READ_FRAME_BUFFER',
            READ_HISTORY_BOOKMARKS: 'com.android.browser.permission.READ_HISTORY_BOOKMARKS',
            READ_INPUT_STATE: 'android.permission.READ_INPUT_STATE',
            READ_LOGS: 'android.permission.READ_LOGS',
            READ_PHONE_STATE: 'android.permission.READ_PHONE_STATE',
            READ_PROFILE: 'android.permission.READ_PROFILE',
            READ_SMS: 'android.permission.READ_SMS',
            READ_SOCIAL_STREAM: 'android.permission.READ_SOCIAL_STREAM',
            READ_SYNC_SETTINGS: 'android.permission.READ_SYNC_SETTINGS',
            READ_SYNC_STATS: 'android.permission.READ_SYNC_STATS',
            READ_USER_DICTIONARY: 'android.permission.READ_USER_DICTIONARY',
            READ_VOICEMAIL: 'com.android.voicemail.permission.READ_VOICEMAIL',
            REBOOT: 'android.permission.REBOOT',
            RECEIVE_BOOT_COMPLETED: 'android.permission.RECEIVE_BOOT_COMPLETED',
            RECEIVE_MMS: 'android.permission.RECEIVE_MMS',
            RECEIVE_SMS: 'android.permission.RECEIVE_SMS',
            RECEIVE_WAP_PUSH: 'android.permission.RECEIVE_WAP_PUSH',
            RECORD_AUDIO: 'android.permission.RECORD_AUDIO',
            REORDER_TASKS: 'android.permission.REORDER_TASKS',
            RESTART_PACKAGES: 'android.permission.RESTART_PACKAGES',
            SEND_RESPOND_VIA_MESSAGE: 'android.permission.SEND_RESPOND_VIA_MESSAGE',
            SEND_SMS: 'android.permission.SEND_SMS',
            SET_ACTIVITY_WATCHER: 'android.permission.SET_ACTIVITY_WATCHER',
            SET_ALARM: 'com.android.alarm.permission.SET_ALARM',
            SET_ALWAYS_FINISH: 'android.permission.SET_ALWAYS_FINISH',
            SET_ANIMATION_SCALE: 'android.permission.SET_ANIMATION_SCALE',
            SET_DEBUG_APP: 'android.permission.SET_DEBUG_APP',
            SET_ORIENTATION: 'android.permission.SET_ORIENTATION',
            SET_POINTER_SPEED: 'android.permission.SET_POINTER_SPEED',
            SET_PREFERRED_APPLICATIONS: 'android.permission.SET_PREFERRED_APPLICATIONS',
            SET_PROCESS_LIMIT: 'android.permission.SET_PROCESS_LIMIT',
            SET_TIME: 'android.permission.SET_TIME',
            SET_TIME_ZONE: 'android.permission.SET_TIME_ZONE',
            SET_WALLPAPER: 'android.permission.SET_WALLPAPER',
            SET_WALLPAPER_HINTS: 'android.permission.SET_WALLPAPER_HINTS',
            SIGNAL_PERSISTENT_PROCESSES: 'android.permission.SIGNAL_PERSISTENT_PROCESSES',
            STATUS_BAR: 'android.permission.STATUS_BAR',
            SUBSCRIBED_FEEDS_READ: 'android.permission.SUBSCRIBED_FEEDS_READ',
            SUBSCRIBED_FEEDS_WRITE: 'android.permission.SUBSCRIBED_FEEDS_WRITE',
            SYSTEM_ALERT_WINDOW: 'android.permission.SYSTEM_ALERT_WINDOW',
            TRANSMIT_IR: 'android.permission.TRANSMIT_IR',
            UNINSTALL_SHORTCUT: 'com.android.launcher.permission.UNINSTALL_SHORTCUT',
            UPDATE_DEVICE_STATS: 'android.permission.UPDATE_DEVICE_STATS',
            USE_CREDENTIALS: 'android.permission.USE_CREDENTIALS',
            USE_SIP: 'android.permission.USE_SIP',
            VIBRATE: 'android.permission.VIBRATE',
            WAKE_LOCK: 'android.permission.WAKE_LOCK',
            WRITE_APN_SETTINGS: 'android.permission.WRITE_APN_SETTINGS',
            WRITE_CALENDAR: 'android.permission.WRITE_CALENDAR',
            WRITE_CALL_LOG: 'android.permission.WRITE_CALL_LOG',
            WRITE_CONTACTS: 'android.permission.WRITE_CONTACTS',
            WRITE_EXTERNAL_STORAGE: 'android.permission.WRITE_EXTERNAL_STORAGE',
            WRITE_GSERVICES: 'android.permission.WRITE_GSERVICES',
            WRITE_HISTORY_BOOKMARKS: 'com.android.browser.permission.WRITE_HISTORY_BOOKMARKS',
            WRITE_PROFILE: 'android.permission.WRITE_PROFILE',
            WRITE_SECURE_SETTINGS: 'android.permission.WRITE_SECURE_SETTINGS',
            WRITE_SETTINGS: 'android.permission.WRITE_SETTINGS',
            WRITE_SMS: 'android.permission.WRITE_SMS',
            WRITE_SOCIAL_STREAM: 'android.permission.WRITE_SOCIAL_STREAM',
            WRITE_SYNC_SETTINGS: 'android.permission.WRITE_SYNC_SETTINGS',
            WRITE_USER_DICTIONARY: 'android.permission.WRITE_USER_DICTIONARY',
            WRITE_VOICEMAIL: 'com.android.voicemail.permission.WRITE_VOICEMAIL',
        };
        return _this;
    }
    AndroidPermissions.prototype.checkPermission = function (permission) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "checkPermission", {}, arguments); };
    AndroidPermissions.prototype.requestPermission = function (permission) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "requestPermission", {}, arguments); };
    AndroidPermissions.prototype.requestPermissions = function (permissions) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "requestPermissions", {}, arguments); };
    AndroidPermissions.prototype.hasPermission = function (permission) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "hasPermission", {}, arguments); };
    AndroidPermissions.pluginName = "AndroidPermissions";
    AndroidPermissions.plugin = "cordova-plugin-android-permissions";
    AndroidPermissions.pluginRef = "cordova.plugins.permissions";
    AndroidPermissions.repo = "https://github.com/NeoLSN/cordova-plugin-android-permissions";
    AndroidPermissions.platforms = ["Android"];
AndroidPermissions.ɵfac = function AndroidPermissions_Factory(t) { return ɵAndroidPermissions_BaseFactory(t || AndroidPermissions); };
AndroidPermissions.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AndroidPermissions, factory: function (t) { return AndroidPermissions.ɵfac(t); } });
var ɵAndroidPermissions_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](AndroidPermissions);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AndroidPermissions, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();
    return AndroidPermissions;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvYW5kcm9pZC1wZXJtaXNzaW9ucy9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7QUFDeEU7QUFHMEIsSUFrQ2Msc0NBQWlCO0FBQUM7QUFFOUM7QUFDRCxRQUZULGdCQUFVLEdBQVE7QUFDcEIsWUFBSSx5QkFBeUIsRUFBRSw4Q0FBOEM7QUFDN0UsWUFBSSxzQkFBc0IsRUFBRSwyQ0FBMkM7QUFDdkUsWUFBSSxvQkFBb0IsRUFBRSx5Q0FBeUM7QUFDbkUsWUFBSSw4QkFBOEIsRUFBRSxtREFBbUQ7QUFDdkYsWUFBSSxvQkFBb0IsRUFBRSx5Q0FBeUM7QUFDbkUsWUFBSSxvQkFBb0IsRUFBRSx5Q0FBeUM7QUFDbkUsWUFBSSxzQkFBc0IsRUFBRSwyQ0FBMkM7QUFDdkUsWUFBSSxpQkFBaUIsRUFBRSxzQ0FBc0M7QUFDN0QsWUFBSSxlQUFlLEVBQUUsb0NBQW9DO0FBQ3pELFlBQUksYUFBYSxFQUFFLGdEQUFnRDtBQUNuRSxZQUFJLHFCQUFxQixFQUFFLDBDQUEwQztBQUNyRSxZQUFJLGFBQWEsRUFBRSxrQ0FBa0M7QUFDckQsWUFBSSwwQkFBMEIsRUFBRSwrQ0FBK0M7QUFDL0UsWUFBSSxjQUFjLEVBQUUsbUNBQW1DO0FBQ3ZELFlBQUksOEJBQThCLEVBQUUsbURBQW1EO0FBQ3ZGLFlBQUksaUJBQWlCLEVBQUUsc0NBQXNDO0FBQzdELFlBQUksa0JBQWtCLEVBQUUsdUNBQXVDO0FBQy9ELFlBQUksaUJBQWlCLEVBQUUsc0NBQXNDO0FBQzdELFlBQUksZ0JBQWdCLEVBQUUscUNBQXFDO0FBQzNELFlBQUksa0NBQWtDLEVBQUUsdURBQXVEO0FBQy9GLFlBQUksa0JBQWtCLEVBQUUsdUNBQXVDO0FB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QztBQUNyRCxZQUFJLHFCQUFxQixFQUFFLDBDQUEwQztBQUNyRSxZQUFJLGNBQWMsRUFBRSxtQ0FBbUM7QUFDdkQsWUFBSSxTQUFTLEVBQUUsOEJBQThCO0FBQzdDLFlBQUksbUJBQW1CLEVBQUUsd0NBQXdDO0FBQ2pFLFlBQUksbUJBQW1CLEVBQUUsd0NBQXdDO0FBQ2pFLFlBQUkscUJBQXFCLEVBQUUsMENBQTBDO0FBQ3JFLFlBQUksZUFBZSxFQUFFLGtEQUFrRDtBQUN2RSxTQUFHLENBQUM7QUFDSjtBQUVlO0FBQU0sSUFLbkIsNENBQWUsYUFBQyxVQUFrQjtBQUtwQyxJQUtFLDhDQUFpQixhQUFDLFVBQWtCO0FBS3BDLElBS0EsK0NBQWtCLGFBQUMsV0FBcUI7QUFLakIsSUFLdkIsMENBQWEsYUFBQyxVQUFrQjtBQUtoQztBQUNhO0FBRTBDO0FBQWtFO0FBQThGO3NEQXpNeE4sVUFBVTs7Ozs7MEJBQ0w7QUFBQyw2QkF2Q1A7QUFBRSxFQXVDc0MsaUJBQWlCO0FBQ3hELFNBRFksa0JBQWtCO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBBbmRyb2lkIFBlcm1pc3Npb25zXG4gKiBAcHJlbWllciBhbmRyb2lkLXBlcm1pc3Npb25zXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGlzIGRlc2lnbmVkIHRvIHN1cHBvcnQgQW5kcm9pZCBuZXcgcGVybWlzc2lvbnMgY2hlY2tpbmcgbWVjaGFuaXNtLlxuICpcbiAqIFlvdSBjYW4gZmluZCBhbGwgcGVybWlzc2lvbnMgaGVyZTogaHR0cHM6Ly9kZXZlbG9wZXIuYW5kcm9pZC5jb20vcmVmZXJlbmNlL2FuZHJvaWQvTWFuaWZlc3QucGVybWlzc2lvbi5odG1sXG4gKlxuICogQHVzYWdlXG4gKiBgYGBcbiAqIGltcG9ydCB7IEFuZHJvaWRQZXJtaXNzaW9ucyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYW5kcm9pZC1wZXJtaXNzaW9ucy9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGFuZHJvaWRQZXJtaXNzaW9uczogQW5kcm9pZFBlcm1pc3Npb25zKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmFuZHJvaWRQZXJtaXNzaW9ucy5jaGVja1Blcm1pc3Npb24odGhpcy5hbmRyb2lkUGVybWlzc2lvbnMuUEVSTUlTU0lPTi5DQU1FUkEpLnRoZW4oXG4gKiAgIHJlc3VsdCA9PiBjb25zb2xlLmxvZygnSGFzIHBlcm1pc3Npb24/JyxyZXN1bHQuaGFzUGVybWlzc2lvbiksXG4gKiAgIGVyciA9PiB0aGlzLmFuZHJvaWRQZXJtaXNzaW9ucy5yZXF1ZXN0UGVybWlzc2lvbih0aGlzLmFuZHJvaWRQZXJtaXNzaW9ucy5QRVJNSVNTSU9OLkNBTUVSQSlcbiAqICk7XG4gKlxuICogdGhpcy5hbmRyb2lkUGVybWlzc2lvbnMucmVxdWVzdFBlcm1pc3Npb25zKFt0aGlzLmFuZHJvaWRQZXJtaXNzaW9ucy5QRVJNSVNTSU9OLkNBTUVSQSwgdGhpcy5hbmRyb2lkUGVybWlzc2lvbnMuUEVSTUlTU0lPTi5HRVRfQUNDT1VOVFNdKTtcbiAqXG4gKiBgYGBcbiAqXG4gKiBBbmRyb2lkIDI2IGFuZCBhYm92ZTogZHVlIHRvIEFuZHJvaWQgMjYncyBjaGFuZ2VzIHRvIHBlcm1pc3Npb25zIGhhbmRsaW5nIChwZXJtaXNzaW9ucyBhcmUgcmVxdWVzdGVkIGF0IHRpbWUgb2YgdXNlIHJhdGhlciB0aGFuIGF0IHJ1bnRpbWUsKSBpZiB5b3VyIGFwcCBkb2VzIG5vdCBpbmNsdWRlIGFueSBmdW5jdGlvbnMgKGVnLiBvdGhlciBJb25pYyBOYXRpdmUgcGx1Z2lucykgdGhhdCB1dGlsaXplIGEgcGFydGljdWxhciBwZXJtaXNzaW9uLCB0aGVuIGByZXF1ZXN0UGVybWlzc2lvbigpYCBhbmQgYHJlcXVlc3RQZXJtaXNzaW9ucygpYCB3aWxsIHJlc29sdmUgaW1tZWRpYXRlbHkgd2l0aCBubyBwcm9tcHQgc2hvd24gdG8gdGhlIHVzZXIuICBUaHVzLCB5b3UgbXVzdCBpbmNsdWRlIGEgZnVuY3Rpb24gdXRpbGl6aW5nIHRoZSBmZWF0dXJlIHlvdSB3b3VsZCBsaWtlIHRvIHVzZSBiZWZvcmUgcmVxdWVzdGluZyBwZXJtaXNzaW9uIGZvciBpdC5cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdBbmRyb2lkUGVybWlzc2lvbnMnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1hbmRyb2lkLXBlcm1pc3Npb25zJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLnBlcm1pc3Npb25zJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9OZW9MU04vY29yZG92YS1wbHVnaW4tYW5kcm9pZC1wZXJtaXNzaW9ucycsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFuZHJvaWRQZXJtaXNzaW9ucyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgUEVSTUlTU0lPTjogYW55ID0ge1xuICAgIEFDQ0VTU19DSEVDS0lOX1BST1BFUlRJRVM6ICdhbmRyb2lkLnBlcm1pc3Npb24uQUNDRVNTX0NIRUNLSU5fUFJPUEVSVElFUycsXG4gICAgQUNDRVNTX0NPQVJTRV9MT0NBVElPTjogJ2FuZHJvaWQucGVybWlzc2lvbi5BQ0NFU1NfQ09BUlNFX0xPQ0FUSU9OJyxcbiAgICBBQ0NFU1NfRklORV9MT0NBVElPTjogJ2FuZHJvaWQucGVybWlzc2lvbi5BQ0NFU1NfRklORV9MT0NBVElPTicsXG4gICAgQUNDRVNTX0xPQ0FUSU9OX0VYVFJBX0NPTU1BTkRTOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkFDQ0VTU19MT0NBVElPTl9FWFRSQV9DT01NQU5EUycsXG4gICAgQUNDRVNTX01PQ0tfTE9DQVRJT046ICdhbmRyb2lkLnBlcm1pc3Npb24uQUNDRVNTX01PQ0tfTE9DQVRJT04nLFxuICAgIEFDQ0VTU19ORVRXT1JLX1NUQVRFOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkFDQ0VTU19ORVRXT1JLX1NUQVRFJyxcbiAgICBBQ0NFU1NfU1VSRkFDRV9GTElOR0VSOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkFDQ0VTU19TVVJGQUNFX0ZMSU5HRVInLFxuICAgIEFDQ0VTU19XSUZJX1NUQVRFOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkFDQ0VTU19XSUZJX1NUQVRFJyxcbiAgICBBQ0NPVU5UX01BTkFHRVI6ICdhbmRyb2lkLnBlcm1pc3Npb24uQUNDT1VOVF9NQU5BR0VSJyxcbiAgICBBRERfVk9JQ0VNQUlMOiAnY29tLmFuZHJvaWQudm9pY2VtYWlsLnBlcm1pc3Npb24uQUREX1ZPSUNFTUFJTCcsXG4gICAgQVVUSEVOVElDQVRFX0FDQ09VTlRTOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkFVVEhFTlRJQ0FURV9BQ0NPVU5UUycsXG4gICAgQkFUVEVSWV9TVEFUUzogJ2FuZHJvaWQucGVybWlzc2lvbi5CQVRURVJZX1NUQVRTJyxcbiAgICBCSU5EX0FDQ0VTU0lCSUxJVFlfU0VSVklDRTogJ2FuZHJvaWQucGVybWlzc2lvbi5CSU5EX0FDQ0VTU0lCSUxJVFlfU0VSVklDRScsXG4gICAgQklORF9BUFBXSURHRVQ6ICdhbmRyb2lkLnBlcm1pc3Npb24uQklORF9BUFBXSURHRVQnLFxuICAgIEJJTkRfQ0FSUklFUl9NRVNTQUdJTkdfU0VSVklDRTogJ2FuZHJvaWQucGVybWlzc2lvbi5CSU5EX0NBUlJJRVJfTUVTU0FHSU5HX1NFUlZJQ0UnLFxuICAgIEJJTkRfREVWSUNFX0FETUlOOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkJJTkRfREVWSUNFX0FETUlOJyxcbiAgICBCSU5EX0RSRUFNX1NFUlZJQ0U6ICdhbmRyb2lkLnBlcm1pc3Npb24uQklORF9EUkVBTV9TRVJWSUNFJyxcbiAgICBCSU5EX0lOUFVUX01FVEhPRDogJ2FuZHJvaWQucGVybWlzc2lvbi5CSU5EX0lOUFVUX01FVEhPRCcsXG4gICAgQklORF9ORkNfU0VSVklDRTogJ2FuZHJvaWQucGVybWlzc2lvbi5CSU5EX05GQ19TRVJWSUNFJyxcbiAgICBCSU5EX05PVElGSUNBVElPTl9MSVNURU5FUl9TRVJWSUNFOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkJJTkRfTk9USUZJQ0FUSU9OX0xJU1RFTkVSX1NFUlZJQ0UnLFxuICAgIEJJTkRfUFJJTlRfU0VSVklDRTogJ2FuZHJvaWQucGVybWlzc2lvbi5CSU5EX1BSSU5UX1NFUlZJQ0UnLFxuICAgIEJJTkRfUkVNT1RFVklFV1M6ICdhbmRyb2lkLnBlcm1pc3Npb24uQklORF9SRU1PVEVWSUVXUycsXG4gICAgQklORF9URVhUX1NFUlZJQ0U6ICdhbmRyb2lkLnBlcm1pc3Npb24uQklORF9URVhUX1NFUlZJQ0UnLFxuICAgIEJJTkRfVFZfSU5QVVQ6ICdhbmRyb2lkLnBlcm1pc3Npb24uQklORF9UVl9JTlBVVCcsXG4gICAgQklORF9WT0lDRV9JTlRFUkFDVElPTjogJ2FuZHJvaWQucGVybWlzc2lvbi5CSU5EX1ZPSUNFX0lOVEVSQUNUSU9OJyxcbiAgICBCSU5EX1ZQTl9TRVJWSUNFOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkJJTkRfVlBOX1NFUlZJQ0UnLFxuICAgIEJJTkRfV0FMTFBBUEVSOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkJJTkRfV0FMTFBBUEVSJyxcbiAgICBCTFVFVE9PVEg6ICdhbmRyb2lkLnBlcm1pc3Npb24uQkxVRVRPT1RIJyxcbiAgICBCTFVFVE9PVEhfQURNSU46ICdhbmRyb2lkLnBlcm1pc3Npb24uQkxVRVRPT1RIX0FETUlOJyxcbiAgICBCTFVFVE9PVEhfUFJJVklMRUdFRDogJ2FuZHJvaWQucGVybWlzc2lvbi5CTFVFVE9PVEhfUFJJVklMRUdFRCcsXG4gICAgQk9EWV9TRU5TT1JTOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkJPRFlfU0VOU09SUycsXG4gICAgQlJJQ0s6ICdhbmRyb2lkLnBlcm1pc3Npb24uQlJJQ0snLFxuICAgIEJST0FEQ0FTVF9QQUNLQUdFX1JFTU9WRUQ6ICdhbmRyb2lkLnBlcm1pc3Npb24uQlJPQURDQVNUX1BBQ0tBR0VfUkVNT1ZFRCcsXG4gICAgQlJPQURDQVNUX1NNUzogJ2FuZHJvaWQucGVybWlzc2lvbi5CUk9BRENBU1RfU01TJyxcbiAgICBCUk9BRENBU1RfU1RJQ0tZOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkJST0FEQ0FTVF9TVElDS1knLFxuICAgIEJST0FEQ0FTVF9XQVBfUFVTSDogJ2FuZHJvaWQucGVybWlzc2lvbi5CUk9BRENBU1RfV0FQX1BVU0gnLFxuICAgIENBTExfUEhPTkU6ICdhbmRyb2lkLnBlcm1pc3Npb24uQ0FMTF9QSE9ORScsXG4gICAgQ0FMTF9QUklWSUxFR0VEOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkNBTExfUFJJVklMRUdFRCcsXG4gICAgQ0FNRVJBOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkNBTUVSQScsXG4gICAgQ0FQVFVSRV9BVURJT19PVVRQVVQ6ICdhbmRyb2lkLnBlcm1pc3Npb24uQ0FQVFVSRV9BVURJT19PVVRQVVQnLFxuICAgIENBUFRVUkVfU0VDVVJFX1ZJREVPX09VVFBVVDogJ2FuZHJvaWQucGVybWlzc2lvbi5DQVBUVVJFX1NFQ1VSRV9WSURFT19PVVRQVVQnLFxuICAgIENBUFRVUkVfVklERU9fT1VUUFVUOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkNBUFRVUkVfVklERU9fT1VUUFVUJyxcbiAgICBDSEFOR0VfQ09NUE9ORU5UX0VOQUJMRURfU1RBVEU6ICdhbmRyb2lkLnBlcm1pc3Npb24uQ0hBTkdFX0NPTVBPTkVOVF9FTkFCTEVEX1NUQVRFJyxcbiAgICBDSEFOR0VfQ09ORklHVVJBVElPTjogJ2FuZHJvaWQucGVybWlzc2lvbi5DSEFOR0VfQ09ORklHVVJBVElPTicsXG4gICAgQ0hBTkdFX05FVFdPUktfU1RBVEU6ICdhbmRyb2lkLnBlcm1pc3Npb24uQ0hBTkdFX05FVFdPUktfU1RBVEUnLFxuICAgIENIQU5HRV9XSUZJX01VTFRJQ0FTVF9TVEFURTogJ2FuZHJvaWQucGVybWlzc2lvbi5DSEFOR0VfV0lGSV9NVUxUSUNBU1RfU1RBVEUnLFxuICAgIENIQU5HRV9XSUZJX1NUQVRFOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkNIQU5HRV9XSUZJX1NUQVRFJyxcbiAgICBDTEVBUl9BUFBfQ0FDSEU6ICdhbmRyb2lkLnBlcm1pc3Npb24uQ0xFQVJfQVBQX0NBQ0hFJyxcbiAgICBDTEVBUl9BUFBfVVNFUl9EQVRBOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkNMRUFSX0FQUF9VU0VSX0RBVEEnLFxuICAgIENPTlRST0xfTE9DQVRJT05fVVBEQVRFUzogJ2FuZHJvaWQucGVybWlzc2lvbi5DT05UUk9MX0xPQ0FUSU9OX1VQREFURVMnLFxuICAgIERFTEVURV9DQUNIRV9GSUxFUzogJ2FuZHJvaWQucGVybWlzc2lvbi5ERUxFVEVfQ0FDSEVfRklMRVMnLFxuICAgIERFTEVURV9QQUNLQUdFUzogJ2FuZHJvaWQucGVybWlzc2lvbi5ERUxFVEVfUEFDS0FHRVMnLFxuICAgIERFVklDRV9QT1dFUjogJ2FuZHJvaWQucGVybWlzc2lvbi5ERVZJQ0VfUE9XRVInLFxuICAgIERJQUdOT1NUSUM6ICdhbmRyb2lkLnBlcm1pc3Npb24uRElBR05PU1RJQycsXG4gICAgRElTQUJMRV9LRVlHVUFSRDogJ2FuZHJvaWQucGVybWlzc2lvbi5ESVNBQkxFX0tFWUdVQVJEJyxcbiAgICBEVU1QOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkRVTVAnLFxuICAgIEVYUEFORF9TVEFUVVNfQkFSOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkVYUEFORF9TVEFUVVNfQkFSJyxcbiAgICBGQUNUT1JZX1RFU1Q6ICdhbmRyb2lkLnBlcm1pc3Npb24uRkFDVE9SWV9URVNUJyxcbiAgICBGTEFTSExJR0hUOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkZMQVNITElHSFQnLFxuICAgIEZPUkNFX0JBQ0s6ICdhbmRyb2lkLnBlcm1pc3Npb24uRk9SQ0VfQkFDSycsXG4gICAgR0VUX0FDQ09VTlRTOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkdFVF9BQ0NPVU5UUycsXG4gICAgR0VUX1BBQ0tBR0VfU0laRTogJ2FuZHJvaWQucGVybWlzc2lvbi5HRVRfUEFDS0FHRV9TSVpFJyxcbiAgICBHRVRfVEFTS1M6ICdhbmRyb2lkLnBlcm1pc3Npb24uR0VUX1RBU0tTJyxcbiAgICBHRVRfVE9QX0FDVElWSVRZX0lORk86ICdhbmRyb2lkLnBlcm1pc3Npb24uR0VUX1RPUF9BQ1RJVklUWV9JTkZPJyxcbiAgICBHTE9CQUxfU0VBUkNIOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkdMT0JBTF9TRUFSQ0gnLFxuICAgIEhBUkRXQVJFX1RFU1Q6ICdhbmRyb2lkLnBlcm1pc3Npb24uSEFSRFdBUkVfVEVTVCcsXG4gICAgSU5KRUNUX0VWRU5UUzogJ2FuZHJvaWQucGVybWlzc2lvbi5JTkpFQ1RfRVZFTlRTJyxcbiAgICBJTlNUQUxMX0xPQ0FUSU9OX1BST1ZJREVSOiAnYW5kcm9pZC5wZXJtaXNzaW9uLklOU1RBTExfTE9DQVRJT05fUFJPVklERVInLFxuICAgIElOU1RBTExfUEFDS0FHRVM6ICdhbmRyb2lkLnBlcm1pc3Npb24uSU5TVEFMTF9QQUNLQUdFUycsXG4gICAgSU5TVEFMTF9TSE9SVENVVDogJ2NvbS5hbmRyb2lkLmxhdW5jaGVyLnBlcm1pc3Npb24uSU5TVEFMTF9TSE9SVENVVCcsXG4gICAgSU5URVJOQUxfU1lTVEVNX1dJTkRPVzogJ2FuZHJvaWQucGVybWlzc2lvbi5JTlRFUk5BTF9TWVNURU1fV0lORE9XJyxcbiAgICBJTlRFUk5FVDogJ2FuZHJvaWQucGVybWlzc2lvbi5JTlRFUk5FVCcsXG4gICAgS0lMTF9CQUNLR1JPVU5EX1BST0NFU1NFUzogJ2FuZHJvaWQucGVybWlzc2lvbi5LSUxMX0JBQ0tHUk9VTkRfUFJPQ0VTU0VTJyxcbiAgICBMT0NBVElPTl9IQVJEV0FSRTogJ2FuZHJvaWQucGVybWlzc2lvbi5MT0NBVElPTl9IQVJEV0FSRScsXG4gICAgTUFOQUdFX0FDQ09VTlRTOiAnYW5kcm9pZC5wZXJtaXNzaW9uLk1BTkFHRV9BQ0NPVU5UUycsXG4gICAgTUFOQUdFX0FQUF9UT0tFTlM6ICdhbmRyb2lkLnBlcm1pc3Npb24uTUFOQUdFX0FQUF9UT0tFTlMnLFxuICAgIE1BTkFHRV9ET0NVTUVOVFM6ICdhbmRyb2lkLnBlcm1pc3Npb24uTUFOQUdFX0RPQ1VNRU5UUycsXG4gICAgTUFTVEVSX0NMRUFSOiAnYW5kcm9pZC5wZXJtaXNzaW9uLk1BU1RFUl9DTEVBUicsXG4gICAgTUVESUFfQ09OVEVOVF9DT05UUk9MOiAnYW5kcm9pZC5wZXJtaXNzaW9uLk1FRElBX0NPTlRFTlRfQ09OVFJPTCcsXG4gICAgTU9ESUZZX0FVRElPX1NFVFRJTkdTOiAnYW5kcm9pZC5wZXJtaXNzaW9uLk1PRElGWV9BVURJT19TRVRUSU5HUycsXG4gICAgTU9ESUZZX1BIT05FX1NUQVRFOiAnYW5kcm9pZC5wZXJtaXNzaW9uLk1PRElGWV9QSE9ORV9TVEFURScsXG4gICAgTU9VTlRfRk9STUFUX0ZJTEVTWVNURU1TOiAnYW5kcm9pZC5wZXJtaXNzaW9uLk1PVU5UX0ZPUk1BVF9GSUxFU1lTVEVNUycsXG4gICAgTU9VTlRfVU5NT1VOVF9GSUxFU1lTVEVNUzogJ2FuZHJvaWQucGVybWlzc2lvbi5NT1VOVF9VTk1PVU5UX0ZJTEVTWVNURU1TJyxcbiAgICBORkM6ICdhbmRyb2lkLnBlcm1pc3Npb24uTkZDJyxcbiAgICBQRVJTSVNURU5UX0FDVElWSVRZOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlBFUlNJU1RFTlRfQUNUSVZJVFknLFxuICAgIFBST0NFU1NfT1VUR09JTkdfQ0FMTFM6ICdhbmRyb2lkLnBlcm1pc3Npb24uUFJPQ0VTU19PVVRHT0lOR19DQUxMUycsXG4gICAgUkVBRF9DQUxFTkRBUjogJ2FuZHJvaWQucGVybWlzc2lvbi5SRUFEX0NBTEVOREFSJyxcbiAgICBSRUFEX0NBTExfTE9HOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlJFQURfQ0FMTF9MT0cnLFxuICAgIFJFQURfQ09OVEFDVFM6ICdhbmRyb2lkLnBlcm1pc3Npb24uUkVBRF9DT05UQUNUUycsXG4gICAgUkVBRF9FWFRFUk5BTF9TVE9SQUdFOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlJFQURfRVhURVJOQUxfU1RPUkFHRScsXG4gICAgUkVBRF9GUkFNRV9CVUZGRVI6ICdhbmRyb2lkLnBlcm1pc3Npb24uUkVBRF9GUkFNRV9CVUZGRVInLFxuICAgIFJFQURfSElTVE9SWV9CT09LTUFSS1M6ICdjb20uYW5kcm9pZC5icm93c2VyLnBlcm1pc3Npb24uUkVBRF9ISVNUT1JZX0JPT0tNQVJLUycsXG4gICAgUkVBRF9JTlBVVF9TVEFURTogJ2FuZHJvaWQucGVybWlzc2lvbi5SRUFEX0lOUFVUX1NUQVRFJyxcbiAgICBSRUFEX0xPR1M6ICdhbmRyb2lkLnBlcm1pc3Npb24uUkVBRF9MT0dTJyxcbiAgICBSRUFEX1BIT05FX1NUQVRFOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlJFQURfUEhPTkVfU1RBVEUnLFxuICAgIFJFQURfUFJPRklMRTogJ2FuZHJvaWQucGVybWlzc2lvbi5SRUFEX1BST0ZJTEUnLFxuICAgIFJFQURfU01TOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlJFQURfU01TJyxcbiAgICBSRUFEX1NPQ0lBTF9TVFJFQU06ICdhbmRyb2lkLnBlcm1pc3Npb24uUkVBRF9TT0NJQUxfU1RSRUFNJyxcbiAgICBSRUFEX1NZTkNfU0VUVElOR1M6ICdhbmRyb2lkLnBlcm1pc3Npb24uUkVBRF9TWU5DX1NFVFRJTkdTJyxcbiAgICBSRUFEX1NZTkNfU1RBVFM6ICdhbmRyb2lkLnBlcm1pc3Npb24uUkVBRF9TWU5DX1NUQVRTJyxcbiAgICBSRUFEX1VTRVJfRElDVElPTkFSWTogJ2FuZHJvaWQucGVybWlzc2lvbi5SRUFEX1VTRVJfRElDVElPTkFSWScsXG4gICAgUkVBRF9WT0lDRU1BSUw6ICdjb20uYW5kcm9pZC52b2ljZW1haWwucGVybWlzc2lvbi5SRUFEX1ZPSUNFTUFJTCcsXG4gICAgUkVCT09UOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlJFQk9PVCcsXG4gICAgUkVDRUlWRV9CT09UX0NPTVBMRVRFRDogJ2FuZHJvaWQucGVybWlzc2lvbi5SRUNFSVZFX0JPT1RfQ09NUExFVEVEJyxcbiAgICBSRUNFSVZFX01NUzogJ2FuZHJvaWQucGVybWlzc2lvbi5SRUNFSVZFX01NUycsXG4gICAgUkVDRUlWRV9TTVM6ICdhbmRyb2lkLnBlcm1pc3Npb24uUkVDRUlWRV9TTVMnLFxuICAgIFJFQ0VJVkVfV0FQX1BVU0g6ICdhbmRyb2lkLnBlcm1pc3Npb24uUkVDRUlWRV9XQVBfUFVTSCcsXG4gICAgUkVDT1JEX0FVRElPOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlJFQ09SRF9BVURJTycsXG4gICAgUkVPUkRFUl9UQVNLUzogJ2FuZHJvaWQucGVybWlzc2lvbi5SRU9SREVSX1RBU0tTJyxcbiAgICBSRVNUQVJUX1BBQ0tBR0VTOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlJFU1RBUlRfUEFDS0FHRVMnLFxuICAgIFNFTkRfUkVTUE9ORF9WSUFfTUVTU0FHRTogJ2FuZHJvaWQucGVybWlzc2lvbi5TRU5EX1JFU1BPTkRfVklBX01FU1NBR0UnLFxuICAgIFNFTkRfU01TOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlNFTkRfU01TJyxcbiAgICBTRVRfQUNUSVZJVFlfV0FUQ0hFUjogJ2FuZHJvaWQucGVybWlzc2lvbi5TRVRfQUNUSVZJVFlfV0FUQ0hFUicsXG4gICAgU0VUX0FMQVJNOiAnY29tLmFuZHJvaWQuYWxhcm0ucGVybWlzc2lvbi5TRVRfQUxBUk0nLFxuICAgIFNFVF9BTFdBWVNfRklOSVNIOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlNFVF9BTFdBWVNfRklOSVNIJyxcbiAgICBTRVRfQU5JTUFUSU9OX1NDQUxFOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlNFVF9BTklNQVRJT05fU0NBTEUnLFxuICAgIFNFVF9ERUJVR19BUFA6ICdhbmRyb2lkLnBlcm1pc3Npb24uU0VUX0RFQlVHX0FQUCcsXG4gICAgU0VUX09SSUVOVEFUSU9OOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlNFVF9PUklFTlRBVElPTicsXG4gICAgU0VUX1BPSU5URVJfU1BFRUQ6ICdhbmRyb2lkLnBlcm1pc3Npb24uU0VUX1BPSU5URVJfU1BFRUQnLFxuICAgIFNFVF9QUkVGRVJSRURfQVBQTElDQVRJT05TOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlNFVF9QUkVGRVJSRURfQVBQTElDQVRJT05TJyxcbiAgICBTRVRfUFJPQ0VTU19MSU1JVDogJ2FuZHJvaWQucGVybWlzc2lvbi5TRVRfUFJPQ0VTU19MSU1JVCcsXG4gICAgU0VUX1RJTUU6ICdhbmRyb2lkLnBlcm1pc3Npb24uU0VUX1RJTUUnLFxuICAgIFNFVF9USU1FX1pPTkU6ICdhbmRyb2lkLnBlcm1pc3Npb24uU0VUX1RJTUVfWk9ORScsXG4gICAgU0VUX1dBTExQQVBFUjogJ2FuZHJvaWQucGVybWlzc2lvbi5TRVRfV0FMTFBBUEVSJyxcbiAgICBTRVRfV0FMTFBBUEVSX0hJTlRTOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlNFVF9XQUxMUEFQRVJfSElOVFMnLFxuICAgIFNJR05BTF9QRVJTSVNURU5UX1BST0NFU1NFUzogJ2FuZHJvaWQucGVybWlzc2lvbi5TSUdOQUxfUEVSU0lTVEVOVF9QUk9DRVNTRVMnLFxuICAgIFNUQVRVU19CQVI6ICdhbmRyb2lkLnBlcm1pc3Npb24uU1RBVFVTX0JBUicsXG4gICAgU1VCU0NSSUJFRF9GRUVEU19SRUFEOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlNVQlNDUklCRURfRkVFRFNfUkVBRCcsXG4gICAgU1VCU0NSSUJFRF9GRUVEU19XUklURTogJ2FuZHJvaWQucGVybWlzc2lvbi5TVUJTQ1JJQkVEX0ZFRURTX1dSSVRFJyxcbiAgICBTWVNURU1fQUxFUlRfV0lORE9XOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlNZU1RFTV9BTEVSVF9XSU5ET1cnLFxuICAgIFRSQU5TTUlUX0lSOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlRSQU5TTUlUX0lSJyxcbiAgICBVTklOU1RBTExfU0hPUlRDVVQ6ICdjb20uYW5kcm9pZC5sYXVuY2hlci5wZXJtaXNzaW9uLlVOSU5TVEFMTF9TSE9SVENVVCcsXG4gICAgVVBEQVRFX0RFVklDRV9TVEFUUzogJ2FuZHJvaWQucGVybWlzc2lvbi5VUERBVEVfREVWSUNFX1NUQVRTJyxcbiAgICBVU0VfQ1JFREVOVElBTFM6ICdhbmRyb2lkLnBlcm1pc3Npb24uVVNFX0NSRURFTlRJQUxTJyxcbiAgICBVU0VfU0lQOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlVTRV9TSVAnLFxuICAgIFZJQlJBVEU6ICdhbmRyb2lkLnBlcm1pc3Npb24uVklCUkFURScsXG4gICAgV0FLRV9MT0NLOiAnYW5kcm9pZC5wZXJtaXNzaW9uLldBS0VfTE9DSycsXG4gICAgV1JJVEVfQVBOX1NFVFRJTkdTOiAnYW5kcm9pZC5wZXJtaXNzaW9uLldSSVRFX0FQTl9TRVRUSU5HUycsXG4gICAgV1JJVEVfQ0FMRU5EQVI6ICdhbmRyb2lkLnBlcm1pc3Npb24uV1JJVEVfQ0FMRU5EQVInLFxuICAgIFdSSVRFX0NBTExfTE9HOiAnYW5kcm9pZC5wZXJtaXNzaW9uLldSSVRFX0NBTExfTE9HJyxcbiAgICBXUklURV9DT05UQUNUUzogJ2FuZHJvaWQucGVybWlzc2lvbi5XUklURV9DT05UQUNUUycsXG4gICAgV1JJVEVfRVhURVJOQUxfU1RPUkFHRTogJ2FuZHJvaWQucGVybWlzc2lvbi5XUklURV9FWFRFUk5BTF9TVE9SQUdFJyxcbiAgICBXUklURV9HU0VSVklDRVM6ICdhbmRyb2lkLnBlcm1pc3Npb24uV1JJVEVfR1NFUlZJQ0VTJyxcbiAgICBXUklURV9ISVNUT1JZX0JPT0tNQVJLUzogJ2NvbS5hbmRyb2lkLmJyb3dzZXIucGVybWlzc2lvbi5XUklURV9ISVNUT1JZX0JPT0tNQVJLUycsXG4gICAgV1JJVEVfUFJPRklMRTogJ2FuZHJvaWQucGVybWlzc2lvbi5XUklURV9QUk9GSUxFJyxcbiAgICBXUklURV9TRUNVUkVfU0VUVElOR1M6ICdhbmRyb2lkLnBlcm1pc3Npb24uV1JJVEVfU0VDVVJFX1NFVFRJTkdTJyxcbiAgICBXUklURV9TRVRUSU5HUzogJ2FuZHJvaWQucGVybWlzc2lvbi5XUklURV9TRVRUSU5HUycsXG4gICAgV1JJVEVfU01TOiAnYW5kcm9pZC5wZXJtaXNzaW9uLldSSVRFX1NNUycsXG4gICAgV1JJVEVfU09DSUFMX1NUUkVBTTogJ2FuZHJvaWQucGVybWlzc2lvbi5XUklURV9TT0NJQUxfU1RSRUFNJyxcbiAgICBXUklURV9TWU5DX1NFVFRJTkdTOiAnYW5kcm9pZC5wZXJtaXNzaW9uLldSSVRFX1NZTkNfU0VUVElOR1MnLFxuICAgIFdSSVRFX1VTRVJfRElDVElPTkFSWTogJ2FuZHJvaWQucGVybWlzc2lvbi5XUklURV9VU0VSX0RJQ1RJT05BUlknLFxuICAgIFdSSVRFX1ZPSUNFTUFJTDogJ2NvbS5hbmRyb2lkLnZvaWNlbWFpbC5wZXJtaXNzaW9uLldSSVRFX1ZPSUNFTUFJTCcsXG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrIHBlcm1pc3Npb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IHBlcm1pc3Npb24gVGhlIG5hbWUgb2YgdGhlIHBlcm1pc3Npb25cbiAgICogQHJldHVybiB7UHJvbWlzZTxBbmRyb2lkUGVybWlzc2lvblJlc3BvbnNlPn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgY2hlY2tQZXJtaXNzaW9uKHBlcm1pc3Npb246IHN0cmluZyk6IFByb21pc2U8QW5kcm9pZFBlcm1pc3Npb25SZXNwb25zZT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXF1ZXN0IHBlcm1pc3Npb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IHBlcm1pc3Npb24gVGhlIG5hbWUgb2YgdGhlIHBlcm1pc3Npb24gdG8gcmVxdWVzdFxuICAgKiBAcmV0dXJuIHtQcm9taXNlPEFuZHJvaWRQZXJtaXNzaW9uUmVzcG9uc2U+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICByZXF1ZXN0UGVybWlzc2lvbihwZXJtaXNzaW9uOiBzdHJpbmcpOiBQcm9taXNlPEFuZHJvaWRQZXJtaXNzaW9uUmVzcG9uc2U+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVxdWVzdCBwZXJtaXNzaW9uc1xuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBwZXJtaXNzaW9ucyBBbiBhcnJheSB3aXRoIHBlcm1pc3Npb25zXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVxdWVzdFBlcm1pc3Npb25zKHBlcm1pc3Npb25zOiBzdHJpbmdbXSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gc3RpbGwgd29ya3Mgbm93LCB3aWxsIG5vdCBzdXBwb3J0IGluIHRoZSBmdXR1cmUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwZXJtaXNzaW9uIFRoZSBuYW1lIG9mIHRoZSBwZXJtaXNzaW9uXG4gICAqIEByZXR1cm4ge1Byb21pc2U8QW5kcm9pZFBlcm1pc3Npb25SZXNwb25zZT59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGhhc1Blcm1pc3Npb24ocGVybWlzc2lvbjogc3RyaW5nKTogUHJvbWlzZTxBbmRyb2lkUGVybWlzc2lvblJlc3BvbnNlPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQW5kcm9pZFBlcm1pc3Npb25SZXNwb25zZSB7XG4gIGhhc1Blcm1pc3Npb246IGJvb2xlYW47XG59XG4iXX0=

/***/ })

}]);
//# sourceMappingURL=pages-downloads-downloads-module.js.map