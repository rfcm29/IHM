import { Component, OnInit } from '@angular/core';
import { ItensService } from '../services/itens.service';

@Component({
  selector: 'app-show-filtros',
  templateUrl: './show-filtros.page.html',
  styleUrls: ['./show-filtros.page.scss'],
})
export class ShowFiltrosPage implements OnInit {

  itens: any;

  constructor(private itemServ: ItensService,) { }

  //A função "ngOnInit" vai mostrar as informações dos produtos filtrados.
  ngOnInit() {
    this.itemServ.getFiltragem().subscribe( itens => {
      this.itens = itens;
    });
   console.log(this.itens)

  }

  // A função "cardClick" vai redirecionar o utilizador para um ecrã em que pode ver e adicionar ao carrinho o produto que selecionou.
  cardClick(rota: string, numero: string) {
    this.itemServ.goRotaFiltros(rota, numero);
  }

}
