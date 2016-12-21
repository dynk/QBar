import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Parse} from 'parse';


@Injectable()
export class ParseProvider {


  estabelecimentos: any;
  queryEstabelecimentos: any;
  queryDetailEstabelecimento: any;

  constructor(public http: Http) {
    //Iinitialize connection to the server
   Parse.initialize('myAppId');
   Parse.serverURL = 'https://parse-server-dynk.herokuapp.com/parse';

   //Create class testObjClass
   var Estabelecimento = new Parse.Object.extend('Estabelecimento');
   this.estabelecimentos = new Estabelecimento();
   this.queryEstabelecimentos = new Parse.Query("Estabelecimento");
   this.queryDetailEstabelecimento = new Parse.Query("Estabelecimento");


  }



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

  findDetailedEstabelecimento(estabelecimento_id){
    var estab_result = [];

    this.queryDetailEstabelecimento.equalTo("estabelecimento_id", estabelecimento_id);
    this.queryDetailEstabelecimento.find().then(function (res){

    // RDNS - provisory - need to find a better way to parse it to json
    // Need to handle a way to get just one value from the response
    // instead of declaring '[0]'
    var result_json = JSON.parse(JSON.stringify(res[0].attributes));

    estab_result.push(result_json);

    // result = res;
    console.log("Aqui parse estabelecimento");
    console.log(estab_result);
    });

    return estab_result;
  }
  // RDNS provisory - tottally provisory
  // While angular 2 is not providing support for *ngFor to arrays
  findDetailedEstabelecimentoImage(estabelecimento_id){

    let result: any;
    let images: any;
    let imagesJson = [];

    this.queryDetailEstabelecimento.equalTo("estabelecimento_id", estabelecimento_id);
    this.queryDetailEstabelecimento.find().then(function(res){

    // RDNS - provisory - need to find a better way to parse it to json
    // Need to handle a way to get just one value from the response
    // instead of declaring '[0]'
    let result_json = JSON.parse(JSON.stringify(res[0].attributes));

    result = result_json;
    images = result.img;
    for( var i = 0 ; i<images.length; i++){
      // imagesJson[i] = { i: images[i]};
      imagesJson.push({ "img": images[i]});
    }

    // result = res;
    console.log("images ")
    console.log(images);
    });

    return imagesJson;
  }


}
