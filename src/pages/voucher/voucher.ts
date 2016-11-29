import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Voucher page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-voucher',
  templateUrl: 'voucher.html'
})
export class VoucherPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello VoucherPage Page');
  }

}
