import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { MoodsObject } from '../../model/MoodsObject';
import { ResultPage } from '../result/result';
import { Config } from '../../config/config'


@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {



  constructor(public navCtrl: NavController) {

  }

  // teste RDNS : populando temporariamente
  moods: MoodsObject = new MoodsObject();
  cards = this.moods.getMoods();

  ionViewDidLoad() {
    console.log("MainPage loaded");
  }


  openSelectedMood(mood){
    // RDNS test - forcing values for a while
    let data = {
      "moods": [mood.toLowerCase()],
      "location": {
        "latitude": -19.8039051,
        "longitude":-43.963071
      }
    };
    this.navCtrl.push(ResultPage,{
      data: data
    });

  }


}
