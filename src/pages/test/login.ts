import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  constructor(public navCtrl: NavController) {  }

  ionViewDidLoad() {
    console.log('LoginPage Page Open');
  }

  onLogin(){

  }

  getDataOnce(){

  }



}
