import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Parse} from 'parse';

/*
  Generated class for the ParseProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ParseProvider {


  estabelecimentos: any;
  queryEstabelecimentos: any;

  constructor(public http: Http) {
    //Iinitialize connection to the server
   Parse.initialize('myAppId');
   Parse.serverURL = 'https://parse-server-dynk.herokuapp.com/parse';

   //Create class testObjClass
   var Estabelecimento = new Parse.Object.extend('Estabelecimento');
   this.estabelecimentos = new Estabelecimento();
   this.queryEstabelecimentos = new Parse.Query("Estabelecimento");


  }

  save(){

  }


  // saveTest(){
  //   this.player.set('testRow', {"segunda":["d"], "terca":["b","c"]});
  //   console.log("saving player");
  //   this.player.save().then();
  // }

  findEstabelecimentos(data){

    // set user geoPoint
    var final_result = [];
    var sf = new Parse.GeoPoint({latitude: data.location.latitude, longitude: data.location.longitude});
    // set max disntance between the user and a bar
    let max_distance = 100;
    // limit distance in max_distancce and sort ascending
    this.queryEstabelecimentos.withinKilometers("geo", sf, max_distance);
    // right now looking for moods just on sundays
    this.queryEstabelecimentos.containedIn("dias.domingo.moods",data.moods);
    this.queryEstabelecimentos.find().then(function (result){

      for(var i = 0; i<result.length; i++){
        let place = result[i];
        let distance = place.get("geo").kilometersTo(sf);
        console.log("distance = "+ distance);
        // let test2 = {};
        // let test2 = JSON.stringify(place.attributes);
        // RDNS - provisory - need to find a better way to parse it to json
        let place_json = JSON.parse(JSON.stringify(place.attributes));
        place_json["dist_from_user"] = Math.floor(distance);

        final_result.push(place_json);

      }
      console.log(result);
      console.log(final_result);
    })

    return final_result;
  }

}
