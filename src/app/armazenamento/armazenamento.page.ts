import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-armazenamento',
  templateUrl: './armazenamento.page.html',
  styleUrls: ['./armazenamento.page.scss'],
})
export class ArmazenamentoPage implements OnInit {

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
