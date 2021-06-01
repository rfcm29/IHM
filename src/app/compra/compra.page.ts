import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PagamentoService } from '../services/pagamento.service';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.page.html',
  styleUrls: ['./compra.page.scss'],
})
export class CompraPage implements OnInit {

  public pagamentos;

  constructor(private pagamentoServ: PagamentoService, private route: Router, private toastController : ToastController) { }

  ngOnInit() {
    this.pagamentoServ.getPagamento().subscribe(data => {
      this.pagamentos = data;
    })
  }

  async concluir() {
    this.route.navigate(['/home']);

    const toast = await this.toastController.create({
      color: 'dark',
      duration: 2000,
      message: 'Compra efetuada com sucesso'
    });

    await toast.present();
  }

}
