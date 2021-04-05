import { NgModule } from "@angular/core";
import { ImageGalleryPage } from "./image-gallery";
import { IonicImageLoaderModule } from "ionic-image-loader-v5";
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ImageGalleryPageRoutingModule } from './image-gallery-routing.module';
import { PhotoViewer, PhotoViewerOptions } from "@ionic-native/photo-viewer/ngx";
import { WebView } from '@ionic-native/ionic-webview/ngx';

@NgModule({
  declarations: [ImageGalleryPage],
  imports: [ 
    CommonModule,IonicModule,
    ImageGalleryPageRoutingModule, 
    IonicImageLoaderModule
  ],
  providers:[PhotoViewer,WebView],
  exports: [],
})
export class ImageGalleryPageModule {}
