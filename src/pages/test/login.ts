import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/take';
import { Databaseprovider } from '../../providers/databaseprovider';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // Test RDNS
  // books: FirebaseListObservable<any>;
  booksOnce;
  constructor(public navCtrl: NavController, public dbProvider: Databaseprovider) {
    // this.books = angFire.database.list('/Books');

  }

  ionViewDidLoad() {
    console.log('LoginPage Page Open');
  }

  onLogin(){

  }

  getDataOnce(){
    this.booksOnce = this.dbProvider.getData();
    // this.booksOnce = this.angFire.database.list('/Books').take(1);
    console.log(this.booksOnce);
  }



}
