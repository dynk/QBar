
declare var firebase: any;
declare var dbref: any;

export class Firebase {
  constructor(){
    var config = {
   apiKey: "AIzaSyCpbifyM14dIa4rGViVSeMl_VCgaJp0WFw",
   authDomain: "qbar-4a177.firebaseapp.com",
   databaseURL: "https://qbar-4a177.firebaseio.com",
   storageBucket: "qbar-4a177.appspot.com",
   messagingSenderId: "774519390567"
 };

 firebase.initializeApp(config);
  }

  dbref = firebase.database().ref().child('text');

}
