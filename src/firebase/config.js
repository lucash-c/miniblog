import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAoBam08LIfldhmv3MCw2iCtlrKS8rW-tg",
  authDomain: "miniblog-1073f.firebaseapp.com",
  projectId: "miniblog-1073f",
  storageBucket: "miniblog-1073f.appspot.com",
  messagingSenderId: "396035488725",
  appId: "1:396035488725:web:b95c8a6dcd8a55cbf0db5c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };