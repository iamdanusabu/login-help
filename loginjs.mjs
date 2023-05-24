import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

      var firebaseConfig = {
    apiKey: "AIzaSyBErGVg1DdXey5MUpiv5gPXkvF6Z-OVFm8",
    authDomain: "dashboard-7a657.firebaseapp.com",
    projectId: "dashboard-7a657",
    storageBucket: "dashboard-7a657.appspot.com",
    messagingSenderId: "340145567804",
    appId: "1:340145567804:web:2706dcee18ba9f9c8a2b39"
      };

      const app = initializeApp(firebaseConfig);
const auth = getAuth();

document.getElementById("signupForm").onsubmit=(e)=>{
  e.preventDefault();
  var email=document.getElementById("email").value;
  var password=document.getElementById("password").value;
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

}