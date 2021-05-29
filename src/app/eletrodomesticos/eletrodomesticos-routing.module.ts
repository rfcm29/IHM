import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EletrodomesticosPage } from './eletrodomesticos.page';

const routes: Routes = [
  {
    path: '',
    component: EletrodomesticosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EletrodomesticosPageRoutingModule {}
