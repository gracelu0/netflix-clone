import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";

//seed the database

//config
const config = {
  apiKey: "AIzaSyBxonJZBXMg_Sdvb8vUd9xHH1LEa9TcoDk",
  authDomain: "netflix-824ac.firebaseapp.com",
  databaseURL: "https://netflix-824ac.firebaseio.com",
  projectId: "netflix-824ac",
  storageBucket: "netflix-824ac.appspot.com",
  messagingSenderId: "584040732305",
  appId: "1:584040732305:web:13939c559b1717f64f1130",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
