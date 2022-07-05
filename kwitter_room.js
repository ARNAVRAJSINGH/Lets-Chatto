
var firebaseConfig = {
    apiKey: "AIzaSyA_NZFP6Yr9ydVSXAShkfHUfCGgNSUagc8",
    authDomain: "kwitternew-65977.firebaseapp.com",
    databaseURL: "https://kwitternew-65977-default-rtdb.firebaseio.com",
    projectId: "kwitternew-65977",
    storageBucket: "kwitternew-65977.appspot.com",
    messagingSenderId: "177814601182",
    appId: "1:177814601182:web:29fc203f04c19afd95714f"
};

 firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
        });
    });

}

getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}