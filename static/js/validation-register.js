let btnSend = document.querySelector("#btn-send");

btnSend.addEventListener('click',function(e) {
    e.preventDefault();
    let firstname = document.querySelector("#firstname");
    let lastname = document.querySelector("#lastname");
    let email = document.querySelector("#email");
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let birthdate = document.querySelector("#birthdate");
    let password = document.querySelector("#password");
    let exito = true;

    if(firstname.value.trim() == '' || firstname.value.trim().length < 2 ) {
        document.querySelector("#error-firstname").innerHTML = "Debe completar el campo Nombre";
        exito = false;
    } else {
        document.querySelector("#error-firstname").innerHTML = "";
    }

    if(lastname.value.trim() == '' || lastname.value.trim().length < 2 ) {
        document.querySelector("#error-lastname").innerHTML = "Debe completar el campo Apellido";
        exito = false;
    } else {
        document.querySelector("#error-lastname").innerHTML = "";
    }

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

    if(birthdate.value.trim() == '') {
        document.querySelector("#error-birthdate").innerHTML = "Debe completar este campo";
        exito = false;
    } else {
        document.querySelector("#error-birthdate").innerHTML = "";
    }

    if(exito) {
        setTimeout(succ, 1500);
        document.querySelector("#btn-send").innerHTML = "Registrando  <i class='fas fa-spinner fa-spin'></i>"
    }
});

function succ() {
    document.querySelector("#success").innerHTML = "Datos enviados con éxito!";
    document.querySelector("#btn-send").innerHTML = "Registrado"
    document.querySelector("#btn-send").disabled = true;
    setTimeout(irAHome, 2500);
}

function irAHome() {
    window.location.href = "index.html?email=" + document.querySelector("#email").value;
}