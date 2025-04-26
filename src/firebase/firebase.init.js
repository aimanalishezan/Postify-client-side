// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBfTt5GZyu3zmEKX5lOBuicTCQKtLxwynk",
  authDomain: "agents-3379e.firebaseapp.com",
  projectId: "agents-3379e",
  storageBucket: "agents-3379e.firebasestorage.app",
  messagingSenderId: "19309171854",
  appId: "1:19309171854:web:843290925751a039d1a5df"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// const firebaseConfig = {
//   apiKey: "AIzaSyD2MyJ8pvLluHp-odQlWt7JF-SvgMvorzs",
//   authDomain: "postify-e46c4.firebaseapp.com",
//   projectId: "postify-e46c4",
//   storageBucket: "postify-e46c4.firebasestorage.app",
//   messagingSenderId: "818833252022",
//   appId: "1:818833252022:web:ad4cdd2eade0bd217c9017"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
