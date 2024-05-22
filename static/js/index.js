const urlParams = new URLSearchParams(window.location.search);
const email = urlParams.get("email");
if(email != null && email.trim() !== '' && email != "null") {
    document.querySelector("#registrarse").innerHTML = email;
    document.querySelector("#registrarse").href = "#";
    document.querySelector("#login").innerHTML = "";
    document.getElementsByName("petItem").forEach((element) => element.href = element.href + "&email=" + email);
    document.getElementById("contacto").href += "?email=" + email;
}