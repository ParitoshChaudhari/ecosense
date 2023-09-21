import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const FirebaseConfig = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyCndgjHbKYUdecYk2IhRYxNnRNsvD2tXEg",
    authDomain: "project-awm.firebaseapp.com",
    databaseURL: "https://project-awm-default-rtdb.firebaseio.com",
    projectId: "project-awm",
    storageBucket: "project-awm.appspot.com",
    messagingSenderId: "972933839649",
    appId: "1:972933839649:web:6527e7f4560ecc88381c60",
    measurementId: "G-GCT995ND0J",
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  return getDatabase(app);
};

export default FirebaseConfig;
