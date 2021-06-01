import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-imagem-som',
  templateUrl: './imagem-som.page.html',
  styleUrls: ['./imagem-som.page.scss'],
})
export class ImagemSomPage implements OnInit {

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
