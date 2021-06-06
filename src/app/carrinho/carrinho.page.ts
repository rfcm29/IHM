import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ItensService } from '../services/itens.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {

  public carrinho;
  constructor(private itemServ: ItensService, private route: Router, private toastController: ToastController) {
    this.itemServ.getCarrinho().subscribe( itens => {
      this.carrinho = itens;
    });
   }

  ngOnInit() {
  }

  // A função "onClick" vai adicionar um produto ao carrinho e notificar o utilizador dessa ação.
  async onClick() {
    if(this.carrinho.length == 0){
      const toast = await this.toastController.create({
        color: 'dark',
        duration: 2000,
        message: 'Adicione items ao carrinho antes de continuar'
      });
      await toast.present();
    } else {
      this.route.navigate(['/compra'])
    }
  }

}
