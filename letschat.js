
// Your web app's Firebase configuration
var firebaseConfig = {
    databaseURL: "https://letschat-9932e-default-rtdb.firebaseio.com",
    apiKey: "AIzaSyBPK_ei4Ys1ZAN_zJgMP1A9jZnwrTtpVjA",
    authDomain: "letschat-9932e.firebaseapp.com",
    projectId: "letschat-9932e",
    storageBucket: "letschat-9932e.appspot.com",
    messagingSenderId: "371382992067",
    appId: "1:371382992067:web:67dd7e8837cea7a1f07676"
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser() {
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });

    window.location = "letschat_room/letschat_room.html";
}
