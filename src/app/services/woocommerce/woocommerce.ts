import { SettingsProvider } from "./../settings/settings";
import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage-angular";
import { App } from "../../app.config";
import { HttpClient } from "@angular/common/http";
import { HTTP } from "@ionic-native/http/ngx";
import { map } from 'rxjs/operators';
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: "root",
})
export class WooCommerceProvider {
  WooCommerce: any;
  woo: any = {};
  RestURL: string;
  constructor(
    public storage: Storage,
    public http: HttpClient,
    public _platform: Platform,
    public mHTTP:HTTP,
    public temp: SettingsProvider
  ) {
    this.RestURL = App.url + "/wp-json/wc/v2/";
    this.init();
  }

  init() {
    this.WooCommerce = new WooCommerceRestApi({
      url: App.url,
      consumerKey: App.consumerKey,
      consumerSecret: App.consumerSecret,
      wpAPI: true, //or false if you want to use the legacy API v3
      version: "wc/v2", //or wc/v1
      //verifySsl: true,
      queryStringAuth: true,
    });
    return this.WooCommerce;
  }

  // getAllCategories(parent?, per_page = 100, order?, orderby?) {//: Promise<any> {
  //   let pt = parent ? "&parent=" + parent : '';
  //   let pp = "?per_page=" + per_page;
  //   let o = order ? "&order=" + order : '';
  //   let ob = orderby ? "&orderby=" + orderby : '';
  //   return this.WooCommerce.get("products/categories" + pp + pt + o + ob).then((x) => {
  //     console.log(x.data);
  //     return x.data;
  //   });
  // }
  async getAllCategories(parent?) {
    //: Promise<any> {
    let pt = parent ? "?parent=" + parent : "";
    let data1 = await this.mHTTP.get(this.RestURL + "products/all-categories" + pt, {}, {});
    return new Promise((resolve) => { 
      resolve(JSON.parse(data1?.data));
    });
   // return this.http.get(this.RestURL + "products/all-categories" + pt);
  }
  async getOrderItemsReason() {
    /*console.log(this.RestURL + "order-item/action-settings");
    let data1 = await this.mHTTP.get(this.RestURL + "", {}, {});
    console.log(data1);
    return new Promise((resolve) => { 
      resolve(JSON.parse(data1?.data));
    });*/
    return this.WooCommerce.get("order-item/action-settings").then((x) => {
      //console.log(x.data);
      return x.data;
    });
  }
  
  getSubCategories(c: any) {
    //: Promise<any> {
    return this.WooCommerce.get("products/categories?parent=" + c).then((x) => {
      //console.log(x.data);
      return x.data;
    });
  }

