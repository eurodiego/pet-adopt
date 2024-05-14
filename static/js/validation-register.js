let btnSend = document.querySelector("#btn-send");

btnSend.addEventListener('click',function(){
    let firstname = document.querySelector("#firstname");
    let lastname = document.querySelector("#lastname");
    let email = document.querySelector("#email");
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let birthdate = document.querySelector("#birthdate");
    let password = document.querySelector("#password");

    if(firstname.value.trim() == '' || firstname.value.trim().length < 3 ) {
        document.querySelector("#error-firstname").innerHTML = "Debe completar el campo Nombre";
    }

    if(lastname.value.trim() == '') {
        document.querySelector("#error-lastname").innerHTML = "Debe completar el campo Apellido";
    }

    if(!emailRegex.test(email.value)) {
        document.querySelector("#error-email").innerHTML = "El email no tiene un formato valido.";
    }

    if(password.value.trim() == '') {
        document.querySelector("#error-password").innerHTML = "Debe completar el campo Contraseña";
    }

    if(birthdate.value.trim() == '') {
        document.querySelector("#error-birthdate").innerHTML = "Debe completar el campo Fecha de nacimiento";
    }
});