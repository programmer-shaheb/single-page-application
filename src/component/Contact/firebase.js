import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAd5RKJeDKpB_iUjAKzaUeplQXdC6UkPUI",
  authDomain: "single-page-application-e513f.firebaseapp.com",
  projectId: "single-page-application-e513f",
  storageBucket: "single-page-application-e513f.appspot.com",
  messagingSenderId: "142670121382",
  appId: "1:142670121382:web:076e132668ea431e7d6767",
};
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
