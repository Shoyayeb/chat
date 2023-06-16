import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import firebaseConfig from '../firebaseConfig.json';

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig: FirebaseAppSettings = {
//     apikey:process.env.APIKEY,
//     authdomain:process.env.AUTHDOMAIN,
//     projectid:process.env.PROJECTID,
//     storagebucket:process.env.STORAGEBUCKET,
//     messagingsenderid:process.env.MESSAGINGSENDERID,
//     appid:process.env.APPID,
//     measurementid:process.env.MEASUREMENTID,
// };

// Initialize Firebase


export const googleLogin = () =>{
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    return user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    return error;
  });
}
  