import { IonicImageLoaderModule } from 'ionic-image-loader-v5';
import { TreeModule } from 'angular-tree-component';
import { NgModule } from '@angular/core';
import { SearchPage } from './search';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';  
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { IonicModule } from '@ionic/angular';
@NgModule({
  declarations: [
    SearchPage,
  ],
  imports: [
    CommonModule,IonicModule,
    TranslateModule.forChild(),
    IonicImageLoaderModule,
    TreeModule
  ],providers:[WebView]
})
export class SearchPageModule {}
