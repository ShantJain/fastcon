import { PhotoViewer } from "@ionic-native/photo-viewer/ngx";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { TranslateService } from "@ngx-translate/core";
import { Component, ViewChild } from "@angular/core";
import {
  NavController,
  Platform,
  AlertController,
  ModalController,
  IonSlide
} from "@ionic/angular";
import {
  WooCommerceProvider,
  WishlistProvider,
  ToastProvider,
  SettingsProvider,
  RestProvider,
  LoadingProvider,
} from "../../services/providers";
import { SocialSharing } from "@ionic-native/social-sharing/ngx";
import { NgZone } from "@angular/core";
import { Events } from "../../services/Events";
import { MiniCartPage } from './mini-cart/mini-cart';
import { SearchPage } from 'src/app/ShareComponent/search/search';
import { NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: "page-productdetail",
  templateUrl: "productdetail.html",
  styleUrls: ['productdetail.scss'],
})
export class ProductdetailPage {
  @ViewChild("slider") slider: IonSlide;
  product: any;
  postcode: string;
  postcodeEnter: boolean = true;
  newPostCode: string;
  deliveryDetails: any = {};
  pattern: any = /\[.+\]/g;
  dir: string;
  slidesPerView: number = 2.5;
  load: any;
  color: "";
  size: "";

  constructor(
    public navCtrl: NavController,
    private WC: WooCommerceProvider,
    public wishlist: WishlistProvider,
    private toast: ToastProvider,
    private loader: LoadingProvider,
    private restClient: RestProvider,
    private translate: TranslateService,
    private platform: Platform,
    private alertCtrl: AlertController,
    private socialSharing: SocialSharing,
    private events: Events,
    private iab: InAppBrowser,
    public settings: SettingsProvider,
    private zone: NgZone,
    private modalCtrl: ModalController,
    private route: ActivatedRoute,
    private photoViewer:PhotoViewer
  ) {
    if (this.platform.width() >= 800) {
      this.slidesPerView = 3.5;
    } else if (this.platform.width() >= 600) {
      this.slidesPerView = 2.8;
    } else if (this.platform.width() >= 412) {
      this.slidesPerView = 2.5;
    } else if (this.platform.width() >= 319) {
      this.slidesPerView = 2.3;
    }

    this.dir = platform.isRTL?'rtl':'ltr';;
    this.events.subscribe("Loaded Product", () => {
      console.log("Test");
      this.setupProduct();
    });
    this.route.queryParams.subscribe(params => {
      console.log(params);
      if (params.id) {
        this.WC.getProductById(null, params['id']).then(
          (res) => {
            if (res) {
              this.product = res;
              this.events.publish("Loaded Product");
            } else {
              this.toast.show("Something wrong from server");
              this.navCtrl.pop();
            }
          },
          (err) => {
            this.toast.showError();
            this.navCtrl.pop();
          }
        );
      } else if ( params && params['isReferedByDeeplinks']) {
        console.log("Deeplinks");
        this.loader.show();
        this.WC.getProductByUrl(params['link']).then(
          (res) => {
            if (res) {
              this.product = res;
              this.events.publish("Loaded Product");
            } else {
              this.toast.showError();
              this.navCtrl.pop();
            }
          },
          (err) => {
            this.toast.showError();
            this.navCtrl.pop();
          }
        );
      } else {
        console.log("default");
        this.product = params;
  
        this.events.publish("Loaded Product");
      }
    });
  
  }
  back(){
    this.navCtrl.back();
  }
  setupProduct() {
    if (!this.product.extraImages) {
      this.product.extraImages = [];
    }
    if (!this.product.var_attributes) {
      this.product.var_attributes = [];
      for (let at of this.product.attributes) {
        if (at.variation) {
          this.product.var_attributes.push(at);
        }
      }
    }
    if (!this.product.attr) {
      this.product.attr = {};
    }

    this.postcode = this.settings.postcode;
    if (this.postcode && this.settings.all.appSettings.pincode_active) {
      this.submitPincodeCheck(this.postcode);
    }
    if (this.product.type == "variable" || this.product.type == "simple") {
      this.product.quantity = 1;
    }
    if (this.product.related_ids.length > 0 && !this.product.related) {
      this.WC.getProductById(this.product.related_ids.join()).then((x) => {
        this.zone.run(() => {
          this.product.related = x;
        });
      });
    }
    if (this.product.upsell_ids.length > 0 && !this.product.upsell) {
      this.WC.getProductById(this.product.upsell_ids.join()).then((x) => {
        this.zone.run(() => {
          this.product.upsell = x;
        });
      });
    }
    if (
      this.product.grouped_products.length > 0 &&
      !this.product.grouped_products[0].name
    ) {
      this.WC.getProductById(this.product.grouped_products.join()).then(
        (x: any) => {
          x.map((element) => {
            element.quantity = 0;
          });
          this.zone.run(() => {
            this.product.grouped_products = x;
          });
        }
      );
    }
    console.log(this.product);
  }
  ionViewDidEnter() {
    if (this.product) {
      this.events.publish(
        "view:enter",
        "Single Product Page - " + this.product.name
      );
    } else {
      this.events.publish("view:enter", "Single Product Page - ");
    }
  }

