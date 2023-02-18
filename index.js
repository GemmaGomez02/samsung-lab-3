function validarNombre() {
    var nombreInput = document.getElementById("nombre");
    var nombreError = document.getElementById("nombreError");
    var esValido = nombreInput.value.trim().length > 0;
    var regex = /^[a-zA-Z\s]+$/;
    esValido = regex.test(nombreInput.value);
    if (esValido) {
      nombreInput.classList.remove("invalido");
      nombreInput.classList.add("valido");
      nombreError.innerHTML = "";
    } else {
      nombreInput.classList.remove("valido");
      nombreInput.classList.add("invalido");
      nombreError.innerHTML = "El nombre es obligatorio";
    }

    return esValido;
  }

  function validarCorreo() {
    var correoInput = document.getElementById("correo");
    var correoError = document.getElementById("correoError");
    var esValido =
      correoInput.checkValidity() && correoInput.value.trim().length >= 1;
    // var esValido = /\S+@\S+\.\S+/.test(correoInput);

    if (esValido) {
      correoInput.classList.remove("invalido");
      correoInput.classList.add("valido");
      correoError.innerHTML = "";
    } else {
      correoInput.classList.remove("valido");
      correoInput.classList.add("invalido");
      if (correoInput.value.trim().length == 0) {
        correoError.innerHTML = "El correo es obligatorio";
      } else {
        correoError.innerHTML = "El correo no es válido";
      }
    }

    return esValido;
  }

  function validarContrasena() {
    var contrasenaInput = document.getElementById("contrasena");
    var contrasenaError = document.getElementById("contrasenaError");
    var esValido = contrasenaInput.value.trim().length >= 8;
    if (esValido) {
      contrasenaInput.classList.remove("invalido");
      contrasenaInput.classList.add("valido");
      contrasenaError.innerHTML = "";
    } else {
      contrasenaInput.classList.remove("valido");
      contrasenaInput.classList.add("invalido");
      contrasenaError.innerHTML =
        "La contraseña debe tener al menos 8 caracteres";
    }

    return esValido;
  }

  function validarConfirmContrasena() {
    var contrasenaInput = document.getElementById("contrasena");
    var contrasenaConfirmInput =
      document.getElementById("contrasenaConfirm");
    var contrasenaConfirmError = document.getElementById(
      "contrasenaConfirmError"
    );
    var esValido = contrasenaInput.value == contrasenaConfirmInput.value;

    if (esValido) {
      contrasenaConfirmInput.classList.remove("invalido");
      contrasenaConfirmInput.classList.add("valido");
      contrasenaConfirmError.innerHTML = "";
    } else {
      contrasenaConfirmInput.classList.remove("valido");
      contrasenaConfirmInput.classList.add("invalido");
      contrasenaConfirmError.innerHTML = "Las contraseñas deben coincidir";
    }

    return esValido;
  }

  function validarRegistro() {
    var esNombreValido = validarNombre();
    var esCorreoValido = validarCorreo();
    var esContrasenaValida = validarContrasena();
    var validarContrasenaConfirm = validarConfirmContrasena();

    // var esContrasenaConfirmValida = validarConfirmContrasena();
    if (
      esNombreValido &&
      esCorreoValido &&
      esContrasenaValida &&
      validarContrasenaConfirm
    ) {
      alert("registro completado");
    }
    return (
      esNombreValido &&
      esCorreoValido &&
      esContrasenaValida &&
      validarContrasenaConfirm
    );
  }