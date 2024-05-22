const urlParams = new URLSearchParams(window.location.search);
const email = urlParams.get("email");

let btnSend = document.querySelector("#btn-send");

btnSend.addEventListener('click',function(e) {
    e.preventDefault();
    let firstname = document.querySelector("#firstname");
    let email_send = document.querySelector("#email-send");
    let asunto = document.querySelector("#asunto");
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let exito = true;

    if(firstname.value.trim() == '' || firstname.value.trim().length < 2 ) {
        document.querySelector("#error-firstname").innerHTML = "Debe completar el campo Nombre";
        exito = false;
    } else {
        document.querySelector("#error-firstname").innerHTML = "";
    }

    if(!emailRegex.test(email_send.value)) {
        document.querySelector("#error-email-send").innerHTML = "El email no tiene un formato valido.";
        exito = false;
    } else {
        document.querySelector("#error-email-send").innerHTML = "";
    }

    if(asunto.value.trim() == '' || asunto.value.trim().length < 2 ) {
        document.querySelector("#error-asunto").innerHTML = "Debe completar el campo Asunto";
        exito = false;
    } else {
        document.querySelector("#error-asunto").innerHTML = "";
    }

    if(exito) {
        setTimeout(succ, 1500);
        document.querySelector("#btn-send").innerHTML = "Enviando  <i class='fas fa-spinner fa-spin'></i>"
    }
});

function succ() {
    document.querySelector("#success").innerHTML = "Datos enviados con éxito!";
    document.querySelector("#btn-send").innerHTML = "Enviado"
    document.querySelector("#btn-send").disabled = true;
    setTimeout(irAHome, 2500);
}

function irAHome() {
    window.location.href = "index.html?email=" + email;
}

function irAHome() {
    window.location.href = "index.html?email=" + email;
}