import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ItensService } from '../services/itens.service';

@Component({
  selector: 'app-computadores',
  templateUrl: './computadores.page.html',
  styleUrls: ['./computadores.page.scss'],
})
export class ComputadoresPage implements OnInit {

  public itens: any;

  constructor(private itemServ: ItensService, private route: Router) { }

  // A função "ngOnInit" vai mostrar os produtos e respetivas informações, armazenadas no ficheiro JSON, no ecrã. 
  ngOnInit() {
    this.itemServ.getItens().subscribe( itens => {
      this.itens = itens
    });
  }

  // A função "cardClick" vai levar o utilizador a uma pagina que mostre as informações do produto selecionado, onde pode adicionar ao carrinho e comparar.
  cardClick(rota: string, numero: string) {
    this.itemServ.goRota(rota, numero);
  }

  // A função "filtrar" vai levar o utilizador ao ecrã onde pode selecionar os filtros desejados.
  filtrar(){
    this.route.navigate(["/filtros"]);
  }

}
