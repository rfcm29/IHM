import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController, NavParams, ToastController } from '@ionic/angular';
import { ItensService } from '../services/itens.service';

@Component({
  selector: 'app-show-info',
  templateUrl: './show-info.page.html',
  styleUrls: ['./show-info.page.scss'],
})
export class ShowInfoPage implements OnInit {

  public data: any;

  constructor(private itemServ: ItensService, private toastController: ToastController, private route: Router, public alertController: AlertController) {
  }

  // A função "ngOnInit" vai mostrar as informações do produto.
  ngOnInit() {
    this.itemServ.getInfoItem().subscribe(data => {
      this.data = data;
    })
    console.log(this.data)
  }

  // A função "onClick" vai adicionar o produto ao carrinho e informar o utilizador dessa ação, dando-lhe a opção de continuar a comprar ou ir para o carrinho finalizar a compra.
  async onClick() {
    this.itemServ.putItem(this.data.item);

    const alert = await this.alertController.create({
      message: 'Item adicionado ao carrinho.',
      buttons: [{
        text: 'Continuar',
          handler: () => {
            this.route.navigate(['/computadores']);
          }
        }, {
          text: 'Carrinho de Compras',
          handler: () => {
            this.route.navigate(['/carrinho']);
          }
      }]
    });

    await alert.present();

    /*
    const toast = await this.toastController.create({
      color: 'dark',
      duration: 2000,
      message: 'Adicionado ao carrinho'
    });

    await toast.present();
    */
  }

  // A função "comparar" redireciona o utilizador para ontro ecrã onde pode selecionar outro produto para comparar com os produto anteriormente selecionado.
  comparar(){
    const extras: NavigationExtras = {
      state: {
        key: this.data
      }
    }
    this.route.navigate(["/comparar"], extras);
  }

}
