// Firebase.js

// Import Firebase (v10 modular)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

import { 
  getAuth 
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

import { 
  getDatabase 
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";


const firebaseConfig = {
  apiKey: "AIzaSyC-hxA_9rgtx8arZIMkyxt6XBIJyyx8vjc",
  authDomain: "fir-1-f162d.firebaseapp.com",
  projectId: "fir-1-f162d",
  storageBucket: "fir-1-f162d.appspot.com", // 
  messagingSenderId: "523869317457",
  appId: "1:523869317457:web:5687e4fc503d5981a74b70",
  measurementId: "G-F14LJSFLL8"
};

const app = initializeApp(firebaseConfig);

// Export dùng toàn site
export const auth = getAuth(app);
export const db = getDatabase(app);