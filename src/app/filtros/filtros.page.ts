import { Component, OnInit } from '@angular/core';
import { ItensService } from '../services/itens.service';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.page.html',
  styleUrls: ['./filtros.page.scss'],
})
export class FiltrosPage implements OnInit {

  filtro: {
    marcas,
    processadores,
    ram
  };

  constructor( private serv: ItensService) {
    this.filtro = {
      marcas: [],
      processadores: [],
      ram: []
    }
  }

  ngOnInit() {
  }

  // A função "onChange" vai armazenar dentro de cada "tipo" os filtros selecionados.
  onChange($event, tipo){
    if(tipo == "marcas"){
      this.filtro.marcas = $event.target.value
    }
    if(tipo == "processadores"){
      this.filtro.processadores = $event.target.value
    }
    if(tipo == "ram"){
      this.filtro.ram = $event.target.value
    }
  }

  // A função "onClick" vai aplicar os filtros selecionados.
  onClick() {
    this.serv.goFiltros("show-filtros", this.filtro);
  }

}
