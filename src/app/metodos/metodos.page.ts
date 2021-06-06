import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PagamentoService } from '../services/pagamento.service';

@Component({
  selector: 'app-metodos',
  templateUrl: './metodos.page.html',
  styleUrls: ['./metodos.page.scss'],
})
export class MetodosPage implements OnInit {

  public metodo;

  constructor(private routing: Router, private pagamentoServ: PagamentoService) {

   }

  ngOnInit() {
  }

  // A função "ionViewWillEnter" mostra os dados dos metodos de pagamento adicionados.
  ionViewWillEnter() {
    this.pagamentoServ.getPagamento().subscribe(data => {
      this.metodo = data;
    });
    console.log(this.metodo);
  }

  // A função "onClick" leva o utilizador para outro ecrã onde pode adicionar metodos de pagamento.
  onClick(){
    this.routing.navigate(["/pagamento"]);
  }
}
