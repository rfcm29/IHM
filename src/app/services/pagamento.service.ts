import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {

  private metodo = [];

  constructor() { }

  // A função "setPagamento" vai armazenar as informações do metodo de pagamento inserido.
  setPagamento(info: any) {
    this.metodo.push(info);
  }

  // A função "getPagamento" vai retornar os dados do metodo de pagamento inserido.
  getPagamento(){
    return new Observable (observer => {
      observer.next(this.metodo);
  })
  }
}
