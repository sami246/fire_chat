import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyD3iB_IM24CebHUju_7rB4kBFxwjwEZ5cs",
    authDomain: "fire-chat-c4784.firebaseapp.com",
    projectId: "fire-chat-c4784",
    storageBucket: "fire-chat-c4784.appspot.com",
    messagingSenderId: "593129220278",
    appId: "1:593129220278:web:ab23a9364cf5c64606de17"
  }).auth();
