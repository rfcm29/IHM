import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItensService {

  private itens: any;
  private carrinho = [];

  constructor(private router: Router, private rotaAtiva: ActivatedRoute) { }

  getItens() {
    return new Observable (observer => {
      fetch('./assets/data/itens.json')
      .then(resposta => resposta.json())
      .then(json => {
        this.itens = json;
        observer.next(this.itens);
        observer.complete();
      })
    })
  }

  goRota(rota: string, id: string){
    const extras: NavigationExtras = {
      state: {
        key: id,
        item: this.itens[id]
      }
    }

    this.router.navigate([rota], extras);
  }

  getInfoItem() {
    return new Observable (observer => {
      this.rotaAtiva.queryParams.subscribe(params =>{
        if(this.router.getCurrentNavigation().extras.state) {
          const infoItem: any = this.router.getCurrentNavigation().extras.state;
          observer.next(infoItem);
          observer.complete;
        }
      })
    })
  }

  putItem(id: string) {
    this.carrinho.push(this.itens[id]);
  }

  getCarrinho() {
    return new Observable (observer => {
        observer.next(this.carrinho);
        observer.complete();
    })
  }
}
