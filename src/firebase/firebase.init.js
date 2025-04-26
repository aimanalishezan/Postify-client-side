// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAC1B0sQVK42lIUIZAPNFQ8o66Hqg6zJyg",
  authDomain: "my-agent-c447e.firebaseapp.com",
  projectId: "my-agent-c447e",
  storageBucket: "my-agent-c447e.firebasestorage.app",
  messagingSenderId: "928977829564",
  appId: "1:928977829564:web:601e2e1e3ffd90e7401ab9",
  measurementId: "G-F0QMMMN5HZ"
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
