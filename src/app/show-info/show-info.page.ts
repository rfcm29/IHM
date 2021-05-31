import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-show-info',
  templateUrl: './show-info.page.html',
  styleUrls: ['./show-info.page.scss'],
})
export class ShowInfoPage implements OnInit {

  value: any;

  constructor(private activateRoute: ActivatedRoute) {
    this.activateRoute.queryParams.subscribe((res) =>{
      this.value = res;
    })
  }

  ngOnInit() {
  }

}
