import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { LoginPage } from './login/login';
import { SearchPage } from './search/search';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';  
@NgModule({
  entryComponents:[
    LoginPage,SearchPage
  ],
  exports:[LoginPage,SearchPage],
  declarations: [
    LoginPage,SearchPage
  ],
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    TranslateModule.forChild()
  ],
})
export class ShareComModule {}
