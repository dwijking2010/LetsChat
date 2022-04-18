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
  
  


  function add_room() 
  {
        room_name = document.getElementById("room_name").value;
  
        firebase.database().ref("/").child(room_name).update({
              purpose : "add room name"
        });
            
        localStorage.setItem("room_name", room_name);
        window.location = "Kwitter_page.html";
  }
  
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        //Start code
         console.log("Room_names - " + Room_names);
         row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'> #"+Room_names +"</div><hr>";
         document.getElementById("output").innerHTML += row;
        //End code
        });});}
  getData();
  
  function redirectToRoomName(name)
  {
  
        console.log(name);
        localStorage.setItem("room_name" , name);
        window.location = "kwitter_page.html";
  }
  
  function logout() {
  
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location = "index.html";
  }
  