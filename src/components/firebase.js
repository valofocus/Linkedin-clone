import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB2EF9n46C4Pp4m2xC1A6GuIRwPwaqcFJc",
    authDomain: "linkedin-clone-97de8.firebaseapp.com",
    projectId: "linkedin-clone-97de8",
    storageBucket: "linkedin-clone-97de8.appspot.com",
    messagingSenderId: "772176922209",
    appId: "1:772176922209:web:4a757b0e8b339226d98c20"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  
  const auth = firebaseApp.auth();
  
  export { db, auth };