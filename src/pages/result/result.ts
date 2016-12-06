import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserData } from '../../providers/user-data';
import { Databaseprovider } from '../../providers/databaseprovider'


@Component({
  selector: 'page-result',
  templateUrl: 'result.html'
})
export class ResultPage {

  // Teste RDNS :
  // test;
  // booksOnce;

  constructor(public navCtrl: NavController, private navParams: NavParams, private userData: UserData, private dbProvider: Databaseprovider) {
    // this.booksOnce = this.dbProvider.getData();
  }

  ionViewDidLoad() {
    console.log('ResultPage loaded');
    // this.test = this.navParams.get('data');


  }


}
