import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComparaInfoPage } from './compara-info.page';

const routes: Routes = [
  {
    path: '',
    component: ComparaInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComparaInfoPageRoutingModule {}
