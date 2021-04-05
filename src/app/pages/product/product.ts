import { Component, NgZone } from '@angular/core';
import {  NavController,  ModalController } from '@ionic/angular';
import { WooCommerceProvider, WishlistProvider, ToastProvider, SettingsProvider } from '../../services/providers';
import { PageTrack } from '../../decorator/page-track.decorator';
import { TranslateService } from '@ngx-translate/core';
import { FilterPage } from './filter/filter';
import { SortPage } from './sort/sort';
import { SearchPage } from 'src/app/ShareComponent/search/search';
import { NavigationExtras, ActivatedRoute } from '@angular/router';

@PageTrack({})
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
  styleUrls: ['product.scss'],
})
export class ProductPage {
  products: Array<any>;
  params: any = {};
  page: number = 1;
  hasMore: boolean = false;
  sortby: string = 'popularity';
  per_page: number = 30;
  show_loader: boolean = true;
  showEmpty: boolean = false;
  filterData: any = {};
  items: Array<any>;
  categories: Array<any>;
  on_sale: boolean;
  featured: boolean;

  constructor(public navCtrl: NavController,private route: ActivatedRoute,  private WC: WooCommerceProvider,
    public wishlist: WishlistProvider, private zone: NgZone, private toast: ToastProvider, private translate: TranslateService,
    public settings: SettingsProvider, private modalCtrl: ModalController) {

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
      this.params.search  = params.search_data?params['search_data']:"";
      this.sortby  = params.sortby?params['sortby']:"popularity";
      this.on_sale  = params['on_sale']?params['on_sale']:false;
      this.featured  = params['featured']?params['featured']:false;

      if (this.items[1].id && this.settings.category && this.settings.category.length > 0) {
        this.categories = this.settings.category.filter((item) => {
          return item.parent == this.items[1].id;
        });
      } else if (this.items[1].id) {
        this.WC.getAllCategories(this.items[1].id).then((res: any) => {
          this.categories = res;
        }, err => {
          console.log(err);
        })
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
  back(){
    this.navCtrl.back();
  }


  ionViewDidEnter() {
    console.log('ionViewDidEnter ProductPage');
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

  loadProducts() {
    this.show_loader = true;
    this.products = [];
    this.WC.getCustomProducts(this.page, this.per_page, this.sortby, this.items[1].id, this.params.search, this.items[0].min_price, this.items[0].max_price, this.on_sale, this.featured, this.filterData).then((res: any) => {
      this.show_loader = false;
      console.log(res);
      this.zone.run(() => {
        this.products = res;
        this.hasMore = (res.length == this.per_page);
        this.showEmpty = (res.length == 0);
        let p = this.joinProductIds(this.products);
        this.WC.getCustomAttributes(p).then((res: any) => {
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
            } else {
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
    this.WC.getCustomProducts(this.page, this.per_page, this.sortby, this.items[1].id, this.params.search, this.items[0].min_price, this.items[0].max_price, this.on_sale, this.featured, this.filterData).then((res: any) => {
      console.log(res);
      this.zone.run(() => {
        this.products = this.products.concat(res);

        let p = this.joinProductIds(this.products);
        this.WC.getCustomAttributes(p).then((res: any) => {
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
        } else {
          this.hasMore = false;
          event.enable(false);
        }
      }, (err) => {
        this.toast.showError();
        console.log(err);
      });
    });
  }

  setFav(product: any) {
    //  this.translate.get(['REMOVE_WISH', 'ADDED_WISH']).subscribe( x=> {
    this.wishlist.add(product);
    // });
  }

  async sort() {
    const modal = await this.modalCtrl.create({
      component: SortPage,
      componentProps:{ sortby: this.sortby},
      cssClass:'sort'
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (data) {
      this.sortby = data;
      this.page = 1;
      this.loadProducts();
    }
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
  async filter(active) {
    const modal = await this.modalCtrl.create({
      component: FilterPage,
      componentProps:{ items: this.items, active: active },
      cssClass:'filter'
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
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
  }

  goTo(page, params) {
    console.log(page);
    console.log(params);
    let navigationExtras: NavigationExtras = { queryParams: params }
    this.navCtrl.navigateForward([page], navigationExtras);
  }
}
