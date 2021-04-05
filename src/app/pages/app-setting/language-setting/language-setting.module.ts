import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { LanguageSettingPage } from './language-setting';
import { createTranslateLoader } from '../../../app.module';

@NgModule({
  declarations: [
    LanguageSettingPage,
  ],
  imports: [
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
})
export class LanguageSettingPageModule {}
