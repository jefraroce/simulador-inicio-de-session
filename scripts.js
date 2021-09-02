function mostrarTarjetaBienvenida() {
  var tarjetaInicioDeSesion = document.getElementById('tarjeta-inicio-de-sesion')
  var tarjetaBienvenida = document.getElementById('tarjeta-bienvenida')

  // Ocultamos la tarjeta de inicio de sesion
  tarjetaInicioDeSesion.classList.add('d-none')

  // Volvemos visible la tarjeta de bienvenida
  tarjetaBienvenida.classList.remove('d-none')
}

function iniciarSesion(event) {
  // Cancelamos el envio a otra pagina del formulario
  event.preventDefault()

  // Almacenamos en el local storage el valor del campo email
  var inputEmail = document.getElementById('email')
  var usuario = inputEmail.value
  localStorage.setItem('usuario', usuario)

  // Personalizamos el mensaje de bienvenida
  var tituloBienvenidaUsuario = document.getElementById('usuario')
  tituloBienvenidaUsuario.innerHTML = usuario

  mostrarTarjetaBienvenida()
}

function cerrarSesion(event) {
  var tarjetaInicioDeSesion = document.getElementById('tarjeta-inicio-de-sesion')
  var tarjetaBienvenida = document.getElementById('tarjeta-bienvenida')

  tarjetaBienvenida.classList.add('d-none')

  tarjetaInicioDeSesion.classList.remove('d-none')

  limpiarFormulario()

  // Borramos del local storage el registro del usuario
  localStorage.removeItem('usuario')
}

function limpiarFormulario() {
  var inputEmail = document.getElementById('email')
  var inputContrasena = document.getElementById('contrasena')

  inputEmail.value = ""
  inputContrasena.value = ""
}

function revisarSiYaInicioSesion() {
  var usuario = localStorage.getItem('usuario')

  if (usuario !== null) {
    mostrarTarjetaBienvenida()
  }
}

revisarSiYaInicioSesion()
