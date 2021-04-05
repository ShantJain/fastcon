import { ComponentsModule } from './../../components/components.module';
import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { TosPage } from './tos';
import { TosPageRoutingModule } from './tos-routing.module';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    TosPage,
  ],
  imports: [
    CommonModule,IonicModule,
    TosPageRoutingModule,
    TranslateModule.forChild(),
    ComponentsModule
  ],
})
export class TosPageModule {}
