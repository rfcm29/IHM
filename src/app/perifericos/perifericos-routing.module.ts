import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerifericosPage } from './perifericos.page';

const routes: Routes = [
  {
    path: '',
    component: PerifericosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerifericosPageRoutingModule {}
