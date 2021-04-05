import {
  WishlistProvider,
  WooCommerceProvider,
  SettingsProvider,
} from "./../../services/providers";
import { Component, NgZone } from "@angular/core";
import {
  NavController,
  ModalController,
} from "@ionic/angular";
import { SearchPage } from 'src/app/ShareComponent/search/search';
import { NavigationExtras } from '@angular/router';
//import * as _ from 'lodash';

@Component({
  selector: "page-categories",
  templateUrl: "categories.html",
  styleUrls: ['categories.scss'],
})
export class CategoriesPage {
  categories: Array<any>;
  nodes: Array<any>;
  subCategories: Array<any>;
  subSubCategories: Array<any>;
  options = { displayField: "name" };
  page = 1;
  indexTab = 0;
  tmp: Array<any> = [];
  constructor(
    public navCtrl: NavController,
    public settings: SettingsProvider,
    private modalCtrl: ModalController,
    private WC: WooCommerceProvider,
    public wishlist: WishlistProvider,
    private zone: NgZone
  ) {}
  getAllCategories() {
    if (this.settings.category && this.settings.category.length > 0) {
      this.categories = this.convert(this.settings.category);
      console.log(this.categories);
      for (let i = 0; i < this.categories.length; i++) {
        if (
          this.categories[i].name === "Women's Fashion" &&
          this.categories[i].isExpanded != true
        ) {
          this.gotoSubCategory(this.categories[i]);
        }
      }
      this.zone.run(() => {
        this.nodes = this.categories;
      });
    }
    this.WC.getAllCategories().then((res) => {
      this.settings.setSettings(res, "category");
      this.categories = this.convert(res);
      console.log(this.categories);
      for (let i = 0; i < this.categories.length; i++) {
        if (
          this.categories[i].name === "Women's Fashion" &&
          this.categories[i].isExpanded != true
        ) {
          this.gotoSubCategory(this.categories[i]);
        }
      }
      this.zone.run(() => {
        this.nodes = this.categories;
      });
    });
  }
  backHome(){
    this.navCtrl.navigateRoot("home");
  }
  ionViewWillEnter() {
    console.log("ionViewDidEnter CategoriesPage");
    this.getAllCategories();
  }

  gotoSubCategory(item) {
    console.log(item);
    this.subSubCategories = [];
    for (let i = 0; i < this.categories.length; i++) {
      if (
        this.categories[i].id === item.id &&
        this.categories[i].isExpanded != true
      ) {
        this.categories[i].isExpanded = true;
      } else {
        this.categories[i].isExpanded = false;
      }
    }
    this.subCategories = item.children;
  }

  convert(dataList) {
    Object.keys(dataList).forEach((key) => {
      dataList[key].isExpanded = false;
    });
    var tree = [],
      mappedArr = {},
      arrElem,
      mappedElem;
    // First map the nodes of the array to an object -> create a hash table.
    for (var i = 0, len = dataList.length; i < len; i++) {
      arrElem = dataList[i];
      mappedArr[arrElem.id] = arrElem;
      mappedArr[arrElem.id]["children"] = [];
    }
    for (var id in mappedArr) {
      if (mappedArr.hasOwnProperty(id)) {
        mappedElem = mappedArr[id];
        // If the element is not at the root level, add it to its parent array of children.
        if (mappedElem.parent != 0) {
          mappedArr[mappedElem["parent"]]["children"].push(mappedElem);
        }
        // If the element is at the root level, add it to first level elements array.
        else {
          tree.push(mappedElem);
        }
      }
    }

    return tree;
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
    let navigationExtras: NavigationExtras = { queryParams: params }
    this.navCtrl.navigateForward([page], navigationExtras);
  }
}
