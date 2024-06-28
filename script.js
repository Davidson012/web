function validarNombre() {
  var nombre = document.getElementById("name");
  var regex = /^[A-Za-z\s]+$/;
  if (!regex.test(nombre.value.trim())) {
    nombre.setCustomValidity("El nombre solo debe contener letras y espacios.");
  } else {
    nombre.setCustomValidity("");
  }
}

function validarApellido() {
  var apellido = document.getElementById("surname");
  var regex = /^[A-Za-z\s]+$/;
  if (!regex.test(apellido.value.trim())) {
    apellido.setCustomValidity(
      "El apellido solo debe contener letras y espacios."
    );
  } else {
    apellido.setCustomValidity("");
  }
}

function validarNombreUsuario() {
  var usuario = document.getElementById("nameuser");
  var regex = /^[A-Za-z0-9]+$/;
  if (!regex.test(usuario.value.trim())) {
    usuario.setCustomValidity(
      "El nombre de usuario solo debe contener letras y números."
    );
  } else {
    usuario.setCustomValidity("");
  }
}

function validarEdad() {
  var edad = document.getElementById("age");
  if (isNaN(edad.value.trim()) || parseInt(edad.value.trim()) <= 15) {
    edad.setCustomValidity("La edad ser mayor a 15 ");
  } else {
    edad.setCustomValidity("");
  }
}

function validarGenero() {
  var genero = document.getElementById("genre");
  if (genero.value === "") {
    genero.setCustomValidity("Por favor seleccione un género.");
  } else {
    genero.setCustomValidity("");
  }
}

function validarEmail() {
  var email = document.getElementById("email");
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email.value.trim())) {
    email.setCustomValidity("Por favor ingrese un formato válido de email.");
  } else {
    email.setCustomValidity("");
  }
}

function validarTelefono() {
  var telefono = document.getElementById("telf");
  var regex = /^\d+$/;
  if (!regex.test(telefono.value.trim())) {
    telefono.setCustomValidity("El teléfono solo debe contener números.");
  } else {
    telefono.setCustomValidity("");
  }
}

function validarContrasena() {
  var contrasena = document.getElementById("pass");
  if (contrasena.value.trim().length < 8) {
    contrasena.setCustomValidity(
      "La contraseña debe tener al menos 8 caracteres."
    );
  } else {
    contrasena.setCustomValidity("");
  }
}

function validarRepetirContrasena() {
  var contrasena = document.getElementById("pass");
  var repetirContrasena = document.getElementById("repeatpass");
  if (contrasena.value.trim() !== repetirContrasena.value.trim()) {
    repetirContrasena.setCustomValidity("Las contraseñas deben coincidir.");
  } else {
    repetirContrasena.setCustomValidity("");
  }
}

function validarTerminos() {
  var terminos = document.getElementById("term");
  if (!terminos.checked) {
    terminos.setCustomValidity("Debe aceptar los términos y condiciones.");
  } else {
    terminos.setCustomValidity("");
  }
}

document.getElementById("name").addEventListener("input", validarNombre);
document.getElementById("surname").addEventListener("input", validarApellido);
document
  .getElementById("nameuser")
  .addEventListener("input", validarNombreUsuario);
document.getElementById("age").addEventListener("input", validarEdad);
document.getElementById("genre").addEventListener("change", validarGenero);
document.getElementById("email").addEventListener("input", validarEmail);
document.getElementById("telf").addEventListener("input", validarTelefono);
document.getElementById("pass").addEventListener("input", validarContrasena);
document
  .getElementById("repeatpass")
  .addEventListener("input", validarRepetirContrasena);
document.getElementById("term").addEventListener("change", validarTerminos);

function validarFormulario() {
  var nombre = document.getElementById("name").value;
  var apellido = document.getElementById("surname").value;
  var usuario = document.getElementById("nameuser").value;
  var edad = document.getElementById("age").value;
  var genero = document.getElementById("genre").value;
  var email = document.getElementById("email").value;
  var telefono = document.getElementById("telf").value;

  console.log("Datos del formulario:");
  console.log("Nombre:", nombre);
  console.log("Apellido:", apellido);
  console.log("Usuario:", usuario);
  console.log("Edad:", edad);
  console.log("Género:", genero);
  console.log("Email:", email);
  console.log("Teléfono:", telefono);
  document.getElementById("form").reset();

  return false;
}
