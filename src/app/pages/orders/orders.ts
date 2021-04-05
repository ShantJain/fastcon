import {
  WooCommerceProvider,
  UserProvider,
  SettingsProvider,
  ToastProvider,
  RestProvider,
} from "./../../services/providers";
import { Component, NgZone } from "@angular/core";
import {
  NavController,
  ModalController
} from "@ionic/angular";
import { SearchPage } from 'src/app/ShareComponent/search/search';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: "page-orders",
  templateUrl: "orders.html",
  styleUrls: ['orders.scss'],
})
export class OrdersPage {
  orders: Array<any>;
  images: Array<any>;
  newOrder: Array<any>;
  per_page: number = 20;
  page: number = 1;
  hasMore: boolean = false;

  constructor(
    public navCtrl: NavController,
    private WC: WooCommerceProvider,
    private RS: RestProvider,
    private modalCtrl: ModalController,
    private toast: ToastProvider,
    public user: UserProvider,
    public settings: SettingsProvider,
    private zone: NgZone
  ) {
    
  }
  backHome(){
    this.navCtrl.back();
  }
  ionViewDidEnter() {
    console.log("ionViewDidEnter OrdersPage");
    this.getOrders();
  }

  getOrders() {
    var obj = this;
    if (obj.user.all) {
      obj.WC.getOrders(obj.user.id, obj.page, obj.per_page).then(
        (data) => {
          console.log(data);
          obj.zone.run(() => {
            obj.orders = data;
            let newOrder = [];
            for (let i = 0; i < data.length; i++) {
              if(obj.orders[i].refunds.length > 0){
                var amt = 0;
                for (let j = 0; j < obj.orders[i].refunds.length; j++) { 
                  amt =  amt + parseInt(obj.orders[i].refunds[j].total) ;
                  
                }
                var a = parseInt(obj.orders[i].total)  + amt;
                console.log(a);
                obj.orders[i].total =  a;
                console.log(obj.orders[i].total);
              }
              obj.WC.getImages(data[i].line_items[0].product_id).then(
                (data) => {
                  obj.zone.run(() => {
                    newOrder.push({
                      ...obj.orders[i],
                      line_items: obj.getLineItems(
                        obj.orders[i].line_items,
                        data
                      ),
                    });
                  });
                }
              );
            }
            //obj.orders = newOrder;
            console.log(newOrder);
            obj.newOrder = newOrder;
            obj.hasMore = data.length == obj.per_page;
          });
        },
        (err) => {
          this.toast.showError();
        }
      );
    }
  }

  getLineItems(line_items, data) {
    let newArr = [];
    for (let i = 0; i < line_items.length; i++) {
      newArr.push({ ...line_items[i], data });
    }
    return newArr;
  }

  loadMoreOrders(event) {
    this.page++;
    this.WC.getOrders(this.user.id, this.page, this.per_page).then((data) => {
      this.zone.run(
        () => {
          this.orders = this.orders.concat(data);
          let newOrder = [];
          for (let i = 0; i < data.length; i++) {
            this.WC.getImages(data[i].line_items[0].product_id).then(
              (data) => {
                this.zone.run(() => {
                  newOrder.push({
                    ...this.orders[i],
                    line_items: this.getLineItems(
                      this.orders[i].line_items,
                      data
                    ),
                  });
                });
              }
            );
          }
          this.newOrder = this.newOrder.concat(newOrder);
          event.complete();
          if (data.length == this.per_page) {
            this.hasMore = true;
          } else {
            this.hasMore = false;
            event.enable(false);
          }
        },
        (err) => {
          this.toast.showError();
          console.log(err);
        }
      );
    });
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
  goHome() {
    this.navCtrl.navigateRoot('home');
  }
  goTo(page, params) {
    let navigationExtras: NavigationExtras = { queryParams:{data:JSON.stringify(params)}   }
    this.navCtrl.navigateForward([page], navigationExtras);
  }

  calculatePrice(x) {
    return x.prices_include_tax
      ? x.total
      : (Number(x.total) + Number(x.total_tax)).toFixed(2);
  }
}
