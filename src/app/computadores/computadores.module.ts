import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComputadoresPageRoutingModule } from './computadores-routing.module';

import { ComputadoresPage } from './computadores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComputadoresPageRoutingModule
  ],
  declarations: [ComputadoresPage]
})
export class ComputadoresPageModule {}
