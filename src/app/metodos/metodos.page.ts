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

  ionViewWillEnter() {
    this.pagamentoServ.getPagamento().subscribe(data => {
      this.metodo = data;
    });
    console.log(this.metodo);
  }

  onClick(){
    this.routing.navigate(["/pagamento"]);
  }
}
