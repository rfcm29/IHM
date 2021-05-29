import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EletrodomesticosPageRoutingModule } from './eletrodomesticos-routing.module';

import { EletrodomesticosPage } from './eletrodomesticos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EletrodomesticosPageRoutingModule
  ],
  declarations: [EletrodomesticosPage]
})
export class EletrodomesticosPageModule {}
