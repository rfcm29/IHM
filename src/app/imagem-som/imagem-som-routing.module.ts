import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImagemSomPage } from './imagem-som.page';

const routes: Routes = [
  {
    path: '',
    component: ImagemSomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImagemSomPageRoutingModule {}
