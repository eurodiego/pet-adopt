let btnSend = document.querySelector("#btn-send");

btnSend.addEventListener('click',function(e) {
    e.preventDefault();
    let email = document.querySelector("#email");
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let password = document.querySelector("#password");
    let exito = true;

    if(!emailRegex.test(email.value)) {
        document.querySelector("#error-email").innerHTML = "El email no tiene un formato valido.";
        exito = false;
    } else {
        document.querySelector("#error-email").innerHTML = "";
    }

    if(password.value.trim() == '') {
        document.querySelector("#error-password").innerHTML = "Debe completar el campo Contraseña";
        exito = false;
    } else {
        document.querySelector("#error-password").innerHTML = "";
    }

    if(exito) {
        setTimeout(succ, 1500);
        document.querySelector("#btn-send").innerHTML = "Ingresando  <i class='fas fa-spinner fa-spin'></i>"
    }
});

function succ() {
    document.querySelector("#success").innerHTML = "Ingreso exitoso!";
    document.querySelector("#btn-send").innerHTML = "Validado"
    document.querySelector("#btn-send").disabled = true;
    setTimeout(irAHome, 2500);
}

function irAHome() {
    window.location.href = "index.html?email=" + document.querySelector("#email").value;
}