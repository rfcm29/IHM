import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComparaInfoPageRoutingModule } from './compara-info-routing.module';

import { ComparaInfoPage } from './compara-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComparaInfoPageRoutingModule
  ],
  declarations: [ComparaInfoPage]
})
export class ComparaInfoPageModule {}
