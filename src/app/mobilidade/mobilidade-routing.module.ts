import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MobilidadePage } from './mobilidade.page';

const routes: Routes = [
  {
    path: '',
    component: MobilidadePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MobilidadePageRoutingModule {}
