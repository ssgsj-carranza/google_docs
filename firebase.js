import firebase from './firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCuN-lTnkd27TqxSchQg2N4_hY5m5-TImE",
    authDomain: "docs-ec9be.firebaseapp.com",
    projectId: "docs-ec9be",
    storageBucket: "docs-ec9be.appspot.com",
    messagingSenderId: "522262544282",
    appId: "1:522262544282:web:650b8ae82fce6f441ac423"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

  const db = app.firestore();

  export {db};