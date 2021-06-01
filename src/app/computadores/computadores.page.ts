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

  ngOnInit() {
    this.itemServ.getItens().subscribe( itens => {
      this.itens = itens
    });
  }

  cardClick(rota: string, numero: string) {
    this.itemServ.goRota(rota, numero);
  }

  comparar(){
    this.route.navigate(["/comparar"]);
  }

  filtrar(){
    this.route.navigate(["/filtros"]);
  }

}
