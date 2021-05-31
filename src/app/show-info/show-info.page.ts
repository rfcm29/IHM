import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavParams } from '@ionic/angular';
import { ItensService } from '../services/itens.service';

@Component({
  selector: 'app-show-info',
  templateUrl: './show-info.page.html',
  styleUrls: ['./show-info.page.scss'],
})
export class ShowInfoPage implements OnInit {

  public data: any;

  constructor(private itemServ: ItensService) {
  }

  ngOnInit() {
    this.itemServ.getInfoItem().subscribe(data => {
      this.data = data;
    })
  }

  onClick(id: string) {
    this.itemServ.putItem(id);
  }

}
