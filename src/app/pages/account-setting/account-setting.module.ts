import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';  
import { NgModule } from '@angular/core';
import { AccountSettingPage } from './account-setting';
import { AccountSettingPageRoutingModule } from './account-setting-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AccountSettingPage,
  ],
  imports: [
    CommonModule,IonicModule,
    FormsModule,ReactiveFormsModule,
    AccountSettingPageRoutingModule,
    TranslateModule.forChild()
  ],
})
export class AccountSettingPageModule {}
