// MANIPULACION DOM

let parrafo = document.querySelector("#parrafo");
console.log(typeof(parrafo))
console.log(parrafo);
let numero1 = 33;
let numero2 = 44;
let suma = numero1+numero2;
parrafo.innerHTML = "Hola lo agrego desde JAVASCRIPT 😋" + suma;
