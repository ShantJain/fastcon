import { WooCommerceProvider } from "./../../services/woocommerce/woocommerce";
import { Component, ViewChild, NgZone } from "@angular/core";
import {
  NavController,
  ModalController,
  IonSearchbar,
} from "@ionic/angular";
import { SettingsProvider } from "../../services/providers";

@Component({
  selector: "page-search",
  templateUrl: "search.html",
  styleUrls:["search.scss"]
})
export class SearchPage {
  @ViewChild("searchBar") searchbar: IonSearchbar;
  search: string = "";
  products: Array<any>;
  results: any;
  constructor(
    public settings: SettingsProvider,
    public viewCtrl: ModalController,
    private zone: NgZone,
    public navCtrl: NavController,
    private WC: WooCommerceProvider
  ) {}

  submit(page, params) {
    console.log("dismiss");
    this.viewCtrl.dismiss({ page: page, params: params });
  }
  searchSuggestions() {
    console.log("searchSuggestions")
    console.log(this.search)
    if (this.search == "") {
      this.results = [];
    } else {
      this.WC.search(this.search, 4).then(
        (res) => {
          console.log(res)
          this.zone.run(() => {
            this.results = res;
          });
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

  ionViewDidEnter() {}

  ionViewWillEnter() {
    //this.history.load();
  }
  dismiss() {
    console.log("dismiss");
    this.viewCtrl.dismiss();
  }
}
