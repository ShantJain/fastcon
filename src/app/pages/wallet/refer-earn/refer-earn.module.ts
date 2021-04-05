import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { ReferEarnPage } from './refer-earn';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ReferEarnPage,
  ],
  imports: [
    TranslateModule.forChild(),
    ComponentsModule
  ],
})
export class ReferEarnPageModule {}
