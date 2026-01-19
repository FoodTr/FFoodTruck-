// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDi3AngT9VMMbzZ970q11yI3TueaX7LDZw",
  authDomain: "ffoodtrucks-103ef.firebaseapp.com",
  projectId: "ffoodtrucks-103ef",
  storageBucket: "ffoodtrucks-103ef.firebasestorage.app",
  messagingSenderId: "778211176518",
  appId: "1:778211176518:web:28911ff529693ee24e1a47",
  measurementId: "G-DJ5MBLZ9Q8"
};

// Initialisation de Firebase
const app = initializeApp(firebaseConfig);

// On exporte les outils pour les utiliser ailleurs
export const auth = getAuth(app);
export const db = getFirestore(app);
export const ts = serverTimestamp; 

console.log("🚀 FFoodTrucks : Firebase centralisé connecté !");
