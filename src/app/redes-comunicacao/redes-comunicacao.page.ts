import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redes-comunicacao',
  templateUrl: './redes-comunicacao.page.html',
  styleUrls: ['./redes-comunicacao.page.scss'],
})
export class RedesComunicacaoPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  comparar(){
    this.route.navigate(["/comparar"]);
  }

  filtrar(){
    this.route.navigate(["/filtros"]);
  }

}
