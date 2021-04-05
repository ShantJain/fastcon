import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CheckoutPage } from './checkout';
import { CheckoutPageRoutingModule } from './checkout-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    CheckoutPage,
  ],
  imports: [
    CommonModule,IonicModule,FormsModule,
    ReactiveFormsModule,
    CheckoutPageRoutingModule,
    TranslateModule.forChild()
  ],
})
export class CheckoutPageModule {

}
