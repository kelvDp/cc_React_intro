import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import * as firebase from "firebase";
import * as serviceWorker from "./serviceWorker";


   // Your web app's Firebase configuration
   var firebaseConfig = {
     apiKey: "AIzaSyDntq0w7qH7rdYt-tS9Ld5NsnoJifMWnAM",
     authDomain: "reactcrud-dad7e.firebaseapp.com",
     databaseURL: "https://reactcrud-dad7e.firebaseio.com",
     projectId: "reactcrud-dad7e",
     storageBucket: "reactcrud-dad7e.appspot.com",
     messagingSenderId: "354448640565",
     appId: "1:354448640565:web:74c56bc08c44a2e60bff7c",
     measurementId: "G-2J228KPFTY",
   };
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   firebase.analytics();
 

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
