import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {

  private metodo = [];

  constructor() { }

  setPagamento(info: any) {
    this.metodo.push(info);
  }

  getPagamento(){
    return new Observable (observer => {
      observer.next(this.metodo);
  })
  }
}
