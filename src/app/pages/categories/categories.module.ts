import { ComponentsModule } from './../../components/components.module';
import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CategoriesPage } from './categories';
import { IonicRatingModule } from 'ionic4-rating';
import { TreeModule } from 'angular-tree-component';
import { IonicImageLoaderModule } from 'ionic-image-loader-v5';
import { CategoriesPageRoutingModule } from './categories-routing.module';
import { CommonModule } from '@angular/common';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    CategoriesPage,
  ],
  imports: [
    CommonModule,IonicModule,
    IonicRatingModule,
    TranslateModule.forChild(),
    IonicImageLoaderModule,
    ComponentsModule,
    CategoriesPageRoutingModule,
    TreeModule
  ],
  providers:[
    WebView
  ]
})
export class CategoriesPageModule {
}
