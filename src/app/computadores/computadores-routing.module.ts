import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComputadoresPage } from './computadores.page';

const routes: Routes = [
  {
    path: '',
    component: ComputadoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComputadoresPageRoutingModule {}
