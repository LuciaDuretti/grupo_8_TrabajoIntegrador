console.log(document.querySelector('form'));

let formulario = document.querySelector ('form');

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    /*let name = document.getElementById('name').value;

    let email = document.getElementById('email').value;
  
    if (name == ''|| email == ''){


        document.querySelector('p').innerHTML = "Ingrese los datos pedidos";

}*/


let name = document.getElementById ('name');
let apellido =  document.getElementById ('apellido');
let edad = document.getElementById ('edad');
let tel =  document.getElementById ('tel');
let email =  document.getElementById ('email');

let provincia = document.getElementById ('provincia');

let nameHelp = document.getElementById ('nameHelp');
let apellidoHelp = document.getElementById ('apellidoHelp');
let edadHelp = document.getElementById ('edadHelp');
let telHelp = document.getElementById ('telHelp');
let emailHelp = document.getElementById ('emailHelp');

let provinciaHelp = document.getElementById ('provinciaHelp');

if (name.value == '') {

    nameHelp.innerHTML = "Ingrese los datos pedidos del nombre";
    nameHelp.classList.add ('error');

}else{
    nameHelp.innerHTML = '';
    nameHelp.classList.remove ('error');
}

if (apellido.value == '') {

    apellidoHelp.innerHTML = "Ingrese los datos pedidos del apellido";
    apellidoHelp.classList.add ('error');

}else{
    apellidoHelp.innerHTML = '';
    apellidoHelp.classList.remove ('error');
}

if (edad.value == '') {

    edadHelp.innerHTML = "Ingrese los datos pedidos de la edad";
    edadHelp.classList.add ('error');

}else{
    edadHelp.innerHTML = '';
    edadHelp.classList.remove ('error');
}

if (tel.value == '') {

    telHelp.innerHTML = "Ingrese los datos pedidos del teléfono";
    telHelp.classList.add ('error');

}else{
    telHelp.innerHTML = '';
    telHelp.classList.remove ('error');
}

if (email.value == '') {

    emailHelp.innerHTML = "Ingrese los datos pedidos del email";
    emailHelp.classList.add ('error');

}else{
    emailHelp.innerHTML = '';
    emailHelp.classList.remove ('error');
}

if (provincia.value == '') {

    provinciaHelp.innerHTML = "Ingrese los datos pedidos de la provincia";
    provinciaHelp.classList.add ('error');

}else{
    provinciaHelp.innerHTML = '';
    provinciaHelp.classList.remove ('error');
}

if (name.value != '' && email.value != '' ){

    window.location.href = 'mostrar.html';
}

});


