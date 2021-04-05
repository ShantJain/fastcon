import { Component, ViewChild } from "@angular/core";
import { PhotoViewer, PhotoViewerOptions } from "@ionic-native/photo-viewer/ngx";
import { IonSlides, NavController, Platform } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

/**
 * Generated class for the ImageGalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-image-gallery",
  templateUrl: "image-gallery.html",
  styleUrls:["image-gallery.scss"]
})
export class ImageGalleryPage {
  @ViewChild("slider") slider: IonSlides;
  product: any;
  ind: 0;
  dir: string;
  slidesPerView = {
    nnnowCategory: 3.2,
    basicProductGrid: 3.5,
  };
  constructor(
    public navCtrl: NavController,
    private route: ActivatedRoute,
    public platform: Platform,
    private photoViewer: PhotoViewer
  ) {
    this.dir = platform.isRTL?'rtl':'ltr';
    this.route.queryParams.subscribe(params => {
      this.product = [
        ...params.images,
        ...params.extraImages,
      ];
    });
  }
  backHome(){
    this.navCtrl.back();
  }
  changeIndex(i) {
    console.log(i);
    this.ind = i;
    this.slider.slideTo(i);
  }

  zoomImage(src, name) {
    this.photoViewer.show(src, name, { share: false });
  }

  ionViewDidEnter() {
    console.log("ionViewDidEnter ImageGalleryPage");
  }
}
