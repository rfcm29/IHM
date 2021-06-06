import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItensService {

  private itens: any[] = [];
  private carrinho = [];

  constructor(private router: Router, private rotaAtiva: ActivatedRoute) {
  }

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

  goFiltros(rota: string, filtros: any) {
    const extras: NavigationExtras = {
      state: {
        filtros: filtros
      }
    }

    this.router.navigate([rota], extras);
  }

  getFiltragem() {
    return new Observable (observer => {
      this.rotaAtiva.queryParams.subscribe(params =>{
        if(this.router.getCurrentNavigation().extras.state) {
          const filtros: any = this.router.getCurrentNavigation().extras.state.filtros;
          observer.next(this.filtra(filtros));
          observer.complete;
        }
      })
    })
  }

  filtra(filtros: any) {

    var itensFiltrados: any[] = [];

    Object.keys(this.itens).forEach(key => {
      filtros.marcas.forEach(marca => {
        if(this.itens[key].marca === marca && !itensFiltrados.includes(this.itens[key])){
          itensFiltrados.push(this.itens[key]);
        }
      });
      filtros.processadores.forEach(process => {
        if(this.itens[key].processador === process && !itensFiltrados.includes(this.itens[key])){
          itensFiltrados.push(this.itens[key]);
        }
      });
      filtros.ram.forEach(ram => {
        if(this.itens[key].memoria === ram && !itensFiltrados.includes(this.itens[key])){
          itensFiltrados.push(this.itens[key]);
        }
      });
    });

    console.log(itensFiltrados)

    return itensFiltrados;
  }
}
