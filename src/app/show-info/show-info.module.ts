import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowInfoPageRoutingModule } from './show-info-routing.module';

import { ShowInfoPage } from './show-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowInfoPageRoutingModule
  ],
  declarations: [ShowInfoPage]
})
export class ShowInfoPageModule {}
