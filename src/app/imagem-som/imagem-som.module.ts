import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImagemSomPageRoutingModule } from './imagem-som-routing.module';

import { ImagemSomPage } from './imagem-som.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImagemSomPageRoutingModule
  ],
  declarations: [ImagemSomPage]
})
export class ImagemSomPageModule {}
