import { Component, OnInit } from '@angular/core';
import { ItensService } from '../services/itens.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {

  public carrinho;
  constructor(private itemServ: ItensService) { }

  ngOnInit() {
    this.itemServ.getCarrinho().subscribe( itens => {
      this.carrinho = itens;
    });
    console.log(this.carrinho);
  }

}
