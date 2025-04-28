import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBX422jzTqH-zHufidDsbDUfx0USgkNvGk",
  authDomain: "abdul-latif-30eb0.firebaseapp.com",
  projectId: "abdul-latif-30eb0",
  storageBucket: "abdul-latif-30eb0.firebasestorage.app",
  messagingSenderId: "84187616371",
  appId: "1:84187616371:web:c1b25857234824f0138606",
  measurementId: "G-G54GZN3DHS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
