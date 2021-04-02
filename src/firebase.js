import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAYZ2MW0cbKYSA7k2b9zolyTvpOiSsk7Sg",
  authDomain: "fir-chat-8247a.firebaseapp.com",
  projectId: "fir-chat-8247a",
  storageBucket: "fir-chat-8247a.appspot.com",
  messagingSenderId: "165223476313",
  appId: "1:165223476313:web:886612134c88e914e41548",
  measurementId: "G-1WP611LNBD",
};

firebase.initializeApp(firebaseConfig);

export const database = firebase.database();

export const pushMessage = ({ ref, name, text }) => {
  ref.push({ name, text });
};