  loadVariation(data) {
    this.loader.show();
    console.log("Loading Variation");
    this.WC.getProductVariation(data).then(
      (res: any) => {
        this.loader.dismiss();
        console.log(res);
        if (!res.error) {
          this.setVariation(res);
        } else {
          this.product.issetVariation = false;
          this.toast.showWithClose(
            "Currently This variation is not available. Select a different Variation"
          );
        }
      },
      (err) => {
        console.log(err);
        this.toast.showError();
        this.loader.dismiss();
        this.product.issetVariation = false;
      }
    );
  }
  setVariation(x) {
    if (x.image.src) {
      this.product.extraImages = [x.image];
    }
    let newArr = [];
    for (let i = 0; i < x.woo_variation_gallery_images.length; i++) {
      if (x.woo_variation_gallery_images[i].src != "") {
        newArr.push(x.woo_variation_gallery_images[i]);
      }
    }
    this.product.extraImages = [...this.product.extraImages, ...newArr];
    this.product.variationImages = [...x.woo_variation_gallery_images];
    //this.slider.slideTo(0);
    this.product.variation_id = x.id;
    this.product.price = x.price;
    this.product.price_html = x.price_html;
    this.product.regular_price = x.regular_price;
    this.product.on_sale = x.on_sale;
    this.product.in_stock = x.in_stock;
    this.product.variation_selected = x;
    this.product.quantity = 1;
    this.product.issetVariation = true;
  }

