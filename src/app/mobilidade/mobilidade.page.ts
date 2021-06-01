import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobilidade',
  templateUrl: './mobilidade.page.html',
  styleUrls: ['./mobilidade.page.scss'],
})
export class MobilidadePage implements OnInit {

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
