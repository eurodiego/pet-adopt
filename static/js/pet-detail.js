const perrosJsonArray = [{"Nombre":"Renzo","Edad":"1 año y medio","Sexo":"macho","Tamaño":"Mediano","Info":"Fue rescatado junto con sus hermanitos, eran 6 cachorros en total. Adoptaron 3 y quedan 3 esperando una familia. Ya está castrado. Si te enamoraste de él, comunicate con nosotros."},{"Nombre":"Blondi","Edad":"1 año y medio","Sexo":"hembra","Tamaño":"Mediano","Info":"Hermanita de renzo. Ya está castrada. Si te enamoraste de ella, comunicate con nosotros."},{"Nombre":"La negra","Edad":"2 años","Sexo":"hembra","Tamaño":"Grande","Info":"Fue rescatada embarazada y se dieron en adopción a todos sus cachorros. Ya está castrada. Si te enamoraste de ella, comunicate con nosotros."},{"Nombre":"Fait","Edad":"1 año y medio","Sexo":"macho","Tamaño":"Mediano","Info":"Fue atropellado y ya está perfecto para conseguir un hogar. Es súper cariñoso y guardián. Ya está castrado. Si te enamoraste de él, comunicate con nosotros."},{"Nombre":"Roque","Edad":"4 años","Sexo":"macho","Tamaño":"Mediano","Info":"Fue rescatado en la autopista. Es un perrito sumamente dulce. Ya está castrado. Si te enamoraste de él, comunicate con nosotros."},{"Nombre":"Julieta","Edad":"2 años","Sexo":"hembra.","Tamaño":"Mediano","Info":"Fue rescata en Moreno. Es una dulce de leche. Ya está castrada. Si te enamoraste de ella, comunicate con nosotros."},{"Nombre":"Toni","Edad":"3 años","Sexo":"macho","Tamaño":"Mediano","Info":"El chiquitín que se hace el grande y es súper compañero. Ya está castrado. Si te enamoraste de él, comunicate con nosotros."},{"Nombre":"Pedrito","Edad":"2 años","Sexo":"macho","Tamaño":"Grande","Info":"Es una especie de salchicha trucho. Ya está castrado. Si te enamoraste de él, comunicate con nosotros."},{"Nombre":"Roqui","Edad":"4 años","Sexo":"macho","Tamaño":"Grande","Info":"Cruza de labrador con pitbull. Es súper guardián y mimoso. Ya está castrado. Si te enamoraste de él, comunicate con nosotros."},{"Nombre":"Tomi","Edad":"6 años","Sexo":"macho","Tamaño":"Mediano","Info":"Mestizo de galgo. Es tímido y compañero. Ya está castrado. Si te enamoraste de él, comunicate con nosotros."},{"Nombre":"Miel","Edad":"7 años","Sexo":"hembra","Tamaño":"Mediano","Info":"Mestiza de galgo. Es súper guardiana. Ya está castrada. Si te enamoraste de ella, comunicate con nosotros."},{"Nombre":"Doby","Edad":"4 años","Sexo":"macho","Tamaño":"Mediano","Info":"Mestizo de snauzer gigante. Es mimoso, compañero y guardián. Fue rescatado atado en una puerta con la cara comida por los gusanos, como secuela le quedó un pequeño orificio en la nariz que no cerró. Ahora está hermoso y listo para encontrar su nuevo hogar, pero lamentablemente, por ese defecto muchos lo descartan. Si te enamoraste de él, comunicate con nosotros."}];
const urlParams = new URLSearchParams(window.location.search);
const email = urlParams.get("email");
const nom = urlParams.get("nombre");

console.log(email);
console.log(nom);

if(email != null && email.trim() !== '') {
    document.querySelector("#registrarse").innerHTML = email;
    document.querySelector("#registrarse").href = "#";
    document.querySelector("#login").innerHTML = "";
}
if(nom != null && nom.trim() !== '') {
    document.querySelector("#nombre1").innerHTML = nom;
    document.querySelector("#nombre2").innerHTML = nom;
    document.querySelector("#edad").innerHTML = perrosJsonArray.find(item => item.Nombre === nom).Edad;
    document.querySelector("#sexo").innerHTML = perrosJsonArray.find(item => item.Nombre === nom).Sexo;
    document.querySelector("#tamanio").innerHTML = perrosJsonArray.find(item => item.Nombre === nom).Tamaño;
    document.querySelector("#info").innerHTML = perrosJsonArray.find(item => item.Nombre === nom).Info;
    document.querySelector("#foto").src = "static/img/" + nom + ".jpg";
}

function irAHome() {
    window.location.href = "index.html?email=" + document.querySelector("#registrarse").innerHTML;
}