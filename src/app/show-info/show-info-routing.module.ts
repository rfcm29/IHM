import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowInfoPage } from './show-info.page';

const routes: Routes = [
  {
    path: '',
    component: ShowInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowInfoPageRoutingModule {}
