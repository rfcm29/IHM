import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage {

  teste = { cartao: 'teste',
            codigo: 'teste1'}

  constructor(private route: Router ) { }


/* Escrevi elementoClick porque o Métodos de Pagamento ainda não está clickable*/
  elementoClick() {
    this.route.navigate(['/pagamento'], {queryParams: this.teste});
  }

  

}
