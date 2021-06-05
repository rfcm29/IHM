import { Component, OnInit } from '@angular/core';
import { ItensService } from '../services/itens.service';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.page.html',
  styleUrls: ['./filtros.page.scss'],
})
export class FiltrosPage implements OnInit {

<<<<<<< HEAD
  filtros: any;

  constructor() { }
=======
  filtro: {
    marcas,
    processadores
  };

  constructor( private serv: ItensService) {
    this.filtro = {
      marcas: [],
      processadores: []
    }
  }
>>>>>>> 64bde7376365e7de9dbfff2a8137571d3e14e006

  ngOnInit() {
  }

<<<<<<< HEAD
  filtrar(){
    
=======
  onChange($event, tipo){
    if(tipo == "marcas"){
      this.filtro.marcas = $event.target.value
    }
    if(tipo == "processadores"){
      this.filtro.processadores = $event.target.value
    }
  }

  onClick() {
    this.serv.goFiltros("show-filtros", this.filtro);
>>>>>>> 64bde7376365e7de9dbfff2a8137571d3e14e006
  }

}
