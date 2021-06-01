import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eletrodomesticos',
  templateUrl: './eletrodomesticos.page.html',
  styleUrls: ['./eletrodomesticos.page.scss'],
})
export class EletrodomesticosPage implements OnInit {

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
