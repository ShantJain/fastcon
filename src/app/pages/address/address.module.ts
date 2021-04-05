import { TranslateModule } from '@ngx-translate/core';

import { NgModule } from '@angular/core';
import { AddressPage } from './address';
import { AddressPageRoutingModule } from './address-routing.module';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { EditAddressPageModule } from './edit-address/edit-address.module';
@NgModule({
  declarations: [
    AddressPage,
  ],
  imports: [
    EditAddressPageModule,
    CommonModule,IonicModule,
    AddressPageRoutingModule,
    TranslateModule.forChild()
  ],
})
export class AddressPageModule {}
