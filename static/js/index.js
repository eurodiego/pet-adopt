const urlParams = new URLSearchParams(window.location.search);
const email = urlParams.get("email");
if(email != null && email.trim() !== '' && email != "null") {
    document.querySelector("#registrarse").innerHTML = email;
    document.querySelector("#registrarse").href = "#";
    document.querySelector("#login").innerHTML = "";
    const a = document.createElement("a");
    const i = document.createElement("i");
    const s = document.createElement("span");
    i.setAttribute("class", "fas fa-sign-out-alt");
    s.setAttribute("class", "login-text");
    s.innerHTML = "Cerrar sesión";
    a.appendChild(i);
    a.appendChild(s);
    a.setAttribute("class","btn-pet");
    a.setAttribute("onclick", "logout();");
    document.querySelector("#login").appendChild(a);
    document.getElementsByName("petItem").forEach((element) => element.href = element.href + "&email=" + email);
    document.getElementById("contacto").href += "?email=" + email;
}

function logout() {
    window.location.href = "index.html";
}