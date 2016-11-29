import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Result page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-result',
  templateUrl: 'result.html'
})
export class ResultPage {

  // Teste RDNS :
  test

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.test = this.navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('Hello ResultPage Page');
  }


}
