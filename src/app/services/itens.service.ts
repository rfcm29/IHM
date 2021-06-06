import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItensService {

  private itens: any[] = [];
  private carrinho = [];
  private itensFiltrados: any[] = [];

  constructor(private router: Router, private rotaAtiva: ActivatedRoute) {
  }

  // A função "getItens" vai retornar todos os itens do ficheiro JSON.
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

  // A função "goRota" vai passar as informações de cada produto para outro ecrã.
  goRota(rota: string, id: string){
    const extras: NavigationExtras = {
      state: {
        key: id,
        item: this.itens[id]
      }
    }

    this.router.navigate([rota], extras);
  }

  // A função "goRotaFiltros" vai passar as informações de cada produto filtrado para outro ecrã.
  goRotaFiltros(rota: string, id: string){
    const extras: NavigationExtras = {
      state: {
        key: id,
        item: this.itensFiltrados[id]
      }
    }

    this.router.navigate([rota], extras);
  }

  // A função "getInfoItem" mostra as informações do produto no ecrã.
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

  // A função "putItem" armazena as informações do produto ao carrinho.
  putItem(item: any) {
    this.carrinho.push(item);
  }

  // A função "getCarrinho" mostra a informação do produto no carrinho.
  getCarrinho() {
    return new Observable (observer => {
        observer.next(this.carrinho);
        observer.complete();
    })
  }

  // A função "goFiltros" vai, armazenar quais os filtros e reencaminhar para a pagina com os itens filtrados.
  goFiltros(rota: string, filtros: any) {
    const extras: NavigationExtras = {
      state: {
        filtros: filtros
      }
    }

    this.router.navigate([rota], extras);
  }

  // A função "getFiltragem" vai retornar todos os itens filtrados.
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

  // A função "filtra" vai comparar os itens filtrados com as propriedades de cada produto e retornar apenas os produtos com propriedades em comum com os filtros.
  filtra(filtros: any) {

    this.itensFiltrados = [];

    Object.keys(this.itens).forEach(key => {
      filtros.marcas.forEach(marca => {
        if(this.itens[key].marca === marca && !this.itensFiltrados.includes(this.itens[key])){
          this.itensFiltrados.push(this.itens[key]);
        }
      });
      filtros.processadores.forEach(process => {
        if(this.itens[key].processador === process && !this.itensFiltrados.includes(this.itens[key])){
          this.itensFiltrados.push(this.itens[key]);
        }
      });
      filtros.ram.forEach(ram => {
        if(this.itens[key].memoria === ram && !this.itensFiltrados.includes(this.itens[key])){
          this.itensFiltrados.push(this.itens[key]);
        }
      });
    });

    console.log(this.itensFiltrados)

    return this.itensFiltrados;
  }
}
