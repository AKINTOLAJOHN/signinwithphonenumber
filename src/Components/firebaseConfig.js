import * as firebase from "firebase/app";

 // Your web app's Firebase configuration
 const firebaseConfig = {

};
  // Initialize Firebase
// var cred = credential.cert('./index.json')
 const firebaseApp =  firebase.initializeApp(firebaseConfig )
//  firebase.initializeApp(cred);
  export default firebaseApp;
