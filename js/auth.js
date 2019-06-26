const registerForm = document.querySelector('#registerForm');
registerForm.addEventListener('submit', (e) => {
   e.preventDefault();

let email = registerForm['emailInput'].value;
let password = registerForm['password'].value;

auth.createUserWithEmailAndPassword(email, password).then(cred => {
   console.log(cred)
 })

})

let firebaseAppDefined = false

setInterval(() => {
  if (!firebaseAppDefined) {
    if (firebase.app()) {
      // Your code here

      firebaseAppDefined = true
    }
  }
}, 100)
var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().languageCode = 'pt';
// To apply the default browser preference instead of explicitly setting it.
// firebase.auth().useDeviceLanguage();
firebase.auth().getRedirectResult().then(function(result) {
    if (result.credential) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      console.log("it worked!");
      
      // ...
    }
    // The signed-in user info.
    var user = result.user;
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });