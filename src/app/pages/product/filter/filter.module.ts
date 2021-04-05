import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { FilterPage } from './filter';
import { TreeModule } from 'angular-tree-component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FilterPage,
  ],
  entryComponents:[FilterPage],
  exports:[FilterPage],
  imports: [
    FormsModule,ReactiveFormsModule,
    CommonModule,IonicModule,
    TranslateModule.forChild(),
    TreeModule
  ],
})
export class FilterPageModule {}
