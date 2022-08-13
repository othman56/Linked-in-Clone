import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBXQXnQp71SmTocADkcQ0T1thjFCDFoBK8",
  authDomain: "linkedin-clone-48ee5.firebaseapp.com",
  projectId: "linkedin-clone-48ee5",
  storageBucket: "linkedin-clone-48ee5.appspot.com",
  messagingSenderId: "326049564172",
  appId: "1:326049564172:web:6f0df4b798546c1f3e5029",
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
