import { WooCommerceProvider } from "./../../services/woocommerce/woocommerce";
import { LoadingProvider } from "./../../services/loading/loading";
import { App } from "./../../app.config";
import { Component } from "@angular/core";
import {
  NavController,
  Platform
} from "@ionic/angular";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { SettingsProvider, ToastProvider } from "../../services/providers";
import { TranslateService } from "@ngx-translate/core";
import { ActivatedRoute } from '@angular/router';
declare var RazorpayCheckout: any;

@Component({
  selector: "page-payment",
  templateUrl: "payment.html",
  styleUrls:['payment.scss']
})
export class PaymentPage {

  orderDetails: any;
  isShoppingComplete: boolean = false;
  unregisterBackButtonAction: any;

  constructor(
    public navCtrl: NavController,
    private iab: InAppBrowser,
    private WC: WooCommerceProvider,
    public settings: SettingsProvider,
    private platform: Platform,
    private loader: LoadingProvider,
    private toast: ToastProvider,
    private translate: TranslateService,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => { 
      this.orderDetails = params;
      if (
        this.orderDetails.payment_method == "cod" ||
        this.orderDetails.payment_method == "bacs" ||
        this.orderDetails.payment_method == "cheque"
      ) {
        this.isShoppingComplete = true;
      } else {
        this.payment();
      }
    });
  }

  ionViewDidEnter() {
    console.log("ionViewDidEnter PaymentPage");
    this.initializeBackButtonCustomHandler();
    /*this.navBar.backButtonClick = (e: UIEvent) => {
      // todo something
      this.navCtrl.popToRoot();
    };*/
  }
  ionViewWillLeave() {
    this.unregisterBackButtonAction && this.unregisterBackButtonAction();
  }
  initializeBackButtonCustomHandler(): void {
    /*this.unregisterBackButtonAction = this.platform.registerBackButtonAction(
      () => {
        let activePortal =
          this.ionicApp._loadingPortal.getActive() ||
          this.ionicApp._modalPortal.getActive() ||
          this.ionicApp._toastPortal.getActive() ||
          this.ionicApp._overlayPortal.getActive();
        if (!activePortal) {
          this.navCtrl.popToRoot();
        }
      },
      1
    );*/
  }

  refreshPage(payment_id?) {
    this.loader.show();
    if (payment_id) {
      this.WC.updateOrder(this.orderDetails.id, "processing", payment_id).then(
        (res) => {
          this.orderDetails = res;
          this.loader.dismiss();
        },
        (err) => {
          console.log(err);
          this.toast.showError();
          this.loader.dismiss();
        }
      );
    } else {
      this.WC.getOrder(this.orderDetails.id).then(
        (res) => {
          this.orderDetails = res;
          this.loader.dismiss();
        },
        (err) => {
          console.log(err);
          this.toast.showError();
          this.loader.dismiss();
        }
      );
    }
  }

  goToHome() {
    this.navCtrl.navigateRoot("home")
  }
  async payment() {
    var obj= this;
    if (this.orderDetails.status && this.orderDetails.status === "failed") {
      return;
    }

    let payment_method = "?payment_method=" + this.orderDetails.payment_method;
    let order_id = "&ORDER_ID=" + this.orderDetails.id;
    let cus_id = "&CUST_ID=" + this.orderDetails.customer_id;
    if (this.orderDetails.payment_method == "razorpay") {
      this.razorpayCheckout();
      return;
    }
    obj.loader.show();

    let browser;
    if (this.orderDetails.payment_method == "wallet") {
      browser = this.iab.create(
        App.url +
          "/wp-json/wc/v2/wallet/payment" +
          payment_method +
          order_id +
          cus_id,
        "_self",
        { location: "no", clearcache: "yes", clearsessioncache: "yes" }
      );
    } else {
      browser = this.iab.create(
        App.url + "/wp-json/wc/v2/payment" + payment_method + order_id + cus_id,
        "_self",
        {
          location: "no",
          clearcache: "yes",
          clearsessioncache: "yes",
          hidden: "yes",
        }
      );
    }
    browser.on("exit").subscribe((event) => {
      console.log(event);
      this.refreshPage();
    });
    switch (this.orderDetails.payment_method) {
      case "paytm":
        browser.on("loadstart").subscribe((event) => {
          if (event.url.includes("/order-received")) {
            browser.close();
          }
        });
        browser.on("loadstop").subscribe((event) => {
          if (
            event.url.includes("paytm.com") ||
            event.url.includes("paytm.in")
          ) {
            browser.show();
            obj.loader.dismiss();
          }
        });
        break;
      case "wallet":
        browser.on("loadstart").subscribe((event) => {
          obj.loader.dismiss();
          console.log(event);
        });
        browser.on("loadstop").subscribe((event) => {
          browser.close();
        });
        break;
      case "pumcp":
        let openpumcp = false;
        browser.on("loadstop").subscribe((event) => {
          if (event.url.includes("payu")) {
            browser.show();
            openpumcp = true;
            obj.loader.dismiss();
          }
          if (event.url.includes(App.url) && openpumcp) {
            browser.close();
          }
        });
        break;
      case "instamojo":
        browser.show();
        obj.loader.dismiss();
        browser.on("loadstart").subscribe((event) => {
          if (event.url.includes("/order-received")) {
            browser.close();
          }
        });
        "";
        // browser.on("loadstop").subscribe(event => {
        //   if (event.url.includes('payu')) {
        //     browser.show();
        //     openedgateway = true;
        //     load.dismiss();
        //   }
        // });
        break;
      case "ccavenue":
        let openccavenue = false;
        browser.on("loadstop").subscribe((event) => {
          if (event.url.includes("ccavenue")) {
            browser.show();
            obj.loader.dismiss();
            openccavenue = true;
          }
          browser.on("loadstart").subscribe((event) => {
            if (event.url.includes(App.url) && openccavenue) {
              browser.close();
            }
          });
        });
        break;
      case "paypal":
        //browser.show();
        browser.on("loadstart").subscribe((event) => {
          if (event.url.includes("/order-received")) {
            browser.close();
          }
        });
        browser.on("loadstop").subscribe((event) => {
          if (event.url.includes("/order-pay")) {
            browser.show();
            obj.loader.dismiss();
          }
        });
        break;
    }
  }
  razorpayCheckout() {
    let options = {
      description: "Order  " + this.orderDetails.id,
      image: "",
      currency: this.orderDetails.currency,
      key: "rzp_live_T4lyi6Ty1Kq76b",
      amount: parseFloat(this.orderDetails.total) * 100,
      name: App.store,
      prefill: {
        email: this.orderDetails.billing.email || "",
        contact: this.orderDetails.billing.phone || "",
        name:
          this.orderDetails.billing.first_name +
          " " +
          this.orderDetails.billing.last_name,
      },
      theme: {
        color: this.settings.all.appSettings.primary_color,
      },
      modal: {
        ondismiss: function () {
          alert("Payment Cancelled");
        },
      },
    };

    //Below are js code which is not working
    /*let successCallback = function (payment_id) {
      //alert('payment_id: ' + payment_id);
      this.refreshPage(payment_id);
    };

    let cancelCallback = function (error) {
      //alert(error.description + ' (Error ' + error.code + ')');
      this.refreshPage();
    };*/

    //Working ported typescript
    RazorpayCheckout.open(
      options,
      (payment_id) => {
        // alert("payment_id: " + payment_id);
        this.refreshPage(payment_id);
      },
      (error) => {
        //  alert(error.description + " (Error " + error.code + ")");
        this.refreshPage();
      }
    );
  }

  calculatePrice(x) {
    return x.prices_include_tax
      ? x.total
      : (Number(x.total) + Number(x.total_tax)).toFixed(2);
  }
}
