import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerifericosPageRoutingModule } from './perifericos-routing.module';

import { PerifericosPage } from './perifericos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerifericosPageRoutingModule
  ],
  declarations: [PerifericosPage]
})
export class PerifericosPageModule {}
