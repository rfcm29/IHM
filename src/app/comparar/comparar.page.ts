import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItensService } from '../services/itens.service';

@Component({
  selector: 'app-comparar',
  templateUrl: './comparar.page.html',
  styleUrls: ['./comparar.page.scss'],
})
export class CompararPage implements OnInit {

  public itens: any;
  public id: any;

  constructor(private itemServ: ItensService, private route: Router) {
   }

  ngOnInit() {
    if(this.route.getCurrentNavigation().extras.state) {
      this.id = this.route.getCurrentNavigation().extras.state.key;
    }
    this.itemServ.getItens().subscribe( itens => {
      this.itens = itens
    });
  }

  cardClick() {
    console.log(this.itens);
    console.log(this.id);
  }

}
