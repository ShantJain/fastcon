import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CalculateShippingPage } from './calculate-shipping';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CalculateShippingPage,
  ],
  imports: [
    FormsModule,ReactiveFormsModule,
    CommonModule,IonicModule,
    TranslateModule.forChild()
  ],
  entryComponents:[CalculateShippingPage],
  exports:[CalculateShippingPage]
})
export class CalculateShippingPageModule {}
