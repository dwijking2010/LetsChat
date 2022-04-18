// Your web app's Firebase configuration
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyA-Hv9_qQ4aGDLNPi6mwneakUPjGcOKcXM",
    authDomain: "lets-chat-ada2a.firebaseapp.com",
    databaseURL: "https://lets-chat-ada2a-default-rtdb.firebaseio.com",
    projectId: "lets-chat-ada2a",
    storageBucket: "lets-chat-ada2a.appspot.com",
    messagingSenderId: "593871013325",
    appId: "1:593871013325:web:3902b940287bccba4e3084"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send() {

    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });

    document.getElementById("msg").value = "";
}





function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
