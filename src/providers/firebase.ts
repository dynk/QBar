import { AngularFireModule } from 'angularfire2';


const firebaseConfig = {
  apiKey: "AIzaSyCpbifyM14dIa4rGViVSeMl_VCgaJp0WFw",
  authDomain: "qbar-4a177.firebaseapp.com",
  databaseURL: "https://qbar-4a177.firebaseio.com",
  storageBucket: "qbar-4a177.appspot.com",
  messagingSenderId: "774519390567"
};



export const FirebaseModule = AngularFireModule.initializeApp(firebaseConfig);