  loadSetting() {
    return this.WooCommerce.get("system_status").then(
      (x) => {
        console.log(x);
        this.temp.setSettings(x.data.settings, "settings");
        return x.data.settings;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  // getAllProducts(page: number, category: number, search: string, min_price: number, max_price: number, per_page: number, status: string, order: string, attribute: string = '', attribute_term: string = '', include: string, orderby: string, featured: boolean, on_sale: boolean, visible: boolean) {//: Promise<any> {
  //   let p = page ? '&page=' + page : '';
  //   let pp = per_page ? '&per_page=' + per_page : '&per_page=10';
  //   let c = category ? '&category=' + category : '';
  //   let q = search ? '&search=' + search : '';
  //   let min = min_price ? '&min_price=' + min_price : '';
  //   let max = max_price ? '&max_price=' + max_price : '';
  //   let s = status ? '?status=' + status : '?status=publish';
  //   let a = attribute ? '&attribute=' + attribute : '';
  //   let t = attribute_term ? '&attribute_term=' + attribute_term : '';
  //   let o = order ? '&order=' + order : '';
  //   let i = include ? '&include=' + include : '';
  //   let ob = orderby ? '&orderby=' + orderby : '';
  //   let f = featured ? '&featured=' + featured : '';
  //   let os = on_sale ? '&on_sale=' + on_sale : '';
  //   let v = visible ? '&visible=' + visible : '';
  //   return this.WooCommerce.get("products" + s + p + pp + c + q + min + max + a + t + o + i + ob + f + os + v).then((x) => {
  //     console.log(x.data);
  //     return x.data;
  //   });
  // }
  async getProductById(include?, id?) {
    //Multiple ids suppoerted(include=1,2,3,4,5) or single id supported(id=1)
    let incl = include ? "?include=" + include : "";
    let i = id ? "?id=" + id : "";

    let data1 = await this.mHTTP.get(this.RestURL + "get-products-by-id" + incl + i, {}, {});
    return new Promise((resolve) => { 
      resolve(JSON.parse(data1?.data));
    });
   // return this.http.get(this.RestURL + "get-products-by-id" + incl + i);
  }
  async search(search, per_page?) {
    let s = search ? "?search=" + search : "?search=''";
    let pp = per_page ? "&per_page=" + per_page : "";
    let data1 = await this.mHTTP.get(this.RestURL + "custom-search" + s + pp, {}, {});
    return new Promise((resolve) => { 
      resolve(JSON.parse(data1?.data));
    });
    //return this.http.get(this.RestURL + "custom-search" + s + pp);
  }
  async getOrderItemsCancel(order_id,item_id,reason,request_item_action){

    let clientConfirmData = new FormData();
    clientConfirmData.append("dev","test");
    clientConfirmData.append("order_id",order_id);
    clientConfirmData.append("item_id",item_id);
    clientConfirmData.append("reason",reason);
    clientConfirmData.append("request_item_action",request_item_action);

    this.mHTTP.setDataSerializer("multipart");
    console.log(clientConfirmData);

    let data1 = await this.mHTTP.post(this.RestURL +"order-item/cancel" , clientConfirmData, {});
    console.log(data1);  
    return new Promise((resolve) => {
      resolve(JSON.parse(data1?.data));
    });
  }
  async getOrderItemsExchange(order_id,item_id,reason,request_item_action){
  
   // this.mHTTP.setDataSerializer("json");
   let clientConfirmData = new FormData();
   clientConfirmData.append("dev","test");
   clientConfirmData.append("order_id",order_id);
   clientConfirmData.append("item_id",item_id);
   clientConfirmData.append("reason",reason);
   clientConfirmData.append("request_item_action",request_item_action);

   this.mHTTP.setDataSerializer("multipart");
   console.log(clientConfirmData);
    console.log(this.RestURL +"order-item/exchange");
    let data1 = await this.mHTTP.post(this.RestURL +"order-item/exchange" , clientConfirmData, {});
    return new Promise((resolve) => {
      resolve(JSON.parse(data1?.data));
    });
  }
  async getOrderItemsReturn(order_id,item_id,reason,request_item_action){
    let clientConfirmData = new FormData();
    clientConfirmData.append("dev","test");
    clientConfirmData.append("order_id",order_id);
    clientConfirmData.append("item_id",item_id);
    clientConfirmData.append("reason",reason);
    clientConfirmData.append("request_item_action",request_item_action);

    this.mHTTP.setDataSerializer("multipart");
    console.log(clientConfirmData);
    let data1 = await this.mHTTP.post(this.RestURL +"order-item/refund" , clientConfirmData, {});
    return new Promise((resolve) => {
      console.log(data1);
      resolve(JSON.parse(data1?.data));
    });
  }
  
  async getCustomProducts(
    page,per_page,sort,category,search,min_price?, max_price?,on_sale?,featured?,filterData?
  ) {
    let p = page ? "?page=" + page : "?page=1";
    let pp = per_page ? "&per_page=" + per_page : "&per_page=10";
    let s = sort ? "&sort=" + sort : "&sort=default";
    let c = category ? "&category=" + category : "";
    let sh = search ? "&search=" + search : "";
    let min_p = min_price ? "&min_price=" + min_price : "";
    let max_p = max_price ? "&max_price=" + max_price : "";
    let os = on_sale ? "&on_sale=" + on_sale : "";
    let f = featured ? "&featured=" + featured : "";
    console.log("custom-products" + p + pp + s + c + sh + min_p + max_p);
    let data1 = await this.mHTTP.post(this.RestURL +
      "custom-products" +
      p +
      pp +
      s +
      c +
      sh +
      min_p +
      max_p +
      os +
      f, filterData, {});
    return new Promise((resolve) => {
      resolve(JSON.parse(data1?.data));
    });
    /*
    return this.http.post(
      this.RestURL +
        "custom-products" +
        p +
        pp +
        s +
        c +
        sh +
        min_p +
        max_p +
        os +
        f,
      filterData
    );*/
  }
  async getProductThumb(id) {
    let data1 = await this.mHTTP.get(this.RestURL + "product/thumbnail?id=" + id, {}, {});
    return new Promise((resolve) => { 
      resolve(JSON.parse(data1?.data));
    });
    //return this.http.get(this.RestURL + "product/thumbnail?id=" + id);
  }
  getAttributeTerms(id: number) {
    return this.WooCommerce.get(
      "products/attributes/" + id + "/terms?hide_empty=true"
    ).then((x) => {
      // console.log(x.data);
      return x.data;
    });
  }

  getAttributes() {
    //: Promise<any> {

    return this.WooCommerce.get("products/attributes").then((x) => {
      // console.log(x.data);
      return x.data;
    });
  }
  getProductAttributes(id?: number) {
    let i = id ? "?id=" + id : "";
    return this.WooCommerce.get("products/product-attributes/" + i).then(
      (x) => {
        // console.log(x.data);
        return x.data;
      }
    );
  }
  async getCustomAttributes(product?) {
    let p = product ? "&product=" + product : "";
    let data1 = await this.mHTTP.get(this.RestURL + "products/custom-attributes?hide_empty=true" + p, {}, {});
    return new Promise((resolve) => { 
      resolve(JSON.parse(data1?.data));
    });
    /*
    return this.http.get(
      this.RestURL + "products/custom-attributes?hide_empty=true" + p
    );*/
  }

  async getProductVariation(data) {
    this.mHTTP.setDataSerializer("json");
    //Custom api made by phoeniixx
    console.log(data);
   
    let data1 = await this.mHTTP.post(this.RestURL + "products/get-variation", data, {});
    return new Promise((resolve) => {
      console.log(data1);
      resolve(JSON.parse(data1?.data));
    });
   // return this.http.post(this.RestURL + "products/get-variation", data);
  }
  getOrders(id: number, page: number, per_page: number) {
    let p = page ? "&page=" + page : "";
    let pp = per_page ? "&per_page=" + per_page : "&per_page=5";
    console.log("orders?customer=" +id + p + pp);
    return this.WooCommerce.get("orders?customer=" + id + p + pp).then(
      (data) => {
        return data.data;
      }
    );
  }
  async updateOrder(id, status, transaction_id?) {
    var data = {
      "order_id":id,
      "cancel_reason":status
    };
    console.log(data);
    this.mHTTP.setDataSerializer("json");
    let data1 = await this.mHTTP.post(this.RestURL +"order/cancel" , data, {});
    return new Promise((resolve) => {
      console.log(data1);  
      resolve(JSON.parse(data1?.data));
    });

    /*return this.WooCommerce.put("order/cancel", data).then((data) => {
      return data.data;
    });*/
  }
  getOrder(order_id: number) {
    return this.WooCommerce.get("orders/" + order_id).then((data) => {
      return data.data;
    });
  }
  getDownloads(id: number) {
    return this.WooCommerce.get("customers/" + id + "/downloads").then((x) => {
      // console.log(x.data);
      return x.data;
    });
  }
  getUserInfo(id: number) {
    return this.WooCommerce.get("customers/" + id).then((x) => {
      // console.log(x.data);
      return x.data;
    });
  }
  updateUserInfo(id: number, data) {
    return this.WooCommerce.post("customers/" + id, data).then((x) => {
      return x.data;
    });
  }
  createOrder(data) {
    return this.WooCommerce.post("orders", data).then((x) => {
      return x.data;
    });
  }
  async saveAppSettings() {
    /*if(this._platform.is("mobileweb") || this._platform.is("desktop")){
      return this.http.get(this.RestURL + "app-settings");
    }else{*/
      console.log(this.RestURL + "app-settings");
      let data = await this.mHTTP.get(this.RestURL + "app-settings", {}, {});
      return new Promise((resolve) => { 
        resolve(JSON.parse(data?.data));
      });
    //}
  }
  async checkPincode(pincode, product_id?) {
    let p: any = {};
    p.pincode = pincode;
    if (product_id) {
      p.product_id = product_id;
    }
    let data1 = await this.mHTTP.post(this.RestURL + "checkpincode", p, {});
    return new Promise((resolve) => {
      resolve(JSON.parse(data1?.data));
    });
    //return this.http.post(this.RestURL + "checkpincode", p);
  }

  async getFAQ() {
    let data1 = await this.mHTTP.get(this.RestURL + "faq-settings", {}, {});
    return new Promise((resolve) => { 
      resolve(JSON.parse(data1?.data));
    });
    //return this.http.get(this.RestURL + "faq-settings");
  }

  getCoupons() {
    return this.WooCommerce.get("coupons").then((x) => {
      return x.data;
    });
  }
  getReviewSettings(product_id, user_id) {
    let p_id = product_id ? "?product_id=" + product_id : "?";
    let u_id = user_id ? "&user_id=" + user_id : "";

    return this.http
      .get(this.RestURL + "product/review-settings" + p_id + u_id)
      .subscribe((x) => {
        this.temp.setSettings(x, "reviewSettings");
        return x;
      });
  }
  getProductReviews(id: number, status = "approved") {
    let WCv3 = new WooCommerceRestApi({
      url: App.url,
      consumerKey: App.consumerKey,
      consumerSecret: App.consumerSecret,
      wpAPI: true, //or false if you want to use the legacy API v3
      version: "wc/v3", //or wc/v1
      //verifySsl: true,
      queryStringAuth: true,
    });
    let p = id ? "?product=" + id : "";
    let s = "&status=" + status;
    return WCv3.get("products/reviews" + p + s).then((x) => {
      console.log(x.data);
      return x.data;
    });
  }
  postProductReviews(data) {
    let WCv3 = new WooCommerceRestApi({
      url: App.url,
      consumerKey: App.consumerKey,
      consumerSecret: App.consumerSecret,
      wpAPI: true, //or false if you want to use the legacy API v3
      version: "wc/v3", //or wc/v1
      //verifySsl: true,
      queryStringAuth: true,
    });

    return WCv3.post("products/reviews", data).then((x) => {
      return x.data;
    });
  }
  async getTermConditon() {
    let data1 = await this.mHTTP.get(this.RestURL + "terms", {}, {});
    return new Promise((resolve) => { 
      resolve(JSON.parse(data1?.data));
    });
    //return this.http.get(this.RestURL + "terms");
  }
  async getHomePageLayout() {
    let data1 = await this.mHTTP.get(this.RestURL + "layout", {}, {});
    console.log(data1);
    return new Promise((resolve) => { 
      resolve(JSON.parse(data1?.data));
    });
   // return this.http.get(this.RestURL + "layout");
  }
  async getProductByUrl(url) {
    console.log(this.RestURL+"get-product-by-url?url=" + url);
    return this.WooCommerce.get("get-product-by-url?url=" + url).then((x) => {
      return x.data;
    });
    //return this.http.get(this.RestURL + "get-product-by-url?url=" + url);
  }
  async getOrderTrackData(order_id) {
    console.log(this.RestURL+"order/track/delivery?order_id=" + order_id);
    return this.WooCommerce.get("order/track/delivery?order_id=" + order_id).then((x) => {
      return x.data;
    });
  }
  async getCustomOrderTrackData(order_id) {
    console.log(this.RestURL+"order/manual-tracking?order_id=" + order_id);
    return this.WooCommerce.get("order/manual-tracking?order_id=" + order_id).then((x) => {
      return x.data;
    });
  }
  async getOrderItemsStatus(order_id) {
    console.log(this.RestURL+"order-items/status?order_id=" + order_id);
    return this.WooCommerce.get("order-items/status?order_id=" + order_id).then((x) => {
      return x.data;
    });
  }
  async getImages(product_id) {
    console.log(this.RestURL+"product/image?id=" + product_id);
    return this.WooCommerce.get("product/image?id=" + product_id).then((x) => {
      return x.data;
    });
  }
}
