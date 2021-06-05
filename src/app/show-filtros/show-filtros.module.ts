import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowFiltrosPageRoutingModule } from './show-filtros-routing.module';

import { ShowFiltrosPage } from './show-filtros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowFiltrosPageRoutingModule
  ],
  declarations: [ShowFiltrosPage]
})
export class ShowFiltrosPageModule {}
