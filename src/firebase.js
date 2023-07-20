// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyCzJa7alinVSjUmvYSG4MLOp_8CK0m6ibU",
    authDomain: "clone-67c22.firebaseapp.com",
    projectId: "clone-67c22",
    storageBucket: "clone-67c22.appspot.com",
    messagingSenderId: "53197019555",
    appId: "1:53197019555:web:bee154e7e837ee49c16216",
    measurementId: "G-B6G91D19JL"

  };

  // const firebaseApp= initializeApp(firebaseConfig);

  const db = initializeApp(firebaseConfig);
  const auth= getAuth();

  export{db , auth};

