import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressPage } from './address';

const routes: Routes = [
  {
    path: '',
    component: AddressPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddressPageRoutingModule {}
