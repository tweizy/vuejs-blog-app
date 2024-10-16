import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // If you're using Authentication

const firebaseConfig = {
    apiKey: "AIzaSyD6k-_ZTs6r8P5zUO1Gnn0D6V_s1U8nwGk",
    authDomain: "blog-vue-app-cda48.firebaseapp.com",
    projectId: "blog-vue-app-cda48",
    storageBucket: "blog-vue-app-cda48.appspot.com",
    messagingSenderId: "637687063728",
    appId: "1:637687063728:web:46ac110e5fdacd3190c775",
    measurementId: "G-V29TZBLMHJ"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app);

// Export Firebase services so you can use them in other parts of your app
export { db, auth };
