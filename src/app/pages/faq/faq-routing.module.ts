import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqPage } from './faq';

const routes: Routes = [
  {
    path: '',
    component: FaqPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaqPageRoutingModule {}
