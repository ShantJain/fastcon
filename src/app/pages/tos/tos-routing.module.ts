import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TosPage } from './tos';

const routes: Routes = [
  {
    path: '',
    component: TosPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TosPageRoutingModule {}
