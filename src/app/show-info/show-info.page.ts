import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { NavParams, ToastController } from '@ionic/angular';
import { ItensService } from '../services/itens.service';

@Component({
  selector: 'app-show-info',
  templateUrl: './show-info.page.html',
  styleUrls: ['./show-info.page.scss'],
})
export class ShowInfoPage implements OnInit {

  public data: any;

  constructor(private itemServ: ItensService, private toastController: ToastController, private route: Router) {
  }

  ngOnInit() {
    this.itemServ.getInfoItem().subscribe(data => {
      this.data = data;
    })
  }

  async onClick(id: string) {
    this.itemServ.putItem(id);
    const toast = await this.toastController.create({
      color: 'dark',
      duration: 2000,
      message: 'Adicionado ao carrinho'
    });

    await toast.present();
  }

  comparar(){
    const extras: NavigationExtras = {
      state: {
        key: this.data
      }
    }
    this.route.navigate(["/comparar"], extras);
  }

}
