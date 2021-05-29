import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MobilidadePageRoutingModule } from './mobilidade-routing.module';

import { MobilidadePage } from './mobilidade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MobilidadePageRoutingModule
  ],
  declarations: [MobilidadePage]
})
export class MobilidadePageModule {}
