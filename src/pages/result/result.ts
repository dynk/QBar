import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserData } from '../../providers/user-data';
import { ParseProvider } from '../../providers/parse-provider';
import { EstabelecimentoDetailPage } from '../estabelecimento-detail/estabelecimento-detail';

@Component({
  selector: 'page-result',
  templateUrl: 'result.html'
})
export class ResultPage {

  // Teste RDNS :
  estabelecimentos: any;


  constructor(
    public navCtrl: NavController,
    private navParams: NavParams,
    private userData: UserData,
    public parseProvider: ParseProvider) {
  }

  ionViewDidLoad() {
    let mainData = this.navParams.get('data');
    this.estabelecimentos = this.parseProvider.findEstabelecimentos(mainData);
  }

  openDetailPage(estabelecimento_id){
    this.navCtrl.push(EstabelecimentoDetailPage,{
      data:estabelecimento_id
    });
  }


}
