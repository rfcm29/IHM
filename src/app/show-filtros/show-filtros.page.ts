import { Component, OnInit } from '@angular/core';
import { ItensService } from '../services/itens.service';

@Component({
  selector: 'app-show-filtros',
  templateUrl: './show-filtros.page.html',
  styleUrls: ['./show-filtros.page.scss'],
})
export class ShowFiltrosPage implements OnInit {

  itens: any;

  constructor(private itemServ: ItensService) { }

  ngOnInit() {
    this.itemServ.getFiltragem().subscribe( itens => {
      this.itens = itens;
    });
    console.log(this.itens)
  }

}
