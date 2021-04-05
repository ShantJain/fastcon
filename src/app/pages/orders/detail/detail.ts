import { ToastProvider } from "./../../../services/toast/toast";
import { LoadingProvider } from "./../../../services/loading/loading";
import {
  SettingsProvider,
  WooCommerceProvider,
} from "./../../../services/providers";
import { Component, NgZone } from "@angular/core";
import {
  NavController,
  AlertController
} from "@ionic/angular";
import { HttpClient } from "@angular/common/http";
import { TranslateService } from "@ngx-translate/core";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { ActivatedRoute, NavigationExtras } from '@angular/router';


@Component({
  selector: "page-order-detail",
  templateUrl: "detail.html",
  styleUrls:['detail.scss']
})
export class OrderDetailPage {
  order: string = "detail";
  data: any;
  page: string = "placed";
  details: string = "";
  check: boolean = false;
  con:number = 0;
  constructor(
    public nav: NavController,
    private route: ActivatedRoute,
    public settings: SettingsProvider,
    private toast: ToastProvider,
    private WC: WooCommerceProvider,
    public http: HttpClient,
    private zone: NgZone,
    private alertCtrl: AlertController,
    public translate: TranslateService,
    private iab: InAppBrowser
  ) {
    this.route.queryParams.subscribe(params => {
      this.data  = JSON.parse(params.data) ;
      this.data.line_items.forEach((element) => {
         this.WC.getProductThumb(element.product_id).then(
          (res: any) => {
            this.zone.run(() => {
              element.img_src = res.src;
            });
          },
          (err) => {
            console.log(err);
          }
        );
      });
      this.orderItemsStatus(this.data.id);
      this.customTrack(this.data.id);
    });

  }
  orderItemsStatus(orderID){
    var obj =this;
    obj.WC.getOrderItemsStatus(orderID).then(
      (res: any) => {
        console.log(res);
         console.log("getOrderItemsStatus");
         obj.data.line_items = obj.data.line_items.map(function(i){
            var stArr = res.data.filter(function(t){ return t.item_id == i.id; });
            console.log(stArr);
            if(stArr.length >0 && stArr[0].request_type=="Cancel"){
              obj.con++;
            }else if(stArr.length >0 && stArr[0].request_type=="Refund"){
              obj.con++;
            }else if(stArr.length >0 && stArr[0].request_type=="exchange"){
              obj.con++;
            }
            if(stArr.length >0 && stArr[0].request_status=="Canceled"){
              stArr[0].request_status = "Cancelled"
            }
              return {
                ...i,
                "itemSratus":stArr.length >0?stArr[0].request_status:""
              }
          })
          console.log(obj.data.line_items);
      },
      (err) => {
        this.toast.showError();
      }
    );
  }
  trackyourOrder(data) {

    this.WC.getOrderTrackData(data).then(
      (res: any) => {
        console.log(res);
        this.check = true;
        if (res.status_code != 0) {
          if (res.tracking_data.track_status) {
            this.page = res.tracking_data.shipment_track[0].current_status;
          }
        }
      },
      (err) => {
        this.toast.showError();
      }
    );
  }
  backHome(){
    this.nav.back();
  }
  customTrack(data) {
    this.WC.getCustomOrderTrackData(data).then(
      (res: any) => {
        console.log(res);
        
        if (
          res.status &&
          res.data.phoe_wc_manual_ship_enable &&
          res.data.phoe_wc_manual_ship_tracking_link != ""
        ) {
          this.zone.run(() => {
            this.details = res.data;
          });
        } else {
          this.trackyourOrder(this.data.id);
        }
      },
      (err) => {
        this.toast.showError();
      }
    );
  }
  cancelItrems(items,action){
    console.log(items);
    let navigationExtras: NavigationExtras = {queryParams:{"action":action,"items":JSON.stringify(items) ,"order_id":this.data.id}   }
    this.nav.navigateForward(["orderitems"],navigationExtras)
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
  async orderCancel() {
    let confirm = await this.alertCtrl.create({
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
    await confirm.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertCtrl.create({
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
        }, {
          text: 'Ok',
          handler: (alrData: any) => {
            if(alrData.reason==""){
              this.toast.show("Please Enter order Cancellation Reasons")
              return false;
            }
            this.WC.updateOrder(this.data.id,alrData.reason ).then(
              (res:any) => {
                if(res.success){
                  this.data.status = "Cancel";
                  alert.dismiss();
                }
              },
              (err) => {
                console.log(err);
                this.toast.showError();
              }
            );
          }
        }
      ]
    });

    await alert.present();
  }
}
