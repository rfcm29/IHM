import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
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

  cardClick(id) {
    console.log(this.itens);
    console.log(this.id);
    const extras: NavigationExtras = {
      state: {
        itens: {item1: this.id.item, item2: this.itens[id]}
      }
    }
    this.route.navigate(['/compara-info'], extras)
  }

}
