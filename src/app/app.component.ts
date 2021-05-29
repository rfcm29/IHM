import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Computadores', url: '/computadores', icon: 'mail' },
    { title: 'Mobilidade', url: '/mobilidade', icon: 'paper-plane' },
    { title: 'Imagem e Som', url: '/imagem-som', icon: 'heart' },
    { title: 'Periféricos', url: '/perifericos', icon: 'archive' },
    { title: 'Armazenamento', url: '/armazenamento', icon: 'trash' },
    { title: 'Redes Comunicação', url: '/redes-comunicacao', icon: 'warning' },
    { title: 'Eletrodomésticos', url: '/eletrodomesticos', icon: 'warning' },
  ];
  constructor() {}
}
