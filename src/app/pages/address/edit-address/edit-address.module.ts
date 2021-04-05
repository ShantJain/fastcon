import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { EditAddressPage } from './edit-address';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EditAddressPage,
  ],
  imports: [
    TranslateModule,
    FormsModule,ReactiveFormsModule,
    CommonModule,IonicModule,
    TranslateModule.forChild()
  ],
  exports:[EditAddressPage],
  entryComponents:[EditAddressPage]
})
export class EditAddressPageModule {}
