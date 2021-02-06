import firebase from "firebase/app"
import "firebase/auth"

// Note: Uncomment the following and delete actual keys when everyone has setup firebase locally in .env.local file

//  Firebase configuration
  var firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
  };



  const app = firebase.initializeApp(firebaseConfig);

  export const auth = app.auth()
  export default app;