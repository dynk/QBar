import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { MoodsObject } from '../../model/MoodsObject';
import { ResultPage } from '../result/result'

@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {


  constructor(public navCtrl: NavController) {

  }

  // teste RDNS : populando temporariamente
  cteste: MoodsObject = new MoodsObject();
  cards = this.cteste.getMoods();


  openSelectedMood(data){
    this.navCtrl.push(ResultPage,{
      data: data
    });

  }

}
