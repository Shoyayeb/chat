import { FirebaseOptions } from "firebase/app";

export const firebaseConfigz:FirebaseOptions = {
  apikey:process.env.APIKEY,
  authdomain:process.env.AUTHDOMAIN,
  projectid:process.env.PROJECTID,
  storagebucket:process.env.STORAGEBUCKET,
  messagingsenderid:process.env.MESSAGINGSENDERID,
  appid:process.env.APPID,
  measurementid:process.env.MEASUREMENTID,
};
