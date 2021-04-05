import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { SortPage } from './sort';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    SortPage,
  ],
  entryComponents:[SortPage],
  exports:[SortPage],
  imports: [
    CommonModule,IonicModule,
    TranslateModule.forChild()
  ],
})
export class SortPageModule {}
