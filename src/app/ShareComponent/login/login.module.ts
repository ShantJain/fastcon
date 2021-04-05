import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { LoginPage } from './login';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    CommonModule,IonicModule,
    TranslateModule.forChild()
  ],
})
export class LoginPageModule {}
