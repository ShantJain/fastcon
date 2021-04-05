import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountSettingPage } from './account-setting';

const routes: Routes = [
  {
    path: '',
    component: AccountSettingPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountSettingPageRoutingModule {}
