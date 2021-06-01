import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-metodos',
  templateUrl: './metodos.page.html',
  styleUrls: ['./metodos.page.scss'],
})
export class MetodosPage implements OnInit {

  constructor(private routing: Router) { }

  ngOnInit() {
  }

  onClick(){
    this.routing.navigate(["/pagamento"]);
  }
}
