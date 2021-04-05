import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { DownloadsPage } from './downloads';
import { DownloadsPageRoutingModule } from './downloads-routing.module';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
@NgModule({
  declarations: [
    DownloadsPage,
  ],
  imports: [
    CommonModule,IonicModule,
    DownloadsPageRoutingModule,
    TranslateModule.forChild()
  ],
  providers: [ 
    FileTransfer,File,AndroidPermissions
  ]
})
export class DownloadsPageModule {}
