import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserData } from '../../providers/user-data';
import { ParseProvider } from '../../providers/parse-provider';

@Component({
  selector: 'page-result',
  templateUrl: 'result.html'
})
export class ResultPage {

  // Teste RDNS :
  estabelecimentos: any;
  booksOnce;

  constructor(
    public navCtrl: NavController,
    private navParams: NavParams,
    private userData: UserData,
    public parseProvider: ParseProvider) {
  }

  ionViewDidLoad() {
    console.log('ResultPage loaded');
    let mainData = this.navParams.get('data');
    this.estabelecimentos = this.parseProvider.findEstabelecimentos(mainData);
    console.log(this.estabelecimentos);

  }


}