  setFav(product: any) {
    this.wishlist.add(product);
  }
  async showSearch() {
    const modal = await this.modalCtrl.create({
      component: SearchPage,
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (data && data.page) {
      this.goTo(data.page, data.params);
    }
  }
  goTo(page, params) {
    console.log(params);
    let navigationExtras: NavigationExtras = { queryParams: params }
    this.navCtrl.navigateForward(page, navigationExtras);
  }

  onCheckChange(e, item) {
    console.log(e.checked);
    if (e.checked) {
      item.quantity = 1;
    } else {
      item.quantity = 0;
    }
  }
  decreaseQuantity(i?: number) {
    //console.log(i);
    if (this.product.type == "grouped") {
      if (this.product.grouped_products[i].quantity > 0) {
        this.product.grouped_products[i].quantity--;
      }
    } else {
      if (this.product.quantity > 1) {
        this.product.quantity--;
      }
    }
  }
  increaseQuantity(i?: number) {
    this.translate.get(["NO_MORE_ADD"]).subscribe((x) => {
      if (this.product.type == "grouped") {
        this.product.grouped_products[i].quantity++;
      } else if (this.product.type == "variable") {
        if (this.product.issetVariation) {
          if (this.product.variation_selected.manage_stock == "parent") {
            if (this.product.manage_stock) {
              if (this.product.quantity < this.product.stock_quantity) {
                this.product.quantity++;
              } else {
                this.toast.show(x.NO_MORE_ADD);
              }
            } else {
              this.product.quantity++;
            }
          } else if (this.product.variation_selected.manage_stock) {
            if (
              this.product.quantity <
              this.product.variation_selected.stock_quantity
            ) {
              this.product.quantity++;
            } else {
              this.toast.show(x.NO_MORE_ADD);
            }
          } else {
            this.product.quantity++;
          }
        } else {
          this.translate.get(["VALID_VARIATION"]).subscribe((x) => {
            this.toast.show("Select a valid variation");
          });
        }
      } else {
        if (this.product.manage_stock) {
          if (this.product.quantity < this.product.stock_quantity) {
            this.product.quantity++;
          } else {
            this.toast.show(x.NO_MORE_ADD);
          }
        } else {
          this.product.quantity++;
        }
      }
    });
  }
  onChange() {
    if (
      Object.keys(this.product.attr).length ==
      this.product.var_attributes.length
    ) {
      let data = {
        product_id: this.product.id,
        attributes: this.product.attr,
      };
      console.log(data);
      this.loadVariation(data);
    }
  }

  onVariationChange(key, option) {
    if (option.slug == "pa_color") {
      this.color = option.name;
    } else {
      this.size = option.name;
    }
    if (this.product.attr[key] == (option.slug ? option.slug : option)) {
      return;
    }
    this.product.attr = {
      ...this.product.attr,
      [key]: option.name ? option.name : option.slug,
    };
    console.log(this.product.attr);

    let data = {
      product_id: this.product.id,
      attributes: this.product.attr,
    };
    console.log(JSON.stringify(data));
    this.loadVariation(data);
  }

  addToCart(isBuyNow?) {
    this.translate
      .get([
        "PINCODE",
        "NO_DELIVERY",
        "SELECT_ONE_PRODUCT",
        "SELECT_PRODUCT_QUANTITY",
        "VALID_VARIATION",
      ])
      .subscribe((x) => {
        if (this.settings.all.appSettings.pincode_active) {
          if (!this.postcode) {
            this.toast.show(x.PINCODE);
            return;
          }
          if (this.postcode && !this.deliveryDetails.delivery) {
            this.toast.show(x.NO_DELIVERY);
            return;
          }
        }

        let data: any = {
          id: this.product.id,
        };
        console.log(this.product.type);
        console.log(this.product.issetVariation);
        if (this.product.type == "grouped") {
          if (
            this.product.grouped_products.every((element) => {
              return element.quantity == 0;
            })
          ) {
            this.toast.show(x.SELECT_ONE_PRODUCT);
            return;
          }
          data.quantity = {};
          for (let i in this.product.grouped_products) {
            if (this.product.grouped_products[i].quantity > 0) {
              data.quantity[
                this.product.grouped_products[i].id
              ] = this.product.grouped_products[i].quantity;
            }
          }
        } else if (this.product.type == "simple") {
          if (!this.product.quantity || this.product.quantity == 0) {
            this.toast.show(x.SELECT_PRODUCT_QUANTITY);
            return;
          }
          data.quantity = this.product.quantity;
        } else {
          data.quantity = this.product.quantity;
          if (this.product.issetVariation) {
            data.variation_id = this.product.variation_id;
            data.variation = this.product.attr;
            //let temp = this.product.variation_selected.permalink.substring(this.product.variation_selected.permalink.lastIndexOf("?") + 1).split('&');
          } else {
            this.toast.show(x.VALID_VARIATION);
            return;
          }
        }
        console.log(data);
        this.loader.show();
        this.restClient
          .addToCart(data)
          .then((res: any) => {
            this.loader.dismiss();
            console.log(res);

            let data = JSON.parse(res.data);
            let msg =
              data instanceof Array
                ? data.map((e) => e.message).join(", ")
                : data.message;
            if (this.isError(data)) {
              this.toast.showWithClose(msg);
            } else {
              if (isBuyNow) {
                this.goTo("myCart", "");
              } else {
                this.viewCart(msg);
              }
              this.events.publish("cartchanged");
            }
          })
          .catch((err) => {
            console.log(err);
            this.loader.dismiss();
          });
      });
  }

  share(product: any) {
    if (!this.platform.is("cordova")) {
      this.translate
        .get(["OK", "ONLY_DEVICE", "ONLY_DEVICE_DESC"])
        .subscribe((x) => {
          this.presentAlert(x.ONLY_DEVICE,x.ONLY_DEVICE_DESC,[{ text: x.OK}])
          return false;
        });
    } else {
      let img = [];
      for (let i in product.images) img.push(product.images[i].src);
      this.socialSharing
        .share(product.name, product.name, img, product.permalink)
        .then((x) => {
          console.log(x);
          this.translate.get(["SHARED"]).subscribe((x) => {
            this.toast.show("Successfully shared");
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  async presentAlert(header,message,buttons) {
    let confirm = await this.alertCtrl.create({
      header: header,
      message: message,
      buttons: buttons
    });
    await confirm.present();
  }
  buyExternal() {
    this.iab.create(this.product.external_url, "_system");
  }
  submitPincodeCheck(newPostCode?) {
    if (!this.postcodeEnter) {
      this.postcodeEnter = true;
      return;
    }
    this.loader.show();
    this.WC.checkPincode(newPostCode, this.product.id).then(
      (res) => {
        this.loader.dismiss();
        console.log(res);
        this.postcode = newPostCode;
        this.postcodeEnter = false;
        console.log(this.postcode);
        this.settings.setSettings(this.postcode, "postcode");
        this.deliveryDetails = res;
      },
      (err) => {
        this.loader.dismiss();
        this.toast.showError();
      }
    );
  }
  async viewCart(data1) {
    const modal = await this.modalCtrl.create({
      component: MiniCartPage,
      componentProps:{"MiniCartData":data1},
      cssClass:"mini-cart",
      //enterAnimation:"modal-slide-in",
      //leaveAnimation:"modal-slide-out"
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (data != null) {
      if (data && data == "root") {
        this.navCtrl.navigateRoot("home");
      } else if (data == "back") {
        this.navCtrl.pop();
      } else if (data == "cart") {
        this.goTo("myCart", "");
      }
    }
  }
  isError(data) {
    if (data instanceof Array) {
      return data.every((e) => e.code === "0");
    } else {
      return data.code == 0;
    }
  }
  zoomImage(src, name) {
    this.photoViewer.show(src, name, { share: false });
  }
}
