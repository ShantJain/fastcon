import { TranslateModule } from '@ngx-translate/core';
import { PipesModule } from './../../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { PaymentPage } from './payment';
import { PaymentPageRoutingModule } from './payment-routing.module';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    PaymentPage,
  ],
  imports: [
    PaymentPageRoutingModule,
    CommonModule,
    IonicModule,
    TranslateModule.forChild(),
    PipesModule
  ],
})
export class PaymentPageModule {}
