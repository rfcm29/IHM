import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home'},
    { title: 'Computadores', url: '/computadores'},
    { title: 'Mobilidade', url: '/mobilidade'},
    { title: 'Imagem e Som', url: '/imagem-som'},
    { title: 'Periféricos', url: '/perifericos'},
    { title: 'Armazenamento', url: '/armazenamento'},
    { title: 'Redes e Comunicação', url: '/redes-comunicacao'},
    { title: 'Eletrodomésticos', url: '/eletrodomesticos'},
  ];
  constructor(private route: Router) {}

  perfilClick() {
    this.route.navigate(['/perfil']);
  }
}
