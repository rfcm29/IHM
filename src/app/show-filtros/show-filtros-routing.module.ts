import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowFiltrosPage } from './show-filtros.page';

const routes: Routes = [
  {
    path: '',
    component: ShowFiltrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowFiltrosPageRoutingModule {}
