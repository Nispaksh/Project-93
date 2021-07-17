var firebaseConfig = {
    apiKey: "AIzaSyAC8IbRqBJsHcDA24OvPxfoOSB-hro6pn8",
    authDomain: "project-93-3a554.firebaseapp.com",
    projectId: "project-93-3a554",
    storageBucket: "project-93-3a554.appspot.com",
    messagingSenderId: "527142694465",
    appId: "1:527142694465:web:1b2ecc9b101ae9224da0c0",
    measurementId: "G-NBRLD8SW4L"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();