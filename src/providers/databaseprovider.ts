import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import { Config } from '../config/config'

@Injectable()
export class Databaseprovider {
  // config;
  constructor(public angFire: AngularFire) {
    // this.config = Config;
    // console.log(this.config);
  }

  getData(){
    return this.getFirebaseData();
  }


  getFirebaseData(){

    // return this.angFire.database.list('/Books').take(1);
    return this.angFire.database.list('/Books').take(1).map(data =>{
      return data;
    });

  }




}
