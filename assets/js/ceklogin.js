import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, onAuthStateChanged,signOut } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "process.env.API_KEY",
    authDomain: "website-1d779.firebaseapp.com",
    databaseURL: "https://website-1d779-default-rtdb.firebaseio.com",
    projectId: "website-1d779",
    storageBucket: "website-1d779.firebasestorage.app",
    messagingSenderId: "451587827423",
    appId: "1:451587827423:web:10d6f707dedff3ae26ab6a",
    measurementId: "G-LNE2ZV9FXZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("sign-Out").addEventListener("click", () => {
    // Fungsi sign out
    signOut(auth).then(() => {
      // Jika sign out berhasil, alihkan ke index.html
      window.location.href = "index.html";
    }).catch((error) => {
      // Jika sign out gagal, tampilkan pesan error
      console.error("Error signing out:", error);
    });
  });
  
        // Cek apakah user sudah login atau tidak
        onAuthStateChanged(auth, (user) => {
            if (!user) {

              window.location.href = "index.html";
             
            } else {
              // Jika user login, tampilkan dashboard.html
              console.log("User  sudah login");
             
            }
          });
      
      



        









