import { ComponentsModule } from './../../components/components.module';
import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { FaqPage } from './faq';
import { FaqPageRoutingModule } from './faq-routing.module';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    FaqPage,
  ],
  imports: [
    CommonModule,IonicModule,
    FaqPageRoutingModule,
    TranslateModule.forChild(),
    ComponentsModule
  ],
})
export class FaqPageModule {}
