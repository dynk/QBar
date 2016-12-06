import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import 'rxjs/add/operator/map';

@Injectable()
export class Databaseprovider {

  constructor(public angFire: AngularFire) {}

  getData(){
    return this.getFirebaseData();
  }


  getFirebaseData(){
    return this.angFire.database.list('/Books').take(1).map(data =>{
      return data;
    });
  }




}
