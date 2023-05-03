import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDKfzJfKg08xUAHb7WBhs-I2L8lQV5nUIg",
    authDomain: "evoleonapp.firebaseapp.com",
    databaseURL: "https://evoleonapp-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "evoleonapp",
    storageBucket: "evoleonapp.appspot.com",
    messagingSenderId: "425564389277",
    appId: "1:425564389277:web:c86772f8abb19ffca47974",
    measurementId: "G-GL6LC3D645"
  };


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


export const loginUser = (email, password) => {
    return new Promise((resolve, reject) => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          resolve(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          reject(errorMessage);
        });
    });
  };


export default app