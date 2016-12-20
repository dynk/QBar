import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/take';




@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // Test RDNS
  // books: FirebaseListObservable<any>;
  booksOnce;
  constructor(public navCtrl: NavController) {
    // this.books = angFire.database.list('/Books');

  }

  ionViewDidLoad() {
    console.log('LoginPage Page Open');
  }

  onLogin(){

  }

  getDataOnce(){

  }



}
