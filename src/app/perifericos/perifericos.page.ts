import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perifericos',
  templateUrl: './perifericos.page.html',
  styleUrls: ['./perifericos.page.scss'],
})
export class PerifericosPage implements OnInit {

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
