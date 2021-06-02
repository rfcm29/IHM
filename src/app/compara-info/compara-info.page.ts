import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compara-info',
  templateUrl: './compara-info.page.html',
  styleUrls: ['./compara-info.page.scss'],
})
export class ComparaInfoPage implements OnInit {

  public data: any;
  constructor(private route: Router) {
    if(this.route.getCurrentNavigation().extras.state) {
      this.data = this.route.getCurrentNavigation().extras.state.itens;
    }
   }

  ngOnInit() {

  }

  onClick(){
    console.log(this.data )
  }
}
