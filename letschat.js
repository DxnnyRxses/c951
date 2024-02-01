function addUser(){
    poop = document.getElementById("user_name").value;
    localStorage.setItem("user_name", poop);
    window.location = "letschat_room.html";
}

function logout(){
    window.location = "index.html";
}
