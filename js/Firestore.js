// Import Firebase từ CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Config thật của bạn
const firebaseConfig = {
  apiKey: "AIzaSyC-hxA_9rgtx8arZIMkyxt6XBIJyyx8vjc",
  authDomain: "fir-1-f162d.firebaseapp.com",
  projectId: "fir-1-f162d",
  storageBucket: "fir-1-f162d.firebasestorage.app",
  messagingSenderId: "523869317457",
  appId: "1:523869317457:web:5687e4fc503d5981a74b70",
  measurementId: "G-F14LJSFLL8"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);

// Khởi tạo services
const db = getFirestore(app);
const auth = getAuth(app);

// EXPORT để file khác dùng
export { db, auth };