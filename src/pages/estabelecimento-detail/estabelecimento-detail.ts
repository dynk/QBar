import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserData } from '../../providers/user-data';
import { ParseProvider } from '../../providers/parse-provider';


@Component({
  selector: 'page-estabelecimento-detail',
  templateUrl: 'estabelecimento-detail.html'
})
export class EstabelecimentoDetailPage {

  estabelecimento: any;
  estabelecimentoImages: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public parseProvider: ParseProvider) {
      let estabelecimento_id = this.navParams.get('data');
      this.estabelecimento = this.parseProvider.findDetailedEstabelecimento(estabelecimento_id);
      this.estabelecimentoImages = this.parseProvider.findDetailedEstabelecimentoImage(estabelecimento_id);
    }



  ionViewDidLoad() {

  }



}
