import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { WalletPage } from './wallet';
import { WalletPageRoutingModule } from './wallet-routing.module';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    WalletPage,
  ],
  imports: [
    CommonModule,IonicModule,
    WalletPageRoutingModule,
    TranslateModule.forChild()
  ],
})
export class WalletPageModule {}
