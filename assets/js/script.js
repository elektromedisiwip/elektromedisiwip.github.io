import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";

import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDRaN-pGdkrZSy0CwX3kgO6V5kX-xKPzP8",
    authDomain: "website-1d779.firebaseapp.com",
    databaseURL: "https://website-1d779-default-rtdb.firebaseio.com",
    projectId: "website-1d779",
    storageBucket: "website-1d779.firebasestorage.app",
    messagingSenderId: "451587827423",
    appId: "1:451587827423:web:10d6f707dedff3ae26ab6a",
    measurementId: "G-LNE2ZV9FXZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const login = document.getElementById('btn-login');
login.addEventListener("click",function(event) {
  event.preventDefault()

  //input
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if(email && password) {
    signInWithEmailAndPassword(auth,email,password)
      .then ((userCredential) => {
        const user = userCredential.user;
        alert("berhasil login")
        window.location.href = "dashboard.html";

      })
      .catch ((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
      });
  } else {
    alert("Silakan isi email dan password")
  }
})
