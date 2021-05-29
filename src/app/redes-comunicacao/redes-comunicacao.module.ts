import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedesComunicacaoPageRoutingModule } from './redes-comunicacao-routing.module';

import { RedesComunicacaoPage } from './redes-comunicacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedesComunicacaoPageRoutingModule
  ],
  declarations: [RedesComunicacaoPage]
})
export class RedesComunicacaoPageModule {}
