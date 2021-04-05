import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CouponPage } from './coupon';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CouponPage,
  ],
  imports: [
    CommonModule,IonicModule,
    TranslateModule.forChild()
  ],
  entryComponents:[CouponPage],
  exports:[CouponPage]
})
export class CouponPageModule {}
