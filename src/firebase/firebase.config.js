// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAO5lpcXTAqLAz-tt9HwCn8Qhu71-7qdo0",
  authDomain: "insightive-analytics.firebaseapp.com",
  projectId: "insightive-analytics",
  storageBucket: "insightive-analytics.firebasestorage.app",
  messagingSenderId: "96086451137",
  appId: "1:96086451137:web:7a8b7acf3427e1bff04540",
  measurementId: "G-BM1C2EH3Z2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;