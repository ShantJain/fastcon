import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppSettingPage } from './app-setting';

const routes: Routes = [
  {
    path: '',
    component: AppSettingPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppSettingPageRoutingModule {}
