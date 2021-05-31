import { Component} from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-computadores',
  templateUrl: './computadores.page.html',
  styleUrls: ['./computadores.page.scss'],
})
export class ComputadoresPage {

  teste = {marca: 'teste',
            modelo: 'teste1'}

  constructor(private route: Router ) { }

  cardClick() {
    this.route.navigate(['/show-info'], {queryParams: this.teste})
  }

}
